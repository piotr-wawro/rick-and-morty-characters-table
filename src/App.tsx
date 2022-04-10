import React, { useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import styles from './App.module.css';
import Select from 'components/select/Select';

import edit from 'icons/edit.svg'
import remove from 'icons/remove.svg'
import PageButton from 'components/page-button/PageButton';

import a from 'icons/arrowLeft.svg'
import PageSelector from 'components/page-selector/PageSelector';
import Avatar from 'components/avatar/Avatar';
import per from 'icons/300.png'
import TableRow from 'components/table-row/TableRow';
import TableHeader from 'components/table-header/TableHeader';
import Table from 'components/table/Table';
import Search from 'components/search/Search';
import SelectOrigin from 'components/select/SelectOrigin';
import SelectSpecies from 'components/select/SelectSpecies';
import SelectStatus from 'components/select/SelectStatus';
import Button from 'components/button/Button';
import { useGetCharactersMutation } from 'api/rickAndMortyApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectFilter, selectStatus, Status } from 'app/filterSlice';
import { selectCurrnetPage } from 'app/pageSelectorSlice';
import { selectSelected } from 'app/selectionSlice';
import ChangeStatusBox from 'components/change-status-box/ChangeStatusBox';
import { overrideStatus } from 'app/statusSlice';

function App() {
    const dispatch = useAppDispatch()
    const [getCharactersQuery, getCharactersStatus] = useGetCharactersMutation()
    const filter = useAppSelector(selectFilter)
    const currentPage = useAppSelector(selectCurrnetPage)
    const selected = useAppSelector(selectSelected)
    const status = useAppSelector(selectStatus)
    const [changeStatusVisible, setChangeStatusVisible] = useState(false)

    useEffect(() => {
        getCharactersQuery({
            page: currentPage,
            name: filter.name,
            status: filter.status,
            species: filter.species,
        })
    }, [filter, currentPage])

    const selectedCharactersIds = useMemo(() => {
        let tmp = Object.keys(selected).filter(key => selected[parseInt(key)] === true)
        return tmp.map(e => parseInt(e))
    }, [selected])

    const selectedCharacterStatus = useMemo((): Status => {
        if(selectedCharactersIds[0] === undefined) {
            return Status.NONE
        }
        else if(status[selectedCharactersIds[0]] === undefined) {
            return (getCharactersStatus.data?.data.characters.results.find(e => parseInt(e.id) === selectedCharactersIds[0])?.status) ?
            getCharactersStatus.data.data.characters.results.find(e => parseInt(e.id) === selectedCharactersIds[0])?.status as Status:
            Status.NONE
        }
        else {
            return status[selectedCharactersIds[0]] as Status
        }
    }, [selectedCharactersIds])

    return (
        <div className={styles.app}>
            {changeStatusVisible &&
                <ChangeStatusBox
                    onCancle={() => {setChangeStatusVisible(false)}}

                    onConfirm={(status: Status) => {
                        if(selectedCharactersIds[0]) {
                            dispatch(overrideStatus({id: selectedCharactersIds[0], status: status}))
                        }
                        setChangeStatusVisible(false)
                    }}

                    currnetStatus={selectedCharacterStatus}
                />
            }

            <p className={styles.header}>Characters</p>

            <div className={styles.panel}>
                <div className={styles.filter}>
                    <Search />
                    <div className={styles.select}>
                        <SelectSpecies />
                        <SelectOrigin />
                        <SelectStatus />
                    </div>
                </div>
                <div className={styles.buttons}>
                    {selectedCharactersIds.length < 2 && (
                        <Button color='blue' image={edit} text='Change status' onClick={() => {setChangeStatusVisible(true)}}/>
                    )}
                    <Button color='red' image={remove} text='Change status' />
                </div>
            </div>

            <div className={styles.table}>
                {getCharactersStatus.isSuccess && (
                    <Table data={getCharactersStatus.data.data.characters.results} />
                )}
            </div>

            <div className={styles.pageSelector}>
                <PageSelector />
            </div>
        </div>
    );
}

export default App;
