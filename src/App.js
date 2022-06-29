import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Home from './pages/Home/Home.js'
import CatIndex from './pages/CatIndex.js'
import CatShow from './pages/CatShow.js'
import CatNew from './pages/CatNew.js'
import CatEdit from './pages/CatEdit.js'
import NotFound from './pages/NotFound/NotFound.js'
import mockCats from './mockCats'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOfCats: mockCats
    }
  }

  render() {
    console.log(this.state.cats)
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/catindex" component={CatIndex} />
            <Route path="/catshow" component={CatShow} />
            <Route path="/catnew" component={CatNew} />
            <Route path="/catedit" component={CatEdit} />
            <Route component={NotFound}/>
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;