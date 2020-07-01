export default(props)=>{ 
    console.log(props.children)
    return(   

    <div>
    <header>header</header>
    {props.children}
    <footer>footer</footer>
    </div>
)
}