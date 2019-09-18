
import React from 'react';
import {Route , Switch} from 'react-router-dom';
import App from './pages/App';
import NotFound from './pages/NotFound';
import Register from './pages/Register';
import Contactus from './pages/Contactus';
import Aboutus from './pages/Aboutus';
import Products from './pages/Products';
import Laptops from "./pages/Laptops";
import Smartphones from "./pages/Smartphones";
import Tablets from "./pages/Tablets";
import Accessories from "./pages/Accessories";
import Search from "./pages/Search";
import Admin from "./pages/Admin"





export default class Routes extends React.Component{

    render() {

        return(
            <Switch>
                <Route  path='/' component={App} exact />
                <Route  path='/Register' component={Register} exact />
                <Route  path='/Contactus' component={Contactus} exact />
                <Route  path='/Products' component={Products} exact />
                <Route  path='/Products/Laptops' component={Laptops} exact />
                <Route  path='/Products/Smartphones' component={Smartphones} exact />
                <Route  path='/Products/Tablets' component={Tablets} exact />
                <Route  path='/Products/Accessories' component={Accessories} exact />
                <Route  path='/Search' component={Search} exact />
                <Route  path='/Aboutus' component={Aboutus} exact />
                <Route  path='/Admin' component={Admin} exact />
                <Route   component= {NotFound} />

            </Switch>

       )
    }
};