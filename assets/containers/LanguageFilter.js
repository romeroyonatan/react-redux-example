import React from 'react'
import { connect } from 'react-redux'
import Link from '../components/Link'
import { filterLanguage } from '../actions'

const LanguageFilter = ({languages, filterLanguage}) => (
    <div className="btn-toolbar">
        <div className="btn-group">
            <Link onClick={() => filterLanguage("")}>Reset</Link>
        </div>
        <div className="btn-group">
            {languages.map(language =>
              <Link key={language} onClick={() => filterLanguage(language)}>
                {language}
              </Link>
            )}
        </div>
    </div>
)

const mapStateToProps = state => ({
    languages: state.languages
})

export default connect(mapStateToProps, {filterLanguage})(LanguageFilter)
