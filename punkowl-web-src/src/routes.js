import Home from './component/home';
import Projects from './component/projects';
import About from './component/about';

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
    }
]