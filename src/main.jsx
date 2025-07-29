import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ProductProvider } from './context/ProductContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'
import { LoaderProvider } from './context/LoaderContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<LoaderProvider>
    <ProductProvider>
      <CartProvider>
        <SearchProvider>
          <App />
        </SearchProvider>
      </CartProvider>
    </ProductProvider>
    </LoaderProvider>
  </StrictMode>,
)
