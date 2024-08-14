import React from "react";
import { articles } from "../data";

const ArticleCard = ({ id, title, author, icon, description }) => {
  return (
    <div className="flex flex-col gap-[18px] md:items-start bg-white pb-[10px] rounded-sm">
      <div className="h-[200px] p-0">
        <img src={icon} alt="" style={{width:"370px",  height: "200px" }} />
      </div>
      <small className="text-Grayish-Blue px-[10px]">{author}</small>
      <h3 className="text-[21px] px-[10px] hover:text-Lime-Green cursor-pointer">{title}</h3>
      <p className="text-Grayish-Blue leading-[1.7] px-[10px]">{description}</p>
    </div>
  );
};

const Articles = () => {
  return (
    <section className=" bg-Very-Light-Gray flex flex-col gap-20 md:px-[70px] px-[20px] pt-[80px] pb-[100px] md:text-left">
      {/* header */}

      <h2 className="text-[400] md:text-[35px] text-[30px]">Voluntariado</h2>

      {/* cards */}
      <div className="flex gap-[10px] md:flex-row flex-col">
        {articles.map((article) => (
          <ArticleCard
            key={article.id}
            author={article.author}
            icon={article.image}
            title={article.title}
            description={article.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Articles;
