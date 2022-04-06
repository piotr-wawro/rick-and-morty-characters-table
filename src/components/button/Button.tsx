import styles from './Button.module.css'

export interface ButtonProps {
    color: 'blue' | 'red';
    image: string;
    text: string;
}

const Button = ({color, image, text}: ButtonProps) => {
    const container = (color === 'blue') ? styles.blueContainer : styles.redContainer

    return (
        <div className={container}>
            <div className={styles.iconBox}>
                <img src={image} className={styles.icon}/>
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    )
}

export default Button
