import React from 'react'
import { connect } from 'react-redux'
import { pageView, selectedWalk } from '../actions/action'


function SearchedWalksList(props) {

  
    function handleClick(walk, e) {
      e.preventDefault();
      console.log('The link was clicked.');
      console.log(walk)
      props.dispatch(selectedWalk(walk))
      props.dispatch(pageView('profile'))

    }

  const listItems = props.walks.map(walk => {
    return <li key={walk.id}><a href="#" onClick={(e)=>handleClick(walk, e)}>{walk.name} </a></li>
  })

  const handleExit = () => {
    props.dispatch(pageView('home'))

  }

  return (
    <div className='content-container'>
      <div className='content'>
      <button className='exit' onClick={handleExit}>X</button>
        <h3>Searched walks:</h3>
        <ul>
          {listItems}
        </ul>
      </div>
    </div>
   
  )

}

function mapStateToProps(globalState) {
  return {
    walks: globalState.walks
  }
}

export default connect(mapStateToProps)(SearchedWalksList)