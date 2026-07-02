export const BASE_PATH = "/shobhit-general-landing-page";

export function getCurrentBasePath(): "" | typeof BASE_PATH {
  const pathname = window.location.pathname || "/";
  return pathname === BASE_PATH || pathname.startsWith(`${BASE_PATH}/`)
    ? BASE_PATH
    : "";
}

export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const base = getCurrentBasePath();

  if (normalized === "/") {
    return base || "/";
  }

  return `${base}${normalized}`;
}

export function getAppPathname(): string {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  if (pathname === BASE_PATH) {
    return "/";
  }

  if (pathname.startsWith(`${BASE_PATH}/`)) {
    return pathname.slice(BASE_PATH.length) || "/";
  }

  return pathname;
}
