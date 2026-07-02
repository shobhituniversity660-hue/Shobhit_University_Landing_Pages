export const BASE_PATH = "/shobhit-general-landing-page";

export function withBasePath(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;

  if (normalized === "/") {
    return BASE_PATH;
  }

  return `${BASE_PATH}${normalized}`;
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
