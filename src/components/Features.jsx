import React from "react";
import { features } from "../data";

const FeatureCard = ({ id, title, icon, description }) => {
  return (
    <div className="flex flex-col gap-[18px] md:items-start items-center">
      <div className="w-[50px] h-[50px]">
        <img src={icon} alt="" />
      </div>
      <h3 className="text-[20px]">{title}</h3>
      <p className="text-Grayish-Blue leading-[1.7] ">{description}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-Light-Grayish-Blue md:-mt-[140px] flex flex-col gap-20 md:px-[70px] px-[20px] pt-[80px] pb-[100px] md:text-left text-center ">
      {/* header */}
      <div className="">
        <h2 className="text-[400] md:text-[35px] text-[30px]">Volun</h2>
        <p className="text-Grayish-Blue md:max-w-[580px] leading-[1.7] mt-[14px]">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        </p>
      </div>
      {/* cards */}
      <div className="flex gap-10 md:flex-row flex-col">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
