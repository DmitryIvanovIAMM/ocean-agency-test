import { create } from 'zustand';
import { UserFrontend } from '../models/User';
import { ActionResult } from '../mirage/server';
import { LoginFormValues } from '../models/Login.';

interface useAuthStore {
  user?: UserFrontend | null; // <-- optional to allow undefine
  login: (loginFormValues: LoginFormValues) => Promise<ActionResult>;
}

export const useAuth = create<useAuthStore>((set) => ({
  user: undefined, // <-- initially "unknown"

  login: async (loginFormValues: LoginFormValues): Promise<ActionResult> => {
    try {
      const result: ActionResult = await (
        await fetch('/api/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(loginFormValues),
        })
      ).json();
      // eslint-disable-next-line no-console
      console.log('Login result: ', result);
      if (!result.success) {
        // eslint-disable-next-line no-console
        console.error('Login failed:', result.message);
        set({ user: result.data });
        return result;
      } else {
        set({ user: result.data });
        return result;
      }
    } catch (error) {
      console.error('Login error:', error);
      set({ user: null });
      return {
        success: false,
        message: 'Login failed. Please try again later.',
      };
    }
  },
}));
