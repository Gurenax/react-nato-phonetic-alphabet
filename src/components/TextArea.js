import React from 'react'

/*
*  TextArea component
*  id - name of the text area
*  rows - number of rows
*  placeholder - placeholder description
*/
const TextArea = ({ id, rows='3', placeholder, value, readOnly=false, onTextChange }) => ( 
  <textarea
    className="form-control"
    id={ id }
    rows={ rows }
    placeholder={ placeholder }
    value={ value }
    readOnly={ readOnly }
    onChange={ (event) => {
      // if onTextChange attribute is present, perform event
      onTextChange && onTextChange(event.target.value)
    }}/>
)

export default TextArea