import React, { useState } from "react";
import {NavLink, Link} from "react-router-dom";
import {useAuth} from "../../context/auth";
import {useCart} from "../../context/cart";
import {Badge, message} from "antd";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [auth, setAuth] = useAuth();
    const [cart] = useCart();
    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ""
        });
        localStorage.removeItem("auth");
        message.success("Logout Successfully");
    };
    return (
        <>
            <nav className="bg-headingColor border-gray-200 dark:bg-gray-900 px-5">
                <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                        🛍️REPLIQ
                    </Link>
                    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">

                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-headingColor dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

                            <li className="nav-item">
                                <NavLink to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 ">
                                    Home
                                </NavLink>
                            </li>

                            {
                            !auth ?. user ? (
                                <>
                                    <li className="nav-item">
                                        <NavLink to="/register" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                                            Register
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink to="/login" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li >
                                        <NavLink id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-white-900 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto text-white md:dark:hover:text-blue-500 dark:focus:text-white md:dark:hover:bg-transparent" onClick={()=>setMenuOpen(!menuOpen)}>
                                            {
                                            auth ?. user ?. name
                                        } </NavLink>
                                        {
                                            menuOpen
                                            ?
                                            <div id="dropdownNavbar" className="z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 absolute right-20 top-30">
                                            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                                <li>
                                                    <NavLink to={
                                                            `/dashboard/${
                                                                auth ?. user ?. role === 1 ? "admin" : "user"
                                                            }`
                                                        }
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        Dashboard
                                                    </NavLink>
                                                </li>
                                                <li>
                                                    <NavLink onClick={handleLogout}
                                                        to="/login"
                                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                                        Logout
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </div>:""
                                        }
                                    </li>
                                </>
                            )
                        }
                            <li className="nav-item">
                                <NavLink to="/cart" className="block py-2 pl-3 pr-4 rounded  md:p-0 md:dark:hover:text-blue-500 dark:hover:bg-blue-700 hover:text-white md:dark:hover:bg-transparent">
                                    <Badge count={
                                            cart ?. length
                                        }
                                        showZero
                                        offset={
                                            [10, -5]
                                    }>
                                        <p className="text-white">Cart</p>
                                    </Badge>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
