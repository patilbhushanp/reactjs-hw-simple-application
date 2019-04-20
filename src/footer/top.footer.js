import React, { Component } from 'react';
import { setInterval } from 'timers';

export class TopFooter extends Component {
    
    constructor() {
        super();
        this.state = {
            currentDate: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.timer(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }

    timer() {
        this.setState({ currentDate: new Date() });
        setInterval(() => this.timer, 1000);
    }

    render() {
        const divStyle = {textAlign:'left', fontSize:'14px', verticalAlign:'middle'};
        const dateDivStyle = {textAlign:'right', fontSize:'14px', verticalAlign:'middle'};
        return (
            <div className="row">
                <div className="col-lg-3" style={divStyle}>
                    Hello {this.props.user.firstName}&nbsp;
                    {this.props.user.lastName},
                </div>
                <div className="col-lg-6">&nbsp;</div>
                <div className="col-lg-3" style={dateDivStyle}>
                    Time: {this.state.currentDate.toLocaleTimeString()}&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        );
    }
}
