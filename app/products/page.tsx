"use client"

import { Star } from 'lucide-react'
import Image from 'next/image'


export default function ProductsPage() {
  const products = [
    {
      name: "Big Heart Adult Dog Food",
      weight: "5kg",
      image: "/placeholder.svg?height=300&width=300",
      description: "Complete and balanced nutrition for adult dogs.",
      features: [
        "High-quality protein sources",
        "Essential vitamins and minerals",
        "Omega-3 and Omega-6 fatty acids for healthy skin and coat",
        "Fiber blend for digestive health"
      ],
      price: "UGX 50,000"
    },
    {
      name: "Big Heart Puppy Formula",
      weight: "5kg",
      image: "/placeholder.svg?height=300&width=300",
      description: "Specially formulated for growing puppies.",
      features: [
        "DHA for brain and vision development",
        "Calcium for strong bones and teeth",
        "Easily digestible proteins",
        "Antioxidants for immune support"
      ],
      price: "UGX 55,000"
    },
    {
      name: "Big Heart Senior Dog Food",
      weight: "5kg",
      image: "/placeholder.svg?height=300&width=300",
      description: "Tailored nutrition for older dogs.",
      features: [
        "Glucosamine and chondroitin for joint health",
        "L-carnitine for maintaining healthy weight",
        "Antioxidants for cognitive function",
        "Balanced minerals for heart and kidney health"
      ],
      price: "UGX 52,000"
    }
  ]

  return (
    <div className="min-h-screen bg-[#F5E6D3] text-[#8B4513]">
      <main className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
          
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Filter Products</h2>
            <div className="flex flex-wrap gap-4">
              <select className="bg-white border border-[#8B4513] rounded px-4 py-2">
                <option>All Ages</option>
                <option>Puppy</option>
                <option>Adult</option>
                <option>Senior</option>
              </select>
              <select className="bg-white border border-[#8B4513] rounded px-4 py-2">
                <option>All Sizes</option>
                <option>Small Breed</option>
                <option>Medium Breed</option>
                <option>Large Breed</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                  <p className="text-[#A0522D] mb-4">{product.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold">Net Weight: {product.weight}</span>
                    <span className="font-bold text-[#A0522D]">{product.price}</span>
                  </div>
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Key Features:</h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center mb-4">
                    <Star className="text-yellow-400 fill-current" />
                    <Star className="text-yellow-400 fill-current" />
                    <Star className="text-yellow-400 fill-current" />
                    <Star className="text-yellow-400 fill-current" />
                    <Star className="text-yellow-400 fill-current" />
                    <span className="ml-2 text-sm">(25 reviews)</span>
                  </div>
                  <button className="w-full bg-[#8B4513] text-white px-4 py-2 rounded hover:bg-[#A0522D] transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}