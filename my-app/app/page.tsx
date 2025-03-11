import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[30px] row-start-2 items-center sm:items-start">
        
        

        <h3> Hey there, I am Fesobi Oreofe, a Data Analyst, web developer and Graphic Designer, 
        get to know about me more by clicking the respective button or head over straight to my  Projects page to see what i have worked on.</h3>

        <section id="Skill_Page">
            <h4>Technical Skills</h4>
     <div >
            <div>
            <h6>Html/css</h6>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
                <path d="M 2.6289062 2 L 4.7109375 20 L 11.998047 22 L 19.287109 20 L 21.369141 2 L 2.6289062 2 z M 4.8710938 4 L 19.126953 4 L 17.457031 18.429688 L 12 19.925781 L 6.5429688 18.429688 L 4.8710938 4 z M 7.0078125 6 L 7.5449219 12.337891 L 14.480469 12.337891 L 14.244141 15.091797 L 12.023438 15.591797 L 9.7617188 15.09375 L 9.6757812 14.074219 L 7.6933594 14.074219 L 7.9140625 16.697266 L 11.960938 17.986328 L 12.001953 18 L 16.09375 16.697266 L 16.640625 10.261719 L 9.3515625 10.261719 L 9.1699219 8.0820312 L 16.824219 8.0820312 L 17.003906 6 L 7.0078125 6 z"></path>
                </svg>
            </div>	
            <div>
                <h6>Python</h6>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path d="M 24 3 C 20.271429 3 18.240267 3.9470561 16.792969 4.5742188 L 16.791016 4.5742188 C 15.488673 5.1421213 14.704771 6.3187748 14.365234 7.4296875 C 14.025697 8.5406002 14 9.6506515 14 10.640625 L 14 14 L 10.640625 14 C 9.6506515 14 8.5406002 14.0257 7.4296875 14.365234 C 6.3187748 14.704771 5.1421212 15.488626 4.5742188 16.791016 L 4.5742188 16.792969 C 3.947056 18.24022 3 20.271429 3 24 C 3 27.728571 3.9470561 29.759733 4.5742188 31.207031 L 4.5742188 31.208984 C 5.1421212 32.511374 6.3187748 33.295229 7.4296875 33.634766 C 8.5406002 33.974256 9.6506515 34 10.640625 34 L 14 34 L 14 37.359375 C 14 38.349349 14.0257 39.459401 14.365234 40.570312 C 14.704771 41.681225 15.488626 42.857879 16.791016 43.425781 L 16.792969 43.425781 C 18.24022 44.052944 20.271429 45 24 45 C 27.728571 45 29.759733 44.052944 31.207031 43.425781 L 31.208984 43.425781 C 32.511374 42.857879 33.295229 41.681225 33.634766 40.570312 C 33.974256 39.459401 34 38.349349 34 37.359375 L 34 34 L 37.359375 34 C 38.349349 34 39.459401 33.9743 40.570312 33.634766 C 41.681225 33.295229 42.857879 32.511374 43.425781 31.208984 L 43.425781 31.207031 C 44.052944 29.75978 45 27.728571 45 24 C 45 20.271429 44.052944 18.240267 43.425781 16.792969 L 43.425781 16.791016 C 42.857879 15.488673 41.681225 14.704771 40.570312 14.365234 C 39.459401 14.025697 38.349349 14 37.359375 14 L 34 14 L 34 10.640625 C 34 9.6506515 33.974303 8.5406002 33.634766 7.4296875 C 33.295229 6.3187748 32.511374 5.1421213 31.208984 4.5742188 L 31.207031 4.5742188 C 29.75978 3.9470561 27.728571 3 24 3 z M 24 6 C 27.268623 6 28.459017 6.6519922 30.009766 7.3242188 C 30.427376 7.5063161 30.590162 7.7325533 30.765625 8.3066406 C 30.941088 8.8807279 31 9.7405985 31 10.640625 L 31 15.253906 A 1.50015 1.50015 0 0 0 31 15.740234 L 31 19 C 31 20.950062 29.450062 22.5 27.5 22.5 L 20.5 22.5 C 16.928062 22.5 14 25.428062 14 29 L 14 31 L 10.640625 31 C 9.7405985 31 8.8807279 30.941088 8.3066406 30.765625 C 7.7325533 30.590162 7.5063162 30.427376 7.3242188 30.009766 C 6.6519921 28.459017 6 27.268623 6 24 C 6 20.731377 6.6519921 19.540983 7.3242188 17.990234 C 7.5063161 17.572624 7.7325533 17.409838 8.3066406 17.234375 C 8.8807279 17.058912 9.7405985 17 10.640625 17 L 23.5 17 A 1.50015 1.50015 0 1 0 23.5 14 L 17 14 L 17 10.640625 C 17 9.7405985 17.058912 8.8807279 17.234375 8.3066406 C 17.409838 7.7325533 17.572624 7.5063162 17.990234 7.3242188 C 19.540983 6.6519921 20.731377 6 24 6 z M 20.5 9 A 1.5 1.5 0 0 0 20.5 12 A 1.5 1.5 0 0 0 20.5 9 z M 34 17 L 37.359375 17 C 38.259401 17 39.119272 17.05891 39.693359 17.234375 C 40.267447 17.409838 40.493684 17.572624 40.675781 17.990234 C 41.348008 19.540983 42 20.731377 42 24 C 42 27.268623 41.348008 28.459017 40.675781 30.009766 C 40.493684 30.427376 40.267447 30.590162 39.693359 30.765625 C 39.119272 30.941088 38.259401 31 37.359375 31 L 24.5 31 A 1.50015 1.50015 0 1 0 24.5 34 L 31 34 L 31 37.359375 C 31 38.259401 30.94109 39.119272 30.765625 39.693359 C 30.590162 40.267447 30.427376 40.493684 30.009766 40.675781 C 28.459017 41.348008 27.268623 42 24 42 C 20.731377 42 19.540983 41.348008 17.990234 40.675781 C 17.572624 40.493684 17.409838 40.267447 17.234375 39.693359 C 17.058912 39.119272 17 38.259401 17 37.359375 L 17 29 C 17 27.049938 18.549938 25.5 20.5 25.5 L 27.5 25.5 C 31.071938 25.5 34 22.571938 34 19 L 34 17 z M 27.5 36 A 1.5 1.5 0 0 0 27.5 39 A 1.5 1.5 0 0 0 27.5 36 z"></path>
                </svg>
            </div>	
            <div >
                <h6>R</h6>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 32 32">
                <path d="M 16 5 C 8.268 5 2 9.253 2 14.5 C 2 19.285043 7.2177912 23.232664 14 23.892578 L 14 26 L 18 26 L 18 23.892578 C 19.32391 23.763761 20.586459 23.512193 21.763672 23.150391 L 23.330078 26 L 28 26 L 25.300781 21.585938 C 28.178143 19.846052 30 17.321182 30 14.5 C 30 9.253 23.732 5 16 5 z M 17.5 8 C 23.299 8 28 11.134 28 15 C 28 17.130126 26.568065 19.034482 24.316406 20.318359 C 24.089282 20.130562 23.839097 19.975923 23.566406 19.859375 C 25.534017 19.378452 27 17.615626 27 15.5 C 27 13.015 24.985 11 22.5 11 L 14 11 L 14 21.59375 C 9.9241171 20.631974 7 18.046756 7 15 C 7 11.134 11.701 8 17.5 8 z M 18 14 L 21.5 14 C 22.328 14 23 14.672 23 15.5 C 23 16.328 22.328 17 21.5 17 L 18 17 L 18 14 z M 18 20 L 19.128906 20 C 19.686906 20 20.198797 20.303969 20.466797 20.792969 L 20.917969 21.613281 C 19.996409 21.82496 19.017517 21.950414 18 21.982422 L 18 20 z"></path>
                </svg>
            </div>
            <div>
                <h6>SQL</h6>
            <Image 
            src="VIS/sql-file-format-svgrepo-com.svg"
            alt="skill"
            height={200}
            width={160}
            />
            </div>
    </div>  
</section>


        <Image
        className=""
        src="/VIS/Personal Collage.png"
        alt="Collage"
        width={1300}
        height={1000}
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
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
      </footer>
    </div>
  );
}
