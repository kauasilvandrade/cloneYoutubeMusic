import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { App } from './App'

import { register } from 'swiper/element/bundle'
register()
import 'swiper/css'
import "swiper/css/scrollbar"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
