import React from 'react'

const Link = ({onClick, children}) => (
    <button className="btn btn-default text-uppercase" onClick={onClick}>{children}</button>
)

export default Link
