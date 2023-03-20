<template> 

<div>  

    <v-form v-model="cancelBillFormValid">
    <v-card tile flat> 

                <v-alert
  border="bottom"
  color="red"
  outlined
  text
  type="error" 
  v-model="checkCancelAlert"
>رقم الفاتورة غير صحيح     </v-alert>  

    <v-card tile flat> 

                <v-alert
  border="bottom"
  color="success"
  outlined
  text
  type="success" 
  v-model="checkCancelAlert1"
> تم الغاء الفاتورة بنجاح  </v-alert> 
    </v-card>
                   
            <v-card-title>
               ادخل رقم الفاتورة المراد الغائها
            </v-card-title>
            <v-card-text>
             <v-text-field
            label="رقم الفاتورة المراد الغائها" 
            type="number"
            placeholder="23476657786555" 
            :rules="numRule" 
            v-model="billNum"
          ></v-text-field> 
            </v-card-text> 
            <v-card-actions>
               <v-btn
        color="primary"
        @click="cancelBill" 
        :disabled="!cancelBillFormValid"

      >
        الغاء
      </v-btn>
            </v-card-actions> 
            <div class="noteCancel">ملاحظة : يتم الغاء الفاتورة فقط في حالة الفواتير في اخر 48 ساعة و ان تجاوز الفترة 48 ساعة على تاريخ الفاتورة لا يسمح بالالغاء</div>
      </v-card>  
      </v-form>



</div>
    
    
 
  
</template> 


<script>
import axios from 'axios'
 export default {
    data () {  
      return {
      billNum : '',  
      checkCancelAlert : false, 
      cancelBillFormValid : false, 
      checkCancelAlert1 : false,
       numRule : [
      value => !!value || 'مطلوب',
      ], 

      }
      

    } , 
    methods : {

      cancelBill() { 

        axios.post('http://172.31.71.71:5000/Api/Bill/billCancelation', {
          AcctNum : this.billNum
        }).then(respone => {
          if(respone.data == true) 
          { 
            console.log(respone.data) 
            setTimeout(() => {  this.$router.push('/Home') ;  }, 3000);
            
            this.checkCancelAlert1 = true
            
          } 
          else {
            this.checkCancelAlert = true 
            console.log(respone.data) 

          }
        }).catch(err => {
          console.log(err)
        })

        

      }

    },


 }
    

  
 
</script> 


<style> 
.noteCancel {
   color:black; 
   font-size: 22;
   font-weight: bold;
   margin-right: 1%; 
   padding-right: 3%;
   margin-top: 2%; 
   padding-top: 1%;
   width: 60%;
   padding-bottom: 1%; 

}

</style>