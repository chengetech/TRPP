<template>
<!--#66BA54-->
  <el-container>
    <el-header style="height: 120px;">
      <!-- flex 布局 -->
      <el-row type="flex" class="row-bg" justify="space-between" style="height: 120px;">
        <!-- LOGO区 -->
        <el-col :span="6">
            <img class="logo" src="@/assets/image/logo.png">
            <span class="logo-name">TRPP</span>
        </el-col>
        <!-- 导航区 -->
        <el-col :span="12">
          <el-menu mode="horizontal" @select="handleSelect" 
            active-text-color="#66BA54" style="border: 0;"> 
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
        </el-col>
        <!-- 社交区 -->
        <el-col :span="4">
          <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" 
            style="display: inline-block; float: right; border-bottom: 0; right: 100px;" active-text-color="#66BA54"> 
            <el-menu-item index="5"><span style="font-size: 40px;" class="iconfont iconweixin"></span></el-menu-item>
            <el-menu-item index="9"><span style="font-size: 40px;" class="iconfont iconqq"></span></el-menu-item>
            <el-menu-item index="8"><span style="font-size: 40px;" class="iconfont iconfacebook"></span></el-menu-item>
            <el-menu-item index="9"><span style="font-size: 40px;" class="iconfont iconicon"></span></el-menu-item>
          </el-menu>
        </el-col>
      </el-row>  
    </el-header>
    <el-main>
      <!-- 走马灯-产品图片 -->
      <el-carousel :interval="3000" :autoplay="true">
        <el-carousel-item><img src="@/assets/image/img-1.jpg"></el-carousel-item>
        <el-carousel-item><img src="@/assets/image/img-2.jpg"></el-carousel-item>
        <el-carousel-item><img src="@/assets/image/img-3.jpg"></el-carousel-item>
        <el-carousel-item><img src="@/assets/image/img-4.jpg"></el-carousel-item>
      </el-carousel>
      <!-- 公司介绍 -->
      <div style=" height: 300px; text-align: center;">
        <h1 style="text-align: center; line-height: 100px; font: normal bold 40px arial,sans-serif;">The right promotional products company(TRPP)</h1>
        <p style="text-align: center;line-height: 30px; margin: 0 400px; font: normal 20px arial,sans-serif;"> TPRR Promo has over 20years of experience in advertising filed, 
          we offer an extensive lineup of quality promo products that help customers build great customer relationships and open doors to future business. 
          We have High-Quality Personalised Service and Strong Sourcing team. 
          Choose us, Our friendly award winning team are here to help you every step of the way, not only save your money, also let your business more easier.  
          FREE visuals, FREE advice, Best Price, Best Quality.
        </p>
      </div>
      <el-divider></el-divider>
      <!-- 产品介绍 -->
      <div style=" height: 200px; text-align: center;">
        <h1 style="text-align: center; line-height: 100px; font: normal bold 40px arial,sans-serif;">SERVICES & PRODUCTS</h1>
        <p style="text-align: center;line-height: 30px; margin: 0 400px; font: normal 20px arial,sans-serif;">We have assembled a complete offering of services and products to handle all of your business needs. 
          Proforma applies creativity and innovation to your business challenges, 
          from the development of brochures and promotional items to the execution of marketing campaigns and ecommerce solutions, 
          making us the One Source for all your brand marketing and graphic communications needs.
        </p>
      </div>
      <el-row>
        <el-col :span="3" offset="1">
          <el-card :body-style="{ padding: '0px'}" style="margin-bottom: 40px;">
            <img src="@/assets/image/ser-1.jpg" class="image">
            <div class="image-font"><span>FOOD HANBGER</span></div>
          </el-card>
        </el-col>
        <el-col :span="3" offset="1">
          <el-card :body-style="{ padding: '0px'}" style="margin-bottom: 40px;">
            <img src="@/assets/image/ser-7.jpg" class="image">
            <div class="image-font"><span>FOOD HANBGER</span></div>
          </el-card>
        </el-col>
        <el-col :span="3" offset="1">
          <el-card :body-style="{ padding: '0px'}" style="margin-bottom: 40px;">
            <img src="@/assets/image/ser-2.jpg" class="image">
            <div class="image-font"><span>FOOD HANBGER</span></div>
          </el-card>
        </el-col>
        <el-col :span="3" offset="1">
          <el-card :body-style="{ padding: '0px'}" style="margin-bottom: 40px;">
            <img src="@/assets/image/ser-3.jpg" class="image">
            <div class="image-font"><span>FOOD HANBGER</span></div>
          </el-card>
        </el-col>
        <el-col :span="3" offset="1">
          <el-card :body-style="{ padding: '0px'}" style="margin-bottom: 40px;">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px; height: 20px; line-height: 20px;">
              <span>FOOD HANBGER</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="3" offset="1">
          <el-card :body-style="{ padding: '0px'}" style="margin-bottom: 40px;">
            <img src="@/assets/image/ser-4.jpg" class="image">
            <div class="image-font"><span>FOOD HANBGER</span></div>
          </el-card>
        </el-col>
        <el-col :span="3" offset="1">
          <el-card :body-style="{ padding: '0px'}" style="margin-bottom: 40px;">
            <img src="@/assets/image/ser-5.jpg" class="image">
            <div class="image-font"><span>FOOD HANBGER</span></div>
          </el-card>
        </el-col>
        <el-col :span="3" offset="1">
          <el-card :body-style="{ padding: '0px'}" style="margin-bottom: 40px;">
            <img src="@/assets/image/ser-6.jpg" class="image">
            <div class="image-font"><span>FOOD HANBGER</span></div>
          </el-card>
        </el-col>

        <el-col :span="3" offset="1">
          <el-card :body-style="{ padding: '0px'}" style="margin-bottom: 40px;">
            <img src="@/assets/image/ser-7.jpg" class="image">
            <div class="image-font"><span>FOOD HANBGER</span></div>
          </el-card>
        </el-col>
        <el-col :span="3" offset="1">
          <el-card :body-style="{ padding: '0px'}" style="margin-bottom: 40px;">
            <img src="@/assets/image/ser-8.jpg" class="image">
            <div class="image-font"><span>FOOD HANBGER</span></div>
          </el-card>
        </el-col>
        <el-col :span="3" offset="1">
          <el-card :body-style="{ padding: '0px'}" style="margin-bottom: 40px;">
            <img src="@/assets/image/ser-9.jpg" class="image">
            <div class="image-font"><span>FOOD HANBGER</span></div>
          </el-card>
        </el-col>
        <el-col :span="3" offset="1">
          <el-card :body-style="{ padding: '0px'}" style="margin-bottom: 40px;">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px; height: 20px; line-height: 20px;">
              <span>FOOD HANBGER</span>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <!-- 合作伙伴 -->
      <div style=" height: 150px; text-align: center;">
        <h1 style="text-align: center; line-height: 100px; font: normal bold 40px arial,sans-serif;">OUR CLIENTS</h1>
        <p style="text-align: center;line-height: 30px; margin: 0 400px; font: normal 20px arial,sans-serif;">
          Here are some of the brands we serve. How can we help strengthen your brand?
        </p>
      </div>
      <div style="max-width: 700px; line-height: 100px; margin: 0px auto;">
        <a href="https://bit.dev/?utm_source=vue&utm_medium=vue&utm_campaign=vue&utm_term=vue&utm_content=vue" target="_blank" style="width: 160px;">
          <img src="@/assets/image/bit.png" style="width: 160px;     margin-right: 30px;" alt="Bit">
        </a>
        <a href="http://tooltwist.com/" target="_blank" style="width: 160px;">
          <img src="@/assets/image/tooltwist.png" style="width: 160px;     margin-right: 30px;" alt="Tooltwist">
        </a>
        <a href="https://vueschool.io/?utm_source=Vuejs.org&utm_medium=Banner&utm_campaign=Sponsored%20Banner&utm_content=V1" target="_blank" style="width: 160px;">
          <img src="@/assets/image/vueschool.png" style="width: 160px;     margin-right: 30px;" alt="VueSchool">
        </a>
        <a href="https://vehikl.com/" target="_blank" style="width: 160px;">
          <img src="@/assets/image/vehikl.png" style="width: 160px;    margin-right: 30px;" alt="Vehikl">
        </a>
        <a href="https://www.nativescript.org/vue?utm_source=vue-js-org&utm_medium=website&utm_campaign=nativescript-awareness" target="_blank" style="width: 160px;">
          <img src="@/assets/image/nativescript.png" style="width: 160px;    margin-right: 30px;" alt="NativeScript">
        </a>
        <a href="https://teeplusplusclth.com/" target="_blank" style="width: 160px;">
          <img src="@/assets/image/tee__.png" style="width: 160px;    margin-right: 30px;" alt="Tee++">
        </a>
      </div>
    </el-main>
    <el-footer> © 2019 TRPP L.P. ALL RIGHTS RESERVED</el-footer>
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
  .el-header {
    position: fixed;
    width: 100%;
    height: 120px;
    line-height: 120px;
    top: 0;
    background-color: #fff;
    z-index: 100;
    text-align: center;
  }
  
  .el-main {
    top: 120px;
    text-align: center;
    line-height: 800px;
    overflow: hidden;
    padding: 0;
  }

  .el-footer {
    text-align: center;
    line-height: 120px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }

  .el-row {
    margin-bottom: 0;
  }
  .el-col {
    border-radius: 4px;
  }
  
  /* .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  } */

  .logo {
    width: 100px; 
    height: 100px;
    vertical-align: middle;
  }

  .logo-name {
    line-height: 100px; 
    font: 28px arial,sans-serif; 
    color: #66BA54; 
    vertical-align: middle;
  }

  .el-menu {
    display: inline-block; 
    height: 100%; 
    border-bottom: 0;
  }

  .el-menu--horizontal>.el-menu-item {
    height: 120px;
    line-height: 120px;
    font-size: 24px;
  }

  .el-menu-item:hover {
    color: #66BA54 !important;
  }

  .el-menu--horizontal>.el-submenu .el-submenu__title  {
    height: 120px;
    line-height: 120px;
    font-size: 24px;
  }

  .el-submenu__title:hover {
    color: #66BA54 !important;
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

  .center-title {
    display: inline-block; 
    line-height: 120px; 
    vertical-align: top; 
    margin-left: 10px;
  }

  .image {
    width: 314px;
    height: 300px;
    display: block;
  }

  .image-font {
    padding: 14px; 
    height: 20px; 
    line-height: 20px;
  }

  .el-col-offset-1 {
    margin-left: 3.56667%;
  }

  .over-lay {
    width: 100%;
    height: 100%;
    padding: 18px;
    background: rgba(171,0,84,0);
    overflow: hidden;
    font-size: 0.38em;
    color: #fff;
    position: absolute;
    left: 0;
    bottom: -999px;
    transition: 0.4s;
}
</style>
