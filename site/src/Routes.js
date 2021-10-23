import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomeUser from './pages/User/UserHome'
import ListProduct from './pages/User/ListProduct'
import RegisterProduct from './pages/User/RegisterProdut'
import MovementProduct from './pages/User/movement'
import Replacement from './pages/User/Replacement'
import Login from './pages/Login/'
import Cadastrarse from './pages/Register'
import PagEspera from './pages/Espera'

import InManager from './pages/Adm/inputManager';
import LoginManager from './pages/Adm/LoginManager';
import Reports from './pages/Adm/Reports';

export default function Routes () {
    return(
        <BrowserRouter>
          <Switch>
              <Route path='/' exact={true} component={HomeUser} />
              <Route path='/List' exact={true} component={ListProduct} />
              <Route path='/Register' exact={true} component={RegisterProduct} />
              <Route path='/Movement' exact={true} component={MovementProduct} />
              <Route path='/Replacement' exact={true} component={Replacement} />
              <Route path='/login' exact={true} component={Login} />
              <Route path='/cadastrarse' exact={true} component={Cadastrarse} />
              <Route path='/wait' exact={true} component={PagEspera} />
              <Route path='/inputManager' exact={true} component={InManager} />
              <Route path='/LoginsManager' exact={true} component={LoginManager} />
              <Route path='/ReportsManager' exact={true} component={Reports} />



          </Switch>
        </BrowserRouter>
    )
    
}
