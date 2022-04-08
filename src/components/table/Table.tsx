import { Character } from 'api/rickAndMortyApi'
import TableHeader from 'components/table-header/TableHeader'
import TableRow from 'components/table-row/TableRow'
import styles from './Table.module.css'

export interface TableProps {
    data: Character[]
}

const Table = ({data}: TableProps) => {
    return (
        <div className={styles.container}>
            <TableHeader />
            {data.map((value, index) => {
                return (
                    <TableRow key={index} character={value} />
                )
            })}
        </div>
    )
}

export default Table
