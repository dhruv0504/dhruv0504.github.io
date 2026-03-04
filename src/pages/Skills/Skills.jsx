import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Database, Cloud, Cpu } from "lucide-react";
import { SiPhp, SiExpress } from "react-icons/si";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaAws,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJavascript,
  SiSpringboot,
  SiFastapi,
  SiApachekafka,
  SiTensorflow,
  SiPytorch,
  SiHuggingface,
  SiRedis,
  SiGooglecloud,
  SiTerraform,
  SiKubernetes,
} from "react-icons/si";

import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-gray-800/50 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105"
          >
            {skill.icon}
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-4 h-4 text-[#3178C6]" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" /> },
      ],
    },
{
  icon: Database,
  title: "Backend & APIs",
  color: "text-green-400",
  skills: [
    { name: "Java", icon: <Code2 className="w-4 h-4 text-orange-400" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="w-4 h-4 text-[#6DB33F]" /> },
    { name: "Node.js", icon: <FaNodeJs className="w-4 h-4 text-[#339933]" /> },
    { name: "Express.js", icon: <SiExpress className="w-4 h-4 text-white" /> },
    { name: "FastAPI", icon: <SiFastapi className="w-4 h-4 text-[#009688]" /> },
    { name: "PHP", icon: <SiPhp className="w-4 h-4 text-[#777BB4]" /> },
    { name: "REST APIs", icon: <Code2 className="w-4 h-4 text-blue-400" /> },
    { name: "GraphQL", icon: <SiGraphql className="w-4 h-4 text-[#E10098]" /> },
  ],
},
    {
      icon: Cpu,
      title: "Machine Learning & AI",
      color: "text-purple-400",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "TensorFlow", icon: <SiTensorflow className="w-4 h-4 text-[#FF6F00]" /> },
        { name: "PyTorch", icon: <SiPytorch className="w-4 h-4 text-[#EE4C2C]" /> },
        { name: "HuggingFace", icon: <SiHuggingface className="w-4 h-4 text-yellow-400" /> },
        { name: "LLMs & RAG", icon: <Cpu className="w-4 h-4 text-pink-400" /> },
        { name: "Prompt Engineering", icon: <Code2 className="w-4 h-4 text-indigo-400" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Distributed Systems",
      color: "text-orange-400",
      skills: [
        { name: "Apache Kafka", icon: <SiApachekafka className="w-4 h-4 text-white" /> },
        { name: "Redis", icon: <SiRedis className="w-4 h-4 text-[#DC382D]" /> },
        { name: "Saga Pattern", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "OpenTelemetry", icon: <FcWorkflow className="w-4 h-4" /> },
      ],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      color: "text-yellow-400",
      skills: [
        { name: "AWS", icon: <FaAws className="w-4 h-4 text-[#FF9900]" /> },
        { name: "Google Cloud", icon: <SiGooglecloud className="w-4 h-4 text-[#4285F4]" /> },
        { name: "Docker", icon: <FaDocker className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Kubernetes", icon: <SiKubernetes className="w-4 h-4 text-[#326CE5]" /> },
        { name: "Terraform", icon: <SiTerraform className="w-4 h-4 text-[#623CE4]" /> },
        { name: "CI/CD", icon: <FcWorkflow className="w-4 h-4" /> },
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        { name: "Linux", icon: <FaLinux className="w-4 h-4 text-[#FCC624]" /> },
      ],
    },
    {
      icon: Database,
      title: "Databases & Data",
      color: "text-pink-400",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="w-4 h-4 text-[#336791]" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-4 h-4 text-[#47A248]" /> },
        { name: "MySQL", icon: <Database className="w-4 h-4 text-blue-400" /> },
        { name: "Pandas", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
        { name: "NumPy", icon: <FaPython className="w-4 h-4 text-[#4D77CF]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default SkillsSection;