import Layout from "../components/Layout"

 const post=({url})=>{
     console.log(url.query.title,"URL")
    return ( 
     <Layout title={url.query.title}>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero soluta explicabo voluptate quis repudiandae quibusdam reprehenderit earum? Expedita minima eveniet modi id alias hic, fugit corporis ut dolore, aliquid est.</p>
  </Layout>
  )
}
export default post