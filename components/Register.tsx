import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle  } from '@fortawesome/free-brands-svg-icons'

export default function Register() {
    return (
        <>
        <div className="auth-form-register">
           <div className="auth-form__container">
                <div className="auth-form__header">
                    <h3 className="auth-form__heading">Register</h3>
                    <Link href="/login" passHref><span className="auth-form__swith-btn active">go to Login</span></Link>
                </div>

                <div className="auth-form__form">
                    <div className="auth-form__group">
                        <input type="text" className="auth-form__input" placeholder="Enter email"/>
                    </div>
                    <div className="auth-form__group">
                        <input type="password" className="auth-form__input" placeholder="Enter password"/>
                    </div>
                    <div className="auth-form__group">
                        <input type="password" className="auth-form__input" placeholder="Enter password again"/>
                    </div>

                    <div className="auth-form__controls">
                        <button className="btn btn--normal">Back</button>
                        <button className="btn btn--login">Register</button>
                    </div>
                </div>
           </div>

            <div className="auth-form__socials">
                <Link href="" passHref>
                    <a  className="auth-form__socials-facebook btn btn-size-s btn--with-icon">
                        <FontAwesomeIcon icon={faFacebook} style={{width: '18px'}} className="auth-form__socials-icon"/>
                        <span className="auth-form__socials-title">Login with Facebook</span>
                    </a>
                </Link>
                
                <Link href="" passHref>
                    <a href="" className="auth-form__socials-google btn btn-size-s btn--with-icon">
                        <FontAwesomeIcon icon={faGoogle} style={{width: '18px'}} className="auth-form__socials-icon"/>
                        <span className="auth-form__socials-title">Login with Google</span>
                    </a>
                </Link>
            </div>
        </div>
        </>
    )
}