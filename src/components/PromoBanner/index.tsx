import { NavLink } from "../NavLinks";

export const PromoBanner: React.FC = () => {

    return (
        <section
            className="
        w-full        
        base-bg
        px-8 
        py-16 
        text-center
        md:px-4
        md:py-20
        promo-background-mobile
        promo-background 

      "
        >
            <div className="max-w-6xl mx-auto">
                <h2 className="
          text-white 
          text-4xl 
          font-bold 
          mb-6
          md:text-3xl
          sm:text-2xl
        ">
                    Boost your links today
                </h2>

                <NavLink isButton={true} className="
                rounded-full 
                px-10 
                py-3
                text-lg
                hover:bg-primary-cyan-light
                hover:scale-105
                active:scale-95
                transition-all
                duration-300
                md:px-8
                md:py-2.5
                md:text-base">
                    Get Started
                </NavLink>
            </div>
        </section>
    );
}