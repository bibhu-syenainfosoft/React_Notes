import React from "react";

class SuccessComponent extends React.Component {
    componentDidMount() {
        alert('Success Component Rendered')
    }
    componentWillUnmount() {
        alert('Success Component Unmounted..')
    }
    render() {
        return (
            <div>
                <h5 className="text-success">Login Success</h5>
            </div>
        );
    }
}
class ErrorComponent extends React.Component {
    componentDidMount() {
        alert('Error Component Rendered')
    }
    componentWillUnmount() {
        alert('Error Component Unmounted..')
    }
    render() {
        return (
            <div>
                <h5 className="text-danger">Invalid Credentials</h5>
            </div>
        );
    }
}

export default class LifeCycleHooks_Class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userDetails: {
                'UserName': 'Bibhu',
                'Password': 'Bibhu@123'
            },
            formDetails: {
                'Username': '',
                'Pwd': ''
            },
            result: ''
        }
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePwdChange = this.handlePwdChange.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }
    handleUserChange(e) {
        this.setState({
            formDetails: {
                'Username': e.target.value,
                'Pwd': this.state.formDetails.Pwd
            }
        })
    }
    handlePwdChange(e) {
        this.setState({
            formDetails: {
                'Username': this.state.formDetails.Username,
                'Pwd': e.target.value
            }
        })
    }
    handleLoginClick() {
        if (this.state.formDetails.Username == this.state.userDetails.UserName &&
            this.state.formDetails.Pwd == this.state.userDetails.Password) {
            this.setState({
                result: <SuccessComponent />
            })
        }
        else {
            this.setState({
                result: <ErrorComponent />
            })
        }
    }

    render() {
        return (
            <center>
                <div className="container-fluid w-25">
                    <dl>
                        <dd>UserName</dd>
                        <dt><input type="text" onChange={this.handleUserChange} /></dt>
                    </dl>
                    <dl>
                        <dd>Password</dd>
                        <dt><input type="password" onChange={this.handlePwdChange} /></dt>
                    </dl>
                </div><br />
                <button className="btn btn-outline-primary" onClick={this.handleLoginClick}>Login</button>
                <br/>
                {this.state.result}
            </center>
        );
    }
}
