<template> 
     <div>
    <div class="insuzz" id="insuzz" style="width:210mm; height: 297mm">  
      <div class="headerI">وثيقة التامين</div> 
      <div class="totOneBlock">
        <v-row no-gutters>
          <v-col>
            <div class="upperCell" style="padding-right: 60px;">رقم الوثيقة</div>
            <div class="lowwerCell" style="padding-right: 30px;">{{this.printedItemDocSeq}}</div>
          </v-col> 
              <v-col>
            <div class="upperCell" style="padding-right: 35px;">مبلغ القرض بالدينار</div>
            <div class="lowwerCell" style="padding-right: 60px;">{{this.printedItemAmt}}</div>
          </v-col> 
          <v-col>
            <div class="periodH">مدة التامين</div>
          </v-col> 

            <v-col> 
            <div class="lastCell">
            <div> من <span>{{this.printedItemStartDate}}</span></div> 
            <div> الى <span>{{this.printedItemEndDate}}</span></div> 
            </div>
          </v-col>
        </v-row>  
      </div> 
      <div class="secondBlock">

        <v-row no-gutters >
          <v-col> 
            <div class="seccol1">
            <div>اسم المؤمن له : <span>المصرف الدولي الاسلامي</span></div> 
            <div>عنوان المصرف المؤمن له : <span>بغداد العرصات </span> </div> 
            <div>المستفيد : <span>المصرف الدولي الاسلامي</span></div>
            </div>
          </v-col> 
          <v-col> 
            <div class="seccol2">
            <div>اسم المقترض : <span>زهراء علي </span></div> 
            
            <div>سعر التأمين : <span> 3% </span></div>
            </div>
          </v-col>

        </v-row>
      </div>  
      <div class="lastB" >
      <div > 
        <div>مبلغ القرض بالدينار</div> 
        <div><span>{{printedItemAmt}}</span></div> 
        <div>القسط المستحق بالدينار</div> 
         <div>{{printedItemMonthlyPay}}</div> 
        <div style="font-weight:bold;">حدود مسوؤلية الشركة / </div> 
        <div style="margin-right:15px; color: black; font-sizer:22px;font-weight:bold;">
        <ol type="1">
          <li>من المعلن و المتفق عليه فأنه بالأضافة لما جاء في شروط و أحكام و أستثنائات هذه الوثيقة فانها تغطي جميع الاعمال الارهابية و عدم التسديد لأي سبب كان .</li> 
          <li>تتحدد مسوؤلية الشركة بمقدار مبلغ القرض المتبقي بذمتة المقترض</li> 
          <li>على الشمؤمن له تقديم جميع المستندات الصحيحة و الحقيقية الخاصة بأستحقاق التعويض و بخلافه تكون الشركة غير مسؤولة قانونيا عن اية التزامات . </li> 
          <li>عند تحقق حالة التعويض فعلى المؤمن له تقديم كلفة الوثائق الخاصة بالقرض كسندات العقار و الكفالات و غيرها. </li>
        </ol> 
        </div>
       
      </div> 

      <div class="lastBlock"> 
        <div style="margin-left: 50px;" >عن شركة اليمامة للتأمين</div>
        <div style="margin-left: 110px;">المدير المفوض</div>
        <div style="margin-left: 85px;">طارق خليل ابراهيم</div>
      </div> 
      </div>
      
    </div> 

     <!-- <v-dialog v-model="alertN2" width="400">
       <v-card > 
         <v-card-text>
          <v-text-field v-model="notes" label="ملاحظات">

          </v-text-field> 
          
         </v-card-text> 
         <v-card-actions>
            <v-btn color="blue" @click="closeA">ارسال</v-btn>
         </v-card-actions>
        </v-card>
     </v-dialog> -->
    <div id="tableins"> 
  
    
     <v-data-table
    :headers="billsHeader"
    :items="bills"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="billSeq"
    show-expand
    :search="billSearch"
    class="elevation-1" 
    @item-expanded="loadDetails"
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
    
    

     <!-- <template v-slot:[`item.actions`]="{ item }">    -->
           <!-- <v-dialog width="300" v-model="attachDoc"> 
        <v-card>
          <v-card-title>يرجى ارفاق وثيقة التامين : </v-card-title> 
          <v-card-text>
                 <v-file-input
            show-size 
            chips
      flat
      v-model="InsuranceDoc"
      label="وثيقة التامين" 
   
    ></v-file-input>
          </v-card-text>
          <v-card-actions>
            <v-btn text blue 
             @click="attachInsuranceToBill(item)"
            >ارفاق</v-btn>
          </v-card-actions>
        </v-card> 


      </v-dialog> -->

      

       
<!-- 
      <v-icon
        
        class="mr-2"
        @click="attach(item)"
        color="orange"
      >
        mdi-paperclip
      </v-icon> -->
      <!-- <v-icon
        
        @click="reject(item)"
        color="red"
      >
        mdi-close-circle-outline
      </v-icon> -->
    <!-- </template>  -->

    

    <template v-slot:expanded-item="{ headers, item }"> 
     <td :colspan="headers.length"> 

       <v-row>
         <v-col cols="1">رقم الفاتورة : </v-col>
         <v-col cols="5">
           <div>{{item.billSeq}}</div>
         </v-col>
       </v-row> 
       <v-row>
          <v-col cols="1">تاريخ الفاتورة : </v-col>
         <v-col cols="5">
           <div>{{item.billDate}}</div>
         </v-col>
       </v-row> 
       <v-row>
         <v-col cols="1" >اسم الشركة : </v-col>
         <v-col cols="3">
           <div>{{item.merchantBussinessName}}</div>
         </v-col> 

           <v-col cols="1" > اسم التاجر: </v-col>
         <v-col cols="3">
           <div>{{item.merchantNameForBill}}</div>
         </v-col>

           <v-col cols="1" >رقم حساب التاجر:</v-col>
           <v-col cols="3">
           <div>{{item.merchantAcctNumForBill}}</div>
         </v-col>
       </v-row> 
       <v-row>
         <v-col cols="1">
           اسم الزبون : 
         </v-col> 
         <v-col cols="5">
           <div>{{item.customerNameForBill}}</div>
         </v-col> 
         <v-col cols="1">
          حساب الزبون:
         </v-col>
         <v-col cols="5">
           <div>{{item.customerAcctNumForBill}}</div>
         </v-col>
       </v-row> 
       <v-row>
         <v-col cols="2">
           تاريخ اول قسط : 
         </v-col>
         <v-col cols="4">
          <div>
            {{item.startPayDateForBill}}
          </div> 
         </v-col>
           <v-col cols="2">
             تاريخ اخر قسط : 
           </v-col> 
           <v-col cols="4">
             <div>
             {{item.endPayDateForBill}}
             </div>
             </v-col>
         </v-row>

       
   
      <!-- <v-simple-table dark dense class="vtabledeatials">
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
  </v-simple-table>  --> 
    
     </td>
      <!-- <td :colspan="headers.length"> 
      
  
        
    
      </td> -->
    </template>


  </v-data-table>  
  </div>
  </div>
</template> 


<script>
import axios from 'axios'
 export default {
    data () {
      return {
        expanded: [],  
        attachDoc : false, 
        InsuranceDoc : null,
        printedItemDocSeq : '', 
        printedItemAmt : 0, 
        printedItemStartDate : '', 
        printedItemEndDate : '', 
        printedItemMonthlyPay : 0, 
        // alertN2 : false, 
        // notes : '',


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
          { text: 'اسم الشركة ', value: 'merchantBussinessName' }, 
          // {text: '', value: 'startPayDateForBill' ,  align: ' d-sm-none d-cols-none d-xl-none d-xl-none', sortable: false},
          { text: 'القسط الشهري', value: 'monthlyPayAmt' },
          {text: "عدد الاقساط", value: 'payCountForBill'}, 
          // { text: 'تاريخ اول قسط', value: 'carbs' },
          // { text: 'تاريخ اخر قسط', value: 'protein' },
        //   { text: 'الحالة', value: 'billStatus' },
       //  { text: 'ارفاق تامين', value: 'actions', sortable: false },
          { text: '', value: 'data-table-expand' },
        ],
        bills: [], 
        billDetails : [], 
       // notes : ''
      }
    }, 

    methods : {
      getAllBillsForMerchant() {
        axios.get('http://172.31.71.71:5000/Api/Bill/GetInsuranceBills', {
         // AcctNum : this.user.accountNumber
        }).then( response => {
          console.log(response); 
          this.bills = response.data
        }).catch(err => {
          console.log(err)
        })
      },  

      // closeA ()  {
      //   this.alertN2 = false
      // },

      // loadPayDetails({item}) {
      //   axios.post('http://172.31.71.71:5000/Api/Bill/GetPartialPayByBillSeq', {
      //   //  AcctNum : "236862311415252"
      //   AcctNum : item.billSeq
      //   }).then (response => {
      //     console.log(response); 
      //     this.partialPay = response.data
      //   }).catch(err => {
      //     console.log(err)
      //   })
      // } 


      
      loadDetails({item}) {
        axios.post('http://172.31.71.71:5000/Api/Bill/GetBillDetails', {
        //  AcctNum : "236862311415252"
        AcctNum : item.billSeq
        }).then (response => {
          console.log(response); 
          this.billDetails = response.data
        }).catch(err => {
          console.log(err)
        })
      } , 
      attach(item) {   
        console.log(item.billSeq) 
        this.attachDoc = true
        

      
      }, 
       
    //    attachInsuranceToBill (item) { 
    //      console.log(item.billSeq) 
    //            let fromData = new FormData(); 
    //            fromData.append('BillDoc2', this.InsuranceDoc) ; 
    //            fromData.append('BillSeq', item.billSeq) ; 
               
    //            axios.post('http://172.31.71.71:5000/Api/Bill/attachInsuranceDoc', 
    //              fromData, 
    //               {
    //         headers: {
    //            'Content-Type': 'multipart/form-data'
    //          }
   
              
    //            }).then(response => {
    //              console.log(response)
    //            })


      
    // } , 

 
    }, 
    created () {
      this.getAllBillsForMerchant(); 
     // this.getPartialPayByBillSeq();
    }
 


  }
</script> 


<style> 


@media print {
  #tableins {display: none;} 
     #appbar {display: none;}  
    #drawer0  {display: none !important;}  
    /* #drawer0 * {display: none !important;} */
    #toolbar {display: none;} 
   #card0 {display: none;} 

     #insuzz {
  
      z-index: 0;
     -webkit-print-color-adjust: exact !important; 
   
   }  
   .headerI {
     display: flex;
     flex-direction: row;
     justify-content: center; 
     text-decoration: underline; 
     font-weight: bold;
     font-size:2rem;
   }  

   .upperCell { 
    
     border-width: 1px; 
     border-color: black; 
     border-style: solid; 
     border-bottom: none; 
     border-left: none; 
     font-size:20px; 
     height: 35px;
 
     
   
     
     
   }  
   .lowwerCell{ 
      border-width: 1px; 
     border-color: black; 
     border-style: solid; 
     border-left: none; 
     font-size:20px; 
     height: 35px;
  
    

   } 
   .lastCell {
     border-width: 1px;
     border-color: black;
     border-style: solid; 
     height: 51px; 
     font-size:20px; 
     height: 70px; 
     padding-right: 15px;
    
   }

   .periodH { 
    border-width: 1px;
     border-style: solid;
     border-color: black;
     height: 70px;
     padding-top: 20px;
     padding-right: 70px; 
     border-left: none; 
     font-size:20px;
      

   } 
   .secondBlock {
     margin-top: 5%; 
   
   } 
   .seccol1 { 
     border-width: 1px;
     border-style: solid;
     border-color: black; 
     font-size: 20px; 
     height: 100px; 
     padding-right: 20px;
     
     
   } 
   .seccol2 {
     border-width: 1px;
     border-style: solid;
     border-color: black;
     border-right: none; 
     height: 100px; 
     font-size: 20px;
     padding-right: 20px;

   } 
   .lastBlock {
     display: flex;
     flex-direction: column;  
     align-items: flex-end; 
     font-weight: bold; 
     margin-top: 5%; 
     margin-bottom: 7.5%;
   } 
   .totOneBlock {
     margin-top: 5%;  
   } 
   .lastB {
     font-size: 20px; 
     margin-top: 5%; 
     padding-right: 20px; 
     border-width: 1px; 
     border-color: black; 
     border-style: solid;
   }


      body{
     width: 21cm;
        height: 29.7cm;
        margin: 0mm 0mm 0mm 0mm;  
        
   }
} 

.insuzz {
  /* position: absolute; */ 
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1; 

} 

</style>