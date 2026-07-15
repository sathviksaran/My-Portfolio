import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactNotificationProps {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export default function ContactNotification({
  name,
  email,
  phone,
  subject,
  message,
}: ContactNotificationProps) {
  return (
    <Html>
      <Head />

      <Preview>
        📩 New Portfolio Contact from {name}
      </Preview>

      <Body
        style={{
          backgroundColor: "#f4f4f5",
          fontFamily:
            "Inter, Arial, Helvetica, sans-serif",
          padding: "30px 0",
        }}
      >
        <Container
          style={{
            maxWidth: "620px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
          }}
        >
          {/* Header */}

          <Section
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#06b6d4)",
              padding: "35px",
              textAlign: "center",
            }}
          >
            <Heading
              style={{
                color: "#ffffff",
                margin: 0,
                fontSize: "28px",
              }}
            >
              📩 New Portfolio Contact
            </Heading>

            <Text
              style={{
                color: "#e0f2fe",
                marginTop: "10px",
              }}
            >
              Someone has contacted you through your portfolio.
            </Text>
          </Section>

          {/* Content */}

          <Section
            style={{
              padding: "30px",
            }}
          >
            <Text>
              <strong>Name</strong>
            </Text>

            <Text>{name}</Text>

            <Hr />

            <Text>
              <strong>Email</strong>
            </Text>

            <Text>{email}</Text>

            <Hr />

            <Text>
              <strong>Phone</strong>
            </Text>

            <Text>{phone || "Not provided"}</Text>

            <Hr />

            <Text>
              <strong>Subject</strong>
            </Text>

            <Text>{subject}</Text>

            <Hr />

            <Text>
              <strong>Message</strong>
            </Text>

            <Section
              style={{
                background: "#f8fafc",
                padding: "18px",
                borderRadius: "10px",
                border: "1px solid #e2e8f0",
              }}
            >
              <Text
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.8",
                }}
              >
                {message}
              </Text>
            </Section>

            <Hr />

            <Button
              href={`mailto:${email}`}
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "12px 22px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "inline-block",
                marginTop: "20px",
              }}
            >
              Reply to {name}
            </Button>
          </Section>

          {/* Footer */}

          <Section
            style={{
              background: "#111827",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <Text
              style={{
                color: "#9ca3af",
                fontSize: "13px",
              }}
            >
              © {new Date().getFullYear()} Sathvik Saran Atchukolu
            </Text>

            <Text
              style={{
                color: "#6b7280",
                fontSize: "12px",
              }}
            >
              Portfolio Contact Notification
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}