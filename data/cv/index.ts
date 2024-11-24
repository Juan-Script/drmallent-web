import { africaSanchez } from "./africaSanchez";
import { alvaroCampos } from "./alvaroCampos";
import { drJoseSantamaria } from "./drJoseSantamaria";
import { pilarMallent } from "./pilarMallent";
import { vicky } from "./vicky";
import { drPepeMallent } from "./drPepeMallent";
import { ana } from "./ana";


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
    drPepeMallent,
    drJoseSantamaria,
    africaSanchez,
    ana,
    pilarMallent,
    vicky,
    alvaroCampos
]
