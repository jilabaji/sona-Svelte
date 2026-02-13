export function formatNumber(num: number): string {
    return new Intl.NumberFormat().format(num);
}

export function truncateString(str: string, length: number): string {
    if (str.length <= length) return str;
    return str.slice(0, length) + '...';
}

export function getStatusColor(status: string): string {
    const colors: Record<string, string> = {
        active: '#22c55e',
        warning: '#f59e0b',
        danger: '#ef4444',
        inactive: '#64748b'
    };
    return colors[status.toLowerCase()] || '#64748b';
}
