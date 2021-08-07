import React from 'react';
import _ from 'lodash';

export default class ContactUs extends React.Component {
    render(){ 
        return(
            <section className="contact_us" data-attr="images/lines.svg">  
                <div className="container container--lg"> 
                    <h1 className="block-title">Contact Us</h1>
                    <div className="block-content">
                        <div className='d-flex'>
                            <div className="grid-item mw-480 request_col">
                                <div className="grid-item-inside ">
                                    <div className="grid-item-image">
                                        <img src="images/icon/enquiry.svg"  alt="Enquiry"/>
                                    </div>
                                    <div className="grid-item-title">
                                        <div className="card_title">Request we contact you? </div>
                                        <div className="card_subtitle">Have our expert contacted you?</div>
                                        <a href="#!" className="card_action">Send a Request 
                                            <img src="images/icon/arrow.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item  mw-330">
                                <div className="grid-item-inside ">
                                    <div className="grid-item-image">
                                        <img src="images/icon/message.svg"  alt="Message"/>
                                    </div>
                                    <div className="grid-item-title">
                                        <div className="card_title">Chat with expert </div>
                                        <div className="card_subtitle">Available Monday -Saturday</div>
                                        <a href="#!" className="card_action">Send a Request 
                                            <img src="images/icon/arrow.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="grid-item  mw-300">
                                <div className="grid-item-inside ">
                                    <div className="grid-item-image">
                                        <img src="images/icon/support.svg"  alt="Call Us"/>
                                    </div>
                                    <div className="grid-item-title">
                                        <div className="card_title">Call Us</div>
                                        <div className="card_subtitle">Available Monday -Saturday</div>
                                        <a href="#!" className="card_action">Call 123456789
                                            <img src="images/icon/arrow.svg" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* shape */}
                <img className="shape_contact left " src="images/lines.svg" />
                <img  className="shape_contact right"  src="images/lines.svg" />
            </section>
        )
    }
    
}