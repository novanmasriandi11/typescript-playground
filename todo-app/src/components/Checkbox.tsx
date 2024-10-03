interface CheckboxProps{
    checked: boolean;
    onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
    return (
        <label className="flex items-center cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="appearance-none cursor-pointer h-5 w-5 border-2 rounded-md mr-2 checked:border-transparent focus:outline-none checked:appearance-auto"
            />
        </label>
    )
}
