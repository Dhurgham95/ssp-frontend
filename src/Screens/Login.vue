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
    

       <v-form  v-model="isValid" >

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
  
  :disabled="!isValid" 
  @click="checkRole()"
>  دخول 
<v-icon> mdi-lock-outline</v-icon>
</v-btn>

</v-form>  



</div>
    
    
    
</template>

<script>
import axios from 'axios'

import auth from '../Services/auth'
export default {
    name: 'Login',
  
  
    data : () => ({
        

            phoneNumber: '', 
            adminName : '', 
            adminPassword: '',
            authRole : '', 
        
            password : '',
            resp: '',
            isLoggedIn : false,
            
            
        
            isValid: false,
            isValidA: false,
            loginError : false, 
           // switchTxt : 'User',
            
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

        
    
         checkRole() {
           
             setTimeout(() => { 
               axios.post('http://localhost:4400/Api/Auth/CheckUser', {
               AcctNum : this.phoneNumber,
             }).then(resp => {
               this.authRole = resp.data; 
       
             console.log('1')
           
             }).catch(err => {
               console.log(err);
             }) 

             },30) 
             


             setTimeout(() => {this.LoginM();}, 1000)  
           
            //  setTimeout(() => { 
            //     if(this.authRole == 'Merchant') {
          
            //   this.$router.push('/MerchantHome')
            
            //  auth.refreashPage()   
            
            //  } 
            //  else {
          
            //  this.$router.push('/Home')
            //    auth.refreashPage()  
            //  }

            //  }, 1300)
            
           

         },
         async LoginM() {   
          

           if(this.isValid) {  
           

           
           
        
             if(this.authRole == 'Merchant') 
             { 
        
             
          
                await  axios.post('http://localhost:4400/Api/Auth/MerchantLogin', {
               MerchantPhoneNumber : this.phoneNumber, 
               MerchantPassword: this.password
             }).then(response => {
               console.log(response.data) 
                
            
             

               localStorage.setItem('token', response.data.messeage); 
               localStorage.setItem('user', JSON.stringify(response.data )); 

               this.$router.push('/MerchantHome') 
               auth.refreashPage();
             }).catch(err => {
               console.log(err)
             }) 


             
             } 
        
           if(this.authRole == 'InsuranceCompany')
           { 
           

              
      
                
               await  axios.post('http://localhost:4400/Api/Auth/InsuranceLogin', { 
                 
               PhoneNumber : this.phoneNumber, 
               Password: this.password
             }).then(resp => { 
               console.log('11')
              
               localStorage.setItem('token', resp.data.messeage); 
               localStorage.setItem('user', JSON.stringify(resp.data ));  
              this.$router.push('/InsuranceLOB') 
              auth.refreashPage();


             }).catch(err => {
               console.log(err)
             }) 
             console.log('12')
          
       
         

               

             }
            
           }
         },  

         



       
   
       
    }, 

     mounted() {  
    
  

     }, 
        watch: {

    
    
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
.switchOne { 
  width: 3%; 
 
  margin-right: auto;
  margin-left: auto;
}
</style>