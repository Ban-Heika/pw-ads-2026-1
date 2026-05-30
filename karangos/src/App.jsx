// import './App.css'
import { BrowserRouter } from 'react-router-dom'
import HeaderBar from './ui/HeaderBar'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import theme from './ui/theme'
import FooterBar from './ui/FooterBar'
import AppRoutes from './routes/AppRoutes'
import Box from '@mui/material/Box'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <Box sx={{ m: '48px 24px' }}>
      <p>Erro ao carregar os dados: {error.message}</p>
      <button onClick={resetErrorBoundary}>Tentar novamente</button>
    </Box>
  )
}

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <HeaderBar />

          {/* Dentro da prop "sx", "m" significa "margin" */}
          <Box id="innerRoot" sx={{ m: '48px 24px' }}>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<p>Carregando...</p>}>
              <AppRoutes />
            </Suspense>
          </ErrorBoundary>
        </Box>

          <FooterBar />
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App