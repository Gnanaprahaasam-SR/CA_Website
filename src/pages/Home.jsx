import React, { useState, useRef, useEffect } from "react";
import { Employee } from "./AboutUs/AboutUs_OurTeam";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import audit from "../images/Audit&Assurance1.png";
import bookkeeper from "../images/Bookkeeping1.jpg";
import Advisory from "../images/Advisory1.png";
import indirect from "../images/IndirectTax1.png";
import Secretarial from "../images/Secretarial1.png";
import DirectTax from "../images/DirectTax1.png";
import OutSourcing from "../images/Transformation1.png"
import { CiCircleCheck } from "react-icons/ci";
// import { PiCloudSlash } from "react-icons/pi";
import Herosection from "../images/Home-heroSection.png"
import chithirapandian from "../images/TeamImage/CA-6.png";
import founder from "../images/TeamImage/CA.png"
import Team from "../images/TeamImage/CA-13.png";
import Team2 from "../images/TeamImage/CA-11.png";
import Team3 from "../images/TeamImage/CA-17.png";
import Team4 from "../images/TeamImage/CA-18.png";
import Team5 from "../images/TeamImage/CA-14.png";
import Team6 from "../images/TeamImage/CA-10.png";
import Team7 from "../images/TeamImage/CA-8.png";
import Team8 from "../images/TeamImage/CA-22.jpeg";
// import Team9 from "../images/TeamImage/CA-25.png";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

const TeamImage = [Team, Team2, Team3, Team4, Team5, Team6, Team7, Team8,];
const cardItems = [
  {
    id: 1,
    icon: audit,
    title: "Audit & Assurance Services",
    description: ["Bank Audit", "Internal Audit", "Stock Audit", "Tax Audit",],
    link: "/service"
  },
  {
    id: 2,
    icon: DirectTax,
    title: "Direct Tax Services",
    description: ["Domestic", "International"],
    link: "/service"

  },
  {
    id: 3,
    icon: indirect,
    title: "Indirect Tax Services",
    description: ["GST Compliances", "GST Audit", "GST Returns and refund"],
    link: "/service"

  },
  {
    id: 4,
    icon: Advisory,
    title: "Advisory Services",
    description: ["Preparing Business Plan", "Corporate Restructing", "Budget and Forecas", "Share Valuation"],
    link: "/service"

  },
  {
    id: 5,
    icon: Secretarial,
    title: "Secretarial",
    description: ["Drafting of LLP Agreement", "Retruns of ROC & LLP", "Modification in LLP", "Conversion of firm into LLP and Vice Versa"],
    link: "/service"

  },
  {
    id: 6,
    icon: bookkeeper,
    title: "Book keeping Services",
    description: ["Accounting supervision", "Management reports", "Statutory returns", "Preparation of MIS reports"],
    link: "/service"

  },
  {
    id: 7,
    icon: OutSourcing,
    title: "Outsourcing Services",
    description: ["Access to Expertise", "Quality Improvement", "Scalability", "Cost Savings", "Time Efficiency"],
    link: "/service"

  }
];

// function TextTypingAnimation(props) {
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDelete, setIsDelete] = useState(false);

//   const timeoutRef = useRef(null);
//   const displayedTextRef = useRef("");

//   useEffect(() => {
//     if (props.texts?.length !== 0) {
//       const isEmptyDisplay = displayedTextRef.current === "";
//       // to extra delay in order to show fully text
//       const shouldDelayNextProcess =
//         isDelete &&
//         displayedTextRef.current.length === props.texts[textIndex].length;

//       displayedTextRef.current = props.texts[textIndex].substr(0, charIndex);

//       timeoutRef.current = setTimeout(
//         () => {
//           if (isDelete && isEmptyDisplay) {
//             // when finish the deletion of current text, then start displaying next text index
//             // if it's the last index already, then start the first text index
//             setIsDelete(false);
//             setTextIndex((prevTextIndex) =>
//               prevTextIndex + 1 < props.texts.length ? prevTextIndex + 1 : 0
//             );
//           } else if (
//             isDelete ||
//             displayedTextRef.current === props.texts[textIndex]
//           ) {
//             // if the current text is displayed fully OR on deletion process,
//             // then decrease sub-string index of current text to start deletion process
//             setIsDelete(true);
//             setCharIndex((prevSubIndex) =>
//               prevSubIndex !== -1 ? prevSubIndex - 1 : 0
//             );
//           } else if (
//             !isDelete &&
//             displayedTextRef.current !== props.texts[textIndex]
//           ) {
//             // if it is not on deletion process and the full text has not been displayed yet
//             // then increase sub-string index of current text
//             setCharIndex((prevCharIndex) =>
//               prevCharIndex + 1 <= props.texts[textIndex].length
//                 ? prevCharIndex + 1
//                 : 0
//             );
//           }
//         },
//         shouldDelayNextProcess ? 2000 : 150 - Math.random() * 100
//       );
//     }

//     return () => clearTimeout(timeoutRef.current);
//   }, [props.texts, charIndex, textIndex, isDelete]);

//   return (
//     <h2 className={props.className}>
//       {displayedTextRef.current}
//       <span className="cursor "> |</span>
//     </h2>
//   );
// }

const CustomLeftArrow = ({ onClick }) => {
  return (
    <button
      className="custom-left-arrow rounded-circle"
      onClick={onClick}
      style={{
        border: 'none',
        zIndex: 999,
        position: 'absolute',
        right: '65px',
        bottom: '5%',
        cursor: 'pointer',
        padding: '5px',
        background: " rgba(122, 236, 193, 0.253)",
      }}
    >
      <IoIosArrowBack size={24} className="" />
    </button>
  );
};

const CustomRightArrow = ({ onClick }) => {
  return (
    <button
      className="custom-right-arrow rounded-circle "
      onClick={onClick}
      style={{
        border: 'none',
        zIndex: 999,
        position: 'absolute',
        right: '20px',
        bottom: '5%',
        cursor: 'pointer',
        padding: '5px',
        background: " rgba(122, 236, 193, 0.253)",
      }}
    >
      <IoIosArrowForward size={24} className="" />
    </button>
  );
};

const TeamData = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    nextArrow: <CustomRightArrow />,
    prevArrow: <CustomLeftArrow />,
  };

  return (
    <div className="slider-container " style={{ position: 'relative' }}>
      <Slider {...settings}>
        <div>
          <img src={chithirapandian} alt="chithirapandian" className="slider-image" />
        </div>

        {TeamImage.map((item, index) => (
          <div key={index}>
            <img src={item} alt="Team" className="slider-image" />
          </div>
        ))}
      </Slider>
    </div>
  )
}

const testimonials = [
  { id: 1, text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", author: "George Adade" },
  { id: 2, text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", author: "Johna Adade" },
  { id: 3, text: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.", author: "Johna Adade" }

];

const Home = () => {
  

  const handleChange = () => {
    window.scroll(0, 0);
  }

  return (
    <div className="home container-fluid overflow-hidden ">
      <div className="hero-section pb-3" style={{ position: "relative" }}>
        <img src={Herosection} className="hero-image" alt="Herosection" width="100%" />
        <div className="hero-title-container">
          <div className="hero-title" >Mission</div>
          <div className="d-flex flex-column align-items-center py-4">
            <div className="hero-subtitle">We believe in Growing Together.</div>
            <div className="hero-subtitle">We see our growth as a reflection of the success of our clients.</div>
          </div>
        </div>
      </div>



      <div className=" container hero-section  ">
        <div className="row d-flex flex-sm-row-reverse align-items-center justify-content-center">
          <div className="col-12 col-sm-12 col-md-6 mb-5">
            <img src={require("../images/CAOffice.jpg")} alt="hero section" width="100%" className="rounded-4 img-fluid " />
          </div>
          <div className="col-12 col-sm-12 col-md-6 mb-5 para">
            <div className="main-title text-center py-3">
              <h2>You Can Trust!</h2>
              <h2 className="typing">CHITHIRAIPANDIAN AND CO</h2>
              <h2>Chartered Accountants</h2>
            </div>
            <div  >
              <p style={{ textAlign: "justify" }}>
                At <b>Chithiraipandian and Co</b>, we believe in building long-term relationships based on trust, integrity, and professionalism. Our mission is to deliver proactive, practical, and results-driven financial solutions that help our clients thrive in a dynamic marketplace.</p>
              <p style={{ textAlign: "justify" }}>
                At <b>Chithiraipandian and Co</b>, we are dedicated to empowering businesses and individuals with expert financial and advisory services. With a legacy of more than two decades of experience, we specialize in providing direct and indirect taxation, business taxation, international taxation, auditing and assurance services, company formation, corporate compliances, due diligence, transfer pricing, virtual CFO solutions, and financial consulting solutions that are tailored to meet the specific needs of our clients.
              </p>
              <div style={{ textAlign: "justify" }}>
                Our team of experienced Chartered Accountants and financial advisors is committed to delivering quality service and valuable insights. We work closely with businesses of all sizes, from startups and SMEs to large corporations. Under the leadership of our founder, we’ve transitioned to a technology-driven firm, consistently expanding our service offerings and fostering long-term client relationships.
              </div>
            </div>
          </div>

        </div>
      </div>

      {/*Our Founder */}
      <h3 className=" main-title text-center pb-3">Our Founder</h3>
      <div className="about-us py-2 container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-12 col-sm-12 col-md-6 mb-5">
            <img src={founder} alt="chithirapandian" width="100%" className="rounded-4 img-fluid" />
          </div>
          <div className="col-12 col-sm-12 col-md-6 mb-5 para" >
            <h5 className="typing">Thangaraja Chithiraipandian</h5>
            <b >Visionary Chartered Accountant | Tech-Driven Strategist| Information System Auditor (ICAI) | Certified Artificial Intelligence Chartered Accountant (ICAI) | Life Member – Tamil Nadu and Pondicherry Chartered Accountants Association</b>

            <p className="mt-2">
              Core Areas of Expertise: Strategic Financial Planning | Risk Management & Risk Audit | Performance Optimization| Corporate Governance| Information System Audit | Global Outsourcing | Business Valuation for M&A
            </p>

            <p style={{ textAlign: "justify" }}>T. Chithiraipandian is a forward-thinking Chartered Accountant with over two decades of experience in transforming businesses through financial modelling and strategic business solutions. Known for his precision, innovation, and strategic acumen, he bridges traditional finance with modern technology—empowering organizations to scale with clarity and confidence. His dynamic approach integrates financial discipline, business foresight, and cutting-edge tools, making him a trusted advisor to leaders in India and abroad.His core strengths include a proven track record in establishing new enterprises and startups, turning around financially stressed businesses into profitable ventures, and transforming complex financial data into clear, strategic decisions that drive business success. He places strong emphasis on business analysis, leveraging data, market intelligence, and key performance indicators (KPIs) to uncover opportunities and sharpen clients’ competitive edge.
            </p>
            <p style={{ textAlign: "justify" }}>
              He also specializes in providing robust decision support, delivering sharp, data-backed financial insights that aid high-stakes decisions, investments, mergers and acquisitions, cost restructuring, and beyond. With a focus on sustainable growth, strong governance, and global best practices, he consistently delivers value that contributes to long-term organizational excellence.
            </p>
          </div>
        </div>

      </div>

      {/* Our Services */}
      <div className="bg-white p-3 container our-service">
        <h3 className=" main-title text-center">Our Services</h3>
        <div className="row d-flex justify-content-evenly">
          {cardItems.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 col-12 g-4 ">
              <div className={`serviceCard-item serviceCard-item-${index + 1} shadow h-100`}>
                <span className="serviceCard-icon px-2">
                  <img src={item.icon} alt="" width="100%" />
                </span>
                <b className="serviceCard-item-title px-2">{item.title}</b>
                <div className="serviceCard-description px-2">
                  {item.description.map((item, index) =>
                    <div key={index} className="d-flex gap-2">
                      <CiCircleCheck size={20} className="text-primary" />
                      <p className="text-wrap">{item}</p>
                    </div>
                  )}
                </div>
                <Link to={item.link} onClick={handleChange} className="text-decoration-none text-white">
                  <button className="serviceCard-button ">
                    <FaArrowRight size={20} className="me-3" />  Learn More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Team */}
      <h3 className=" main-title text-center py-2  ">Our Team</h3>
      <div className="container">
        <div className="row our-team d-flex align-items-center py-4 ">
          <div className="col-12 col-sm-12 col-md-6 px-4 ">
            <div className=" team-carosal">
              <TeamData />
            </div>

          </div>
          <div className="col-12 col-sm-12 col-md-6 px-5 para ">
            <div style={{ textAlign: 'justify' }}>
              <p >
                Our firm is powered by a dynamic team of experts dedicated to delivering top-tier service. Led by our experienced Proprietor, we uphold the highest standards of quality and integrity.
              </p>
            </div>
            <div className="py-3 ">
              <ul>
                <li> <b>Chartered Accountants:</b> Providing expert advice on financial reporting, taxation, audits, and strategic planning to drive business success.</li>
                <li>  <b>Company Secretaries:</b> Ensuring corporate compliance and governance, guiding businesses through regulatory complexities.</li>
                <li>  <b>Executives (Non-CA):</b> Facilitating smooth client interactions and efficient project delivery with diverse management expertise.</li>
                <li>  <b>Article Trainees:</b> The future of the profession, gaining hands-on experience under skilled mentorship.</li>
                <li>  <b>Support Staff:</b> Providing essential administrative and technical support to keep operations running smoothly.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
      {/* Client Testimonial's */}
      {/* <h3 className=" main-title text-center py-3">Client Testimonial's</h3>
      <div className="row mb-4">
        <div className='col-md-3 mt-4 d-flex justify-content-center'>
          <div className='border' >
            <div className='mt-4'>
              <p className='text-center p-4'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="50%" viewBox="0 0 50% 50%" fill="none" >
              <path d="M330.006 16C188.003 149.5 69.0031 -56.4997 0 22V150.445H330.006V16Z" fill="#ED654C" />
              <defs>
                <clipPath id="circleClip">
                  <circle cx="165" cy="50" r="50" />
                </clipPath>
              </defs>
              <g clipPath="url(#circleClip)">
                <rect x="116" y="0" width="100" height="100" fill="white" />
                <image href={"http://localhost:3001/static/media/tnxt.0ab4d4e9a15219dbd492.png"} x="116" y="0" width="100" height="100" />
              </g>
              <circle cx="165" cy="50" r="50" fill="none" stroke="white" strokeWidth="3" />
              <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="25" fontWeight="bold">
                Kids Qatar
              </text>

            </svg>
          </div>

        </div>
        <div className="col-md-3 mt-4 d-flex justify-content-center">
          <div className="border" >
            <div className="mt-4">
              <p className="text-center p-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            
            <div style={{ position: 'relative', width: '100%', height: '150px' }}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50% 150" style={{ width: '100%', height: '150px' }}>
                <path d="M330.006 16C188.003 149.5 69.0031 -56.4997 0 22V150.445H330.006V16Z" fill="#ED654C" />
                <defs>
                  <clipPath id="circleClip">
                    <circle cx="165" cy="50" r="50" />
                  </clipPath>
                </defs>

               
                <g clipPath="url(#circleClip)">
                  <rect x="115" y="0" width="100" height="100" fill="white" />
                  <image href={"http://localhost:3001/static/media/tnxt.0ab4d4e9a15219dbd492.png"} x="115" y="0" width="100" height="100" />
                </g>

               
                <circle cx="165" cy="50" r="50" fill="none" stroke="white" strokeWidth="3" />

              
                <text x="50%" y="80%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="25" fontWeight="bold">
                  Kids Qatar
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div> */}

      {/* 
       */}

    </div >
  );
};

export default Home;