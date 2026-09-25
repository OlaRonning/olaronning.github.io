function copyBibtex() {
    const bibtexElement = document.getElementById('bibtex');
    if (!bibtexElement) return;
    const text = bibtexElement.textContent || '';
    navigator.clipboard.writeText(text).then(() => {
        const button = document.querySelector('.bibtex-copy');
        if (button) {
            const originalText = button.textContent;
            button.textContent = 'Copied!';
            setTimeout(() => {
                button.textContent = originalText;
            }, 2000);
        }
    }).catch((err) => {
        console.error('Failed to copy:', err);
    });
}
