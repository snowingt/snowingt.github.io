import React from 'react';
import Header from '../containers/Header';
import PerfilPhoto from './PerfilPhoto';
import Footer from '../components/Footer';
import { postContent } from '../pages/Contenido.js';
import PostContainer from '../containers/PostContainer';
import NavBar from './NavBar';
import ContainerPerfilAndGithubBtn from '../containers/ContainerPerfilAndGithubBtn';
import Tittle from './Tittle';
import Description from './Description';
import ContentPost from '../containers/ContentPost';

const Post = () => {
  const [show, setShow] = React.useState(false);
  const[content, setContent] = React.useState({
    img: "",
    avatar: "",
    name: "",
    emoji: "",
    date: "",
    desc: "",
    tag: "",
    link:""

  })
  const handleClick = () => {
    setShow(!show);
   
  };

  return (
    <div className="w-full h-full flex flex-col items-center bg-zinc-800">
      <Header />
      <div className="w-4/6 h-full flex flex-col items-center">
        <ContainerPerfilAndGithubBtn />
        <div className="mt-6 mb-6">
          <Tittle title="This is the Projects Page" />
          <Description description="Check out some of the awesome projects below!" />
        </div>
      </div>
      <div className="w-4/6 items-center flex flex-col">
        <NavBar />
      </div>
      {
        show ? (
          <ContentPost 
          content={content}
          setShow={setShow}
          />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 w-6/12 mt-10">
          {postContent.map((item, index) => (
            <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-2xl" key={index}>
              <PostContainer
                handleClick={handleClick}
                img={item.img}
                avatar={item.avatar}
                name={item.name}
                emoji={item.emoji}
                tag={item.tag}
                date={item.date}
                desc={item.desc}
                link={item.link}
                ver="Ver más"
                setContent={setContent}
                description={item.description}
                setShow={setShow}
                show={show}
              />
            </div>
          ))}
        </div>
        )

      }



     
    
      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default Post;
