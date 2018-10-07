import React, {PureComponent} from 'react';
import verbs from '../verbs'

var _ = require('underscore');

export default class VerbTest extends PureComponent {

  constructor(props) {
    super(props)
    let snuffledVerbs = _.shuffle(verbs)
    this.state = {
     verb: snuffledVerbs.pop(),
     base: "",
     past: "",
     perfect: ""
    }
    var VerbsTypes = Object.freeze({"BASE":1, "PAST":2, "PERFECT":3})
    var verbType = _.sample(VerbsTypes);
  }

  render(){
    return (
          <div>
            <p className="lead mx-auto w100">{this.state.verb.description}</p>
            <form>
              <div className="form-row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="Base form" onChange={this.updateBaseFormInputValue} />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Past form" />
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Perfect form" />
                </div>
              </div>
              <div className="mt-3">
                <a className="btn btn-primary" role="button" onClick={this.nextStep} >Next step &raquo;</a>
              </div>
            </form>
          </div>

    )
  }

  updateBaseFormInputValue = (e) => {
    this.setState({
      base: e.target.value
    });
  }

  updatePastFormInputValue = (e) => {
    this.setState({
      past: e.target.value
    });
  }

  updatePerfectFormInputValue = (e) => {
    this.setState({
      perfect: e.target.value
    });
  }

  nextStep = () => {
    this.setState({

    });
  }


}
