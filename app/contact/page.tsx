"use client";

import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message. We will get back to you soon!");
  };

  return (
    <div className="min-h-screen bg-[#F5E6D3] text-[#8B4513]">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Get in Touch with Big Heart Feeds
        </h1>
        <p className="text-center text-lg mb-12 max-w-2xl mx-auto">
          We're always here to help with any questions about our products,
          nutrition advice for your furry friends, or anything else you'd like
          to discuss. Reach out to us using the form below or through our
          contact information.
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#8B4513] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#8B4513] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-[#8B4513] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
                >
                  <option value="">Select a subject</option>
                  <option value="product-inquiry">Product Inquiry</option>
                  <option value="nutrition-advice">Nutrition Advice</option>
                  <option value="order-support">Order Support</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-[#8B4513] rounded-md focus:outline-none focus:ring-2 focus:ring-[#A0522D]"
                  placeholder="How can we help you today?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#8B4513] text-white py-3 px-6 rounded-md hover:bg-[#A0522D] transition-colors flex items-center justify-center text-lg font-semibold"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-semibold mb-6">Our Information</h2>
              <div className="space-y-4">
                <p className="flex items-center text-lg">
                  <MapPin className="mr-4 text-[#A0522D] h-6 w-6" />
                  Nakuwadde-Bulenga, Uganda
                </p>
                <p className="flex items-center text-lg">
                  <Mail className="mr-4 text-[#A0522D] h-6 w-6" />
                  bigheartfeeds@gmail.com
                </p>
                <p className="flex items-center text-lg">
                  <Phone className="mr-4 text-[#A0522D] h-6 w-6" />
                  +256773457817 / +256751562195
                </p>
                <p className="flex items-center text-lg">
                  <Phone className="mr-4 text-[#A0522D] h-6 w-6" />
                  +256752837350 / +256770893355
                </p>
                <p className="flex items-center text-lg">
                  <Clock className="mr-4 text-[#A0522D] h-6 w-6" />
                  Monday - Friday: 9am - 5pm
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center">Find Us</h2>
          <p className="text-center mb-8 text-lg">
            Located in the heart of Nakuwadde-Bulenga, our facility is easily accessible. Come visit us to learn more about our products and see our commitment to quality firsthand.
          </p>
          <div className="aspect-w-16 aspect-h-9">
            <Image
              src="/placeholder.svg?height=500&width=1000"
              alt="Map of Big Heart Feeds location"
              width={1000}
              height={500}
              className="rounded-lg object-cover"
            />
          </div>
        </div> */}
      </main>
    </div>
  );
}
