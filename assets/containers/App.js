import React from 'react'
import { connect } from 'react-redux'
import SnippetListContainer from './SnippetListContainer'
import Snippet from '../components/Snippet'
import SnippetForm from '../components/SnippetForm'

const App = ({snippet}) => (
  <div className="row">
    <h2>Snippets</h2>
    <hr/>
    <div className="col-sm-4">
        <SnippetListContainer />
    </div>
    <div className="col-sm-8">
        <Snippet snippet={snippet}/>
    </div>
    <div className="col-sm-12">
        <h2>New snippet</h2>
        <SnippetForm/>
    </div>
  </div>
)

const mapStateToProps = state => ({
    snippet: state.snippet
})

export default connect(mapStateToProps)(App)
