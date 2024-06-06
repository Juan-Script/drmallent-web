import CarruselInstalaciones from '@/components/shared/CarruselInstalaciones'
import ContentInstalaciones from '@/components/shared/ContentInstalaciones'
import Footer from '@/components/shared/Footer'
import { Hero } from '@/components/shared/Hero'
import Navbar from '@/components/shared/Navbar'
import Posts from '@/components/shared/Posts'

export default function page() {
    return (
        <>
            <Navbar />
            <Hero
                title='Tecnología e instalaciones'
            />
            <ContentInstalaciones />
            <CarruselInstalaciones />
            <Posts />
            <Footer />
        </>
    )
}
