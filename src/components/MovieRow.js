export default function MovieRow({ movie }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <div style={{ padding: "10px" }}>
        <img src={movie.image_url} width="100" alt="Movie cover" />
      </div>
      <div style={{ padding: "10px" }}>{movie.title}</div>
      <div style={{ padding: "10px" }}>{movie.director}</div>
    </div>
  );
}
