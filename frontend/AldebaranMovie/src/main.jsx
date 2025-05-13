import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { FavouritesProvider } from './context/FavouritesContext.jsx'
import { WatchlistProvider } from './context/WatchlistContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FavouritesProvider>
      <WatchlistProvider>
        <App />
      </WatchlistProvider>
    </FavouritesProvider>
  </StrictMode>
)
