import { combineReducers } from 'redux'
import { SHOW_SNIPPETS, FILTER_LANGUAGE, SHOW_DETAIL_SNIPPET } from '../actions'


function filter(state="", action){
    switch(action.type) {
        case FILTER_LANGUAGE:
            return action.language
        default:
            return state
    }
}


function snippets(state=[], action) {
    switch(action.type) {
        case SHOW_SNIPPETS:
            return action.snippets.slice()
        default:
            return state
    }
}


function languages(state=[], action) {
    switch(action.type) {
        case SHOW_SNIPPETS:
            let s = new Set(action.snippets.map(snippet => snippet.language))
            let it = s.values();
            return Array.from(it);
        default:
            return state
    }
}


function snippet(state={}, action) {
    switch(action.type) {
        case SHOW_DETAIL_SNIPPET:
            return Object.assign({}, action.snippet)
        default:
            return state
    }
}


export default combineReducers({snippets, languages, filter, snippet})
