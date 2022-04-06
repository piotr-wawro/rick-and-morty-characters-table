import styles from './Avatar.module.css'

export interface AvatarProps {
    image: string;
}

const Avatar = ({image}: AvatarProps) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} />
        </div>
    )
}

export default Avatar
