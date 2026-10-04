

export enum ButtonColor {
    BLUE = 'bg-blue-600 hover:bg-blue-700 text-white',
    TRANSPARENT = 'border-2 border-white text-white hover:bg-white hover:text-slate-900 dark:hover:text-slate-900',
    LIGHT = 'bg-white text-slate-900 hover:bg-slate-200'
}

interface ButtonProps { 
    children: React.ReactNode,
    tag?: "button" | "a",
    color?: ButtonColor
    onClick?: () => void,
    href?: string,
}

export function Button({ children, tag = "button", onClick, href, color }: ButtonProps) {
 
    return (
        <>
            {tag === "a" ? (
                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${color ? color : ButtonColor.BLUE} 
                        px-8 py-4 rounded-lg font-semibold transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2`}
                >
                    {children}
                </a>
            ) : (
                <button
                    onClick={onClick}
                    className={`${color ? color : ButtonColor.LIGHT} 
                         px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2 transition shadow-lg hover:shadow-xl`}
                >
                    {children}
                </button>
            )}
           
        </>
    )
}
