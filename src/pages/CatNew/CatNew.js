import React, { Component } from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import { Redirect } from 'react-router-dom'

class CatNew extends Component {
    constructor(props){
        super(props)
        this.state = {
            newCat: {
                name: "",
                age: "",
                enjoys: "",
                image: "",
            },
            submitted: false
        }
    }

    handleChange = (e) => {
        let targetName = e.target.name
        let targetValue = e.target.value
        let { newCat } = this.state
        newCat[targetName] = targetValue
        this.setState({newCat: newCat})
    }

    handleSubmit = () => {
        this.props.createCat(this.state.newCat)
        this.setState({submitted: true})
    }

    render() {
        if (this.state.submitted) {
            return (<Redirect to={'/catindex'} />);
        }
        return (
            <>
                <h1>Create your card!</h1>
                <Form>
                    <FormGroup>
                        <Label for="name">
                            Name
                        </Label>
                        <Input
                            name="name"
                            placeholder="What's your name?"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.newCat.name}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="age">
                            Age
                        </Label>
                        <Input
                            name="age"
                            placeholder="How old are you?"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.newCat.age}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="enjoys">
                            Enjoys
                        </Label>
                        <Input
                            name="enjoys"
                            placeholder="What do you enjoy?"
                            type="text-area"
                            onChange={this.handleChange}
                            value={this.state.newCat.enjoys}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="image">
                            Image
                        </Label>
                        <Input
                            name="image"
                            placeholder="Insert URL of your image"
                            type="text"
                            onChange={this.handleChange}
                            value={this.state.newCat.image}
                        />
                    </FormGroup>
                        <Button onClick={this.handleSubmit}>
                            Submit
                        </Button>
                </Form>
            </>
        )
    }
}

export default CatNew;