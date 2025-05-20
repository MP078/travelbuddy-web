import { create } from "zustand";
import { auth } from "@/lib/api";

type UserStore = {
    user: User | null;
    authenticated: boolean;
    loading: boolean;
    setUser: (user: User | null) => void;
    login: (email: string, password: string) => Promise<void>;
    register: (userData: { email: string; password: string; name: string }) => Promise<void>;
    logout: () => Promise<void>;
    checkAuth: () => Promise<void>;
};

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    authenticated: false,
    loading: true,
    setUser: (user) => set({ user }),
    login: async (email, password) => {
        set({ loading: true });
        try {
            const response = await auth.login(email, password);
            const token = response.headers?.["access-token"];
            if (token) localStorage.setItem("token", token);
            set({ authenticated: true });
            // Optionally fetch and set user info here
        } finally {
            set({ loading: false });
        }
    },
    register: async (userData) => {
        set({ loading: true });
        try {
            const response = await auth.register(userData);
            const token = response.headers?.["access-token"];
            if (token) localStorage.setItem("token", token);
            set({ authenticated: true });
            // Optionally fetch and set user info here
        } finally {
            set({ loading: false });
        }
    },
    logout: async () => {
        set({ loading: true });
        try {
            await auth.logout();
            localStorage.removeItem("token");
            set({ user: null, authenticated: false });
        } finally {
            set({ loading: false });
        }
    },
    checkAuth: async () => {
        set({ loading: true });
        try {
            await auth.checkAuth();
            set({ authenticated: true });
            // Optionally fetch and set user info here
        } catch {
            set({ authenticated: false, user: null });
        } finally {
            set({ loading: false });
        }
    },
}));