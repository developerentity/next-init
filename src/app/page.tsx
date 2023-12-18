import type { Metadata } from 'next'
import Home from '@/components/screens/Home'

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Description',
}

export default function HomePage() {
  return <Home />
}
