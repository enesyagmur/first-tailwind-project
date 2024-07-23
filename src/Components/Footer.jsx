import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[1000px] lg:h-[500px] bg-blue-300 flex items-center justify-center">
      <div className="lg:w-[1000px] h-full flex lg:flex-row flex-col-reverse items-center justify-between">
        <div className="w-full h-3/6 lg:w-2/6 lg:h-full flex flex-col items-center lg:items-start justify-around ">
          <p className="font-bold text-xl uppercase">Contact</p>
          <p className="w-1/2 bg-primary">
            500 Terry Francine Street, San Francisco, CA 94158
          </p>
          <p>Tel: 123 456 7890 </p>
          <p>Fax: 123-456-7890 </p>
          <p>info@mysite.com </p>
          <div className=" w-1/2  flex items-center justify-evenly ">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-square-x-twitter"></i>
            <i className="fa-brands fa-square-instagram"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
          <p className="w-full lg:w-1/2">
            © 2035 by Personal Life Coach. Powered and secured by Wix
          </p>
        </div>
        <div className="w-full lg:w-3/6 h-3/6 lg:h-full flex flex-col items-end justify-evenly">
          <div className="form-div">
            <label htmlFor="" className="w-full text-start pb-2">
              Enter Your Name
            </label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-div">
            <label htmlFor="" className="w-full text-start pb-2">
              Enter Your Email
            </label>
            <input type="text" className="form-input" />
          </div>
          <div className="form-div">
            <label htmlFor="" className="w-full text-start pb-2">
              Enter Your Subject
            </label>
            <input type="text" className="form-input" />
          </div>
          <div className="w-full h-30  flex flex-col justify-between">
            <label className=" text-start mb-2" htmlFor="">
              Message
            </label>
            <textarea
              className="w-full bg-transparent border-2 border-customYellow"
              name=""
              id=""
              rows="5"
            ></textarea>
          </div>
          <button className="w-32 lg:p-2 lg:m-4 bg-black text-customYellow">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
