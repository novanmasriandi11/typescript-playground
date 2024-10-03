interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

export function Button({children, className, onClick}:ButtonProps) {
    return (
        <button onClick={onClick} className={`${className} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}>
            {children}
        </button>
    )    
}
