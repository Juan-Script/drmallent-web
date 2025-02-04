export interface Pregunta {
    pregunta: string;
    respuesta: string;
}

export interface Tratamiento {
    titulo: string;
    subtitulo?: string;
    descripcion: string;
    preguntas: Pregunta[];
}

export interface CirugiaPlasticaData {
    [key: string]: Tratamiento;
}

export interface MedicinaEsteticaData {
    [key: string]: Tratamiento;
} 