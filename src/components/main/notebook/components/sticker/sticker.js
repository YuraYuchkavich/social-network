import React from 'react';

import './sticker.css';


class Sticker extends React.Component {
      
render(){
    return (
        <div className = "Sticker">
            {this.props.name}
        </div>
    )
}

}

export default Sticker;
