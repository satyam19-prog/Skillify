import './LoginPage.css';

export default function LoginPage() {
  return (
    <div className="login-page">
      <header className="header">
        <div className="logo"><a href="./.">SKILLIFY</a></div>
        <nav className="nav-links">
          <a href="./.">HOME</a>
          <a href="/about">ABOUT</a>
          <a href="/services">SERVICES</a>
          <a href="/blog">BLOG</a>
        </nav>
      </header>

      <main className="login-main">
        <h1 className="login-title">LOGIN TO YOUR ACCOUNT</h1>
        <form className="login-form">
          <input type="email" placeholder="EMAIL" required />
          <input type="password" placeholder="PASSWORD" required />
          <div className="login-options">
            <label>
              <input type="checkbox" />
              <span>REMEMBER ME</span>
            </label>
            <a href="#">FORGET PASSWORD?</a>
          </div>
          <button type="submit" className="login-btn">LOG IN</button>
        </form>

        <div className="login-divider">
          <hr /><span>OR</span><hr />
        </div>

        <div className="google-login">
          <a href="https://google.com/">
            <img src="/google.webp" alt="Google"/>
          </a>
        </div>

        <p className="login-note">
          DON'T HAVE AN ACCOUNT? <a href="/signup">SIGN UP</a>
        </p>
      </main>

      <footer className="footer">
        <div className="social-icons">
          <a href="https://twitter.com/">
            <img src="/x.jpg" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.instagram.com">
            <img src="/instagram.webp" alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.youtube.com">
            <img src="/youtube.webp" alt="YouTube" className="social-icon" />
          </a>
          <a href="https://www.linkedin.com">
            <img src="/linkedin.webp" alt="LinkedIn" className="social-icon" />
          </a>
        </div>

        <p className="footer-text">© 2025 SKILLIFY. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}