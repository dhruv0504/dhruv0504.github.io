import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, ML/AI Engineer

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
    Hello! I’m Dhruvkumar Tilva, a Master’s graduate in Computer Science from Arizona State University specializing in Software Engineering, Machine Learning, and AI systems. My academic and professional experience centers on building scalable, production-ready software that bridges intelligent models with robust system architecture.
  </p>
  <p className="text-white">
    I build end-to-end full-stack applications and cloud-native distributed systems using Java, Python, and TypeScript — developing backend microservices, real-time streaming pipelines, and responsive front-end interfaces with modern frameworks. I work extensively with containerization, orchestration, CI/CD automation, and cloud platforms to ensure reliability, observability, security, and performance at scale.
  </p>
  <p className="text-white">
    My work includes NLP, large language models (LLMs), and prompt engineering, where I design context-aware AI systems, retrieval-augmented generation (RAG) workflows, and optimized inference pipelines. I focus on deploying production-grade ML solutions with model monitoring, fairness evaluation, drift detection, and scalable infrastructure that supports high-throughput, low-latency decision systems.
  </p>
  <p className="text-white">
    I’m particularly driven by solving complex engineering challenges at the intersection of AI and distributed systems — designing fault-tolerant architectures, optimizing resource utilization, and ensuring that intelligent systems remain transparent, maintainable, and dependable in real-world environments.
  </p>
</div>




          </div>
        </div>
      </section>
    </>
  );
}
