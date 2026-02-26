import Hero from './components/Hero'
import Message from './components/Message'
import Experience from './components/Experience'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-clancy-dark min-h-screen text-clancy-paper font-sans font-light selection:bg-clancy-yellow selection:text-black pb-10 overflow-hidden relative bg-grain">
      <Hero />
      <Message />
      <Experience />
      <CTA />
    </div>
  )
}

export default App
