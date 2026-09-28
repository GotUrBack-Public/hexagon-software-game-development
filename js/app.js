document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('a[href$=".exe"], a[href$=".x86_64"]');

  buttons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const target = button.getAttribute("href");
      if (!target) {
        event.preventDefault();
        return;
      }

      const isDownload = button.hasAttribute("download");
      if (!isDownload) {
        const filename = target.split("/").pop();
        button.setAttribute("download", filename || "download");
      }
    });
  });
});
