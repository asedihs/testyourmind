import React from 'react';
import Footer from '../components/footer.jsx';
import { Link } from 'react-router';

class Welcome extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header">
        </header>
        <nav className="navigation">
        </nav>
        <main className="content">
          <img src="./images/brain.jpg" alt="picture of a brain" className="welcomePic" />
          <p>Welcome to the TestYourBrain.com, here you can test the power of your brain. Are yu ready? Let's go!</p>
          <Link to="/main"><button className="welcomeButton">Continue to the site -></button></Link>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Welcome;
