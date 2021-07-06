import React from "react";
export default class ClassHooks extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    componentDidMount() {
        console.log("mounted")
    }

    componentDidUpdate() {
        console.log("updated",this.props.name)
    }

    componentWillUnmount() {
        console.log("cleared class hook")
    }

    ButtonClicked() {
        this.setState({ count: this.state.count + 1 });
        this.props.changeShow(false);
    }
    render(){
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={()=>this.ButtonClicked()} className="btn btn-success">
                    Click me to increment count!
                </button>
            </div>
        )}
        
}