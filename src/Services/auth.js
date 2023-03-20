
const auth = {
   
 
  
   requireAuth(to, from, next) {
    if (!auth.loggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
        function : auth.refreashPage()
      })
    } else {
      next()
    }
  },  

  requireAuthEmployee(to, from, next) {
    if (!auth.loggedIn()) {
      next({
        path: '/BranchEmployeeLogin',
        query: { redirect: to.fullPath },
        function : auth.refreashPage()
      })
    } else {
      next()
    }
  }, 

   logout() {
     localStorage.removeItem('token');
     localStorage.removeItem('user');
     this.$router.push('/login') 
    // auth.refreashPage()
   },

   loggedIn() {
       return !!localStorage.token
     }, 
     refreashPage() {
         window.location.reload();
     }, 



}


  export default auth