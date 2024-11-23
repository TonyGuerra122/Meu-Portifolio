document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const modalTitle = modal.querySelector(".modal-title");
  const modalBody = modal.querySelector(".modal-body");
  const modalLink = modal.querySelector(".modal-link");
  const modalLinkText = modal.querySelector(".modal-link-text");
  const modalLinkIcon = modal.querySelector(".modal-link-icon");
  const closeModal = modal.querySelector(".modal-close");
  const buttons = document.querySelectorAll(".card-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.getAttribute("data-modal-content");
      const link = button.getAttribute("data-modal-link");
      const icon = button.getAttribute("data-modal-icon");
      const title = button.previousElementSibling.textContent; // Título do card

      modalTitle.textContent = title;
      modalBody.textContent = content;

      // Configurar o link
      modalLink.href = link;
      modalLinkText.textContent = `Acesse aqui`;
      modalLinkIcon.className = `fa ${icon}`; // Adiciona a classe do ícone
      modalLink.style.display = "flex";

      modal.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
