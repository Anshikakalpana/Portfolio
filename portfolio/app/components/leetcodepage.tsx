"use client";

import { useEffect, useState } from "react";
import { FiExternalLink } from "react-icons/fi";

export default function LeetCodeStats() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/leetcode")
      .then((res) => res.json())
      .then((json) => {
        if (json.success) setData(json.data);
      });
  }, []);

  if (!data) return <p className="text-gray-400">Loading...</p>;



  return (

 <div className=" p-10 text-white  flex flex-col items-center justify-center  gap-8 max-w-5xl mx-auto">

  <h1 className="text-3xl font-bold mb-8 text-center flex flex-row px-3 gap-x-3">LeetCode Stats   <a href="https://leetcode.com/u/anshika_kalpana/">
  <FiExternalLink    className="h-9 w-9 object-contain  cursor-pointer hover:scale-110 transition-transform text-white py-1 "
          />
        </a></h1>



  <div className="flex flex-col lg:flex-row gap-8 w-full">
      <div className="flex-1 bg-[#1a112f] p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-3 text-white">Heatmap</h2>
      <div className="grid grid-cols-12 gap-1">
        {Object.entries(data.heatmap).map(([timestamp, count]: any) => {
          const intensity =
            count === 0 ? "#BFA5F6" :
            count < 2 ? "#BFA5F6" :
            count >= 5 ? "#8C6FE8" :
            "#5C3CA8";

          return (
            <div
              key={timestamp}
              title={`${new Date(Number(timestamp) * 1000).toDateString()} — ${count} submissions`}
              style={{
                backgroundColor: intensity,
                width: "12px",
                height: "12px",
                borderRadius: "2px",
              }}
            />
          );
        })}
      </div>
    </div>
    


    <div className="flex-1 bg-[#1a112f] p-6 rounded-2xl shadow-lg font-bold">
      <h2 className="text-xl text-white font-semibold mb-3">Stats</h2>
      <div className="space-y-3 py-4">
        <p>Total Submissions: <span className="text-[#CEB5FD]">478</span></p>
        <p>Current Streak: <span className="text-[#CEB5FD]">178 days</span></p>
        <p>Total Active Days: <span className="text-[#CEB5FD]">256</span></p>
      </div>

 
    </div>



      {/* CONTESTS */}



     <div className="flex-1 bg-[#1a112f] p-6 rounded-2xl shadow-lg font-bold">
    <h2 className="text-xl  mb-3">Contests</h2>
      <div className="space-y-3 py-4">
        <p>Total Contests: <span className="text-[#CEB5FD]">7</span></p>
        <p>Highest Rating: <span className="text-[#CEB5FD]">1722</span></p>
        <p>Contest Rating: <span className="text-[#CEB5FD]">1722</span></p>
        <p>Contest Ranking: <span className="text-[#CEB5FD]">2101</span></p>
      </div>

    </div>

   



   
  
 </div>
  </div>

  );
}

