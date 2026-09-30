import aboutImg from './aboutus.jpeg';

// Currently working on Data

const currentlyWorkingOn = [
    ["⚛", "React JS"], 
    ["〰", "Tailwind CSS"],
    ["🟨", "Javascript"],
    ["</>", "Frontend Development"],
];


// Fun Facts Data

const funFacts = [
    ["▣", "Computer Science Student"],
    ["▱", "Front-End Development"],
    ["⚛️", "Currently learning React"],
    ["◉", "Exploring UI Design"],
    ["✿", "Always building something"],
];

// project Data 
const projects = [
    {
        title: "Precious Mall",
        description: "My first html and css shopping mall website.",
        image: "/project1.jpeg",
        github: "#",
        live: "#",
    },
        {
        title: "Precious Mall",
        description: "My first html and css shopping mall website.",
        image: "/project2.jpeg",
        github: "#",
        live: "#",
    },
        {
        title: "Precious Mall",
        description: "My first html and css shopping mall website.",
        image: "/project3.jpeg",
        github: "#",
        live: "#",
    },
        {
        title: "Precious Mall",
        description: "My first html and css shopping mall website.",
        image: "/project4.jpeg",
        github: "#",
        live: "#",
    },
];

function App() {
    return (
        <div className='font-sans text-gray-800'>

            {/* nav */}
            <nav className="fixed top-0 left-0 right-0 z-50 h-16 md:h-20 flex items-center justify-between px-4 sm:px-6 md:px-16 bg-white/90 backdrop-blur-md border-gray-200">
                <div className="text-xl md:text-2xl font-bold text-blue-600">
                    {/* logo */}
                    Precious
                </div>

                {/* menu list */}
                <ul className="hidden md:flex items-center lg:gap-8 gap-6">
                    <li><a href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</a></li>
                    <li><a href="#about" className="text-gray-700 hover:text-blue-600 transition">About Me </a></li>
                    <li><a href="#projects" className="text-gray-700 hover:text-blue-600 transition">Projects</a></li>
                    <li><a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact Us</a></li>
                </ul>

                {/* button */}
                <a href='#contact' className="bg-blue-600 text-white border-none px-5 py-2.5 md:py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer text-sm md:text-base">
                    Apply Now
                </a>
            </nav>

            {/* hero section */}
            <section id='home' className="bg-[url('/hero.jpeg')] bg-no-repeat bg-cover relative min-h-screen flex items-center justify-center text-center px-4 sm:px-6 pt-20" >

            {/* dark */}
            <div className= "absolute inset-0 bg-black/55"></div>

                <div className="text-white max-w-3xl relative z-10">
                    <p className="text-blue-300 text-lg sm:text-xl md:text-xl font-semibold mb-4">LEARN . REACT . WITH. ME</p>

                    <h1 className=" text-3xl md:text-6xl text-blue-500 font-bold mb-10"><span className='text-white'>Learn Technology</span> <br /> Build your future</h1>

                    <p className="text-gray-100 mb-15 text-xl md:text-xl">This is my first journey in REACT PROJECT. </p>

                    <div className="flex justify-center gap-3 md:gap-5">
                        <button className="bg-blue-600 text-white border-none rounded-lg cursor-pointer w-32 h-15 px-2 py-2 text-sm md:w-auto md:h-auto md:px-10 md:py-4 md:text-xl ">Learn with me</button>

                        <button className="bg-white text-blue-600 border-2 border-white rounded-lg cursor-pointer w-32 h-15 px-2 py-2 text-sm md:w-auto md:h-auto md:px-10 md:py-4 md:text-xl ">Contact Me</button>
                    </div>
                </div>
            </section>


            {/* {About me section} */}
            {/* ABOUT */}
            <section id="about" className="w-full scroll-mt-20 bg-white px-5 py-16 text-slate-800">
                <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-10 md:grid-cols-12">
 
                    {/* LEFT: image + currently working on */}
                    <div className="flex flex-col items-center md:col-span-3 md:items-start">
                        <div className="relative mb-8 ml-2 h-52 w-48">
                            <div className="absolute -left-4 top-4 h-full w-full rounded-xl bg-blue-200"></div>
                            <img
                                src={aboutImg}
                                alt="About Precious"
                                className="relative z-10 h-full w-full rounded-lg border border-slate-300 object-cover shadow-sm"
                            />
                        </div>
 
                        <div className="w-full max-w-sm">
                            <h3 className="mb-3 text-sm font-semibold text-slate-700">Currently working on:</h3>
                            <div className="flex flex-wrap gap-2">
                                {currentlyWorkingOn.map(([icon, skill]) => (
                                    <span
                                        key={skill}
                                        className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                                    >
                                        <span className="font-bold text-blue-600">{icon}</span>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
 
                    {/* MIDDLE: about text */}
                    <div className="md:col-span-5">
                        <div className="mb-1 flex items-center gap-3">
                            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">About Me</span>
                            <span className="h-px w-6 bg-blue-400" />
                        </div>
 
                        <h2 className="mb-3 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">Hi, I'm Precious</h2>
 
                        <div className="space-y-3 text-sm leading-relaxed text-slate-600">
                            <p>
                                I'm a Computer Science student and aspiring Front-End Developer passionate about
                                technology, creativity, and building digital experiences.
                            </p>
                            <p>
                                I'm currently learning and exploring HTML, CSS, JavaScript, React.js, and Tailwind CSS.
                                I enjoy turning ideas into functional and interactive websites and discovering new ways
                                to make websites more attractive, responsive, and user-friendly.
                            </p>
                            <p>
                                My goal is{' '}
                                <span className="font-medium text-sky-700">
                                    to become a skilled software developer and create digital experiences that are not
                                    only visually appealing but also
                                </span>{' '}
                                useful and meaningful.
                            </p>
                        </div>
 
                        <div className="mt-6 flex items-start gap-3">
                            <span className="mt-0.5 text-xl text-blue-600">♧</span>
                            <div>
                                <h3 className="text-sm font-semibold text-slate-800">My mindset:</h3>
                                <p className="mt-1 text-sm italic text-blue-600">Learn. Build. Experiment. Improve. Repeat. 🚀</p>
                            </div>
                        </div>
                    </div>
 
                    {/* RIGHT: fun facts */}
                    <div className="md:col-span-4">
                        <div className="rounded-xl border border-blue-50 bg-blue-50/80 p-5 shadow-sm md:p-6">
                            <h2 className="mb-5 flex items-center gap-3 text-sm font-bold text-slate-800">
                                <span className="text-lg text-blue-600">☆</span>
                                Fun Facts
                            </h2>
 
                            <div className="space-y-5">
                                {funFacts.map(([icon, fact]) => (
                                    <div key={fact} className="flex items-center gap-4 text-sm text-slate-600">
                                        <span className="w-4 shrink-0 text-center text-lg font-bold text-blue-600">{icon}</span>
                                        <span>{fact}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section> 

            {/* What I Am Learning */}
            <section className=' bg-blue-100 py-16 px-6'>
            <div className='max-w-7xl mx-auto'>
                {/* section header */}
                <div className='text-center mb-10'>
                    <h1 className='text-blue-700 text-1xl text-center font-bold tracking-wildest uppercase'>-WHAT I'M LEARNING-</h1>
                    <p className='font-bold text-3xl text-center text-slate-900 md:text-4xl mt-2'>My Skills & Technologies</p>
                </div>

                {/* skill card */}
                <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 '>
                    
                    {/* HTML & CSS */}
                    <div className='bg-white shadow-sm text-center hover:shadow-md p-7 rounded-xl'>

                    {/* HTML icon */}
                        <img className='h-16 w-16 mx-auto mb-5' src="/skill1.png" alt="HTML icon" />

                    {/* HTML texts */}
                        <h1 className='font-bold mb-5 text-xl'>HTML & CSS</h1>
                        <p className='text-gray-500 leading-relaxed text-sm'>For building the structures and style of websites.</p>
                    </div>

                    {/* Javascript */}
                    <div className='bg-white shadow-sm text-center hover:shadow-md p-7 rounded-xl'>

                    {/* Javascript icon */}
                        <img className='h-16 w-16 mx-auto mb-5' src="/skill2.png" alt="Javascript icon" />

                    {/* Javascript texts */}
                        <h1 className='font-bold mb-5 text-xl'>JAVASCRIPT</h1>
                        <p className='text-gray-500 leading-relaxed text-sm'>For adding interactivity and logic to websites.</p>
                    </div>

                    {/* React */}
                    <div className='bg-white shadow-sm text-center hover:shadow-md p-7 rounded-xl'>

                    {/* React icon */}
                        <img className='h-16 w-16 mx-auto mb-5' src="/skill3.png" alt="React icon" />

                    {/* React texts */}
                        <h1 className='font-bold mb-5 text-xl'>REACT.JS</h1>
                        <p className='text-gray-500 leading-relaxed text-sm'>For building dynamic and reusable user interfaces</p>
                    </div>
                    
                    {/* Tailwind CSS */}
                    <div className='bg-white shadow-sm text-center hover:shadow-md p-7 rounded-xl'>
                    
                    {/* Tailwind CSS icon */}
                        <img className='h-16 w-16 mx-auto mb-5' src="/skill4.png" alt="Tailwind icon" />
                    
                    {/* Tailwind CSS texts */}
                        <h1 className='font-bold mb-5 text-xl'>TAILWIND CSS</h1>
                        <p className='text-gray-500 leading-relaxed text-sm'>For fast and flexible styling</p>
                    </div>
                </div>
                </div>
            </section>

            {/* My Projects */}
            <section className='bg-white h-200 p-20'>
                <div>
                    <h1 className='text-blue-700 text-1xl text-center'>MY PROJECTS</h1>
                    <p className='font-bold text-4xl text-center text-blue-900'>Featured Technologies</p>
                </div>

                <div className='grid md:grid-cols-4 gap-5 mt-20'>
                    <div className='bg-white border h-80 w- border-gray-200 rounded-2xl shadow-md'>

                    </div>

                    <div className='bg-white border h-80 border-gray-200 rounded-2xl shadow-md'>

                    </div>

                    <div className='bg-white border h-80 border-gray-200 rounded-2xl shadow-md'>

                    </div>

                    <div className='bg-white border h-80 border-gray-200 rounded-2xl shadow-md'>

                    </div>
                </div>
            </section>

        </div>
    );
}

export default App;

