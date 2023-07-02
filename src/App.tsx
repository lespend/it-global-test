import './App.css'
import CloseIcon from './assets/Close_Button.svg'
import BurgerIcon from './assets/Burger_Button.svg'
import FirstNestingLevel from './components/FirstNestingLevel'
import { useContext, useState } from 'react';
import { NavigationContext } from './context/navigationContext';
import SecondNestingLevel from './components/SecondNestingLevel';
import ThirdNestingLevel from './components/ThirdNestingLevel';
import Select from './components/Select';
import { LanguageContext } from './context/languageContext';
import { languageData } from './data/languageData';

function App() {
  const [isActive, setIsActive] = useState(true)
  const {navigation} = useContext(NavigationContext)
  const {selected, setSelected} = useContext(LanguageContext)

  return (
    <div className='window'>
      <div className='top-navigation container'>
          <Select selected={selected} setSelected={setSelected} options={languageData}/>
          <button onClick={() => setIsActive(!isActive)} className='top-navigation__button'>
            {isActive && <img src={CloseIcon} alt="Иконка закрыть мею" />}
            {!isActive && <img src={BurgerIcon} alt="Иконка открыть меню" />}
          </button>
      </div>

      {isActive && navigation.split('/').length === 1 && <FirstNestingLevel/>}
      {isActive && navigation.split('/').length === 2 && <SecondNestingLevel/>}
      {isActive && navigation.split('/').length === 3 && <ThirdNestingLevel/>}
    </div>
  )
}

export default App
