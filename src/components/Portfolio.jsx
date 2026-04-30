import { forwardRef } from "react";

const Portfolio = forwardRef((props, ref) => (
    <div id="portfolio" ref={ref} style={{ height: "100vh", scrollSnapAlign: "start" }}>
        <div className="flex items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to Portfolio</h1>
        </div>
    </div>
));

export default Portfolio ;