<template>
    <div class="detail">
        <myHead>添加</myHead>
        <ul class="bookUl">
            <li>
                <label for="bookName">书的名称</label>
            </li>
            <li>
                <input type="text" v-model="book.bookName" id="bookName" name="bookName">
            </li>
            <li>
                <label for="bookInfo">书的信息</label>
            </li>
            <li>
                <input type="text" v-model="book.bookInfo" id="bookInfo" name="bookInfo">
            </li>
            <li>
                <label for="bookPrice">书的价格</label>
            </li>
            <li>
                <input type="text" v-model="book.bookPrice" id="bookPrice" name="bookPrice">
            </li>
            <li>
                <label for="bookCover">书的封面</label>
            </li>
            <li>
                <input type="text" v-model="book.bookCover" id="bookCover" name="bookCover">
                <!--<img :src="book.bookCover" alt="" id="bookCover">-->
            </li>
        </ul>
        <button @click="addBook">确认添加</button>
    </div>
</template>
<script>
import myHead from "../base/header.vue";
import { getInfoById, updateInfo } from "../api";

export default {
    data() {
        return { bid: "", book: {} };
    },
    methods: {
        async addBook() {
            await updateInfo("/addBook", JSON.stringify(this.book));
            this.$router.history.push("/list");
        }
    },
    components: {
        myHead
    },
    created() {}
};
</script>
<style scoped lang="less">
.detail {
    /*position: fixed;*/
    /*top: 40px;*/
    /*left: 0;*/
    /*bottom: 0;*/
    /*right: 0;*/
    /*z-index: 100;*/
    /*background: #fff;*/
    .bookUl li {
        width: 100%;
        height: 40px;
        padding: 10px;
        /*box-sizing: border-box;*/
        label {
            display: block;
            width: 100px;
            height: 30px;
            font-size: 25px;
            font-weight: bold;
        }
        input {
            width: 80%;
            height: 35px;
            font-size: 16px;
            display: block;
            margin-left: 10px;
            border-radius: 5px;
            border: 2px solid #ccc;
        }
    }
    button {
        margin: 20px;
        width: 70px;
        height: 35px;
        background: red;
        border-radius: 5px;
        color: #fff;
        font-size: 16px;
    }
}
</style>
