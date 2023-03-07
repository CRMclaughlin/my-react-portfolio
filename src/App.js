import { useState } from 'react';

import Particle from './components/Paritcles';
import Navigation from './components/Navigation'
import HomePage from './pages/home'
import Portfolio from './pages/portfolio';
import Contact from './pages/contact';
import Resume from './pages/Resume';
import Footer from './components/Footer'

function App() {
    const [view, setView] = useState('home')

    const renderView = () => {
        if (view === 'home') {
            return <HomePage />
        } else if (view === 'portfolio') {
            return <Portfolio />
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
        <Particle />
            <Navigation
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
