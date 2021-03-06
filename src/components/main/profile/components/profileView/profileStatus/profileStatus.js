import React from 'react';

class ProfileStatus extends React.Component {
    
    
    state = {
        editMode:false
    }
    
    activateEditMode = () =>{
        debugger;
    this.setState({
        editMode:true
    })
    }
    deactivateEditMode = () =>{
        debugger;
        this.setState({
            editMode:false
        })
        }
    
    render(){
        return( 
            <div>
                { !this.state.editMode ? 
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div> :
                    <div>
                        <input autoFocus={true} onBlur = {this.deactivateEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;