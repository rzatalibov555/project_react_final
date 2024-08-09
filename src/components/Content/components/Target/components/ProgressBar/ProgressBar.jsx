import { useEffect, useRef } from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress, strokeWidth, children }) => {
    const progressBarSvgRef = useRef(null);

    useEffect(() => {
        const progressBarSvg = progressBarSvgRef.current;
        const progressBar = progressBarSvg.querySelector(".progress-bar");
        const radius = 90;
        const circumference = Math.PI * radius;
        const offset = circumference * (1 - progress / 100);
        progressBar.style.strokeDashoffset = offset;
        progressBar.style.strokeDasharray = circumference;
    }, [progress]);

    return (
        <svg
            className="progress-bar__svg"
            viewBox="0 0 200 110"
            ref={progressBarSvgRef}
        >
            <defs>
                <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#22CAAD" />
                    <stop offset="100%" stopColor="#2BB2FE" />
                </linearGradient>
            </defs>
            <path
                d="M 10 100 A 90 90 0 0 1 190 100"
                stroke="#F0F1F3"
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
            />
            <path
                className="progress-bar"
                d="M 10 100 A 90 90 0 0 1 190 100"
                stroke="url(#progress-gradient)"
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
            />
            <foreignObject x="0" y="12" width="100%" height="100%" alignmentBaseline="middle" textAnchor="middle">
                <div className="progress-bar__detail">
                    <h1 className="progress-bar__progress-value">{progress}%</h1>
                    {children}
                </div>
            </foreignObject>
        </svg>
    );
}

export default ProgressBar;