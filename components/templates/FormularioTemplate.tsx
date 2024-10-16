import * as React from 'react';
import {
    Body,
    Button,
    Container,
    Head,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";

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
    <Html>
        <Head />
        <Preview>Nueva solicitud de contacto de {nombre} {apellido}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src="https://www.drmallent.com/new/wp-content/uploads/2014/12/logo.png"
                    alt="Logo Dr. Mallent"
                    width="150"
                    height="50"
                    style={logo}
                />
                <Text style={heading}>Nueva solicitud de contacto</Text>
                <Text style={paragraph}>Se ha recibido una nueva solicitud de contacto con los siguientes detalles:</Text>
                <Section style={tableContainer}>
                    <table style={table}>
                        <tbody>
                            <tr>
                                <td style={tableHeader}>Nombre:</td>
                                <td style={tableCell}>{nombre}</td>
                            </tr>
                            <tr>
                                <td style={tableHeader}>Apellido:</td>
                                <td style={tableCell}>{apellido}</td>
                            </tr>
                            <tr>
                                <td style={tableHeader}>Email:</td>
                                <td style={tableCell}>{email}</td>
                            </tr>
                            <tr>
                                <td style={tableHeader}>Teléfono:</td>
                                <td style={tableCell}>{telefono}</td>
                            </tr>
                        </tbody>
                    </table>
                </Section>
                <Hr style={hr} />
                <Text style={paragraph}>
                    Por favor, contacta con el cliente para programar una cita o proporcionar más información.
                </Text>
                <Button style={button} href={`mailto:${email}`}>
                    Responder al cliente
                </Button>
            </Container>
        </Body>
    </Html>
);

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: "#ffffff",
    border: "1px solid #eee",
    borderRadius: "5px",
    boxShadow: "0 5px 10px rgba(20,50,70,.2)",
    marginTop: "20px",
    maxWidth: "600px",
    width: "100%",
    margin: "0 auto",
    padding: "40px 20px",
};

const logo = {
    margin: "0 auto 20px",
    display: "block",
};

const heading = {
    color: "#000000",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center" as const,
    margin: "30px 0",
};

const paragraph = {
    fontSize: "16px",
    lineHeight: "26px",
    color: "#404040",
};

const tableContainer = {
    margin: "24px 0",
};

const table = {
    borderCollapse: "collapse" as const,
    width: "100%",
};

const tableHeader = {
    padding: "12px 24px",
    backgroundColor: "#f6f9fc",
    color: "#404040",
    fontWeight: "bold",
    textAlign: "left" as const,
    fontSize: "14px",
};

const tableCell = {
    padding: "12px 24px",
    fontSize: "14px",
    color: "#404040",
};

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};

const button = {
    backgroundColor: "#000000",
    borderRadius: "5px",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    textDecoration: "none",
    textAlign: "center" as const,
    display: "inline-block",
    width: "auto",
    padding: "12px 20px",
    margin: "24px auto",
};

export default FormularioTemplate;
