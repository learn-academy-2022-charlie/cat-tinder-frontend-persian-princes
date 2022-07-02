import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { Redirect } from 'react-router-dom'
import './CatEdit.css'

class CatEdit extends Component {
    constructor(props) {
        super(props)
        this.state = {
            updatedCat: {
                name: "",
                age: "",
                enjoys: "",
                image: "",
            },
            submitted: false
        }
    }

    componentDidMount = () => {
        this.setState({updatedCat: this.props.cat})
    }

    handleChange = (e) => {
        let targetName = e.target.name
        let targetValue = e.target.value
        let { updatedCat } = this.state
        updatedCat[targetName] = targetValue
        this.setState({updatedCat: updatedCat})
    }

    handleSubmit = () => {
        this.props.editCat(this.state.updatedCat, this.props.cat.id)
        this.setState({submitted: true})
    }

    render() {
        const { cat } = this.props
        if (this.state.submitted) {
            return (<Redirect to={`/catshow/${cat.id}`} />);
        }
        return (
            <div id="background">
            <h1>Update your card!</h1>
            <div id="row">
            <p className="emoji">🔥</p>
            <div id="card">
                <Form>
                    <FormGroup>
                        <Label for="name">
                            Name
                        </Label>
                        <Input
                            name="name"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.updatedCat.name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">
                            Age
                        </Label>
                        <Input
                            name="age"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.updatedCat.age}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="enjoys">
                            Enjoys
                        </Label>
                        <Input
                            name="enjoys"
                            type="text-area"
                            onChange={this.handleChange}
                            value={this.state.updatedCat.enjoys}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">
                            Image
                        </Label>
                        <Input
                            name="image"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.updatedCat.image}
                        />
                    </FormGroup>
                        <Button id="submit" onClick={this.handleSubmit}>
                            Submit
                        </Button>
                </Form>
            </div>
            <p className="emoji">😻</p>
            </div>
            </div>
        )
    }
}

export default CatEdit;