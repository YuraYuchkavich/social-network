import React from 'react';
import Moment from 'react-moment';
import moment from 'moment'
import timezone from 'moment-timezone'
import 'moment/locale/ru';
import 'moment/locale/be';
import 'moment/locale/en-gb';
import './clock.css';





class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           date:moment().zone(this.props.state.timezone)
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date:moment().zone(this.props.state.timezone)
        });
      }
    

render(){


    return (
        
            <div className = "Clock">
                {this.props.state.timezone != null ? <Moment format='MMMM Do YYYY, h:mm:ss a' locale ={this.props.state.lang}>{this.state.date}</Moment> :  <div></div>}
            
            </div>
    
    )
}
}

export default Clock;
