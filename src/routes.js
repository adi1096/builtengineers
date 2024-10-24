import Home from './components/HomePage';
import About from './components/AboutUs';
import Contact from './components/ContactUs';
import Projects from './components/Projects';

const routes = [
  { path: '/', component: <Home />, exact: true },
  { path: '/projects', component: <Projects /> },
  { path: '/about', component: <About /> },
  { path: '/contact', component: <Contact /> },
];

export default routes;