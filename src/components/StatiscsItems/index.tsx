import { statics } from "../../mocks/statics";

export const StatisticsItems: React.FC = () => {
    return (
        <>
            {statics.map((item, index) => (
                <div
                    key={index}
                    className={`
                        relative
                        z-10
                        w-full
                        sm:w-80
                        lg:w-72
                        mx-4
                        mb-20
                        lg:mb-0
                        ${index === 0 ? 'lg:mt-0' : ''}
                        ${index === 1 ? 'lg:mt-10' : ''}
                        ${index === 2 ? 'lg:mt-20' : ''}
                        max-[800px]:mx-auto
                        max-[800px]:w-11/12
                    `}
                >
                    <div className="
                        bg-white 
                        rounded-md
                        shadow-lg
                        p-8
                        pt-16
                        h-72
                        flex
                        flex-col
                        justify-start
                        transition-transform
                        duration-300
                        hover:transform
                        hover:scale-105
                        cursor-pointer
                        max-[936px]:text-center
                    ">
                        <img
                            src={item.image}
                            alt={item.title}
                            className='
                                absolute 
                                transform 
                                -translate-y-26
                                bg-primary-violet-dark 
                                rounded-full 
                                object-contain 
                                w-20 
                                h-20 
                                p-3
                                max-[936px]:left-1/2
                                max-[936px]:-translate-x-1/2
                                max-[936px]:-translate-y-26
                                max-[936px]:w-15
                                max-[936px]:h-15
                                max-[936px]:p-1
                            '
                        />
                        <h2 className='font-bold text-xl max-[379px]:text-sm mb-3 text-neutral-gray-very-dark'>
                            {item.title}
                        </h2>
                        <p className='text-neutral-gray leading-relaxed max-[379px]:text-[15px] text-sm'>
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
}