document.addEventListener("DOMContentLoaded", function () {
  // No theme logic needed since dark theme is removed
});

document
  .getElementById("contactForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const responseElement = document.getElementById("formResponse");

    try {
      const response = await fetch(
        "https://your-cloudflare-worker-url.workers.dev",
        {
          method: "POST",
          body: JSON.stringify(Object.fromEntries(formData)),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (response.ok) {
        responseElement.textContent =
          "Your message has been sent successfully!";
        responseElement.style.color = "green";
        responseElement.style.display = "block";
        form.reset();
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      responseElement.textContent = "An error occurred. Please try again.";
      responseElement.style.color = "red";
      responseElement.style.display = "block";
    }
  });
