const themeMode = localStorage.getItem('colorMode')
const htmlElement = document.querySelector('html')

if (themeMode === 'light') {
  htmlElement.classList.remove('dark')
}

if (themeMode === 'dark' || themeMode == undefined)
  htmlElement.classList.add('dark')

if (themeMode == undefined) localStorage.setItem('colorMode', 'dark')
