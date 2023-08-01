import logo from "@/assets/logo-without.png"

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className="bg-gray-20 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img src={logo} alt="logo"/>
          <p>BodyTech All Rights Reserved<span>&#174;</span> </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="text-sm underline">Our Gyms</h4>
          <p className="my-5 text-xs">Gym Near Me</p>
          <p className="my-5 text-xs">Gym Membership</p>
        </div>
        <div  className="mt-16 basis-1/4 md:mt-0">
        <h4 className="text-sm underline">Contact Us</h4>
          <p className="my-5 text-xs">bodytechfit@gmail.com</p>
          <p className="my-5 text-xs">0044 1234567</p>
        </div>
      </div>
    </footer>
  )
}