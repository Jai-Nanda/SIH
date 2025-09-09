'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/auth/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      router.push('/');
    } else {
      const error = await res.json();
      setError(error.message);
    }
  };
  const handleGoBack = () => {
    window.history.back()
  }

  const LeafIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66C7.84 17.17 9.6 12.76 17 11V8zm-6.09 9.91C8.5 17.91 6.91 16.5 6.91 14.5c0-2 1.59-3.41 3.5-3.41s3.5 1.41 3.5 3.41c0 2-1.59 3.41-3.5 3.41z" />
    </svg>
  )

  const SproutIcon = ({ className }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
  )

  const ArrowLeftIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 12H5m7-7l-7 7 7 7" />
    </svg>
  )

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Farm-themed background elements */}
      <div className="absolute inset-0 opacity-5">
        <LeafIcon className="absolute top-20 left-20 w-16 h-16 text-primary rotate-12" />
        <SproutIcon className="absolute top-40 right-32 w-12 h-12 text-primary -rotate-12" />
        <LeafIcon className="absolute bottom-32 left-40 w-20 h-20 text-primary rotate-45" />
        <SproutIcon className="absolute bottom-20 right-20 w-14 h-14 text-primary -rotate-45" />
        <LeafIcon className="absolute top-60 left-1/2 w-10 h-10 text-primary rotate-90" />
      </div>

      <div className="w-full max-w-md relative z-10">
        <button
          onClick={handleGoBack}
          className="mb-6 text-muted-foreground hover:text-foreground flex items-center gap-2 px-3 py-2 rounded-md hover:bg-accent transition-colors"
        >
          <ArrowLeftIcon className="w-4 h-4" />
          Go Back
        </button>

        <div className="bg-card border border-border rounded-lg shadow-lg">
          {/* Card Header */}
          <div className="p-6 text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <SproutIcon className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-card-foreground">Welcome Back</h1>
            <p className="text-muted-foreground">Sign in to your farm management account</p>
          </div>

          {/* Card Content */}
          <div className="px-6 pb-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-card-foreground font-medium text-sm block">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="farmer@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-card-foreground font-medium text-sm block">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-3 py-2 bg-input border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring text-foreground placeholder:text-muted-foreground"
                />
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2 text-muted-foreground cursor-pointer">
                  <input type="checkbox" className="rounded border-border" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="text-primary hover:text-primary/80 font-medium">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              >
                Sign In
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Don't have an account?{" "}
                <a href="#" className="text-primary hover:text-primary/80 font-medium">
                  Sign up here
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-xs text-muted-foreground">Cultivating growth, harvesting success</p>
        </div>
      </div>
    </div>
  );
}