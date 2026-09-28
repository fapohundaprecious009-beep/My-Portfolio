import aboutImg from './aboutus.jpeg';

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
                    <p className="text-blue-300 text-lg sm:text-xl md:text-2xl font-semibold mb-4">LEARN . REACT . WITH. ME</p>

                    <h1 className="text-#111827 text-5xl md:text-6xl text-blue-700 font-bold mb-10">Learn Technology <br /> Build your future</h1>

                    <p className="text-black mb-15 leading-1 text-3x1">This is my first journey in REACT PROJECT. </p>

                    <div className="flex justify-center gap-5">
                        <button className="bg-blue-700 text-white border-none px-10 py-4 rounded-lg cursor-pointer text-4x1">Learn with me</button>

                        <button className="bg-white text-blue-700 border-2 border-white px-10 py-4 rounded-lg cursor-pointer text-4x1">Contact Me</button>
                    </div>
                </div>
            </section>


            {/* {About me section} */}
            <section className=" h-100 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-10 align-center m-25 justify-center">
                <div>
                    <div>
                    <img src={aboutImg} alt="About Precious" className="w-50 h-50 rounded-2xl  object-cover" />
                    </div>

                    <div>
                        <p className='font-bold text-1xl mt-5 mb-4'>Currently Working On:</p>
                    </div>

                    <div>
                        <p className='bg-blue-100 p-2 rounded-2xl mb-3 w-50'>React Js</p>
                        <p className='bg-blue-100 p-2 rounded-2xl mb-3 w-50'>Tailwind CSS</p>
                        <p className='bg-blue-100 p-2 rounded-2xl mb-3 w-50'>Front-End Development</p>
                    </div>
                </div>

                <div>
                    <h1 className='text-blue-700 text-1xl'>ABOUT ME</h1>
                    <p className='font-bold text-4xl dark:text-blue-900'>Hi, I'm Precious</p>
                    <p className=' mt-10 text-justify text-sm'>
                        I'm a Computer Science student and aspiring Front-End Developer passionate about 
                        technology, creativity, and building digital experiences.<br></br><br />

                        I'm currently learning and exploring HTML, CSS, JavaScript, React.js, and Tailwind CSS. 
                        I enjoy turning ideas into functional and interactive websites and discovering new ways 
                        to make websites more attractive, responsive, and user-friendly.<br></br><br />

                        My goal is to become a skilled software developer and create digital experiences 
                        that are not only visually appealing but also useful and meaningful.<br></br><br />
                    </p>
                    <p className='font-bold'>

                        My mindset:<br></br>
                     <span className='text-blue-800'>Learn. Build. Experiment. Improve. Repeat.</span>
`                   </p>
                </div>

                <div className='bg-blue-100 h-85 w-80 mt-10  rounded-3xl'>
                    <p className='font-bold px-6 pt-10' >⭐ Fun Facts</p>
                    <p className=' text-gray-500 px-6 pt-6'>
                        💻 Computer Science Student<br></br><br />
                        🖥️ Front-End Development<br></br><br />
                        ⚛️ Currently Learning React<br></br><br />
                        🎨 Exploring UI Design<br></br><br />
                        🛠️ Always Building Something
                    </p>
                </div>
            </section>

            {/* What I Am Learning */}
            <section className=' bg-blue-100 h-110 p-20'>
                <div>
                    <h1 className='text-blue-700 text-1xl text-center'>WHAT I'M LEARNING</h1>
                    <p className='font-bold text-4xl text-center text-blue-900'>My Skills & Technologies</p>
                </div>

                <div className='grid md:grid-cols-4 p-10 gap-5'>
                    
                    
                    <div className='bg-white h-40 w-60 border-gray-200 shadow-md text-center py-7 px-5 rounded-2xl'>
                        <h1 className='font-bold mb-3 text-1xl'>HTML & CSS</h1>
                        <p className='text-gray-800'>For building the structures and style of websites.</p>
                    </div>

                    <div className='bg-white h-40 w-60 border-gray-200 shadow-md text-center py-7 px-5 rounded-2xl'>
                        <h1 className='font-bold mb-3 text-1xl'>JAVASCRIPT</h1>
                        <p className='text-gray-800'>For adding interactivity and logic to websites.</p>
                    </div>

                    <div className='bg-white h-40 w-60 border-gray-200 shadow-md text-center py-7 px-5 rounded-2xl'>
                        <h1 className='font-bold mb-3 text-1xl'>REACT.JS</h1>
                        <p className='text-gray-800'>For building dynamic and reusable user interfaces</p>
                    </div>

                    <div className='bg-white h-40 w-60 border-gray-200 shadow-md text-center py-7 px-5 rounded-2xl'>
                        <h1 className='font-bold mb-3 text-1xl'>TAILWIND CSS</h1>
                        <p className='text-gray-800'>For fast and flexible styling</p>
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

