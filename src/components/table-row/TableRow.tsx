import { Character } from 'api/rickAndMortyApi'
import Avatar from 'components/avatar/Avatar'
import styles from './TableRow.module.css'

import alive from 'icons/alive.svg'
import unknow from 'icons/unknow.svg'
import dead from 'icons/dead.svg'

export interface TableRowProps {
    character: Character
}

const TableRow = ({character}: TableRowProps) => {
    let episode0 = ''
    let episode1 = ''
    let statusIcon = <></>

    if(character.episode.length <= 2) {
        episode0 = character.episode[0].name
        episode1 = character.episode[1].name
    }
    else {
        let random0 = Math.floor(Math.random()*character.episode.length-1)
        let random1 = Math.floor(Math.random()*character.episode.length-1)

        while(random0 === random1) {
            random1 = Math.floor(Math.random()*character.episode.length-1)
        }

        episode0 = character.episode[random0].name
        episode1 = character.episode[random1].name
    }

    if(character.status === 'alive') statusIcon = <img className={styles.icon} src={alive} />
    else if(character.status === 'unknow') statusIcon = <img className={styles.icon} src={unknow} />
    else if(character.status === 'dead') statusIcon = <img className={styles.icon} src={dead} />

    return (
        <div className={styles.container}>
            <div className={styles.checkboxContainer}>
                <input className={styles.checkbox} type='checkbox' />
            </div>

            <div className={styles.dataContainer}>
                <div className={styles.name}>
                    <p className={styles.name}>{character.name}</p>
                    <p className={styles.species}>{character.species}</p>
                </div>

                <div className={styles.avatar}>
                    <Avatar image={character.image} />
                </div>

                <div className={styles.origin}>
                    <p className={styles.originName}>{character.origin.name}</p>
                    <p className={styles.originType}>{character.origin.type}</p>
                </div>

                <div className={styles.episodes}>
                    <p className={styles.episode}>{episode0}</p>
                    <p className={styles.episode}>{episode1}</p>
                </div>

                <div className={styles.status}>
                    <div className={styles.iconContainer}>
                        {statusIcon}
                    </div>
                    <p className={styles.statusName}>{character.status}</p>
                </div>
            </div>
        </div>
    )
}

export default TableRow
