import React from 'react'
import ReactDOM from 'react-dom'

interface Props {
  children: React.ReactNode
  wrapperId: string
}

const ReactPortal = ({ children, wrapperId }: Props): React.ReactPortal => {
  return ReactDOM.createPortal(children, document.getElementById(wrapperId)!)
}

export default ReactPortal
