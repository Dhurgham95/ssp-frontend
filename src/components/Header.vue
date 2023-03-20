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
    </div>
</template> 

<style>
@media print {
      #appbar {display: none;} 
}
</style>