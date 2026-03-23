export default function Testimonials() {
  const testimonials = [
    { id: 1, name: "Alice", feedback: "Genie helped me find amazing events!" },
    { id: 2, name: "Bob", feedback: "I love the AI suggestions!" },
    { id: 3, name: "Charlie", feedback: "Makes social planning effortless." },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">What Users Say</h2>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map(t => (
          <div key={t.id} className="bg-white p-6 rounded-xl shadow-md">
            <p className="text-gray-600">"{t.feedback}"</p>
            <p className="mt-4 font-semibold">{t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}