import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
            name:"",
            pwd:""
        }
    }
    
    render() {
        const {name,pwd} = this.state
        return (
            <div>
                <input type="text" value={name} onChange={(e)=>this.handleChange('name',e)}/>
                <br/>
                <input type="password" value={pwd} onChange={(e)=>this.handleChange('pwd',e)}/>
                <button onClick={this.handleLogin}>登录</button>
            </div>
        );
    }
    handleChange = (type,e)=>{
        this.setState({
            [type]:e.target.value
        })
    }
    handleLogin =()=>{
        window.localStorage.setItem('isLogin',this.state.name)
        this.props.history.replace('/')
    }
}

export default Login;