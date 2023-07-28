import Htext from "@/shared/Htext"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon  } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Benefit from "./Benefit"


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
          <div className="md:my-5 md:w-3/5">
           <Htext>MORE THAN JUST A GYM</Htext>
           <p className="my-5 text-sm">The moment you walk into an Body Tech, things feel different. From the warm personal welcome you’ll get 
            from our colleagues to the awesome equipment you normally only get at pricey gyms, we offer a unique 
            blend of budget and boutique – so you really feel like you belong. </p>
          </div>

          {/* BENEFITS */}
          <div className="md:flex items-center justify-between gap-8 mt-5">
           {benefits.map((benefit: BenefitType) => (
            <Benefit 
            key={benefit.title}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            setSelectedPage={setSelectedPage}
            />
           ))}
          </div>
      </motion.div>
    </section>
  )
}