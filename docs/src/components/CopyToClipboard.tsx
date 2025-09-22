import React, { useState } from 'react';

type CopyToClipboardProps = {
  label: string;
  value: string;
  successText?: string;
  className?: string;
};

export default function CopyToClipboard({
  label,
  value,
  successText = 'Copied!',
  className,
}: CopyToClipboardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // Fallback: create a temporary textarea
      try {
        const textarea = document.createElement('textarea');
        textarea.value = value;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      } catch (err) {
        console.error('Copy failed', err);
      }
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={className}
      aria-live="polite"
      aria-label={copied ? successText : label}
      title={copied ? successText : label}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.5rem 0.75rem',
        borderRadius: 6,
        border: '1px solid var(--ifm-color-primary)',
        color: 'var(--ifm-color-primary)',
        background: 'transparent',
        cursor: 'pointer',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
      <span>{copied ? successText : label}</span>
    </button>
  );
}
