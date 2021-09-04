<template>
  <div class="files">
      <ol class="file_list">
        <li class="file">
          <span>1</span>
          <a href="#" >asdasd</a>
        </li>
        <li class="file">
          <span>1</span>
          <a href="#">asdasd</a>
        </li>
        <li class="file">
          <span>1</span>
          <a href="#">asdasd</a>
        </li>
      </ol>
    </div>
</template>
<script>
export default {
  
}
</script>
<style>
  .files{
    width: 100%;
    padding: 10px;
  }
  .file_list{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
  .file_list > li{
    list-style: none;
    border-left: 3px solid green;
  }
  .file{
    color: #000;
  }
</style>