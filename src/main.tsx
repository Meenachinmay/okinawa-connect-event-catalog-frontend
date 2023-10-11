import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ContextWrapper from './__context__/ContextWrapper.tsx'

import { RecoilRoot } from 'recoil'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <ContextWrapper>
          <App />
        </ContextWrapper>
      </BrowserRouter>
    </RecoilRoot>
  </React.StrictMode>,
)
