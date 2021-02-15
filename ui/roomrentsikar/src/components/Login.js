import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Login extends Component {
    render() {
        return (
         <div className="container">   
            <Form>
                <div class="form-outline mb-4">
                    <div class="col">
                    <div class="form-outline col-md-5">
                    <Label class="form-label" for="form3Example1">Name</Label>
                        <Input type="text" id="form3Example1" class="form-control" />
                        
                    </div>
                    </div>
                    
                </div>

                <div class="form-outline mb-4">
                <Label class="form-label" for="form3Example3">Email address</Label>
                <Input type="email" id="form3Example3" class="form-control" />
                    
                </div>

                <div class="form-outline mb-4">
                <Label class="form-label" for="form3Example4">Password</Label>
                 <Input type="password" id="form3Example4" class="form-control" />
                    
                </div>

                <Button type="submit" class="btn btn-primary btn-block mb-4">Login</Button>

                
            </Form>         

            </div>

        )
    }
}
