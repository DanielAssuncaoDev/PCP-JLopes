import {BrowserRouter, Switch, Route} from 'react-router-dom';

import HomeUser from './pages/User/UserHome'
import ListProduct from './pages/User/ListProduct'
import RegisterProduct from './pages/User/RegisterProdut'
import MovementProduct from './pages/User/movement'
import Replacement from './pages/User/Replacement'

export default function Routes () {
    return(
        <BrowserRouter>
          <Switch>
              <Route path='/' exact={true} component={HomeUser} />
              <Route path='/List' exact={true} component={ListProduct} />
              <Route path='/Register' exact={true} component={RegisterProduct} />
              <Route path='/Movement' exact={true} component={MovementProduct} />
              <Route path='/Replacement' exact={true} component={Replacement} />
          </Switch>
        </BrowserRouter>
    )
    
}
