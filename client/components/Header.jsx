import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {pageView, searchVisible} from '../actions/action'

class Header extends React.Component  {

    handleClick = () => {
        this.props.dispatch(pageView('all-walks'))
    }

    handleSearchClick = () => {
        this.props.dispatch(searchVisible(true))
    }

    render() {
        return <header className="page-header">
        <nav>
            <div className='title'>Dog Walks</div>
            <div>Home</div>
            <div><button onClick={this.handleClick}>All walks</button></div>
            <div><button onClick={this.handleSearchClick}>Search</button></div>
        </nav>

        </header>
    }
   
}

export default connect()(Header)