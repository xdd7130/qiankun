import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router,Link,NavLink,Redirect,Switch,Routes } from 'react-router-dom'
// import Router from './router/index.js'
import React, { Component } from 'react'
// 导入所需组件
import Login from './components/login/index.js'
import Home from './components/home/index.js'

function App() {
  return (
    <div className="App">
      <header >
        <div>
          
        <Link to='/Home'>Home</Link> |
        <Link to={'/Login'}>Login</Link>
        <Routes >
          
          {/* 使用/配置路由默认页；exact严格匹配 */}
          <Route component={Login} element={<Login/>} path='/' exact></Route>
          <Route component={Login}  element={<Login/>} path='/Login'></Route>
          <Route component={Home} element={<Home/>} path='/Home'></Route>
        </Routes>
        </div>
      </header>
    </div>
  );
}

export default App;
