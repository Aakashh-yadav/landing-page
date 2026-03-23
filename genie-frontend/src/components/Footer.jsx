export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-600">&copy; 2026 Genie. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="text-gray-600 hover:text-blue-600">Twitter</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">LinkedIn</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">GitHub</a>
        </div>
      </div>
    </footer>
  );
}