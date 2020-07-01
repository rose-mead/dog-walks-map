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
            <input type='text' name='name' onChange={this.handleChange}/>
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




