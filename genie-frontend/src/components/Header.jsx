import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-6">
        <h1 className="text-2xl font-bold">Genie</h1>
        <nav>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            Menu
          </button>
          <ul className={`md:flex md:space-x-6 ${menuOpen ? "block" : "hidden"}`}>
            <li><a href="#howitworks" className="hover:text-blue-600">How It Works</a></li>
            <li><a href="#ai" className="hover:text-blue-600">AI Recommendations</a></li>
            <li><a href="#testimonials" className="hover:text-blue-600">Testimonials</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}