import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll"


type Props = {
  page:string;
  selectedPage:SelectedPage;
  setSelectedPage:(value:SelectedPage ) => void;
}

export default function Link({
  page,
  selectedPage,
  setSelectedPage
}: Props) {

  const lowerCasePage = page.toLocaleLowerCase().replace(/ /g, "" ) as SelectedPage;

  return (
    <AnchorLink
    className={`${selectedPage === lowerCasePage? "text-primary-600" : ""} transition duration-500 hover:text-primary-600`}
    href={`#${lowerCasePage}`}
    onClick={()=> setSelectedPage(lowerCasePage)}
    >
        {page}
    </AnchorLink>
  )
}

