export default function ProjectCard({ title, desc }) {
  return (
    <div style={{
      padding: "15px",
      margin: "10px 0",
      background: "#1e293b",
      borderRadius: "8px"
    }}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}