// app/upload/page.tsx
'use client'
import { useState, useCallback } from 'react'
import ImageUploader from '@/components/ImageUploader'
import TOCInput from '@/components/TOCInput'
import TemplateSelector from '@/components/TemplateSelector'
import ProgressStepper from '../../components/ProgressStepper'
import ReportPreviewModal from '../../components/ReportPreview'
import { useRouter } from 'next/navigation'
import '../styles/upload.css'

export default function UploadPage() {
  const router = useRouter()
  const [images, setImages] = useState<File[]>([])
  const [toc, setToc] = useState<string[]>(['Introduction', 'Methodology', 'Results', 'Conclusion'])
  const [selectedTemplate, setSelectedTemplate] = useState('academic')
  const [isGenerating, setIsGenerating] = useState(false)
  const [previewData, setPreviewData] = useState<{
    title: string;
    template: string;
    sections: string[];
    imageCount: number;
    status: string;
  } | null>(null)
  const [activeStep, setActiveStep] = useState(0)
  const [reportTitle, setReportTitle] = useState('')

  const steps = ['Upload', 'Structure', 'Generate']

  const handleGenerate = useCallback(async () => {
    if (images.length === 0) return

    setIsGenerating(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In a real app, you would:
      // 1. Upload images to storage
      // 2. Send data to your report generation API
      // 3. Handle the response
      
      const mockResponse = {
        title: reportTitle || 'Untitled Report',
        template: selectedTemplate,
        sections: toc,
        imageCount: images.length,
        status: 'processing'
      }
      
      setPreviewData(mockResponse)
      setActiveStep(2)
    } catch (error) {
      console.error('Generation failed:', error)
    } finally {
      setIsGenerating(false)
    }
  }, [images, reportTitle, selectedTemplate, toc])

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1)
    }
  }

  const handleClosePreview = () => {
    setPreviewData(null)
    router.push('/dashboard')
  }

  return (
    <div className="upload-container">
      <div className="upload-header">
        <h1>Create New Report</h1>
        <ProgressStepper steps={steps} activeStep={activeStep} />
      </div>

      <div className="upload-content">
        {activeStep === 0 && (
          <section className="image-upload-section">
            <div className="section-header">
              <h2>Upload Images</h2>
              <p>Add images that will be included in your report</p>
            </div>
            <ImageUploader 
              images={images} 
              setImages={setImages} 
            />
            <button 
              onClick={handleNextStep}
              className="primary-button"
              disabled={images.length === 0}
            >
              Next
            </button>
          </section>
        )}

        {activeStep === 1 && (
          <>
            <section className="report-details-section">
              <div className="section-header">
                <h2>Report Details</h2>
                <p>Customize your report structure</p>
              </div>
              <div className="form-group">
                <label htmlFor="report-title">Report Title</label>
                <input
                  id="report-title"
                  type="text"
                  value={reportTitle}
                  onChange={(e) => setReportTitle(e.target.value)}
                  placeholder="Enter report title"
                />
              </div>
            </section>

            <section className="toc-section">
              <div className="section-header">
                <h2>Table of Contents</h2>
                <p>Organize your report sections</p>
              </div>
              <TOCInput toc={toc} setToc={setToc} />
            </section>

            <section className="template-section">
              <div className="section-header">
                <h2>Select Template</h2>
                <p>Choose a design for your report</p>
              </div>
              <TemplateSelector 
                selected={selectedTemplate}
                onSelect={setSelectedTemplate}
              />
            </section>
          </>
        )}

        {activeStep === 2 && (
          <section className="generate-section">
            <div className="section-header">
              <h2>Generate Report</h2>
              <p>Review and create your final document</p>
            </div>
            <div className="summary-card">
              <h3>Report Summary</h3>
              <ul className="summary-list">
                <li>
                  <span>Title:</span>
                  <span>{reportTitle || 'Untitled Report'}</span>
                </li>
                <li>
                  <span>Template:</span>
                  <span>{selectedTemplate}</span>
                </li>
                <li>
                  <span>Sections:</span>
                  <span>{toc.length}</span>
                </li>
                <li>
                  <span>Images:</span>
                  <span>{images.length}</span>
                </li>
              </ul>
            </div>
          </section>
        )}
      </div>

      <div className="action-buttons">
        {activeStep > 0 && (
          <button 
            onClick={handlePrevStep}
            className="secondary-button"
            disabled={isGenerating}
          >
            Back
          </button>
        )}
        
        {activeStep < steps.length - 1 ? (
          <button 
            onClick={handleNextStep}
            className="primary-button"
            disabled={activeStep === 0 && images.length === 0}
          >
            Next
          </button>
        ) : (
          <button 
            onClick={handleGenerate}
            className="generate-button"
            disabled={isGenerating}
          >
            {isGenerating ? (
              <>
                <span className="spinner"></span>
                Generating...
              </>
            ) : (
              'Generate Report'
            )}
          </button>
        )}
      </div>

      {previewData && (
        <ReportPreviewModal 
          data={previewData}
          onClose={handleClosePreview}
        />
      )}
    </div>
  )
}