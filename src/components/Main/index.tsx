import Working from '../../../public/images/illustration-working.svg'
import { Input } from '../Input'
import { NavLink } from '../NavLinks'
import { PromoBanner } from '../PromoBanner'

export const MainContent: React.FC = () => {
    return (
        <main className='min-h-screen'>
            <div className='flex min-[1440px]:ml-20 max-[1440px]:flex-col max-[1440px]:items-center'>
                <div className='mt-20 max-[1440px]:text-center max-w-lg'>
                    <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-6xl
            font-bold 
            text-neutral-gray-very-dark 
            leading-tight
            mb-4 sm:mb-6'>More than just shorter links</h1>
                    <p className='mx-5 text-sm sm:text-base lg:text-lg
            text-neutral-gray 
            mb-6 sm:mb-8
            leading-relaxed
            max-w-md sm:max-w-lg 
            mx-auto'>Build your brand's recognition and get
                        detailed insights on how your
                        links are performing.</p>
                    <NavLink className='w-40 max-[1440px]:mx-auto rounded-full' isButton={true}>Get Started</NavLink>
                </div>
                <img src={Working} alt="Working" className='min-[1440px]:ml-auto block max-[1440px]:mt-4 max-[1440px]:my-5 h-auto min-[1440px]:mt-5' />
            </div>
            <Input/>
            <PromoBanner/>
        </main>
    )
}