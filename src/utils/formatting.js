export function sanitizeTeamName(teamName) {
  return teamName.toLowerCase().includes('noorse')
    ? 'Noorse'
    : teamName
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .split('.')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('.')
}
