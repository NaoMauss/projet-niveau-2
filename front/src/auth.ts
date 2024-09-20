import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

export async function authGuard(_: RouteLocationNormalized, __: RouteLocationNormalized, next: NavigationGuardNext) {
  try {
    const response = await fetch('http://localhost:3000/auth/check', {
      method: 'GET',
      credentials: 'include',
    });

    if (response.ok) {
      next();
    } else {
      next('/login');
    }
  } catch (error) {
    console.error('Error checking authentication:', error);
    next('/login');
  }
}