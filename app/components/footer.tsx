"use client"

import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#8B4513] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Big Heart Feeds</h3>
            <p>Crafting nutritious meals for your beloved dogs.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li><Link href="/products" className="hover:underline">Our Products</Link></li>
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Nakuwadde-Bulenga</p>
            <p>Email: bigheartfeeds@gmail.com</p>
            <p>Phone: +256773457817 / +256751562195</p>
            <p>+256752837350 / +256770893355</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[#A0522D] flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 Big Heart Feeds. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#F5E6D3] transition-colors" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" className="hover:text-[#F5E6D3] transition-colors" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" className="hover:text-[#F5E6D3] transition-colors" aria-label="Twitter">
              <Twitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}