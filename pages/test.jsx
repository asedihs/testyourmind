import React from 'react';
import Footer from '../components/footer.jsx';
import Header from '../components/header.jsx';
import { Link } from 'react-router';

class Test extends React.Component {
  constructor() {
    super();

    this.state = {
      ans1: 'w1',
      res1: '',
      ans2: 'w2',
      res2: '',
      ans3: 'w3',
      res3: '',
      ans4: 'w4',
      res4: '',
      ans5: 'w5',
      res5: '',
      answered: 0
    }
  }

  clickedOption1(e) {
    this.setState({res1: e.target.value});
  }

  clickedOption2(e) {
    this.setState({res2: e.target.value});
  }

  clickedOption3(e) {
    this.setState({res3: e.target.value});
  }

  clickedOption4(e) {
    this.setState({res4: e.target.value});
  }

  clickedOption5(e) {
    this.setState({res5: e.target.value});
  }

  answeredd() {
    if (this.state.ans1 == this.state.res1) {
      this.setState({answered: this.state.answered+1});
    }
    if (this.state.ans2 == this.state.res2) {
      this.setState({answered: this.state.answered+1});
    }
    if (this.state.ans3 == this.state.res3) {
      this.setState({answered: this.state.answered+1});
    }
    if (this.state.ans4 == this.state.res4) {
      this.setState({answered: this.state.answered+1});
    }
    if (this.state.ans5 == this.state.res5) {
      this.setState({answered: this.state.answered+1});
    }
    callback(showResult);
  }

  showResult() {
    alert(this.state.answered);
  }

  render() {
    return (
      <div className="container">
        <header className="header">
          <Header />
        </header>
        <main className="content">
          <form>
            <div className="question">
              <span>1. What is the capital city of USA?</span>
              <fieldset id="q1">
                <ol>
                  <li><input type="radio" value="w1" id="w1" name="q1" onClick={ this.clickedOption1.bind(this) } />Washington</li>
                  <li><input type="radio" value="f1" id="f1" name="q1" />Florida</li>
                  <li><input type="radio" value="n1" id="n1" name="q1" />New York</li>
                  <li><input type="radio" value="m1" id="m1" name="q1" />Moscow</li>
                </ol>
              </fieldset>
            </div>
            <div className="question">
              <span>2. What is the capital city of USA?</span>
              <fieldset id="q2">
                <ol>
                  <li><input type="radio" value="w2" id="w2" name="q2" onClick={ this.clickedOption2.bind(this) } />Washington</li>
                  <li><input type="radio" value="f2" id="f2" name="q2" />Florida</li>
                  <li><input type="radio" value="n2" id="n2" name="q2" />New York</li>
                  <li><input type="radio" value="m3" id="m3" name="q2" />Moscow</li>
                </ol>
              </fieldset>
            </div>
            <div className="question">
              <span>3. What is the capital city of USA?</span>
              <fieldset id="q3">
                <ol>
                  <li><input type="radio" value="w3" id="w3" name="q3" onClick={ this.clickedOption3.bind(this) } />Washington</li>
                  <li><input type="radio" value="f3" id="f3" name="q3" />Florida</li>
                  <li><input type="radio" value="n3" id="n3" name="q3" />New York</li>
                  <li><input type="radio" value="m3" id="m3" name="q3" />Moscow</li>
                </ol>
              </fieldset>
            </div>
            <div className="question">
              <span>4. What is the capital city of USA?</span>
              <fieldset id="q4">
                <ol>
                  <li><input type="radio" value="w4" id="w4" name="q4" onClick={ this.clickedOption4.bind(this) } />Washington</li>
                  <li><input type="radio" value="f4" id="f4" name="q4" />Florida</li>
                  <li><input type="radio" value="n4" id="n4" name="q4" />New York</li>
                  <li><input type="radio" value="m4" id="m4" name="q4" />Moscow</li>
                </ol>
              </fieldset>
            </div>
            <div className="question">
              <span>5. What is the capital city of USA?</span>
              <fieldset id="q5">
                <ol>
                  <li><input type="radio" value="w5" id="w5" name="q5" onClick={ this.clickedOption5.bind(this) } />Washington</li>
                  <li><input type="radio" value="f5" id="f5" name="q5" />Florida</li>
                  <li><input type="radio" value="n5" id="n5" name="q5" />New York</li>
                  <li><input type="radio" value="m5" id="m5" name="q5" />Moscow</li>
                </ol>
              </fieldset>
            </div>
            <a onClick={ this.answeredd.bind(this) }>Ready</a>
          </form>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default Test;
