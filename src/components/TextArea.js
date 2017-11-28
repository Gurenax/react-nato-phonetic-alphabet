import React from 'react'

/*
*  TextArea component
*  id - name of the text area
*  rows - number of rows
*  placeholder - placeholder description
*/
const TextArea = ({ id, rows='3', placeholder, value }) => ( 
  <textarea className="form-control" id={ id } rows={ rows } placeholder={ placeholder } value={ value } />
)

export default TextArea