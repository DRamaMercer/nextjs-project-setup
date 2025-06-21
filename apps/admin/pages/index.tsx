import { useEffect, useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import type { NextPage } from 'next'
import type { Session } from '@supabase/supabase-js'
import { Button, Card, Table, Tabs, Tab } from '../../../packages/ui'

interface User {
  id: string
  email: string
  created_at: string
}

const Home: NextPage = () => {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('overview')
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession()
      setSession(session)
      setLoading(false)
    }
    getSession()

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (session) {
      fetchUsers()
    }
  }, [session])

  const fetchUsers = async () => {
    const { data, error } = await supabase.from('users').select('*')
    if (!error && data) {
      setUsers(data as User[])
    }
  }

  const signIn = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'github' })
  }

  const signOut = async () => {
    await supabase.auth.signOut()
  }

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold mb-4">Admin Dashboard Login</h1>
        <Button onClick={signIn}>Sign in with GitHub</Button>
      </div>
    )
  }

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Admin Dashboard</h1>
      <Button onClick={signOut} className="mb-6">
        Sign Out
      </Button>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <Tab value="overview" label="Overview" />
        <Tab value="users" label="Users" />
      </Tabs>

      {activeTab === 'overview' && (
        <Card className="mt-6 p-6">
          <h2 className="text-2xl font-semibold mb-4">Dashboard Overview</h2>
          <p>Summary and key metrics will be displayed here.</p>
        </Card>
      )}

      {activeTab === 'users' && (
        <Card className="mt-6 p-6">
          <h2 className="text-2xl font-semibold mb-4">User Management</h2>
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Email</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.email}</td>
                  <td>{new Date(user.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      )}
    </div>
  )
}

export default Home
