import React, { useEffect, useState } from "react";
import ContainerPerfilAndGithubBtn from "../containers/ContainerPerfilAndGithubBtn";
import Tittle from "../components/Tittle";
import Description from "../components/Description";
import PanelInfo from "../components/PanelInfo";
import NavBar from "../components/NavBar";
import PostContainer from "../containers/PostContainer";
import Footer from "../components/Footer";
import { info, postContent } from "./Contenido.js";
import Header from "../containers/Header";
import { Link } from "react-router-dom";

const Home = () => {
  const [show, setShow] = useState(false);


 

  return (
    <div className="w-full h-full flex flex-col justify-center items-center bg-zinc-800">
      <Header />

      <div className="w-4/6 h-full flex flex-col items-center">
        <ContainerPerfilAndGithubBtn />
        <div className="h-1/4 flex flex-col items-start w-4/6 translate-y-[-50px]">
          <Tittle title={"Snowing Torres"} />
          <Description description="Soy un Junior Web Developer apasionado por la tecnología y siempre buscando aprender cosas nuevas. 💻✨" />

          <div className="flex flex-wrap justify-center gap-4 sm:gap-7">
            {info.map((item, index) => {
              return <PanelInfo key={index} item={item} />;
            })}
          </div>
        </div>
        <NavBar />
        <div className="p-6 flex flex-col items-center w-4/6 gap-10 mb-10 pb-10 pt-10 ">
        <Link to="/post">
        {postContent.slice(0, 3).map((item, index) => {
  return (
    <PostContainer
      key={index}
      img={item.img}
      avatar={item.avatar}
      name={item.name}
      emoji={item.emoji}
      date={item.date}
      desc={item.desc}
      tag={item.tag}
      ver={ "Click para ver más"}
    />
  );
})}

        </Link>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
