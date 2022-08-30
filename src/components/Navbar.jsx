import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

export default function Navbar() {
  return (
    <nav className="z-20 h-auto w-full bg-black shadow-md shadow-black">
      <div className="flex items-center">
        <img src={Logo} alt="SportSee" className=" ml-8 h-20 w-44" />
        <ul className="flex w-full justify-around text-xl font-normal text-white ">
          <Link to="/home">Home</Link>
          <Link to="">Profile</Link>
          <Link to="">Settings</Link>
          <Link to="">Community</Link>
        </ul>
      </div>
    </nav>
  )
}
