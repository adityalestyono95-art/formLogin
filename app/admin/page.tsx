import { auth, signOut } from '@/auth'
import { isAdmin } from '@/lib/admin'
import { redirect } from 'next/navigation'

export default async function AdminPage() {
  const session = await auth()

  if (!session?.user) {
    redirect('/login')
  }

 
  if (!isAdmin(session.user.email)) {
    redirect('/')
  }

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Halaman Admin</h1>
      <p>Selamat datang, {session.user.name}</p>

      <form
        action={async () => {
          'use server'
          await signOut({ redirectTo: '/login' })
        }}
      >
        <button type="submit" className="mt-3 underline cursor-pointer">
          Logout
        </button>
      </form>
    </div>
  )
}