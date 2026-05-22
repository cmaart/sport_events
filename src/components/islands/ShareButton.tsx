import { useEffect, useRef, useState } from 'preact/hooks';
import { t } from '../../lib/i18n';

interface Props {
  url: string;
  title: string;
}

export default function ShareButton({ url, title }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onDown = (ev: MouseEvent) => {
      if (!containerRef.current?.contains(ev.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const handleClick = async () => {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({ title, url, text: title });
        return;
      } catch (err) {
        if ((err as { name?: string })?.name === 'AbortError') return;
      }
    }
    setMenuOpen((v) => !v);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable — silently noop
    }
  };

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  const whatsappHref = `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`;
  const xHref = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const mailHref = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;

  const itemClass =
    'flex items-center gap-2.5 px-3 py-2 hover:bg-[var(--color-surface-muted)] text-[var(--color-ink-900)]';

  return (
    <div class="relative" ref={containerRef}>
      <button
        type="button"
        onClick={handleClick}
        aria-haspopup="menu"
        aria-expanded={menuOpen}
        aria-label={t('event.share.aria')}
        class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[var(--color-ink-300)] hover:border-[var(--color-brand-500)] font-medium text-sm transition"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" aria-hidden="true">
          <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
          <polyline points="16 6 12 2 8 6" />
          <line x1="12" y1="2" x2="12" y2="15" />
        </svg>
        {t('event.share')}
      </button>
      {menuOpen && (
        <div
          role="menu"
          class="absolute right-0 mt-2 w-56 z-30 rounded-xl border border-[var(--color-ink-100)] bg-white shadow-lg py-1 text-sm overflow-hidden"
        >
          <a
            role="menuitem"
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            class={itemClass}
            onClick={() => setMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" class="w-4 h-4" aria-hidden="true">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.516 5.26l.255.402-1 3.648 3.718-.989zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.298-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z" />
            </svg>
            {t('event.share.menu.whatsapp')}
          </a>
          <a
            role="menuitem"
            href={xHref}
            target="_blank"
            rel="noreferrer"
            class={itemClass}
            onClick={() => setMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4" aria-hidden="true">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            {t('event.share.menu.x')}
          </a>
          <a
            role="menuitem"
            href={mailHref}
            class={itemClass}
            onClick={() => setMenuOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" aria-hidden="true">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <polyline points="22 6 12 13 2 6" />
            </svg>
            {t('event.share.menu.email')}
          </a>
          <button
            type="button"
            role="menuitem"
            onClick={handleCopy}
            class={`w-full text-left ${itemClass}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <span class={copied ? 'text-[var(--color-brand-600)] font-medium' : ''}>
              {copied ? t('event.share.copied') : t('event.share.menu.copy')}
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
