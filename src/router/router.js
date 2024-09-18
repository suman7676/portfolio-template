import { createRouter,createWebHistory } from 'vue-router'
import Home from "../components/pages/Home.vue";
import About from "../components/pages/About.vue";
import Showcase from "../components/pages/Showcase.vue";
import Resume from "../components/pages/Resume.vue";
import Company from "../components/pages/Company.vue";
import Contact from "../components/pages/Contact.vue";

const routes=[
    {
        path:'/',
        name:'Home',
        component:Home

    },
    {
        path:'/About',
        name:'About',
        component:About

    },
    {
        path:'/Showcase',
        name:'Showcase',
        component:Showcase

    },
    {
        path:'/Resume',
        name:'Resume',
        component:Resume

    },
    {
        path:'/Company',
        name:'Company',
        component:Company

    },
    {
        path:'/Contact',
        name:'Contact',
        component:Contact

    }
]
const  router=createRouter({
    history:createWebHistory(),
    routes
})
export default router