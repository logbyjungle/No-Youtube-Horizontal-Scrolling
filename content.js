// Disable horizontal scrolling by setting overflow-x to hidden
document.documentElement.style.overflowX = 'hidden';
document.body.style.overflowX = 'hidden';

// Listen for any attempts to change overflow and reset
new MutationObserver(() => {
  document.documentElement.style.overflowX = 'hidden';
  document.body.style.overflowX = 'hidden';
}).observe(document.body, { attributes: true, childList: true, subtree: true });
