import { Character } from 'api/rickAndMortyApi'
import Avatar from 'components/avatar/Avatar'
import styles from './TableRow.module.css'

import alive from 'icons/alive.svg'
import unknown from 'icons/unknown.svg'
import dead from 'icons/dead.svg'
import { Origin, Status } from 'app/filterSlice'

export interface TableRowProps {
    character: Character
}

const TableRow = ({character}: TableRowProps) => {
    let episode0 = ''
    let episode1 = ''
    let statusIcon = <></>
    let container = styles.container
    let statusName = styles.statusName
    let name = styles.name
    let species = styles.species
    let originName = (character.origin.name === Origin.UNKNOWN) ? styles.originNameUnknown : styles.originName
    let originType = styles.originType
    let episode = styles.episode

    if(character.episode.length <= 2) {
        episode0 = character.episode[0]?.name
        episode1 = character.episode[1]?.name
    }
    else {
        let random0 = Math.floor(Math.random()*(character.episode.length-1))
        let random1 = Math.floor(Math.random()*(character.episode.length-1))

        while(random0 === random1) {
            random1 = Math.floor(Math.random()*(character.episode.length-1))
        }

        episode0 = character.episode[random0].name
        episode1 = character.episode[random1].name
    }

    if(character.status === 'Alive') {
        statusIcon = <img className={styles.icon} src={alive} />
    }
    else if(character.status === 'unknown') {
        statusIcon = <img className={styles.icon} src={unknown} />
        statusName = styles.statusUnknown
    }
    else if(character.status === 'Dead') {
        statusIcon = <img className={styles.icon} src={dead} />
        container = `${styles.container} ${styles.grayContainer}`
        name = `${styles.name} ${styles.grayName}`
        species = `${styles.species} ${styles.graySpecies}`
        originName = (character.origin.name === Origin.UNKNOWN) ? `${styles.originNameUnknown} ${styles.grayOriginNameUnknown}` : `${styles.originName} ${styles.grayOriginName}`
        originType = `${styles.originType} ${styles.grayOriginType}`
        episode = `${styles.episode} ${styles.grayEpisode}`
    }

    return (
        <div className={container}>
            <div className={styles.checkboxContainer}>
                <input className={styles.checkbox} type='checkbox' />
            </div>

            <div className={styles.dataContainer}>
                <div className={styles.nameBox}>
                    <p className={name}>{character.name}</p>
                    <p className={species}>{character.species}</p>
                </div>

                <div className={styles.avatar}>
                    <Avatar image={character.image} />
                </div>

                <div className={styles.originBox}>
                    <p className={originName}>{character.origin.name}</p>
                    <p className={originType}>{character.origin.type}</p>
                </div>

                <div className={styles.episodes}>
                    <p className={episode}>{episode0}</p>
                    <p className={episode}>{episode1}</p>
                </div>

                <div className={styles.status}>
                    <div className={styles.iconContainer}>
                        {statusIcon}
                    </div>
                    <p className={statusName}>{character.status}</p>
                </div>
            </div>
        </div>
    )
}

export default TableRow
