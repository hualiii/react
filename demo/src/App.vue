<template>
  <div id="app">
    <el-container>
      <el-header height="52">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="248px">
          <Menu></Menu>
        </el-aside>
        <el-main>
          <div class="content">
            <div class="cont1">
              <Tip></Tip>
              <Robotic style="margin-top: 17px"></Robotic>
            </div>
            <div class="cont2"></div>
          </div>
          <div class="footer">
            <Footer></Footer>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header";
import Menu from "./components/Menu";
import Tip from "./components/Tip";
import Robotic from "./components/Robotic";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Menu,
    Tip,
    Robotic,
    Footer,
  },
};
</script>

<style>
body {
  margin: 0;
}
#app {
  width: 1440px;
  height: 750px;
  margin: 0 auto;
  background: #fafcff;
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.25));
}
.el-header,
.el-footer {
  height: 52px;
  line-height: 52px;
  padding: 0;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: 713px;
}

.el-main {
  padding: 0;
  /*text-align: center;*/
  /*line-height: 160px;*/
}

/*body > .el-container {*/
/*  margin-bottom: 40px;*/
/*}*/
body > .el-container {
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.25));
}
/*.el-container:nth-child(5) .el-aside,*/
/*.el-container:nth-child(6) .el-aside {*/
/*  line-height: 260px;*/
/*}*/

/*.el-container:nth-child(7) .el-aside {*/
/*  line-height: 320px;*/
/*}*/
.content {
  display: flex;
  width: 100%;
  height: 610px;
  padding: 17px 34px 15px 15px;
  box-sizing: border-box;
}
.cont1 {
  width: 677px;
}
.cont2 {
  width: 450px;
  height: 610px;
  margin-left: 14px;
  background: #fff;
  filter: drop-shadow(0 0 6px rgba(0, 0, 0, 0.25));
}
</style>
