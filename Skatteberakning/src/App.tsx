import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './features/start/components/Home'
import Layout from './features/layout/Layout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
