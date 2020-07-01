import React from 'react'
import { connect } from 'react-redux'
import { fetchSearchResults } from '../actions/action'


class Form extends React.Component {

  state = {
    searchTerm: [],
  }

  handleChange = (event) => {
    this.setState({
        searchTerm: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.searchTerm)
    this.props.dispatch(fetchSearchResults(this.state.searchTerm))
  }

  render() {

    return<div>
        <form onSubmit={this.handleSubmit}>
            <label>
                <input type='radio' name='name' value='easy' onChange={this.handleChange}/>
                Easy
            </label>
            <label>
                <input type='radio' name='name' value='medium' onChange={this.handleChange}/>
                Medium
            </label>
            <label>
                <input type='radio' name='name' value='hard' onChange={this.handleChange}/>
                Hard
            </label>
            <input type='submit' value='Search'/>
        </form>
    </div> 
  }
}


function mapStateToProps(globalState) {
  return {
    searchedWalk: globalState.searchedWalk,
  }
}

export default connect(mapStateToProps)(Form)




