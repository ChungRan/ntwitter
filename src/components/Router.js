import { useState } from "react";
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Profile from "routes/Profile";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";

// render 할 router은 사용자의 로그인 여부에 따라 달라질 예정
// hooks component
const AppRouter = ({ isLoggedIn }) => {

    return (
        <Router>
            {isLoggedIn && <Navigation></Navigation>}
            <Switch>
               {isLoggedIn ? (
                // 아래는 Fragment인데 많은 요소를 render하고 싶지만
                // 따로 div등을 사용하고 싶지 않다면 사용한다.
                <>
                <Route exact path ="/">
                        <Home></Home>
                </Route>
                <Route exact path ="/profile">
                        <Profile></Profile>
                </Route>
                </> 
               ) : (
                <>
                <Route exact path="/">
                   <Auth></Auth>
                </Route>
                <Redirect from="*" to="/" />
                </>
                )} 
            </Switch>
        </Router>
    )
}

export default AppRouter;