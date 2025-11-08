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
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus('idle');
    setErrorMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage("");

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setStatus('success');
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
    }
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

          <div className="flex flex-col items-center gap-2">
            <Button
              type="submit"
              variant="default"
              className="rounded-full w-fit px-6"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
            {status === 'success' && (
              <p className="text-green-500">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-red-500">{errorMessage}</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
