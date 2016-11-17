import React from 'react'
import { connect } from 'react-redux'
import SnippetListContainer from './SnippetListContainer'
import Snippet from '../components/Snippet'

const App = ({snippet}) => (
  <div>
    <h2>Snippets</h2>
    <hr/>
    <div className="col-sm-4">
        <SnippetListContainer />
    </div>
    <div className="col-sm-8">
        <Snippet snippet={snippet}/>
    </div>
  </div>
)

const mapStateToProps = state => ({
    snippet: state.snippet
})

export default connect(mapStateToProps)(App)
