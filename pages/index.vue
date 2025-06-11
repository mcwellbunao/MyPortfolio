<template>
    <main class="bg-slate-900 text-white min-h-screen px-8 py-12 font-sans">

        <!-- Hero Section -->
        <section
            class="flex flex-col md:flex-row items-center justify-center min-h-screen mb-20 px-6 text-center md:text-left">
            <div class="flex-1 mb-8 md:mb-0 animate-fade-in">
                <h2 class="text-5xl font-extrabold mb-4">
                    I’m <span class="text-teal-400">Mc Well Bunao</span>
                </h2>
                <h3 class="text-2xl mb-6">Web Developer | Full-Stack Developer | Illustrator</h3>
                <div class="flex flex-row gap-3">
                    <a href="#about" @click.prevent="scrollaboutme"
                        class="inline-block border border-teal-400 text-teal-400 px-6 py-2 rounded hover:bg-teal-400 hover:text-slate-900 transition">
                        About Me
                    </a>
                    <a href="#projects" @click.prevent="scrollproject"
                        class="inline-block border border-teal-400 text-teal-400 px-6 py-2 rounded hover:bg-teal-400 hover:text-slate-900 transition">
                        Projects
                    </a>
                    <a href="#illustrations" @click.prevent="scrollillustrations"
                        class="inline-block border border-teal-400 text-teal-400 px-6 py-2 rounded hover:bg-teal-400 hover:text-slate-900 transition">
                        Illustrations
                    </a>
                </div>

            </div>
            <div class="flex-1 flex justify-center">
                <img src="" alt="Mc Well Bunao" class="rounded-xl w-64 h-64 object-cover border-4 border-teal-400" />
            </div>
        </section>

        <!-- About Me -->
        <section id="about" class="mb-20 scroll-mt-24">
            <h2 class="text-3xl font-bold mb-8 text-center">About Me</h2>
            <div class="flex flex-col items-center gap-12">
                <!-- Developer Block -->
                <div class="flex flex-col sm:flex-row items-center max-w-4xl w-full px-4 text-center sm:text-left">
                    <div class="flex-shrink-0 m-5">
                        <div class="h-36 w-36 rounded-full overflow-hidden border-2 border-slate-500">
                            <img src="/MyPortfolio/userdefault.png" alt="Profile picture"
                                class="h-full w-full object-cover">
                        </div>
                    </div>
                    <p class="text-lg text-slate-300 leading-relaxed">
                        Fullstack Developer with 2 years of experience building scalable web applications using Vue.js,
                        Nuxt.js, ASP.NET Core, and SQL databases. Proven track record in designing RESTful APIs,
                        optimizing
                        database queries, and collaborating with cross-functional teams to deliver efficient solutions.
                        Passionate about clean code, user experience, and continuous learning.
                    </p>
                </div>
                <!-- Illustrator Block -->
                <div class="flex flex-col sm:flex-row items-center max-w-4xl w-full px-4 text-center sm:text-left">
                    <div class="flex-shrink-0 m-5">
                        <div class="h-36 w-36 rounded-full overflow-hidden border-2 border-slate-500">
                            <img src="/MyPortfolio/emushiilogo.jpg" alt="Illustrator icon"
                                class="h-full w-full object-cover">
                        </div>
                    </div>
                    <p class="text-lg text-slate-300 leading-relaxed">
                        Illustrator driven by a love for visual storytelling and creative exploration. I create digital
                        artwork across a range of styles, always learning and refining my craft. Illustration is a
                        joyful outlet where I bring ideas to life through color, form, and imagination.
                    </p>
                </div>
            </div>
        </section>

        <!-- Projects -->
        <section id="projects" class="mb-20 scroll-mt-24">
            <h2 class="text-3xl font-bold mb-8">Projects</h2>
            <div class="flex flex-col md:flex-row">
                <div class="relative grid transition-all duration-500 ease-in-out overflow-hidden" :class="{
                    'grid-cols-1 sm:grid-cols-2 gap-6 w-full': selectedProject === 0,
                    'grid-cols-4 md:grid-cols-1 gap-1 md:gap-4 md:w-1/4': selectedProject !== 0
                }">
                    <!-- Project One -->
                    <div @click="selectedProject = selectedProject === 1 ? 0 : 1"
                        class="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition cursor-pointer transform transition-transform duration-500"
                        :class="{
                            'md:translate-x-0 md:opacity-100 md:scale-100 ': selectedProject === 0 || selectedProject === 1,
                            'md:translate-x-10 md:opacity-50 md:scale-95': selectedProject !== 0 && selectedProject !== 1
                        }">
                        Gatekeeper
                    </div>

                    <!-- Project Two -->
                    <div @click="selectedProject = selectedProject === 2 ? 0 : 2"
                        class="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition cursor-pointer transform transition-transform duration-500"
                        :class="{
                            'md:translate-x-0 md:opacity-100 md:scale-100': selectedProject === 0 || selectedProject === 2,
                            'md:translate-x-10 md:opacity-50 md:scale-95': selectedProject !== 0 && selectedProject !== 2
                        }">
                        VPA
                    </div>

                    <!-- Project Three -->
                    <div @click="selectedProject = selectedProject === 3 ? 0 : 3"
                        class="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition cursor-pointer transform transition-transform duration-500"
                        :class="{
                            'md:translate-x-0 md:opacity-100 md:scale-100': selectedProject === 0 || selectedProject === 3,
                            'md:translate-x-10 md:opacity-50 md:scale-95': selectedProject !== 0 && selectedProject !== 3
                        }">
                        SOA
                    </div>

                    <!-- Project Four -->
                    <div @click="selectedProject = selectedProject === 4 ? 0 : 4"
                        class="bg-slate-800 p-6 rounded-lg text-center hover:bg-slate-700 transition cursor-pointer transform transition-transform duration-500"
                        :class="{
                            'md:translate-x-0 md:opacity-100 md:scale-100': selectedProject === 0 || selectedProject === 4,
                            'md:translate-x-10 md:opacity-50 md:scale-95': selectedProject !== 0 && selectedProject !== 4
                        }">
                        OBNS
                    </div>
                </div>
                <div class="w-full bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-lg flex flex-col gap-6 transition-all duration-500 ease-in-out transform"
                    :class="{ 'hidden opacity-0 scale-95 pointer-events-none w-full': selectedProject == 0, 'md:w-3/4 opacity-100 scale-100 pointer-events-auto': selectedProject != 0 }">
                    <!--For Gate Keeper-->
                    <div v-if="selectedProject == 1" class="flex flex-col gap-4">
                        <!-- Project Header -->
                        <div class="flex items-center gap-4">
                            <img src="/MyPortfolio/ifmslogo.png" alt="IFMS Logo"
                                class="h-16 w-auto rounded shadow-md transition-transform duration-500 hover:scale-105" />
                            <div>
                                <h3 class="text-xl font-semibold text-white">Gatekeeper Project</h3>
                                <p class="text-white/70 text-sm">Fast Logistics Corporation</p>
                            </div>
                        </div>

                        <!-- Project Description -->
                        <ul class="list-disc list-inside text-white/90 leading-relaxed space-y-2 text-base">
                            <li>
                                Designed and developed Gatekeeper, a web and mobile application for real-time monitoring
                                and management of truck transactions entering and exiting the warehouse.
                            </li>
                            <li>
                                Collaborated in a team of 2 to implement a RESTful API using Node.js, ensuring seamless
                                data integration between frontend and backend systems.
                            </li>
                            <li>
                                Handled database management and optimized Postgres queries for efficient data retrieval
                                and storage.
                            </li>
                            <li>
                                Built the web application with NuxtJS, and the mobile app using Ionic Framework with
                                Vue.js components.
                            </li>
                            <li>
                                Integrated with a scalable and robust ASP.NET API backend to support complex business
                                logic and seamless data flow.
                            </li>
                        </ul>
                        <button @click="selectedProject = 0"
                            class="self-end bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-600 transition">
                            Close
                        </button>
                    </div>
                    <!--For VPA-->
                    <div v-if="selectedProject == 2" class="flex flex-col gap-4">
                        <!-- Project Header -->
                        <div class="flex items-center gap-4">
                            <!-- Placeholder for logo -->
                            <img src="/MyPortfolio/VPANEWLOGO.png" alt="IFMS Logo"
                                class="h-16 w-auto rounded shadow-md transition-transform duration-500 hover:scale-105" />
                            <div>
                                <h3 class="text-xl font-semibold text-white">VPA – Vendor Performance Appraisal</h3>
                                <p class="text-white/70 text-sm">Fast Logistics Corporation</p>
                            </div>
                        </div>

                        <!-- Project Description -->
                        <ul class="list-disc list-inside text-white/90 leading-relaxed space-y-2 text-base">
                            <li>
                                Designed and developed VPA, a web application for managing clients and vendors, enabling
                                the creation and processing of Service Level Agreements (SLAs) between both parties.
                            </li>
                            <li>
                                Implemented automated report generation and integrated email delivery of reports to
                                streamline communication and reporting workflows.
                            </li>
                            <li>
                                Managed and optimized database queries using Microsoft SQL Server (MSSQL) for reliable
                                and efficient data handling.
                            </li>
                            <li>
                                Integrated with a scalable and robust ASP.NET API backend to support complex business
                                logic and seamless data flow.
                            </li>
                        </ul>
                        <button @click="selectedProject = 0"
                            class="self-end bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-600 transition">
                            Close
                        </button>
                    </div>
                    <!--For SOA-->
                    <div v-if="selectedProject == 3" class="flex flex-col gap-4">
                        <!-- Project Header -->
                        <div class="flex items-center gap-4">
                            <!-- Placeholder for logo -->
                            <img src="/MyPortfolio/ASOALOGOv2.png" alt="IFMS Logo"
                                class="h-16 w-auto rounded shadow-md transition-transform duration-500 hover:scale-105" />
                            <div>
                                <h3 class="text-xl font-semibold text-white">SOA – Statement of Account for Trucking
                                    Navigations</h3>
                                <p class="text-white/70 text-sm">Fast Logistics Corporation</p>
                            </div>
                        </div>

                        <!-- Project Description -->
                        <ul class="list-disc list-inside text-white/90 leading-relaxed space-y-2 text-base">
                            <li>
                                Designed and developed SOA, a web application for managing and processing incoming
                                account statements from shipping lines.
                            </li>
                            <li>
                                Implemented workflows for validation and automated routing of validated statements to
                                the finance department, improving efficiency and reducing manual errors.
                            </li>
                            <li>
                                Enabled full transaction tracking, recording each step of the process to ensure
                                transparency and auditability throughout the statement lifecycle.
                            </li>
                            <li>
                                Handled database management and optimized Postgres queries for efficient data retrieval
                                and storage.
                            </li>
                            <li>
                                Integrated with a scalable and robust ASP.NET API backend to support complex business
                                logic and seamless data flow.
                            </li>
                        </ul>
                        <button @click="selectedProject = 0"
                            class="self-end bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-600 transition">
                            Close
                        </button>
                    </div>

                    <!--For Nesting-->
                    <div v-if="selectedProject == 4" class="flex flex-col gap-4">
                        <!-- Project Header -->
                        <div class="flex items-center gap-4">
                            <!-- Placeholder for logo -->

                            <img src="/MyPortfolio/nestinglogo.png" alt="IFMS Logo"
                                class="h-16 w-auto rounded shadow-md transition-transform duration-500 hover:scale-105" />
                            <div>
                                <h3 class="text-xl font-semibold text-white">OBNS – Onboarding and Nesting System</h3>
                                <p class="text-white/70 text-sm">Fast Logistics Corporation</p>
                            </div>
                        </div>

                        <!-- Project Description -->
                        <ul class="list-disc list-inside text-white/90 leading-relaxed space-y-2 text-base">
                            <li>
                                Designed and developed OBNS, a web application for creating and managing nesting and
                                training plans for new employees.
                            </li>
                            <li>
                                Enabled HR, Department Heads, and Trainees to track training milestones and progress
                                throughout the onboarding process.
                            </li>
                            <li>
                                Streamlined onboarding workflows, enhancing visibility and accountability across
                                departments and improving the overall employee onboarding experience.
                            </li>
                            <li>
                                Integrated with a scalable and robust ASP.NET API backend to support complex business
                                logic and seamless data flow.
                            </li>
                        </ul>
                        <button @click="selectedProject = 0"
                            class="self-end bg-slate-700 text-white px-4 py-2 rounded hover:bg-slate-600 transition">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!--Illustrations-->
        <section id="about" class="mb-20 scroll-mt-24 relative">
            <h2 class="text-3xl font-bold mb-8">Illustrations</h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <!-- Illustration Card -->
                <div v-for="(illustration, index) in illustrations" :key="index"
                    class="bg-slate-800 p-4 rounded-lg text-center hover:bg-slate-700 transition cursor-pointer transform hover:scale-105 duration-300 ease-in-out"
                    @click="selectedImage = illustration.image">
                    <img :src="illustration.image" :alt="illustration.title"
                        class="w-full h-48 object-cover rounded-md mb-4" />
                    <h3 class="text-lg font-semibold">{{ illustration.title }}</h3>
                </div>
            </div>

            <!-- Modal -->
            <div v-if="selectedImage"
                class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300"
                @click.self="selectedImage = null">
                <div class="relative w-full h-full p-4 flex items-center justify-center">
                    <img :src="selectedImage" alt="Full Illustration"
                        class="rounded-lg object-contain max-w-4xl max-h-[80vh] w-auto h-auto" />
                    <!-- Close button -->
                    <button @click="selectedImage = null"
                        class="absolute top-4 right-4 text-white text-3xl font-bold hover:text-slate-300 transition">
                        &times;
                    </button>
                </div>
            </div>

        </section>

        <!-- Contact -->
        <section id="contact" class="mb-20">
            <h2 class="text-3xl font-bold mb-8">Contact</h2>
            <form class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
                <input type="text" placeholder="Name"
                    class="bg-slate-800 p-3 rounded text-white placeholder-slate-400" />
                <input type="email" placeholder="Email"
                    class="bg-slate-800 p-3 rounded text-white placeholder-slate-400" />
                <textarea placeholder="Message"
                    class="bg-slate-800 p-3 rounded text-white placeholder-slate-400 col-span-full" rows="5"></textarea>
                <button type="submit"
                    class="col-span-full bg-teal-400 text-slate-900 px-6 py-3 rounded font-bold hover:bg-teal-300 transition">
                    Send Message
                </button>
            </form>
        </section>
    </main>

    <footer class="text-center text-slate-500 py-6 text-sm">
        © 2025 Mc Well Bunao. All rights reserved.
    </footer>
</template>

<script setup>
import { ref } from 'vue';

const illustrations = [
    { title: 'Watson Amelia', image: '/MyPortfolio/MyPortfolio/ame1.png' },
    { title: "Ninomae Ina'Nis", image: '/MyPortfolio/MyPortfolio/ina1.jpeg' },
    { title: 'Suisei Hoshimachi', image: '/MyPortfolio/MyPortfolio/sui1.jpeg' },
    { title: 'Casual Ina', image: '/MyPortfolio/MyPortfolio/ina2.jpeg' },
];

const selectedImage = ref(null);

const selectedProject = ref(0);
const scrollproject = () => {
    const target = document.querySelector('#projects');
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
};

const scrollaboutme = () => {
    const target = document.querySelector('#about');
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
};


const scrollillustrations = () => {
    const target = document.querySelector('#illustrations');
    if (target) {
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }
};
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}

/* Firefox (uncomment to work in Firefox, although other properties will not work!)  */
/** {
  scrollbar-width: thin;
  scrollbar-color: #24756E #3D15EB;
}*/

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
    height: 0px;
    width: 0px;
}

*::-webkit-scrollbar-track {
    border-radius: 0px;
    background-color: #3D15EB;
    border: 1px solid #FFFFFF;
}

*::-webkit-scrollbar-track:hover {
    background-color: #B8C0C2;
}

*::-webkit-scrollbar-track:active {
    background-color: #B8C0C2;
}

*::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: #24756E;
    border: 1px solid #FFFFFF;
}

*::-webkit-scrollbar-thumb:hover {
    background-color: #4AA3A2;
}

*::-webkit-scrollbar-thumb:active {
    background-color: #368BA3;
}

@keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in {
    animation: fadeIn 0.8s ease forwards;
}

.animate-fade-in.delay-200 {
    animation-delay: 0.2s;
}
</style>