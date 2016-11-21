import 'isomorphic-fetch'
import * as Cookies from "js-cookie";

export const SHOW_SNIPPETS = 'SHOW_SNIPPETS'
export const FILTER_LANGUAGE = 'FILTER_LANGUAGE'
export const SHOW_DETAIL_SNIPPET = 'SHOW_DETAIL_SNIPPET'
const endpoint = '/api/v1'


function showSnippets(snippets) {
    return {
        type: SHOW_SNIPPETS,
        snippets
    }
}

export function filterLanguage(language) {
    return {
        type: FILTER_LANGUAGE,
        language
    }
}


export function selectSnippet(snippet) {
    return {
        type: SHOW_DETAIL_SNIPPET,
        snippet
    }
}

export function saveSnippet(snippet) {
    return function (dispatch) {
        fetch(endpoint + '/snippets/', {
            method:'POST',
            body: JSON.stringify(snippet),
            credentials: "same-origin",
            headers: {
                "X-CSRFToken": Cookies.get('csrftoken'),
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
        })
        .then(response => response.json())
        .then(json => dispatch(getAllSnippets()))
    }
}

export function getAllSnippets() {
    return function (dispatch) {
        fetch(endpoint + '/snippets/')
            .then(response => response.json())
            .then(json => dispatch(showSnippets(json.results)))
    }
}
