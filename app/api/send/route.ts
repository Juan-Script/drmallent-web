import { FormularioTemplate } from "@/components/templates/FormularioTemplate";
import { Resend } from 'resend';
import { NextRequest } from 'next/server';

const resend = new Resend("re_MKCqKfEM_MkUmCkYKRzNsAs8KMx3ZZJ4s");

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nombre, apellido, email, telefono } = body;

        console.log('Datos recibidos:', body);

        const { data, error } = await resend.emails.send({
            from: 'Tu Empresa <noreply@tuempresa.com>',
            to: [email],
            subject: 'Confirmación de formulario',
            react: FormularioTemplate({ nombre, apellido, email, telefono }),
        });

        if (error) {
            console.error('Error al enviar el correo:', error);
            return Response.json({ error: error.message }, { status: 500 });
        }

        return Response.json({ message: 'Correo enviado con éxito', data }, { status: 200 });
    } catch (error) {
        console.error('Error al procesar la solicitud:', error);
        return Response.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
    }
}
