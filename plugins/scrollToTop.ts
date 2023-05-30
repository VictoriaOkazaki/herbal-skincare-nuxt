import { scrollOnTopOfPage } from "~~/composables/scroll";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.$router.options.scrollBehavior = async (to: any, from: any, savedPosition: any) => {
        if (to.path !== from.path && process.client) {
            scrollOnTopOfPage()
        }
    };
});