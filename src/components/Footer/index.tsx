import Shortly from '../../../public/images/logo.svg'

export const Footer: React.FC = () => {

    return (
        <footer className="flex 
        justify-between
        items-start
        bg-neutral-gray-very-dark
        w-full
        base-bg
        py-12
        text-white
        text-sm
        md:text-base
        px-8
        md:px-16
        max-[1440px]:flex-col
        max-[1440px]:items-center
        max-[1440px]:text-center
        ">
            <div className='flex justify-center align-content-center'>
                <img src={Shortly} alt="Shortly" className='h-8 brightness-0 invert' />
            </div>
            <ul>
                <li className="font-bold mb-2 mt-4">Features</li>
                <li className="list-item">Link Shortening</li>
                <li className="list-item">Branded Links</li>
                <li className="list-item">Analytics</li>
            </ul>
            <ul>
                <li className="font-bold mb-2 mt-4">Resources</li>
                <li className="list-item">Blog</li>
                <li className="list-item">Developers</li>
                <li className="list-item">Support</li>
            </ul>
            <ul>
                <li className="font-bold mb-2 mt-4">Company</li>
                <li className="list-item">About</li>
                <li className="list-item">Our Team</li>
                <li className="list-item">Careers</li>
                <li className="list-item">Contact</li>
            </ul>
            <div className="flex space-x-4 mt-6 min-[1440px]:text-centermr-10">
                <img src="../../../public/images/icon-facebook.svg" alt="Facebook" className="social-icon" />
                <img src="../../../public/images/icon-twitter.svg" alt="Twitter" className="social-icon" />
                <img src="../../../public/images/icon-pinterest.svg" alt="Pinterest" className="social-icon" />
                <img src="../../../public/images/icon-instagram.svg" alt="Instagram" className="social-icon" />
            </div>
        </footer>
    );
}