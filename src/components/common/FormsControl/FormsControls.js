import React from 'react';
import styles from './FormControls.module.css';




export const FormControl= ({input,meta,child, ...props}) => {
    
    let hasError =  meta.touched && meta.error;
    
        return (
        <div className={styles.formControl + " " +  (hasError ? styles.error : "") }>
            <div>
              {props.children}
            </div>
                { hasError && <span>{meta.error}</span>}

        </div>
    )
}



export const TextArea = (props) => {
    const {input,meta,child, ...restProps} = props;
    return (
       <FormControl {...props} ><textarea {...restProps} {...input} {...meta}/></FormControl>
    )
}


export const Input = (props) => {
    const {input,meta,child, ...restProps} = props;
    return (
        <FormControl {...props} ><input {...restProps} {...input} {...meta}/></FormControl>
    )
 
}