<template>
    <div>
        <myHead>收藏</myHead>
        <ul>
            <router-link :to='{name:"detail",path:"/detail",params:{bid:item.bookId}}' tag="li"
                         v-for="(item,index) in books" :key="index">
                <!--<div class="cover">-->
                <img :src="item.bookCover" alt="">
                <!--</div>-->
                <div class="right">
                    <h3>{{item.bookName}} </h3>
                    <p>{{item.bookInfo}} </p>
                    <b :style="cls">{{item.bookPrice|toFix(2)}} </b><br>
                    <button class="btn" @click.stop="remove(item.bookId)">删除</button>
                    <!--<button class="btn" @click.stop="collect(item)">收藏</button>-->
                </div>
            </router-link>
        </ul>
    </div>
</template>
<script>
import myHead from "../base/header.vue";
import { getBooks, removeBook, collectBook } from "../api/index";

export default {
    data() {
        return {
            books: [],
            cls: { color: "red" }
        };
    },
    filters: {
        toFix(input, param) {
            return "￥" + parseFloat(input).toFixed(param);
        }
    },
    methods: {
        async book() {
            this.books = await getBooks("collect");
        },
        async remove(id) {
            this.books = await removeBook(id, "collect");
        },
        async collect(currentBook) {
            await collectBook(JSON.stringify(currentBook));
        }
    },
    components: {
        myHead
    },
    created() {
        this.book();
    }
};
</script>
<style scoped lang="less">
ul li {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 2px dashed #ccc;
    overflow: hidden;
    img {
        width: 40%;
    }
    .right {
        float: right;
        margin-top: 20px;
        width: 60%;
        p {
            line-height: 30px;
        }
        b {
            display: inline-block;
            margin-top: 5px;
        }
        .btn {
            border-radius: 5px;
            background: red;
            width: 50px;
            height: 30px;
            margin-top: 10px;
            color: #fff;
        }
    }
}
</style>
