// import { Link } from "react-router-dom";
// import logo from "../images/CA1.png"
import { SlSocialInstagram } from "react-icons/sl";
import { SiFacebook } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {


    // const handleChange = () => {
    //     window.scroll(0, 0);
    // }

    return (
        <div className="footer " >
            <div className="container ">
                <div className="row d-flex justify-content-between">
                    <div className="col-12 col-md-5  py-4">
                        {/* <img src={logo} alt="log" width="30%" className="pb-4" /> */}
                        <h6>Head Office</h6>
                        <p className="text-wrap">No.14/6M, Hospital Road, Sulur,<br /> Coimbatore -641 402. </p>
                        <h6>Contact Us</h6>
                        <span>+91 94425 80495</span>
                        <p className="">+91 94879 80495</p>
                        <h6>Mail Us</h6>
                        <a href="mailto:capandian1971@gmail.com" className="link">capandian1971@gmail.com</a>
                    </div>
                    {/* <div className="col-12 col-md-4 text-white py-4">
                        <h4 className="">QUICK LINKS</h4>
                        <Link className="link" onClick={handleChange} to="/">Home</Link>
                        <Link className="link" onClick={handleChange} to="/aboutus/thefirm" >About Us</Link>
                        <Link className="link" onClick={handleChange} to="">Services</Link>
                        <Link className="link" onClick={handleChange} to="" >Career</Link>
                        <Link className="link" onClick={handleChange} to="/experience">Experience</Link>
                        <Link className="link" onClick={handleChange} to="/contact">Contact Us</Link>
                    </div> */}
                    <div className="col-12 col-md-3 py-4">
                        {/* <h4>Contact Us</h4>
                        <p className="text-white">+91 94425 80495</p>
                        <p className="text-white">+91 94879 80495</p>
                        <h4>Mail Us</h4>
                        <a href="mailto:capandian1971@gmail.com" className="link">capandian1971@gmail.com</a> */}
                        <h6>Follow Us</h6>
                        <div className="d-flex  gap-3">
                            <SiFacebook  size={20} className="footer_icon"/>
                            <SlSocialInstagram  size={20} className="footer_icon" />
                            <FaLinkedin  size={20} className="footer_icon" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pb-2 text-wrap">
                Copyright &#169; 2024 chithiraipandian&co.com All rights reserved
            </div>

        </div>
    )
}

export default Footer;