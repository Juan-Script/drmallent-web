import { joseSantamariaCv } from "./joseSantamaria";

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
    joseSantamariaCv,
]