// app/signin/page.tsx
import AuthForm from '../../../components/AuthForm'
import '../../styles/auth.css'
export default function SignInPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <AuthForm type="signin" />
      </div>
    </div>
  )
}