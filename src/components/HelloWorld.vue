<template>
  <div class="leftCenter">
    <h2>{{msg}}</h2>
    <h2>双向绑定</h2>
    <div id='example-3'>
      <input type="checkbox" id="jack" value="双向绑定one" v-model="checkedNames">
      <label for="jack">双向绑定one</label>
      <input type="checkbox" id="john" value="双向绑定two" v-model="checkedNames">
      <label for="john">双向绑定two</label>
      <input type="checkbox" id="mike" value="双向绑定three" v-model="checkedNames">
      <label for="mike">双向绑定three</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <h2>for循环指令</h2>
    <table >
      <tr v-for="(item,index) in forValue" v-bind:key="index">
        <th>{{item.name}}</th>
        <th>{{item.interest}}</th>
      </tr>
    </table>

    <h2>v-if指令及v-show</h2>
<p v-if="value1" >我是v-if</p>
<p v-show="value2">我是v-show</p>
    <el-switch
      v-model="value1"
      active-text="v-if已显示"
      inactive-text="v-if已隐藏"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
    <br/>
    <el-switch
      v-model="value2"
      active-text="v-show已显示"
      inactive-text="v-show已隐藏"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
    <router-link :to="{path: 'routerValue',query: {path: 'url',name: '恒果果'}}">
         路由传值one
    </router-link>
    <el-button size="mini" type="primary" @click="routerOne">路由跳转</el-button>

  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello-Vue',
      checkedNames: [],
      forValue:[{name:'恒果果',interest:'泡妞'},{name:'某女孩',interest:'逛街、吃、化妆'}],
      value1:true,
      value2:true
    }
  },
  methods:{
    routerOne(){

      this.$router.push({

     path: 'routerValue',

        /*   //  name: '要跳转的路径的 name,在 router 文件夹下的 index.js 文件内找',

          params: {

            name: 'name',


          }*/

        query: {
        name: 'name',
       // dataObj: this.msg
        }

      })

    }


  }
}
</script>
<style scoped>

</style>
