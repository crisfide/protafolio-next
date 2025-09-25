"use client";
import { useEffect } from "react";

export default function useScrollAnim(ref, options = {}, once = false) {
    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                element.classList.remove("escondido");
                element.classList.add("mostrado");

                if (once) observer.unobserve(entry.target);
            } else {
                element.classList.remove("mostrado");
                element.classList.add("escondido");
            }
        });
        }, options);

        observer.observe(element);

        return () => observer.disconnect();
    }, [ref, options, once]);
}
