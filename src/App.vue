<template>
  <div>
    <Header></Header>
    <ProgressBar></ProgressBar>
    <div class="main">
      <Navbar></Navbar>
      <Main></Main>
    </div>
    <user-modal></user-modal>
  </div>  
</template>

<script>
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'
import UserModal from './components/UserModal.vue'
import { mapActions } from "vuex";
export default {
  components: {
    Header,
    ProgressBar,
    Navbar,
    Main,
    UserModal
  },
  methods: {
    ...mapActions(["getLessons", "chooseLesson", "chooseFile"]),
  },
  mounted() {
    this.getLessons()
    let url = new URL(window.location.href);
    let params = url.pathname.includes('/') && url.pathname.split('/')
    if (params && params.length>2 && Number.isInteger(params[2])){
      this.chooseFile(params[2])
    }else if(params && params.length>1 && Number.isInteger(params[1])){
      this.chooseLesson(params[1])
    }else{
      this.chooseLesson()
      this.chooseLesson()
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  color: #333;
}
.main{
  width: 100%;
  display: flex;
  height: calc( 100vh - 54px );
}
.cover, .uncover {
  fill: #c9a142;
}
.cover, .uncover:hover{
  transition: all .2s ease-in-out;
  fill: #b08d3a;
}
.file_icon{
  fill: #0064b4;
}
</style>
