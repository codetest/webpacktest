<template>
    <div>{{message}}</div>
</template>
<script lang="ts">
    import Vue from "vue"
    import { Component } from "vue-property-decorator"
    @Component({name: "App"})
    export default class App extends Vue{
        message: string = "Hello World"
        style: any = {"width": "200px", "height": "200px"}
        mounted() {
        }
    }
</script>