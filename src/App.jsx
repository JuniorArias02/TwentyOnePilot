import Hero from './components/Hero'
import Message from './components/Message'
import Experience from './components/Experience'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-clancy-dark min-h-screen text-gray-200 font-sans font-light selection:bg-clancy-red selection:text-white pb-10 overflow-hidden relative">
      <Hero />
      <Message />
      <Experience />
      <CTA />
    </div>
  )
}

export default App
