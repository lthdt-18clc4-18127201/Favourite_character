/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle  } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'


export default function Login() {
    return (
        <div className="edit-form">
            <div className="auth-form__container">
                    <div className="auth-form__header">
                        <h3 className="auth-form__heading">Edit character</h3>
                    </div>

                    <div className="auth-form__form">
                        <Image className="img" src="/images/planets.jpg" width={250} height={150}/>
                        <div className="auth-form__group">
                            <input type="text" className="auth-form__input" id="title" placeholder="Title"/>
                        </div>
                        <div className="auth-form__group">
                            <input type="text" className="auth-form__input" placeholder="Content"/>
                        </div>
                        <div className="auth-form__group">
                            {/* <label htmlFor="exampleFormControlTextarea1"></label> */}
                            <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Decription"></textarea>
                        </div>

                        <div className="auth-form__controls">
                            <button className="btn btn--normal">Back</button>
                            <button className="btn btn--login">Apply</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}