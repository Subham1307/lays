'use client'

import { useState } from 'react'
import { Plus, Minus, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartContext } from '../context/cartContext'

export function AddToCartButton() {
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCartContext()

  const handleAddToCart = () => {
    addToCart({
      id: 'blue-lays',
      name: 'Blue Lays Chips',
      price: 99,
      quantity,
    })
    setQuantity(1) 
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="flex items-center border border-gray-300 rounded-md">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
          aria-label="Decrease quantity"
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span className="w-12 text-center" aria-label="Quantity">
          {quantity}
        </span>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setQuantity(quantity + 1)}
          aria-label="Increase quantity"
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button 
        onClick={handleAddToCart}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200 flex items-center gap-2"
      >
        <ShoppingCart className="h-5 w-5" />
        Add to Cart
      </Button>
    </div>
  )
}

