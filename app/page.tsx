"use client";

import { ArrowRight, Check, Heart, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F5E6D3] text-[#8B4513]">
      <main>
        <section className="relative py-20 bg-[url('/images/bg-hero.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#8B4513] opacity-60 pointer-events-none"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-6 text-white shadow-text">
              Crafted for Health
            </h1>
            <p className="text-2xl mb-8 text-white shadow-text">
              A complete meal loved by dogs
            </p>
            <Link
              href="/products"
              className="inline-flex items-center bg-[#8B4513] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#A0522D] transition-colors"
            >
              Explore Our Products <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12 text-center">
              Why Choose Big Heart Feeds?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Heart className="mx-auto mb-4 text-[#A0522D] w-16 h-16" />
                <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
                <p>
                  Our recipes are crafted with care to ensure your dog gets the
                  best nutrition possible.
                </p>
              </div>
              <div className="text-center">
                <Shield className="mx-auto mb-4 text-[#A0522D] w-16 h-16" />
                <h3 className="text-xl font-semibold mb-2">
                  Quality Ingredients
                </h3>
                <p>
                  We use only high-quality, locally-sourced ingredients in all
                  our dog food products.
                </p>
              </div>
              <div className="text-center">
                <Zap className="mx-auto mb-4 text-[#A0522D] w-16 h-16" />
                <h3 className="text-xl font-semibold mb-2">
                  Balanced Nutrition
                </h3>
                <p>
                  Our formulas are designed to provide complete and balanced
                  nutrition for dogs of all ages.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/images/home.jpg"
                  alt="Happy dog eating Big Heart Feeds"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-semibold mb-6">
                  The Big Heart Difference
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <Check className="mr-2 text-[#A0522D] flex-shrink-0 mt-1" />
                    <span>Nutritionally balanced for optimal health</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-[#A0522D] flex-shrink-0 mt-1" />
                    <span>
                      Promotes healthy digestion and nutrient absorption
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-[#A0522D] flex-shrink-0 mt-1" />
                    <span>Supports strong bones, teeth, and muscles</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-[#A0522D] flex-shrink-0 mt-1" />
                    <span>Enhances coat health and skin condition</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 text-[#A0522D] flex-shrink-0 mt-1" />
                    <span>Boosts immune system for overall wellbeing</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-8">
              Ready to Give Your Dog the Best?
            </h2>
            <Link
              href="/products"
              className="inline-flex items-center bg-[#8B4513] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#A0522D] transition-colors"
            >
              Shop Now <ArrowRight className="ml-2" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
