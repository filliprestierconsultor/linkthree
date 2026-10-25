// Links de destino estão no index.html e podem ser alterados diretamente lá.
document.getElementById('year').textContent = new Date().getFullYear();
const shareButton = document.getElementById('shareButton');
const toast = document.getElementById('toast');
shareButton.addEventListener('click', async () => {
  const url = window.location.href;
  try {
    if (navigator.share) { await navigator.share({ title: document.title, url }); return; }
    await navigator.clipboard.writeText(url);
    toast.hidden = false;
    setTimeout(() => { toast.hidden = true; }, 2400);
  } catch (error) { if (error.name !== 'AbortError') window.prompt('Copie o link da página:', url); }
});
// Ponto opcional para adicionar eventos de analytics quando você tiver seu Pixel/GA4.
document.querySelectorAll('[data-track]').forEach(link => {
  link.addEventListener('click', () => {
    if (typeof window.gtag === 'function') window.gtag('event', 'select_content', { content_type: 'link_bio', item_id: link.dataset.track });
  });
});
