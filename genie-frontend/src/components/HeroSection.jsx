export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-gradient-to-r from-blue-50 to-white">
      <div className="md:w-1/2">
        <h2 className="text-4xl md:text-6xl font-bold">Your AI Social Concierge</h2>
        <p className="mt-4 text-lg md:text-xl">
          Genie helps you discover experiences, events, and people tailored to you.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Get Started
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
       <img src="/hero.png" alt="Genie AI" className="w-full h-auto" />
      </div>
    </section>
  );
}