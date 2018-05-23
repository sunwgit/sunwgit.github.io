<template>
    <div class="footer">
        <router-link to="/home">
            <i class="iconfont icon-1"></i>首页
        </router-link>
        <router-link to="/list">
            <i class="iconfont icon-liebiao"></i>列表
        </router-link>
        <router-link to="/collect">
            <i class="iconfont icon-shoucang"></i>收藏
        </router-link>
        <router-link to="/add">
            <i class="iconfont icon-tianjia"></i>添加
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {},
    components: {}
};
</script>
<style scoped lang="less">
.footer {
    position: fixed;
    height: 50px;
    width: 100%;
    left: 0;
    bottom: 0;
    text-align: center;
    border-top: 1px solid #ccc;
    a {
        width: 23%;
        height: 50px;
        display: inline-block;
        line-height: 50px;
        vertical-align: middle;
    }
    a.router-link-exact-active {
        color: red;
    }
}
</style>
