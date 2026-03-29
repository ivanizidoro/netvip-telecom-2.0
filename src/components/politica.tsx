import "@react-pdf-viewer/core/lib/styles/index.css";

const Politica = () => {
  const pdfUrl = "/assets/politica.pdf"; // caminho relativo ao public ou build

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <iframe
        src={pdfUrl}
        title="Política de Uso NETVIP"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Politica;
