import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Analyst, SysArch
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I’m Dhruvkumar Tilva, a graduate student in Computer Science at Arizona State University. As a Software Development Engineer and Data Analyst, I build scalable, cloud‑native microservices and distributed systems using Java, Python, and C++.
              </p>
              <p className="text-white">
                I’ve developed RESTful and GraphQL APIs with Spring Boot and Node.js, created responsive front ends with React.js, and managed data backends with MySQL, PostgreSQL, and MongoDB. I also build ETL pipelines and dashboards using SQL, Pandas, and Power BI, and I containerize applications with Docker and orchestrate them on Kubernetes.
              </p>
              <p className="text-white">
                I excel in object‑oriented design, data structures, and system design, working in Agile teams to solve complex problems. With CI/CD pipelines, monitoring, performance tuning, and data visualization experience, I deliver high‑quality code and actionable insights.
              </p>
            </div>




          </div>
        </div>
      </section>
    </>
  );
}
