import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { NavLink, Redirect } from 'react-router-dom'
import './CatShow.css'

class Show extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deleted: false
        }
    }

    handleDelete = () => {
        this.props.deleteCat(this.props.cat.id)
        this.setState({deleted: true})
    }

    render() {
        if(this.state.deleted) {
            return(<Redirect to="/catindex" />)
        }
        const { cat } = this.props
        return (
            <div id="cat-card">
                {cat && 
                    <Card id="cat-show-card">
                        <CardImg id="card-cat" src={cat.image} alt="Card image cap" />
                        <CardBody id="card-body">
                            <div id="name-age">
                                <CardTitle id="card-title">{`${cat.name}`}</CardTitle>
                                <CardSubtitle id="card-subtitle">{`${cat.age}`}</CardSubtitle>
                            </div>
                        <CardText id="card-text">Enjoys: <br />{`${cat.enjoys}`}</CardText>
                        </CardBody>
                    </Card>
                }
                <div id="button-container">
                    <NavLink id="update-button" to={`/catedit/${cat.id}`}>Update Cat</NavLink>
                    <button id="delete-button" onClick={this.handleDelete} >
                        Delete Cat
                    </button>
                </div>
            </div>
        );
    }
}

export default Show;