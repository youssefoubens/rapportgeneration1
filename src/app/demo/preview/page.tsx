'use client'
import Link from 'next/link'
import PDFViewer from '@/components/PDFViewer'
import DemoNotice from '@/components/DemoNotice'
import { FiDownload, FiEdit2, FiUserPlus, FiHome, FiFileText, FiCalendar, FiLayout } from 'react-icons/fi'
import '../../styles/demo.css'

const demoReport = {
  title: 'Demo Lab Report: Microbial Analysis',
  pdfUrl: '/sample-report.pdf',
  createdAt: new Date().toISOString(),
  pageCount: 12,
  template: 'Academic Paper',
  wordCount: 2450,
  containsImages: true
}

export default function DemoPreviewPage() {
  return (
    <div className="demo-preview-container">
      <DemoNotice />
      
      <div className="demo-preview-header">
        <div className="header-content">
          <h1>{demoReport.title}</h1>
          <p className="subtitle">This is a temporary preview - sign up to save your work permanently</p>
          
          <div className="report-metadata">
            <div className="metadata-item">
              <FiFileText className="metadata-icon" />
              <span>{demoReport.pageCount} pages</span>
            </div>
            <div className="metadata-item">
              <FiLayout className="metadata-icon" />
              <span>{demoReport.template} template</span>
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
          href={demoReport.pdfUrl} 
          download="SmartReport-Demo.pdf"
          className="action-button download-button"
        >
          <FiDownload className="button-icon" />
          Download PDF
        </a>
        <Link href="/upload" className="action-button edit-button">
          <FiEdit2 className="button-icon" />
          Create Another
        </Link>
        <Link href="/auth/signup" className="action-button signup-button">
          <FiUserPlus className="button-icon" />
          Sign Up to Save
        </Link>
      </div>

      <div className="pdf-viewer-wrapper">
        <PDFViewer url={demoReport.pdfUrl} />
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