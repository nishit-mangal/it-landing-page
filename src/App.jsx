import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import mainPic from "../src/Images/MainPic.jpg";
import "./App.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import axios from "axios";
gsap.registerPlugin(ScrollTrigger);

let settings = {
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

export const App = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [industryDetails, setIndustryDetails] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

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
        // markers: true
      }
    })
  }, []);

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async ()=>{
    let apiData = await axios.get("https://docs.google.com/spreadsheets/d/e/2PACX-1vQFBiIRhCzUc6tlI-Qf5SFOoQRqHCr3nB6UlDXOt4OVd1jLKvB6nSkgK8yUhKrURYYQp7lnjF3i2wqa/pub?gid=1823810563&single=true&output=csv")
    let allExcelRows = apiData.data.split("\r\n");
    
    setTitle(allExcelRows[0].split(",")[0]);
    setDescription(allExcelRows[1].split("\"")[1]);

    let indutryDetailsArr = [];
    let allIndustryNames = [...allExcelRows[2].split(",")];
    let allIndustryDescription = [...allExcelRows[3].split("\",\"")]
    for(let i=0; i<allIndustryNames.length; i++){
      let industryObj = {
        name: allIndustryNames[i],
        description: allIndustryDescription[i]
      }
      indutryDetailsArr.push(industryObj);
    }
    setIndustryDetails([...indutryDetailsArr]);

    let testimonialArr = [];
    let allTestimonial = [...allExcelRows[4].split("\",\"")];
    let allNames = [...allExcelRows[5].split("\",\"")];
    for(let i=0; i<allTestimonial.length; i++){
      let industryObj = {
        description: allTestimonial[i],
        name: allNames[i],
        industry:allIndustryNames[i]
      }
      testimonialArr.push(industryObj);
    }
    setTestimonials([...testimonialArr]);
  }
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
              {title}
            </h2>
            <p className="hero-subtext text-lg sm:text-lg lg:text-lg xl:text-xl 2xl:text-2xl font-medium font-sans text-black-600 text-justify">
              {description}
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
        className="tile px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 py-20 gap-8 md:gap-12 xl:gap-16"
      >
        {industryDetails.map((industry, index)=>(
          <div key={index} className="col-span-1 sector-tile">
            <div className="font-mono text-white tile-heading">
              {industry.name}
            </div>
            <div className="h-4/6 overflow-y-auto custom-scrollbar px-3 py-3 text-base text-justify">
              {industry.description}
            </div>
          </div>
        ))}
      </div>

      <section className="carousal-title px-4 sm:px-6 lg:px-8 h-screen bg-[#2d564f] rounded-t-3xl"> 
        <div className="h-1/5 py-6 px-7 text-center font-serif font-extrabold text-2xl sm:text-4xl lg:text-6xl 2xl:text-8xl text-white mb-0 2xl:mb-16">What Our Clients Say</div>
        <div className="mx-2 sm:mx-8 lg:mx-12 2xl:mx-16">          
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-[#f6fffe] rounded-lg shadow-md p-6 h-72 mb-6">
                <p className="text-sm lg:text-base text-gray-700 italic h-4/5 overflow-y-auto">
                  "{testimonial.description}"
                </p>
                <div className="flex flex-col mt-2 justify-between">
                  <p className="text-xs lg:text-sm text-right font-medium text-gray-800">
                    {testimonial.name}
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
