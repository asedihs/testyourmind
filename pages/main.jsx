import React from 'react';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';
import { Link } from 'react-router';
import Test from '../pages/test.jsx'

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <Header />
        </header>

        <main className="content">
          <Link to="/test"><button className="startTest">Let's see the power of your brain! -></button></Link>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Main;
