import Topic from "./Topic"


export default function Topics() {
    return (
        <div className="w-full md:w-1/2 lg:w-full mb-5">
            <h5 className="dark:text-white font-bold text-lg uppercase text-gray-700 mb-2">
                Popular News
            </h5>
            <ul>
                {topics.map(topic =>
                    <Topic
                        key={topic.title}
                        title={topic.title}
                        quantity={topic.quantity}
                        color={topic.color}
                        link={topic.link} />)}
            </ul>
        </div>
    )
}

const topics = [
    {
        title: 'Vue',
        link: '#',
        color: 'green',
        quantity: 23,
    },
    {
        title: 'Svelte',
        link: '#',
        color: 'orange',
        quantity: 20,
    },
    {
        title: 'Angular',
        link: '#',
        color: 'red',
        quantity: 15,
    },
    {
        title: 'React',
        link: '#',
        color: 'blue',
        quantity: 7,
    },
]