// app/page.tsx
import Link from 'next/link'
import { getCurrentUser } from '@/lib/auth'
import '../../styles/home.css'

export default async function Home() {
  const user = await getCurrentUser()

  return (
    <main className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">SmartReport</h1>
        <p className="hero-subtitle">AI-Powered Automated Report Generator</p>
        <p className="hero-description">
          Transform your images and ideas into professional reports with our AI-powered LaTeX generator.
          Perfect for academics, researchers, and professionals.
        </p>
      </div>

      <div className="cta-section">
        {user ? (
          <Link href="/dashboard" className="primary-button">
            Go to Dashboard
          </Link>
        ) : (
          <div className="auth-options">
            <Link href="/auth/signin" className="primary-button">
              Sign In
            </Link>
            <Link href="/auth/signup" className="secondary-button">
              Sign Up
            </Link>
            <div className="demo-divider">
              <span>or</span>
            </div>
            <Link href="/demo/upload" className="demo-button">
              Try Demo
            </Link>
          </div>
        )}
      </div>

      <div className="features-section">
        <div className="feature-card">
          <div className="feature-icon">📷</div>
          <h3>Image Processing</h3>
          <p>Upload images and let our AI generate descriptive captions</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📝</div>
          <h3>Smart Templates</h3>
          <p>Choose from professionally designed LaTeX templates</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>AI-Powered</h3>
          <p>GPT-4 generates coherent sections based on your content</p>
        </div>
      </div>
    </main>
  )
}