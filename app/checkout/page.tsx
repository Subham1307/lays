'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useCartContext } from '../context/cartContext'
import Image from 'next/image'

export default function PaymentPage() {
  const router = useRouter()
  const { cart, clearCart } = useCartContext()

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handlePaymentConfirmation = () => {
    clearCart()
    router.push('/hehe')
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Complete Your Payment</h1>
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 max-w-2xl mx-auto">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
            <ul className="space-y-2">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>{item.name} x {item.quantity}</span>
                  <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <div className="bg-gray-200 w-64 h-64 mx-auto rounded-lg flex items-center justify-center">
            <Image
        src="/qr.jpg"
        alt="QR Code"
        width={500}  // Replace with actual width
        height={500} // Replace with actual height
      />
            </div>
          </div>
          <Button 
            onClick={handlePaymentConfirmation} 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Confirm Payment
          </Button>
        </div>
      </div>
    </div>
  )
}

