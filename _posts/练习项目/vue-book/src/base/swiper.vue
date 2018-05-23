<template>
    <swiper :options="swiperOption">
        <swiper-slide v-for="(item,key) in swiperSlides" :key="key">
            <img :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>

<script>
export default {
    props: ["swiperSlides"],
    data() {
        return {
            swiperOption: {
                loop: true,
                autoplay: {
                    delay: 1000
                },
                // speed: 1000,
                // initialSlide: 0,
                disableOnInteraction: false,
                paginationClickable: true,
                pagination: {
                    el: ".swiper-pagination"
                }
            }
        };
    }
};
</script>
<style scoped>
img {
    width: 100%;
}
</style>
