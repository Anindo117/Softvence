'use client'
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

type FormState = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  agree: boolean
}

export default function Register() {
  const router = useRouter()
  const formRef = useRef<HTMLFormElement | null>(null)
  const [form, setForm] = useState<FormState>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agree: true,
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault()
    if (!e && formRef.current) {
      try {
        formRef.current.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
      } catch (err) {}
    }
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match')
      return
    }
    if (!form.agree) {
      setError('You must agree to the Terms of Service and Privacy Policy')
      return
    }
    try {
      setLoading(true)
      setError('')
      const res = await fetch('https://stage.api.online-spine.com/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          password: form.password,
        }),
      })
      let data: any = {}
      try {
        data = await res.json()
      } catch (err) {
        data = {}
      }
      if (!res.ok) {
        const msg = data?.message || data?.error || 'Registration failed'
        throw new Error(msg)
      }
      router.push('/login')
    } catch (err: any) {
      setError(err?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full">
        
        <h1 className="text-center text-2xl font-bold">Create your Account</h1>
        <p className="text-center text-sm text-gray-500 mb-6">When sports Meets smart Tech.</p>
        <form ref={formRef} onSubmit={(e) => handleSubmit(e)} className="space-y-4" noValidate>
          <div className="flex gap-2">
            <input
              name="firstName"
              aria-label="First Name"
              type="text"
              placeholder="First Name"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
              className="flex-1 border rounded-md px-3 py-2"
              required
            />
            <input
              name="lastName"
              aria-label="Last Name"
              type="text"
              placeholder="Last Name"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
              className="flex-1 border rounded-md px-3 py-2"
              required
            />
          </div>
          <input
            name="email"
            aria-label="Email address"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border rounded-md px-3 py-2"
            required
          />
          <input
            name="password"
            aria-label="Password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border rounded-md px-3 py-2"
            required
          />
          <input
            name="confirmPassword"
            aria-label="Confirm Password"
            type="password"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            className="w-full border rounded-md px-3 py-2"
            required
          />
          <div className="flex items-center gap-2 text-sm">
            <input
              name="agree"
              aria-label="Agree to terms"
              type="checkbox"
              checked={form.agree}
              onChange={(e) => setForm({ ...form, agree: e.target.checked })}
            />
            <span>
              I agree to Tech Takes <a href="#" className="text-green-600 underline">Terms of Service</a> and <a href="#" className="text-green-600 underline">Privacy Policy</a>.
            </span>
          </div>
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            {loading ? 'Creating...' : 'Create Account'}
          </button>
        </form>
        <div className="flex items-center gap-2 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>
        <button
          type="button"
          onClick={() => window.open('https://accounts.google.com/o/oauth2/v2/auth', '_self')}
          className="w-full border flex items-center justify-center gap-2 py-2 rounded-md hover:bg-gray-50"
        >
          <img src="/images/ic_google.png" alt="Google" className="w-5 h-5" /> Continue with Google
        </button>
        <p className="text-center text-sm mt-6">
          Don’t have an account? <a href="/login" className="text-green-600 font-medium">Get started</a>
        </p>
      </div>
    </div>
  )
}
