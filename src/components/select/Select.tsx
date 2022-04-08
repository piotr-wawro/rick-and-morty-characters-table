import styles from './Select.module.css'
import arrow from 'icons/arrow.svg'

export interface SelectProps {
    children?: React.ReactNode;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    value?: string;
}

const Select = ({children, onChange, value}: SelectProps) => {
    return (
        <div className={styles.selectBox}>
            <select onChange={onChange} value={value}>
                {children}
            </select>
            <div className={styles.arrowBox}>
                <img className={styles.arrowIcon} src={arrow} />
            </div>
        </div>
    )}

export default Select
