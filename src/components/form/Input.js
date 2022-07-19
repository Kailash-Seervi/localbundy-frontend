import React from "react";

function Input({id, label, type, placeholder, required=false, autoFocus=false, name, onChange}){

    return (
        <div className="form-group mb-3">
            <label>{label}</label>
            <input 
                id={id} 
                type={type} 
                name={name} 
                placeholder={placeholder} 
                required={required} 
                autoFocus={autoFocus} 
                className="form-control" 
                style={{height:"50px"}} 
                onChange={onChange}/>
        </div>
    )
}

export default Input