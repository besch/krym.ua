import * as React from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Home from './NavItems/Home';
import About from './NavItems/About';
import Menu from './NavItems/Menu';
import Service from './NavItems/Service';
import Promotion from './NavItems/Promotion';
import Partners from './NavItems/Partners';
import Opinion from './NavItems/Opinion';
import NotFoundView from './NotFound';

export default class NavMenu extends React.Component<any, any> {
    render() {
        return (
            <Router>
                <div>
                    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
                        <h5 className="my-0 mr-md-auto font-weight-normal">KRYM.UA</h5>
                        <nav className="my-2 my-md-0 mr-md-3">
                            {/* <Link className="p-2 text-dark" to="/">Home</Link> */}
                            <Link className="p-2 text-dark" to="/about">О мне</Link>
                            <Link className="p-2 text-dark" to="/menu">Меню</Link>
                            <Link className="p-2 text-dark" to="/service">Услуга</Link>
                            <Link className="p-2 text-dark" to="/promotion">Акция</Link>
                            <Link className="p-2 text-dark" to="/partners">Мой партнеры</Link>
                            <Link className="p-2 text-dark" to="/opinion">Отзывы</Link>
                        </nav>
                        {/* <a className="btn btn-outline-primary" href="#">Sign up</a> */}
                    </div>

                    <div className="container">
                        {/* <Route path="/" exact component={Home} /> */}
                        <Route path="/about" component={About} />
                        <Route path="/menu" component={Menu} />
                        <Route path="/service" component={Service} />
                        <Route path="/promotion" component={Promotion} />
                        <Route path="/partners" component={Partners} />
                        <Route path="/opinion" component={Opinion} />
                        {/* <Route component={NotFoundView} /> */}
                    </div>
                </div>
            </Router>
        );
    }
}