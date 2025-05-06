'use client'
import Link from 'next/link'
import PDFViewer from '@/components/PDFViewer'
import DemoNotice from '@/components/DemoNotice'
import { FiDownload, FiEdit2, FiUserPlus, FiHome, FiFileText, FiCalendar, FiLayout } from 'react-icons/fi'
import '../../styles/demo.css'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Report {
  title?: string;
  pageCount?: number;
  template?: string;
  pdfUrl: string;
}

export default function DemoPreviewPage() {
  const [report, setReport] = useState<Report | null>(null)
  const router = useRouter()

  useEffect(() => {
    // Check if user has a generated report in localStorage
    const demoReport = localStorage.getItem('demoReport')
    
    if (demoReport) {
      setReport(JSON.parse(demoReport))
    } else {
      // If no report exists, redirect to create one
      router.push('/upload?demo=true')
    }
  }, [router])

  if (!report) {
    return (
      <div className="demo-preview-container">
        <div className="loading-message">Loading your report...</div>
      </div>
    )
  }

  return (
    <div className="demo-preview-container">
      <DemoNotice />
      
      <div className="demo-preview-header">
        <div className="header-content">
          <h1>{report.title || 'Your Generated Report'}</h1>
          <p className="subtitle">This is a temporary preview - sign up to save your work permanently</p>
          
          <div className="report-metadata">
            <div className="metadata-item">
              <FiFileText className="metadata-icon" />
              <span>{report.pageCount || 'N/A'} pages</span>
            </div>
            <div className="metadata-item">
              <FiLayout className="metadata-icon" />
              <span>{report.template || 'Standard'} template</span>
            </div>
            <div className="metadata-item">
              <FiCalendar className="metadata-icon" />
              <span>Generated just now</span>
            </div>
          </div>
        </div>
      </div>

      <div className="preview-actions">
        <a 
          href={report.pdfUrl} 
          download={`SmartReport-Demo-${Date.now()}.pdf`}
          className="action-button download-button"
        >
          <FiDownload className="button-icon" />
          Download PDF
        </a>
        <Link href="/upload?demo=true" className="action-button edit-button">
          <FiEdit2 className="button-icon" />
          Create Another
        </Link>
        <Link href="/auth/signup" className="action-button signup-button">
          <FiUserPlus className="button-icon" />
          Sign Up to Save
        </Link>
      </div>

      <div className="pdf-viewer-wrapper">
        <PDFViewer url={report.pdfUrl} />
      </div>

      <div className="demo-footer">
        <Link href="/" className="home-link">
          <FiHome className="home-icon" />
          Back to Home
        </Link>
        <div className="watermark">DEMO PREVIEW - NOT SAVED</div>
      </div>
    </div>
  )
}