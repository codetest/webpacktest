import React, {Component} from "react"
export interface AppProps {
}

export interface AppState {
    count: number
}

export class App extends Component<AppProps, AppState>{
    state: AppState;
    constructor(props: AppProps){
        super(props)
        this.state = {count: 0}
    }
    render() {
    return <h1>Hello World {this.state.count}</h1>
    }
}