import React from 'react'
import { connect } from 'react-redux'
import { saveSnippet } from '../actions'

class SnippetForm extends React.Component {

    handleSubmit(e){
        e.preventDefault()
        const { code, title, linenos } = this.refs
        const snippet = {
            title: title.value,
            code: code.value,
            linenos: linenos.value == 'on',
        }
        this.props.dispatch(saveSnippet(snippet))
        e.target.reset()
    }
    render() {
      return (
        <div>
          <form className='form' onSubmit={this.handleSubmit.bind(this)}>
            <div className='form-group'>
              <input className="form-control" ref="title" placeholder='title' />
            </div>
            <div className='form-group'>
              <textarea className="form-control" ref="code" placeholder='code'></textarea>
            </div>
            <div className='form-group'>
              <label><input type='checkbox' ref="linenos"/> Linenos</label>
            </div>
            <div className='form-group'>
              <select className="form-control" ref='language'></select>
            </div>
            <div className='form-group'>
              <select className="form-control" ref='style'></select>
            </div>
            <button className='btn btn-primary'>Submit</button>
          </form>
        </div>
      )
    }
}

export default connect()(SnippetForm)