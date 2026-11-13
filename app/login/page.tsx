'use client'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'

function Page() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || 'Login gagal')
        return
      }

      console.log('Berhasil:', data)
    } catch (err) {
      setError('Tidak bisa terhubung ke server')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="login">
      <div className="login-container flex m-20 items-center justify-center bg-white text-black p-5">
        <div className="container-box w-72">
          <form onSubmit={handleSubmit}>
            <label htmlFor="username" className="block text-center uppercase">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              className="block border border-black w-full px-2 py-1"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="password" className="block text-center uppercase">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="block border border-black w-full px-2 py-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <p className="text-red-600 text-center text-sm mt-2 min-h-5">{error}</p>

            <button
              type="submit"
              disabled={loading}
              className="block text-center w-full mt-3 p-1 bg-black text-white rounded-2xl hover:opacity-60 cursor-pointer disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </form>

          <div className="my-3 text-center text-sm text-gray-500">atau</div>

          <button
            type="button"
            onClick={() => signIn('google', { callbackUrl: '/admin' })}
            className="block w-full p-1 border border-black rounded-2xl hover:opacity-60 cursor-pointer"
          >
            Login dengan Google
          </button>
        </div>
      </div>
    </div>
  )
}

export default Page