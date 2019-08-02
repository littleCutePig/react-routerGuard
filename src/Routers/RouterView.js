import React from 'react';
import { Switch, Redirect, Route } from "react-router-dom";
const isLogin = window.localStorage.getItem('isLogin')
const RouterView = props => (
    <Switch>
        {
            props.route.map(Item => (
                Item.path ? <Route
                    key={Item.path}
                    path={Item.path}
                    render={props =>
                        Item.isLogin ? (
                            isLogin ? (
                                <Item.component {...props} route={Item.children} />
                            ) : (
                                    <Redirect to="/login" />
                                )
                        ) : (
                                <Item.component {...props} route={Item.children} />
                            )
                    }
                /> : <Redirect {...Item} key={Item.from}></Redirect>
            ))
        }
    </Switch>
)

export default RouterView