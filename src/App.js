import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Home from './pages/Home/Home.js'
import CatIndex from './pages/CatIndex/CatIndex.js'
import CatShow from './pages/CatShow/CatShow.js'
import CatNew from './pages/CatNew/CatNew.js'
import CatEdit from './pages/CatEdit/CatEdit.js'
import NotFound from './pages/NotFound/NotFound.js'
import mockCats from './mockCats'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOfCats: mockCats
    }
  }
  
  createCat = (cat) => {
    console.log(cat)
  }

  editCat = (cat) => {
    console.log(cat)
  }

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catindex"
            render={() => <CatIndex cats={this.state.listOfCats} />}
            />
            <Route path="/catshow/:id"
            render={(props) => {
              let id = props.match.params.id
              let cat = this.state.listOfCats.find(catObject => catObject.id == id)
              return <CatShow cat={cat} />
            }}
            />
            <Route
              path="/catnew"
              render={() => <CatNew createCat={this.createCat} />}
            />
            <Route path="/catedit/:id"
            render={(props) => {
              let id = props.match.params.id
              let cat = this.state.listOfCats.find(catObject => catObject.id == id)
              return <CatEdit cat={cat} editCat={this.editCat}/>
            }}
            />
            <Route component={NotFound}/>
          </Switch>
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/catindex">Cat Index</NavLink></li>
            <li><NavLink to="/catnew">New Cat</NavLink></li>
          </ul>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;