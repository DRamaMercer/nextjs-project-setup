import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { useState, useEffect } from 'react'
import type { Session } from '@supabase/supabase-js'
import { supabase } from '../utils/supabaseClient'

function MyApp({ Component, pageProps }: AppProps<{ initialSession: Session }>) {
  const [session, setSession] = useState<Session | null>(pageProps.initialSession)

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event: string, session: Session | null) => {
        setSession(session)
      }
    )
    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
