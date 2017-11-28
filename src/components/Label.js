import React from 'react'

/*
*   Label component
*   htmlFor - id of target component to be labeled
*   children - any component under label (e.g. text for label)
*/
const Label = ({ htmlFor, title }) => ( 
  <label htmlFor={ htmlFor }>{ title }</label>
)

export default Label