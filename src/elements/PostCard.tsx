interface PostCardProps {
    img: string;
    title: string;
    description: string;
    publishedBy: {
        userName: string;
        userAvatar: string;
        date: string;
    };
}


export function PostCard({ img, title, description, publishedBy }: PostCardProps) {

    return (
        <a className="block w-full lg:flex mb-10" href="#">
            <img
                className="w-full h-48 lg:w-48 opacity-80 object-cover lg:mr-4"
                src={img}
                alt="img"
            />
            <div className="flex flex-col justify-between">
                <div>
                    <h3
                        className="dark:text-white mb-2 text-gray-700 font-bold text-2xl"
                    >
                        {title}
                    </h3>
                    <p className="text-gray-700 dark:text-slate-400">
                        {description}
                    </p>
                </div>
                <div className="flex mt-3">
                    <img
                        className="h-10 w-10 rounded-full mr-2 object-cover"
                        src={publishedBy.userAvatar}
                        alt="author"
                    />
                    <div>
                        <p className="font-semibold text-gray-400 text-sm">
                            {publishedBy.userName}
                        </p>
                        <time className="text-gray-400 text-xs">{publishedBy.date}</time>
                    </div>
                </div>
            </div>
        </a>
    )
}