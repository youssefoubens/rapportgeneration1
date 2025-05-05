// components/ReportPreviewModal.tsx

'use client'
import '../app/styles/ReportPreview.css'
import { useEffect } from 'react'
import Image from 'next/image'

interface ReportData {
  title: string
  template: string
  sections: string[]
  imageCount: number
  status: string
}

interface ReportPreviewModalProps {
  data: ReportData
  onClose: () => void
}

export default function ReportPreviewModal({ data, onClose }: ReportPreviewModalProps) {
  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const templateImages = {
    academic: '/templates/academic-preview.jpg',
    business: '/templates/business-preview.jpg',
    lab: '/templates/lab-preview.jpg',
    minimal: '/templates/minimal-preview.jpg'
  }

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        
        <div className="modal-header">
          <h2>Report Preview: {data.title}</h2>
          <div className="status-badge">
            {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
          </div>
        </div>

        <div className="modal-content">
          <div className="preview-image">
            <Image
              src={templateImages[data.template as keyof typeof templateImages] || '/templates/default-preview.jpg'}
              alt={`${data.template} template preview`}
              width={600}
              height={800}
              className="preview-img"
            />
          </div>

          <div className="report-details">
            <h3>Report Details</h3>
            <ul className="details-list">
              <li>
                <strong>Template:</strong>
                <span>{data.template}</span>
              </li>
              <li>
                <strong>Sections:</strong>
                <span>{data.sections.length}</span>
              </li>
              <li>
                <strong>Images:</strong>
                <span>{data.imageCount}</span>
              </li>
            </ul>

            <div className="sections-preview">
              <h4>Table of Contents</h4>
              <ul>
                {data.sections.map((section, index) => (
                  <li key={index}>{section}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="modal-actions">
          <button className="download-button">
            Download PDF
          </button>
          <button className="close-button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}