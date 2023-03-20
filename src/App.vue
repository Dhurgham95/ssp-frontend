<template>
  <v-app style="font-family:'Droid Arabic Kufi', serif;">
  

    <v-main>
      <Home/> 
  
     
    </v-main> 



    
  </v-app>
</template>

<script>

import Home from './Screens/Home.vue'   
export default {
  name: 'App',

  components: { 
    Home, 
   
    
    
  
  },

  data: () => ({
    //
  }),
};
</script>

<style>
::-webkit-scrollbar {
    display: none;
}
</style>