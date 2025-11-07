import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import { HTMLAttributes } from "react";

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="max-w-screen-md mx-auto">
        <div className="flex flex-col md:flex-row-reverse gap-12">
          <ProfileImage className="hidden md:block" />

          {/* Content */}
          <div className="flex-1 md:text-left">
            <Badge variant="secondary" className="mb-4">
              About Us
            </Badge>
            <ProfileImage className="mt-3 mb-8 block md:hidden" />
            <h2 className="text-4xl font-bold mb-4 tracking-tight">
              Passionate about creating impactful web experiences
            </h2>
            <p className="text-muted-foreground mb-6 text-justify">
              With over 5 years of experience as a Cloud Consultant, I help
              businesses design, implement, and optimize scalable cloud
              infrastructures tailored to their goals. I specialize in AWS,
              Azure, and Google Cloud, focusing on performance, security, and
              cost efficiency. I’m passionate about guiding organizations
              through seamless cloud migrations and enabling them to harness the
              full potential of cloud technologies to innovate and grow.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-start">
              <Button variant="outline" className="rounded-full">
                <Download />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-10 w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image src="/placeholder.svg" alt="" className="object-cover" fill />
    </div>
  </div>
);

export default About;
