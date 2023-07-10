import { HiOutlineShoppingCart } from "react-icons/hi";

export default function Home() {
  return (
    <main className='product-wrapper'>
      <div className='image-wrapper'>
        <img src='./image-product-desktop.jpg'></img>
      </div>
      <div className='product-details'>
        <p className='perfume'>PERFUME</p>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p className="description">A floral, solar and voluptuous interpretation composed by Olivier Polge, 
  Perfumer-Creator for the House of CHANEL.</p>
        <div className='price-container'>
          <h1>$149.99</h1>
          <p className="price-before">$169.99</p>
        </div>
        <button className='cart-button'>
          <HiOutlineShoppingCart/>
          Add to Cart
        </button>
      </div>
    </main>
  )
}
