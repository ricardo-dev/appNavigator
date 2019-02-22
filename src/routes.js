import {createStackNavigator} from 'react-navigation';

import Main from './pages/main';

import Principal from './pages/principal';
import Pagina1 from './pages/pagina1';
import Pagina2 from './pages/pagina2';
import Pagina3 from './pages/pagina3';

import Info from './pages/info';

import Detalhes from './pages/detalhes';

export default createStackNavigator(
    {
        Main,
        Principal,
        Pagina1,
        Pagina2,
        Pagina3,
        Info,
        Detalhes,
    },
);
