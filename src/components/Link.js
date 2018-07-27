import React, { Component } from 'react'
import { AUTH_TOKEN } from '../constants'
import { timeDifferenceForDate } from '../utils'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import up from '../up_icon.png'

const VOTE_MUTATION = gql`
  mutation VoteMutation($linkId: ID!) {
    vote(linkId: $linkId) {
      id
      link {
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`

class Link extends Component {
  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN)

    return (
      <div id="columns">
      <div className="flex mt2 items-start ba mb3">
        <div className="flex items-center ml2">
          <span className="black">{this.props.index + 1}.</span>
          {authToken && (
            <Mutation
              mutation={VOTE_MUTATION}
              variables={{ linkId: this.props.link.id }}
              update={(store, { data: { vote } }) =>
                this.props.updateStoreAfterVote(store, vote, this.props.link.id)
              }
            >
              {voteMutation => (
                <div className="ml2 mr2 gray f11 pointer" onClick={voteMutation}>
                  <img src={up} alt="thumb up" width="15px" height="auto"/>
                </div>
              )}
            </Mutation>
          )}
        </div>
        <div className="ml1">
          <div>
            {this.props.link.description} 
            </div>
            
            <div className="i mt2 mb3 a">
            {this.props.link.url}
          </div>
          <div className="f6 lh-copy gray">
            {this.props.link.votes.length} thumbs up | von{' '}
            {this.props.link.postedBy
              ? this.props.link.postedBy.name
              : 'Unknown'}{' '}
            {timeDifferenceForDate(this.props.link.createdAt)}
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default Link