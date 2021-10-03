<template>
  <progress :value="progressState.progress" :max="progressState.total"></progress>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["progressState"]),
  },
}
</script>

<style>
  progress{
    display: block;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    height: 4px;
    background: #e1e0de;
    border: none;    
    transition: all .2s linear;
  }
</style>