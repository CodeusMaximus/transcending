import { Body, Container, Head, Heading, Html, Preview, Section, Text } from "@react-email/components";

type Props = { firstName: string; lastName: string; email: string; phone: string; message: string };
export default function BusinessInquiryNotification({ firstName, lastName, email, phone, message }: Props) {
    return (
        <Html><Head /><Preview>New general business inquiry for Transcending Psychiatry</Preview>
            <Body style={{ backgroundColor: "#f5f5f5", fontFamily: "Arial, sans-serif", padding: "32px 12px" }}>
                <Container style={{ backgroundColor: "#ffffff", maxWidth: 560, borderRadius: 18, overflow: "hidden" }}>
                    <Section style={{ backgroundColor: "#252525", padding: 28 }}>
                        <Text style={{ color: "#ff9b58", fontSize: 12, letterSpacing: 2 }}>TRANSCENDING PSYCHIATRY</Text>
                        <Heading style={{ color: "#ffffff", margin: 0 }}>New business inquiry</Heading>
                    </Section>
                    <Section style={{ padding: 28, color: "#333333" }}>
                        <Text><strong>From:</strong> {firstName} {lastName}</Text>
                        <Text><strong>Email:</strong> {email}</Text>
                        <Text><strong>Phone:</strong> {phone || "Not provided"}</Text>
                        <Text style={{ color: "#e66b21", fontWeight: "bold", marginTop: 24 }}>Message</Text>
                        <Text style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere", lineHeight: "24px" }}>{message}</Text>
                        <Text style={{ fontSize: 12, color: "#777777", marginTop: 28 }}>General business inquiry. Do not reply with patient or clinical information.</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}
