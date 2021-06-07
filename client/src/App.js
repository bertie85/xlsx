import { Component } from 'react';
// import { connect } from 'react-redux';
// import { useSelector, useDispatch } from 'react-redux'
import Header from './layout/header/';
import Main from './layout/main/';
// import Footer from './layout/footer/';


import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      counter: 0,
    }
  }

  decrement = () => {
    // this.setState({ counter: --this.state.counter });
    this.props.dispatch({ type: 'INCREMENT' });
  }

  increment = () => {
    // this.setState({ counter: ++this.state.counter });
    this.props.dispatch({ type: 'DECREMENT' });
  }

  componentDidMount() {
    console.log('counter:', this.state.counter)
  }

  render() {
    return (
      <>
        <Header />
        {/* <div>
          <button onClick={this.decrement}>-</button>
          <button onClick={this.increment}>+</button>
          <div>{this.state.counter}</div>
        </div> */}

        <Main />

        {/* <Footer /> */}
      </>
    );
  }
}


// const mapStateToProps = (state) => {
//   return {
//     count: state.count
//   };
// }


export default App;
