"use client"

import { Check } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5E6D3] text-[#8B4513]">
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About Big Heart Feeds</h1>
        
        <section className="mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Big Heart Feeds team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div> */}
            <div className="md:w-full px-10">
              <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
              <p className="mb-4">
                Founded in 2024, Big Heart Feeds emerged from a passion for providing high-quality nutrition to our canine companions. Our journey began in Nakuwadde-Bulenga, Uganda, where we noticed a gap in the market for locally-produced dog food that met international nutritional standards.
              </p>
              <p>
                What started as a small family-run operation has grown into a trusted name in pet nutrition. Our commitment to quality, innovation, and the well-being of pets has been the driving force behind our success and continues to guide our path forward.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Quality First</h3>
              <p>We never compromise on the quality of our ingredients or the nutritional value of our products. Every bag of Big Heart Feeds is a promise of excellence to you and your pet.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Innovation</h3>
              <p>We continuously research and develop new formulas to meet the evolving nutritional needs of dogs. Our team stays up-to-date with the latest advancements in pet nutrition to bring you the best.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p>We're committed to sustainable practices in our production and packaging processes. We believe in nurturing not just pets, but also the environment they live in.</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-center">Our Commitment to Quality</h2>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <ul className="space-y-4">
              <li className="flex items-start">
                <Check className="mr-2 text-[#A0522D] flex-shrink-0 mt-1" />
                <span>We source only the finest ingredients from trusted local suppliers, supporting our community while ensuring top-notch quality.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 text-[#A0522D] flex-shrink-0 mt-1" />
                <span>Our state-of-the-art production facility adheres to strict quality control measures, meeting and exceeding industry standards.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 text-[#A0522D] flex-shrink-0 mt-1" />
                <span>We conduct regular nutritional analysis to ensure our products meet or exceed the nutritional requirements for dogs at all life stages.</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 text-[#A0522D] flex-shrink-0 mt-1" />
                <span>Our team includes veterinary nutritionists who oversee product development, ensuring that every formula is backed by science.</span>
              </li>
            </ul>
          </div>
        </section>
{/* 
        <section>
          <h2 className="text-3xl font-semibold mb-8 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="John Doe"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">John Doe</h3>
              <p className="text-[#A0522D] mb-4">Founder & CEO</p>
              <p>With over 15 years of experience in the pet food industry, John's vision and leadership have been instrumental in Big Heart Feeds' success.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Jane Smith"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
              <p className="text-[#A0522D] mb-4">Head of Nutrition</p>
              <p>A certified veterinary nutritionist, Jane ensures that every Big Heart Feeds product meets the highest standards of nutritional excellence.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Mike Johnson"
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Mike Johnson</h3>
              <p className="text-[#A0522D] mb-4">Quality Control Manager</p>
              <p>Mike's meticulous approach and attention to detail ensure that every batch of Big Heart Feeds meets our rigorous quality standards.</p>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  )
}