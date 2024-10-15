import { especialistaCinco } from "./especialista-cinco";
import { especialistaCuatro } from "./especialista-cuatro";
import { especialistaDos } from "./especialista-dos";
import { especialistaSeis } from "./especialista-seis";
import { especialistaTres } from "./especialista-tres";
import { especialistaUno } from "./especialista-uno";

export interface cvInt {
    slug: string;
    imagen: string;
    nombre: string;
    especialidad: string;
    locacion: string;
    items: string[];
    detalles: {
        titulo?: string;
        textos: string[];
        list?: string[];
    }[];
}

export const cvData: cvInt[] = [
    especialistaUno,
    especialistaDos,
    especialistaTres,
    especialistaCuatro,
    especialistaCinco,
    especialistaSeis,
]
