import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  Lightbulb,
  Zap,
  Shield,
  BarChart3,
  Users,
  Code,
} from "lucide-react";
import type React from "react";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: "1",
    title: "Strategic Consulting",
    description:
      "Expert guidance to transform your business strategy and achieve measurable growth.",
    icon: <Lightbulb className="w-8 h-8" />,
  },
  {
    id: "2",
    title: "Performance Optimization",
    description:
      "Streamline operations and boost efficiency with data-driven insights.",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: "3",
    title: "Risk Management",
    description:
      "Comprehensive strategies to identify and mitigate business risks.",
    icon: <Shield className="w-8 h-8" />,
  },
  {
    id: "4",
    title: "Analytics & Insights",
    description:
      "Deep dive into your data to uncover actionable business intelligence.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    id: "5",
    title: "Team Development",
    description:
      "Build high-performing teams through training and organizational development.",
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: "6",
    title: "Digital Transformation",
    description:
      "Leverage technology to revolutionize your business processes.",
    icon: <Code className="w-8 h-8" />,
  },
];

const ServicesListing = () => {
  return (
    <section id="services" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Helping Businesses Grow with Tailored Solutions
          </h2>
          <p className="text-muted-foreground text-justify">
            We provide a wide range of consulting and digital transformation
            services to help your business reach its full potential. From
            strategic planning to team development, every service is designed to
            create measurable impact and sustainable success.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={cn(
                "group flex flex-col items-start border border-border rounded-2xl p-6",
                "hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              )}
            >
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-accent-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesListing;