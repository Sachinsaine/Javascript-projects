let displayNotes = document.querySelector(".NotesCont");
function createNote() {
  let createDiv = document.createElement("div");
  createDiv.innerHTML = `
                <div class="note-card">
                <textarea class="text" placeholder="Write a note..."></textarea>
                <span class="remove">🗑️</span>
                </div>
                `;

  let remove = createDiv.querySelector(".remove");
  remove.addEventListener("click", () => {
    createDiv.remove();
  });

  displayNotes.appendChild(createDiv);
}
