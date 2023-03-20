<template>
      <div>  

      
       <v-app-bar id="appbar"  color="#0E5191" app dark height="100">

  <v-img
    class="imgl"
    src="../assets/logo00.png"
    max-height="90"
    max-width="140"
    contain
  ></v-img>

  <v-toolbar-title class="typewriter">
      Settlement Statement Platform
  </v-toolbar-title>

</v-app-bar>
       


         <v-card
    color="grey lighten-4" 
    height="590" 
     id="cardtrr"
    class="scroll"
    flat
   

    tile
  >
    <v-toolbar v-if="LoggedIn" id="toolbar"  dense color="#0E5191" dark height="50">
      <v-app-bar-nav-icon @click="handleClickDrawer"></v-app-bar-nav-icon>



      <v-spacer></v-spacer>  



     

     

    </v-toolbar> 

      <router-view/> 
      <v-card v-if="this.pathh()">
        sdd
      </v-card>

     
   

       <v-navigation-drawer
      v-model="drawer"
      :mini-variant.sync="mini"
       v-if="LoggedIn && checkPrint" 
       class="drawer0" 
       id="drawer0" 
      
       app
       

       
        
      :right="$vuetify.rtl"
      
    >
      <v-list-item class="px-2">
        <v-list-item-avatar> 
          <v-icon>mdi-account-circle</v-icon>
          
        </v-list-item-avatar>

        <v-list-item-title >{{this.user.fullName}}</v-list-item-title>

        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-list-item>

      <v-divider></v-divider> 

    

        <v-list dense v-if="employeeitems"> 
        <v-list-item-group 
         mandatory
        color="indigo"
        >
        <v-list-item 
        
          v-for="item in empItems" 
           :to="item.route"
          :key="item.title"
          link 

        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> 
        </v-list-item-group>
      </v-list>  


      
        <v-list  v-if="insuranceitems"> 
        <v-list-item-group 
         mandatory
        color="indigo"
        >
        <v-list-item 
        
          v-for="item in insuranceitems" 
           :to="item.route"
          :key="item.title"
          link 

        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> 
        </v-list-item-group>
      </v-list> 

        <v-list  v-if="merchantitems"> 
        <v-list-item-group 
         mandatory
        color="indigo"
        >
        <v-list-item 
        
          v-for="item in items" 
           :to="item.route"
          :key="item.title"
          link 

        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item> 
        </v-list-item-group>
      </v-list> 

        <template v-if="!this.mini" v-slot:append>
        <div class="pa-2">
          <v-btn @click="hlogout"  block color="red" dark>
            تسجيل الخروج
          </v-btn>
        </div>
      </template>
      
    </v-navigation-drawer> 
     
     
      

  </v-card>   


  
 
      </div>
</template>




<script> 
import auth from '../Services/auth'
  export default {
    data () {
      return { 
        items1 : [
      
        ],
        items: [
       
        
        ], 
        checkIndex : null,
        mini: false, 
        checkPrint: true,
        drawer: true, 
        LoggedIn : false, 

      //   billNum: 12233, 
      //  billDate: "12/3/2021",
      //  merchantName : "علي عماد", 
      //  merchantPhoneNumber: "078092123123", 
      //  merchantAcctNum: "12342221", 
      //  merchantBussinessName : "البركة", 
      //  discount: 200,
      //  finalSum: 20000000, 
      //  cusName: "احمد عادل", 
      //  cusPhone: "078093454221", 
      //  cusAcctNum: "264332", 
      //  cusAdress: "الدورة",
      //  cusSalary: "950000", 
      //  cusBirth: "24/12/1990", 
      //  payCount: "24", 
      //  payMonth: "345000", 
      //  startDate: "22/1/2021",
      //  endDate: "23/12/2021",




        merchantitems: false,
        employeeitems: false,  
        insuranceitems : false,
   
       user : JSON.parse(localStorage.getItem('user')), 
      
      }
    },
    methods : { 
      pathh() {
       
        if(this.$router.currentRoute.path === 'MerchantHome' && this.user.role === 'Merchant') {
          return true

        }
      },
      handleClickDrawer() { 
        if(this.drawer){
        this.mini = !this.mini; 
      
        }
        if(!this.drawer) {
          this.drawer = !this.drawer;
          this.mini = false;
        }
      }, 
  
     checkLog() {
       this.LoggedIn = auth.loggedIn()
     }, 
      hlogout () {
         localStorage.removeItem('token');
      localStorage.removeItem('user');
      //auth.refreashPage();
        this.$router.push('/login')
        window.location.reload();

      }, 
      
        
        


       checkItems() {
        if(this.user.role == "Merchant") { 
          this.merchantitems = true;  
 
          this.items = [ 
             { title: 'تقديم استمارة', icon: 'mdi-file-send-outline' , route: '/Managment'},
             {title: 'الفواتير', icon: 'mdi-file-document-multiple', route: '/ListOfBills'}, 
             {title: 'الفواتير المرجوعة', icon: 'mdi-book-cancel-outline', route: '/RejectedBills'}, 
             {title: 'الغاء فاتورة', icon: 'mdi-file-cancel-outline', route: '/BillCancellation'},  
             {title: 'التقارير', icon: 'mdi-book-open ', route: '/MerchantReports'}, 
             {title: 'الدعم الفني', icon: 'mdi-face-agent', route: '/BarChart'}, 
             {title: 'المساعدة', icon: 'mdi-help-circle-outline',},

        

          ] 

        } 
          if(this.user.role == "BranchEmployeeRespondent") { 
            this.employeeitems = true;
         //   this.merchantitems = false;
            this.empItems =  [ 
              { title: 'الرئيسية', icon: 'mdi-view-dashboard' , route: '/BranchEmployeeDashboard'},  

            

              

            ]
            
          } 
          if (this.user.role == "InsuranceCompany") 
          {
            this.insuranceitems = true;  

            this.insuranceitems = [ 
             {title: 'الفواتير', icon: 'mdi-file-document-multiple', route: '/InsuranceLOB'}, 
             {title: 'الفواتير المؤمنه', icon: 'mdi-check-decagram', route: '/InsuredLOB'} , 
             {title: 'الفواتير المرفوضة', icon: 'mdi-book-cancel-outline', route: '/RejectedInsuranceLOB'} ,
              {title: 'الدعم الفني', icon: 'mdi-face-agent', route: '/InsuranceBarChart'}, 
             {title: 'المساعدة', icon: 'mdi-help-circle-outline',}
            ]

          }
      }
       },
    mounted () {
      this.checkLog();  
      this.checkItems(); 
      this.pathh();

    }, 

  }
</script>


<style>
.m {
  display: flex;
  direction: flex-row;
  margin-top:1.5%;
  margin-right: 38%;
}
.text {
  margin-top:2.5%; 
  font-weight: bold;
  font-size: 22px;
  
} 
.r{
    display: flex;
    direction: flex-row; 
    margin-right: 5%; 
    margin-top:1%;
    
} 

.logo {
  margin-right: 5%;
}


.content {
  margin-right: 400px;
}
.scroll {
  overflow-y:scroll;
}

.vvvww {
  direction: rtl;
}


@media print {
  
}



@media print {

   #appbar {display: none;}  
    #drawer0  {display: none !important;}  
    /* #drawer0 * {display: none !important;} */
    #toolbar {display: none;} 
   #printbtn {display: none;}   
   #card0 {display: none;}
   #rtyy {
  
      z-index: 0;
   -webkit-print-color-adjust: exact !important; 
   
   } 
   body{
     width: 21cm;
        height: 29.7cm;
        margin: 0mm 0mm 0mm 0mm;  
        
   }
  .headerB {
    display: grid;
    grid-template-columns: 40% 20% 40%;
  }
  .headertext1 {
    color: blue;
    font-weight: bold;
    font-size: 24px;
        margin-top:13%;

    
  } 
  .headerImage {
    /* margin-right: 30%; */
    margin-right: 5px;
  }
    .headertext2 {
    color: blue;
    font-weight: bold;
    font-size: 24px;
    margin-top:13%;
    margin-right: 30px;
    /* margin-right: 15%; */

  } 
  .headerLine {
    display: grid;
    grid-template-columns: 93% 2% 5%;
  }
  .hr1 {
    
    border-top: 10px solid purple;
        
  } 
  .hr2 {
    border-top: 10px solid white;


  }
  .hr3 {
    border-top: 10px solid orange;
  }
.buytitle {
  display: flex;
  justify-content: center;
  color: blue;
  font-weight: bold;
  font-size: 16px;
  text-decoration: underline;
  margin-top: 1%;


} 
#billNum {
  display: grid;
  grid-template-columns: 15% 85%;
  margin-top: 1%;
  
  
}
#billDate { 
   display: grid;
  grid-template-columns: 15% 85%;
    margin-top: 1%;


}

  /* .headerImage {} */
#merchantMain1 {
  display: grid;
  grid-template-columns: 12% 50% 18% 20%;
  margin-top: 1%;
}
#merchantMain2 {
  display: grid;
  grid-template-columns: 16% 46% 18% 20%;
  margin-top: 1%;

}
#textk {
  color: blue;
  background-color: yellow;
  margin-top: 1%;
  width: 60%;

} 
#textk1 { 
   color: blue;
  background-color: yellow;
  margin-top: 1%; 
  width:80%;

}

#singM {
  margin-top: 1%;
}

#rcorners1 {
  border-radius: 25px;
  background: white;
  border-color: blue;
  border-style: solid;
  border-width: 1px;
  padding: 20px;
  width: 337px;
  height: 75px; 
  
} 

#rcorners2 { 
   border-radius: 25px;
  background: white;
  border-color: blue;
  border-style: solid;
  border-width: 1px;
  padding: 20px;
  width: 200px;
  height: 75px; 

}
#sig {
  margin-top: 2.5%;
}

#cellb {
  border-style:inset;
  border-color: black;
  border-width: 1px;

} 
#cellb2 { 
  border-style:none;
  background-color: yellow;
  color: blue;

}
#maintable {
  margin-top: 2%;

}

#final {
  display: grid;
  grid-template-columns: 17% 30%;
  margin-top:2%;
  font-weight: bold;
  font-size: 16px;
}
.highlite {
  border-radius: 85px;
  border-style: solid;
  border-color: blue;
  border-width: 2px;
  justify-content: center;
  display: flex; 
  background-color: greenyellow;
} 
.hilte {
  background-color: greenyellow; 
  width: 100px;
}
#cus1 {
  display: grid;
  grid-template-columns: 11% 50% 15% 19%;
  margin-top: 1%;
}
#cus2 {
  display: grid;
  grid-template-columns: 17% 44% 15% 19%;
  margin-top: 1%;
}
#cus3 {
  display: grid;
  grid-template-columns: 11% 50% 15% 19%;
  margin-top: 1%;

}
#pay1 {
  display: grid;
  grid-template-columns: 17% 44% 21% 13%;
  margin-top: 1%;
}
#pay2 {
  display: grid;
  grid-template-columns: 20% 41% 20% 14%;
  margin-top: 1%;
  
}
} 




.rtyy {

  position: fixed;
  right: 0;
  top: 0;
  z-index: -1; 

}

.typewriter  {
  color: #fff;
  direction: ltr; 
 
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */

  /* margin: 0 auto; */
   /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 6.5s steps(30, end),
    blink-caret .6s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0% }
  to { width: 27% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
} 




.m {
  display: flex;
  direction: flex-row;
  margin-top:1.5%;
  margin-right: 38%;
}
.text {
  margin-top:2.5%;
  font-size: 28px;
  margin-right: 30%;
  
}
.texte {
  margin-top: 2.5%;
  font-size: 32px;
  
}
.logo {
  margin-right: 5%; 
} 
.shadawkala {
  color: #0F508F;
  font-size: 28px;
  font-weight: bold;
  margin-top: 1%;

}
#copyr {
  color: #0F508F; 
  font-size: 18px;
}
#ccc {
  background-color: whitesmoke;
}
.foo {
  margin-top: 4%;
}
.imgl {
  border-width: 2px;
  border-color: lightskyblue; 
  
}









</style>