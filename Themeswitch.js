const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

function toggleTheme() {
  const lightThemeLink = document.getElementById('light-theme');
  const darkThemeLink = document.getElementById('dark-theme');
  const pagedefault_dark = document.getElementById('page-dark');
  const pagedefault_light = document.getElementById('page-light');
  if (prefersDarkMode) {
    lightThemeLink.disabled = true; 
    pagedefault_dark.disabled = false;
    pagedefault_light.disabled = true;
    darkThemeLink.disabled = false; 
  } else {
    lightThemeLink.disabled = false; 
    pagedefault_dark.disabled = true;
    pagedefault_light.disabled = false;
    darkThemeLink.disabled = true; 
  }
}

toggleTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', toggleTheme);
