import styles from './Search.module.css'
import searchIcon from 'icons/search.svg'
import { useAppDispatch } from 'app/hooks'
import { setName } from 'app/filterSlice'
import { useState } from 'react'

const Search = () => {
    const [searchValue, setSearchValue] = useState('')
    const dispatch = useAppDispatch()

    const updateFilterName = () => {
        dispatch(setName(searchValue))
    }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value)
    }

    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
        updateFilterName()
    }

    const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter') {
            updateFilterName()
        }
    }

    return (
        <div className={styles.container}>
            <input
                className={styles.searchInput}
                type='text'
                placeholder='Search'
                onChange={handleOnChange}
                value={searchValue}
                onBlur={handleOnBlur}
                onKeyDown={handleOnKeyDown}
            />
            <div className={styles.iconBox} onClick={updateFilterName}>
                <img src={searchIcon} className={styles.icon}/>
            </div>
        </div>
    )
}

export default Search