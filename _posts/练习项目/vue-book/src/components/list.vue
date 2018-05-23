<template>
    <div>
        <myHead>
            列表
        </myHead>
        <ul>
            <router-link :to='{name:"detail",path:"/detail",params:{bid:item.bookId}}' tag="li"
                         v-for="(item,index) in books" :key="index">
                <img :src="item.bookCover" alt="">
                <div class="right">
                    <h3>{{item.bookName}} </h3>
                    <p>{{item.bookInfo}} </p>
                    <b :style="cls">{{item.bookPrice|toFix(2)}} </b><br>
                    <button class="btn" @click.stop="remove(item.bookId)">删除</button>
                    <button class="btn" style="background: #ccc" @click.once.stop="collect($event,item)">收藏</button>
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
            this.books = await getBooks();
        },
        async remove(id) {
            this.books = await removeBook(id);
        },
        async collect(e, currentBook) {
            await collectBook(JSON.stringify(currentBook));
            e.target.style.background = "green";
            // e.target.innerHTML = "取消收藏";
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
    position: relative;
    img {
        width: 40%;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
    }
    .right {
        float: right;
        margin-top: 20px;
        width: 60%;
        box-sizing: border-box;
        padding-left: 10px;
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
            width: 70px;
            height: 40px;
            font-size: 16px;
            margin: 10px;
            color: #fff;
        }
    }
}
</style>
