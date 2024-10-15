import * as React from 'react';

interface Props {
    nombre: string;
    apellido: string;
    email: string;
    telefono: string;
}

export const FormularioTemplate = ({
    nombre,
    apellido,
    email,
    telefono,
}: Props) => (
    <div>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Email: {email}</p>
        <p>Teléfono: {telefono}</p>
    </div>
);
