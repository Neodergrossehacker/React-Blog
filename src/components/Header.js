import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { AUTH_TOKEN } from '../constants'
import Logout from '../Logout.png'
import Searchico from '../search_icon.png'

class Header extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)
    return (
      <div className="flex pt4 pb3 justify-between nowrap">
      
        <div className="flex flex-fixed pt4">
          
          <Link to="/" className="ml1 no-underline gray">
            NEU
          </Link>
       
          <div className="ml3 mr3 white" >|</div>
          <Link to="/top" className="ml1 no-underline gray">
            IM TREND
          </Link>
         
          {authToken && (
            <div className="flex">
              <div className="ml3 mr3 white">|</div>
              <Link to="/create" className="ml1 no-underline gray">
                BLOGGEN
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-fixed black pb5 mr7">
        <div ><h1>React Blog</h1></div>
        </div>
        <div className="flex flex-fixed pt4">
        <Link to="/search" className="ml1 mr1 no-underline black">
          <img src={Searchico} alt="Suche" width="17px" height="auto"/>
          </Link>
          {authToken ? (
            <div
              className="ml1 pointer black"
              onClick={() => {
                localStorage.removeItem(AUTH_TOKEN)
                this.props.history.push(`/`)
              }}
            >
              <img src={Logout} alt="ausloggen" width="15px" height="auto" />
            </div>
          ) : (
              <Link to="/login" className="ml1 no-underline gray">
                Sign in
            </Link>
            )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header)