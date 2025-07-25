"use client";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { SkillsChart } from "@/components/skills-chart";

export function SkillsSection() {
  const technicalSkills = [
    { name: "CAD/CAM Software", proficiency: 95 },
    { name: "Engineering Simulation", proficiency: 90 },
    { name: "CNC Machining & Programming", proficiency: 90 },
    { name: "3D Modeling & Design", proficiency: 95 },
    { name: "FEA & CFD Analysis", proficiency: 85 },
    { name: "Mechanical Systems Design", proficiency: 90 },
    { name: "Industrial Automation", proficiency: 85 },
    { name: "Material Testing & Analysis", proficiency: 80 },
    { name: "Project Management", proficiency: 85 },
    { name: "Manufacturing Processes", proficiency: 90 },
  ];

  const softwareSkills = [
    {
      category: "Leadership & Management",
      skills: [
        "Primavera P6",
        "Microsoft Project",
        "Microsoft Word",
        "Excel",
        "Access",
        "Lean Six Sigma"
      ]
    },
    {
      category: "Robotics, AI, & Smart Manufacturing",
      skills: [
        "Siemens PLC",
        "Allen Bradley PLC",
        "C++",
        "MATLAB",
        "Arduino",
        "LabVIEW",
        "Kongsberg Simulation Trainer",
        "Python",
        "ROS (Robot Operating System)",
        "IoT Platforms"
      ]
    },
    {
      category: "Mechanical Engineering & Design",
      skills: [
        "SolidWorks",
        "Siemens NX",
        "Autodesk Inventor",
        "AutoCAD",
        "Autodesk 360",
        "ANSYS",
        "SketchUp",
        "3ds Max",
        "SIMUMERIK",
        "COMSOL",
        "Creo Parametric",
        "Additive Manufacturing (3D Printing)"
      ]
    },
    {
      category: "Production & Process Engineering",
      skills: [
        "Siemens PLC",
        "Allen Bradley PLC",
        "MATLAB",
        "Statistical Process Control (SPC)",
        "SAP"
      ]
    },
    {
      category: "Simulation & Analysis",
      skills: [
        "ANSYS",
        "MATLAB",
        "Kongsberg Simulation Trainer",
        "COMSOL Multiphysics",
        "CFD (Computational Fluid Dynamics)",
        "Simulink",
        "Autocast",
        "PROCAST"
      ]
    },
    {
      category: "AI/ML",
      skills: [
        "Machine Learning Specialization (in progress)",
        "TensorFlow (in progress)",
        "Neural Networks and Deep Learning (in progress)",
        "Reinforcement Learning (in progress)"
      ]
    },
    {
      category: "Software & Programming",
      skills: [
        "C++",
        "MATLAB",
        "LabVIEW",
        "Schemaplic",
        "Proteus",
        "Embedded Systems Programming"
      ]
    },
    {
      category: "Specialized Engineering Domains",
      skills: [
        "Autodesk Revit",
        "Energy Plus",
        "PDMS",
        "AutoCAD Plant 3D"
      ]
    }
  ];

  const professionalSkills = [
    { name: "Project Leadership", proficiency: 85 },
    { name: "Technical Documentation", proficiency: 90 },
    { name: "Research Methodology", proficiency: 95 },
    { name: "Problem Solving", proficiency: 90 },
    { name: "Team Coordination", proficiency: 85 },
    { name: "Technical Teaching", proficiency: 95 },
    { name: "Client Consultation", proficiency: 80 },
    { name: "Engineering Analysis", proficiency: 90 },
    { name: "Innovation & Design Thinking", proficiency: 85 },
    { name: "Technical Troubleshooting", proficiency: 95 },
  ];

  return (
    <section className="py-16" id="skills">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Skills & Expertise</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Technical proficiencies and professional capabilities
            </p>
          </div>
        </div>
        
        <div className="mt-12">
          <Tabs defaultValue="technical">
            <div className="flex justify-center mb-8">
              <TabsList className="flex flex-wrap gap-2 sm:gap-0 w-full sm:w-auto">
                <TabsTrigger value="technical" className="flex-1 sm:flex-initial px-3 md:px-4 py-2">
                  <span className="hidden sm:inline">Technical Skills</span>
                  <span className="sm:hidden">Technical</span>
                </TabsTrigger>
                <TabsTrigger value="software" className="flex-1 sm:flex-initial px-3 md:px-4 py-2">
                  <span className="hidden sm:inline">Software Proficiency</span>
                  <span className="sm:hidden">Software</span>
                </TabsTrigger>
                <TabsTrigger value="professional" className="flex-1 sm:flex-initial px-3 md:px-4 py-2">
                  <span className="hidden sm:inline">Professional Skills</span>
                  <span className="sm:hidden">Professional</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value="technical">
              <div className="grid gap-6 md:grid-cols-2">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <Card>
                  <CardContent className="p-4">
                    <SkillsChart />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="software">
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {softwareSkills.map((category) => (
                  <Card key={category.category}>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold mb-4">{category.category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge key={skill} variant="outline">{skill}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="professional">
              <div className="grid gap-6 md:grid-cols-2">
                {professionalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                      <span>{skill.name}</span>
                      <span>{skill.proficiency}%</span>
                    </div>
                    <Progress value={skill.proficiency} className="h-2" />
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Languages</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>English</span>
                    <span>Excellent</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>French</span>
                    <span>Very Good, Fluent</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <span>Chinese</span>
                    <span>In Progress</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-4">Core Competencies</h3>
              <div className="flex flex-wrap gap-2">
                <Badge>Manufacturing</Badge>
                <Badge>Fabrication</Badge>
                <Badge>Engineering Design</Badge>
                <Badge>Research Tools</Badge>
                <Badge>Materials</Badge>
                <Badge>Energy Systems</Badge>
                <Badge>Structural Design</Badge>
              <Badge>Product Design</Badge>
              <Badge>Project Management</Badge>
              <Badge>Maintenance</Badge>
              <Badge>Reliability Engineering</Badge>
              <Badge>Industrial Automation</Badge>
              <Badge>optimization AI-based mechanical design processes</Badge>
              <Badge>Integrating ML techniques for automated systems applications</Badge>
              <Badge>Developing solutions for energy efficiency and biomedical challenges using AI</Badge>
              <Badge>Evaluation and application of new AI methods to solve <br />mechanical engineering problems.</Badge>
              <Badge>Digital Manufacturing</Badge>
              <Badge>Design Technology Specialization</Badge>
              <Badge>AI for Mechanical Engineering Specializations</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

} 