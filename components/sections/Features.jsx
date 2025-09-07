import { Cpu, Globe, Rocket } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Cpu className="w-10 h-10 text-brand-primary" />,
      title: "AI-Powered Solutions",
      desc: "Custom AI tools and automations designed to streamline your business processes.",
    },
    {
      icon: <Globe className="w-10 h-10 text-brand-primary" />,
      title: "Full-Stack Development",
      desc: "Scalable, modern web and mobile applications built with cutting-edge tech.",
    },
    {
      icon: <Rocket className="w-10 h-10 text-brand-primary" />,
      title: "Digital Growth",
      desc: "Smart strategies and technology that accelerate growth and future-proof your business.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Core Services</h2>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="p-6 border rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}                       
        </div>
      </div>
    </section>
  );        
}
    