<template>
<div class="index-page">
  <my-tabs></my-tabs>
  <router-view></router-view>
</div>
</template>

<script>
//选享卡
import MyTabs from "../components/index/Tabls";

export default {
  data() {
    return {}
  },
  components: {
    MyTabs,
  },
}
</script>

<style lang="scss" scoped>

</style>
