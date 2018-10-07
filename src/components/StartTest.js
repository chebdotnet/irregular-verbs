import React, {Component} from 'react';

export default class StartTest extends Component {

  render(){
    return (
        <div className="mt-3">
          <a className="btn btn-primary" role="button" onClick={this.startTest} >Start test &raquo;</a>
        </div>
      );
  }

  startTest = () => {
    this.props.updateData(false);
  }

}
