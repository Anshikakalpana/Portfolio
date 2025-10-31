import { NextResponse } from "next/server";

export async function GET() {
  const username = "anshika_kalpana";
  const session = process.env.LEETCODE_SESSION; 

 
  const query = `
  {
    matchedUser(username: "${username}") {
      username
      submitStats: submitStatsGlobal {
        acSubmissionNum {
       
          difficulty
          count
          submissions
        
        }
      }
      userCalendar {
        streak
        totalActiveDays
        submissionCalendar
        dccBadges {
          timestamp
          badge {
            name
           icon
          } 
        }
      }
    }
  }`;

  try {

    if (session) {
      const res = await fetch("https://leetcode.com/graphql", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Cookie: `LEETCODE_SESSION=${session}`,
        },
        body: JSON.stringify({ query }),
        next: { revalidate: 86400 },
      });

      const json = await res.json();

      if (!res.ok || json.errors)
        throw new Error(json.errors?.[0]?.message || "Failed to fetch LeetCode GraphQL");

      const user = json.data.matchedUser;
      if (!user) throw new Error("User not found");

     
      const submissionCalendar = JSON.parse(user.userCalendar.submissionCalendar);

      return NextResponse.json({
        success: true,
        source: "graphql",
        data: {
          username: user.username,
          totalSolved: user.submitStats.acSubmissionNum.find((d: any) => d.difficulty === "All")?.count,
          stats: user.submitStats.acSubmissionNum,
          streak: user.userCalendar.streak,
          totalActiveDays: user.userCalendar.totalActiveDays,
          heatmap: submissionCalendar,
          badge: user.userCalendar.dccBadges.map((b: any) => ({
            name: b.badge.name,
            icon: b.badge.icon,
            timestamp: b.timestamp,
          })),
        },
      });
    }

   
    const fallbackRes = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`, {
      next: { revalidate: 86400 },
    });

    if (!fallbackRes.ok) throw new Error("Failed to fetch fallback LeetCode stats");

    const fallback = await fallbackRes.json();

    return NextResponse.json({
      success: true,
      source: "public-api",
      data: {
        username,
        totalSolved: fallback.totalSolved,
        easySolved: fallback.easySolved,
        mediumSolved: fallback.mediumSolved,
        hardSolved: fallback.hardSolved,
      
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
