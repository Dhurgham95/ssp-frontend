<template> 
<div> 

    <div class="editedPrintBill" id="editedPrintBill" style="width:210mm; height: 297mm">
     <!-- <div class="headerB">
       <div class="headertext1">المصرف الدولي الاسلامي</div>
        <div>
          <img class="headerImage" src="@/assets/imtb_1.png"  width="90%"/>
        </div>
        <div class="headertext2">International Islamic Bank</div>
     </div>
     <div class="headerLine">
       <hr class="hr1" />
       <hr class="hr2" />
       <hr class="hr3" />

     </div> -->
     <div class="buytitle">
       <div>فاتورة بيع</div>
     </div>
  
     <div class="billNum" id="billNum">
       <div>رقم الفاتورة : </div>
       <div>{{this.savedEditedBill.billSeq}}</div>
     </div> 
     <div class="billDate" id="billDate">
       <div>تاريخ الفاتورة :  </div>
       <div>{{this.savedEditedBill.billDate}}</div>
     </div>
     <div class="merchantMain" id="merchantMain1">
       <div>اسم التاجر : </div>
       <div>{{user.fullName}}</div>
       <div>رقم هاتف التاجر : </div> 
       <div>{{user.phoneNumber}}</div> 
     </div> 
      <div class="merchantMain" id="merchantMain2">
       <div>رقم حساب التاجر : </div>
       <div>{{user.accountNumber}}</div>
       <div>اسم الشركة :  </div> 
       <div>{{user.bussinessName}}</div> 
     </div>
     <div class="textk" id="textk">
       يلتزم التاجر بالبيع و تسليم السلع الى الزبون الموطن راتبه حصرا لدى المصرف الدولي الاسلامي   

     </div> 
     <v-row id="singM">
       <v-col cols="2" id="sig">توقيع التاجر او من ينوب عنه</v-col>
       <v-col cols="6">
           <div id="rcorners1">

           </div>
         
       </v-col>
     </v-row> 

      <v-simple-table dense id="maintable">
    <template v-slot:default>
      <thead >
        <tr>
          <th  id="cellb2" class="text-center ">
            المخزن
          </th>
          <th  id="cellb2" class="text-center">
            اسم المادة
          </th> 
          <th  id="cellb2" class="text-center">
             القياس
          </th>
          <th  id="cellb2" class="text-center">
            الكمية

          </th>
          <th   id="cellb2" class="text-center">
            سعر الواحدة
          </th>
          <th  id="cellb2" class="text-center">
             المجموع
          </th>
          <th  id="cellb2" class="text-center">
            العملة
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in editGoodItems"
          :key="item.goodId"
        >
          <!-- <td  id="cellb" class="text-center" >{{ item.Sequence }}</td>  -->
          <td id="cellb" class="text-center">{{ item.goodStore }}</td>
          <td  id="cellb" class="text-center">{{item.goodName}}</td>
          <td id="cellb" class="text-center">{{item.goodDimensions}}</td>
          <td id="cellb" class="text-center">{{item.goodQuentity}}</td>
          <td id="cellb" class="text-center">{{item.unitPrice}}</td>
          <td  id="cellb" class="text-center">{{item.sumPrice}}</td> 
          <td  id="cellb" class="text-center">{{item.currency}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table> 
    <!-- <div class="discount" id="discount">
       <div>الخصم :   </div>
       <div class="highlite">{{this.discount}}</div>
     </div>  -->
       <div class="final" id="final">
       <div>المجموع النهائي:  </div>
       <div class="highlite">{{this.toword}}</div>
     </div> 
     <div id="cus1">
       <div>اسم الزبون : </div>
       <div>{{this.savedEditedBill.customerNameForBill}}</div>
       <div>هاتف الزبون : </div>
       <div>{{this.savedEditedBill.customerPhoneNumberForBill}}</div>
     </div>

      <div id="cus2">
       <div>رقم حساب الزبون :  </div>
       <div>{{this.savedEditedBill.customerAcctNumForBill}}</div>
       <div>عنوان الزبون  </div>
       <div>{{this.savedEditedBill.customerAddressForBill}}</div>
     </div>

     <div id="cus3">
       <div>راتب الزبون</div>
       <div class="hilte">{{this.savedEditedBill.totalSalaryForBill}}</div>
       <div>تاريخ الميلاد</div>
       <div>{{this.savedEditedBill.customerBirth}}</div>
     </div>
     <div id="pay1">
       <div>عدد الاقساط : </div>
       <div class="hilte1">{{this.payResponseData.payCount}}</div>
       <div>مقدار القسط الشهري : </div>
       <div class="hilte2">{{this.monthlyPayToword}}</div>
     </div>
      <div id="pay2">
       <div>تاريخ اول قسط </div>
       <div class="hilte">{{this.savedEditedBill.startPayDateForBill}}</div>
       <div>تاريخ اخر قسط : </div>
       <div class="hilte">{{this.savedEditedBill.endPayDateForBill}}</div>
     </div> 
     <div id="textk1" > اويد استلام جميع المواد بلا ضرر او نقص 
و في حالة حصول خلاف بين التاجر و الزبون لا علاقة للمصرف بذلك</div> 
      <v-row id="singM">
       <v-col cols="2" id="sig"> بصمة الزبون</v-col>
       <v-col cols="4">
           <div id="rcorners2">
           </div>
         
       </v-col> 
         <v-col cols="2" id="sig">توقيع الزبون بعد الاستلام</v-col>
       <v-col cols="4">
           <div id="rcorners2">
           </div>
         
       </v-col>
     </v-row> 
     </div>  
  <div> 
    <v-dialog class="dialog1" id="dialog1" width="800" v-model="goodEditDialog" persistent>
      <v-card>
         <v-card-title>
              <span class="text-h5">تعديل مادة</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedGoodItem.goodStore"
                      label="المخزن"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedGoodItem.goodName"
                      label="اسم المادة"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedGoodItem.goodDimensions"
                      label="الابعاد"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedGoodItem.goodQuentity"
                      label="العدد"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedGoodItem.unitPrice"
                      label="سعر المفردة"
                    ></v-text-field>
                  </v-col> 

                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                   <v-text-field
                 
                   label="العملة" 
                   v-model="editedGoodItem.currency"
                  
                   ></v-text-field>
                    <!-- <v-text-field
                      v-model="editedGoodItem.currency"
                      label="العملة"
                    ></v-text-field> -->
                  </v-col>
                </v-row> 
                <v-row style="display: none !important;">
                  <v-col>
                      <v-text-field
                      v-model="editedGoodItem.goodId"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text> 

             <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="closeEdit()"
              >
                 الغاء
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="Edit()"
              >
                حفظ
              </v-btn>
            </v-card-actions>
      </v-card>

    </v-dialog>
    <v-dialog class="dialog1" id="dialog1" width="1200" v-model="EditBillDialog"> 
      
      
          <v-stepper  
           tile 
           flat
              id="steppr1"
              v-model="e2"
              vertical
            > 

             <v-stepper-step
              :complete="e2 > 1"
               step="1"
             >
              تعديل الفاتورة
         </v-stepper-step> 

          <v-stepper-content step="1" class="stepeditBill">  
            <!-- <div>{{this.savedEditedBill.billSeq}}</div> -->

    <v-card tile flat class="cardstep2">  
      <v-card-text>
            <v-data-table
    :headers="editGoodHeaders"
    :items="editGoodItems"
    
  > 
    <template v-slot:[`item.actions`]= "{ item }">
      <v-icon
        
        class="mr-2" 
        color="blue"
        @click="editGoodAction(item)"
      >
        mdi-pencil
      </v-icon>
    </template>
   </v-data-table>
      </v-card-text> 
        <v-card-actions> 
               <v-btn @click="printEditedBillAndNext" tile  dark color="info">
              الخطوة التالية
            </v-btn> 

            </v-card-actions>
    </v-card> 
          </v-stepper-content> 

          <v-stepper-step 
           :complete="e2 > 2"
               step="2"> 
               ارفاق الفاتورة موقعة
          </v-stepper-step> 
            <v-stepper-content step="2">
       <v-form v-model="attachBillValid">
      <v-card tile flat class="cardstep1">
                <!-- <v-alert
  border="bottom"
  color="red"
  outlined
  text
  type="error" 
  v-model="checkIsGivenAlert4"
>لم يتم الارسال بنجاح يرجى اعادة المحاولة</v-alert> -->
                   
            <!-- <v-card-title>
                ادخل رقم حساب الزبون الخاص بالاستمارة
            </v-card-title> -->
            <v-card-text>
             <!-- <v-text-field
            label="رقم هاتف الزبون"
            placeholder="07xxxxxxxxx" 
            :rules="phoneRule" 
            v-model="customerPhoneNumber"
          ></v-text-field>  -->
            <v-file-input
            show-size 
            chips
      flat
      v-model="editedBillDoc"
      label="الفاتورة مع التواقيع" 
      :rules="phoneRule" 
    ></v-file-input> 

           <!-- <v-card-text> -->
             <!-- <v-text-field
            label="رقم هاتف الزبون"
            placeholder="07xxxxxxxxx" 
            :rules="phoneRule" 
            v-model="customerPhoneNumber"
          ></v-text-field>  --> 
          <v-text-field
            v-model="noteForEditing" 
            label="الملاحظات" 
            :rules="phoneRule" 
          ></v-text-field>
             <!-- <v-text-field>
      
      v-model="noteForEditing" 
      label="رقم هاتف الزبون"
     
      
      :rules="phoneRule" 
    ></v-text-field> -->
      </v-card-text>
      </v-card> 
      </v-form>
      <v-card flat tile> 
      <v-card-actions>
      <v-btn 
         
        tile
        color="primary"
        @click="sendBillToServer"
        :disabled="!attachBillValid"
      >
        انهاء و ارسال
      </v-btn>
      </v-card-actions>
      </v-card>


      
   
    </v-stepper-content> 

            </v-stepper>  
          
          

              <!-- <v-card>
              <v-btn tile block dark color="info">
              حفظ
            </v-btn> 
            </v-card> -->
          
        
    
    </v-dialog>
    <v-card  id="rejectedBillsStyle">
      <v-data-table  
         
    :headers="rejectedBillHeaders"
    :items="rejectedBills"
  
  
    item-key="billSeq"
 
   
    class="elevation-1" 
      
      > 
       <template v-slot:[`item.actions`]="{ item }"> 
     
      <v-icon
        
        class="mr-2" 
        color="blue"
        @click="openEditBillDialog(item)"
      >
        mdi-pencil
      </v-icon>
      </template>
        
      </v-data-table>
    </v-card>
  </div>
</div>
</template> 


<script>
import axios from 'axios'
export default {
  name : "RejectedBills",
  data() {
    return { 
      user: JSON.parse(localStorage.getItem('user')), 
      rejectedBillHeaders : [ 
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
          {text: 'خيارات', value: 'actions', sortable: false} 
         // { text: '', value: 'data-table-expand' }, 
        

      ], 
      rejectedBills : [],
      savedEditedBill: '', 
      e2: 1,
      EditBillDialog : false, 
      editGoodHeaders : [
        {
            text: 'المخزن',
            align: 'start',
            sortable: false,
            value: 'goodStore',
          },
          { text: 'الاسم', value: 'goodName' },
          { text: 'الابعاد', value: 'goodDimensions' },
          { text: 'الكمية', value: 'goodQuentity' },
          { text: 'سعر القطعة', value: 'unitPrice' }, 
           { text: 'المجموع', value: 'sumPrice' }, 
           {text: 'العملة', value: 'currency'},
          {text: 'خيارت', value: 'actions', sortable: false}
      ], 
      editGoodItems : [], 
      goodEditDialog : false, 
      editedGoodItem : {  
        goodId: '',
        goodStore: '', 
        goodName: '', 
        goodDimensions: '', 
        goodQuentity: 0, 
        unitPrice : 0, 
        currency : '',

      },  
        editedGoodItemdefault : {  
        goodId: '',
        goodStore: '', 
        goodName: '', 
        goodDimensions: '', 
        goodQuentity: 0, 
        unitPrice : 0, 
        currency : '',

      },    

      goodIdToEdit : {}, 
      attachBillValid : false, 
      editedBillDoc : null , 
         phoneRule : [
      value => !!value || 'مطلوب',
      ], 
      noteForEditing : '', 
      totalSum : 0 , 
      payResponseData : '', 
      monthlyPayToword : '', 
      billDate : '', 
      toword : ''

    //  editedGoodItemIndex : -1,
   //   cur: ['دينار']
    }
    
  }, 
  methods : {
      getAllBillsForMerchant() {
        axios.post('http://172.31.71.71:5000/Api/Bill/RejectedBillsMerchant', { 
    
          AcctNum : this.user.accountNumber
        }).then( response => {
          console.log(response); 
          this.rejectedBills = response.data
        }).catch(err => {
          console.log(err)
        })
      },  
      openEditBillDialog(item) { 
        this.savedEditedBill = item 
        this.savedEditedBill.startPayDateForBill = this.savedEditedBill.startPayDateForBill.slice(0,10).replace(/-/g,'/') 
        this.savedEditedBill.endPayDateForBill = this.savedEditedBill.endPayDateForBill.slice(0,10).replace(/-/g, '/') 
        this.editGoodItems = [],
        this.EditBillDialog = true 

        setTimeout(() => {this.getGoodsToEdit(item);}, 1000)
      }, 
      editGoodAction(item) {
        console.log(item)
        this.editedGoodItem = item 
        console.log('goodId')
      //  console.log(item.goodId) 
      this.goodIdToEdit = item
        this.goodEditDialog = true 
        setTimeout( () => {this.goodIdToEdit.unitPrice = Math.round(this.goodIdToEdit.unitPrice / 1.1) ;}, 100)
      }, 
      getGoodsToEdit(item) { 
        axios.post('http://172.31.71.71:5000/Api/Bill/getGoodsByBillId', {
         // AcctNum : this.savedEditedBill.billSeq
          AcctNum : item.billSeq
        }).then(response => {
            this.editGoodItems = response.data   
            console.log('aa')
          //  axios.post('http://172.31.71.71:5000/Api/Bill/getGoodDetalis', {
          //    BillId : item.billSeq, 
          //    Id : 
          //  })
          
       
        }).catch(err => {
          console.log(err)
        })

      }, 
      
       closeEdit() { 
        
        console.log('a') 
       // console.log(this.editGoodItems)  
       setTimeout( () => {this.goodIdToEdit.unitPrice = Math.round(this.goodIdToEdit.unitPrice * 1.1 );} , 100)  
       
      //  setTimeout(() => {
      //    this.getGoodsToEdit(this.goodIdToEdit)
      //    console.log('ss') 
        
      //  }, 150); 

      axios.post('http://172.31.71.71:5000/Api/Bill/getBillGood', {
        AcctNum : this.goodIdToEdit.billId
      }).then (response => {
        console.log("zzz")
        this.editGoodItems = response.data 
        this.getSum()
      })

     
       
         
    
       this.goodEditDialog = false  
    
       


       
    //   this.getGoodsToEdit()
  //     this.goodIdToEdit = Object.assign({}, this.goodIdToEdit)
      // this.goodIdToEdit = this.goodIdToEdit 

      }, 
      Edit() {  
        this.goodIdToEdit.unitPrice = 1.1 * this.goodIdToEdit.unitPrice, 
        axios.put('http://172.31.71.71:5000/Api/Good/Update/' + this.goodIdToEdit.goodId, {
           GoodName : this.goodIdToEdit.goodName,
            GoodStore : this.goodIdToEdit.goodStore,
            GoodDimensions : this.goodIdToEdit.goodDimensions,
            GoodQuentity :  parseInt(this.goodIdToEdit.goodQuentity), 
            Currency : this.goodIdToEdit.currency,
           // SumPrice : this.goodIdToEdit.SumPrice,
            UnitPrice :parseInt(this.goodIdToEdit.unitPrice),
        }).then(response => { 
          console.log(response) 
          this.getSum()

        })

        console.log('editing...')  


        setTimeout( () => {axios.post('http://172.31.71.71:5000/Api/Bill/getBillGood', { 
        AcctNum : this.goodIdToEdit.billId
      }).then (response => { 
        console.log("zzz")
        this.editGoodItems = response.data 
        this.getSum()
      })

     
       
         
    
       this.goodEditDialog = false  
        }, 200)
       // console.log(item.goodId)
       // axios.post()

      },  
      sendBillToServer () {  
         this.getSum() 
         this.savedEditedBill.monthlyPayAmt = Math.round(this.savedEditedBill.billAmount / this.savedEditedBill.payCountForBill).toString();
        
        setTimeout( () => { let formData = new FormData(); 

           formData.append('BillDoc1', this.editedBillDoc) 
           formData.append('BillAmount', this.totalSum.toString())
           formData.append('MonthlyPayAmt', this.savedEditedBill.monthlyPayAmt.toString())   
           formData.append('NoteThree', this.noteForEditing) 

        //   console.log(this.totalSum.toString()) 
         //  console.log(this.savedEditedBill.monthlyPayAmt.toString()) 

          // this.savedEditedBill.monthlyPayAmt = this.toString.toString(); 
           this.savedEditedBill.billAmount = this.totalSum.toString(); 
           
           console.log(this.savedEditedBill.monthlyPayAmt)

           axios.put('http://172.31.71.71:5000/Api/Bill/EditRejectedBill/' + this.savedEditedBill.billSeq , 
           formData, 

          {
           headers: {
               'Content-Type': 'multipart/form-data'
            }
          }).then(response => {
            console.log(response)
          }).catch(error => {
            console.log(error)
          })


       console.log("dk") 
          console.log(this.savedEditedBill.monthlyPayAmt) }, 200) 

      setTimeout( () => {axios.put('http://172.31.71.71:5000/Api/Bill/RestEditedBill/' + this.savedEditedBill.billSeq).then(resp => { 
         console.log(resp);  

         this.EditBillDialog = false; 
         this.goodEditDialog = false;

         

       }).catch(err => {
         console.log(err)
       })
      }, 800)


       
      }, 
      printEditedBillAndNext() {   
        this.getSum()
        // console.log('s1')
        // console.log(this.savedEditedBill.mo)
         setTimeout( () => { axios.post('http://172.31.71.71:5000/api/askBank/Pay3', {  
       
     
        "MonthlySalary": parseInt(this.savedEditedBill.totalSalaryForBill), 
        "BillAmount": parseFloat(this.totalSum), 
        "NumberOfMonths" : parseInt(this.savedEditedBill.payCountForBill),
        
      }).then(response => {  
         console.log('3') 
         console.log(this.savedEditedBill.totalSalaryForBill) 
         console.log(this.totalSum) 
         console.log(this.savedEditedBill.payCountForBill)
        if(response.data.monthlyPay != 0) {
        console.log(response.data); 
        this.payResponseData = response.data;  
         console.log('4') 
         this.savedEditedBill.monthlyPayAmt = response.data.monthlyPay.toFixed(0);
        // this.endDate = response.data.endDate.replace('T00:00:00','') 
        // this.endDate = response.data.endDate.slice(0,10).replace(/-/g,'/') 
          console.log('5')
      //  console.log
      //  this.startDate = response.data.startDate.slice(0,10).replace(/-/g,'/')
        this.monthlyPay = response.data.monthlyPay.toFixed(3) 
         console.log('6')
        axios.post('http://172.31.71.71:5000/Api/Bill/ConvertToWord', {
          AcctNum : response.data.monthlyPay.toFixed(0), 

        }).then(res => {
           console.log('7')
          console.log(res) 
          this.monthlyPayToword = res.data;   
           // setTimeout(() => {this.goodEditDialog = false;}, 1350)  
            setTimeout(() => {this.EditBillDialog = false;}, 1400) 

           // EditBillDialog

            setTimeout(() => {window.print();}, 1500)   
           // setTimeout(() => {this.goodEditDialog = true;}, 1650)  
            setTimeout(() => {this.EditBillDialog = true;}, 1600) 
           setTimeout(() => {this.e2 = 2} , 1650) 
          // this.e2 = 2
          console.log('8')

        })
        //console.log(this.monthlyPay)
        this.billDate = new Date().toJSON().slice(0,10).replace(/-/g,'/') 
       // this.savedEditedBill.startPayDateForBill.slice(0,10).replace(/-/g, '/') 
       // this.savedEditedBill.ePayDateForBill.slice(0,10).replace(/-/g, '/')
        console.log('8')
       // console.log(this.payResponseData) 
      //  console.log(this.savedEditedBill) 
        console.log('9')
        
       

      //  this.printBill() 
    

        

        
     
        } 
        // else { 
        //   console.log('11')
        //   console.log("dataresponeError"); 
        //   this.checkIsGivenAlert3 = true  
        
          
        // } 

      }); }, 500)
       // console.log(this.savedEditedBill)
        //this.e2 = 2
      }, 

      returntoTheFirstStep(val) { 
        if(val== false) {
        this.e2 = 1
        }
      
      }, 

       getSum () {
         axios 
          .post(
            'http://172.31.71.71:5000/Api/Good/sum', { 
     
              AcctNum : this.savedEditedBill.billSeq
              // MerchantAcctNum : this.user.accountNumber, 
              // CustomerAcctNum : this.payResponseData.accountNamberPa
           
            }) 
            .then((respnonse) => { 
              console.log(respnonse)
              this.totalSum = respnonse.data;  

             axios.post('http://172.31.71.71:5000/Api/Bill/ConvertToWord', {
               AcctNum : respnonse.data.toString(),
             }).then(resp => {
               console.log(resp) 
               this.toword = resp.data
             })
             
            
      
            
            });
  } , 
 


  }, 
    // watch: {
    //   goodEditDialog (val) {
    //    val || this.closeEdit()  
   
      
    //   },
    
   // }, 
   watch : {
     EditBillDialog(val) {
       this.returntoTheFirstStep(val)
     }
   },
  created () {
      this.getAllBillsForMerchant(); 
     // this.getGoodsToEdit();
    
    }
}
</script>

<style>
.cardstep2 {
  width: 95%;
  margin-left: auto;
} 

.stepeditBill {
  overflow-y: scroll;
}

@media print { 

  #steppr1 {display: none !important;}
   /* #printSection{ direction: rtl;
   margin-left: 30%;
   }  */
   /* *{
     direction: rtl;
     box-shadow: none;
     text-shadow: none;
     
     
   }  */ 
   #dialog1 {display: none !important;} 
   dialog1 {display: none !important;}
   #appbar {display: none;}  
    #drawer0  {display: none !important;}  
    /* #drawer0 * {display: none !important;} */
    #toolbar {display: none;} 
   #rejectedBillsStyle {display: none !important; }
   #card0 {display: none !important;}
   #editedPrintBill {
  
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
/* #discount {
  display: grid;
  grid-template-columns: 8% 30%;
  margin-top:2%;
  font-weight: bold;
  font-size: 16px;
  
}  */
#final {
  display: grid;
  grid-template-columns: 17% 50%;
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
.hilte1 {
  background-color: greenyellow ; 
  width: 40px;
}
.hilte2 { 
   background-color: greenyellow ; 
  
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
  grid-template-columns: 17% 20% 15% 40%;
  margin-top: 1%;
}
#pay2 {
  display: grid;
  grid-template-columns: 20% 41% 20% 14%;
  margin-top: 1%;
  
} 
/* #chipwidth {
  width: 100%;
} */
} 


/* @page {
  size:A4 portrait;
   -webkit-print-color-adjust: exact;  
    margin-left: 2.5cm;
    margin-right: 1.5cm;
   
  

} */

.editedPrintBill {
  /* position: absolute; */ 
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1; 

} 
.cardstep1 {
  width: 95%;
  margin-left: auto;
}
/* #header {
  display: flex;
  justify-content: flex-end; 
    page-break-after:always 

  
} */


/* .colorbb {
  color: green; 
} */

/* .loadingCard {
  background-color: white;
  opacity: 0.35;
  width: 100%;
  height: 100%;
  
}  */
.loadingClass { 
  position: relative; 

  z-index: 3;

}
</style>