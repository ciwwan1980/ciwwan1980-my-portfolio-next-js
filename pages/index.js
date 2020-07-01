import Link from "next/link";

const index = () => {
    return ( 
    <div>
    <h1>Home</h1>
    <Link href="/about">
    <a >Go to about</a>
    </Link>
    
    <p>Welocme to the Home Page</p>
    </div>
    )
}
export default index; 
