const imageContainer = document.getElementById("imageContainer");

const descriptions = [
  {
    before: "Instructions for logo stand assembly",
    after: "There are 3 parts as shown in the photo"
  },
  {
    before: "put part 1A and part 1B beside each other",
    after: "Note: the tilted parts should point inward"
  },
  {
    before: "Fit part 2 over Part 1A AND 1B",
    after: "the sticker with \"F\" on part 2 should point to the front. The sicker can be removed"
  },
  {
    before: "Rotate the stand",
    after: "" // design only
  },
  {
    before: "Fit part 3 inside part 1A and 1B",
    after: "Note: do not push it all the way inside yet"
  },
  {
    before: "Note: the patterned side of part 3 is the down side.",
    after: ""
  },
  {
    before: "Hold the stand with both hands and from the corner, then push part 3 gently inside",
    after: "push gently, otherwise the stand could break"
  },
  {
    before: "When part 3 snips in place, the assembly is done",
    after: "Enjoy :)"
  }
];

descriptions.forEach((desc, i) => {
  const section = document.createElement("div");
  section.className = "image-section";

  section.innerHTML = `
    <div class="description">
      <p>${desc.before}</p>
    </div>
    <img src="images/pic${i + 1}.jpg" alt="Image ${i + 1}" />
    <div class="description">
      <p>${desc.after}</p>
    </div>
  `;

  imageContainer.appendChild(section);
});
