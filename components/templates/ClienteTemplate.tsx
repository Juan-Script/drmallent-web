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

export const ClienteTemplate = () => (
    <Html>
        <Head />
        <Preview>Confirmación de solicitud de contacto - Clínica Dr. Mallent</Preview>
        <Body style={main}>
            <Container style={container}>
                <Img
                    src="https://www.drmallent.com/new/wp-content/uploads/2014/12/logo.png"
                    alt="Logo Dr. Mallent"
                    width="150"
                    height="50"
                    style={logo}
                />
                <Text style={heading}>Confirmación de Contacto</Text>
                <Text style={paragraph}>Estimado/a paciente,</Text>
                <Text style={paragraph}>
                    Gracias por contactar con la Clínica Dr. Mallent. Hemos recibido correctamente su solicitud de contacto.
                </Text>
                <Text style={paragraph}>
                    Nos pondremos en contacto con usted lo antes posible para atender su consulta o programar una cita.
                </Text>
                <Hr style={hr} />
                <Text style={paragraph}>
                    Si necesita contactarnos de inmediato, puede hacerlo a través de los siguientes medios:
                </Text>
                <Section style={contactInfo}>
                    <Text style={contactItem}>Teléfono: +34 646 66 78 00</Text>
                    <Text style={contactItem}>Email: info@drmallent.com</Text>
                    <Text style={contactItem}>Dirección: Calle de Sorní, 4, 46004 Valencia (Edificio de los Dragones)</Text>
                </Section>
                <Button style={{...button, padding: '12px 20px'}} href="https://www.drmallent.com">
                    Visitar nuestra web
                </Button>
                <Text style={signature}>
                    Gracias por su interés en nuestros servicios.
                </Text>
                <Text style={signature}>
                    Atentamente,
                </Text>
                <Text style={signature}>
                    Clínica Dr. Mallent
                </Text>
                <Text style={signature}>
                    Dr. José Mallent
                </Text>
                <Text style={signature}>
                    Especialista en Cirugía Plástica, Estética y Reparadora
                </Text>
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

const hr = {
    borderColor: "#e6ebf1",
    margin: "20px 0",
};

const contactInfo = {
    margin: "24px 0",
};

const contactItem = {
    fontSize: "14px",
    lineHeight: "24px",
    color: "#404040",
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

const signature = {
    fontSize: "14px",
    lineHeight: "24px",
    color: "#404040",
    marginTop: "12px",
};

export default ClienteTemplate;
