import type { Metadata } from 'next'
import Home from '@/components/screens/home/home'

export const metadata: Metadata = {
  title: 'Home page',
  description: 'Description',
}

export default function HomePage() {
  return <Home />
}
