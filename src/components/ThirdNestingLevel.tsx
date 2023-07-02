import { useContext } from "react"
import { navigationData } from "../data/navigationData"
import { NavigationContext } from "../context/navigationContext"
import { LanguageContext } from "../context/languageContext"
import { useRef } from 'react';
import FadeInAnimation from "./animations/FadeInAnimation";

const ThirdNestingLevel = () => {
    const { navigation, setNavigation } = useContext(NavigationContext)
    const { selected } = useContext(LanguageContext)
    const nodeRef = useRef(null)
    const currentNavigation = navigationData.filter((item) => item.id == navigation.split('/')[1])[0].nodes?.filter((item) => item.id === navigation.split('/')[2])[0]
    const currentNodes = currentNavigation?.nodes
    const currentName = currentNavigation?.name[selected]
    const onUpdown = () => {
        setNavigation((prev: string) => `${prev.slice(0, prev.lastIndexOf('/'))}`)
    }

    return (
        <>
            <div className='third-nesting-top container'>
                <button onClick={onUpdown} className="navigation-button-back primary-navigation-button">
                    {currentName}
                </button>
            </div>
            <FadeInAnimation nodeRef={nodeRef}>
                <div className='third-nesting-center container navigation-animate-enter' ref={nodeRef}>
                    {currentNodes?.map((item) => (
                        <div key={item.id} className="third-nesting-center__block">
                            <h2 className="third-nesting-center__title">{item.name[selected]}</h2>
                            <p className="third-nesting-center__body">{item.body?.[selected]}</p>
                        </div>
                    ))}
                </div>
            </FadeInAnimation>
        </>
    )
}

export default ThirdNestingLevel