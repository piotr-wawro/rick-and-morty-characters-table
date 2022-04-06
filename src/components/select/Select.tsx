import styles from './Select.module.css'
import arrow from 'icons/arrow.svg'

export interface SelectProps {
    children?: React.ReactNode;
}

const Select = ({children}: SelectProps) => {
    return (
        <div className={styles.selectBox}>
            <select>
                {children}
            </select>
            <div className={styles.arrowBox}>
                <img className={styles.arrowIcon} src={arrow} />
            </div>
        </div>
    )}

export default Select
