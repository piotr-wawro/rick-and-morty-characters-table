import styles from './TableHeader.module.css'

export interface TableHeaderProps {
    onCheckboxClick: () => void,
    checkboxChecked: boolean
}

const TableHeader = ({onCheckboxClick, checkboxChecked}: TableHeaderProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.checkboxContainer}>
                <input
                    className={styles.checkbox}
                    type='checkbox'
                    onChange={onCheckboxClick}
                    checked={checkboxChecked}
                />
            </div>

            <div className={styles.headerContainer}>
                <div className={styles.header}>
                    <p className={styles.headerText}>Name</p>
                </div>

                <div className={styles.header}>
                    <p className={styles.headerText}>Avatar</p>
                </div>

                <div className={styles.header}>
                    <p className={styles.headerText}>Origin</p>
                </div>

                <div className={styles.header}>
                    <p className={styles.headerText}>Episodes</p>
                </div>

                <div className={styles.header}>
                    <p className={styles.headerText}>Status</p>
                </div>
            </div>
        </div>
    )
}

export default TableHeader
