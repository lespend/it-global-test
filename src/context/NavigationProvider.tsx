import { useState } from 'react'
import { NavigationContext } from './navigationContext'

type Props = {
    children: React.ReactElement,
}

const NavigationProvider = ({ children }: Props) => {
    const [navigation, setNavigation] = useState('')

    return (
        <NavigationContext.Provider value={{navigation, setNavigation}}>
            {children}
        </NavigationContext.Provider>
    )
}

export default NavigationProvider