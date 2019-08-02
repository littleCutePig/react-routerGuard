import React, { Component } from 'react';
import { RouterView,route } from "../../Routers";
import { NavLink } from "react-router-dom";
import {isLogin} from '../../untils/'
class Community extends Component {
    render() {
        return (
            <>
             <main>
                <RouterView route={this.props.route}></RouterView>
             </main> 
             <ul className="footer">
                    {
                        this.props.route.map(item => (
                            item.path ? <li key={item.path}><NavLink to={item.path}>{item.title}</NavLink></li> : null
                        ))
                    }
                </ul>
            </>
        );
    }
}

export default isLogin(Community);