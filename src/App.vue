<template>
  <el-container>
    <el-header>
      <!-- 导航区 -->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1" class="title">SOLUTIONS</el-menu-item>
        <el-submenu index="2">
          <template slot="title">INDUSTRIES</template>
          <el-menu-item index="2-1">AAAAAA</el-menu-item>
          <el-menu-item index="2-2">BBBBBB</el-menu-item>
          <el-menu-item index="2-3">CCCCCC</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">DDDDDD</template>
            <el-menu-item index="2-4-1">EEEEEE</el-menu-item>
            <el-menu-item index="2-4-2">FFFFFF</el-menu-item>
            <el-menu-item index="2-4-3">GGGGGG</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">COMPANY</el-menu-item>
        <el-menu-item index="4">OPPORTUNITIES</el-menu-item>
      </el-menu>
      <!-- LOGO区 -->
      <span>LOGO-GOODLIFE</span>
      <!-- 社交区 -->
      <span>LOGO-GOODLIFE</span>
    </el-header>
    <el-main>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="img in 4" :key="img">
          <img src="@/assets/image/img-1.jpg">
        </el-carousel-item>
      </el-carousel>

    </el-main>
    <el-footer> © 2016 PFG Ventures L.P. ALL RIGHTS RESERVED</el-footer>
  </el-container>
</template>

<script>

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      imgs: ['@/assets/image/img-1.jpg','@/assets/image/img-2.jpg','@/assets/image/img-1.jpg', '@/assets/image/img-2.jpg']
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
  .el-header, .el-footer {
    text-align: center;
    line-height: 80px;
  }
  
  .el-main {
    text-align: center;
    line-height: 800px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }

  .el-carousel__container {
    height: 800px;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 800px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .el-carousel__indicators--horizontal {
    /* overflow: hidden;
    bottom: -45%; */
  }

</style>
