import { Body, Container, Head, Heading, Html, Preview, Section, Text } from "@react-email/components";

export default function BusinessInquiryConfirmation({ firstName }: { firstName: string }) {
  return (
    <Html><Head /><Preview>We received your business inquiry</Preview>
      <Body style={{ backgroundColor: "#f5f5f5", fontFamily: "Arial, sans-serif", padding: "32px 12px" }}>
        <Container style={{ backgroundColor: "#ffffff", maxWidth: 560, borderRadius: 18, overflow: "hidden" }}>
          <Section style={{ backgroundColor: "#252525", padding: 28 }}>
            <Text style={{ color: "#ff9b58", fontSize: 12, letterSpacing: 2 }}>TRANSCENDING PSYCHIATRY</Text>
            <Heading style={{ color: "#ffffff", margin: 0 }}>Thank you for reaching out.</Heading>
          </Section>
          <Section style={{ padding: 28, color: "#333333" }}>
            <Text>Hi {firstName},</Text>
            <Text style={{ lineHeight: "26px" }}>We've received your general business inquiry. A member of our team will review it and follow up if a response is needed.</Text>
            <Text style={{ lineHeight: "26px" }}>For patient-related matters, please use our secure patient inquiry form instead.</Text>
            <Text style={{ fontSize: 12, color: "#777777", marginTop: 28 }}>This inbox is not monitored for emergencies. For emergencies call 911; for crisis support call or text 988.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
