import { selectStatus, setSpecies, setStatus, Status } from "app/filterSlice"
import { useAppDispatch, useAppSelector } from "app/hooks"
import Select from "./Select"

const SelectOrigin = () => {
    const dispatch = useAppDispatch();
    const species = useAppSelector(selectStatus)

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setStatus(event.target.value as Status))
    }

    return (
        <Select onChange={onChange} value={species}>
            <option value={Status.NONE}>Status</option>
            <option value={Status.ALIVE}>{Status.ALIVE}</option>
            <option value={Status.UNKNOWN}>{Status.UNKNOWN}</option>
            <option value={Status.DEAD}>{Status.DEAD}</option>
        </Select>
    )
}

export default SelectOrigin
