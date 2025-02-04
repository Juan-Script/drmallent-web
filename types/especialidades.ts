export interface Pregunta {
    pregunta: string;
    respuesta: string;
}

export interface Especialidad {
    titulo: string;
    descripcion: string;
    imagen: string;
    slug: string;
}

export interface Tratamiento {
    titulo: string;
    subtitulo?: string;
    descripcion?: string;
    preguntas?: Pregunta[];
    especialidades?: Especialidad[];
}

export interface CirugiaPlasticaData {
    [key: string]: Tratamiento;
}

export interface MedicinaEsteticaData {
    [key: string]: Tratamiento;
} 