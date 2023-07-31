import Htext from "@/shared/Htext"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon  } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsImage from "@/assets/benefits_04_sans.png"


const benefits: Array<BenefitType>  = [
  {
    icon: <HomeModernIcon className="h-6 w-6"/>,
    title:"Exclusive fitness playground",
    description: "Exclusive to Body Tech, the Yard is a seriously cool training space, equipped with a range of versatile kit, such as punch bags, TRX, and slam balls. "
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"/>,
    title:"Exercise Classes",
    description: "Whether you’re after a fast-paced morning HIIT, a challenging lunch-time circuit or a relaxing evening class, you’ll find plenty to keep you busy throughout the week."
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6"/>,
    title:"Personal Training",
    description: "When you want some extra guidance, our team are right there. All our personal trainers are highly qualified and experience so the help you need to hit your next fitness goal is always on-hand. "
  },
]

const container ={
  hidden: {},
  visible:{
    transition:{staggerChildren: 0.2}
  }
}

type Props = {
  setSelectedPage:(value:SelectedPage) => void
}

export default function Benefits({setSelectedPage}: Props) {
  return (
    <section
     id="benefits"
     className="mx-auto min-h-full w-5/6 py-20"
     >
      <motion.div
       onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}
      >
          {/* HEADER */}
          <motion.div 
           className="md:my-5 md:w-3/5"
           initial="hidden"
           whileInView="visible"
           viewport={{once:true, amount: 0.5}}
           transition={{ duration: 0.5}}
           variants={{
             hidden: {opacity: 0, x: 50},
             visible:{opacity: 1, x: 0}
           }}
          >
           <Htext>MORE THAN JUST A GYM</Htext>
           <p className="my-5 text-sm">The moment you walk into an Body Tech, things feel different. From the warm personal welcome you’ll get 
            from our colleagues to the awesome equipment you normally only get at pricey gyms, we offer a unique 
            blend of budget and boutique – so you really feel like you belong. </p>
          </motion.div>

          {/* BENEFITS */}
          <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5" 
          initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount: 0.5}}
          variants={container}
          >
           {benefits.map((benefit: BenefitType) => (
            <Benefit 
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
           ))}
          </motion.div>

          {/* GRAPHICS AND DESCRIPTION  */}
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* GRAPHIC */}
            <img 
            className="mx-auto"
            alt="benefits image"
            src={BenefitsImage}
            
            />

            {/* DESCRIPTION */}
            <div>
              {/* TITLE */}
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20">
                  <motion.div 
                   initial="hidden"
                   whileInView="visible"
                   viewport={{once:true, amount: 0.5}}
                   transition={{ duration: 0.5}}
                   variants={{
                     hidden: {opacity: 0, x: -50},
                     visible:{opacity: 1, x: 0}
                   }}
                  >
                    <Htext>
                      LIVE HAPPILY EVER{" "}
                      <span className="text-primary-600">ACTIVE</span>
                    </Htext>
                  </motion.div>
                </div>
              </div>

              {/* DESCRIPTION */}
              <motion.div
               initial="hidden"
               whileInView="visible"
               viewport={{once:true, amount: 0.5}}
               transition={{delay:0.2, duration: 0.5}}
               variants={{
                 hidden: {opacity: 0, x: -50},
                 visible:{opacity: 1, x: 0}
               }}
              >
                <p className="my-5"> 
                BodyTech was launched in 1999 in Preston, Lancashire. Today, there are 43 clubs across the UK. 

                    Promising the most exciting classes, superstar coaches and excellent equipment, BodyTech’s core focuses lie in Strength, Stability, Stamina and Soul.

                    Strength allows members to toughen bones, build muscles and burn calories

                    Stability is less about solid abs and more about solid foundations

                    Stamina provides exercise that works the most important muscle of all

                    Soul offers calm, tranquility and deep breaths… or pounding the life out of a heavy bag
                </p>
              </motion.div>

              {/* BUTTON */}
              <div className="mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1]">
                  <ActionButton setSelectedPage={setSelectedPage}>
                      Join Now
                  </ActionButton>
                </div>

              </div>
            </div>
          </div>


      </motion.div>
    </section>
  )
}