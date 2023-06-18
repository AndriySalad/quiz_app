
export const disableBackNavigation = () => {
    window.history.pushState(null, document.title, window.location.href);
    window.addEventListener("popstate", disableBackNavigation);
};