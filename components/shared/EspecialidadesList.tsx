"use client"

import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Definimos el motion component
const MotionFlex = motion(Flex);

interface Especialidad {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: string;
  slug: string;
}

interface EspecialidadesListProps {
  especialidades?: Especialidad[];
}

const EspecialidadesList: React.FC<EspecialidadesListProps> = ({ especialidades }) => {
  const pathname = usePathname();
 
  const especialidadesCirugia: Especialidad[] = [
    {
      id: 1,
      nombre: "Aumento de mamas",
      descripcion: "Prótesis e injertos de grasa",
      tipo: "cirugia",
      slug: "/cirugia-plastica/aumento-mamas"
    },
    {
      id: 2,
      nombre: "Reducción de mamas",
      descripcion: "Reducción del tamaño mamario",
      tipo: "cirugia",
      slug: "/cirugia-plastica/reduccion-mamas"
    },
    {
      id: 3,
      nombre: "Elevación de mamas",
      descripcion: "Mastopexia",
      tipo: "cirugia",
      slug: "/cirugia-plastica/elevacion-mamas"
    },
    {
      id: 4,
      nombre: "Reconstrucción de mamas",
      descripcion: "Reconstrucción mamaria",
      tipo: "cirugia",
      slug: "/cirugia-plastica/reconstruccion-mama"
    },
    {
      id: 5,
      nombre: "Ginecomastia",
      descripcion: "Cirugía de mamas en el varón",
      tipo: "cirugia",
      slug: "/cirugia-plastica/ginecomastia"
    },
    {
      id: 6,
      nombre: "Reasignación de género",
      descripcion: "Cirugía de reasignación",
      tipo: "cirugia",
      slug: "/cirugia-plastica/reasignacion-genero"
    },
    {
      id: 7,
      nombre: "Abdominoplastia",
      descripcion: "Tummy Tuck",
      tipo: "cirugia",
      slug: "/cirugia-plastica/abdominoplastia"
    },
    {
      id: 8,
      nombre: "Braquioplastia",
      descripcion: "Brazos y muslos",
      tipo: "cirugia",
      slug: "/cirugia-plastica/braquioplastia"
    },
    {
      id: 9,
      nombre: "Liposucción",
      descripcion: "Liposucción y Lipedema",
      tipo: "cirugia",
      slug: "/cirugia-plastica/liposuccion"
    },
    {
      id: 10,
      nombre: "Gluteoplastia",
      descripcion: "Cirugía de glúteos",
      tipo: "cirugia",
      slug: "/cirugia-plastica/gluteoplastia"
    },
    {
      id: 11,
      nombre: "Blefaroplastia",
      descripcion: "Cirugía de párpados superior e inferior",
      tipo: "cirugia",
      slug: "/cirugia-plastica/blefaroplastia"
    },
    {
      id: 12,
      nombre: "Otoplastia",
      descripcion: "Orejas en soplillo y lóbulos rasgados",
      tipo: "cirugia",
      slug: "/cirugia-plastica/otoplastia"
    },
    {
      id: 13,
      nombre: "Rinoplastia",
      descripcion: "Cirugía de nariz",
      tipo: "cirugia",
      slug: "/cirugia-plastica/rinoplastia"
    },
    {
      id: 14,
      nombre: "Mentoplastia",
      descripcion: "Cirugía de mentón",
      tipo: "cirugia",
      slug: "/cirugia-plastica/mentoplastia"
    },
    {
      id: 15,
      nombre: "Lifting facial",
      descripcion: "Lifting cervicofacial",
      tipo: "cirugia",
      slug: "/cirugia-plastica/lifting-facial"
    },
    {
      id: 16,
      nombre: "Bichectomía",
      descripcion: "Reducción de mejillas",
      tipo: "cirugia",
      slug: "/cirugia-plastica/bichectomia"
    },
    {
      id: 17,
      nombre: "Lip lift",
      descripcion: "Cirugía de labios",
      tipo: "cirugia",
      slug: "/cirugia-plastica/lip-lift"
    }
  ];

  const especialidadesEstetica: Especialidad[] = [
    {
      id: 1,
      nombre: "Rellenos",
      descripcion: "Tratamientos con ácido hialurónico",
      tipo: "medicina",
      slug: "/medicina-estetica/rellenos"
    },
    {
      id: 2,
      nombre: "Injerto capilar",
      descripcion: "Tratamiento para la pérdida de cabello",
      tipo: "medicina",
      slug: "/medicina-estetica/injerto-capilar"
    },
    {
      id: 3,
      nombre: "Mesoterapia",
      descripcion: "Tratamiento para mejorar la calidad de la piel",
      tipo: "medicina",
      slug: "/medicina-estetica/mesoterapia"
    },
    {
      id: 4,
      nombre: "Peelings",
      descripcion: "Tratamientos de rejuvenecimiento facial",
      tipo: "medicina",
      slug: "/medicina-estetica/peelings"
    },
    {
      id: 5,
      nombre: "Lifting microcánulas",
      descripcion: "Rejuvenecimiento facial no quirúrgico",
      tipo: "medicina",
      slug: "/medicina-estetica/lifting-microcanulas"
    },
    {
      id: 6,
      nombre: "Tratamiento manchas",
      descripcion: "Tratamiento para quitar manchas",
      tipo: "medicina",
      slug: "/medicina-estetica/tratamiento-manchas"
    },
    {
      id: 7,
      nombre: "Toxina botulínica",
      descripcion: "Tratamiento para arrugas de expresión",
      tipo: "medicina",
      slug: "/medicina-estetica/toxina-botulinica"
    }
  ];

  const categoria = pathname?.includes('cirugia-plastica') 
  ? 'cirugia-plastica' 
  : 'medicina-estetica';


  const especialidadesActuales = categoria === 'cirugia-plastica' 
    ? especialidadesCirugia 
    : especialidadesEstetica;

  return (
    <MotionFlex
      px={{ base: "20px", sm: "40px", md: "80px", lg: "120px", xl: "200px", "2xl": "300px" }}
      direction="column"
      py={{ base: "100px", md: "200px" }}
      initial="hidden"
      animate="visible"
      align="center"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { duration: 0.8, when: "beforeChildren", staggerChildren: 0.3 } },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
        }}
        className="flex justify-center items-center gap-4"
      >
        <Text
          fontSize={{ base: "20px", md: "23px" }}
          fontWeight="700"
          textTransform="uppercase"
        >
          Especialidades
        </Text>
      </motion.div>
      <Flex
        direction="row"
        w="full"
        wrap="wrap"
        gap={{ base: "6", md: "8" }}
        justify="center"
        mt={{ base: "30px", md: "60px" }}
        mb={{ base: "100px", md: "200px" }}
        textAlign="center"
      >
        {especialidadesActuales.map((especialidad) => (
          <Link
            href={especialidad.slug}
            key={especialidad.id}
            className='cursor-pointer'
          >
            <motion.div
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              style={{ width: '180px' }}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
            >
              <Text
                fontSize={{ base: "16px", md: "18px" }}
                fontWeight="400"
              >
                {especialidad.nombre}
              </Text>
            </motion.div>
          </Link>
        ))}
      </Flex>
    </MotionFlex>
  );
};

export default EspecialidadesList;