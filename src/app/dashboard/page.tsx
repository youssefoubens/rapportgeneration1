// app/dashboard/page.tsx
import { getCurrentUser } from '@/lib/auth'
import ReportCard from '@/components/ReportCard'
import Link from 'next/link'
import '../styles/dashboard.css'

export default async function DashboardPage() {
  const user = await getCurrentUser()

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1 className="dashboard-title">My Reports</h1>
          <p className="dashboard-subtitle">View and manage all your generated reports</p>
        </div>
        <Link href="/upload" className="new-report-button">
          <span className="button-icon">+</span>
          <span className="button-text">New Report</span>
        </Link>
      </header>

      {user ? (
        <>
          <div className="reports-meta">
            <span className="total-reports">3 reports</span>
            <div className="sort-options">
              <span>Sort by:</span>
              <select className="sort-select">
                <option>Newest first</option>
                <option>Oldest first</option>
                <option>Title (A-Z)</option>
              </select>
            </div>
          </div>
          
          <div className="reports-grid">
            <ReportCard 
              title="Lab Experiment #1"
              date="2023-11-15" 
              status="completed"
              template="academic"
            />
            <ReportCard 
              title="Quarterly Analysis" 
              date="2023-10-28" 
              status="processing"
              template="business"
            />
            <ReportCard 
              title="Research Findings" 
              date="2023-09-12" 
              status="draft"
              template="minimal"
            />
          </div>
        </>
      ) : (
        <div className="auth-required">
          <div className="auth-message">
            <h2>Access Your Reports</h2>
            <p>Sign in to view and manage your generated reports</p>
          </div>
          <div className="auth-actions">
            <Link href="/auth/signin" className="signin-button">
              Sign In
            </Link>
            <Link href="/auth/signup" className="signup-link">
              Dont have an account? <span>Sign up</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}