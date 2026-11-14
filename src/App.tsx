import { BrowserRouter } from 'react-router-dom'
import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Experience } from './components/sections/Experience'
import { Skills } from './components/sections/Skills'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import './styles/globals.css'

export default function App() {
  return <BrowserRouter><a className="skip-link" href="#main">Skip to content</a><Header /><main id="main"><Hero /><About /><Skills /><Experience /><Projects /><Contact /></main><Footer /></BrowserRouter>
}
