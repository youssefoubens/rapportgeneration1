// components/ProgressStepper.tsx
'use client'
import '../app/styles/ProgressStepper.css'
interface ProgressStepperProps {
  steps: string[]
  activeStep: number
}

export default function ProgressStepper({ steps, activeStep }: ProgressStepperProps) {
  return (
    <div className="progress-stepper">
      <div className="stepper-container">
        {steps.map((step, index) => (
          <div 
            key={index} 
            className={`stepper-step ${index <= activeStep ? 'active' : ''}`}
          >
            <div className="step-number">
              {index + 1}
            </div>
            <div className="step-label">
              {step}
            </div>
            {index < steps.length - 1 && (
              <div className="step-connector"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}