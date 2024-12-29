import Image from "next/image"
import {ShoppingCartModal} from "./components/ShoppingCardModal"
import {AddToCartButton} from "./components/AddToCartButton"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Blue Lays Shop</h1>
          <ShoppingCartModal />
        </div>
      </header>

      <main className="container mx-auto p-4">
        <section className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-3xl font-bold mb-4">Can not find Blue Lays ?</h2>
          <p className="text-xl mb-4">We got your back</p>
          <p className="text-lg mb-4">Get your favorite chips from our store!</p>
        </section>

        <section className="bg-white rounded-lg shadow-md p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2">
              <Image
                src="/lays.jpg"
                alt="Blue Lays Chips"
                width={500}
                height={500}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold mb-4">Blue Lays Chips</h2>
              <p className="text-xl font-semibold mb-2">₹99.00</p>
              <p className="mb-4">Enjoy the unique flavor of Blue Lays chips, now available for a limited time!</p>
              <AddToCartButton />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-200 p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2023 Blue Lays Shop. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
