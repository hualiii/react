<template>
  <div class="container">
    <div class="header">
      <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.29596 13.7589H5.32556V11.7378H3.29596V13.7589ZM3.29596 17.8011H5.32556V15.78H3.29596V17.8011ZM3.29596 9.71676H5.32556V7.69568H3.29596V9.71676ZM7.35516 13.7589H21.5623V11.7378H7.35516V13.7589ZM7.35516 17.8011H21.5623V15.78H7.35516V17.8011ZM7.35516 7.69568V9.71676H21.5623V7.69568H7.35516ZM3.29596 13.7589H5.32556V11.7378H3.29596V13.7589ZM3.29596 17.8011H5.32556V15.78H3.29596V17.8011ZM3.29596 9.71676H5.32556V7.69568H3.29596V9.71676ZM7.35516 13.7589H21.5623V11.7378H7.35516V13.7589ZM7.35516 17.8011H21.5623V15.78H7.35516V17.8011ZM7.35516 7.69568V9.71676H21.5623V7.69568H7.35516Z"
          fill="#323232"
        />
      </svg>
      <span>流程菜单栏</span>
    </div>
    <div class="menu">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :unique-opened="true"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="1">
          <template slot="title">
            <span>1. 总览</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">1.1 xxx</el-menu-item>
            <el-menu-item index="1-2">1.2 xxx</el-menu-item>
            <el-menu-item index="1-2">1.3 xxx</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <span>2. 通用设定</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1">2.1 xxx</el-menu-item>
            <el-menu-item index="2-2">2.2 xxx</el-menu-item>
            <el-menu-item index="2-2">2.3 xxx</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <span>3. 视觉应用设定</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1">3.1 xxx</el-menu-item>
            <el-menu-item index="3-2">3.2 xxx</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <span>4. 运动规划</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="4-1">4.1 编辑运动环境</el-menu-item>
            <el-menu-item index="4-2">4.2 注册夹取姿势</el-menu-item>
            <el-menu-item index="4-3">4.3 运动路径规划</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: 100%;
  padding-left: 13px;
  box-sizing: border-box;
  background: #ffffff;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}
.header {
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 18px;
}
.header span {
  margin-left: 13px;
}
</style>