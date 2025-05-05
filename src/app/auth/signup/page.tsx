// app/signup/page.tsx
import AuthForm from '../../../components/AuthForm'

import '../../styles/auth.css'
export default function SignUpPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <AuthForm type="signup" />
      </div>
    </div>
  )
}