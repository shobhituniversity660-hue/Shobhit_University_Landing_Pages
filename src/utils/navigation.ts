import { withBasePath } from "../config";

export function navigateTo(path: string) {
  const fullPath = withBasePath(path);
  window.history.pushState({}, "", fullPath);
  window.dispatchEvent(new PopStateEvent("popstate"));

  const hash = path.includes("#") ? path.split("#")[1] : null;
  window.setTimeout(() => {
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, 50);
}
