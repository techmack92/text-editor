const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// (Add an event handler to the `beforeinstallprompt` event)
// This event is fired when the browser is ready to prompt the user to install the PWA
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the event for later use
    window.deferredPrompt = event;
});

// (Implement a click event handler on the `butInstall` element)
butInstall.addEventListener('click', async () => {
    // Retrieve the deferred prompt event
    const promptEvent = window.deferredPrompt;
    // If there's no deferred prompt event, return
    if (!promptEvent) {
        return;
    }
    // Trigger the installation prompt
    promptEvent.prompt();
    // Reset the deferred prompt to null after prompting
    window.deferredPrompt = null;
    // Hide the install button after prompting
    butInstall.classList.toggle('hidden', true);
});

// (Add a handler for the `appinstalled` event)
// This event is fired when the PWA is successfully installed
window.addEventListener('appinstalled', (event) => {
    // Reset the deferred prompt to null after installation
    window.deferredPrompt = null;
    // Hide the install button after installation
    butInstall.classList.toggle('hidden', true);
});
