import { useEffect, useState } from "react";

export default function AIRecommendations() {
  const [recommendations, setRecommendations] = useState([
    { id: 1, title: "Concert Night", desc: "Live music near you." },
    { id: 2, title: "Art Exhibit", desc: "New contemporary art show." },
    { id: 3, title: "Networking Event", desc: "Meet startup founders." },
  ]);

  // Optional: fetch from API instead of hardcoding
  // useEffect(() => { fetch('/api/recommendations').then(...) }, []);

  return (
    <section id="ai" className="py-16">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">AI Recommendations</h2>
        <p className="mt-2 text-gray-600">Genie suggests experiences you’ll love</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map(r => (
          <div key={r.id} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">{r.title}</h3>
            <p className="mt-2 text-gray-600">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}