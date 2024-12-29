import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Thanks for your money</h1>
        <p className="mb-6">Forget about your lays</p>
        <Link href="/">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200">
            Return to Home
          </Button>
        </Link>
      </div>
    </div>
  )
}

