import { useState } from 'react';
import {useCookies} from 'react-cookie';
export default function LoginComponent() {
   const [cookies,setCookie,removeCookie]=useCookies(['username']);
   const [userDetails,setUserDetails] =  useState({userName:'',Password:''});


    function handleUserChange(e) {
        setUserDetails({
            userName: e.target.value,
            Password: userDetails.Password
        })
    }
    function handlePwdChange(e) {
        this.setUserDetails({
            userName: userDetails?.userName,
            Password: e.target.value
        })
    }

    function handleLoginClick(){
        setCookie('username',userDetails.userName,{path:'/',expires:new Date('12-01-2025 11:18')});
        alert('Login Success..');
    }
    function signOutClick(){
        removeCookie('username')
        alert('Signed out successfully');
    }

        return (
            <center>
                <div className="container-fluid w-25">
                    <dl>
                        <dd>UserName</dd>
                        <dt><input type="text" onChange={handleUserChange} /></dt>
                    </dl>
                    <dl>
                        <dd>Password</dd>
                        <dt><input type="password" onChange={handlePwdChange} /></dt>
                    </dl>
                <br />
                    <div><button className="btn btn-outline-primary" onClick={handleLoginClick}>Login</button></div><br />
                    </div>
                    <div>
                    <button className="btn btn-outline-danger" onClick={signOutClick}>Sign Out</button>
                    </div>
                <br/>
               Hello! {cookies.username}
            </center>
        );
}
