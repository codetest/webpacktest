<template>
    <ImageComp source="https://b-ssl.duitang.com/uploads/item/201812/29/20181229232103_KQwZC.jpeg" :style-opt="style"></ImageComp>
</template>
<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"
    import ImageComp from 'my-first-npm-code-test';

    Vue.component('ImageComp', ImageComp)
    @Component({name: "App", components: {ImageComp}})
    export default class App extends Vue{
        style: any = {"width": "200px", "height": "200px"}
        mounted() {
        }
    }
</script>