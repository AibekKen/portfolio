// Runs the callback once the page has fully loaded and the browser is idle
export const afterPageLoad = (callback: () => void) => {
  const runWhenIdle = () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(() => callback(), { timeout: 2000 })
    } else {
      setTimeout(callback, 200)
    }
  }

  if (document.readyState === 'complete') {
    runWhenIdle()
  } else {
    window.addEventListener('load', runWhenIdle, { once: true })
  }
}
