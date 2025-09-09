document.addEventListener("DOMContentLoaded", () => {
  const deleteButtons = document.querySelectorAll(".delete-btn");
  const modal = document.getElementById("deleteModal");
  const confirmBtn = document.getElementById("confirmDelete");
  const cancelBtn = document.getElementById("cancelDelete");

  let currentForm = null;

  deleteButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      currentForm = e.target.closest(".delete-form");
      modal.style.display = "block";
    });
  });

  confirmBtn.addEventListener("click", () => {
    if (currentForm) currentForm.submit();
    modal.style.display = "none";
  });

  cancelBtn.addEventListener("click", () => {
    modal.style.display = "none";
    currentForm = null;
  });

  // Close modal on clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      currentForm = null;
    }
  });
});
