import Script from 'next/script';

function SyncThemeScript() {
  const syncTheme = () => {
    const savedTheme = localStorage.getItem('theme');

    const htmlElement = document.querySelector('html');

    switch (savedTheme) {
      case 'ligth':
        htmlElement?.classList.remove('dark');
        break;
      case 'dark':
        htmlElement?.classList.add('dark');
        break;
      default:
        htmlElement?.classList.add('dark');
    }
  };

  const scriptStr = `
      (${syncTheme.toString()})();
    `;

  return <Script id="theme" dangerouslySetInnerHTML={{ __html: scriptStr }} />;
}

export default SyncThemeScript;
