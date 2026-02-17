import { writable } from 'svelte/store';

export const showCreateUserModal = writable(false);
export const showRegisterRobotModal = writable(false);

export const isSidebarOpen = writable(false);

export const openCreateUserModal = () => showCreateUserModal.set(true);
export const closeCreateUserModal = () => showCreateUserModal.set(false);

export const openRegisterRobotModal = () => showRegisterRobotModal.set(true);
export const closeRegisterRobotModal = () => showRegisterRobotModal.set(false);

export const toggleSidebar = () => isSidebarOpen.update(v => !v);
export const openSidebar = () => isSidebarOpen.set(true);
export const closeSidebar = () => isSidebarOpen.set(false);
