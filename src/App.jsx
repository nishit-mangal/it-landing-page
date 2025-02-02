import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import mainPic from "../src/Images/MainPic.jpg";
import "./App.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    industry: "Finance and Banking",
    quote: "Our bank needed a robust and secure cloud solution to handle increasing transaction volumes. [Company Name] delivered a seamless migration and their ongoing support has been exceptional.",
    author: "Sarah Miller, CIO, Global Finance Corp."
  },
  {
    industry: "Healthcare and Lifesciences",
    quote: "Patient data security is paramount. [Company Name] developed a HIPAA-compliant system that streamlined our operations and ensured the highest level of data protection.",
    author: "Dr. Emily Carter, Medical Director, City General Hospital"
  },
  // ... add all your other testimonials here
  {
    industry: "Government and public sector",
    quote: "We needed a secure and reliable system to manage citizen data. [Company Name] delivered a solution that met all our requirements and exceeded our expectations. Their commitment to public service is commendable.",
    author: "Mayor Tom Williams, City of Springfield"
  },
  {
    industry: "Finance and Banking",
    quote: "Our bank needed a robust and secure cloud solution to handle increasing transaction volumes. [Company Name] delivered a seamless migration and their ongoing support has been exceptional.",
    author: "Sarah Miller, CIO, Global Finance Corp."
  },
  {
    industry: "Healthcare and Lifesciences",
    quote: "Patient data security is paramount. [Company Name] developed a HIPAA-compliant system that streamlined our operations and ensured the highest level of data protection.",
    author: "Dr. Emily Carter, Medical Director, City General Hospital"
  },
  // ... add all your other testimonials here
  {
    industry: "Government and public sector",
    quote: "We needed a secure and reliable system to manage citizen data. [Company Name] delivered a solution that met all our requirements and exceeded our expectations. Their commitment to public service is commendable.",
    author: "Mayor Tom Williams, City of Springfield"
  }
];
export const App = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  useGSAP(() => {
    gsap.from(".hero-text", {
      opacity: 0,
      scale:0,
      y: 50,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(".hero-subtext", {
      opacity: 0,
      scale: 0,
      y: 50,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3,
    });
    gsap.from(".tile",{
      y:200,
      fontSize:0,
      opacity:0,
      duration: 2,
      scrollTrigger: {
        toggleActions: "restart none none none",
        trigger:".tile",
        scrub:true,
        start: "top 80%",
        end: "top 30%",
        // markers: true
      }
    });
    gsap.from(".carousal-title",{
      y:200,
      fontSize:0,
      opacity:0,
      duration: 2,
      scrollTrigger: {
        toggleActions: "restart none none none",
        trigger:".carousal-title",
        scrub:true,
        start: "top 80%",
        end: "top 20%",
        markers: true
      }
    })
  }, []);

  return (
    <>
      <div className="w-full h-screen bg-gradient-to-r from-teal-100 to-teal-50">
        <header className="py-5 px-5 flex justify-between items-center bg-teal-900 rounded-b-lg">
          <h1 className="text-3xl font-bold text-white font-mono">
            Mangal Analytics
          </h1>
          <nav>
            <ul className="flex space-x-6 font-sans text-base">
              <li className="text-teal-50 hover:text-teal-600 cursor-pointer font-">
                Home
              </li>
              <li className="text-teal-50 hover:text-teal-600 cursor-pointer">
                Services
              </li>
              <li className="text-teal-50 hover:text-teal-600 cursor-pointer">
                Contact
              </li>
            </ul>
          </nav>
        </header>

        <section className="flex justify-center gap-6 p-6 h-4/5">
          <div className="flex flex-col w-full sm:w-3/5 justify-around gap-4 xl:gap-0">
            <h2 className="hero-text text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl 2xl:text-9xl py-8 font-extrabold text-teal-800 text-left">
              Innovate. Secure. Transform.
            </h2>
            <p className="hero-subtext text-lg sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-medium font-sans text-black-600 text-justify">
              Empowering businesses in Education Tech, Fintech, Cyber Security,
              AI, and Machine Learning with cutting-edge solutions. Our
              expertise enables seamless digital transformations, providing
              security, efficiency, and innovative strategies that help
              businesses stay ahead in the ever-evolving technological
              landscape. Partner with us to unlock your true potential and drive
              your vision forward.
            </p>
          </div>
          <img
            src={mainPic}
            alt="Meeting"
            className="w-2/5 rounded-xl hidden sm:block object-cover"
          ></img>
        </section>
      </div>

      <div className="mt-36 px-7 text-center font-serif font-extrabold text-4xl sm:text-5xl lg:text-7xl 2xl:text-9xl text-[#1B4661]">Industries we cater</div>
      <div
        id="sectors"
        className="px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-20 gap-8 md:gap-12 xl:gap-16"
      >
        <div className="tile col-span-1 sector-tile">
          <div className="font-mono text-white tile-heading">
            Finance & Banking
          </div>
          <div className="h-4/6 overflow-y-auto custom-scrollbar px-3 py-3 text-base text-justify">
            We develop secure and scalable banking applications that ensure
            seamless digital transactions. Our AI-powered fraud detection
            systems help financial institutions prevent cyber threats and
            unauthorized activities. With high-performance trading platforms, we
            enable real-time market analysis for smarter investment decisions.
            Additionally, our cloud-based core banking solutions enhance
            security, compliance, and operational efficiency for financial
            institutions.
          </div>
        </div>
        <div className="tile col-span-1 sector-tile">
          <div className="font-mono text-white tile-heading">
            Healthcare & Life Sciences
          </div>
          <div className="h-4/6 overflow-y-auto custom-scrollbar px-3 py-3 text-base text-justify">
            We revolutionize healthcare with advanced telemedicine platforms,
            enabling remote consultations and patient monitoring. Our electronic
            health records (EHR) systems streamline hospital operations and
            improve data accessibility. AI-powered diagnostics help doctors
            detect diseases faster and with greater accuracy, while
            blockchain-based solutions ensure the security and privacy of
            patient data, keeping medical records protected and compliant with
            industry regulations.
          </div>
        </div>
        <div className="tile col-span-1 sector-tile">
          <div className="font-mono text-white tile-heading">
            Retail & E-commerce
          </div>
          <div className="h-4/6 overflow-y-auto custom-scrollbar px-3 py-3 text-base text-justify">
            Our IT solutions help e-commerce businesses enhance customer
            experiences through AI-driven personalized recommendations that
            boost engagement and sales. We optimize inventory and supply chain
            management, ensuring efficient stock control and demand forecasting.
            Intelligent chatbots and virtual assistants provide seamless
            customer support, while Augmented Reality (AR) applications enable
            immersive shopping experiences with virtual try-ons and interactive
            product displays.
          </div>
        </div>
        <div className="tile col-span-1 sector-tile">
          <div className="font-mono text-white tile-heading">
            Manufacturing & Supply Chain
          </div>
          <div className="h-4/6 overflow-y-auto custom-scrollbar px-3 py-3 text-base text-justify">
            We drive digital transformation in manufacturing by implementing
            IoT-powered smart factories that automate production processes and
            improve efficiency. AI-driven predictive maintenance helps
            businesses minimize downtime by identifying potential issues before
            they become critical. Our ERP solutions integrate production,
            inventory, and logistics, ensuring smooth operations and real-time
            data access. With blockchain technology, we enhance supply chain
            transparency and security, preventing fraud and improving
            traceability.
          </div>
        </div>
        <div className="tile col-span-1 sector-tile">
          <div className="font-mono text-white tile-heading">
            Telecommunications{" "}
          </div>
          <div className="h-4/6 overflow-y-auto custom-scrollbar px-3 py-3 text-base text-justify">
            Our AI-powered 5G network optimization solutions help telecom
            providers enhance speed, reliability, and connectivity. Cloud-based
            VoIP and communication solutions reduce infrastructure costs while
            improving operational flexibility. We also strengthen network
            security with advanced cybersecurity solutions, protecting against
            data breaches and DDoS attacks. Additionally, big data analytics
            empower telecom companies with deep insights, improving user
            experience and network performance.
          </div>
        </div>
        <div className="tile col-span-1 sector-tile">
          <div className="font-mono text-white tile-heading">
            Government & Public Sector
          </div>
          <div className="h-4/6 overflow-y-auto custom-scrollbar px-3 py-3 text-base text-justify">
            We support governments in building smart city solutions that
            optimize traffic flow, waste management, and energy efficiency. Our
            cybersecurity services protect critical infrastructure from cyber
            threats and data breaches. Through AI-driven e-governance platforms,
            we streamline public services such as tax filing, digital
            documentation, and online voting. Law enforcement agencies benefit
            from our data analytics solutions, enhancing crime prevention and
            public safety initiatives.
          </div>
        </div>
      </div>

      <section className="carousal-title px-4 sm:px-6 lg:px-8 h-screen bg-[#2d564f] rounded-t-3xl"> 
        <div className="h-1/5 py-6 px-7 text-center font-serif font-extrabold text-2xl sm:text-4xl lg:text-6xl 2xl:text-8xl text-white mb-0 2xl:mb-16">What Our Clients Say</div>
        <div className="mx-2 sm:mx-8 lg:mx-12 2xl:mx-16">          
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#f6fffe] rounded-lg shadow-md p-6 h-72 mb-6">
                <p className="text-sm lg:text-base text-gray-700 italic h-4/5 overflow-y-auto">
                  "{testimonial.quote}"
                </p>
                <div className="flex flex-col mt-2 justify-between">
                  <p className="text-xs lg:text-sm text-right font-medium text-gray-800">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-right text-gray-500">
                    {testimonial.industry}
                  </p>
                </div>
              </div>
            ))}    
          </Slider>          
        </div>   
      </section>
    </>
  );
};
