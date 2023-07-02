import { useState, useEffect, useRef } from 'react'
import { languageData } from '../data/languageData';

type Props = {
    selected: string,
    setSelected: (value: string) => void;
    options: any;
}

const Select = ({ selected, setSelected, options }: Props) => {
    const [isActive, setIsActive] = useState(false);
    const selectedIcon = languageData.filter((item) => item.value == selected)[0].icon
    const selectRef = useRef<HTMLDivElement>(null);

    const handleClose = (e: any) => {
        if (!selectRef.current) return;

        if (isActive && !selectRef.current.contains(e.target)) {
            setIsActive(false)
        }
    }

    const handleSelect = (value: string) => {
        setSelected(value)
        setIsActive(false)
    }

    useEffect(() => {
        document.addEventListener('click', handleClose)
        return () => document.removeEventListener('click', handleClose)
    })

    return (
        <div className="custom-select" ref={selectRef}>
            <button onClick={() => setIsActive(!isActive)} className={`custom-select__button ${isActive ? 'custom-select__button--active' : ''}`}>
                <img width='24px' height='24px' src={selectedIcon} alt="Иконка выбранной страны" className='custom-select__button-icon' />
                {selected}
            </button>
            {isActive && (
                <div className="custom-select-content">
                    <div className='custom-select-content__header'>Страна</div>
                    <div className='custom-select-content__options'>
                    {options.map((option: any) => (
                        <button 
                            key={option.value}
                            onClick={() => handleSelect(option.value)} 
                            className={`custom-select-content__option ${option.value === selected ? 'custom-select-content__option--active' : ''}`}
                        >
                            <img width='16px' height='16px' src={option.icon} alt="Иконка страны" className='custom-select-content__option-icon'/>
                            {option.name}
                        </button>
                    ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Select