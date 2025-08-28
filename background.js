crome.runtime.onInstalled.addListener(() => {
  crome.storage.sync.get(["geminiApiKey"], (result) => {
    if (!result.geminiApiKey) {
      crome.tabs.create({
        url: "options.html",
      });
    }
  });
});