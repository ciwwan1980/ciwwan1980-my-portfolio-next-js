import Link from "next/link"
import Layout from "../components/Layout"
import fetch from "isomorphic-unfetch";
import React, { Component } from 'react'

export default class about extends Component {

 static async getInitialProps() {
    const res = await fetch("https://api.github.com/users/ciwwan1980");
    const data = await res.json();

    return { user: data };
  }
// static getInitialProps() {
// fetch("https://api.github.com/users/ciwwan1980")
//   .then(res=>res.json())
//   .then(data=>{
//       console.log(data)
//   })

//     return { };
//   }
// state={
//     user:null
// }

    // componentDidMount(){
    //     fetch("https://api.github.com/users/ciwwan1980")
    //     .then(res=>res.json())
    //     .then(data=>{
    //         this.setState({
    //             user:data
    //         })
    //     })
    // }
    render() {
    const {user} = this.props;
        return (
            <div>
      
     <Layout title="About">
        <p>{user.name}</p>
        <img src={user.avatar_url} alt="Reed" height="200px" />
      </Layout>
 
            </div>
        )
    }
}




