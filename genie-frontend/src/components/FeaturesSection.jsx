import FeatureCard from "./FeatureCard";

const features = [
  {
    id: 1,
    icon: "/icons/discover.svg",
    title: "Discover",
    description: "Find personalized experiences quickly",
  },
  {
    id: 2,
    icon: "/icons/connect.svg",
    title: "Connect",
    description: "Meet like-minded people",
  },
  {
    id: 3,
    icon: "/icons/plan.svg",
    title: "Plan",
    description: "Schedule events with AI suggestions",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map(f => (
          <FeatureCard key={f.id} {...f} />
        ))}
      </div>
    </section>
  );
}