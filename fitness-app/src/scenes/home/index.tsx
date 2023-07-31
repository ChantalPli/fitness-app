import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import TextHomePage from '@/assets/bt1.png'
import AnchorLink from "react-anchor-link-smooth-scroll"
import HomepageImage from "@/assets/homepage-image1-sans.png"
import GQ from "@/assets/GQ-sans.png"
import Elle from "@/assets/elle-sans.png"
import Cosmopolitan from "@/assets/cosmopolitan-sans.png"
import MensHealth from "@/assets/mens-sans.png"
import { motion } from "framer-motion"


type Props = {
  setSelectedPage:(value: SelectedPage) => void
}

export default function Home({setSelectedPage}: Props) {
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")

  return (
    <section 
    id="home"
    className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* IMAGE AND MAIN HEADER */}
      <motion.div 
      className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
      onViewportEnter={()=> setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div 
          className="md:-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible:{opacity: 1, x: 0}
          }}
          >
            <div className="">
              <div className="">
                <img alt='text-homepage' src={TextHomePage}/>
              </div>
            </div>

            <p className="mt-8 text-sm">Promising the most exciting classes, superstar coaches and excellent equipment, Body Tech's core focuses lie in Strength, Stability, Stamina and Soul.</p>
          </motion.div>

          {/* ACTION-BUTTONS */}
          <motion.div 
          className="mt-8 flex items-center gap-8 my-10 sm:justify-center"
           initial="hidden"
           whileInView="visible"
           viewport={{once:true, amount: 0.5}}
           transition={{delay: 0.2, duration: 0.5}}
           variants={{
             hidden: {opacity: 0, x: -50},
             visible:{opacity: 1, x: 0}
           }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
            className="text-sm font-bold text-primary-600 underline hover:text-secondary-500"
            onClick={() => setSelectedPage(SelectedPage.ContactUs)}
            href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="flex basis-3/5 justify-center md:ml-40 md:mt-16 md:justify-items-end ">
          <img alt="hompage-image" src={HomepageImage} className="md:w-4/6"/>
        </div>
      </motion.div>

      {/* SPONSORS */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-secondary-400 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-full items-center justify-between gap-8">
            <img alt="GQ" src={GQ} className="w-32 h-24"/> 
            <img alt="cosmopolitan sponsor" src={Cosmopolitan} className="w-32 h-24"/>
            <img alt="elle sponsor" src={Elle} className="w-32 h-24"/>
            <img alt="men's health" src={MensHealth} className="w-32 h-24"/>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}