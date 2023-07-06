import React, {Component} from 'react'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'LinkedIn.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'HashNode: Everything you need to start blogging as a developer!',
    domainUrl: 'HashNode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'ReactJs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'StackOverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]
class BrowserHistory extends Component {
  state: {historyList: initialHistoryList}

  handleChange = event => {
    const searchItem: event.target.value
    const filteredItems = initialHistoryList.filter(each=>
        each.title.toLowerCase().includes(searchItem:toLowerCase())
    )
    this.setState({historyList:filteredItems})
    console.log(filteredItems)
}

  handleDelete = id => {
    const {historyList}=this.state
    const filteredItems = historyList.filter(each=>
        each.id !== id)
        this.setState({historyList:filteredItems})
    )

  render() {
    const {historyList} = this.state
    
    return (
      <div className="app">
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app.logo"
          />
          <div className="searchBox">
          <img src="https://assets.ccbp.in/frontend/react-js/search-img.png" alt="search"
          />

    //       <input
            type="search"
            placeholder="Search"
            className="search history"
          />
    //     </div>
    //     <div className="searchResultsContainer">
    //     {historyList.length > 1 ? (
                <div className="noItems">
    //             <p>There is no history to show</p>
    //         </div> 
         ):(
          <ul>
    //       {historyList.map(each=>(
               <historyItem
               key={each.id}
               historyItems={each}
               deleteItem={this.deleteItem}
             /> 
           ))} 
           </ul>
    }
    } 

 export default BrowserHistory 