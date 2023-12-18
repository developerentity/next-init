import Pagination from "./Pagination"
import { PostCard } from "./PostCard"


export default function PostCards() {

    return (
        <section className="px-2">
            {postCards.map(card =>
                <PostCard
                    key={card.title}
                    title={card.title}
                    img={card.img}
                    description={card.title}
                    publishedBy={card.publishedBy}
                />)}
            <Pagination />
        </section>
    )
}

const postCards = [
    {
        img: '/img-3.jpg',
        title: ' Phasellus pharetra enim at nisl pharetra, nec fringillaarcu blandit',
        description: ` Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining
        essentially unchanged.`,
        publishedBy: {
            userAvatar: 'https://randomuser.me/api/portraits/women/8.jpg',
            userName: 'John Doe',
            date: '15 March'
        }
    },
    {
        img: '/img-4.jpg',
        title: 'Cras ut elit id ligula placerat molestie at non erat.',
        description: `It is a long established fact that a reader will be
        distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it
        has a more-or-less normal distribution of letters.`,
        publishedBy: {
            userAvatar: 'https://randomuser.me/api/portraits/men/7.jpg',
            userName: 'Jane Doe',
            date: '13 March'
        }
    },
    {
        img: '/img-5.jpg',
        title: 'Ut egestas diam ut massa elementum euismod.',
        description: `It is a long established fact that a reader will be
        distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it
        has a more-or-less normal distribution of letters.`,
        publishedBy: {
            userAvatar: 'https://randomuser.me/api/portraits/women/10.jpg',
            userName: 'John Doe',
            date: '11 March'
        }
    },
]