import Arrow from "./Arrow";


export default function Breadcrumbs() {

    return (
        <div className="px-2 flex items-center">
            <div className="py-4 overflow-y-auto whitespace-nowrap flex items-center">
                <a
                    className="dark:text-slate-400 text-gray-600 hover:text-gray-900 dark:hover:text-gray-200  transition-all duration-300"
                    href="#"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                    </svg>
                </a>
                <Arrow />
                <a
                    className="dark:text-slate-400 text-gray-600 hover:text-gray-900 transition-all duration-300"
                    href="#"
                >News</a>
                <Arrow />
                <a className="dark:text-slate-400 text-gray-600 hover:text-gray-900  transition-all duration-300" href="#">
                    Tech
                </a>
            </div>
        </div>
    )
}