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
            <option value={Origin.PLANET}>{Origin.PLANET}</option>
            <option value={Origin.UNKNOWN}>{Origin.UNKNOWN}</option>
            <option value={Origin.CLUSTER}>{Origin.CLUSTER}</option>
            <option value={Origin.FANTASYTOWN}>{Origin.FANTASYTOWN}</option>
            <option value={Origin.MICROVERSE}>{Origin.MICROVERSE}</option>
            <option value={Origin.GAME}>{Origin.GAME}</option>
            <option value={Origin.DREAM}>{Origin.DREAM}</option>
            <option value={Origin.BOX}>{Origin.BOX}</option>
            <option value={Origin.DWARFPLANET}>{Origin.DWARFPLANET}</option>
            <option value={Origin.TV}>{Origin.TV}</option>
            <option value={Origin.DIMENSION}>{Origin.DIMENSION}</option>
            <option value={Origin.SPACESTATION}>{Origin.SPACESTATION}</option>
            <option value={Origin.MOUNT}>{Origin.MOUNT}</option>
            <option value={Origin.WOODS}>{Origin.WOODS}</option>
            <option value={Origin.DIEGESIS}>{Origin.DIEGESIS}</option>
            <option value={Origin.NIGHTMARE}>{Origin.NIGHTMARE}</option>
            <option value={Origin.ASTEROID}>{Origin.ASTEROID}</option>
            <option value={Origin.REALITY}>{Origin.REALITY}</option>
            <option value={Origin.HUMAN}>{Origin.HUMAN}</option>
            <option value={Origin.HELL}>{Origin.HELL}</option>
            <option value={Origin.SPACETAHOE}>{Origin.SPACETAHOE}</option>
            <option value={Origin.CONSCIOUSNESS}>{Origin.CONSCIOUSNESS}</option>
        </Select>
    )
}

export default SelectOrigin
