// components/ReportCard.tsx
import Link from 'next/link'
import '../app/styles/ReportCard.css'
interface ReportCardProps {
  id?: string
  title: string
  date: string
  status: 'draft' | 'processing' | 'completed'
  template: string
}

export default function ReportCard({ 
  id,
  title, 
  date, 
  status,
  template 
}: ReportCardProps) {
  const statusColors = {
    draft: 'bg-gray-200 text-gray-800',
    processing: 'bg-blue-200 text-blue-800',
    completed: 'bg-green-200 text-green-800'
  }

  const templateIcons = {
    academic: '📚',
    business: '💼',
    lab: '🧪',
    minimal: '✏️'
  }

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <div className="report-card">
      <div className="report-card-header">
        <span className="template-icon">{templateIcons[template as keyof typeof templateIcons] || '📄'}</span>
        <h3 className="report-title">{title}</h3>
      </div>
      
      <div className="report-card-body">
        <div className="report-meta">
          <span className="report-date">{formattedDate}</span>
          <span className={`report-status ${statusColors[status]}`}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
        </div>
      </div>
      
      {id && (
        <Link href={`/preview/${id}`} className="view-report-button">
          View Report
        </Link>
      )}
    </div>
  )
}