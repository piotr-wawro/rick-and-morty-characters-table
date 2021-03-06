import { selectStatus, Status } from 'app/filterSlice'
import { useAppSelector } from 'app/hooks';
import { useState } from 'react';
import styles from './ChangeStatusModal.module.css'

export interface ChangeStatusBoxProps {
    onConfirm: (status: Status) => void;
    onCancle: () => void;
    currnetStatus: Status
}

const ChangeStatusBox = ({onConfirm, onCancle, currnetStatus}: ChangeStatusBoxProps) => {
    const [status, setStatus] = useState<Status>(Status.NONE)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as Status)
    }

    const aliveEnabled = currnetStatus === Status.UNKNOWN
    const deadEnabled = currnetStatus === Status.UNKNOWN || currnetStatus === Status.ALIVE

    return (
        <div className={styles.modal} onClick={onCancle}>
            <div className={styles.container} onClick={(e) => {e.stopPropagation()}}>
                <p className={styles.header}>Change Status</p>
                <div className={styles.radioBox}>
                    <label className={`${aliveEnabled ? styles.label : styles.labelDisabled}`}>
                        {aliveEnabled ? (
                                <input
                                    type='radio'
                                    name='status'
                                    value={Status.ALIVE}
                                    checked={status === Status.ALIVE}
                                    onChange={handleChange}
                                />
                            ) : (
                                <input
                                    type='radio'
                                    name='status'
                                    value={Status.ALIVE}
                                    checked={status === Status.ALIVE}
                                    onChange={handleChange}
                                    disabled
                                />
                            )
                        }
                        {Status.ALIVE}
                    </label>
                    <br />
                    <label className={`${deadEnabled ? styles.label : styles.labelDisabled}`}>
                        {deadEnabled ? (
                                <input
                                    type='radio'
                                    name='status'
                                    id={Status.DEAD}
                                    value={Status.DEAD}
                                    checked={status === Status.DEAD}
                                    onChange={handleChange}
                                />
                            ) : (
                                <input
                                    type='radio'
                                    name='status'
                                    id={Status.DEAD}
                                    value={Status.DEAD}
                                    checked={status === Status.DEAD}
                                    onChange={handleChange}
                                    disabled
                                />
                            )
                        }
                        {Status.DEAD}
                    </label>
                </div>
                <div className={styles.buttonsBox}>
                    <p className={`${styles.button} ${styles.blue}`} onClick={() => {onConfirm(status)}}>
                        confirm
                    </p>
                    <p className={`${styles.button} ${styles.red}`} onClick={onCancle}>
                        cancle
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ChangeStatusBox
