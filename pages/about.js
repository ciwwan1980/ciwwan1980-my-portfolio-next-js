import Link from "next/link"
import Layout from "../components/Layout"
import React, { Component } from 'react'

export default class about extends Component {
state={
    user:null
}
    componentDidMount(){
        fetch("https://api.github.com/users/ciwwan1980")
        .then(res=>res.json())
        .then(data=>{
            this.setState({
                user:data
            })
        })
    }
    render() {
        return (
            <div>
      
    <Layout title="About"> 
    {JSON.stringify(this.state.user)}
    <Link href="/">
        <a >Go to Home</a>
    </Link>
    
    <p>JavaScript programmer</p>
    <img src="/static/javascript-logo.png" alt=""/>
    </Layout>
 
            </div>
        )
    }
}




