import Home from './components/Home';
import AddCoolWords from './components/AddCoolWords'

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/superdupercoolbandnamegenerator', component: Home, name: 'home'},
    {path: '/addcoolwords', component: AddCoolWords, name: 'addcoolwords'}
];

export default routes;