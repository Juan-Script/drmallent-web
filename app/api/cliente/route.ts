import ClienteTemplate from "@/components/templates/ClienteTemplate";
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend("re_MKCqKfEM_MkUmCkYKRzNsAs8KMx3ZZJ4s");

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email } = body;

        if (!email || typeof email !== 'string') {
            console.error('Email inválido recibido:', email);
            return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
        }

        const { data, error } = await resend.emails.send({
            from: 'Dr Mallent <dr.mallent@mail.juan-reig.com>',
            to: [email],
            subject: 'Confirmación de formulario',
            react: ClienteTemplate(),
        });

        if (error) {
            console.error('Error detallado de Resend:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(
            { message: "Email enviado con éxito", data },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error detallado en la ruta del cliente:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}
