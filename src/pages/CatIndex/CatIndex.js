import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom'
import './CatIndex.css'

    class CatIndex extends Component {
        render() {
            const { cats } = this.props
            return (
                <div id="grid-index">
                    {cats && 
                        cats.map((cat, index) => {
                        return <Card id="index-card" key={index}>
                            <CardBody id="card-body-index">
                            <CardTitle>{cat.name}</CardTitle>
                            <CardImg id="card-image" src={cat.image} alt="Card image cap" />
                            <NavLink id="info-button" to={`/catshow/${cat.id}`}>
                                More Info
                            </NavLink>
                            </CardBody>
                        </Card>
                        })
                    }
                </div>
            );
        }
    }
export default CatIndex