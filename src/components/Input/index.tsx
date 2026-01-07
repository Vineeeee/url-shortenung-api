import { NavLink } from "../NavLinks"
import { Statiscts } from "../Statiscts"
import {  z } from 'zod'
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from "react";

const formSchema = z.object({
    url: z.string().url('Formato de URL inválido').min(1, 'A URL é obrigatória').max(255, 'A URL é muito longa').trim(),
});

type FormData = z.infer<typeof formSchema>;

export const Input: React.FC = () => {

    const[url, setUrl] = useState<FormData[]>([]);
const [copyStates, setCopyStates] = useState<boolean[]>([]);

 const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm<FormData>({
        mode: 'onBlur',
        resolver: zodResolver(formSchema),
    })

    const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
        setUrl(prev => {
            if (prev.some(item => item.url === data.url)) {
                return prev;
            }
            return [...prev, data];
        });
        setCopyStates(prev => [...prev, false]);
    }

    const handleCopy = (url: string, index: number) => {
        navigator.clipboard.writeText(url);
        
        setCopyStates(prev => 
            prev.map((state, i) => i === index ? true : state)
        );
        
        setTimeout(() => {
            setCopyStates(prev => 
                prev.map((state, i) => i === index ? false : state)
            );
        }, 2000);
    }
    return (
        <div onSubmit={handleSubmit(onSubmit)} className='flex justify-center flex-col items-center mt-10'>
            <form className=' 
                desktop-background-input
                mobile-background-input
                rounded-md 
                base-bg 
                h-55
                w-full
                m-5
                pb-9
                min-[1440px]:w-240
                flex
                max-[1440px]:flex-col
                flex-col
                item-center
                px-8
                pt-3
                '>
                <input id="url" {...register('url')} className='bg-amber-50 w-full h-12 rounded-md mb-5 px-4 max-[1440px]:px-6 max-[415px]:text-[13px] max-[1440px]:mx-0' type="text" placeholder='Shorten a link here...' />
                {errors.url && <span className='error-message'>{errors.url.message}</span>}
                {isSubmitting && <span>Enviando...</span>}
                <NavLink isButton={true} className=' h-13 rounded-md w-full min-[1440px]:w-40 max-[415px]:text-[18px] font-bold text-xl'>Shorten It</NavLink>
            </form>
            {url && url.map((item, index) => (
                <div className="font-bold flex m-5" key={index}>
                    <p className="text-ellipsis overflow-hidden whitespace-nowrap max-w-[200px]">{item.url}</p>
                    <button type="button" disabled={copyStates[index]} className={copyStates[index] ? 'bg-green-500 h-10 rounded-md w-24 text-white ml-5' : 'ml-5 bg-primary-cyan h-10 rounded-md w-24 text-white' } onClick={() => handleCopy(item.url, index)}>{copyStates[index] ? 'Copied!' : 'Copy'}</button>
                </div>
            ))}

            <Statiscts />
        </div>
    )
}