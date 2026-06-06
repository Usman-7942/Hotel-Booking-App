import React from "react";


export default function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">DevStudio</div>
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="hero">
        <h1>Build Modern Dark Websites</h1>
        <p>
          A professional React.js dark theme website template with clean UI,
          smooth layout and modern design.
        </p>
        <button className="btn">Get Started</button>
      </section>

      {/* Services */}
      <section id="services" className="section">
        <h2>Services</h2>
        <div className="grid">
          <div className="card">
            <h3>Web Development</h3>
            <p>Modern responsive websites using React.js and CSS.</p>
          </div>
          <div className="card">
            <h3>UI/UX Design</h3>
            <p>Clean and user-friendly interface design systems.</p>
          </div>
          <div className="card">
            <h3>Performance</h3>
            <p>Optimized fast-loading and scalable applications.</p>
          </div>
        </div>
      </section>
        {/* Projects */}
      <section id="projects" className="section dark-alt">
        <h2>Projects</h2>
        <div className="grid">
          <div className="card">Portfolio Website</div>
          <div className="card">E-commerce UI</div>
          <div className="card">Dashboard App</div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2>About Us</h2>
        <p className="center-text">
          We build high-quality frontend applications using React.js,
          focusing on performance, design and user experience.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="section dark-alt">
        <h2>Contact</h2>
        <form className="form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button className="btn">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 DevStudio. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
