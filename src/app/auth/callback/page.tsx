// app/auth/callback/page.tsx
'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import '../../styles/auth.css'
export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    supabase.auth.onAuthStateChange((event, _session) => {
      if (event === 'SIGNED_IN') {
        router.push('/dashboard')
      }
    })
  }, [router])

  return (
    <div className="auth-callback">
      <h2>Signing you in...</h2>
      <p>Please wait while we redirect you to your dashboard.</p>
    </div>
  )
}