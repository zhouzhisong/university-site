// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"; // 路由容器

import './index.css'
import App from './App.tsx'

// 引入slick样式
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
     <BrowserRouter>
      <App />
    </BrowserRouter>
  // </StrictMode>,
)
