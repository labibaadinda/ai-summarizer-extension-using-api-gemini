document.addEventListener("DOMContentLoaded", () => {
  // Load saved API key jika sudah ada
  chrome.storage.sync.get(["geminiApiKey"], (result) => {
    if (result.geminiApiKey) {
      document.getElementById("api-key").value = result.geminiApiKey;
    }
  });

  // Save API key saat button diklik
  document.getElementById("save-btn").addEventListener("click", () => {
    const apiKey = document.getElementById("api-key").value.trim();

    if (apiKey) {
      chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
        const successMessage = document.getElementById("success-message");
        successMessage.style.display = "block";

        // close tab setelah 1 detik
        setTimeout(() => {
          window.close();
          // close current tab
          chrome.tabs.getCurrent((tab) => {
            if (tab) {
              chrome.tabs.remove(tab.id);
            }
          });
        }, 1000);
      });
    }
  });
});