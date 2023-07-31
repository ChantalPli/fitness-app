import HText from "@/shared/Htext"
import { SelectedPage,ClassType } from "@/shared/types"
import { motion } from "framer-motion"
import Class from "./Class"
import image1 from "@/assets/image1.jpeg"
import image2 from "@/assets/image2.jpg"
import image3 from "@/assets/image3.jpeg"
import image4 from "@/assets/image4.jpeg"
import image5 from "@/assets/image4.jpg"


const classes: Array<ClassType>= [
  {
    name: "Pilates Class",
    description: "Whether it's improving your posture, strength, balance or mobility, Pilates will help you to feel more connected to your body.",
    image: image1
  },
  {
    name: "Strength and Conditioning",
    description: "Strength and Conditioning is our signature high intensity workout. Leave it all on the floor or move at your own pace, it all counts towards feeling your best.",
    image: image2
  },
  {
    name: "Boxing Class",
    description: "This is our 'non-contact' boxing fitness workout! You'll be challenged by exercises that will help develop speed, fitness, agility and power.",
    image: image3
  },
  {
    name: "Cycle Class",
    description: "Get ready to burn calories and boost your fitness level in this moderate to high intensity class, which is sometimes referred to as 'spin'.",
    image: image4
  } 
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

export default function OurClasses({setSelectedPage}: Props) {
  return (
    <section 
    id="ourclasses"
    className="w-full bg-gray-20 py-40">
      <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
        className="mx-auto w-5/6"
        initial="hidden"
          whileInView="visible"
          viewport={{once:true, amount: 0.5}}
          transition={{duration: 0.5}}
          variants={{
            hidden: {opacity: 0, x: -50},
            visible:{opacity: 1, x: 0}
          }}
        >
          <div className="md:w-3/5">
            <HText>OUR CLASSES</HText>
            <p
              className="py-5"
            >
              Whether you’re after a fast-paced morning HIIT, a challenging lunch-time circuit or a 
              relaxing evening class, you’ll find plenty to keep you busy throughout the week.</p>
          </div>
        </motion.div>

          <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
            <ul className="w-[2800px] whitespace-nowrap">
              {classes.map((item: ClassType,index) => (
                <Class
                  key={`${item.name}-${index}`} 
                  name={item.name}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </ul>
          </div>
      </motion.div>
    </section>
  )
}