interface TopicProps {
    title: string;
    link: string;
    color: string;
    quantity: number;
}


export default function Topic({ title, link, color, quantity }: TopicProps) {
    return (
        <li
            className="dark:border-transparent dark:hover:border-gray-200 px-1 py-4 border-y border-white hover:border-gray-200 transition-all duration-300"
        >
            <a
                className="dark:text-slate-400 flex items-center text-gray-600"
                href={link}
            >
                <span className={`inline-block w-4 h-4 mr-3 bg-gradient-to-tr from-${color}-500 to-${color}-700`}></span>
                {title}
                <span className="dark:text-slate-400 text-gray-500 ml-auto"
                >{quantity} articles</span
                >
            </a>
        </li>
    )
}

