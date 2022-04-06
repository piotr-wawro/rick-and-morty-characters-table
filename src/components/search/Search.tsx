import styles from './Search.module.css'
import search from 'icons/search.svg'

const Search = () => {
    return (
        <div className={styles.container}>
            <input className={styles.text} type='text' placeholder='Search' />
            <div className={styles.iconBox}>
                <img src={search} className={styles.icon}/>
            </div>
        </div>
    )
}

export default Search