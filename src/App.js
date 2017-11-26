import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
            , test: '고경준 천재님이십니다'
            , comment: 'ocmsdlkjfcommnet'
            , comment2: ''
        };

        // This binding is necessary to make `this` work in the callback
//        this.handleClick = this.handleClick.bind(this);
    }




    handleClick() {

        console.log('this is:', this.state.isToggleOn);
        alert(this.state.comment2);
        console.log('this is:', this.state.test);
    }

    handleChange(event) {

        this.setState({ comment: event.target.value });
    }

    handleChange2(event) {

        this.setState({ comment2: event.target.value });
    }
    //asdlkflasdkflskdlfklk9898989898

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <div className='container'>

                    <form>
                        <label>
                            Name:
                            <input
                                type="text"
                                value={this.state.comment}
                                onChange={ this.handleChange.bind(this) }
                                placeholder="Write a comment..." />

                            <input
                                type="text"
                                value={this.state.comment2}
                                onChange={ this.handleChange2.bind(this) }
                                placeholder="Write a comment..." />


                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                    <table className='table table-responsive table-hover'>
                        <tr>

                            <td>123</td>
                            <td> 123123</td>
                        </tr>
                        <tr>

                            <td>123</td>
                            <td> 123123</td>
                        </tr>
                        <tr>

                            <td>123</td>
                            <td> 123123</td>
                        </tr>

                    </table>
                    {/*<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->*/}
                    <button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>Primary
                    </button>

                    {/*<!-- Secondary, outline button -->*/}
                    <button type="button" className="btn btn-secondary">Secondary</button>
                    <button type="button" className="btn btn-success">Success</button>

                    {/*<!-- Contextual button for informational alert messages -->*/}
                    <button type="button" className="btn btn-info">Info</button>

                    {/*<!-- Indicates caution should be taken with this action -->*/}
                    <button type="button" className="btn btn-warning">Warning</button>

                    {/*<!-- Indicates a dangerous or potentially negative action -->*/}
                    <button type="button" className="btn btn-danger">Danger</button>

                    {/*<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->*/}
                    <button type="button" className="btn btn-link">Link</button>

                </div>


            </div>
        );
    }
}

export default App;
