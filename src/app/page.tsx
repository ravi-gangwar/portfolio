import React from "react";
import Carousel from "@/components/Carousel";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Socials from "@/components/Socials";
import Projects from "@/screens/Projects";

const Home: React.FC = () => {
  // const slides = [
  //   "https://i.pinimg.com/736x/f3/19/4c/f3194ced544ce226b70b15eb3e98de16.jpg",
  //   "https://i.pinimg.com/736x/fb/64/1d/fb641d494603e2e460038c052006e4f9.jpg",
  //   "https://i.pinimg.com/736x/16/37/71/1637718eb8a93098ab4039d3840f7a97.jpg",
  //   "https://i.pinimg.com/736x/4c/a7/43/4ca7432958996c5c65f8aca6b7a992a1.jpg",
  //   "https://i.pinimg.com/736x/e3/3d/46/e33d46e4470c560bb74b92c07e36014d.jpg",
  // ];

  return (
    <div className="dark:bg-zinc-900 rounded-t-3xl m-2 pl-5 pr-5 pt-3 w-full sm:w-[90%] md:w-[80%] lg:w-[90%] sm:border-[0.5px] sm:border-white">
      <Nav />
      <Header />
      <Socials />
      <Carousel slides={['/greenEarth.png']} autoSlide={true} autoSlideInterval={4000} />
      <Projects />
    </div>
  );
};

export default Home;
