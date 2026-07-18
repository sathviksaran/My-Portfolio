// emails/styles.ts

export const styles = {
  body: {
    backgroundColor: "#f4f4f5",
    fontFamily: "Inter, Arial, Helvetica, sans-serif",
    padding: "30px 0",
  },

  container: {
    maxWidth: "620px",
    margin: "0 auto",
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    overflow: "hidden",
    border: "1px solid #e5e7eb",
  },

  header: {
    backgroundColor: "#2563eb",
    background:
      "linear-gradient(135deg,#2563eb,#06b6d4)",
    textAlign: "center" as const,
    padding: "40px",
  },

  heading: {
    color: "#ffffff",
    margin: 0,
    fontSize: "30px",
    fontWeight: "700",
  },

  subtitle: {
    color: "#dbeafe",
    marginTop: "12px",
    fontSize: "16px",
  },

  section: {
    padding: "35px",
  },

  text: {
    fontSize: "16px",
    lineHeight: "1.8",
    color: "#374151",
  },

  h3: {
    fontSize: "20px",
    marginBottom: "12px",
  },

  hr: {
    borderColor: "#e5e7eb",
    margin: "28px 0",
  },

  button: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    padding: "14px 24px",
    borderRadius: "8px",
    textDecoration: "none",
    display: "inline-block",
    fontWeight: "600",
    textAlign: "center" as const,
  },

  footer: {
    backgroundColor: "#111827",
    textAlign: "center" as const,
    padding: "24px",
  },

  footerText: {
    color: "#9ca3af",
    fontSize: "13px",
  },

  footerSmall: {
    color: "#6b7280",
    fontSize: "12px",
  },
  linkSpacing: {
  marginTop: "18px",
},

signatureSpacing: {
  marginTop: "28px",
},
messageBox: {
  backgroundColor: "#f8fafc",
  padding: "18px",
  borderRadius: "10px",
  border: "1px solid #e2e8f0",
},

buttonSpacing: {
  marginTop: "24px",
},
} as const;