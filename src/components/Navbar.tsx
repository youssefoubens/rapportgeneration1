// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import '../app/styles/navbar.css'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-logo">
          SmartReport
        </Link>

        <div className="navbar-desktop-links">
          <Link href="/features" className="navbar-link">
            Features
          </Link>
          <Link href="/templates" className="navbar-link">
            Templates
          </Link>
          <Link href="/demo/preview" className="navbar-link">
            Demo
          </Link>
          <Link href="/pricing" className="navbar-link">
            Pricing
          </Link>
        </div>

        <div className="navbar-auth-links">
          <Link href="/auth/signin" className="navbar-link">
            Sign In
          </Link>
          <Link href="/auth/signup" className="navbar-button-primary">
            Sign Up
          </Link>
        </div>

        <button className="navbar-mobile-button" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? (
            <XMarkIcon className="mobile-menu-icon" />
          ) : (
            <Bars3Icon className="mobile-menu-icon" />
          )}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="navbar-mobile-links">
            <Link href="/features" className="navbar-mobile-link" onClick={toggleMobileMenu}>
              Features
            </Link>
            <Link href="/templates" className="navbar-mobile-link" onClick={toggleMobileMenu}>
              Templates
            </Link>
            <Link href="/demo/upload" className="navbar-mobile-link" onClick={toggleMobileMenu}>
              Demo
            </Link>
            <Link href="/pricing" className="navbar-mobile-link" onClick={toggleMobileMenu}>
              Pricing
            </Link>
          </div>
          <div className="navbar-mobile-auth">
            <Link href="/signin" className="navbar-mobile-link" onClick={toggleMobileMenu}>
              Sign In
            </Link>
            <Link href="/signup" className="navbar-button-primary" onClick={toggleMobileMenu}>
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}