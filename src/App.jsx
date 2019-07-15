import React, { lazy, Suspense } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
// import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import TopMenu from './components/TopMenu';
// import BottomMenu from './components/BottomMenu';
import Home from './routes/Home';
// import Todo from './routes/Todo/TodoApp';
import About from './routes/About';
import Contract from './routes/Contract';
import NotFound from './routes/NotFound';
import './styles/app.less';
const { Footer } = Layout;
const Chart = lazy(() => import(/* webpackChunkName: "Chart" */ './routes/Chart'));//React16.6.0+

const App = () => {
    return (
        <HashRouter>
            <Suspense fallback={<div style={{disply:'flex',justifyContent:'center',alignItems:'center'}}>Loading...</div>}>
                <TopMenu />
                <Switch>
                    <Route exact path='/' component={props => <Home {...props} />} />
                    <Route path='/home' component={props => <Home {...props} />} />
                    {/* <Route path="/todo" component={props => <Todo {...props}/>} /> */}
                    <Route path='/chart' component={Chart} />
                    <Route path="/about" component={About} />
                    <Route path="/contract" component={Contract} />
                    <Route path="*" component={NotFound} />
                </Switch>
                <Footer style={{ textAlign: 'center' }}>©2019 Created by CoolSummer</Footer>
            </Suspense>
        </HashRouter>
    );
}

export default App;
