(() => {
  'use strict';
  const button = document.getElementById('copy-email');
  const status = document.getElementById('copy-email-status');
  if (!button || !status) return;
  const email = button.dataset.email;

  button.addEventListener('click', async () => {
    let copied = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(email);
        copied = true;
      } catch (_) { /* Some browsers block clipboard permission. */ }
    }
    if (!copied) {
      // Fallback for browsers that do not support the modern Clipboard API.
      const field = document.createElement('textarea');
      field.value = email;
      field.setAttribute('readonly', '');
      field.style.cssText = 'position:fixed;left:-9999px;top:0;';
      document.body.appendChild(field);
      field.select();
      try { copied = document.execCommand('copy'); } catch (_) { /* Graceful fallback. */ }
      field.remove();
    }
    if (copied) {
      button.textContent = 'Copied ✓';
      status.textContent = 'Email address copied to clipboard.';
    } else {
      button.textContent = 'Copy email address ⧉';
      status.textContent = 'Copying was blocked. Please select the email address shown here.';
    }
  });
})();
