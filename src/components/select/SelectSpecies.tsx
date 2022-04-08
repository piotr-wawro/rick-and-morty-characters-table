import { selectSpecies, setSpecies, Species } from "app/filterSlice"
import { useAppDispatch, useAppSelector } from "app/hooks"
import Select from "./Select"


const SelectSpecies = () => {
    const dispatch = useAppDispatch();
    const species = useAppSelector(selectSpecies)

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setSpecies(event.target.value as Species))
    }

    return (
        <Select onChange={onChange} value={species}>
            <option value={Species.NONE}>Species</option>
            <option value={Species.HUMAN}>{Species.HUMAN}</option>
            <option value={Species.ALIEN}>{Species.ALIEN}</option>
        </Select>
    )
}

export default SelectSpecies
