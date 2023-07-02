import { useContext } from "react"
import { navigationData } from "../data/navigationData"
import { NavigationContext } from "../context/navigationContext"
import { LanguageContext } from "../context/languageContext"
import { useRef } from 'react';
import FadeInAnimation from "./animations/FadeInAnimation";

const FirstNestingLevel = () => {
    const { selected } = useContext(LanguageContext)
    const { setNavigation } = useContext(NavigationContext)
    const nodeRef = useRef(null)
    const onDropdown = (path: string) => {
        if (navigationData.filter((item) => item.id == path)[0]?.nodes) {
            setNavigation((prev: string) => `${prev}/${path}`)
        }
    }


    return (
        <FadeInAnimation nodeRef={nodeRef}>
            <div className='center-navigation container navigation-animate-enter' ref={nodeRef}>
                {navigationData.map((item) => (
                    <button key={item.id} onClick={() => onDropdown(item.id)} className='primary-navigation-button center-navigation__button'>
                        {item.name[selected]}
                    </button>
                ))}
            </div>
        </FadeInAnimation>
    )
}

export default FirstNestingLevel