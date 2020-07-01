import Link from "next/link";
import Layout from "../components/Layout"

const index = () => { 
  
    return (

    <Layout>
    <h1>Home</h1>
    <Link href="/about">
    <a >Go to about</a>
    </Link>
    <p>Welocme to the Home Page</p>
    </Layout>
   
)
}
export default index; 
