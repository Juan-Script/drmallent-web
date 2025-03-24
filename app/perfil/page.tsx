import ContentPerfil from '@/components/shared/ContentPerfil'
import Footer from '@/components/shared/Footer'
import { Hero } from '@/components/shared/Hero'
import Navbar from '@/components/shared/Navbar'
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
                title='Cirujano plástico en Valencia'
            />
            <ContentPerfil />
            <Footer />
        </>
    )
}
