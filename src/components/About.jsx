import { forwardRef } from "react";

const About = forwardRef((props, ref) => (
    <div id="about" ref={ref} style={{ height: "100vh", scrollSnapAlign: "start" }}>
        <div className="flex items-center justify-center h-full">
            <h1 className="text-4xl font-bold text-gray-800">Welcome to About</h1>
        </div>
    </div>
));

export default About;