import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';


class SearchWidget extends Component {
  // constructor(props) {
  //   super(props);

  //   this.textInputHandler = this.textInputHandler.bind(this);
  // }

  inputHandler(e) {
    const { onChange } = this.props;
    onChange(e.target.value);
  }

  render() {
    const { placeholder } = this.props;
    return (
      <Row>
        <input className="form-control py-2 border" width="500" id="search" type="text" placeholder={placeholder} value="" onChange={this.inputHandler} />
      </Row>
    );
  }
}
export default SearchWidget;
