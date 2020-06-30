import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'


function WalksList(props) {

  const listItems = props.walks.map(walk => {
    return <li key={walk.id}><Link to={`/walk/${walk.id}`}>{walk.name}</Link></li>
    // return <a href={walk.name}>{walk.name}</a>
  })

 



  return (
    <div className='walks-list'>
      <h3>List of all walks:</h3>
      <ul>
        {listItems}
      </ul>
    </div>
  )


}

function mapStateToProps(globalState) {
  return {
    walks: globalState.walks
  }
}

export default connect(mapStateToProps)(WalksList)