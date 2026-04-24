import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const navClass = ({ isActive }) =>
        `relative text-sm font-medium transition py-2 ${
            isActive 
            ? 'text-white after:content-[""] after:absolute after:-top-5 after:left-0 after:w-full after:h-[2px] after:bg-[#FFD3AF]' 
            : 'text-gray-300 hover:text-white'
        }`

    return (
        <div className="bg-[#232536]"> 
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
                <Link to="/" className="text-2xl font-bold tracking-tight text-white">
                    {'{Finsweet'}
                </Link>

                <nav className="flex items-center gap-8">
                    <NavLink to="/" className={navClass}>
                        Home
                    </NavLink>

                    <NavLink to="/service" className={navClass}>
                        Service
                    </NavLink>

                    <NavLink to="/company" className={navClass}>
                        Company
                    </NavLink>

                    <NavLink to="/career" className={navClass}>
                        Career
                    </NavLink>

                    <NavLink to="/blog" className={navClass}>
                        Blog
                    </NavLink>

                    <NavLink to="/contact" className={navClass}>
                        Contact us
                    </NavLink>

                    <button className="ml-[60px] flex h-[30px] w-[140px] items-center justify-between text-[#FFD3AF]">
                        Clone project
                        <img className="mt-[2px]" src="/images/Icon (6).png" alt="arrow" />
                    </button>
                </nav>
            </div>
        </div>
    )
}