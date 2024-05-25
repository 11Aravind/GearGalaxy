import Navbar from "./components/Navbar";
const AllRouter=()=>{
    const routes=[
        {
            path:"/navbar",
            component:<Navbar/>
        }
    ]
    return(
      <Routes>
      {
        routes.map((route,index)=>{
           <Route path={route.path} component={route.component}/> 
        })
       } 
      </Routes>
    )
}