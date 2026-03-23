export default function HowItWorks() {
  const steps = [
    { id: 1, title: "Sign Up", desc: "Create your Genie account in seconds." },
    { id: 2, title: "Personalize", desc: "Set your preferences and interests." },
    { id: 3, title: "Discover", desc: "Get AI-powered suggestions instantly." },
  ];

  return (
    <section id="howitworks" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        <p className="mt-2 text-gray-600">Three simple steps to start your journey with Genie</p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map(step => (
          <div key={step.id} className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">{step.title}</h3>
            <p className="mt-2 text-gray-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}