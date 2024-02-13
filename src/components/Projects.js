import Carousel from "./projects/Carousel";

function ProjectPage() {
    const projects = [
        {image: '/assets/project-images/npm-package.png', title: 'get react template - NPM package', desc: 'A powerful tool to create and setup prebuilt react templates for particular use cases', githubLink: "https://github.com/tushargarg0987/get-react-template", url: "https://www.npmjs.com/package/get-react-template",stack: ["Nodejs", "JavaScript", "Yargs", "Child Processes", "Inquirer", "Axios", "Git"]},
        {image: '/assets/project-images/key-vault.png', title: 'KeyVault - Password Manager', desc: 'A secure and convenient Desktop App designed to help you manage your passwords and keep your sensitive information safe', githubLink: "https://github.com/tushargarg0987/keyVault", url: "", stack: ["React", "Electron", "Crypto-js", "IndexedDB", "Local Storage"]},
        {image: '/assets/project-images/urhome.png', title: 'urHome - Chrome Extenstion', desc: 'Chrome extension to boost productivity with an interesting home page that organises bookmarks, motivation, weather and much more.', githubLink: "https://github.com/tushargarg0987/urHome--Chrome_Extenstion", url: "https://chromewebstore.google.com/detail/urhome-productive-workspa/nlplbpekjjbgdggafhnodmpfhfhdflij", stack: ["JavaScript", "Chrome API", "Chrome Dev Tools", "GeoLocation", "Open-Meteo", "CSS", "HTML"]},
    ];
    return (
        <section className='sc-page bg-[#1A232C] py-10' id="projects-div">
            <h1 className="text-white text-left text-3xl">Projects</h1>
            <hr className='w-16 border-t-green-400 border-t-4 my-2 rounded-sm' />
            <div className="container mx-auto h-full">
                <Carousel projects={projects} />
            </div>

        </section>
    )
}

export default ProjectPage