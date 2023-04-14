import SearchBar from "./SearchBar";
import { NavLink,useNavigate } from "react-router-dom";

const Nav = ({onSearch,setAccess}) =>{
    const navigate = useNavigate()

    const handleLogout = () => {
        setAccess(false)
        navigate('/')
    }

return(
    <div>
        <SearchBar onSearch={onSearch}/>
        <button>
            <NavLink to='about'>About me!</NavLink>
        </button>
        <button>
            <NavLink to='/home'>Home</NavLink>
        </button>
        <button>
            <NavLink to='/favorites'>favorites</NavLink>
        </button>
        <button onClick={handleLogout}>LogOut</button>
    </div>
)
}

export default Nav