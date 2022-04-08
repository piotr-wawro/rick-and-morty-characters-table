import { selectOrigin, setOrigin, Origin } from "app/filterSlice"
import { useAppDispatch, useAppSelector } from "app/hooks"
import Select from "./Select"

const SelectOrigin = () => {
    const dispatch = useAppDispatch();
    const species = useAppSelector(selectOrigin)

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setOrigin(event.target.value as Origin))
    }

    return (
        <Select onChange={onChange} value={species}>
            <option value={Origin.NONE}>Origin</option>
            <option value={Origin.EARTH_C137}>{Origin.EARTH_C137}</option>
            <option value={Origin.ABADANGO}>{Origin.ABADANGO}</option>
        </Select>
    )
}

export default SelectOrigin
