import { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);

    this.setError = this.props.setError;
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit} className="form">
        {this.props.children}
        <div className="error text-danger">{this.props.error}</div>
      </form>
    )
  }
}

// const Form = (FormContent) => {

//     return <FormContent />
// }

export default Form;
