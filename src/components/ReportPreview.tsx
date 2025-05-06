'use client'
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
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-4xl p-6 relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl font-bold"
          onClick={onClose}
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Header */}
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Report Preview: {data.title}
          </h2>
          <span className="px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-600 capitalize">
            {data.status}
          </span>
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="rounded-xl overflow-hidden border border-gray-200">
            <Image
              src={templateImages[data.template as keyof typeof templateImages] || '/templates/default-preview.jpg'}
              alt={`${data.template} template preview`}
              width={600}
              height={800}
              className="object-cover w-full h-auto"
            />
          </div>

          {/* Details */}
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">Report Details</h3>
            <ul className="space-y-2 text-gray-600">
              <li><strong>Template:</strong> {data.template}</li>
              <li><strong>Sections:</strong> {data.sections.length}</li>
              <li><strong>Images:</strong> {data.imageCount}</li>
            </ul>

            {/* TOC */}
            <div className="mt-6">
              <h4 className="text-md font-semibold text-gray-700 mb-2">Table of Contents</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 max-h-40 overflow-auto pr-2">
                {data.sections.map((section, index) => (
                  <li key={index}>{section}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex justify-end gap-3">
          <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
            Download PDF
          </button>
          <button
            onClick={onClose}
            className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
