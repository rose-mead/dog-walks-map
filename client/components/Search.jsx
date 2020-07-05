import React from 'react'
import { connect } from 'react-redux'
import { fetchMultipleSearchResults, searchVisible } from '../actions/action'


class Search extends React.Component {

  state = {
    searchTerms: { distance: '[1,100]' },
    // searchTerms: {difficulty: '',off_leash: ''},
  }

  handleClick = () => {
    this.props.dispatch(searchVisible(false))
  }

  handleChange = (event) => {
    let newSearchTerms = this.state.searchTerms
    newSearchTerms[event.target.name] = event.target.value
    this.setState({
      searchTerms: newSearchTerms
    })

  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.dispatch(fetchMultipleSearchResults(this.state.searchTerms))
  }

  render() {
    return <div className='content-container search'>
      <div className='content'>
        <button className='exit' onClick={this.handleClick}>X</button>
        <form onSubmit={this.handleSubmit}>

          <div className="filter">
            <input type='radio' name='difficulty' value='easy' onChange={this.handleChange} id='easy' />
            <label htmlFor="easy">Easy</label>
            <input type='radio' name='difficulty' value='medium' onChange={this.handleChange} id='medium' />
            <label htmlFor="medium">Medium</label>
            <input type='radio' name='difficulty' value='hard' onChange={this.handleChange} id='hard' />
            <label htmlFor="hard">Hard</label>
            <br></br>

            <input type='radio' name='off_leash' value='false' onChange={this.handleChange} id='on_leash' />
            <label htmlFor="on_leash">On leash</label>
            <input type='radio' name='off_leash' value='true' onChange={this.handleChange} id='off_leash' />
            <label htmlFor="off_leash">Off leash</label>

            <br></br>
            <input type='radio' name='distance' value='[0,5]' onChange={this.handleChange} id='under_5' />
            <label htmlFor="under_5">Under 5km</label>
            <input type='radio' name='distance' value='[5,10]' onChange={this.handleChange} id='5_10' />
            <label htmlFor="5_10">5-10km</label>
            <input type='radio' name='distance' value='[10,20]' onChange={this.handleChange} id='10+' />
            <label htmlFor="10+">10+km</label>

            <input type='submit' value='Search' />



          </div>
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




