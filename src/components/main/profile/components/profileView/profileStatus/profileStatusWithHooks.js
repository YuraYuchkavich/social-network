import React, {useState,useEffect} from 'react';

const ProfileStatusWithHooks = (props) =>{


    let [editMode, setEditMode] = useState(false);
    let [status, setSatus] = useState(props.status);

    useEffect(() => {
        setSatus(props.status);
    },[props.status])
    const activateMode = () =>{
        setEditMode(true);
    }
    const deactivateEditMode = () =>{
        setEditMode(false);
        debugger;
        props.updateStatus(status)
    }

    const onStatusChange = (e) => {
        setSatus(e.currentTarget.value)
    }
    debugger;
    return( 
            <div>
                {!editMode && 
                    <div>
                        <span onDoubleClick={activateMode}>{props.status}</span>
                    </div> 
                }
                {editMode &&    
                    <div>
                        <input autoFocus={true} onBlur = {deactivateEditMode} onChange = {onStatusChange} value = {status}/>
                    </div>
                }
            </div>
        )
    
}

export default ProfileStatusWithHooks;