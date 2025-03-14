import { createRouter,createWebHashHistory } from 'vue-router'
import Recommend from './views/Recommend.vue'
import Plan from './views/Plan.vue'
import Diary from './views/Diary.vue'
import LoginRegister from './components/LoginRegister.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/Recommend',
            component:Recommend
        },
        {
            path: '/Plan',
            component:Plan
        },
        {
            path: '/Diary',
            component:Diary
        },
        {
            path: '/LoginRegister',
            name:'LoginRegister',
            component:LoginRegister
        }
    ]
});

export default router;