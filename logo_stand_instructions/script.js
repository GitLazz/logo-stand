const imageContainer = document.getElementById("imageContainer");

for (let i = 1; i <= 8; i++) {
  const section = document.createElement("div");
  section.className = "image-section";

  section.innerHTML = `
    <div class="description">
      <p><strong>Description before image ${i}:</strong> This is a placeholder for the description before image ${i}.</p>
    </div>
    <img src="images/pic${i}.jpg" alt="Image ${i}" />
    <div class="description">
      <p><strong>Description after image ${i}:</strong> This is a placeholder for the description after image ${i}.</p>
    </div>
  `;

  imageContainer.appendChild(section);
}
