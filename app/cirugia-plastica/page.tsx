
import DestacadoEspecialidad from '@/components/shared/DestacadoEspecialidad'
import EspecialidadesList from '@/components/shared/EspecialidadesList'
import Footer from '@/components/shared/Footer'
import { Hero } from '@/components/shared/Hero'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

export default function page() {
    return (
        <>
            <Navbar />
            <Hero
                title="Cirugía Plástica"
            />
            <DestacadoEspecialidad />
            <EspecialidadesList />
            <Footer />
        </>
    )
}
