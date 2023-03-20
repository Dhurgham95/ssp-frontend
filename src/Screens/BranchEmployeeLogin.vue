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
    <div> يمكنك الدخول الى حسابك الشخصي, و الاستفادة من الخدمات الالكترونية التي يقدمها المصرف من خلال الدخول عن طريق رقم الهاتف المسجل و كلمة السر . <br> 
        في حالة لم تمتلك حساب, يمكنك تسجيل حساب جدبد  <router-link to="/register"><u>بالضغط هنا</u></router-link></div>
    
   
    <v-form  v-model="isValid" @submit.prevent="LoginE">

    <v-text-field class="text"
      label="اسم الموظف"
   
      v-model="empName"
      hide-details="auto"
      
    ></v-text-field>

        <v-text-field class="text"
      label="كلمة السر"
      :rules="loginPasswordRule"
      hide-details="auto"
      type="password"
      style="margin-bottom:3%;"
      v-model="empPassword"
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
<p>is form valid : {{isValid}}</p>

</div>
    
    
    
</template>

<script>
import axios from 'axios'

import auth from '../Services/auth'
export default {
    name: 'BranchEmployeeLogin',

    data : () => ({
        

            empName: '',
          //  AccountNumber: '',
            empPassword : '',
            resp: '',
            isLoggedIn : false,
            
            
            // phoneNumber: '',
            // error: false,
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
    

         async LoginE() {
           if(this.isValid) {
             await axios.post('http://localhost:4400/api/Auth/BranchEmployeeRespondentLogin', {
               BranchEmployeeRespondentName : this.empName, 
               BranchEmployeeRespondentPassword: this.empPassword
             }).then(response => {
             console.log(response.data)
               console.log(response.data)
               localStorage.setItem('token', response.data.messeage); 
               localStorage.setItem('user', JSON.stringify(response.data )); 

               console.log(response)
             }).catch(err => {
               console.log(err)
             }) 
             auth.refreashPage();
            this.$router.push('/BranchEmployeeDashboard')
             auth.refreashPage()
           }
         },

        check(){
      //this.isLoggedIn = !!localStorage.token;
    //  console.log(this.isLoggedIn); 
     this.isLoggedIn = auth.loggedIn();
     // console.log("aaaa"); 
     // this.isLoggedIn = loggedIn(); 
     console.log(this.isloggedIn)
      console.log("mounted")
    }


       
   
        //   async loginForm() {
        //   if(this.isValid) {
        //    await axios.post('auth/login', {
        //     phoneNumber : this.phoneNumber,
        
        //     Password : this.password
        //   }).then(
        //     response => {
            
              
        //        localStorage.setItem('token', response.data);
        //   localStorage.setItem('user', JSON.stringify(response.data ));
         
        //   this.$router.push('/Main');
        //     }
        //   ).catch(err => {
        //     if (err) {
        //       this.loginError = true;
        //     }
        //   })
        
        //   }
        // }

       
    }, 

     mounted() {
       this.check();
       //auth.refreashPage()

     },
    //  beforeCreate() {
    //    auth.refreashPage()
    //  }

}
</script>

<style >
.tasjel {
    margin-top: 3%

}
.text {
    margin-top:2%;
    
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