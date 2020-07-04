import Link from "next/link"
import Layout from "../components/Layout"

export default ()=>( 
    <Layout title="About"> 
  
    <Link href="/">
        <a >Go to Home</a>
    </Link>
    
    <p>JavaScript programmer</p>
    <img src="/static/javascript-logo.png" alt=""/>
    </Layout>

)
