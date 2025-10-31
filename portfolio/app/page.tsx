import Image from "next/image";
import Navbar from "./components/navbar";
import Mainpage from "./home/page";
import LeetCodeStats from "./components/leetcodepage";

export default function Home() {
  return (
   <div>
    <Navbar/>
<Mainpage/>
    
          <section className="flex justify-center items-center text-center flex-grow px-6 md:px-32 pt-16 bg-black">
    <div className="items-center justify-center flex flex-col bg-black">
   

<div className="flex flex-col items-center space-y-6">


   <main className="min-h-screen bg-black text-white flex justify-center items-center">
      <LeetCodeStats />
    </main>


</div>


</div>
</section>
   </div>
  );
}
