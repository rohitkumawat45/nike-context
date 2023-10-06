import React from 'react'
import './footer.css'
import { BsTwitter, BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';
import { ImLocation2 } from 'react-icons/im'

function Footer() {
    return (
        <div className='footer-card'>
            <div className="top">
                <div className="top-left">
                    <div className="section1">
                        <h3>FIND A STORE</h3>
                        <h3>BECOME A MEMBER</h3>
                        <h3>Send Us Feedback</h3>
                        <h3>STUDENT DISCOUNTS</h3>
                    </div>
                    <div className="section2">
                        <div><h3>GET HELP</h3></div>
                        <div className='quicks'>
                            <p>Order Status</p>
                            <p>Delivery</p>
                            <p>Returns</p>
                            <p>Payment Options</p>
                            <p>Contact Us On Nike.com</p>
                            <p>Contact Us On All Other</p>
                            <p>Inquiries</p>
                        </div>
                    </div>
                    <div className="section3">
                        <div><h3>ABOUT NIKE</h3></div>
                        <div className='quicks'>
                            <p>News</p>
                            <p>Careers</p>
                            <p>Investors</p>
                            <p>Sustainability</p>
                        </div>
                    </div>
                </div>
                <div className="top-right">
                    <a href="https://twitter.com/Nike" target='_blank' rel='noreferrer'><BsTwitter size={25} /></a>
                    <a href="https://www.facebook.com/nike" target='_blank' rel='noreferrer'><BsFacebook size={25} /></a>
                    <a href="https://www.youtube.com/user/nike" target='_blank' rel='noreferrer'><BsYoutube size={25} /></a>
                    <a href="https://www.instagram.com/nike/" target='_blank' rel='noreferrer'><BsInstagram size={25} /></a>
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <p><ImLocation2 />  India &copy; 2023 All Rights Reserved.</p>
                </div>
                <div className="right">
                    <p>Guides</p>
                    <p>Terms Of Sales</p>
                    <p>Terms Of Use</p>
                    <p>Nike Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer