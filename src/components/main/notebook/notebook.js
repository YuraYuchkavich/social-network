import React from 'react';

import './notebook.css';
import Sticker from './components/sticker/sticker';

class Notebook extends React.Component {

render(){
    return (
        <div className = "Notebook">
            <Sticker name ="Main" id ="1"/>
        </div>
    )
}

}

export default Notebook;
 