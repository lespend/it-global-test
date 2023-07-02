import { LanguageContext } from "./languageContext"
import { useState } from 'react'

type Props = {
    children: React.ReactElement,
}

const LanguageProvider = ({ children }: Props) => {
    const [selected, setSelected] = useState('ru')

    return (
        <LanguageContext.Provider value={{selected, setSelected}}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider