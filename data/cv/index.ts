import { AlvaroCamposData } from "./AlvaroCamposData";
import { especialistaCuatro } from "./especialista-cuatro";
import { especialistaDos } from "./especialista-dos";
import { especialistaSeis } from "./especialista-seis";
import { especialistaTres } from "./especialista-tres";
import { PepeMallentData } from "./PepeMallentData";

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
    PepeMallentData,
    especialistaDos,
    especialistaTres,
    especialistaCuatro,
    AlvaroCamposData,
    especialistaSeis,
]
