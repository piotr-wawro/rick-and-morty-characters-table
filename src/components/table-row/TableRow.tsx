import { Character } from 'api/rickAndMortyApi'
import Avatar from 'components/avatar/Avatar'
import styles from './TableRow.module.css'

import alive from 'icons/alive.svg'
import unknown from 'icons/unknown.svg'
import dead from 'icons/dead.svg'
import { Origin, Status } from 'app/filterSlice'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { selectSelected, switchState } from 'app/selectionSlice'
import { useEffect, useState } from 'react'
import { selectOverrideStatus } from 'app/statusSlice'

export interface TableRowProps {
    character: Character
}

const TableRow = ({character}: TableRowProps) => {
    const dispatch = useAppDispatch()
    const status = useAppSelector(selectOverrideStatus)

    const characterStatus = (status[parseInt(character.id)] !== undefined) ?
                            status[parseInt(character.id)] :
                            character.status

    let container = styles.container
    let checkboxChecked = !!useAppSelector(selectSelected)[parseInt(character.id)]

    let name = styles.name
    let species = styles.species

    let originType = styles.originType
    let originName = (character.origin.name === Origin.UNKNOWN) ?
                     styles.originNameUnknown :
                     styles.originName

    let episode = styles.episode
    const [episode0, setEpisode0] = useState('')
    const [episode1, setEpisode1] = useState('')

    let statusIcon = <></>
    let statusName = styles.statusName

    useEffect(() => {
        if(character.episode.length <= 2) {
            setEpisode0(character.episode[0]?.name)
            setEpisode1(character.episode[1]?.name)
        }
        else {
            let random0 = Math.floor(Math.random()*(character.episode.length-1))
            let random1 = Math.floor(Math.random()*(character.episode.length-1))

            while(random0 === random1) {
                random1 = Math.floor(Math.random()*(character.episode.length-1))
            }

            setEpisode0(character.episode[random0].name)
            setEpisode1(character.episode[random1].name)
        }
    }, [])

    if(characterStatus === 'Alive') {
        statusIcon = <img className={styles.icon} src={alive} />
    }
    else if(characterStatus === 'unknown') {
        statusIcon = <img className={styles.icon} src={unknown} />
        statusName = styles.statusUnknown
    }
    else if(characterStatus === 'Dead') {
        statusIcon = <img className={styles.icon} src={dead} />
        container = `${styles.container} ${styles.grayContainer}`
        name = `${styles.name} ${styles.grayName}`
        species = `${styles.species} ${styles.graySpecies}`
        originName = (character.origin.name === Origin.UNKNOWN) ?
                     `${styles.originNameUnknown} ${styles.grayOriginNameUnknown}` :
                     `${styles.originName} ${styles.grayOriginName}`
        originType = `${styles.originType} ${styles.grayOriginType}`
        episode = `${styles.episode} ${styles.grayEpisode}`
    }

    const handleCheckboxClick = () => {
        dispatch(switchState(parseInt(character.id)))
    }

    return (
        <div className={container}>
            <div className={styles.checkboxContainer}>
                <input className={styles.checkbox} type='checkbox' onChange={handleCheckboxClick} checked={checkboxChecked} />
            </div>

            <div className={styles.dataContainer}>
                <div className={styles.nameBox}>
                    <p className={name}>{character.name}</p>
                    <p className={species}>{character.species}</p>
                </div>

                <div className={styles.avatarBox}>
                    <Avatar image={character.image} />
                </div>

                <div className={styles.originBox}>
                    <p className={originName}>{character.origin.name}</p>
                    <p className={originType}>{character.origin.type}</p>
                </div>

                <div className={styles.episodeBox}>
                    <p className={episode}>{episode0}</p>
                    <p className={episode}>{episode1}</p>
                </div>

                <div className={styles.status}>
                    <div className={styles.iconContainer}>
                        {statusIcon}
                    </div>
                    <p className={statusName}>{characterStatus}</p>
                </div>
            </div>
        </div>
    )
}

export default TableRow
