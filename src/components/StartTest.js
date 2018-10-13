import React, {Component} from 'react';

export default class StartTest extends Component {

  render(){
    return (
      <div className="mt-3">
        <div className="dropdown">
          <button onClick={this.toggleDropdown} className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Choose your level and start the test
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a role="button" className="dropdown-item" onClick={this.startTest.bind(this, 0)}>Level 0</a>
            <a role="button" className="dropdown-item" onClick={this.startTest.bind(this, 1)}>Level 1</a>
            <a role="button" className="dropdown-item" onClick={this.startTest.bind(this, 2)}>Level 2</a>
          </div>
        </div>
      </div>
    )

  }

  toggleDropdown = (e) => {
    var elem = e.target.nextElementSibling.classList;
    elem.contains('show') ? elem.remove('show') : elem.add('show');
  };

  startTest = (level) => {
    this.props.startTest(false, level);
  }

}
