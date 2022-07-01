import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import { NavLink, Redirect } from 'react-router-dom'



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
            <div>
                <h1>Cat Show</h1>
                {cat && 
                    <Card>
                        <CardImg top width="100%" src={cat.image} alt="Card image cap" />
                        <CardBody>
                        <CardTitle>{cat.name}</CardTitle>
                        <CardSubtitle>{cat.age}</CardSubtitle>
                        <CardText>{cat.enjoys}</CardText>
                        </CardBody>
                    </Card>
                }
                <NavLink to={`/catedit/${cat.id}`}>Update Cat</NavLink>
                    <button onClick={this.handleDelete} >
                        Delete Cat
                    </button>
            </div>
        );
    }
}

export default Show;