import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'
import { Menu, Transition } from '@headlessui/react'

export default function Navbar() {
  return (
    <nav className="z-20 h-auto w-full bg-black shadow-md shadow-black">
      <div className="flex items-center">
        <img src={Logo} alt="SportSee" className=" ml-8 h-20 w-44" />
        <ul className="flex w-full justify-around text-xl font-normal text-white ">
          <Link to="/">Home</Link>
          <div>
            <Menu>
              {({ open }) => (
                <>
                  <Menu.Button className="relative flex flex-row items-center">
                    Profile
                  </Menu.Button>

                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    {open && (
                      <div>
                        <Menu.Items className="absolute right-2 top-2 -left-4 z-20 flex h-fit w-fit flex-col space-y-1 rounded-lg bg-[#0d0d0d] text-center shadow-md">
                          <Menu.Item className=" rounded-t-md px-4 py-2 text-2xl font-light text-white hover:bg-secondary-color/40 ">
                            <Link to="/profile/12">Karl</Link>
                          </Menu.Item>
                          <Menu.Item className=" w-full rounded-b-md px-4 py-2 text-2xl font-light text-white hover:bg-secondary-color/40">
                            <Link to="/profile/18">Cecilia</Link>
                          </Menu.Item>
                        </Menu.Items>
                      </div>
                    )}
                  </Transition>
                </>
              )}
            </Menu>
          </div>
          <Link to="">Settings</Link>
          <Link to="">Community</Link>
        </ul>
      </div>
    </nav>
  )
}
