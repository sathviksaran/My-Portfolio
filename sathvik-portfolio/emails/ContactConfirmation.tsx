import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactConfirmationProps {
  name: string;
}

export default function ContactConfirmation({
  name,
}: ContactConfirmationProps) {
  return (
    <Html>
      <Head />

      <Preview>
        Thank you for contacting Sathvik Saran
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
              textAlign: "center",
              padding: "40px",
            }}
          >
            <Heading
              style={{
                color: "#ffffff",
                margin: 0,
                fontSize: "30px",
              }}
            >
              🎉 Thank You!
            </Heading>

            <Text
              style={{
                color: "#dbeafe",
                marginTop: "12px",
              }}
            >
              Your message has been received.
            </Text>
          </Section>

          {/* Body */}

          <Section
            style={{
              padding: "35px",
            }}
          >
            <Text
              style={{
                fontSize: "16px",
              }}
            >
              Hi <strong>{name}</strong>,
            </Text>

            <Text
              style={{
                lineHeight: "1.8",
              }}
            >
              Thank you for reaching out through my
              portfolio website.
            </Text>

            <Text
              style={{
                lineHeight: "1.8",
              }}
            >
              I&apos;ve successfully received your message
              and will review it as soon as possible.
              I usually respond within
              <strong> 24–48 hours.</strong>
            </Text>

            <Hr />

            <Heading
              as="h3"
              style={{
                fontSize: "20px",
              }}
            >
              Meanwhile, you can explore:
            </Heading>

            <Text>
              💻 GitHub:
            </Text>

            <Link href="https://github.com/YOUR_GITHUB_USERNAME">
              https://github.com/YOUR_GITHUB_USERNAME
            </Link>

            <Text style={{ marginTop: "15px" }}>
              💼 LinkedIn:
            </Text>

            <Link href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME">
              https://linkedin.com/in/YOUR_LINKEDIN_USERNAME
            </Link>

            <Hr />

            <Button
              href="https://your-portfolio.vercel.app"
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "14px 24px",
                borderRadius: "8px",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Visit My Portfolio
            </Button>

            <Text
              style={{
                marginTop: "25px",
                lineHeight: "1.8",
              }}
            >
              Looking forward to speaking with you.
            </Text>

            <Text>
              Regards,
            </Text>

            <Text>
              <strong>
                Sathvik Saran Atchukolu
              </strong>
            </Text>

            <Text>
              Associate IT Consultant
            </Text>
          </Section>

          {/* Footer */}

          <Section
            style={{
              background: "#111827",
              textAlign: "center",
              padding: "24px",
            }}
          >
            <Text
              style={{
                color: "#9ca3af",
                fontSize: "13px",
              }}
            >
              © {new Date().getFullYear()} Sathvik
              Saran Atchukolu
            </Text>

            <Text
              style={{
                color: "#6b7280",
                fontSize: "12px",
              }}
            >
              Thank you for connecting!
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}