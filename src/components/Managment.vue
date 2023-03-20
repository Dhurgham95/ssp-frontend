<template>
    <div> 

     <div class="rtyy" id="rtyy" style="width:210mm; height: 297mm">
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
       <div>{{user.accountNumber + billAdditionalSeq}}</div>
     </div> 
     <div class="billDate" id="billDate">
       <div>تاريخ الفاتورة :  </div>
       <div>{{this.billDate}}</div>
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
          v-for="item in desserts"
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
       <div>{{this.personalAccountResponseData.fullNameArabPa}}</div>
       <div>هاتف الزبون : </div>
       <div>{{this.personalAccountResponseData.numberPhone1Pa}}</div>
     </div>

      <div id="cus2">
       <div>رقم حساب الزبون :  </div>
       <div>{{this.personalAccountResponseData.accountNamberPa}}</div>
       <div>عنوان الزبون  </div>
       <div>{{this.personalAccountResponseData.homeAdressPa}}</div>
     </div>

     <div id="cus3">
       <div>راتب الزبون</div>
       <div class="hilte">{{this.personalAccountResponseData.monthlyEstimatePa}}</div>
       <div>تاريخ الميلاد</div>
       <div>{{this.cusBirth}}</div>
     </div>
     <div id="pay1">
       <div>عدد الاقساط : </div>
       <div class="hilte1">{{this.payResponseData.payCount}}</div>
       <div>مقدار القسط الشهري : </div>
       <div class="hilte2">{{this.monthlyPayToword}}</div>
     </div>
      <div id="pay2">
       <div>تاريخ اول قسط </div>
       <div class="hilte">{{this.startDate}}</div>
       <div>تاريخ اخر قسط : </div>
       <div class="hilte">{{this.endDate}}</div>
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

     <v-progress-linear
        :active="loadingContent"
        :indeterminate="loadingContent"
        absolute 
        height="10"
        bottom
        color="warning" 
        class="loadingClass"
      ></v-progress-linear>
       <!-- <v-card elevation="3" class="loadingCard" v-if="loadingContent">
       <v-progress-circular
      :size="100"
      :width="10"
      color="purple"
      indeterminate
    ></v-progress-circular>
       </v-card> -->
     <v-alert
  type="success"
  v-model="sendAlert"
>تم االارسال بنجاح</v-alert>

      <v-stepper 
      v-if="!loadingContent"
      id="steppr0"
    v-model="e5"
    vertical
  >
    <v-stepper-step
       :complete="e5 > 1"
      step="1"
    >
    رقم الهاتف الخاص بالزبون
    </v-stepper-step>

    <v-stepper-content step="1">
      <!-- <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card> --> 
      <v-form v-model="phoneFormValid">
      <v-card tile flat class="cardstep1">
                <v-alert
  border="bottom"
  color="red"
  outlined
  text
  type="error" 
  v-model="checkIsGivenAlert"
>رقم الزبون غير صحيح او الزبون لا يمكن منحه</v-alert>
                   
            <!-- <v-card-title>
                ادخل رقم حساب الزبون الخاص بالاستمارة
            </v-card-title> -->
            <v-card-text>
             <v-text-field
            label="رقم هاتف الزبون" 
            type="number"
            placeholder="07xxxxxxxxx" 
            :rules="phoneRule" 
            v-model="customerPhoneNumber"
          ></v-text-field> 
            </v-card-text>
      </v-card> 
      </v-form>
      <v-btn
        color="primary"
        @click="sendPhoneNumber" 
        :disabled="!phoneFormValid"

      >
        استمرار
      </v-btn>
      <!-- <v-btn text>
        الغاء
      </v-btn> -->
    </v-stepper-content>

    <v-stepper-step
     :complete="e5 > 2"
      step="2"
    >
      رمز التاكيد
    </v-stepper-step>

    <v-stepper-content step="2"> 
       <v-form v-model="otpFormValid">

       <v-card tile flat class="cardstep1">
                <v-alert
  border="bottom"
  color="red"
  outlined
  text
  type="error" 
  v-model="checkIsGivenAlert2"
>  رمز التاكيد غير صحيح </v-alert>
                   
            <!-- <v-card-title>
                ادخل رقم حساب الزبون الخاص بالاستمارة
            </v-card-title> --> 
           
            <v-card-text>
             <v-text-field
            label="رمز التاكيد"
            v-model="otp" 
            :rules="otpRule"
          ></v-text-field> 
            </v-card-text>
            
      </v-card>
  
      <v-btn
        color="primary" 
        :disabled="!otpFormValid"
        @click="checkOtp"
      >
        استمرار 
      </v-btn>
      <!-- <v-btn text>
        الغاء
      </v-btn> --> 
      </v-form>
    </v-stepper-content> 


     <v-stepper-step
       :complete="e5 > 3"
      step="3"
    >
       الفاتورة
    </v-stepper-step>

    <v-stepper-content step="3"> 

    <v-card tile flat class="cardstep1"> 
    
       <!-- <v-chip 
      color="orange" 
      
      
      
    
      large
    >
      <v-row>
        <v-col style="font-size: 20px; font-weight:bold; color: black;">لا يجب ان تتجاوز الفاتورة مبلغ  </v-col>
        <v-col style="font-size: 20px; font-weight:bold; color: black; text-decoration: underline; " >{{this.maxBill}}</v-col>
      </v-row>
    </v-chip> -->
                 <v-alert
  border="bottom"
  color="red"
  outlined
  text
  type="error" 
  v-model="checkIsGivenAlert3"
>مبلغ الفاتورة يتجاوز الحد المسموح</v-alert>
    <v-card-text>
    <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>المواد</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              مادة جديدة
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
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
                      v-model="editedItem.goodStore"
                      label="المخزن"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.goodName"
                      label="اسم المادة"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.goodDimensions"
                      label="الابعاد"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.goodQuentity"
                      label="العدد"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.unitPrice"
                      label="سعر المفردة"
                    ></v-text-field>
                  </v-col> 

                    <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                   <v-select
                   :items="cur"
                   label="العملة" 
                   v-model="editedItem.currency"
                  
                   ></v-select>
                    <!-- <v-text-field
                      v-model="editedItem.currency"
                      label="العملة"
                    ></v-text-field> -->
                  </v-col>
                </v-row> 
                <v-row style="display: none !important;">
                  <v-col>
                      <v-text-field
                      v-model="editedItem.goodId"
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
                @click="close"
              >
                 الغاء
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                حفظ
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">هل انت متاكد من مسح هذا العنصر ؟</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">الغاء</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">موافق</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        
        class="mr-2" 
        color="blue"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        
        color="red"
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-card>
        <v-card-text style="font-weight:bold;">
          لا توجد بيانات
        </v-card-text>
      </v-card>
      <!-- <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn> -->
    </template>
  </v-data-table>  

   
  </v-card-text> 

    <v-slider
      v-model="ex3.val"
      :label="ex3.label"  
      min="1" 
      max="18"
      :thumb-color="ex3.color"
      thumb-label="always"
    ></v-slider>
  <!-- <v-row>
    <v-col style="font-weight:bold; fonr-size: 28" cols="2" offset-md="1" offset-lg="4" offset-xl="4"> المجموع الكلي : </v-col> 
    <v-col style="font-weight:bold; fonr-size: 28" cols="3"  >{{totalSum}}</v-col>

  </v-row> -->
  </v-card> 
 
      <v-btn
        color="primary"
        @click="sendBillItems"
      >
        استمرار 
      </v-btn>
      <!-- <v-btn text>
        الغاء
      </v-btn> -->
    </v-stepper-content> 

     <!-- <v-stepper-step
      :complete="e5 > 4"
      step="4"
    >
    طباعة القائمة
    </v-stepper-step>

    <v-stepper-content step="4"> -->
      <!-- <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card> --> 

      <!-- <v-card tile flat class="cardstep1">
        
            <v-card-text>
            تم تنزيل الفاتورة
            </v-card-text>
      </v-card>
      <v-btn
        color="primary"
        @click="e5 = 5"
      >
        استمرار
      </v-btn>
    </v-stepper-content> -->

    <!-- <v-stepper-step
      :rules="[() => false]"
      step="3"
    >
      Ad templates
      <small>Alert message</small>
    </v-stepper-step>

    <v-stepper-content step="3">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px"
      ></v-card>
      <v-btn
        color="primary"
        @click="e5 = 4"
      >
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content> --> 

    

    <v-stepper-step  :complete="e5 > 4"
      step="4">
      ارفاق الفاتورة موقعة
    </v-stepper-step>

    <v-stepper-content step="4">
       <v-form v-model="attachBillValid">
      <v-card tile flat class="cardstep1">
                <v-alert
  border="bottom"
  color="red"
  outlined
  text
  type="error" 
  v-model="checkIsGivenAlert4"
>لم يتم الارسال بنجاح يرجى اعادة المحاولة</v-alert>
                   
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
      v-model="billDoc"
      label="الفاتورة مع التواقيع" 
      :rules="phoneRule" 
    ></v-file-input>
      </v-card-text>
      </v-card> 
      </v-form>

      <v-btn
        color="primary"
        @click="sendBillToServer"
        :disabled="!attachBillValid"
      >
        استمرار
      </v-btn>


      
   
    </v-stepper-content> 

    

   
      <!-- <v-btn text>
        الغاء
      </v-btn> -->
  </v-stepper>

     
 
    </div>
</template>

<script> 



// import Test from './Test.vue'

import axios from 'axios' 
export default { 
  //  components : { 
  //    WebViewer,
    

  //  },
  // components : {
  

  // },
    name: 'Managment' , 
   
    data ()  {  
      return { 
       // maxBill: 0,   
        billDoc : null,  
        loadingContent: false,
        toword : '',
        sendAlert : false,
        attachBillValid: false,
        payResponseData : '',  
        personalAccountResponseData: '',
        //files:'',
        
      //  personalAccountResponseData: '',
     //   billAdditionalSeq : this.randomNumber(1,100000000).toString(),
        // billAdditionalSeq : this.randomNumber(1,1000000000).toString, 
          billAdditionalSeq :Math.floor(100000 + Math.random() * 9000000000),
       // alert: false, 
        //checkIsGivenAlert : false,
       // summ: 0, 
       // netsal : 0,
        // driverName: "هاشم عماد",
        // equiterNamer: 'علي هاشم',
        // StoreKeepr: 'امير عدنان',
         // dialog: false,
      //dialogDelete: false, 
      // headers: [
      //   {
      //     text: 'ت',
      //     align: 'start',
      //     sortable: false,
      //     value: 'Sequence',
      //   }, 
      //   { text: ' المخزن', value: 'GoodStore' },
      //   { text: 'قياس القطعه', value: 'GoodDimensions' },
      //   { text: 'اسم المادة', value: 'GoodName' },
      //   { text: 'الكمية', value: 'GoodQuentity' },
      //   { text: 'سعر الواحدة', value: 'UnitPrice' },
      //   {text : 'المجموع' , value: 'SumPrice'},
      //   { text: 'خيارات', value: 'actions', sortable: false }, 
        
      // ],
     // goods: [], 
     // billNum: 12233, 
       billDate: '',
      // merchantName : "علي عماد", 
     //  merchantPhoneNumber: "078092123123", 
      // merchantAcctNum: "12342221", 
     //  merchantBussinessName : this.user.bussinessName,
      // merchantBussinessName : user.bussineesName, 
      // discount: 20000,
      // finalSum: 20000000, 
      // cusName: "احمد عادل", 
     //  cusPhone: "078093454221", 
     //  cusAcctNum: '', 
     //  cusAdress: "الدورة",
     //  cusSalary: "950000", 
       cusBirth: '', 
     //  payCount: "24", 
     //  payMonth: "345000", 
     // payMounth: this.payResponseData.payCount.toFixed(3),
       monthlyPay : 0, 
       monthlyPayToword: '',
       startDate: '' ,
       endDate: '',
       ex3: { label: 'عدد الاشهر ', val: 12, color: 'green' },
      phoneFormValid: false,
      otpFormValid : false,
      cur: ['دينار '], 
      totalSum : 0,  
     // totalSumWords : '',
      phoneRule : [
      value => !!value || 'مطلوب',
      ], 
      otpRule : [
      value => !!value || 'مطلوب',
      ],
      dialog: false,
      dialogDelete: false,
       headers: [
        // {text: 'Id', value: 'goodId', align: ' d-none d-lg-none d-sm-none d-cols-none d-xl-none d-xs-none', sortable: false }, 
         {text: 'Id', value: 'goodId', align: ' d-lg-none d-sm-none d-cols-none d-xl-none d-xl-none', sortable: false },
        { text: ' المخزن', value: 'goodStore' },
        { text: 'قياس القطعه', value: 'goodDimensions' },
        { text: 'اسم المادة', value: 'goodName' },
        { text: 'الكمية', value: 'goodQuentity' },
        { text: 'سعر الواحدة', value: 'unitPrice' },
        {text : 'المجموع' , value: 'sumPrice'},
        { text: 'العملة', value: 'currency'},
        { text: 'خيارات', value: 'actions', sortable: false },  
        
      ], 
     // accountNumber: '',
     customerPhoneNumber: '',
      desserts: [],
      editedIndex: -1,
      editedItem: { 
        goodId: '',
        goodStore: '',
        goodName: '',
        goodDimensions: '',
        goodQuentity: 0,
        unitPrice: 0,
        currency: '',
        
      },
      defaultItem: {
        goodId: '',
        goodStore: '',
        goodName: '',
        goodDimensions: '',
        goodQuentity: 0,
        unitPrice: 0,
        currency : '',
      },

          

     
        
        //table  
       // e13: 1, 
       checkIsGivenAlert2 : false, 
       checkIsGivenAlert : false, 
       checkIsGivenAlert3 : false,
       checkIsGivenAlert4 : false,

       otp: '', 
       e5: 1,
       
     
    

        ///next
      
        user: JSON.parse(localStorage.getItem('user')), 
        cusDate : JSON.parse(localStorage.getItem('customer')), 
       // text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        } 

    },  

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'مادة جديدة' : 'تعديل مادة'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize() 
      //this.getSum()
     // this.caltotSum()
    }, 
  

 
  methods: {   
    
    
    
    reloadPage(){
    window.location.reload()
    this.e5 = 3
    }, 

    sendBillItems () {   
      console.log('1')
      this.getSum() 
      console.log(parseInt(this.personalAccountResponseData.monthlyEstimatePa))
      console.log("pa")
      console.log(this.personalAccountResponseData)
      console.log(parseInt(this.ex3.val))
      console.log(parseFloat(this.totalSum)) 
     console.log('2')
     // console.log(this.getSum())

      axios.post('http://172.31.71.71:5000/api/askBank/Pay3', {  
       
     
        "MonthlySalary": parseInt(this.personalAccountResponseData.monthlyEstimatePa), 
        "BillAmount": parseFloat(this.totalSum), 
        "NumberOfMonths" : parseInt(this.ex3.val),
        "CustomerAcctNum" : this.personalAccountResponseData.accountNamberPa
        
      }).then(response => {  
         console.log('3')
        if(response.data.monthlyPay != 0) {
        console.log(response.data); 
        this.payResponseData = response.data;  
         console.log('4')
        // this.endDate = response.data.endDate.replace('T00:00:00','') 
         this.endDate = response.data.endDate.slice(0,10).replace(/-/g,'/') 
          console.log('5')
      //  console.log
        this.startDate = response.data.startDate.slice(0,10).replace(/-/g,'/')
        this.monthlyPay = response.data.monthlyPay.toFixed(3) 
         console.log('6')
        axios.post('http://172.31.71.71:5000/Api/Bill/ConvertToWord', {
          AcctNum : response.data.monthlyPay.toFixed(0),
        }).then(res => {
           console.log('7')
          console.log(res) 
          this.monthlyPayToword = res.data; 
          console.log('8')

        })
        console.log(this.monthlyPay)
        this.billDate = new Date().toJSON().slice(0,10).replace(/-/g,'/') 
        console.log('8')
        console.log(this.payResponseData) 
        console.log(this.personalAccountResponseData) 
        console.log('9')
        
       

        this.printBill() 

        

        
        this.e5 = 4
        } 
        else { 
          console.log('11')
          console.log("dataresponeError"); 
          this.checkIsGivenAlert3 = true  
        
          
        } 

      })

    },

    sendPhoneNumber () {
      axios.post('http://172.31.71.71:5000/Api/Test/otp' ,{ 
      
        AcctNum : this.customerPhoneNumber
      }).then (response => {
        console.log(response.data)
        if(response.data == true)  {
          this.e5 = 2
        }
        else { 
          console.log("error") 
          this.checkIsGivenAlert = true
        }
      }).catch(err => {
        console.log(err)
      })

    }, 
    checkOtp () { 
        axios.post('http://172.31.71.71:5000/Api/Test/codeOtp' ,{ 
      
        AcctNum : this.otp
      }).then (response => {
        console.log(response.data)
        if(response.data)  { 
          console.log(response.data) 
          this.personalAccountResponseData = response.data 
          this.cusBirth = response.data.dateOfBirthPa.slice(0,10).replace(/-/g,'/')
         // this.maxBill = response.data.monthlyEstimatePa * 
         // this.reloadPage() 

          this.e5 = 3
        }
        else {
          console.log("error") 
          this.checkIsGivenAlert2 = true 
         // this.e5= 2
        }
      }).catch(err => {
        console.log(err)
      }) 

      // this.checkIsGivenAlert2 = true

    },

    //  caltotSum () {  
    //    console.log(this.desserts) 

    //    for (var i = 0; i< parseInt(this.desserts.length); i++) { 
         
    //      this.totalSum = this.totalSum + this.desserts[i].SumPrice; 
    //      console.log(this.desserts[i].SumPrice)
    //      console.log(this.totalSum)
    //    }

    //  },

     initialize () {
        //this.desserts = [],

         console.log("aaa")

         axios 
          .post(
            'http://172.31.71.71:5000/Api/Good/GetAll', { 
     
            //  MerchantAcctNum: "23945", 
            //  CustomerAcctNum : "23090", 
            // MerchantAcctNum : this.user.accountNumber, 
            // CustomerAcctNum : this.personalAccountResponseData.accountNamberPa 
            BillId : this.user.accountNumber + this.billAdditionalSeq
            
              // MerchantAcctNum : this.user.accountNumber, 
              // CustomerAcctNum : this.payResponseData.accountNamberPa
           
            }) 
            .then((respnonse) => {
           
              this.desserts = respnonse.data; 
              console.log(this.desserts)
            
            }); 

            this.getSum();

           // location.reload();

        
      
      },

      editItem (item) {  
        console.log('openDialog')
        setTimeout(() => {(this.desserts.unitPrice = this.desserts.unitPrice / 1.1).toFixed(0);}, 50)
        setTimeout(() => { 
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true  

        }, 100)
      
       
       // setTimeout(() => {this.editedItem.}) 
       setTimeout(() => {console.log(this.editedItem.unitPrice)}, 120)
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      // deleteItemConfirm () {
      //   this.desserts.splice(this.editedIndex, 1)
      //   this.closeDelete()
      // },

       deleteItemConfirm () {

          axios.delete('http://172.31.71.71:5000/Api/Good/Delete/' + this.editedItem.goodId , {
      
          }).then(response => { 
            
            console.log(response)
           
        this.desserts.splice(this.editedIndex, 1)
        
           
           
          
        });
        this.closeDelete()
         this.initialize();
       },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      // save () {
      //   if (this.editedIndex > -1) {
      //     Object.assign(this.desserts[this.editedIndex], this.editedItem)
      //   } else {
      //     this.desserts.push(this.editedItem)
      //   }
      //   this.close()
      // },

       save () {
        if (this.editedIndex > -1) { 
          //this.editedItem.unitPrice = Math.ceil(this.editedItem.unitPrice / 1.1) 
      //     setTimeout(() => {(this.editedItem.UnitPrice = this.editedItem.UnitPrice * 1.1).toFixed(0);}, 100) 
     // this.editedItem.UnitPrice = (this.editedItem.UnitPrice * 1.1).toFixed(0)
          Object.assign(this.desserts[this.editedIndex], this.editedItem) 
            // console.log(this.editedItem)
            axios.put('http://172.31.71.71:5000/Api/Good/UpdateM/' + this.editedItem.goodId, {  
     
            GoodName : this.editedItem.goodName,
            GoodStore : this.editedItem.goodStore,
            GoodDimensions : this.editedItem.goodDimensions,
            GoodQuentity :  parseInt(this.editedItem.goodQuentity), 
            Currency : this.editedItem.currency,
           // SumPrice : this.editedItem.SumPrice,
            UnitPrice :parseInt(this.editedItem.unitPrice),
          //  AdminName : this.editedItem.userName, 
          //   AdminDepartment: this.editedItem.department, 
          //  AdminBranch: this.editedItem.branch, 
          //  AdminPassword: this.editedItem.password, 
          //  AdminConfirmPassword: this.editedItem.password
           }).then(response => {
            console.log(response)
            this.initialize(); 
            })} 
            else { 

             // this.editedItem.unitPrice = (this.editedItem.unitPrice * 1.1).toFixed(0) 
              

            //  console.log(this.user.accountNumber.toString()) 
            //  console.log(this.billAdditionalSeq.toString())
            //  console.log(this.editedItem.GoodName.toString())
            //  console.log(this.editedItem.GoodStore.toString())
            //  console.log(this.editedItem.GoodDimensions.toString()) 
            //  console.log(parseInt(this.editedItem.GoodQuentity))
             // console.log(parseInt(this.editedItem.UnitPrice))
           //   console.log( this.user.accountNumber.toString()),
            //  console.log( this.personalAccountResponseData.accountNamberPa.toString())


             
         //  console.log(this.editedItem.currency.toString());
               //this.loading = true; 
           axios.post('http://172.31.71.71:5000/Api/Good/Add', { 
     
            //BillId  : this.user.accountNumber.toString() + this.billAdditionalSeq.toString(),  
            BillId : this.user.accountNumber.toString() + this.billAdditionalSeq.toString(), 
            GoodName : this.editedItem.goodName.toString(),
            GoodStore : this.editedItem.goodStore.toString(),
            GoodDimensions : this.editedItem.goodDimensions.toString(),
            GoodQuentity : parseInt(this.editedItem.goodQuentity),
          //  SumPrice : this.editedItem.SumPrice,
            UnitPrice : parseInt(this.editedItem.unitPrice), 
            Currency : this.editedItem.currency,

           // MerchantAcctNum : this.user.accountNumber.toString(), 
           MerchantAcctNum : "23945",
           // CustomerAcctNum : this.personalAccountResponseData.accountNamberPa.toString(), 
           CustomerAcctNum : "23090",
         //   Seq: this.
            
            // AdminName: this.editedItem.userName, 
            // AdminBranch : this.editedItem.branch, 
            // AdminDepartment : this.editedItem.department, 
            // AdminPassword : this.editedItem.password,
            // AdminConfirmPassword : this.editedItem.password,
          }).then(response => { 
             console.log(this.editedItem.currency)
             console.log(response.data.currency)

            console.log(response)
            this.initialize();
          })


          this.desserts.push(this.editedItem)
        }
        this.close()
      },  

       getSum () {
         axios 
          .post(
            'http://172.31.71.71:5000/Api/Good/sum', { 
     
              AcctNum : this.user.accountNumber + this.billAdditionalSeq
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
             
            
              
            
           
              //this.desserts = respnonse.data; 
             // console.log(this.desserts)
            
            });
  } , 

    print() {
       this.checkPrint = false
       setTimeout(() => {  window.print();  }, 1000);

       setTimeout(() => {this.checkPrint = true}, 1000)
    }, 

    printBill() {
      setTimeout(() => { window.print(); }, 1000) 
    },

     sendBillToServer () { 
         //thi.user.accountNumber
         let formData = new FormData(); 
           formData.append('BillSeq', this.user.accountNumber + this.billAdditionalSeq)
           formData.append('BillDate', this.billDate) 
           formData.append('MerchantNameForBill', this.user.fullName)
           formData.append('MerchantAcctNumForBill', this.user.accountNumber)
           formData.append('MerchantPhoneNumber', this.user.phoneNumber) 
           formData.append('BillAmount', this.totalSum.toString() )
           formData.append('MerchantBussinessName', this.user.bussinessName)
           formData.append('CustomerNameForBill', this.personalAccountResponseData.fullNameArabPa)
           formData.append('CustomerAcctNumForBill', this.personalAccountResponseData.accountNamberPa)
           formData.append('CustomerBirth', this.cusBirth)
           formData.append('CustomerAddressForBill', this.personalAccountResponseData.homeAdressPa)
           formData.append('CustomerPhoneNumberForBill', this.personalAccountResponseData.numberPhone1Pa)
           formData.append('TotalSalaryForBill', this.personalAccountResponseData.monthlyEstimatePa.toString())
           formData.append('PayCountForBill', this.payResponseData.payCount.toString())
           formData.append('MonthlyPayAmt', this.monthlyPay.toString()) 
           formData.append('StartPayDateForBill', this.startDate)
           formData.append('EndPayDateForBill', this.endDate)
           formData.append('BillDoc1', this.billDoc) 
            formData.append('billStatus', "غير مدفوعة")
           formData.append('UserId', this.user.userId) 
          
         
                //  MerchantNameForBill = bill.MerchantNameForBill, 
                //  MerchantAcctNumForBill = bill.MerchantAcctNumForBill, 
                //  MerchantPhoneNumber = bill.MerchantPhoneNumber, 
                //  MerchantBussinessName = bill.MerchantBussinessName, 
               //  Goods = bill.Goods, 
             //    BillAmount = bill.BillAmount, 
                //  BillDiscount = bill.BillDiscount, 
                //  CustomerNameForBill = bill.CustomerAcctNumForBill, 
                //  CustomerAcctNumForBill = bill.CustomerAcctNumForBill, 
                //  CustomerBirth = bill.CustomerBirth,
                //  CustomerAddressForBill = bill.CustomerAddressForBill, 
                //  CustomerPhoneNumberForBill = bill.CustomerPhoneNumberForBill, 
                //  TotalSalaryForBill = bill.TotalSalaryForBill, 
                //  PayCountForBill = bill.PayCountForBill, 
                //  MonthlyPayAmt = bill.MonthlyPayAmt, 
                //  StartPayDateForBill = bill.StartPayDateForBill, 
                //  EndPayDateForBill = bill.EndPayDateForBill, 
                //  BillDoc1 = bill.BillDoc1, 
                //  Bill1IncertedOn = DateTime.Now , 
                //  UserId = bill.UserId 


         axios.post( 'http://172.31.71.71:5000/Api/Bill/BillS1',  
         
                 formData,
         
          {
           headers: {
               'Content-Type': 'multipart/form-data'
            }
          }
          
        ).then(
         response => {
            console.log(response)  
             // setTimeout(() => {  this.sendAlert = true  }, 1000);
                this.sendAlert = true  ;


              setTimeout(() => {this.$router.push('/ListOfBills'); }, 1700)  

              setTimeout(() => {this.loadingContent = true}, 1300)
              setTimeout(() => {this.loadingContent = false}, 1700)

             // setTimeout(() => {this.loadingContent = true}, 1300) 
             // setTimeout(() => {this.loadingContent = false}, 1500)




              //this.$router.push('/Managment') 
              setTimeout(() => {this.sendAlert = false}, 1300)
              //addcode
            
          }
        )
        .catch(function(){
         console.log('FAILURE!!');
       });
       

      
    } , 
    // openSAlert() { 
      
      
    // }
    }, 

   

    
    
  


   
    
    
    
  

}

</script> 

<style> 

/* .card0 {
    width: 80%;
    margin-left: auto;
    margin-right: auto; 
    margin-top: 5%;
}
.billNum{
    display: grid;
    grid-template-columns: 1fr 10fr;
    
}  
.billHistory {
    display: grid;
    grid-template-columns: 2fr 18fr;
}
.textBody {
    font-weight: bold;
    color: black;

} 
.MerchantAcctNumAnsSign { 
    display: grid;
    grid-template-columns: 2fr 8fr 2fr 8fr; 
    margin-top: 1%; 
    margin-bottom: 1%;

} */
/* .MerchantNameAndPhone {
    display: grid;
    grid-template-columns: 2fr 8fr 2fr 8fr; 
    margin-top: 1%; 
    margin-bottom: 1%;
} 
.driver {
    display: grid;
    grid-template-columns: 2fr 8fr 2fr 8fr;
    margin-top: 1%; 
    margin-bottom: 1%;
} 
.kepper {
    display:  grid;
    grid-template-columns: 3fr 8fr 3fr 8fr;
    margin-top: 1%; 
    margin-bottom: 1%;
}  */
/* .customerTitle {
    text-decoration: underline;
    margin-top: 1%; 
    margin-bottom: 1%;
} 
.custmerDetails {
    display: grid;
    grid-template-columns: 3fr 8fr 3fr 8fr; 
    margin-top: 1%; 
    margin-bottom: 1%;
}  */
/* .pay {
    display: grid;
    grid-template-columns: 5fr 9fr 5fr 9fr; 
    margin-top: 1%; 
    margin-bottom: 1%;
}
.additinalPay {
    display: grid;
    grid-template-columns: 3fr 18fr; 
    margin-top: 1%; 
    margin-bottom: 1%; 
}  */

/* .error {
    position: absolute;
    left: 10%;
    right: 10%;
    z-index: 1 ; */
    /* background-color: transparent; */
/* }  */

/* .pay2 { 
  display: grid; 
  grid-template-columns: 5fr 9fr 5fr 9fr; 

  margin-top: 1%; 
  margin-bottom: 1%; 


}  */


@media print { 

  #steppr0 {display: none !important;}
   /* #printSection{ direction: rtl;
   margin-left: 30%;
   }  */
   /* *{
     direction: rtl;
     box-shadow: none;
     text-shadow: none;
     
     
   }  */ 
   
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

.rtyy {
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