import Home from './component/home';
import Projects from './component/projects';
import About from './component/about';
import Page from './component/page';

export default [
    {
        title: 'Home',
        path: '/',
        exact: true,
        component: Home
    },
    {
        title: 'Projects',
        path: '/projects',
        exact: true,
        component: Projects
    },
    {
        title: 'About',
        path: '/about',
        exact: true,
        component: About
    },
    {
        title: 'Page',
        path: '/p/:name/:lang',
        component : Page
    },
    {
        title: 'Home',
        path: '*',
        exact: true,
        component: Home
    }
]