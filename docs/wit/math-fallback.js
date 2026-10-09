// Native MathML first; do a function test for MathML and if it fails load MathJax.
(() => {
  const box = document.createElement('div');
  box.style.cssText = 'position:absolute;visibility:hidden';
  box.innerHTML = '<math><mspace width="23px" height="1px"></mspace></math>';
  document.body.append(box);
  const supported = box.firstElementChild.getBoundingClientRect().width >= 22;
  box.remove();
  if (!supported) {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/mml-chtml.js';
    script.async = true;
    document.head.append(script);
  }
})();
