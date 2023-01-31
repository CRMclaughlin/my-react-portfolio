import { useState } from 'react';
import Navbar from './components/navbar'
import HomePage from './pages/home'
import PortfolioPage from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/Resume';
import Footer from './components/Footer'

function App() {
    const [view, setView] = useState('home')

    const renderView = () => {
        if (view === 'home') {
            return <HomePage />
        } else if (view === 'portfolio') {
            return <PortfolioPage />
        } else if (view === 'contact') {
            return <Contact />
        } else if (view === 'resume') {
            return <Resume />
        } else {
            return 'No Matching view found!'
        }
    }

    return (
        <>
            <Navbar
            view={view}
            setView={setView}
            />
            { renderView() }  
            <Footer
            view={view}
            setView={setView}
            />
        </>
    )
}

export default App;
