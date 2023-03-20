<template>
  <div>
  <v-card 

  class="crudCard"
  outlined 
  elevation="10"
  >
  <v-data-table
    :headers="headers"
    :items="users"
    :loading="loading"
    :search="search"
    sort-by="userName"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>My CRUD</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-col
        cols="4"
        sm="4"
        md="5"
        lg="5"
        xl="5" 
        >
         <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
        </v-col>
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
              New Item
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
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.userName"
                      label="الاسم"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.accountNumber"
                      label="رقم الحساب"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.iBAN"
                      label="IBAN"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="6"
                  >
                    <v-text-field
                      v-model="editedItem.phoneNumber"
                      label="رقم الهاتف"
                    ></v-text-field>
                  </v-col>
             
                </v-row> 

                  <v-row> 
                       <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.bussinessName"
                      label="اسم الشركة"
                    ></v-text-field>
                  </v-col>

                </v-row>
                <v-row> 
                       <v-col
                    cols="12"
                    sm="12"
                    md="12"
                  >
                    <v-text-field
                      v-model="editedItem.password"
                      label="كلمة السر"
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
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <!-- <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn> -->

      <v-card>
        <v-card-text>
          لا توجد بيانات
        </v-card-text>
      </v-card>
    </template>
  </v-data-table>
  </v-card>

  </div>

</template>



<script>

  import axios from 'axios'
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      search: '',
      headers: [
        {
          text: 'المعرف',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'الاسم', value: 'userName' },
        { text: 'رقم الحساب', value: 'accountNumber' },
        { text: 'IBAN', value: 'iBAN' },
        { text: 'رقم الهاتف', value: 'phoneNumber' },
        {text: 'اسم الشركة', value: 'bussinessName'},
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      users: [],
      editedIndex: -1,
      editedItem: {
        userName: '',
        iBAN: '',
        accountNumber: '',
        phoneNumber: '', 
        bussinessName: '', 
        
         
        password: '',
      },
      defaultItem: {
        name: '',
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'مستخدم جديد' : 'تعديل مستخدم'
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
    },

    methods: {
      async initialize () { 
        this.loading = true;

        await axios 
          .get(
            'http://172.31.71.71:5000/Api/Admin/GetAll') 
            .then((respnonse) => {
              this.loading = false; 
              this.users = respnonse.data;
              console.log(this.users) 
             // this.totalIstmarats = respnonse.data.totalIstmarats;
             // this.numberOfPages = respnonse.data.totalPages;
            });
        
      },

      editItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

       deleteItem (item) {
        this.editedIndex = this.users.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true

        //delete 

        //     await axios.delete('http://172.31.71.71:5000/Api/Admin/Delete/' + this.editedItem.id).then(response => {
        //     console.log(response)
        //     this.initialize();
           
          
        // })
      },

      async deleteItemConfirm () {

         await axios.delete('http://172.31.71.71:5000/Api/Admin/Delete/' + this.editedItem.id).then(response => {
            console.log(response)
           
        this.users.splice(this.editedIndex, 1)
        
           
           
          
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
          //update 
          this.initialize();
        })
      },

      async save () {
        if (this.editedIndex > -1) {
          Object.assign(this.users[this.editedIndex], this.editedItem)
          //edit
             await axios.put('http://172.31.71.71:5000/Api/Admin/Update/' + this.editedItem.id, {
           AdminName : this.editedItem.userName, 
            AdminDepartment: this.editedItem.department, 
           AdminBranch: this.editedItem.branch, 
           AdminPassword: this.editedItem.password, 
           AdminConfirmPassword: this.editedItem.password
           }).then(response => {
            console.log(response)
            this.initialize();
           
          
        })} 
        else {

          //create 
          this.loading = true; 
          await axios.post('http://172.31.71.71:5000/Api/Auth/AdminRegister', {
            AdminName: this.editedItem.userName, 
            AdminBranch : this.editedItem.branch, 
            AdminDepartment : this.editedItem.department, 
            AdminPassword : this.editedItem.password,
            AdminConfirmPassword : this.editedItem.password,
          }).then(response => {
            console.log(response)
            this.initialize();
          })
          this.users.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>


<style>


::-webkit-scrollbar {
  display: none !important;
} 

.crudCard {
    margin-right: auto;
    margin-left: auto;
   
    width: 90%;
    margin-top:5%; 
    margin-bottom: 5%;
    max-height: 80%;
   
    } 
</style>