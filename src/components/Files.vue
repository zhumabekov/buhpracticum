<template>
  <div class="files">
      <ol class="file_list">
        <li class="file" v-for="file in lesson.files" :key="file.id" @click="openFile(file.id)">
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
      </ol>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["lesson"]),
  },
  methods: {
    ...mapActions(["chooseFile"]),
    openFile(fileId){
      this.$router.push(`/lesson/${this.$route.params.folderId}/${fileId}`)
      this.chooseFile(fileId)
    }
  }
}
</script>
<style>
  .files{
    width: 97%;
    margin: auto;
  }
  .file_list{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  .file_list > li{
    list-style: none;
  }

</style>