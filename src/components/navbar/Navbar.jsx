
const link = [
    {
        name:"Home",
        url:"#home"
    },
    {
        name:"Services",
        url:"#services"
    },
    {
        name:"About Us",
        url:"#about"
    },
    {
      name:"Contact Us",
      url: "#contact"
    }
]


const Navbar = () => {
    return ( 
        <div className="navbar bg-gray-500/30 backdrop-blur-xl sticky top-0 z-10">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-black" href="#home">Logo.</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            {
              link.map((link, index) => {
                  return(
                      <li key={index} className="ms-2"> <a href={link.url} className="text-gray-300"> { link.name } </a> </li>
                  )
              })
            }
          </ul>
        </div>
      </div>
     );
}
 
export default Navbar;