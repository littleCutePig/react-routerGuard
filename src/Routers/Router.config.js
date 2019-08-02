import All from "../pages/All";
import Home from "../pages/Home";
import Known from "../pages/Known";
import Shop from "../pages/Shop";
import Community from "../pages/Community";
import Mine from "../pages/Mine";
import Shequ from "../pages/Shequ";
import Expert from "../pages/Expert";
import Shoucang from "../pages/Shoucang";
import Guanzhu from "../pages/Guanzhu";
import Login from "../pages/Login";

const route = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/',
        component:All,
        children:[
            {
                path:'/home',
                component:Home,
                title:"首页"
            },
            {
                path:'/known',
                component:Known,
                title:"知识库"
            },
            {
                path:"/shop",
                component:Shop,
                title:"商城"
            },
            {
                path:"/community",
                component:Community,
                title:"社区",
                isLogin:true,
                children:[
                    {
                        path:'/community/shequ',
                        component:Shequ,
                        title:"社区"
                    },
                    {
                        path:'/community/expert',
                        component:Expert,
                        title:"达人"
                    },
                    {
                        from:'/community',
                        to:'/community/shequ'
                    }
                ]
            },
            {
                path:'/mine',
                component:Mine,
                title:"我的",
                isLogin:true,
                children:[
                    {
                        path:'/mine/shoucang',
                        component:Shoucang,
                        title:"收藏"
                    },
                    {
                        path:'/mine/guanzhu',
                        component:Guanzhu,
                        title:"关注"
                    },
                    {
                        from:"/mine",
                        to:"/mine/shoucang"
                    }
                ]
            },
            {
                from:'/',
                to:"/home"
            }
        ]
    }
]

export default route