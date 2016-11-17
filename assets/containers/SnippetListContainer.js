import React from 'react'
import { connect } from 'react-redux'
import SnippetList from '../components/SnippetList'
import SnippetItem from '../components/SnippetItem'
import {selectSnippet} from '../actions'
import LanguageFilter from './LanguageFilter'


function getVisibleSnippets(snippets, filter) {
    if (filter == "") {
        return snippets
    } else {
        return snippets.filter(snippet => snippet.language == filter)
    }
}

const SnippetListContainer = ({snippets, filter, selectSnippet}) => {
    function renderItems(snippets) {
        let visible = getVisibleSnippets(snippets, filter)
        return visible.map(snippet =>
            <SnippetItem key={snippet.id}
                         onSnippetClick={()=>selectSnippet(snippet)}
                         snippet={snippet}/>
        )
    }

    return (
      <div>
        <SnippetList>
          { renderItems(snippets) }
        </SnippetList>
        <LanguageFilter/>
      </div>
    )
}

const mapStateToProps = state => ({
    snippets: state.snippets,
    filter: state.filter
})

export default connect(mapStateToProps, {selectSnippet})(SnippetListContainer)
