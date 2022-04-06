import TableHeader from 'components/table-header/TableHeader'
import TableRow, { TableRowProps } from 'components/table-row/TableRow'
import styles from './Table.module.css'

export interface TableProps {
    data: TableRowProps[]
}

const Table = ({data}: TableProps) => {
    return (
        <div className={styles.container}>
            <TableHeader />
            {data.map((value, index) => {
                return (
                    <TableRow key={index} character={value.character} />
                )
            })}
        </div>
    )
}

export default Table
