import React from 'react'

const SnippetItem = ({snippet, onSnippetClick}) => {
    return (
        <button onClick={onSnippetClick} className="list-group-item">
            {snippet.title}
            <span className="badge">{ snippet.language }</span>
        </button>
    )
}

export default SnippetItem
