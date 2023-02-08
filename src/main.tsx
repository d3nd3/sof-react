import React from 'react'
import ReactDOM from 'react-dom/client'
import {QueryClient,QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import App from './App'
import './index.css'


// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  </React.StrictMode>,
)
