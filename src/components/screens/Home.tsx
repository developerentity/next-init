import Banners from "../elements/Banners"
import Breadcrumbs from "../elements/Breadcrumbs"
import Footer from "../elements/Footer"
import Header from "../elements/Header"
import PostCards from "../elements/PostCards"
import Subscribe from "../elements/Subscribe"
import Topics from "../elements/Topics"


export default function Home() {

    return (
        <div className="font-main text-white">
            <div className="max-w-screen-xl mx-auto h-screen grid grid-rows-layout">
             <Header />
                   <div>
                    <Breadcrumbs />
                    <Banners />
                    <main className="lg:flex">
                        <div className="w-full lg:w-2/3">
                            <PostCards />
                        </div>
                        <div className="w-full lg:w-1/3 px-2 md:flex md:space-x-6 lg:block lg:space-x-0">
                            <Topics />
                            <div className="w-full md:w-1/2 lg:w-full">
                                <div className="border border-dotted md:hidden lg:block"></div>
                                <Subscribe />
                                <div className="border border-dotted md:hidden lg:block"></div>
                            </div>
                        </div>
                    </main>
                </div>
                <Footer />
            </div>
        </div>
    )
}