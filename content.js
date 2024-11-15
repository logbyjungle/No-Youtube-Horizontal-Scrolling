document.documentElement.style.overflowX = 'hidden';
document.body.style.overflowX = 'hidden';

new MutationObserver(() => {
  document.documentElement.style.overflowX = 'hidden';
  document.body.style.overflowX = 'hidden';
}).observe(document.body, { attributes: true, childList: true, subtree: true });
