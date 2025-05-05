// app/preview/[reportId]/page.tsx
import { notFound } from 'next/navigation'
import PDFViewer from '../../../components/PDFViewer'

interface PreviewPageProps {
  params: { reportId: string }
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  // In a real app, you would fetch the report data here
  const report = await getReportData(params.reportId)
  
  if (!report) {
    return notFound()
  }

  return (
    <div className="preview-container">
      <div className="preview-header">
        <h1>{report.title}</h1>
        <div className="preview-actions">
          <a 
            href={`/api/download/${params.reportId}`}
            className="download-button"
          >
            Download PDF
          </a>
          <a href="/dashboard" className="back-button">
            Back to Dashboard
          </a>
        </div>
      </div>

      <div className="pdf-viewer-wrapper">
        <PDFViewer url={report.pdfUrl} />
      </div>

      <div className="report-metadata">
        <p>Created: {new Date(report.createdAt).toLocaleDateString()}</p>
        <p>Pages: {report.pageCount}</p>
        <p>Template: {report.template}</p>
      </div>
    </div>
  )
}

// Mock function - replace with actual data fetching
async function getReportData(reportId: string) {
  return {
    id: reportId,
    title: 'Lab Experiment Report',
    pdfUrl: '/sample-report.pdf',
    createdAt: new Date().toISOString(),
    pageCount: 12,
    template: 'Academic Paper'
  }
}