import React from 'react';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';
import { Link } from 'react-router';

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <Header />
        </header>

        <main className="content">
          About, blah, blah,blah
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default About;
