<template>
  <div class="user-modal" v-show="modalState">
    <div class="user-data">
      <svg version="1.1" width="25px" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          viewBox="0 0 460.8 460.8" style="enable-background:new 0 0 460.8 460.8;" xml:space="preserve">
          <g>
            <g>
              <path d="M230.432,0c-65.829,0-119.641,53.812-119.641,119.641s53.812,119.641,119.641,119.641s119.641-53.812,119.641-119.641
                S296.261,0,230.432,0z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M435.755,334.89c-3.135-7.837-7.314-15.151-12.016-21.943c-24.033-35.527-61.126-59.037-102.922-64.784
                c-5.224-0.522-10.971,0.522-15.151,3.657c-21.943,16.196-48.065,24.555-75.233,24.555s-53.29-8.359-75.233-24.555
                c-4.18-3.135-9.927-4.702-15.151-3.657c-41.796,5.747-79.412,29.257-102.922,64.784c-4.702,6.792-8.882,14.629-12.016,21.943
                c-1.567,3.135-1.045,6.792,0.522,9.927c4.18,7.314,9.404,14.629,14.106,20.898c7.314,9.927,15.151,18.808,24.033,27.167
                c7.314,7.314,15.673,14.106,24.033,20.898c41.273,30.825,90.906,47.02,142.106,47.02s100.833-16.196,142.106-47.02
                c8.359-6.269,16.718-13.584,24.033-20.898c8.359-8.359,16.718-17.241,24.033-27.167c5.224-6.792,9.927-13.584,14.106-20.898
                C436.8,341.682,437.322,338.024,435.755,334.89z"/>
            </g>
          </g>
        </svg>
        <span>ASas asdsad asda</span>
    </div>
    <button class="logout">Выйти</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["modalState"]),
  },
}
</script>
<style>
  .user-modal{
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    position: fixed;
    top: 60px;
    right: 10px;
    background-color: #e1e0de;
    padding: 10px;
    border-radius: 5px;
  }
  .user-data{
    display: flex;
    column-gap: 10px;
  }
  .logout{
    padding: 5px;
    background-color: #0064b4;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    color: #fff;
  }
  .logout:hover{
    background-color: #025599;
    transition: all .2s ease-in-out;
  }
</style>