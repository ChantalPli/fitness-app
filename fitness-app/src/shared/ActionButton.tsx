import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

type Props = {
  children: React.ReactNode
  setSelectedPage: (value:SelectedPage) => void
}

export default function ActionButton({children, setSelectedPage}: Props) {
  return (
    <AnchorLink
    className="rounded-md bg-primary-600 px-10 py-2 hover:bg-secondary-500 text-white hover:text-black"
    onClick={() => setSelectedPage(SelectedPage.ContactUs)}
    href="#contactus"
    >
      {children}
    </AnchorLink>
  )
}