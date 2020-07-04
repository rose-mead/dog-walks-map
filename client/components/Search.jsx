import React from 'react'
import { connect } from 'react-redux'
import {fetchSearchResults, fetchMultipleSearchResults, pageView, searchVisible } from '../actions/action'


class Search extends React.Component {

  state = {
    searchTerm: [],
    searchTerms: {distance: '[1,100]'},
    // searchTerms: {difficulty: '',off_leash: ''},
    difficulty: '',
    offLeash: ''
  }

  handleClick = () => {
    this.props.dispatch(searchVisible(false))
  }

  handleChange = (event) => {
      let newSearchTerms = this.state.searchTerms
      newSearchTerms[event.target.name] = event.target.value
    this.setState({
        searchTerms: newSearchTerms
        
       
        // searchTerms: newArray.map(object => {
        //     object[event.target.name] = event.target.value
        //     return object
        // })
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    // this.props.dispatch(fetchSearchResults(this.state.searchTerm))
    this.props.dispatch(fetchMultipleSearchResults(this.state.searchTerms))
  }

  render() {

    return<div className='content-container search'>
            <div className='content'>
            <button className='exit' onClick={this.handleClick}>X</button>

        <form onSubmit={this.handleSubmit}>
            <label>
                <input type='radio' name='difficulty' value='easy' onChange={this.handleChange}/>
                Easy
            </label>
            <label>
                <input type='radio' name='difficulty' value='medium' onChange={this.handleChange}/>
                Medium
            </label>
            <label>
                <input type='radio' name='difficulty' value='hard' onChange={this.handleChange}/>
                Hard
            </label>

            <br></br>
            <label>
                <input type='radio' name='off_leash' value='false' onChange={this.handleChange}/>
                On leash
            </label>
            <label>
                <input type='radio' name='off_leash' value='true' onChange={this.handleChange}/>
                Off leash
            </label>
            <br></br>
            <label>
                <input type='radio' name='distance' value='[0,5]' onChange={this.handleChange}/>
                Under 5km
            </label>
            <label>
                <input type='radio' name='distance' value='[5,10]' onChange={this.handleChange}/>
                5-10km
            </label>
            <label>
                <input type='radio' name='distance' value='[10,20]' onChange={this.handleChange}/>
                10+km
            </label>
            
            <input type='submit' value='Search'/>
        </form>
    </div> 
    </div>
  }
}


function mapStateToProps(globalState) {
  return {
    searchedWalk: globalState.searchedWalk,
  }
}

export default connect(mapStateToProps)(Search)




