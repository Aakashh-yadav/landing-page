export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center text-center">
      <img src={icon} alt={title} className="w-12 h-12 mb-4"/>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}