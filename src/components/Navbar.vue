<template>
  <nav :class="{nav_hide: toogleNav}">
    <div class="folder__list">
      <ul>
        <li v-for="lesson in lessonsTest" :key="lesson.id" class="lesson" @click="uncover(lesson.files.length, $event)">
          <div class="folder">
            <svg class="cover" version="1.1" id="Capa_1" width="18px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 408 408" style="enable-background:new 0 0 408 408;" xml:space="preserve">
                <g>
                  <path d="M332,121.921H184.8l-29.28-34.8c-0.985-1.184-2.461-1.848-4-1.8H32.76C14.628,85.453,0,100.189,0,118.321v214.04
                    c0.022,18.194,14.766,32.938,32.96,32.96H332c18.194-0.022,32.938-14.766,32.96-32.96v-177.48
                    C364.938,136.687,350.194,121.943,332,121.921z"/>
                </g>
                <g>
                  <path d="M375.24,79.281H228l-29.28-34.8c-0.985-1.184-2.461-1.848-4-1.8H76c-16.452,0.027-30.364,12.181-32.6,28.48h108.28
                    c5.678-0.014,11.069,2.492,14.72,6.84l25,29.72H332c26.005,0.044,47.076,21.115,47.12,47.12v167.52
                    c16.488-2.057,28.867-16.064,28.88-32.68v-177.48C407.957,94.1,393.34,79.413,375.24,79.281z"/>
                </g>
            </svg>
            <svg class="uncover hidden" viewBox="0 -57 511.99973 511" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="m506.039062 180.988281c-7.78125-12.546875-21.53125-20.046875-36.78125-20.046875h-339.5625c-16.832031 0-32.140624 9.488282-39.011718 24.179688l-89.8125 188.308594c3.390625 13.789062 16.269531 24.089843 31.609375 24.089843h361.269531c15.445312 0 29.5625-8.734375 36.460938-22.554687l77.628906-155.59375c6.128906-12.3125 5.449218-26.660156-1.800782-38.382813zm0 0"/><path d="m72.402344 156.15625c6.863281-14.6875 22.175781-24.179688 39.011718-24.179688h319.753907v-40.898437c0-16.859375-14.222657-30.578125-31.703125-30.578125h-186.445313c-.273437 0-.460937-.070312-.53125-.121094l-33.371093-46.660156c-5.910157-8.277344-15.671876-13.21875-26.101563-13.21875h-121.304687c-17.488282 0-31.710938 13.71875-31.710938 30.578125v276.875zm0 0"/></svg>
            <span>{{lesson.folderName}}</span>
          </div>
          <div class="file__list" data-uncover="">
            <ul>
              <li v-for="file in lesson.files" :key="file.id" class="file" @click="openFile(lesson.id, file.id)">
                  <svg version="1.1" id="Capa_1" class="file_icon" width="18px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                      viewBox="0 0 298 298" style="enable-background:new 0 0 298 298;" xml:space="preserve">
                    <path d="M298,33c0-13.255-10.745-24-24-24H24C10.745,9,0,19.745,0,33v232c0,13.255,10.745,24,24,24h250c13.255,0,24-10.745,24-24V33
                      z M91,39h43v34H91V39z M61,259H30v-34h31V259z M61,73H30V39h31V73z M134,259H91v-34h43V259z M123,176.708v-55.417
                      c0-8.25,5.868-11.302,12.77-6.783l40.237,26.272c6.902,4.519,6.958,11.914,0.056,16.434l-40.321,26.277
                      C128.84,188.011,123,184.958,123,176.708z M207,259h-43v-34h43V259z M207,73h-43V39h43V73z M268,259h-31v-34h31V259z M268,73h-31V39
                      h31V73z"/>
                  </svg>
                  <a href="#">{{file.name}}</a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["chooseLesson", "chooseFile"]),
    uncover(length, event){
      let li = event.target.closest('li');
      if(li && li.classList.contains('lesson')){
        let filesBlock = li.querySelector('.file__list')
        let coverIcon = li.querySelector('.cover')
        let uncoverIcon = li.querySelector('.uncover')

        if(Boolean(filesBlock.dataset.uncover)){
          filesBlock.style.height = '0';
          filesBlock.dataset.uncover = "";
          uncoverIcon.classList.add('hidden')
          coverIcon.classList.remove('hidden')
        }else{
          filesBlock.style.height = `${length*25}px`;
          filesBlock.dataset.uncover = "true"
          coverIcon.classList.add('hidden')
          uncoverIcon.classList.remove('hidden')
        }
      }
    },
    openFile(folderId, fileId){
      this.$router.push(`/lesson/${folderId}/${fileId}`)
      this.chooseLesson(folderId)
      this.chooseFile(fileId)
    }
  },
  computed: {
    ...mapGetters(["toogleNav", "lessonsTest"]),
  },
}
</script>
<style>
  nav{
    width: 25%;
    display: flex;
    background:#f0f0f0;
    overflow: auto;
    transition: width 0.3s linear;
  }
  .nav_hide{
    width: 0%;
    transition: width 0.3s linear;
  }
  .folder__list{
    padding: 10px;
    width: calc( 100% - 20px );
  }
  :is(.folder__list, .file__list) > ul{
    list-style: none;
    cursor: pointer;
  }
  .folder__list li{
    margin-bottom: 10px;
  }
  .file__list li{
    margin: 6px 0;
  }
  .file__list{
    margin-left: 20px;
    height: 0;
    overflow: hidden;
    transition: height 0.3s linear;
  }
  .folder, .file{
    display: flex;
    flex-wrap: nowrap;
    align-items: start;
    column-gap: 5px;
    width: 280px;
  }
  .folder span{
    word-break:break-all;
    width: 90%;
  }
  .hidden{
    display: none;
  }
</style>