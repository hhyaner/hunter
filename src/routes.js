import Sidebar from './components/sidebar';
import MyButtonController from './components/MyButtonController';
// import Clock from './components/clock';
import About from './views/about';
import Home from './views/home';

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/flux',
        component: MyButtonController
    }
];

export default routes;