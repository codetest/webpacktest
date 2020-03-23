<template>
    <div>{{message}}</div>
</template>
<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"
@Component({name: "App"})
export default class App extends Vue{
    message: string = "Hello World"
    mounted() {
        console.log("mounted")
    }
}
</script>