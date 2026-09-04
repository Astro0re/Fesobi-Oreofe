//import head_sec from "./header";
//import info_sec from "./info";
//import exp_sec from "./exp";
//import projects_sec from "./projects";


// href={head_sec()}

function nav_sec(){
    return(
        <>  
            <div>
                <p><a>Home</a></p>
                <p>About</p>
                <p>Experience</p>
                <p>Projects</p>
            </div>
            <div>
                <img src="Portfolio\Portfolio_react\public\Icons\67-gmail.svg"><a href="fesobioreofe@gmail.com"></a></img>
                <p>Email</p>
                <img src="Portfolio\Portfolio_react\public\Icons\11-linkedin.svg"><a href="https://www.linkedin.com/in/oreofeoluwa-fesobi-82382930b/"></a></img>
                <p>Linkedin</p>
                <img src="Portfolio\Portfolio_react\public\Icons\41-github.svg"><a href="https://github.com/Astro0re"></a></img>
                <p>Github</p>
            </div>
            <div></div>
        </>
    )
};

export default nav_sec;