import { useMemo, useState } from 'react';
import styles from './App.module.css';

import edit from 'icons/edit.svg'
import remove from 'icons/remove.svg'

import PageSelector from 'components/page-selector/PageSelector';
import Table from 'components/table/Table';
import Search from 'components/search/Search';
import SelectOrigin from 'components/select/SelectOrigin';
import SelectSpecies from 'components/select/SelectSpecies';
import SelectStatus from 'components/select/SelectStatus';
import Button from 'components/button/Button';
import ChangeStatusBox from 'components/change-status-modal/ChangeStatusModal';
import { useGetCharactersQuery } from 'api/rickAndMortyApi';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { selectFilter, selectStatus, Status } from 'app/filterSlice';
import { selectCurrnetPage } from 'app/pageSelectorSlice';
import { selectSelected, switchState } from 'app/selectionSlice';
import { overrideStatus } from 'app/statusOverrideSlice';

function App() {
    const dispatch = useAppDispatch()
    const filter = useAppSelector(selectFilter)
    const currentPage = useAppSelector(selectCurrnetPage)
    const selected = useAppSelector(selectSelected)
    const status = useAppSelector(selectStatus)
    const [modalVisible, setModalVisible] = useState(false)
    const getCharacters = useGetCharactersQuery({
        page: currentPage,
        name: filter.name,
        status: filter.status,
        species: filter.species,
    })

    const selectedCharactersIds = useMemo(() => {
        let tmp = Object.keys(selected).filter(key => selected[parseInt(key)] === true)
        return tmp.map(e => parseInt(e))
    }, [selected])

    const selectedCharacterStatus = useMemo((): Status => {
        if(selectedCharactersIds[0] === undefined) {
            return Status.NONE
        }
        else if(status[selectedCharactersIds[0]] === undefined) {
            return (getCharacters.data?.data.characters.results.find(e => parseInt(e.id) === selectedCharactersIds[0])?.status) ?
            getCharacters.data.data.characters.results.find(e => parseInt(e.id) === selectedCharactersIds[0])?.status as Status:
            Status.NONE
        }
        else {
            return status[selectedCharactersIds[0]] as Status
        }
    }, [selectedCharactersIds])

    return (
        <div className={styles.app}>
            {modalVisible &&
                <ChangeStatusBox
                    onCancle={() => {setModalVisible(false)}}

                    onConfirm={(status: Status) => {
                        if(selectedCharactersIds[0]) {
                            dispatch(overrideStatus({id: selectedCharactersIds[0], status: status}))
                            dispatch(switchState(selectedCharactersIds[0]))
                        }
                        setModalVisible(false)
                    }}

                    currnetStatus={selectedCharacterStatus}
                />
            }

            <p className={styles.header}>Characters</p>

            <div className={styles.panel}>
                <div className={styles.filterBox}>
                    <Search />
                    <div className={styles.selectBox}>
                        <SelectSpecies />
                        <SelectOrigin />
                        <SelectStatus />
                    </div>
                </div>
                <div className={styles.buttonBox}>
                    <Button
                        color='blue'
                        image={edit}
                        text='Change status'
                        onClick={() => {setModalVisible(true)}}
                        active={selectedCharactersIds.length < 2}
                    />
                    <Button
                        color='red'
                        image={remove}
                        text='Remove characters'
                    />
                </div>
            </div>

            <div className={styles.tableBox}>
                {getCharacters.isSuccess && (
                    <Table data={getCharacters.data.data.characters.results} />
                )}
            </div>

            <div className={styles.pageSelectorBox}>
                <PageSelector />
            </div>
        </div>
    );
}

export default App;
