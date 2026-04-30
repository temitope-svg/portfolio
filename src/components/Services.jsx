import { forwardRef } from "react";

const Services = forwardRef((props, ref) => (
    <div id="services" ref={ref} style={{ height: "100vh", scrollSnapAlign: "start" }}>
        <div className="flex items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to Services</h1>
        </div>
    </div>
));

export default Services;