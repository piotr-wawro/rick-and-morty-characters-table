import styles from './PageButton.module.css'

export interface PageButtonProps {
    text?: string;
    image?: string;
    selected?: boolean;
    onClick?: () => {};
}

const PageButton = ({text, image, selected, onClick}: PageButtonProps) => {
    const container = (selected) ? styles.selectedContainer : styles.container

    return (
        <button className={container} onClick={onClick}>
            {image ? (
                <img src={image} />
            ) : (
                <p className={styles.text}>{text}</p>
            )}
        </button>
    )
}

export default PageButton
