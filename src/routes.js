import Sidebar from './components/sidebar';
// import Clock from './components/clock';
import About from './views/about';
import Home from './views/home';
import NoMatch from './views/no-match';

const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    // {
    //     component: NoMatch
    // }
];

export default routes;