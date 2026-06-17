import { useState, useEffect } from "react";

function MaterialsPage() {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMaterials() {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch("http://localhost:3000/materials", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await response.json();
        setMaterials(data.materials);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    loadMaterials();
  }, []);

  if (loading) {
    return <p>Loading materials...</p>;
  }

  return (
    <div>
      <h2>Study Materials</h2>
      {materials.length === 0 ? (
        <p>No materials yet.</p>
      ) : (
        <ul>
          {materials.map((material) => (
            <li key={material.id}>
              <strong>{material.title}</strong> — {material.subject} ({material.type})
              <br />
              <a href={material.url} target="_blank" rel="noreferrer">
                Open
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MaterialsPage;