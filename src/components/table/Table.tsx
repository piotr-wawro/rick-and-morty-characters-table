import { Character } from 'api/rickAndMortyApi'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { multiSelect, multiUnselect, selectSelected } from 'app/selectionSlice'
import TableHeader from 'components/table-header/TableHeader'
import TableRow from 'components/table-row/TableRow'
import { useMemo } from 'react'
import styles from './Table.module.css'

export interface TableProps {
    data: Character[]
}

const Table = ({data}: TableProps) => {
    const selected = useAppSelector(selectSelected)
    const dispatch = useAppDispatch()

    const handleHeaderCheckboxClick = () => {
        let characterIds = data.map((element) => (parseInt(element.id)))

        if(checkboxChecked) {
            dispatch(multiUnselect(characterIds))
        }
        else {
            dispatch(multiSelect(characterIds))
        }
    }

    const checkboxChecked = useMemo(() => {
        for(let element of data) {
            if(selected[parseInt(element.id)] === undefined || selected[parseInt(element.id)] === false) {
                return false
            }
        };

        return true
    }, [selected])

    return (
        <div className={styles.container}>
            <TableHeader onCheckboxClick={handleHeaderCheckboxClick} checkboxChecked={checkboxChecked} />
            {data.map((value, index) => {
                return (
                    <TableRow key={index} character={value} />
                )
            })}
        </div>
    )
}

export default Table
