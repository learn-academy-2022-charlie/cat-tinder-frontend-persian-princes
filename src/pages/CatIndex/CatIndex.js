import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import { NavLink } from 'react-router-dom'
    class CatIndex extends Component {
        render() {
            const { cats } = this.props
            return (
                <div>
                    <h1>Cat Index</h1>
                    {cats && 
                        cats.map((cat, index) => {
                        return <Card key={index}>
                            {/* <CardImg src={cat.image} alt="Card image cap" /> */}
                            <CardBody>
                            <CardTitle>{cat.name}</CardTitle>
                            <CardSubtitle>{cat.age}</CardSubtitle>
                            <CardText>{cat.enjoys}</CardText>
                            <NavLink to={`/catshow/${cat.id}`}>More Info</NavLink>
                            </CardBody>
                        </Card>
                        })
                    }
                </div>
            );
        }
    }
export default CatIndex