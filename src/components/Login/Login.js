import React from 'react'
import './login.css';
import { useState } from 'react';

function Login() {

    const submitedForm = { email: "", password: "" };
    const [formValues, setFormValues] = useState(submitedForm);

    const handleChange = (e)=>{
         
    }

    return (
        <div className='login-card'>
            <div className="side-banner">

            </div>
            <form action="">
                <div className="page-head">

                </div>
                <div className="login-form">
                    <div className="email">
                        <label htmlFor="email"></label>
                        <input type="email" id='email' value={submitedForm.email} onChange={handleChange} required />
                    </div>
                    <div className="password">
                        <label htmlFor="password"></label>
                        <input type="password" id='password' value={submitedForm.password} onChange={handleChange}  required />
                    </div>
                    <div className="termsnCon">
                        <input type="checkbox" name="t&c" id="t&c" required />
                        <label htmlFor="t&c"></label>
                    </div>
                    <button type='submit'></button>
                </div>
            </form>
        </div>
    )
}

export default Login