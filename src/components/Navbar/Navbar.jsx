import React, { useContext, useState } from "react";
import Logo from "../../assets/Logo1.png";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { Shopcontext } from "../../Context/ShopContext";
import { FaUserCircle } from "react-icons/fa";
import useCart from "../../hook/useCart";
import Sidebar from "../sidebar";

const Navbar = () => {
  const { cartCount } = useCart();
  const [showMenu, setShowMenu] = useState(false);
  // const { getTotalCartItems } = useContext(Shopcontext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="bg-white px-4 fixed w-full z-10 shadow-sm top-0 shadow-gray-400">
        <div className="max-w-7xl mx-auto  px-5 flex justify-between items-center">
          <Link to="/">
            <img src={Logo} alt="" className="md:w-16 w-16" />
          </Link>

          <div class="relative hidden md:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              class="absolute left-3 top-1/2 size-4 -translate-y-1/2 fill-primary dark:fill-primary-dark"
            >
              <path
                fill-rule="evenodd"
                d="M5 4a.75.75 0 0 1 .738.616l.252 1.388A1.25 1.25 0 0 0 6.996 7.01l1.388.252a.75.75 0 0 1 0 1.476l-1.388.252A1.25 1.25 0 0 0 5.99 9.996l-.252 1.388a.75.75 0 0 1-1.476 0L4.01 9.996A1.25 1.25 0 0 0 3.004 8.99l-1.388-.252a.75.75 0 0 1 0-1.476l1.388-.252A1.25 1.25 0 0 0 4.01 6.004l.252-1.388A.75.75 0 0 1 5 4ZM12 1a.75.75 0 0 1 .721.544l.195.682c.118.415.443.74.858.858l.682.195a.75.75 0 0 1 0 1.442l-.682.195a1.25 1.25 0 0 0-.858.858l-.195.682a.75.75 0 0 1-1.442 0l-.195-.682a1.25 1.25 0 0 0-.858-.858l-.682-.195a.75.75 0 0 1 0-1.442l.682-.195a1.25 1.25 0 0 0 .858-.858l.195-.682A.75.75 0 0 1 12 1ZM10 11a.75.75 0 0 1 .728.568.968.968 0 0 0 .704.704.75.75 0 0 1 0 1.456.968.968 0 0 0-.704.704.75.75 0 0 1-1.456 0 .968.968 0 0 0-.704-.704.75.75 0 0 1 0-1.456.968.968 0 0 0 .704-.704A.75.75 0 0 1 10 11Z"
                clip-rule="evenodd"
              />
            </svg>
            <input
              id="aiPromt"
              type="text"
              class="w-full border-outline bg-surface-alt border border-outline rounded-radius px-2 py-2 pl-10 pr-24 text-sm text-on-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-75 dark:border-outline-dark dark:bg-surface-dark-alt/50 dark:text-on-surface-dark dark:focus-visible:outline-primary-dark"
              name="prompt"
              placeholder="Searching ..."
            />
            <button
              type="button"
              class="absolute right-3 top-1/2 -translate-y-1/2 bg-primary rounded-radius px-2 py-1 text-xs tracking-wide text-on-primary transition hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:opacity-100 active:outline-offset-0 dark:bg-primary-dark dark:text-on-primary-dark dark:focus-visible:outline-primary-dark"
            >
              Generate
            </button>
          </div>

          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center gap-x-2">
              <Link to="/cart" className="relative w-10">
                <ShoppingCart size={20} />
                <div className="bg-red-500 size-4 text-xs absolute -top-2 right-3 flex items-center justify-center rounded-full text-white">
                  {Number(cartCount)}
                </div>
              </Link>
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer transition-all"
                size={20}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
