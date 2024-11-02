"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#F5E6D3] shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Big Heart Feeds Logo"
              width={80}
              height={80}
              className="mr-2"
            />
            <span className="text-[#8B4513] text-xl font-bold">Big Heart Feeds</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-[#8B4513] hover:text-[#A0522D] font-semibold transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-[#8B4513] hover:text-[#A0522D] font-semibold transition-colors">
              Our Products
            </Link>
            <Link href="/about" className="text-[#8B4513] hover:text-[#A0522D] font-semibold transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-[#8B4513] hover:text-[#A0522D] font-semibold transition-colors">
              Contact
            </Link>
          </nav>
          <button
            className="md:hidden text-[#8B4513]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 flex flex-col space-y-2 md:hidden">
            <Link href="/" className="text-[#8B4513] hover:text-[#A0522D] font-semibold transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-[#8B4513] hover:text-[#A0522D] font-semibold transition-colors">
              Our Products
            </Link>
            <Link href="/about" className="text-[#8B4513] hover:text-[#A0522D] font-semibold transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-[#8B4513] hover:text-[#A0522D] font-semibold transition-colors">
              Contact
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}