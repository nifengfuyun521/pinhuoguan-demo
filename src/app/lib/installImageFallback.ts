const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDMyMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMyMCIgaGVpZ2h0PSIyNDAiIGZpbGw9IiNGNUY1RjQiLz48cmVjdCB4PSI4MCIgeT0iNjAiIHdpZHRoPSIxNjAiIGhlaWdodD0iMTIwIiByeD0iMTYiIGZpbGw9IiNFN0U1RTQiLz48Y2lyY2xlIGN4PSIxMzAiIGN5PSIxMDIiIHI9IjE2IiBmaWxsPSIjQ0JDNUM0Ii8+PHBhdGggZD0iTTk4IDE2MUwxMzAgMTI5TDE1NCAxNTNMMTc4IDEzN0wyMjIgMTgxSDk4VjE2MVoiIGZpbGw9IiNCMEJFQjciLz48cGF0aCBkPSJNOTggMTgxSDE3M0wxNTQgMTUzTDEzMCAxMjlMOTggMTYxVjE4MVoiIGZpbGw9IiNDN0QyQ0MiLz48cGF0aCBkPSJNMTU0IDE1M0wxNzMgMTgxSDIyMkwxNzggMTM3TDE1NCAxNTNaIiBmaWxsPSIjOUZBRUE2Ii8+PHRleHQgeD0iMTYwIiB5PSIyMDYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM3ODc3NzYiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmIj7lm77niYflpqLmnKrliqDovb08L3RleHQ+PC9zdmc+';

const IMAGE_FALLBACK_INSTALLED = '__phg_image_fallback_installed__';
const IMAGE_FALLBACK_APPLIED = 'phgFallbackApplied';
const IMAGE_ORIGINAL_SRC = 'phgOriginalSrc';

function applyFallback(target: EventTarget | null) {
  if (!(target instanceof HTMLImageElement)) {
    return;
  }

  if (target.dataset[IMAGE_FALLBACK_APPLIED] === 'true') {
    return;
  }

  target.dataset[IMAGE_FALLBACK_APPLIED] = 'true';
  target.dataset[IMAGE_ORIGINAL_SRC] = target.currentSrc || target.src || '';
  target.src = ERROR_IMG_SRC;
}

export function installImageFallback() {
  if (typeof window === 'undefined') {
    return;
  }

  if ((window as Window & { [IMAGE_FALLBACK_INSTALLED]?: boolean })[IMAGE_FALLBACK_INSTALLED]) {
    return;
  }

  (window as Window & { [IMAGE_FALLBACK_INSTALLED]?: boolean })[IMAGE_FALLBACK_INSTALLED] = true;

  window.addEventListener(
    'error',
    (event) => {
      applyFallback(event.target);
    },
    true
  );
}
