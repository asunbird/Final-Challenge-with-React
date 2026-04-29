import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function NoPage() {
    
      return (
        <>
          <section id="center">
            <div className="hero">
              <img src={heroImg} className="base" width="170" height="179" alt="" />
              <img src={reactLogo} className="framework" alt="React logo" />
              <img src={viteLogo} className="vite" alt="Vite logo" />
            </div>
            <div>
              <h1>404 The Page Not Found</h1>
              <p>The page you are looking for does not exist.</p>
            </div>
          </section>
    
          <div className="ticks"></div>
          <section id="spacer"></section>
        </>
    );
}

export default NoPage