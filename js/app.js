document.addEventListener("DOMContentLoaded", () => {
  const downloadLinks = document.querySelectorAll('[data-download]');

  downloadLinks.forEach((link) => {
    const filename = link.dataset.download || link.getAttribute("href")?.split("/").pop() || "download";
    link.setAttribute("download", filename);
  });
});
