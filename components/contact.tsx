"use client";

import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-20 px-6 overflow-hidden">
      {/* Animated Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.08}
        duration={4}
        className="absolute inset-0 skew-y-12 [mask-image:radial-gradient(600px_circle_at_center,white,transparent)]"
      />

      <div className="max-w-screen-md mx-auto relative z-[1]">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Contact
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Have a project in mind or just want to say hello? Fill out the form
            below and I’ll get back to you soon.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-background border border-accent rounded-xl shadow-sm p-6 sm:p-8 flex flex-col gap-4 backdrop-blur-sm"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <Textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />

          <Button
            type="submit"
            variant="default"
            className="rounded-full w-fit self-center mt-4 px-6"
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
