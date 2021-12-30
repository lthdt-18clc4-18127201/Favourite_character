import React, { useState } from 'react'
import Link from 'next/link'
import Router from 'next/router';
import cookie from 'js-cookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle  } from '@fortawesome/free-brands-svg-icons'
import { redirect } from 'next/dist/server/api-utils';


export default function Login() {
    const [email, setEmail] = useState('');
    const [loginError, setLoginError] = useState('');
    const [password, setPassword] = useState('');

    function handleOnSubmit(e) {
        e.preventDefault();

        //call api
        fetch('/api/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        })
        .then((r) => {
            return r.json();
        })
        .then((data) => {
            if(data && data.error){
                setLoginError(data.message);
            }
            if(data && data.token) {
                //set cookie
                cookie.set('token', data.token, {exprires: 2});
                Router.push('/');
            }
        });
    }

    return (
        <div className="auth-form" onSubmit={handleOnSubmit}>
           <div className="auth-form__container">
                <div className="auth-form__header">
                    <h3 className="auth-form__heading">Login</h3>
                    <Link href="/register" passHref><span className="auth-form__swith-btn active">go to Register</span></Link>
                </div>

                <div className="auth-form__form">
                    <div className="auth-form__group">
                        <input type="text" className="auth-form__input" id="email" placeholder="Enter email"/>
                    </div>
                    <div className="auth-form__group">
                        <input type="password" className="auth-form__input" placeholder="Enter password"/>
                    </div>

                    <div className="auth-form__aside">
                        <div className="auth-form__help">
                            <Link href="" passHref>
                                <a className="auth-form__help-link auth-form__help-forgot"><span className="format">Forgot password?</span></a>
                            </Link>
                            <span className="auth-form__help-separate"></span>
                            <Link href="" passHref>
                                <a className="auth-form__help-link"><span className="format">Help?</span></a>
                            </Link>
                        </div>   
                    </div>

                    <div className="auth-form__controls">
                        <button className="btn btn--normal">Back</button>
                        <button className="btn btn--login">Login</button>
                    </div>
                </div>
           </div>

            <div className="auth-form__socials">
                <a href="" className="auth-form__socials-facebook btn btn-size-s btn--with-icon">
                    <FontAwesomeIcon icon={faFacebook} style={{width: '18px'}} className="auth-form__socials-icon"/>
                    <span className="auth-form__socials-title">Login with Facebook</span>
                </a>

                <a href="" className="auth-form__socials-google btn btn-size-s btn--with-icon">
                    <FontAwesomeIcon icon={faGoogle} style={{width: '18px'}} className="auth-form__socials-icon"/>
                    <span className="auth-form__socials-title">Login with Google</span>
                </a>
            </div>
        </div>
    )
}