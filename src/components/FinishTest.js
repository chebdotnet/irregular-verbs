import React, {Component} from 'react';

export default class FinishTest extends Component {

  render(){
    return (
        <div className="mt-3">
          <a className="btn btn-primary" role="button" onClick={this.finishTest} >Finish test &raquo;</a>
        </div>
      );
  }

  finishTest = () => {
    this.props.updateData(true);
  }

}
