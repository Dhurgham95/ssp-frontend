import Vue from 'vue'
import VueRouter from 'vue-router'


//import Home from './Screens/Home.vue'
import Login from './Screens/Login.vue';
 import UserMangmentCrud from './components/UserMangmentCrud.vue' 
// import Fee from './components/Fee.vue' 
 import auth from '../src/Services/auth.js'
// import AskInfo from '../src/components/AskInfo.vue'
import Managment from '../src/components/Managment.vue' 
import Results from '../src/components/Results.vue'
// import RegisterMerchant from '../src/Screens/RegisterMerchant.vue'
// import BranchEmployeeLogin from '../src/Screens/BranchEmployeeLogin.vue' 
import BranchEmployeeDashboard from '../src/Screens/BranchEmployeeDashboard.vue' 
import ListOfBills from '../src/components/ListOfBills.vue' 
// import InsuranceCompanyLogin from '../src/Screens/InsuranceCompanyLogin.vue' 
import InsuranceLOB from '../src/components/InsuranceLOB.vue' 
import RejectedBills from '../src/components/RejectedBills.vue' 
import BillCancellation from '../src/components/BillCancellation.vue' 
import InsuredLOB from '../src/components/InsuredLOB' 
import RejectedInsuranceLOB from '../src/components/RejectedInsuranceLOB' 
import MerchantReports from '../src/components/MerchantReports'  
import BarChart from '../src/components/BarChart' 
import InsuranceBarChart from '../src/components/InsuranceBarChart' 
import MerchantHome from '../src/components/MerchantHome' 
import ooo from '../src/components/ooo.vue' 
import AdminLogin from '../src/Screens/AdminLogin.vue'



Vue.use(VueRouter) 
//const router = {}
// const routes = [
//     {
//         path: '/HelloWorld',
//         component:HelloWorld
//         },
//         {
//         path: '/login',
//         component:Login
//         },
//         {
//         path: '/register',
//         component:Register
//         }
// ]
// const router = createRouter({
//     history: createwebHistoty(),
//     routes,
// });

// export default router;


// function requireAuth(to, from, next) {
//     if (!auth.loggedIn()) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   }

//
// function requireAuth(to, from, next) {
//   if (!loggedIn()) {
//     next({
//       path: '/login',
//       query: { redirect: to.fullPath }
//     })
//   } else {
//     next()
//   }
// }

 //beforeeach 


  const routes = [  
    {
      path: '/MerchantHome',
      name: 'MerchantHome', 
      component: MerchantHome

    },

    
   

    // {
    //   path: '/AskInfo', 
    //   name: 'AskInfo', 
    //   component : AskInfo

    // }, 
    // {
    //   path: '/RegisterMerchant', 
    //   name : 'RegisterMerchant',
    //   component : RegisterMerchant

    // }, 
    // {
    //   path: '/BranchEmployeeLogin', 
    //   name: 'BranchEmployeeLogin', 
    //   component : BranchEmployeeLogin

    // },  

    { 
      path: '/MerchantReports', 
      name: 'MerchantReports', 
      component : MerchantReports , 
      beforeEnter: (to, from, next) => {
        if(auth.loggedIn && user.role == 'Merchant') {
          next()
        } 
        else {
          next('InsuranceLOB')
        }
      }
      
    //  meta : {requireAuth : true, merchantAuth : true, insuranceAuth : false}

    }, 
    // {
    //   path: '/LineSample', 
    //   name: 'LineSample', 
    //   component : LineSample

    // },
    {
      path: '/BarChart', 
      name: 'BarChart', 
      component : BarChart, 
      beforeEnter: (to, from, next) => {
        if(auth.loggedIn && user.role == 'Merchant') {
          next()
        } 
        else {
          next('Managment')
        }
      }
   //   meta : {requireAuth : true, merchantAuth : true, insuranceAuth : false}
  //    meta : {requireAuth : true}

    },   


    {
      path: '/InsuranceBarChart', 
      name: 'InsuranceBarChart', 
      component : InsuranceBarChart, 
      beforeEnter: (to, from, next) => {
        if(auth.loggedIn && user.role == 'InsuranceCompany') {
          next()
        } 
        else {
          next('InsuranceLOB')
        }
      }
   //   meta : {requireAuth : true, merchantAuth : true, insuranceAuth : false}
  //    meta : {requireAuth : true}

    }, 


    

    

    // {
    //   path: '/InsuranceCompanyLogin', 
    //   name: 'InsuranceCompanyLogin', 
    //   component : InsuranceCompanyLogin

    // }, 
    {
      path: '/ListOfBills', 
      name: 'ListOfBills', 
      component: ListOfBills, 
      beforeEnter: (to, from, next) => {
        if(auth.loggedIn && user.role == 'Merchant') {
          next()
        } 
        else {
          next('InsuranceLOB')
        }
      }
     // meta : {requireAuth : true} 
   //  meta : {requireAuth : true, merchantAuth : true, insuranceAuth : false}

    },
    {
      path: '/Results', 
      name: 'Results', 
      component : Results, 
   //   meta : {requireAuth : true}

    }, 
    {
      path: '/RejectedInsuranceLOB', 
      name: 'RejectedInsuranceLOB', 
      component : RejectedInsuranceLOB,  
      beforeEnter: (to, from, next) => {
        if(auth.loggedIn && user.role == 'InsuranceCompany') {
          next()
        } 
        else {
          next('Managment')
        }
      }
     // meta : {requireAuth : true, merchantAuth : false, insuranceAuth : true}
     // meta : {requireAuth : true}

    },
    {
      path: '/BranchEmployeeDashboard', 
      name: 'BranchEmployeeDashboard', 
      component : BranchEmployeeDashboard, 
      // beforeEnter: auth.requireAuthEmployee,
      // children: [
      //   {
      //     path: '/BranchEmployeeDashboard',
      //     component: BranchEmployeeDashboard
      //   }
      // ]
    },
    {
      path: '/Managment', 
      name: 'Managment', 
      component : Managment,  
      beforeEnter: (to, from, next) => {
        if(auth.loggedIn && user.role == 'Merchant') {
          next()
        } 
        else {
          next('InsuranceLOB')
        }
      }
    //  meta : {requireAuth : true, merchantAuth : true, insuranceAuth : false}
     // meta : {requireAuth : true}

    }, 

    {
      path: '/InsuranceLOB', 
      name: 'InsuranceLOB', 
      component : InsuranceLOB, 
      beforeEnter: (to, from, next) => {
        if(auth.loggedIn && user.role == 'InsuranceCompany') {
          next()
        } 
        else {
          next('Managment')
        }
      }
    //  meta : {requireAuth : true, merchantAuth : false, insuranceAuth : true}
    //  meta : {requireAuth : true}

    },
    // {
    //   path: '/TalabShra',
    //   name: 'TalabShra',
    //   component : TalabShra,

    // },
    
      //path: '/home',
      // name: 'HelloWorld',
      //component: HelloWorld,
      // beforeEnter: requireAuth,
    //   children: [
    //     {
    //       path: 'profile',
    //       component: Profile
    //     }
    //   ] 
    // {
    //   path: '/Fee',
    //   name: 'Fee', 
    //   component : Fee, 
    //   meta : {requireAuth : true},
    //   beforeEnter: auth.requireAuth,
    //   children: [
    //     {
    //       path: '/Fee',
    //       component: Fee
    //     }
    //   ]

    // },

    {
    path : '/UserMangmentCrud', 
    name : 'UserMangmentCrud', 
    component: UserMangmentCrud, 
   // meta : {requireAuth : true},
    // beforeEnter: auth.requireAuth,
    // children: [
    //   {
    //     path: '/UserManagemntCrud',
    //     component: UserMangmentCrud
    //   }
    // ]
    },

    {
      path : '/Login', 
      name : 'Login', 
      component: Login,
      
      
    }, 
    {
      path: '/RejectedBills',
      name: 'RejectedBills',
      component : RejectedBills, 
      beforeEnter: (to, from, next) => {
        if(auth.loggedIn && user.role == 'Merchant') {
          next()
        } 
        else {
          next('InsuranceLOB')
        }
      }
   //   meta : {requireAuth : true, merchantAuth : true, insuranceAuth : false}
    //  meta : {requireAuth : true}

    } ,

    {
      path: '/BillCancellation',
      name: 'BillCancellation',
      component : BillCancellation,  
      beforeEnter: (to, from, next) => {
        if(auth.loggedIn && user.role == 'Merchant') {
          next()
        } 
        else {
          next('InsuranceLOB')
        }
      }
   //   meta : {requireAuth : true, merchantAuth : true, insuranceAuth : false}
     // meta : {requireAuth : true}

    }, 
    {
      path: '/InsuredLOB', 
      name: 'InsuredLOB', 
      component : InsuredLOB,   
      beforeEnter: (to, from, next) => {
        if(auth.loggedIn && user.role == 'InsuranceCompany') {
          next()
        } 
        else {
          next('Managment')
        }
      }
   //    meta : {requireAuth : true, merchantAuth : false, insuranceAuth : true}
     // meta : {requireAuth : true}
    },

     {
       path : '*',
       redirect: '/ooo'
   

      
        
       
     }, 
     {
       path: '/ooo', 
       component : ooo ,
       beforeEnter : (to,from,next) => { 
         if(auth.loggedIn && user.role == 'Merchant')
         next('MerchantHome')
         else {
           next('InsuranceCompanyHome')
         }

       } 
     }, 
     {
       path: '/AdminLogin', 
       name: 'AdminLogin', 
       component: AdminLogin

     },
     

      
    
    
   
   

  ]
  
  //const routeName = this.$router.currentRoute.path;
  const user = JSON.parse(localStorage.getItem('user')) ;
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })


  router.beforeEach((to, from, next) => {
    if (to.name !== 'Login' && !auth.loggedIn()) next({ name: 'Login'  })
    else 
    {
    if( to.name == 'Login' && auth.loggedIn() && user.role == 'Merchant') next({name: 'MerchantHome'}) 
    // else next()
    else {
      if(to.name == 'Login' && auth.loggedIn() && user.role == 'InsuranceCompany') next({name: 'BarChar'})
      else {
        next()
      }
    }
    }

  })


  
  export default router