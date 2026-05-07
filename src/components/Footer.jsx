export default function Footer() {
  return (
    <footer style={{
      textAlign: "center",
      padding: "25px",
      color: "#94a3b8",
      borderTop: "1px solid #1f2937",
      marginTop: "40px"
    }}>
      <p>© {new Date().getFullYear()} Niranjana. All rights reserved.</p>
    </footer>
  );
}