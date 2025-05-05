// app/demo/preview/page.tsx
'use client'
import Link from 'next/link'
import PDFViewer from '@/components/PDFViewer'
import DemoNotice from '@/components/DemoNotice'
import '../../styles/demo.css'

const demoReport = {
  title: 'Demo Lab Report',
  pdfUrl: '/sample-report.pdf',
  createdAt: new Date().toISOString(),
  pageCount: 8,
  template: 'Academic Paper'
}

export default function DemoPreviewPage() {
  return (
    <div className="demo-preview-container">
      <DemoNotice />
      
      <div className="demo-preview-header">
        <h1>Your Demo Report</h1>
        <p>This is a temporary preview - sign up to save your work</p>
      </div>

      <div className="preview-actions">
        <a 
          href={demoReport.pdfUrl} 
          download="SmartReport-Demo.pdf"
          className="download-button"
        >
          Download PDF
        </a>
        <Link href="/demo/upload" className="edit-button">
          Create Another
        </Link>
        <Link href="/auth/signup" className="signup-button">
          Sign Up to Save
        </Link>
      </div>

      <div className="pdf-viewer-wrapper">
        <PDFViewer url={demoReport.pdfUrl} />
      </div>

      <div className="demo-footer">
        <Link href="/" className="home-link">
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}