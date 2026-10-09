const markdownInput = document.getElementById('markdown-input');
const htmlOutput = document.getElementById('html-output');
const preview = document.getElementById('preview');

function convertMarkdown() {
  let md = markdownInput.value;

  md = md.replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2">');

  md = md.replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>');

  md = md.replace(/^\s*###\s+(.*)$/gm, '<h3>$1</h3>');
  md = md.replace(/^\s*##\s+(.*)$/gm, '<h2>$1</h2>');
  md = md.replace(/^\s*#\s+(.*)$/gm, '<h1>$1</h1>');

  md = md.replace(/^\s*>\s+(.*)$/gm, '<blockquote>$1</blockquote>');

  md = md.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  md = md.replace(/__(.*?)__/g, '<strong>$1</strong>');

  md = md.replace(/\*(.*?)\*/g, '<em>$1</em>');
  md = md.replace(/_(.*?)_/g, '<em>$1</em>');

  return md;
}

markdownInput.addEventListener('input', () => {
  const html = convertMarkdown();
  
  htmlOutput.textContent = html;
  
  preview.innerHTML = html;
});
