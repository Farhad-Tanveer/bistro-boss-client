import React from "react";
import "./Featured.css";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div className=" featured-item bg-fixed text-white pt-10 my-20">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"Featured Item"}
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className=" md:ml-10">
          <p>Aug 20, 2029</p>
          <p className=" uppercase">Where can i get some?</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
            nihil omnis sint, rerum eum doloribus tempore voluptate! Obcaecati
            totam aliquid consequatur magnam modi, cum voluptatum impedit. Quia
            voluptate ipsum sit incidunt totam optio eos, repudiandae velit
            corporis distinctio nesciunt accusamus accusantium modi dignissimos
            doloribus, libero eius exercitationem quis voluptatem est.
          </p>
          <button className=" btn btn-outline border-0 border-b-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
