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

import { SITE } from "@/lib/constants/site";
import { styles } from "./styles";

interface ContactNotificationProps {
  readonly name: string;
  readonly email: string;
  readonly phone?: string;
  readonly subject: string;
  readonly message: string;
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
        📩 New portfolio contact from {name} — {subject}
      </Preview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.header}>
            <Heading style={styles.heading}>
              📩 New Portfolio Contact
            </Heading>

            <Text style={styles.subtitle}>
              Someone has submitted your portfolio contact form.
            </Text>
          </Section>

          {/* Content */}
          <Section style={styles.section}>
            <Text style={styles.text}>
              <strong>Name</strong>
            </Text>

            <Text style={styles.text}>{name}</Text>

            <Hr style={styles.hr} />

            <Text style={styles.text}>
              <strong>Email</strong>
            </Text>

            <Text style={styles.text}>{email}</Text>

            <Hr style={styles.hr} />

            <Text style={styles.text}>
              <strong>Phone</strong>
            </Text>

            <Text style={styles.text}>
              {phone?.trim() || "Not provided"}
            </Text>

            <Hr style={styles.hr} />

            <Text style={styles.text}>
              <strong>Subject</strong>
            </Text>

            <Text style={styles.text}>{subject}</Text>

            <Hr style={styles.hr} />

            <Text style={styles.text}>
              <strong>Message</strong>
            </Text>

            <Section
              style={styles.messageBox}
            >
              <Text
                style={{
                  ...styles.text,
                  whiteSpace: "pre-wrap",
                  margin: 0,
                }}
              >
                {message}
              </Text>
            </Section>

            <Hr style={styles.hr} />

            <Button
              href={`mailto:${email}?subject=Re: ${encodeURIComponent(subject)}`}
              style={{
                ...styles.button,
                ...styles.buttonSpacing,
              }}
            >
              ✉️ Reply to {name}
            </Button>
          </Section>

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              © {new Date().getFullYear()} {SITE.name}
            </Text>

            <Text style={styles.footerSmall}>
              Portfolio Contact Notification
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}