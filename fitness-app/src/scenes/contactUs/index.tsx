import { SelectedPage } from '@/shared/types'
import React from 'react'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'
import HText from '@/shared/HText'

type Props = {
  setSelectedPage: (value:SelectedPage) => void 
}

export default function ContactUs({setSelectedPage}: Props) {

const {
  register,
  trigger,
  formState: {errors}
} = useForm()

const inputStyle = `w-full rounded-lg bg-secondary-100 px-5 py-3 placeholder-white`

const onSubmit = async (e: any) =>{
  const isValid = await trigger()
  if(!isValid){
    e.preventDefault()
  }
}

  return (
    <section 
    id="contactus"
    className="mx-auto w-5/6 pt-24 pb-32"
    >
      <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <motion.div
        className="md:w-3/5"
        initial="hidden"
        whileInView="visible"
        viewport={{once:true, amount: 0.5}}
        transition={{duration: 0.5}}
        variants={{
          hidden: {opacity: 0, x: -50},
          visible:{opacity: 1, x: 0}
        }}
        >
          <HText>
             <span className='text-primary-600'>CONTACT US</span>  AND START YOUR FITNESS JOURNEY
          </HText>

          {/* FORM AND IMAGE */}
          <div className="mt-10 justify-between gap-8 md:flex">
            <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{once:true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity: 0, y: 50},
              visible:{opacity: 1, y: 0}
            }}
            >
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/chantal.trc@gmail.com"
                method="POST"
              >
                <input 
                className={inputStyle}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength:100
                })}
                />
                {errors.name && (
                  <p className="mt-1 text-primary-500">
                    {errors.name.type === "required" && "This field is required."}
                    {errors.name.type === "maxLength" && "Max length is 100 character."}
                  </p>
                )}

                <input 
                className={inputStyle}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                })}
                />
                {errors.email && (
                  <p className="mt-1 text-primary-500">
                    {errors.email.type === "required" && "This field is required."}
                    {errors.email.type === "pattern" && "Invalid email address."}
                  </p>
                )}

                <input 
                className={inputStyle}
                type="text"
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength:2000
                })}
                />
                {errors.message && (
                  <p className="mt-1 text-primary-500">
                    {errors.message.type === "required" && "This field is required."}
                    {errors.message.type === "maxLength" && "Max length is  character."}
                  </p>
                )}

                <button
                  type="submit"
                  className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
                >
                  SUBMIT
                </button>


              </form>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}