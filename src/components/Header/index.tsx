import { useState } from 'react'
import Shortly from '../../../public/images/logo.svg'
import { NavLink } from '../NavLinks'

export const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const baseClassNavLinkHamburguer = "block text-center py-3 block text-center py- text-white"
    
    return (
        <header className='bg-white py-6 px-8'>
            <div className='flex items-center justify-between max-w-6xl mx-auto'>
                
                <img src={Shortly} alt="Shortly" className='h-8 w-auto' />
                
                <div className='hidden min-[1440px]:flex items-center space-x-2'>
                    <NavLink>Features</NavLink>
                    <NavLink>Pricing</NavLink>
                    <NavLink>Resources</NavLink>
                    <NavLink>Login</NavLink>
                    <NavLink isButton={true}>Sign Up</NavLink>
                </div>
                
                <button 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    className='min-[1440px]:hidden p-2'
                >
                    {isMenuOpen ? '✕' : '☰'}
                </button>
            </div>
            
            {isMenuOpen && (
                <div className='min-[1440px]:hidden mt-4 bg-primary-violet-dark shadow-lg rounded-lg p-1 animate-fadeIn absolute left-6 right-6'>
                    <div className='space-y-4'>
                        <NavLink className={baseClassNavLinkHamburguer}>Features</NavLink>
                        <NavLink className={baseClassNavLinkHamburguer}>Pricing</NavLink>
                        <NavLink className={baseClassNavLinkHamburguer}>Resources</NavLink>
                        <hr className='my-2 w-2/3 mx-auto border-neutral-gray-light' />
                        <NavLink className={baseClassNavLinkHamburguer}>Login</NavLink>
                        <NavLink isButton={true} className='block text-center w-full py-3 rounded-full'>
                            Sign Up
                        </NavLink>
                    </div>
                </div>
            )}
        </header>
    )
}