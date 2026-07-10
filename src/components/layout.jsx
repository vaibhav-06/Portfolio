import Navbar from './Navbar'
import Footer from './Footer'


export default function Layout({children}){
    return(
        <div className="w-half min-h-screen px-4 sm:px-6 lg:px-8 xl:max-w-7xl xl:mx-auto xl:px-0 bg-amber-200">
            <Navbar />
                <main className="flex-1">
                    {children}
                </main>
            <Footer />
        </div>
    )
};