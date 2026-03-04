import IconCloud from "./ui/icon-cloud";

const slugs = [
  // Languages
  "java",
  "python",
  "typescript",
  "javascript",
  "php",

  // Frontend
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "tailwindcss",

  // Backend
  "nodedotjs",
  "express",
  "springboot",
  "fastapi",
  "graphql",

  // ML & AI
  "tensorflow",
  "pytorch",
  "huggingface",
  "scikitlearn",

  // Databases
  "postgresql",
  "mongodb",
  "mysql",
  "redis",

  // Distributed Systems
  "apachekafka",

  // Cloud & DevOps
  "amazonaws",
  "googlecloud",
  "docker",
  "kubernetes",
  "terraform",
  "nginx",

  // Tooling
  "git",
  "github",
  "linux",
  "jira",
  "visualstudiocode",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
