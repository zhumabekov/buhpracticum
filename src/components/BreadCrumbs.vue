<template>
  <div class="bread_crumbs" v-if="lesson.folderName">
    <svg version="1.1" class="block" @click="transition('folder')" id="Capa_1" width="18" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
    <g>
	    <g>
		    <polygon points="256,152.96 79.894,288.469 79.894,470.018 221.401,470.018 221.401,336.973 296.576,336.973 296.576,470.018 
			    432.107,470.018 432.107,288.469 		"/>
	    </g>
    </g>
    <g>
	    <g>
		    <polygon points="439.482,183.132 439.482,90.307 365.316,90.307 365.316,126.077 256,41.982 0,238.919 35.339,284.855 
			    256,115.062 476.662,284.856 512,238.92 		"/>
	    </g>
    </g>
    </svg>
    <div v-if="lesson.folderName" class="block" @click="transition('file')">
      <svg version="1.1" id="Capa_1" width="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g>
            <g>
              <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"/>
            </g>
          </g>
      </svg>
      {{lesson.folderName}}
    </div>
    <div v-if="file.name" class="block">
      <svg version="1.1" id="Capa_1" width="10" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g>
            <g>
              <path d="M506.134,241.843c-0.006-0.006-0.011-0.013-0.018-0.019l-104.504-104c-7.829-7.791-20.492-7.762-28.285,0.068
                c-7.792,7.829-7.762,20.492,0.067,28.284L443.558,236H20c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h423.557
                l-70.162,69.824c-7.829,7.792-7.859,20.455-0.067,28.284c7.793,7.831,20.457,7.858,28.285,0.068l104.504-104
                c0.006-0.006,0.011-0.013,0.018-0.019C513.968,262.339,513.943,249.635,506.134,241.843z"/>
            </g>
          </g>
      </svg>
      {{file.name}}
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["lesson", "file"]),
  },
  methods: {
    ...mapActions(["chooseLesson", "chooseFile"]),
    transition(type){
      if(type == 'file'){
        this.$router.push(`/lesson/${this.$route.params.folderId}`)
        this.chooseFile()
      }else{
        this.$router.push('/')
        this.chooseFile()
        this.chooseLesson()
      }
    }
  }
}
</script>
<style>
.bread_crumbs{
  width: 97%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  column-gap: 10px;
}
.bread_crumbs svg{
  fill: #999999;
}
.block{
  display: flex;
  align-items: center;
  column-gap: 10px;
  color: #999999;
  cursor: pointer;
}
</style>