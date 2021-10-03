<template>
  <div class="files">
    <video controls>
    <source src="https://drive.google.com/uc?export=download&id=14fOE-P7hiIcCgZKtFanrbhu7BONIV6pm" type='video/mp4'>
</video>
    <iframe src="https://drive.google.com/file/d/14fOE-P7hiIcCgZKtFanrbhu7BONIV6pm/preview" width="640" height="480" allow="autoplay"></iframe> 
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["file"]),
  }
}
</script>
<style>

</style>