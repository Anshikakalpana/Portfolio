import Image from "next/image";
import Navbar from "./components/navbar";
import Mainpage from "./home/page";
import LeetCodeStats from "./components/leetcodepage";
import Contact from "./contact/page";
import Projects from "./projects/page";
import TechStack from "./techstack/page";

export default function Home() {
  return (
   <div className="">
    <Navbar/>
   
<Mainpage/>

    
          <section className="flex justify-center items-center text-center flex-grow px-6 md:px-32 pt-16 ">
    <div className="items-center justify-center flex flex-col">
   

<div className="flex flex-col items-center space-y-6">


   <TechStack />
      <LeetCodeStats />
  
    <Projects/>
    <Contact/>
    

</div>


</div>
</section>
   </div>
  );
}
