document.querySelector('[data-copy-install]')?.addEventListener('click', async () => {
  const command = document.getElementById('brew-command').textContent;
  const status = document.getElementById('copy-status');
  try { await navigator.clipboard.writeText(command); status.textContent = 'Command copied.'; }
  catch { status.textContent = 'Select the command above and copy it.'; }
});
