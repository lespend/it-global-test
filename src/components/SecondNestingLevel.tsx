import { useContext } from "react"
import { navigationData } from "../data/navigationData"
import { NavigationContext } from "../context/navigationContext"
import { LanguageContext } from "../context/languageContext"
import { useRef } from 'react';
import FadeInAnimation from "./animations/FadeInAnimation";

const SecondNestingLevel = () => {
    const { navigation, setNavigation } = useContext(NavigationContext)
    const { selected } = useContext(LanguageContext)
    const nodeRef = useRef(null)
    const currentNavigation = navigationData.filter((item) => item.id == navigation.split('/')[1])[0]
    const currentNodes = currentNavigation.nodes
    const currentName = currentNavigation.name[selected]

    const onDropdown = (path: string) => {
        if (currentNodes?.filter((item) => item.id == path)[0].nodes) {
            setNavigation((prev: string) => `${prev}/${path}`)
        }
    }

    const onUpdown = () => {
        setNavigation((prev: string) => `${prev.slice(0, prev.lastIndexOf('/'))}`)
    }


    return (
        <>
            <div className='second-nesting-top container'>
                <button onClick={onUpdown} className="navigation-button-back primary-navigation-button">
                    {currentName}
                </button>
            </div>
            <FadeInAnimation nodeRef={nodeRef}>
                <div className='second-nesting-center container navigation-animate-enter' ref={nodeRef}>
                    {currentNodes?.map((item) => (
                        <button key={item.id} onClick={() => onDropdown(item.id)} className='secondary-navigation-button center-navigation__button'>
                            {item.name[selected]}
                        </button>
                    ))}
                </div>
            </FadeInAnimation>
        </>
    )
}

export default SecondNestingLevel