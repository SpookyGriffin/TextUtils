import React from 'react';

function Alert(props) {
    const capitalize = (word)=>{
        let temp = word.replace(/\s+/g, ' ').trim().toLowerCase();
        return temp.charAt(0).toUpperCase() + temp.slice(1);
    }
  return (
    props.alert && <div class={`alert alert-${props.alert.type} d-flex align-items-center py-2`} id='alertMSG' role="alert">
        <i class="fa-solid fa-circle-check me-1"></i>
        <div>
            <strong>{capitalize(props.alert.type)}</strong> : {props.alert.msg}
        </div>
  </div>
  );
}

export default Alert;
