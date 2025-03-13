import Image from "next/image";

export default function Home() {
  return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
      <main className="flex flex-col gap-[30px] row-start-2 items-center sm:items-start">
        
        <Image
        src="/Personal Collage.png"
        alt="Collage"
        width={1000}
        height={1300}
        />
        

        <h3 className="text-center"> Hey there, I am Fesobi Oreofe, a Data Analyst, web developer and Graphic Designer, 
        get to know about me more by clicking the respective button or head over straight to my  Projects page to see what i have worked on.</h3>

        <section>
            <h4>Technical Skills</h4>
            <div className=" flex flex-direction row gap-[5px]">
            <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
            <h6>Html/css</h6>
            </a>
          	
            <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
              <h6>Python</h6>
            </a>
                
            <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
              <h6>R</h6>
              </a>           

            <a className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
              <h6>SQL</h6>
              </a> 
            
    </div>  
</section>

<section>
	<h4>Certifications</h4>
		<div className="gap-[50px]">
			<div>
      
      <Image
            aria-hidden
            src="/icons8-ibm.svg"
            alt="Window icon"
            width={80}
            height={80}
          />
		

			<h5>Certification In Data Fundamentals from IBM SkillsBuild</h5>
			<a href="https://www.credly.com/badges/549ae9c7-fcf4-4d67-8df0-76048c525c9e/public_url">View Here.</a>
			<p></p>
			</div>

			<div>
        <Image 
        src="/icons8-kaggle-32.png"
        alt="Kaggle"
        width={80}
        height={80}
        />
			
			<h5>Certification in Introduction to Programming from Kaggle Learn</h5>
			<a href="Cirtifications Display.html">View Here.</a>
			<p></p>
			</div>

			<div>
			<Image 
        src="/icons8-kaggle-32.png"
        alt="Kaggle"
        width={80}
        height={80}
        />
			<h5>Certification in Python from Kaggle Learn</h5>
			<a href="Cirtifications Display.html">View Here.</a>
			<p></p>
			</div>

			<div>
      <Image 
        src="/icons8-kaggle-32.png"
        alt="Kaggle"
        width={80}
        height={80}
        />
				<h5>Certification in SQL from Kaggle Learn</h5>
				<a href="Cirtifications Display.html">View Here.</a>
				<p></p>
				</div>	

			<div>
			<Image 
        src="/logo-black.svg"
        alt="Kaggle"
        width={80}
        height={80}
        />
			<h5>Certification in Ai Career Essentials from ALX</h5>
			<a href="Cirtifications Display.html">View Here.</a>
			<p></p>
			</div>

	</div>
</section>

<section id="Works" >
    <h4>Projects</h4>
        <div> 

                <div>
                    <h6>Data Analysis</h6>
                <Image
                
                src="/Student Thesis.jpg"
                alt="Window icon"
            width={600}
            height={600}/> 
                </div>
                
                <div>
                    <h6>Graphic Design</h6>
				<Image
        src="/Asset 1-100.jpg"
        alt="Window icon"
            width={600}
            height={600}/> 
            
                </div>

			        </div>

         
			<h5><a href="Projects.html">More...</a></h5>
			
</section>

        
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>

        <a>
          
        </a>

      </footer>
    </div>
  );
}
