import Image from "next/image";
import Navbar from "./components/navbar";
import Mainpage from "./home/page";
import LeetCodeStats from "./components/leetcodepage";
import Contact from "./contact/page";
import Projects from "./projects/page";
import TechStack from "./techstack/page";
import Experience from "./experience/page";

export default function Home() {
  return (
   <div className="">
    <Navbar/>
   
<Mainpage/>

    
          <section className="flex justify-center items-center text-center flex-grow px-6 md:px-32 pt-16 ">
    <div className="items-center justify-center flex flex-col">
   

<div className="flex flex-col items-center space-y-6">


   <TechStack />
   <Experience/>
      <LeetCodeStats />
   
    <Projects/>
    <a href="/allProjects">
      <button className="px-6 py-2 bg-[#8c65d6] text-black font-semibold rounded-xl shadow-md hover:bg-[#774cc9] hover:scale-105 transition-all duration-200" >
              All Projects
            </button>
    </a>
    <Contact/>
    

</div>


</div>
</section>
   </div>
  );
}
