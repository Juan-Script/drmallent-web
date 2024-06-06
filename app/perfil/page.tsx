import ContentPerfil from '@/components/shared/ContentPerfil'
import Footer from '@/components/shared/Footer'
import { Hero } from '@/components/shared/Hero'
import Navbar from '@/components/shared/Navbar'

export default function page() {

    return (
        <>
            <Navbar />
            <Hero
                title='Cirujano plástico en Valencia'
            />
            <ContentPerfil />
            <Footer />
        </>
    )
}
