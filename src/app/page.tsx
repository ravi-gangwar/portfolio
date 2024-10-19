import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Socials from "@/components/Socials";
import Projects from "@/screens/Projects";

export default function Home() {
  return (
    <div className="dark:bg-black rounded-t-3xl m-2 pl-5 pr-5 pt-3 w-full sm:w-[90%] md:w-[80%] lg:w-[90%] sm:border-[0.5px] sm:border-white">
      <Nav/>
      <Header/>
      <Socials/>
      <Projects/>
    </div>
  );
}
