<template>
    <div class="header">
        <slot></slot>
        <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    </div>
</template>
<script>
export default {
    props: ["back"],
    data() {
        return {};
    },
    methods: {
        goBack() {
            // console.log(this.$router);
            this.$router.history.go(-1);
            // this.$router.history.push('/home');
        }
    },
    components: {}
};
</script>
<style scoped lang="less">
.header {
    height: 40px;
    background: #de181b;
    opacity: 0.9;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    font-weight: bold;
    vertical-align: middle;
    line-height: 40px;
    i {
        position: fixed;
        left: 10px;
    }
}
</style>
