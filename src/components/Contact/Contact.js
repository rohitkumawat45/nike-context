import React from 'react'
import './contact.css'
import chat from './images/chat.png'
import email from './images/email.png'
import phone from './images/phone.png'
import store from './images/store.png'
import { BiSearch } from 'react-icons/bi'

function Contact() {
    
    return (
        <div className='contact'>
            <div className='head'>
                <h1>GET HELP</h1>
                <div className="search-bar">
                    <label htmlFor="search">What we can help you with ?</label>
                    <div className='search'>
                        <input type="text" id='search' />
                        <a href="3"><BiSearch size={30} /></a>
                    </div>
                </div>
            </div>
            <div className="content">
                <div className="quick-assists">
                    <div className='quick-head'>
                        <h2>QUICK ASSISTS</h2>
                        <p>Answers to our most frequently asked questions are just one click away.</p>
                    </div>
                    <div className="quick-links">
                        <div className="link-group">
                            <h3>DISPATCH & DELIVERY</h3>
                            <p>What are Nike's delivery options?</p>
                            <p>Can my Nike order be dispatched internationally?</p>
                            <p>Does my Nike order need to clear customs?</p>
                        </div>
                        <div className="link-group">
                            <h3>RETURNS</h3>
                            <p>How do I return my Nike order?</p>
                            <p>What is Nike's returns policy?</p>
                            <p>Where is my refund?</p>
                        </div>
                        <div className="link-group">
                            <h3>NIKE MEMBERSHIP</h3>
                            <p>What is Nike Membership?</p>
                            <p>How do I become a Nike Member?</p>
                            <p>How do I get the most out of NRC and NTC?</p>
                        </div>
                        <div className="link-group">
                            <h3>ORDERS</h3>
                            <p>Where is my Nike order?</p>
                            <p>Can I cancel or change my Nike order?</p>
                            <p>What payment options can I use on Nike orders?</p>
                        </div>
                        <div className="link-group">
                            <h3>PRODUCT INFO</h3>
                            <p>How do I get Nike’s newest sneaker releases?</p>
                            <p>How do I find the right size and fit?</p>
                            <p>What is the Nike By You personalisation policy?</p>
                        </div>
                        <div className="link-group">
                            <h3>CORPORATE</h3>
                            <p>Where can I learn more about Nike, Inc.?</p>
                            <p>Where is the Nike store closest to me?</p>
                        </div>
                    </div>
                </div>
                <div className="contact-methods">
                    <div className="heading">
                        <h1>Contact Us</h1>
                    </div>
                    <div className="contactUs">
                        <div className="contact-cards">
                            <img src={phone} alt="" />
                            <h3>000 800 919 0566<br />
                                Products & Orders: 24 hours a day, 7 days a week<br />
                                Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</h3>
                        </div>
                        <div className="contact-cards">
                            <img src={chat} alt="" />
                            <h3>24 hours a day<br />
                                7 days a week</h3>
                        </div>
                        <div className="contact-cards">
                            <img src={email} alt="" />
                            <h3>We'll reply within<br />
                                five business days</h3>
                        </div>
                        <div className="contact-cards">
                            <img src={store} alt="" />
                            <h3>STORE LOCATOR <br />
                                Find Nike retail stores near you</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;