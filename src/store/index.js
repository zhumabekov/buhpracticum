import { createStore } from 'vuex'
import axios from "axios";

const LESSONS_URL = `https://jsonplaceholder.typicode.com/posts`

export default createStore({
  state: {
    lessons: [],
    lessonsTest: [
      {
        id: 1,
        folderName: 'Организацияны1Сенгизужанеонын жолдары',
        files: [
          {
            id: 1,
            name: 'name 1'
          },
          {
            id: 2,
            name: 'name 2'
          },
          {
            id: 3,
            name: 'name 3'
          },
          {
            id: 4,
            name: 'name 4'
          }
        ]
      },
      {
        id: 2,
        folderName: '910 форма толтыру',
        files: [
          {
            id: 5,
            name: 'name 1'
          },
          {
            id: 6,
            name: 'name 2'
          },
          {
            id: 7,
            name: 'name 3'
          },
          {
            id: 8,
            name: 'name 4'
          }
        ]
      },
      {
        id: 3,
        folderName: 'Интернет банкинг',
        files: [
          {
            id: 9,
            name: 'name 1'
          },
          {
            id: 10,
            name: 'name 2'
          },
          {
            id: 11,
            name: 'name 3'
          },
          {
            id: 12,
            name: 'name 4'
          }
        ]
      },
      {
        id: 4,
        folderName: 'Онлайн ККМ',
        files: [
          {
            id: 13,
            name: 'name 1'
          },
          {
            id: 14,
            name: 'name 2'
          },
          {
            id: 15,
            name: 'name 3'
          },
          {
            id: 16,
            name: 'name 4'
          }
        ]
      },
      {
        id: 5,
        folderName: 'Зарплата',
        files: [
          {
            id: 17,
            name: 'name 1'
          },
          {
            id: 18,
            name: 'name 2'
          },
          {
            id: 19,
            name: 'name 3'
          },
          {
            id: 20,
            name: 'name 4'
          }
        ]
      },
      {
        id: 6,
        folderName: 'Импортпен жумыс',
        files: [
          {
            id: 21,
            name: 'name 1'
          },
          {
            id: 22,
            name: 'name 2'
          },
          {
            id: 23,
            name: 'name 3'
          },
          {
            id: 24,
            name: 'name 4'
          }
        ]
      },
      {
        id: 7,
        folderName: 'Импортпен жумыс',
        files: [
          {
            id: 25,
            name: 'name 1'
          },
          {
            id: 26,
            name: 'name 2'
          },
          {
            id: 27,
            name: 'name 3'
          },
          {
            id: 28,
            name: 'name 4'
          }
        ]
      },
      {
        id: 8,
        folderName: 'Импортпен жумыс',
        files: [
          {
            id: 29,
            name: 'name 1'
          },
          {
            id: 30,
            name: 'name 2'
          },
          {
            id: 31,
            name: 'name 3'
          },
          {
            id: 32,
            name: 'name 4'
          }
        ]
      },
      {
        id: 9,
        folderName: 'Импортпен жумыс',
        files: [
          {
            id: 33,
            name: 'name 1'
          },
          {
            id: 34,
            name: 'name 2'
          },
          {
            id: 35,
            name: 'name 3'
          },
          {
            id: 36,
            name: 'name 4'
          }
        ]
      }
    ],
    lesson: {},
    progressState: {
      progress: 0,
      total: 0
    },
    file: {},
    toogleNav: false,
    modalState: false,
  },
  mutations: {
    setLessons(state, lessons) {
      state.lessons = lessons;
    },
    setLessonCount(state, lessons) {
      state.lessons = lessons;
    },
    toogleNav(state){
      state.toogleNav = !state.toogleNav
    },
    toogleModal(state){
      state.modalState = !state.modalState
    },
    chooseLesson(state, lesson){
      state.lesson = lesson
    },
    chooseFile(state, file){
      state.file = file
    },
    setProgressState(state, progress){
      state.progressState.progress = progress 
    },
    setTotalState(state, total){
      state.progressState.total = total 
    }
  },
  actions: {
    async getLessons({ commit, dispatch }) {
      return await axios
        .get(LESSONS_URL)
        .then((response) => {
          commit("setLessons", response.data);
          dispatch("calculateLessonCount")
          return response;
        })
        .catch((error) => {
          console.log(error);
          return error;
        });
    },
    calculateLessonCount({commit, getters}){
      let lessonCount = getters.lessonsTest.reduce((acc, lesson)=>{
        return acc + lesson.files.length
      }, 0)
      commit("setTotalState", lessonCount);
    },
    calculateLessonProgress({commit, getters}, fileId){
      let lessonProgress = 1
      outer: 
      for (let i = 0; i < getters.lessonsTest.length; i++) {
        let folder = getters.lessonsTest[i]
        for (let j = 0; j < folder.files.length; j++){
          let file = folder.files[j]
          if(file.id == fileId){
            break outer;
          }
          lessonProgress++;
        }
      }
      commit("setProgressState", lessonProgress);
    },
    chooseLesson({commit, getters}, lessonId){
      if(!lessonId){
        commit("chooseLesson", '');
        return
      }
      let lesson = getters.lessonsTest.filter(lesson => lesson.id == lessonId)[0]
      commit("chooseLesson", lesson);
    },
    chooseFile({commit, getters, dispatch}, fileId){
      if(!fileId){
        commit("chooseFile", '');
        return
      }
      let file = getters.lesson.files.filter(file => file.id == fileId)[0]
      commit("chooseFile", file);
      dispatch("calculateLessonProgress", fileId);
    }
  },
  getters: {
    lessons: (state) => state.lessons,
    toogleNav: (state) => state.toogleNav,
    modalState: (state) => state.modalState,
    lessonsTest: (state) => state.lessonsTest,
    lesson: (state) => state.lesson,
    file: (state) => state.file,
    progressState: (state) => state.progressState
  },
  modules: {
  }
})
