import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/logo8.jpg"
import Link from "./Link"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
  selectedPage:SelectedPage;
  setSelectedPage:(value:SelectedPage) => void;
}

export default function Navbar({selectedPage,setSelectedPage}: Props) {
const flexBetween = "flex items-center justify-between"
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
const [isMenuToggled,setIsMenuToggled] = useState<boolean> (false)


  return (
    <nav>
      {/* outer div: */}
      <div className={`${flexBetween} fixed top-3 z-30 w-full py-6`}>

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
       </nav>
  )
}

