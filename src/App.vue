<template>
  <div>
    <Header v-model="toogleNav"></Header>
    <ProgressBar></ProgressBar>
    <div class="main">
      <Navbar :toogleState = "toogleNav" :lessons = "lessons"></Navbar>
      <Main></Main>
    </div>
  </div>  
</template>

<script>
import Header from './components/Header'
import ProgressBar from './components/ProgressBar'
import Navbar from './components/Navbar.vue'
import Main from './components/Main.vue'
import Lessons from './components/Lessons.vue'

export default {
  components: {
    Header,
    ProgressBar,
    Navbar,
    Main
  },
  data(){
    return{
      toogleNav: false,
      lessons: [
        {
          id: 1,
          folderName: 'Организацияны1Сенгизужанеонын жолдары',
          files: [
            {
              name: 'name 1'
            },
            {
              name: 'name 2'
            },
            {
              name: 'name 3'
            },
            {
              name: 'name 4'
            }
          ]
        },
        {
          id: 2,
          folderName: '910 форма толтыру',
          files: [
            {
              name: 'name 1'
            },
            {
              name: 'name 2',
            },
            {
              name: 'name 3',
            },
            {
              name: 'name 4',
            }
          ]
        },
        {
          id: 3,
          folderName: 'Интернет банкинг',
          files: [
            {
              name: 'name 1'
            },
            {
              name: 'name 2',
            },
            {
              name: 'name 3',
            },
            {
              name: 'name 4',
            }
          ]
        },
        {
          id: 4,
          folderName: 'Онлайн ККМ',
          files: [
            {
              name: 'name 1'
            },
            {
              name: 'name 2',
            },
            {
              name: 'name 3',
            },
            {
              name: 'name 4',
            }
          ]
        },
        {
          id: 5,
          folderName: 'Зарплата',
          files: [
            {
              name: 'name 1'
            },
            {
              name: 'name 2',
            },
            {
              name: 'name 3',
            },
            {
              name: 'name 4',
            }
          ]
        },
        {
          id: 6,
          folderName: 'Импортпен жумыс',
          files: [
            {
              name: 'name 1'
            },
            {
              name: 'name 2',
            },
            {
              name: 'name 3',
            },
            {
              name: 'name 4',
            }
          ]
        },
        {
          id: 6,
          folderName: 'Импортпен жумыс',
          files: [
            {
              name: 'name 1'
            },
            {
              name: 'name 2',
            },
            {
              name: 'name 3',
            },
            {
              name: 'name 4',
            }
          ]
        },
        {
          id: 6,
          folderName: 'Импортпен жумыс',
          files: [
            {
              name: 'name 1'
            },
            {
              name: 'name 2',
            },
            {
              name: 'name 3',
            },
            {
              name: 'name 4',
            }
          ]
        },
        {
          id: 6,
          folderName: 'Импортпен жумыс',
          files: [
            {
              name: 'name 1'
            },
            {
              name: 'name 2',
            },
            {
              name: 'name 3',
            },
            {
              name: 'name 4',
            }
          ]
        }
      ]
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
}
.main{
  width: 100%;
  display: flex;
  height: calc( 100vh - 54px );
}
</style>
