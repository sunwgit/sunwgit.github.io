<template>
    <div>
        <myHead>首页</myHead>
        <loading v-if="loading"></loading>
        <swiper v-else :swiperSlides="sliders"></swiper>
        <div class="container">
            <h3>热门图书</h3>
            <ul>
                <li v-for="(item,index) in hotBooks" :key="index">
                    <img :src="item.bookCover" alt="">
                    <b>{{item.bookName}}</b>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import myHead from "../base/header.vue";
import loading from "../base/loading.vue";
import swiper from "../base/swiper";
import { getHome } from "../api/index";

export default {
    data() {
        return {
            sliders: [],
            hotBooks: [],
            loading: true
        };
    },
    methods: {
        async getAll() {
            let [sliders, hotBooks] = await getHome();
            this.sliders = sliders;
            this.hotBooks = hotBooks;
            this.loading = false;
        }
    },
    components: {
        myHead,
        loading,
        swiper
    },
    created() {
        this.getAll();
    }
};
</script>
<style scoped lang="less">
h3 {
    height: 25px;
    line-height: 25px;
    font-weight: bold;
    padding: 10px;
    width: 100%;
}

.container ul li {
    width: 49%;
    float: left;
    margin-bottom: 10px;
    text-align: center;
    img {
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>
