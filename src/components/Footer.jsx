import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
           <div className="logo">
              <img src="/favicon.svg" alt="Perplexity Logo" className="logo-img" />
                 <span>Perplexity</span>
            </div>

          <p>Where knowledge begins.</p>
          <p>AI-powered answer engine.</p>
        </div>

        <div className="footer-section">
          <h3>Product</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Discover</a></li>
            <li><a href="/">Library</a></li>
            <li><a href="/">Collections</a></li>
            <li><a href="/">Pro</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Company</h3>
          <ul>
            <li><a href="/">About</a></li>
            <li><a href="/">Blog</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Privacy</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><a href="/">Help Center</a></li>
            <li><a href="/">Terms</a></li>
            <li><a href="/">Contact</a></li>
            <li><a href="/">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Subscribe to our Newsletter</h3>
          <p>Get the latest updates and tips from Perplexity.</p>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>Subscribe</button>
        </div>

      </div>

      <div className="social-icons">
        <a href="/">Facebook</a>
        <a href="/">X</a>
        <a href="/">Instagram</a>
        <a href="/">LinkedIn</a>
        <a href="/">GitHub</a>
      </div>

      <div className="copyright">
        © 2026 Perplexity Clone | Developed by TECH TITANS
      </div>
    </footer>
  );
}

export default Footer;