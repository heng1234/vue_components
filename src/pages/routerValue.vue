<template>
 <div>
   <p>{{name}}</p>
 </div>
</template>

<script>
    export default {
        name: "routerValue",
      data(){
          return{
               name:''
          }
      },
      mounted(){
          this.routerOne();
      },
      methods:{
          routerOne(){
            let name = this.$route.query.name;
            console.log(name)
            this.name=name;
          }

      }
    }
</script>

<style scoped>

</style>
