import Link from 'next/link'
import FooterCategories from './FooterCategories'
function Footer(){
    return(
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footercol">
                            <img src="/static/logo.png" alt="my image" className="footer-logo"/>
                        </div>
                        <div className="footercol">
                            <h5>Company</h5>
                            <p>
                                Omnix Digital Inc<br/>
                                Mountain View,CA<br/>
                                info@omnix.difital
                            </p>
                        </div>
                        <div className="footercol">
                            <h5>Categories</h5>
                            <FooterCategories />
                            <div className="text-right">
                            <Link href="/"><a className="flinks">..View all</a></Link>
                            </div>
                        </div>
                        <div className="footercol">
                            <h5>Legal</h5>
                            <ul className="nav flex-column">
                                <li><Link href="/"><a className="flinks">Terms of Service</a></Link></li>
                                <li><Link href="/categories"><a className="flinks">Privacy Policy</a></Link></li>         
                            </ul>
                        </div>
                        <div className="footercol footerform">
                            <h5>For Partnerships</h5>
                            <div>
                                <form>
                                    <input type="text" name="name" placeholder="Full Name" className="fname" />
                                    <input type="email" name="email" placeholder="Email" className="email" />
                                    <input type="text" name="company" placeholder="Company" className="company"/>
                                    <textarea placeholder="Message"></textarea>
                                    <button className="submitinfo">Submit</button>
                                </form>
                            </div>
                        </div>
                        <div className="footercol payment-icons">
                            <h5>Payment Methods</h5>
                            <span> <i className="fab fa-cc-visa"></i> </span>
                            <span> <i className="fab fa-cc-mastercard"></i> </span>
                            <span> <i className="fab fa-cc-amex"></i> </span>
                            <span> <i className="fab fa-cc-paypal"></i> </span>
                        </div>
                    </div>
                    <div className="row footer-bottom">
                        <div className="col-md-12">
                            <div className="float-left">
                                <p>Copyright &copy; Omnix Digital Inc</p>
                            </div>
                            <div className="float-right">
                                <p>Made with <i className="fa fa-heart"></i> from Berlin</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <style jsx>{`
                footer{
                    margin-top:100px;
                }
                footer h5{
                    font-size:15px;
                    font-weight: normal !important;
                    margin-bottom:30px;
                    color:#000000;
                }
                footer p, footer .flinks {
                    color: #314559 !important;
                    font-size:14px;
                    font-weight:regular;
                }
                .flinks {
                    color: #314559 !important;
                }
                footer form input,footer form textarea{
                    font-size:13px;
                    font-weight: 600;
                    width:100%;
                    display:inline;
                    border-top:0px;
                    border-left:0px;
                    border-right:0px;
                    border-bottom:1px solid #EBEBEB;
                    margin-bottom:10px;
                    resize: none;
                }
                footer form input::placeholder,footer form textarea::placeholder{
                    color:#8C8C8C;
                    font-weight:semibold;
                    font-size:14px;
                }
                .payment-icons span {
                    font-size: 28px !important;
                    padding: 1px 3px;
                }
                .footer-logo {
                    width: 67px;
                }
                .footercol{
                    display:inline;
                    padding:18px;
                    vertical-align:top;
                }
                .footerform{
                    width:30%;
                }
                .footerform .email, .footerform .company{
                    width:47%;
                }
                .footerform .email{
                    margin-right: 10px;
                }
                .footerform .submitinfo{
                    color: #fff;
                    background: #E5397D !important;
                    border: 0px;
                    border-radius: 30px;
                    padding: 6px 15px;
                    font-size: 13px;
                    font-weight: 600;
                    box-shadow: 0px 4px 15px #dbd9d9;
                }
                .footer-bottom{
                    font-size:12.5px;
                }
            `}</style>
        </div>
    )
}

export default Footer;