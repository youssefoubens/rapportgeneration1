'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function DemoNotice() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 10000) // Hide after 10 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="demo-notice">
      <div className="demo-notice-content">
        <h3>Demo Mode Active</h3>
        <p>
          Youre currently using a demo session. Reports created here will be 
          temporary. <Link href="/signup">Sign up</Link> to save your work.
        </p>
        <button 
          onClick={() => setVisible(false)}
          className="demo-notice-close"
        >
          ×
        </button>
      </div>
    </div>
  )
}