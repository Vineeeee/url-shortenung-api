export const NavLink = ({
    children, 
    isButton = false,
    className = '',
}: {
    children: string, 
    isButton?: boolean,
    className?: string,
    onClick?: () => void
}) => {

    const baseClasses = "font-medium cursor-pointer transition-colors duration-200"

    if (isButton) {
        return (
            <button type="submit" className={`${baseClasses} ${className} bg-primary-cyan hover:bg-cyan-600 text-white p-2 text-center`}>
                {children}
            </button>
        )
    }

    return(
        <p className={`${baseClasses} text-neutral-gray hover:text-neutral-gray-very-dark m-8 ${className}`}>{children}</p>
    )
}