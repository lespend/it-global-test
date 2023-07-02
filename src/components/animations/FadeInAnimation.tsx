import { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

type Props = {
    nodeRef: React.MutableRefObject<any>,
    children: React.ReactElement,
}

const FadeInAnimation = ({ children, nodeRef }: Props) => {
    const [isAnimated, setIsAnimated] = useState(false)

    useEffect(() => {
        setIsAnimated(true)
    })

    return (
        <CSSTransition nodeRef={nodeRef} timeout={200} in={isAnimated} classNames='navigation-animate'>
            {children}
        </CSSTransition>
    )
}

export default FadeInAnimation