interface InputProps {
    type?: string;
    value: string;
    onChange: (event:React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
}

export function Input({type = "text", value, onChange, placeholder, required}:InputProps) {
    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className="border border-gray-600 bg-gray-700 text-white p-2 w-full rounded mb-2"
        />    
    )
}
