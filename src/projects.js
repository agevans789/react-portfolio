import { v4 } from 'uuid';

const projects = [
    {
        id: v4(),
        name: "Hogwild Lab",
        url: "https://github.com/agevans789/react-hogwild-vite.git",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Pig_farm_Vampula_1.jpg",
        description: "Application that allows users to view and manage a list of hogs with various attributes."
    },
    {
        id: v4(),
        name: "React Forms Vite Lab",
        url: "https://github.com/agevans789/React-Forms-Vite-Lab.git",
        image: "https://blog.openreplay.com/images/how-to-build-your-react-app-using-vite/images/hero.png",
        description: "A React application demonstrating form handling and state management using Vite as the build tool."
    },
    {
        id: v4(),
        name: "Dynamic Color Clock Lab",
        url: "https://github.com/agevans789/dynamic-color-clock.git",
        image: "https://rlv.zcache.com/color_wheel_and_time_teaching_clock-r257db165112c48d0a3cf89f6e30645c7_s0ysk_8byvr_644.webp",
        description: "A digital clock that changes color based on the current time using HTML, CSS, and JavaScript."
    }
];

export default projects;