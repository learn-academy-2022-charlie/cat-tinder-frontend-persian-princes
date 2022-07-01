import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Home from './pages/Home/Home.js'
import CatIndex from './pages/CatIndex/CatIndex.js'
import CatShow from './pages/CatShow/CatShow.js'
import CatNew from './pages/CatNew/CatNew.js'
import CatEdit from './pages/CatEdit/CatEdit.js'
import SwipeCats from './pages/SwipeCats.js'
import NotFound from './pages/NotFound/NotFound.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOfCats: []
    }
  }

  componentDidMount = () => {
    this.readCat()
  }

  readCat = () => {
    fetch("http://localhost:3000/cats")
    .then(response => response.json())
    .then(catsArray => this.setState({listOfCats: catsArray}))
    .catch(errors => console.log("Cat read errors:", errors))
  }
  
  createCat = (cat) => {
    fetch("http://localhost:3000/cats", {
    body: JSON.stringify(cat),
    headers: {
      "Content-Type": "application/json"
    },
    method: "POST"
    })
    .then(response => response.json())
    .then(payload => this.readCat())
    .catch(errors => console.log("Cat create errors:", errors))
  }

  editCat = (cat, id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
    body: JSON.stringify(cat),
    headers: {
      "Content-Type": "application/json"
    },
    method: "PATCH"
    })
    .then(response => response.json())
    .then(payload => this.readCat())
    .catch(errors => console.log("Cat create errors:", errors))
  }

  deleteCat = (id) => {
    fetch(`http://localhost:3000/cats/${id}`, {
    headers: {
      "Content-Type": "application/json"
    },
    method: "DELETE"
    })
    .then(response => response.json())
    .then(payload => this.readCat())
    .catch(errors => console.log("delete errors:", errors))
  }

  render() {
    console.log(this.state.listOfCats)
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
              return <CatShow cat={cat} deleteCat={this.deleteCat}/>
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
            <Route path="/deck"
            render={(props) => {
              return <SwipeCats cats={this.state.listOfCats}/>
            }}
            />
            <Route component={NotFound}/>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;