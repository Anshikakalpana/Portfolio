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

  const totalSolved = data.stats.reduce(
    (sum: number, item: any) => sum + item.count,
    0
  );

  return (
  <div className="min-h-screen bg-black text-white p-10">
  <h1 className="text-5xl font-bold mb-8 text-center">LeetCode Stats</h1>

  {/* Main container */}
  <div className="flex flex-col lg:flex-row gap-8 w-full">
      <div className="flex-1 bg-gray-900 p-6 rounded-2xl shadow-lg">
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
    


    <div className="flex-1 bg-gray-900 p-6 rounded-2xl shadow-lg">
      <div className="space-y-3 py-4">
        <p>Total Submissions: <span className="text-green-400">{totalSolved}</span></p>
        <p>Current Streak: <span className="text-yellow-400">{data.streak} days</span></p>
        <p>Total Active Days: <span className="text-blue-400">{data.totalActiveDays}</span></p>
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

     <div className="flex-1 bg-gray-900 p-6 rounded-2xl shadow-lg">
      <div className="space-y-3 py-4">
        <p>Total Submissions: <span className="text-green-400">{totalSolved}</span></p>
        <p>Current Streak: <span className="text-yellow-400">{data.streak} days</span></p>
        <p>Total Active Days: <span className="text-blue-400">{data.totalActiveDays}</span></p>
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

   
  

  </div>
</div>

  );
}
