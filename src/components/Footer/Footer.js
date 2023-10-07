import React from 'react'
import './footer.css'
import { BsTwitter, BsFacebook, BsYoutube, BsInstagram } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ImLocation2 } from 'react-icons/im'

function Footer() {

    return (
        <div className='footer-card'>
            <div className="top">
                <div className="top-left">
                    <div className="section1">
                        <h3 className='head3'>FIND A STORE</h3>
                        <h3 className='head3'>BECOME A MEMBER</h3>
                        <h3 className='head3'>Send Us Feedback</h3>
                        <h3 className='head3'>STUDENT DISCOUNTS</h3>
                    </div>
                    <div className="section2">
                        <div><a href="/contact"><h3 className='head3'>GET HELP</h3></a></div>
                        <div className='quicks'>
                            <p className='para'>Order Status</p>
                            <p className='para'>Delivery</p>
                            <p className='para'>Returns</p>
                            <p className='para'>Payment Options</p>
                            <p className='para'>Contact Us On Nike.com</p>
                            <p className='para'>Contact Us On All Other</p>
                            <p className='para'>Inquiries</p>
                        </div>
                    </div>
                    <div className="section3">
                        <div><h3 className='head3'>ABOUT NIKE</h3></div>
                        <div className='quicks'>
                            <p className='para'>News</p>
                            <p className='para'>Careers</p>
                            <p className='para'>Investors</p>
                            <p className='para'>Sustainability</p>
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
                    <p className='para'><ImLocation2 />  India &copy; 2023 All Rights Reserved.</p>
                </div>
                <div className="right">
                    <p className='para'>Guides</p>
                    <p className='para'>Terms Of Sales</p>
                    <p className='para'>Terms Of Use</p>
                    <p className='para'>Nike Privacy Policy</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
    