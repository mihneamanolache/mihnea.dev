"use client";

import React, { useEffect } from 'react'
import hljs from "highlight.js";

export default function HljsComponent({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        hljs.highlightAll();
    }, []);
    return (
        <>{children}</>
    )
}
