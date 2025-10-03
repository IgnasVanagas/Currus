import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const DEFAULT_OFFSET = 92;
const MAX_ATTEMPTS = 10;
const ATTEMPT_INTERVAL = 80;
const scrollToElement = (element, offset) => {
    const elementTop = element.getBoundingClientRect().top + window.scrollY;
    const targetPosition = Math.max(elementTop - offset, 0);
    window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
    });
};
export const useScrollToHash = (offset = DEFAULT_OFFSET) => {
    const location = useLocation();
    useEffect(() => {
        if (!location.hash) {
            return;
        }
        const hash = decodeURIComponent(location.hash.replace(/^#/, ""));
        if (!hash) {
            return;
        }
        let attempts = 0;
        let timeoutId;
        const tryScroll = () => {
            const target = document.getElementById(hash);
            if (target) {
                scrollToElement(target, offset);
                return;
            }
            if (attempts < MAX_ATTEMPTS) {
                attempts += 1;
                timeoutId = window.setTimeout(tryScroll, ATTEMPT_INTERVAL);
            }
        };
        tryScroll();
        return () => {
            if (timeoutId) {
                window.clearTimeout(timeoutId);
            }
        };
    }, [location.hash, location.pathname, offset]);
};
