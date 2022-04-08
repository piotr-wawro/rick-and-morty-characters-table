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
            <option value={Species.HUMANOID}>{Species.HUMANOID}</option>
            <option value={Species.UNKNOWN}>{Species.UNKNOWN}</option>
            <option value={Species.POOPYBUTTHOLE}>{Species.POOPYBUTTHOLE}</option>
            <option value={Species.MYTHOLOGICALCREATURE}>{Species.MYTHOLOGICALCREATURE}</option>
            <option value={Species.ANIMAL}>{Species.ANIMAL}</option>
            <option value={Species.CRONENBERG}>{Species.CRONENBERG}</option>
            <option value={Species.DISEASE}>{Species.DISEASE}</option>
            <option value={Species.ROBOT}>{Species.ROBOT}</option>
        </Select>
    )
}

export default SelectSpecies
