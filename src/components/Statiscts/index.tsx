import { LineCyan } from "../LineCyan"
import { StatisticsItems } from "../StatiscsItems"

export const Statiscts: React.FC = () => {
    return (
        <>
            <div className="my-20">
                <h1 className="text-center font-bold text-2xl">Advanced Statistics</h1>
                <p className="text-center text-neutral-gray mt-3 max-w-lg">Track how your links are performing across the web with our advanced statistics dashboard.</p>
            </div>

            <div className="flex relative flex-wrap justify-center items-start mx-4 mb-10 max-w-6xl">

                <LineCyan />
                <StatisticsItems />

            </div>
        </>
    )
}