import AppComp from "./app.vue"
import Vue from "vue"
function createComp(): Vue {
    return new AppComp();
}

module.exports = {createComp: createComp};