import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

const createButton = ({text}) => {
  return(
    <button> {text} </button>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(
  <React.Fragment>
    {createButton({ text: 'Button 1'})}
    {createButton({ text: 'Button 1'})}
  </React.Fragment>
  
)
