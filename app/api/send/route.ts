import { FormularioTemplate } from "@/components/templates/FormularioTemplate";
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend("re_MKCqKfEM_MkUmCkYKRzNsAs8KMx3ZZJ4s");

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nombre, apellido, email, telefono } = body;

        const { data, error } = await resend.emails.send({
            from: 'DRJM <info@drmallent.com>',
            to: [email],
            subject: 'Confirmación de formulario',
            react: FormularioTemplate({ nombre, apellido, email, telefono }),
        });

        if (error) {
            console.error('Error al enviar el correo:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(
            { message: "Email enviado con éxito", data: data },
            { status: 200 }
        );
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}