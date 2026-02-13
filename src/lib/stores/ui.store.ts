import { writable } from 'svelte/store';

export const showCreateUserModal = writable(false);
export const showRegisterRobotModal = writable(false);

export const openCreateUserModal = () => showCreateUserModal.set(true);
export const closeCreateUserModal = () => showCreateUserModal.set(false);

export const openRegisterRobotModal = () => showRegisterRobotModal.set(true);
export const closeRegisterRobotModal = () => showRegisterRobotModal.set(false);
