import React from 'react'
import './login.css';
import { useState } from 'react';
import img from '../../assests/other/2ad.jpeg'

function Login() {

    const formData = {email : "", password : ""};

    const [formDetails, setFormDetails] = useState(formData);
    const[record, setRecord] = useState([]);

    const handleChange =(event)=>{
        const name = event.target.name;
        const value = event.target.value;

        setFormDetails({...formDetails, [name] : value} )

        console.log(name ,value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        const data = {...formDetails, id : new Date().getDate.toString()}

        setRecord([...record, data]);
        setFormDetails({ email: "", password : ""});
        document.getElementById("t&c").checked = false;
    }

    return (
        <div className='login-card'>
            <div className="side-banner">
                <img src={img} alt="sideBanner" />
            </div>
            <div className="form">
                <div className="page-head">
                    <h2>Login</h2>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="login-form">
                        <div className="email">
                            <label htmlFor="email">Email</label>
                            <input type="email" id='email' name='email' value={formDetails.email} onChange={handleChange} required />
                        </div>
                        <div className="password">
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' name='password' value={formDetails.password} onChange={handleChange} required />
                        </div>
                        <div className="termsnCon">
                            <input type="checkbox" name="t&c" id="t&c" required />
                            <label htmlFor="t&c">By clicking you are accepting our Terms and Conditions.</label>
                        </div>
                        <button type='submit'>Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login