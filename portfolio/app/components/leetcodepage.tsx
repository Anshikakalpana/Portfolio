"use client";
import { useEffect, useState } from "react";


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
  <div className="min-h-screen bg-[#e9e8f3] text-black p-10">
  <h1 className="text-5xl font-bold mb-8 text-center">LeetCode Stats</h1>


  <div className="flex flex-col lg:flex-row gap-8 w-full">
      <div className="flex-1 bg-gray-300 p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-3">Heatmap</h2>
      <div className="grid grid-cols-12 gap-1">
        {Object.entries(data.heatmap).map(([timestamp, count]: any) => {
          const intensity =
            count === 0 ? "#9FC0D6" :
            count < 2 ? "#6FAEC4" :
            count < 5 ? "#2899B4" :
            "#1F7A91";

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
    


    <div className="flex-1 bg-gray-300 p-6 rounded-2xl shadow-lg font-bold">
      <h2 className="text-xl font-semibold mb-3">Stats</h2>
      <div className="space-y-3 py-4">
        <p>Total Submissions: <span className="text-blue-700">{data.totalSubmissions}</span></p>
        <p>Current Streak: <span className="text-yellow-700">{data.streak} days</span></p>
        <p>Total Active Days: <span className="text-blue-500">{data.totalActiveDays}</span></p>
      </div>

      <div className="flex justify-around text-sm mt-2">
        {data.stats.map((item: any) => (
          <div key={item.difficulty}>
            <p className="font-semibold">{item.difficulty}</p>
            <p>{item.count}</p>
          </div>
        ))}
      </div>
    </div>

     <div className="flex-1 bg-gray-300 p-6 rounded-2xl shadow-lg font-bold">
    <h2 className="text-xl  mb-3">Contests</h2>
      <div className="space-y-3 py-4">
        <p>Total Contests: <span className="text-blue-700">3</span></p>
        <p>Highest Rating: <span className="text-yellow-700">1550</span></p>
        <p>Latest Rating: <span className="text-blue-500">1545</span></p>
      </div>

    </div>

     <div className="flex-1 bg-gray-300 p-6 rounded-2xl shadow-lg">
  <h2 className="text-xl font-semibold mb-5 text-center">Badges</h2>

  <div className="flex flex-wrap justify-center gap-6">
    {data.badges.map((item: any) => (
      <div
        key={item.id}
        className="flex flex-col items-center text-center w-24"
      >
        <img
          src={item.icon}
          alt={item.name}
          className="w-12 h-12 mb-2"
        />
        <p className="font-semibold text-sm">{item.name}</p>
      </div>
    ))}
  </div>
</div>



   
  

  </div>
</div>

  );
}
