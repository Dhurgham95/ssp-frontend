<template> 
    <div>  

     

      <div> 
        <v-card>
           <v-card-title>
        مجموعة الفاتورات
      <v-spacer></v-spacer>
      <v-text-field
        v-model="billSearch"
        append-icon="mdi-magnify"
        label="بحث"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
     
     <v-data-table 
     id="InsuranceTable"
    :headers="billsHeader"
    :items="bills"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="billSeq"
    show-expand
    :search="billSearch"
    class="elevation-1" 
    @item-expanded="loadPayDetails"
  >
    <!-- <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Expandable Table</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-switch
          v-model="singleExpand"
          label="Single expand"
          class="mt-2"
        ></v-switch>
      </v-toolbar>
    </template> -->
    <template v-slot:expanded-item="{ headers}"> 
     <td :colspan="headers.length">
      <v-simple-table dark dense class="vtabledeatials">
    <template v-slot:default>
      <thead>
        <tr> 
          <th class="text-center">
            #
          </th>
          <th class="text-center">
            تاريخ القسط
          </th>
          <th class="text-center">
            مقدار القسط
          </th> 
           <th class="text-center">
            حالة القسط
          </th> 

        </tr>
      </thead>
      <tbody>
        <tr 
         v-for="i in partialPay"
          :key="i.num"
         
        >
          <td class="text-center">{{ i.num }}</td>
           <td class="text-center"> {{ i.partialPayDate }}</td>  
          <td class="text-center"> {{ i.partialPayAmount }}</td>  
          <td class="text-center"> {{ i.partialPayStatus }}</td>  

        </tr>
      </tbody>
    </template>
  </v-simple-table> 
     </td>
      <!-- <td :colspan="headers.length"> 
      
  
        
    
      </td> -->
    </template>


  </v-data-table>   
        </v-card>
      </div>
    </div>
</template> 


<script>
import axios from 'axios'
 export default {
    data () {
      return {
        expanded: [], 
        billSearch : '',
        user: JSON.parse(localStorage.getItem('user')), 
        singleExpand: false,
        billsHeader: [
          {
            text: 'رقم الفاتورة',
            align: 'start',
            sortable: false,
            value: 'billSeq',
          },
          { text: 'اسم الزبون', value: 'customerNameForBill' },
          { text: 'القسط الشهري', value: 'monthlyPayAmt' },
          {text: "عدد الاقساط", value: 'payCountForBill'},
          // { text: 'تاريخ اول قسط', value: 'carbs' },
          // { text: 'تاريخ اخر قسط', value: 'protein' },
          { text: 'الحالة', value: 'billStatus' },
          { text: '', value: 'data-table-expand' },
        ],
        bills: [], 
        partialPay : [],
      }
    }, 

    methods : {
      getAllBillsForMerchant() {
        axios.post('http://172.31.71.71:5000/Api/Bill/GetAllBillsMerchant', { 
    
          AcctNum : this.user.accountNumber
        }).then( response => {
          console.log(response); 
          this.bills = response.data
        }).catch(err => {
          console.log(err)
        })
      }, 

      loadPayDetails({item}) {
        axios.post('http://172.31.71.71:5000/Api/Bill/GetPartialPayByBillSeq', { 
     
        //  AcctNum : "236862311415252"
        AcctNum : item.billSeq
        }).then (response => {
          console.log(response); 
          this.partialPay = response.data
        }).catch(err => {
          console.log(err)
        })
      }
    }, 
    created () {
      this.getAllBillsForMerchant(); 
     // this.getPartialPayByBillSeq();
    }
 


  }
</script> 


<style> 



</style>