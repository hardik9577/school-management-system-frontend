import React, { Component } from "react";
import ApiService from "../../service/ApiService"

class LoginUserComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            message: null
        }
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser = (event) => {
        event.preventDefault();
        let user = { userName: this.state.userName, password: this.state.password };
        console.log(user);
        ApiService.loginUser(user)
            .then(response => {
                console.log(response.data);
                this.setState({ message: 'User Login successful' });
                this.props.history.push('/');
            }).catch( err => {
                console.error("in error ", err.response.data);
                alert(err.response.data.message);
                this.props.history.push('/api/signin');
            })
    }

    onChange = (event) =>
        this.setState({ [event.target.name]: event.target.value });

    render() {
        return (
            <>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
                    <body>
                        <div className="jumbotron text-center">
                            <h1>ABC School</h1>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-4">

                                </div >
                                <div className="col-sm-4">
                                    <h3>Login</h3>
                                    <div className="form-group">
                                        <label for="userName">Username</label>
                                        <input type="text" placeholder="Enter Username" id="userName" name="userName" className="form-control" value={this.state.userName} onChange={this.onChange} />
                                    </div>
                                    <div className="form-group">
                                        <label for="password">Password</label>
                                        <input type="password" placeholder="Enter Password" id="password" name="password" className="form-control" value={this.state.password} onChange={this.onChange} />
                                    </div>
                                    <button className="btn btn-primary" onClick={this.loginUser}>Login</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4"> </div>
                    </body>
                </>
                )
    }
}

                export default LoginUserComponent;