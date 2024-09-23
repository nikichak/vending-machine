import VendingMachine from './components/vending_machine'
import { fetchProducts } from './lib/api'

export default async function VendingMachineLandingPage() {
  const products = await fetchProducts()

  return <VendingMachine initialProducts={products} />
}
