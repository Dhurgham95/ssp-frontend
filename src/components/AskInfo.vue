<template>
    <div> 
    <v-card> 
    
    <v-card-title>الاستبانات
        <v-spacer></v-spacer> 
   
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        class="search11"
        label="بحث"
        single-line 
       
        hide-details
      ></v-text-field>
            <v-btn
      class="btn00"
      tile
      dark
      color="indigo"
      large 
      @click="openDialog"
      
    >
      <v-icon dark>
        mdi-plus
      </v-icon>
    </v-btn> 
      <v-dialog v-model="dialog" 
      max-width="50%">
        <v-card :loading="eventLoading"> 

           <template slot="progress">
           <v-progress-linear color="blue" indeterminate></v-progress-linear>
           </template>
            <v-form  v-model="askValid">
            <v-card-title>
                <v-row>
                    <v-col>
                
                    
                        <v-text-field 
      label="رقم الحساب"
      :disabled="eventLoading"
      v-model="accountNumber"
      hide-details="auto"
      type="number"
      :rules="accNumRole" 
      
    ></v-text-field>
                    </v-col>
                </v-row>
                
            </v-card-title>
            <v-card-text>
                <v-row v-if="!eventLoading">
                    <v-col  style=" display: flex; align-items: center; justify-content: center"  align="center">
                        <v-btn @click="postAccNum" :disabled="!askValid" color="green" text dark >ارسال</v-btn>
                    </v-col>
                     <v-col   style=" display: flex; align-items: center; justify-content: center"  align="center">
                        <v-btn @click="cancelD" color="red" text dark>ألغاء</v-btn>
                    </v-col>
                </v-row>
            </v-card-text>
            </v-form> 

             <!-- <v-progress-circular
      indeterminate
      color="primary"
    ></v-progress-circular> -->
        </v-card>

    </v-dialog>
    </v-card-title>
  

    
    
  <v-data-table
    :headers="headers"
    :items="desserts"
    :search="search"
    class="elevation-1" 
     :loading="loading"
  >
    <template v-slot:[`item.requestAnswer`]="{ item }">
      <v-chip
        :color="getColor(item.requestAnswer)"
        dark
      >
        {{ item.requestAnswer }}
      </v-chip>
    </template> 
     <template v-slot:[`item.notes`]="{ item }">
      <v-chip
        :color="color2(item.notes, item.requestAnswer)"
        dark
      >
        {{ item.notes }}
      </v-chip>
    </template>
  </v-data-table>
  
    </v-card>
    </div>

</template>

<script> 
import axios from  'axios'
import auth from '../Services/auth';
export default {
    name: 'AskInfo',
      data () {
      return { 
          eventLoading: false,
          search: '',
          askValid: false,
          dialog: false, 
          loading: false,
          accountNumber: '',
           user : JSON.parse(localStorage.getItem('user')), 
          accNumRole:[  v => !!v || "مطلوب"],
        headers: [
          {
            text: 'اسم الزبون',
            align: 'start',
            sortable: false,
            value: 'customerNumberRelatedToAccountNumber',
          },
          { text: 'رقم حساب الزبون', value: 'accountNumberRequestInfo' },
          { text: 'رقم الزبون', value: 'phoneNumberRelatedToAccountNumber' },
          {text: 'تاريخ الاستيانة', value: 'requestInfoDateTime'}, 
          {text: 'تاريخ الجواب'  , value : 'requestAnswerDateTime'},
          { text: 'حالة الاستبانه', value: 'requestAnswer' }, 
          {text: 'الملاحظات', value: 'notes'}
        ],
        desserts: [ ],
      }
    },

    created () {
      this.getDataA();
    },
    methods: {
      // getColor (requestAnswer) {
      //   if (requestAnswer =="انتظار") return 'orange'
      //   else if (requestAnswer =="منح") return 'green'
      //   else return 'red'
      // },
      //  color2 (notes, requestAnswer) {
      //   // if (notes =="" || notes == null)
      //   //  {
      //   //      for (var i = 0; i < this.desserts.length; i++)
      //   //      this.desserts[i].notes = "لا توجد بعد"
      //   //      return 'orange'
      //   //  }
      //   if ( notes == "لا توجد بعد" || notes== "" || notes == null) return 'orange' 
      //   else if (requestAnswer == "مرفوض") 
      //   return 'red'
      //   else return 'blue'
      // }, 

        getColor (requestAnswer) {
        if (requestAnswer =="انتظار") return 'orange'
        else if (requestAnswer =="منح") return 'green'
        else return 'red'
      },
       color2 (notes, requestAnswer) {
        // if (notes =="" || notes == null)
        //  {
        //      for (var i = 0; i < this.desserts.length; i++)
        //      this.desserts[i].notes = "لا توجد بعد"
        //      return 'orange'
        //  }
        if ( notes == "لا توجد بعد" || notes== "" || notes == null) return 'orange' 
        else if (requestAnswer == "مرفوض") 
        return 'red'
        else return 'blue'
      },
      cancelD() {
          this.dialog = false
      },
      openDialog () {
          this.accountNumber = '0'
          this.dialog = true
      }, 
      async postAccNum() {  
          this.eventLoading = true
          await axios.post('http://localhost:4400/api/AskBank/sendAskRequest', {
              AccountNumberRequestInfo : this.accountNumber, 
              UserId : this.user.userId,
              
          }).then( response => {
              console.log(response)  
              
          }) 

          this.eventLoading = false; 
          this.dialog = false; 
          //sleep(3000);
          auth.refreashPage();

      } , 
      
        getDataA () { 
      //  this.loading = true;

       axios 
      .post(
            'http://localhost:4400/api/AskBank/GetAskByUserId',
             {UserId :this.user.userId}
             ) 
            .then((respnonse) => {
              this.loading = false; 
              // this.desserts.accountNumber = respnonse.data.accountNumber
              // console.log(respnonse.data)  
              this.desserts = respnonse.data
              console.log(respnonse.data)
   
             // this.totalIstmarats = respnonse.data.totalIstmarats;
             // this.numberOfPages = respnonse.data.totalPages;
         });
        
     },
    //   logUserId() {
    //       console.log(this.user.id)
    //   }
    }, 
//     mounted : function () {
//    {
//        console.log(this.user.userId);
//     } 
//     }
  
}
</script>

<style>
/* .search11 {
    width: 10px;
} */
.search11 {
    max-width: 30%;
} 
.btn00 {
    margin-right: 5%;
    margin-left: 5%;
}

</style>