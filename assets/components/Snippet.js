import React from 'react'

const Snippet = ({snippet}) => {
    if(snippet.title)
        return (
          <div>
            <h3>
              { snippet.title }
              <small> {snippet.owner}</small>
              <span className="badge">{snippet.language}</span>
            </h3>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe src={snippet.highlight}></iframe>
            </div>
          </div>
        )
    else
        return (
          <div>
          <i className="glyphicon glyphicon-arrow-left"></i> Select a snippet
          </div>
        )
}

export default Snippet
