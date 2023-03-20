<template> 
     <div>
    <div class="insuzz" id="insuzz" style="width:210mm; height: 297mm">  
      <div id="headerI" style="font-size:2rem;">جدول معلومات التامين</div> 
      <div class="totOneBlock">
        <v-row no-gutters>
          <v-col cols="3">
            <div class="upperCell" style="padding-right: 60px;">رقم الوثيقة</div>
            <div class="lowwerCell" style="padding-right: 15px;">{{this.printedItemDocSeq}}</div>
          </v-col> 
              <v-col cols="3">
            <div class="upperCell" style="padding-right: 35px;">مبلغ القرض بالدينار</div>
            <div class="lowwerCell" style="padding-right: 30px;">{{this.printedItemAmt}}</div>
          </v-col>  

            <v-col cols="6">
            <div id="ucell" style="padding-right: 15px; ">مدة التامين (سنوية)</div> 
            <div class="period">
            <div class="per1"> من <span>{{this.printedItemStartDate}}</span></div>   
            <div class="per2" >الى <span>{{this.printedItemEndDate}}</span></div>  
            </div>
          </v-col> 
          <!-- <v-col>
            <div class="periodH">مدة التامين</div>
          </v-col> 

            <v-col> 
            <div class="lastCell">
            <div> من <span>{{this.printedItemStartDate}}</span></div> 
            <div> الى <span>{{this.printedItemEndDate}}</span></div> 
            </div>
          </v-col> -->
        </v-row>  
      </div> 
      <div class="secondBlock"> 


         <v-row no-gutters>
           <v-col class="border0"  style="padding-right:3%;">اسم المؤمن له</v-col>
           <v-col class="border0" style="padding-right:3%;" >المصرف الدولي الاسلامي</v-col> 
           <v-col class="border0" style="padding-right:3%;">اسم طالب التمويل : </v-col> 
           <v-col class="border00" style="padding-right:3%;">{{this.printedItemCusName}}</v-col>

         </v-row> 

           <v-row no-gutters>
           <v-col class="border0" style="padding-right:3%;">عنوان المؤمن له :</v-col>
           <v-col class="border08" style="padding-right:3%;">بغداد العرصات </v-col> 
           <v-col class="border02" style="padding-right:3%;">قسط التامين : </v-col> 
           <v-col class="border01" style="padding-right:3%;">{{this.printedItemInsuranceAmt}}</v-col>

         </v-row> 

            <v-row no-gutters>
           <v-col cols="3" class="border03" style="padding-right:3%;">المستفيد : </v-col>
           <v-col cols="3" class="border04" style="padding-right:3%;">المصرف الدولي الاسلامي </v-col> 
    
         </v-row>

        <!-- <v-row no-gutters >
          <v-col> 
            <div >
            <div class="border0">اسم المؤمن له : <span class="border0">المصرف الدولي الاسلامي</span></div> 
            <div class="border0">عنوان المؤمن له : <span class="border0">بغداد العرصات </span> </div> 
            <div class="border0">المستفيد : <span class="border0">المصرف الدولي الاسلامي</span></div>
            </div>
          </v-col> 
          <v-col> 
            <div >
            <div>اسم طالب التمويل: <span class="border0">{{this.printedItemCusName}} </span></div> 
            
            <div class="border0">قسط التامين <span class="border0"> 3% </span></div>
            </div>
          </v-col>

        </v-row> -->
      </div>   

      <div class="tmweelAmt" > 
        <div style="padding-right:3%;">مبلغ التمويل بالدينار : </div>
        <div class="amt" style="padding-right:3%;">
          <div style="padding-right:3%;">رقما : </div> 
          <div style="padding-right:3%;">{{printedItemAmt}}</div>
        </div>
        <div class="amttext" style="padding-right:3%;">
          <div style="padding-right:3%;">كتابتا : </div> 
          <div style="padding-right:3%;">{{printedItemAmtText}}</div>
        </div> 

      </div> 

      <div class="tmweelAmtM"> 
        <div style="padding-right:3%;">القسط المستحق بالدينار : </div>
        <div class="amt" style="padding-right:3%;">
          <div style="padding-right:3%;">رقما : </div> 
          <div style="padding-right:3%;">{{printedItemMonthlyPay}}</div>
        </div>
        <div class="amttext" style="padding-right:3%;">
          <div style="padding-right:3%;">كتابتا : </div> 
          <div style="padding-right:3%;">{{printedItemMonthlyPayText}}</div>
        </div> 
      </div> 
      <div class="sjlAlykim">
        <div>سجل عليكم بالحساب</div>
      </div>
      <div class="piontsBlock">
        <div class="hdod">
          حدود مسؤولة الشركة
        </div>
        <div class="pionts"> 
          <ol type="1">
          <li>من المعلن و المتفق عليه فأنه بالأضافة لما جاء في شروط و أحكام و أستثنائات هذه الوثيقة فانها تغطي جميع الاعمال الارهابية و عدم التسديد لأي سبب كان .</li> 
          <li>تحدد مسؤولية الشركة بمقدار  مبلغ التمويل المتبقي بذمة زبون التاجر صاحب التمويل</li> 
          <li>على المؤمن له تقديم جميع المستندات الصحيحة والحقيقية الخاصة بأستحقاق التعويض وبخلافه تكون الشركة غير مسؤولة قانونا عن اية التزامات.</li> 
          <li>عند تحقق حالة التعويض فعلى المؤمن له تقديم كافة الوثائق الخاصة بالتمويل كضمانات للتمويل.</li>
        </ol> 
        </div>
      </div>  

         <div class="lastBlock"> 
        <div style="margin-left: 50px;" >عن شركة اليمامة للتأمين</div>
        <div style="margin-left: 110px;">المدير المفوض</div>
        <div style="margin-left: 85px;">طارق خليل ابراهيم</div>
      </div> 
      
      <!-- <div class="lastB" >
      <div > 
        <div>مبلغ القرض بالدينار</div> 
        <div><span>{{printedItemAmt}}</span></div> 
        <div>القسط المستحق بالدينار</div> 
         <div>{{printedItemMonthlyPay}}</div>  -->
        <!-- <div style="font-weight:bold;">حدود مسوؤلية الشركة / </div> 
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
      </div> -->
      
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
     </v-dialog>  -->


        <!-- <v-dialog v-model="alertN3" width="400">
       <v-card > 
         <v-card-text>
          <v-text-field v-model="notes2" label="ملاحظات">

          </v-text-field> 
          
         </v-card-text> 
         <v-card-actions>
            <v-btn color="blue" @click="closeA2">ارسال</v-btn>
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
    
    

     <template v-slot:[`item.actions`]="{ item }">   

        


         <v-dialog width="300" v-model="attachDoc1"> 
        <v-card>
          <v-card-title>يرجى ارفاق وثيقة التامين : </v-card-title> 
          <v-card-text>
                 <v-file-input
            show-size 
            chips
      flat
      v-model="InsuranceDoc1"
      label="وثيقة التامين" 
   
    ></v-file-input>
          </v-card-text>
          <v-card-actions>
            <v-btn text blue 
             @click="attachInsDoc()"
            >ارفاق</v-btn>
          </v-card-actions>
        </v-card> 


      </v-dialog>

       <v-dialog   persistent width="650" v-model="acceptDialog" transition="slide-y-reverse-transition"> 
         <v-card > 
           <v-alert v-model="acceptAlert"  border="bottom"
             color="green"
             type="success">
             تم الموافقة بنجاح جاري طباعة وثيقة التامين 

           </v-alert>
           <v-card-title>الملاحظات</v-card-title>
           <v-card-text>
             <v-text-field v-model="notes" label="ملاحظات">
             </v-text-field> 
           </v-card-text> 

            <v-card-actions >
            <v-btn color="blue" dark @click="approveAction()">ارسال</v-btn>
         </v-card-actions>
         </v-card>


       </v-dialog>  


          <v-dialog persistent width="650" v-model="rejectDialog" transition="slide-y-reverse-transition"> 
         <v-card> 
           <v-alert v-model="rejectAlert"  border="bottom"
             color="red"
             type="error">
             تم  رفض طلب التامين 

           </v-alert>
           <v-card-title>الملاحظات</v-card-title>
           <v-card-text>
             <v-text-field v-model="notes2" label="ملاحظات">
             </v-text-field> 
           </v-card-text> 

            <v-card-actions>
            <v-btn color="blue" dark @click="rejectAction()">ارسال</v-btn>
         </v-card-actions>
         </v-card>


       </v-dialog> 


       

      

       

      <v-icon
        
        class="mr-2"
        @click="OpenAcceptDialog(item)"
        color="success"
      >
        mdi-check-circle-outline
      </v-icon>
      <v-icon
        
        @click="OpenRejectDialog()"
        color="red"
      >
        mdi-close-circle-outline
      </v-icon>
    </template> 

    

    <template v-slot:expanded-item="{ headers, item }"> 
     <td :colspan="headers.length" id="expand"> 

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
        selectedItem : null, 
        acceptDialog : false, 
        rejectDialog : false,
        acceptAlert : false, 
        rejectAlert : false,
        printedItemDocSeq : '', 
        printedItemAmt : 0, 
        printedItemAmtText: '',
        printedItemStartDate : '', 
        printedItemEndDate : '', 
        printedItemMonthlyPay : 0, 
        printedItemMonthlyPayText: '',
        printedItemCusName : '', 
        printedItemInsuranceAmt: '',
        attachDoc1 : false, 
        InsuranceDoc1 : null,

      //  alertN2 : false, 
      //  alertN3 : false,

        notes : '',
        notes2 : '',


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
          { text: 'الحالة', value: 'billStatus' },
           { text: 'خيارات', value: 'actions', sortable: false },
          { text: '', value: 'data-table-expand' },
        ],
        bills: [], 
        billDetails : [], 
       // notes : ''
      }
    }, 

    methods : {
      getAllBillsForMerchant() {
        axios.get('http://172.31.71.71:5000/Api/Bill/GetAllBillsInsurance', {
         // AcctNum : this.user.accountNumber
        }).then( response => {
          console.log(response); 
          this.bills = response.data
        }).catch(err => {
          console.log(err)
        })
      },  

     
      approveAction() { 
       
        console.log(this.selectedItem.billSeq); 


         axios.post('http://172.31.71.71:5000/Api/Bill/InsuranceApproval', {
        // BillSeq : item.billSeq ,  
        BillSeq : this.selectedItem.billSeq,
         NoteForRejection : this.notes
       }).then(response => {
         console.log(response); 
         this.acceptAlert = true;  

          this.printedItemDocSeq = response.data.billSeq ,
          this.printedItemAmt = response.data.billAmount , 
          this.printedItemCusName = response.data.customerNameForBill,
          this.printedItemStartDate = response.data.startPayDateForBill.slice(0,10).replace(/-/g,'/'), 
          this.printedItemEndDate = response.data.endPayDateForBill.slice(0,10).replace(/-/g,'/'),
          this.printedItemMonthlyPay = (response.data.billAmount / response.data.payCountForBill).toFixed(0) 
          this.printedItemInsuranceAmt = response.data.billAmount * 0.03 ;
          
          setTimeout( () => {
            axios.post('http://172.31.71.71:5000/Api/Bill/ConvertToWord', {
              AcctNum : response.data.billAmount
            }).then(resp => {
              this.printedItemAmtText = resp.data
            })

          }, 300) 

           setTimeout( () => {
            axios.post('http://172.31.71.71:5000/Api/Bill/ConvertToWord', {
              AcctNum : this.printedItemMonthlyPay
            }).then(resp => {
              this.printedItemMonthlyPayText = resp.data
            })

          }, 500) 

          // printedItemMonthlyPayText 
          // printedItemAmtText

          setTimeout(() => {  window.print();  }, 3000)
        }).catch(err => {
         console.log(err)
        }) 
        


        setTimeout(() => {this.acceptDialog = false;}, 2000);  

        setTimeout(() => {this.openInsuranceAttachDoc();}, 6000);
      // setTimeout(() => {navigator.clipboard.writeText(this.item.billSeq)} , 3000);
      }, 


      rejectAction() { 

        console.log(this.selectedItem); 

         axios.post('http://172.31.71.71:5000/Api/Bill/RejectInsurance', {
         BillSeq : this.selectedItem , 
         NoteForRejection : this.notes2
       }).then(response => {
         console.log(response);
         this.rejectAlert = true
        }).catch(err => {
         console.log(err)
        }) 


        setTimeout(() => {this.rejectDialog = false;}, 2000); 

      },


    

    


      
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

      openInsuranceAttachDoc() {
        this.attachDoc1 = true;

      },
      
      attachInsDoc() {

         //console.log(item.billSeq) 
           console.log(this.selectedItem.billSeq)
               let fromData = new FormData(); 
               fromData.append('BillDoc2', this.InsuranceDoc1) ; 
               fromData.append('BillSeq', this.selectedItem.billSeq) ; 
               
               axios.post('http://172.31.71.71:5000/Api/Bill/attachInsuranceDoc', 
                 fromData, 
                  {
            headers: {
               'Content-Type': 'multipart/form-data'
             }
   
              
               }).then(response => {
                 console.log(response)  
                setTimeout( () => { this.attachDoc1 = false;}, 1000)
               })




      },

      OpenAcceptDialog(item) { 
        this.acceptDialog = true;  
         this.selectedItem = item; 
         console.log(item.billSeq)

        

      }, 

      OpenRejectDialog() {
        this.rejectDialog = true;

      },
  

 
    }, 
    created () {
      this.getAllBillsForMerchant(); 
     // this.getPartialPayByBillSeq();
    }
 


  }
</script> 


<style> 
#expand {
  padding: 4%;

}

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
      font-size: 14px; 
     font-weight: bold;

   
   }  
   #headerI {
     display: flex;
     flex-direction: row;
     justify-content: center;  
      text-decoration: none;
     font-weight: bold;
     /* font-size:2rem; */
   }  

   .upperCell { 
    
     border-width: 1px; 
     border-color: black; 
     border-style: solid; 
     border-bottom: none; 
    
     /* font-size:20px;  */
     height: 35px;
 
     
   
     
     
   }   
   #ucell { 
         border-width: 1px; 
     border-color: black; 
     border-style: solid; 
     border-bottom: none; 
    
     /* font-size:20px;  */
     height: 35px;

   }
   .lowwerCell{ 
      border-width: 1px; 
     border-color: black; 
     border-style: solid; 
     border-left: none; 
     /* font-size:20px;  */
     height: 35px;
  
    

   }   
   .per1 { 
      border-width: 1px; 
     border-color: black; 
     border-style: solid;  
     border-left: none;
     width: 300px; 
     height: 35px; 
     padding-right: 30px;
     
   } 
      .per2 { 
      border-width: 1px; 
     border-color: black; 
     border-style: solid; 
     width: 300px;
     height: 35px; 
     padding-right: 30px;

     
   }
   .period {
     display: flex; 
     flex-direction: row;
     text-align: start;  
   
   }
   .lastCell {
     border-width: 1px;
     border-color: black;
     border-style: solid; 
     height: 51px; 
     /* font-size:20px;  */
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
     /* font-size:20px; */
      

   } 
   .secondBlock {
     margin-top: 5%; 
     width: 95%;
     margin-right: auto;
     margin-left: auto;
   
   } 
   .seccol1 { 
     /* border-width: 1px;
     border-style: solid;
     border-color: black;  */
     /* font-size: 20px;  */
     height: 100px; 
     padding-right: 20px;
     
     
   }  
   .border0 { 
       border-width: 1px;
     border-style: solid;
     border-color: black;  
     border-left: none;
     border-bottom: none;
     
   }
   .seccol2 {
     /* border-width: 1px;
     border-style: solid;
     border-color: black;
     border-right: none;  */
     height: 100px; 
     /* font-size: 20px; */
     padding-right: 20px;

   } 
   .lastBlock { 
     padding-left: 20%;
    
   
     font-weight: bold;  
     padding-top: 8%;
     /* margin-top: 10%;  */
     /* margin-bottom: 7.5%;  */
     /* font-size: 20px; */
     font-weight: bold;
   } 
   .tmweelAmt {
     margin-top:5%; 
     /* font-size: 20px;  */
     border-color: black;
     border-width: 1px;
     border-style: solid; 
     width: 95%; 
     margin-right: auto;
     margin-left: auto;
   } 
      .tmweelAmtM {
    
     /* font-size: 20px;  */
     border-color: black;
     border-width: 1px;
     border-style: solid;
     border-bottom: none; 
     width: 95%; 
     margin-right: auto;
     margin-left: auto;
   } 

   .sjlAlykim {
     display: flex;
     flex-direction: row;
     justify-content: center;
     /* font-size: 20px;  */
     border-width: 1px;
     border-style: solid;
     border-color: black;
     border-bottom: none;
     border-top: none;
     font-weight: bold; 
        width: 95%; 
     margin-right: auto;
     margin-left: auto;
     
     

   } 
   .hdod {
     /* font-size: 20px; */
     font-weight: bold;
     padding-right: 3%;
   }
   .pionts {
     font-weight: bold;
     /* font-size: 20px; */
     padding-right: 5%;
   }
   .amt {
     display: flex; 
     flex-direction: row; 
     justify-content: stretch;
   }
   .amttext {
     display: flex;
     flex-direction: row;
     justify-content: stretch;
   } 
   .piontsBlock {
     border-style: solid;
     border-width: 1px;
     border-color: black;
      width: 95%; 
     margin-right: auto;
     margin-left: auto;
   }
   .totOneBlock {
     margin-top: 5%;   
     width: 95%;
     margin-right: auto;
     margin-left: auto;
   } 
   .lastB {
     /* font-size: 20px;  */
     margin-top: 5%; 
     padding-right: 20px; 
     border-width: 1px; 
     border-color: black; 
     border-style: solid;
   }  
   #1stBlock {
     width: 95%;
     margin-right: auto;
     margin-left: auto;
   } 
   .border00 { 
     border-width: 1px;
     border-color: black;
     border-style: solid;
     border-bottom: none;
   

   } 
   .border01 {
       border-width: 1px;
     border-color: black;
     border-style: solid;
   } 
   .border02 { 
       border-width: 1px;
     border-color: black;
     border-style: solid;
     border-left: none;

   } 
   .border03 { 
     border-width: 1px;
     border-color: black;
     border-style: solid;
    

   } 
   .border08 { 
      border-width: 1px;
     border-color: black;
     border-style: solid;
     border-left: none;

   }
   .border04 { 
      border-width: 1px;
     border-color: black;
     border-style: solid; 
     border-right: none; 
     border-top: none;

   };
   


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
  border-style: solid double;
  border-color: black;
  border-width: 3px;

} 

</style>