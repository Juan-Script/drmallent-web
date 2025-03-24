import CarruselInstalaciones from '@/components/shared/CarruselInstalaciones'
import ContentInstalaciones from '@/components/shared/ContentInstalaciones'
import Footer from '@/components/shared/Footer'
import { Hero } from '@/components/shared/Hero'
import Navbar from '@/components/shared/Navbar'
import Posts from '@/components/shared/Posts'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const TITLE = "Clínica DRJM"
    const DESCRIPTION = 'Clínica DRJM - Centro médico especializado en cirugía plástica y medicina estética. Ofrecemos tratamientos personalizados con los más altos estándares de calidad y seguridad para nuestros pacientes.'
    return {
        title: TITLE,
        description: DESCRIPTION,
        metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
        alternates: {
            canonical: process.env.NEXT_PUBLIC_BASE_URL,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
            },
        },
    }
  }

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
