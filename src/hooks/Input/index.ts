import {
    BaseSyntheticEvent,
    ChangeEvent,
    ChangeEventHandler,
    useState,
} from "react"

export const useInput = <T>(
    initValue: T,
    onChangeEffect?: ChangeEventHandler<HTMLInputElement>
) => {
    const [value, setValue] = useState(initValue)

    return [
        {
            value,
            onChange: (e: BaseSyntheticEvent) => {
                setValue(e.target.value)
                onChangeEffect &&
                    onChangeEffect(e as ChangeEvent<HTMLInputElement>)
            },
        },
        () => setValue(initValue),
    ]
}
