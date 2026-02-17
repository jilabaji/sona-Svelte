export const DEMO_MODE = true;

export const robotActivityMock = [
    { label: 'Mon', value: 420 },
    { label: 'Tue', value: 580 },
    { label: 'Wed', value: 510 },
    { label: 'Thu', value: 740 },
    { label: 'Fri', value: 890 },
    { label: 'Sat', value: 920 },
    { label: 'Sun', value: 1050 }
];

export const fleetDistributionMock = [
    { label: 'Active', value: 78, color: '#4ade80' },
    { label: 'Maintenance', value: 12, color: '#fbbf24' },
    { label: 'Offline', value: 5, color: '#f87171' },
    { label: 'Pending', value: 5, color: '#6366f1' }
];

export const recentActivityMock = [
    {
        id: 1,
        title: 'RC-7281 Hardware Sync',
        time: '2h ago',
        description: 'Automated health check completed for Enterprise Alpha. All sub-systems operational with 100% efficiency.',
        type: 'success'
    },
    {
        id: 2,
        title: 'New Operator Assigned',
        time: '4h ago',
        description: 'Sarah Jenkins has been assigned as primary operator for the St. Mary Care Home robot fleet.',
        type: 'info'
    },
    {
        id: 3,
        title: 'Firmware Update v2.4.1',
        time: '6h ago',
        description: 'System-wide firmware update successfully deployed to 12 telemetry nodes. Security patches applied.',
        type: 'update'
    },
    {
        id: 4,
        title: 'Alert: Low Battery Threshold',
        time: '12h ago',
        description: 'RC-4412 (Heritage Manor) reported battery levels below 15%. Unit successfully returned to charging station.',
        type: 'warning'
    }
];

export const dashboardStatsMock = [
    {
        label: 'Total Robots',
        value: '1,248',
        trend: '+12%',
        trendType: 'success',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`
    },
    {
        label: 'Active Enterprises',
        value: '42',
        trend: '+3',
        trendType: 'success',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18"/><path d="M3 7v1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7m0 1a3 3 0 0 0 6 0V7H3l2-4h14l2 4Z"/></svg>`
    },
    {
        label: 'System Uptime',
        value: '99.98%',
        trend: 'Stable',
        trendType: 'info',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`
    },
    {
        label: 'Active Alerts',
        value: '04',
        trend: '-40%',
        trendType: 'danger',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`
    }
];
