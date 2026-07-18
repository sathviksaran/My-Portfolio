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

import { SITE } from "@/lib/constants/site";
import { styles } from "./styles";

interface ContactConfirmationProps {
  readonly name: string;
}

export default function ContactConfirmation({
  name,
}: ContactConfirmationProps) {
  return (
    <Html>
      <Head />

      <Preview>
        🎉 Thanks for reaching out! I&apos;ve received your message and will respond
        within {SITE.responseTime}.
      </Preview>

      <Body style={styles.body}>
        <Container style={styles.container}>
          {/* Header */}
          <Section style={styles.header}>
            <Heading style={styles.heading}>
              🎉 Thank You!
            </Heading>

            <Text style={styles.subtitle}>
              Your message has been received successfully.
            </Text>
          </Section>

          {/* Content */}
          <Section style={styles.section}>
            <Text style={styles.text}>
              Hi <strong>{name}</strong>,
            </Text>

            <Text style={styles.text}>
              Thank you for reaching out through my portfolio website.
            </Text>

            <Text style={styles.text}>
              I&apos;ve successfully received your message and will review it as soon
              as possible. I typically respond within{" "}
              <strong>{SITE.responseTime}</strong>.
            </Text>

            <Hr style={styles.hr} />

            <Heading as="h3" style={styles.h3}>
              Meanwhile, feel free to explore my work:
            </Heading>

            <Text style={styles.text}>
              💻 <strong>GitHub</strong>
            </Text>

            <Link href={SITE.github}>{SITE.github}</Link>

            <Text
              style={{
  ...styles.text,
  ...styles.linkSpacing,
}}
            >
              💼 <strong>LinkedIn</strong>
            </Text>

            <Link href={SITE.linkedin}>{SITE.linkedin}</Link>

            <Hr style={styles.hr} />

            <Button href={SITE.portfolio} style={styles.button}>
              🚀 View My Portfolio
            </Button>

            <Text
              style={{
                ...styles.text,
                marginTop: "28px",
              }}
            >
              I appreciate you taking the time to get in touch. I look forward
              to connecting with you soon.
            </Text>

            <Text style={styles.text}>
              Best regards,
            </Text>

            <Text style={styles.text}>
              <strong>{SITE.name}</strong>
            </Text>

            <Text style={styles.text}>
              {SITE.role}
            </Text>
          </Section>

          {/* Footer */}
          <Section style={styles.footer}>
            <Text style={styles.footerText}>
              © {new Date().getFullYear()} {SITE.name}
            </Text>

            <Text style={styles.footerSmall}>
              Thank you for connecting! Have a wonderful day.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}