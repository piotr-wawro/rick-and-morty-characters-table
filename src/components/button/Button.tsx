import styles from './Button.module.css'

export interface ButtonProps {
    color: 'blue' | 'red';
    image: string;
    text: string;
    onClick?: () => void;
    active?: boolean;
}

const Button = ({color, image, text, onClick, active = true}: ButtonProps) => {
    let container = (color === 'blue') ? styles.blueContainer : styles.redContainer
    container += active ? '' : ` ${styles.unactive}`

    return (
        <div className={container} onClick={onClick}>
            <div className={styles.iconBox}>
                <img src={image} className={styles.icon}/>
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Button
