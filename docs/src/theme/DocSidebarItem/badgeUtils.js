export function isSubtleBadge(badge) {
  if (!badge || typeof badge !== 'string') return false;
  const val = badge.toLowerCase();
  return val === 'planned' || val === 'doc wip';
}

export function isWipBadge(badge) {
  if (!badge || typeof badge !== 'string') return false;
  return badge.toLowerCase() === 'wip';
}

export function getBadgeClass(badge) {
  if (isWipBadge(badge)) {
    return 'menu__link-badge menu__link-badge--wip';
  }
  return isSubtleBadge(badge)
    ? 'menu__link-badge menu__link-badge--subtle'
    : 'menu__link-badge';
}
