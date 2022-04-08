import styles from './Search.module.css'
import searchIcon from 'icons/search.svg'
import { useAppDispatch } from 'app/hooks'
import { useSelector } from 'react-redux'
import { selectName, setName } from 'app/filterSlice'

const Search = () => {
    const dispatch = useAppDispatch()
    const search = useSelector(selectName)

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setName(event.target.value))
    }

    return (
        <div className={styles.container}>
            <input
                className={styles.text}
                type='text'
                placeholder='Search'
                onChange={onChange}
                value={search}
            />
            <div className={styles.iconBox}>
                <img src={searchIcon} className={styles.icon}/>
            </div>
        </div>
    )
}

export default Search