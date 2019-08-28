<template>
  <el-container>
    <el-header>
      <!-- 导航区 -->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" 
        style="display: inline-block; float: left; border-bottom: 0;"> 

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
      <div style="display: inline-block;">
        <img class="logo" src="@/assets/image/logo.png">
        <div class="center-title">THE RIGHT PROMOTIONAL PRODUCTS</div>
      </div>
      <!-- 社交区 -->
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" 
        style="display: inline-block; float: right; border-bottom: 0;"> 

        <el-menu-item index="5"><span style="font-size: 40px;" class="iconfont iconweixin"></span></el-menu-item>
        <el-menu-item index="6"><span style="font-size: 40px;" class="iconfont iconqq"></span></el-menu-item>
        <el-menu-item index="7"><span style="font-size: 40px;" class="iconfont iconweibo"></span></el-menu-item>
        <el-menu-item index="8"><span style="font-size: 40px;" class="iconfont iconfacebook"></span></el-menu-item>
        <el-menu-item index="9"><span style="font-size: 40px;" class="iconfont iconicon"></span></el-menu-item>
      </el-menu>
      
    </el-header>
    <el-main>
      <!-- 走马灯-产品图片 -->
      <el-carousel :interval="3000" :autoplay="true">
        <el-carousel-item><img src="@/assets/image/img-1.jpg"></el-carousel-item>
        <el-carousel-item><img src="@/assets/image/img-2.jpg"></el-carousel-item>
        <el-carousel-item><img src="@/assets/image/img-3.jpg"></el-carousel-item>
        <el-carousel-item><img src="@/assets/image/img-4.jpg"></el-carousel-item>
      </el-carousel>
      <!-- 文字介绍 -->
      <div style=" height: 300px; text-align: center;">
        <h1 style="text-align: center; line-height: 100px;">AWARD-WINNING BRAND PROMOTION</h1>
        <p style="text-align: center;line-height: 30px; margin: 0 400px;"> Proforma is the leader in the printing, promotional products and packaging industries with a creative edge to add impact and value to your programs. 
          As your agency without the agency fees, 
          we provide the most innovative and cutting edge product and service solutions through more than 650 offices across the globe.
        </p>
      </div>




    </el-main>
    <el-footer> © 2016 TRPP L.P. ALL RIGHTS RESERVED</el-footer>
  </el-container>
</template>

<script>

import img1 from '@/assets/image/img-1.jpg'

export default {
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
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
    /* color: #475669; */
    font-size: 18px;
    opacity: 0.75;
    line-height: 800px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    /* background-color: #99a9bf; */
  }
  
  .el-carousel__item:nth-child(2n+1) {
    /* background-color: #d3dce6; */
  }

  .el-carousel__indicators--horizontal {
    /* overflow: hidden;
    bottom: -45%; */
  }

  .iconfont {
    font-size: 40px;
  }
  .logo {
    width:60px; 
    height: 60px;
  }
  .center-title {
    display: inline-block; 
    line-height: 60px; 
    vertical-align: top; 
    margin-left: 10px;
  }

</style>
