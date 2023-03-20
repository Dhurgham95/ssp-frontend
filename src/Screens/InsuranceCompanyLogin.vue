<template>
    <div class="allLogin">
    <v-alert
      border="top"
      color="red lighten-2"
      dark
      v-if="loginError"
    >
      رقم الهاتف او كلمة السر غير صحيحة 
    </v-alert>
  
    
    <h2 class="tasjel">تسجيل الدخول</h2>
  
    
   
    <v-form  v-model="isValid" @submit.prevent="LoginM">

    <v-text-field class="text"
      label="رقم الهاتف"
   
      v-model="phoneNumber"
      hide-details="auto"
      
    ></v-text-field>

        <v-text-field class="text"
      label="كلمة السر"
      :rules="loginPasswordRule" 
      
      hide-details="auto"
      type="password"
      style="margin-bottom:3%;"
      v-model="password"
    ></v-text-field>
        
    


<v-btn 
  class="e3"
  block
  color="success"
  elevation="4"
  large
  type="submit"
  :disabled="!isValid"
>  دخول 
<v-icon> mdi-lock-outline</v-icon>
</v-btn>

</v-form>
<!-- </validation-observer> -->
<!-- <p>is form valid : {{isValid}}</p> -->

</div>
    
    
    
</template>

<script>
import axios from 'axios'

import auth from '../Services/auth'
export default {
    name: 'InsuranceCompanyLogin',
 
    data : () => ({
        

            phoneNumber: '',
         
            password : '',
            resp: '',
            isLoggedIn : false,
            
          
            isValid: false,
            loginError : false,
            
            loginPhoneRule:  [
        v => !!v || 'مطلوب', 
        v => /^07[456789][0-9]{8}$/.test(v) || 'الرقم غير صحيح'


      ],
           loginPasswordRule : [
        v => !!v || "مطلوب",
        v => v.length >= 8 && v.length <= 24 || 'طول كلمة السر المسموح بين 8 الى 24 رمز',
      


      ],
    }),
   
    methods: { 
    

         async LoginM() {
           if(this.isValid) {
             await axios.post('http://172.31.71.71:5000/Api/Auth/InsuranceLogin', { 
     
               PhoneNumber : this.phoneNumber, 
               Password: this.password
             }).then(response => {
               console.log(response.data)
               console.log(response.data)
               localStorage.setItem('token', response.data.messeage); 
               localStorage.setItem('user', JSON.stringify(response.data ));
             }).catch(err => {
               console.log(err)
             })
            // auth.refreashPage();
             this.$router.push('/InsuranceLOB')
             auth.refreashPage()
           }
         },

        check(){
   
     this.isLoggedIn = auth.loggedIn();
   
      console.log(this.isloggedIn)
      console.log("mounted")
    }


       
   
       
    }, 

     mounted() {
       this.check();
    

     },


}
</script>

<style >
.tasjel {
    margin-top: 3%

}
.text {
    margin-top:2%; 
    margin-right: 0px;
    
}
.e3 {
    margin-top:2%;
}
.allLogin {
    width: 72%;
    margin: auto;
    height: 70%;
}
</style>