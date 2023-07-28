import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/logo-without.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage: boolean
  selectedPage:SelectedPage;
  setSelectedPage:(value:SelectedPage) => void;
}

export default function Navbar({isTopOfPage,selectedPage,setSelectedPage}: Props) {
const flexBetween = "flex items-center justify-between"
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
const [isMenuToggled,setIsMenuToggled] = useState<boolean> (false)
const navbarBackground = isTopOfPage? "" : "bg-secondary-100 drop-shadow"


  return (
    <nav>
      {/* outer div: */}
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>

        {/* inner div: */}
        <div className={`${flexBetween} mx-auto w-5/6`}>

          
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side: */}
              <img alt="logo" src={Logo} className="w-60"/>

            {/* right side: */}
           {isAboveMediumScreens ? (
            
            <div className={`${flexBetween} w-full`}>
              {/* inner left(links): */}
              <div className={`${flexBetween} gap-8 text-sm`}>
              <Link 
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link 
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link 
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              </div>

              {/* inner right(signin/become member): */}
              <div className={`${flexBetween} gap-8`}>
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>Become a member</ActionButton>
              </div>
            </div>
           ):(
            // mobile screens:
            <button
            className='rounded-full bg-secondary-500 p-2'
            onClick={()=>setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-white"/>
            </button>
           )}
           
          </div>

        </div>

      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled &&(
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-secondary-100 text-white drop-shadow-xl">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={()=>setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-gray-400"/>
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <Link 
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link 
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link 
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              <Link page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
              </div>
        </div>
      )}
       </nav>
  )
}

