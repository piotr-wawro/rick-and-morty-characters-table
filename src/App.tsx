import React, { useEffect } from 'react';
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
import { useAppSelector } from 'app/hooks';
import { selectFilter } from 'app/filterSlice';
import { selectCurrnetPage } from 'app/pageSelectorSlice';

function App() {
    const [getCharactersQuery, getCharactersStatus] = useGetCharactersMutation()
    const filter = useAppSelector(selectFilter)
    const currentPage = useAppSelector(selectCurrnetPage)

    useEffect(() => {
        getCharactersQuery({
            page: currentPage,
            name: filter.name,
            status: filter.status,
            species: filter.species,
        })
    }, [filter, currentPage])


    return (
        <div className={styles.app}>
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
                    <Button color='blue' image={edit} text='Change status' />
                    <Button color='red' image={remove} text='Change status' />
                </div>
            </div>

            <div className={styles.table}>
                {getCharactersStatus.isSuccess && (
                    <Table data={getCharactersStatus.data.data.characters.results}/>
                )}
            </div>

            <div className={styles.pageSelector}>
                <PageSelector />
            </div>
        </div>
    );
}

export default App;
