import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Bookstore",
      description: "A Java application designed for creating and handling HTTP requests. Developed using IntelliJ IDEA and integrated with Postman for testing APIs. Utilized MySQL as the database to store and manage data efficiently.",
      tags: ["Java", "MySQL", "RESTful API", "IntelliJ IDEA"],
      link: "#"
    },
    {
      id: 2,
      title: "Database Management and CMS",
      description: "Volunteering project for Christ Fellowship. Database structuring, data integration, and dynamic pages creation using Wix Data to display structured content.",
      tags: ["Wix", "Database", "CMS", "Web Development"],
      link: "#"
    },
    {
      id: 3,
      title: "Amazing Minds Therapy Website",
      description: "Professional, user-friendly website for Amazing Minds Therapy using WordPress with customized themes and plugins aligned with business branding.",
      tags: ["WordPress", "Web Design", "SEO", "Custom Themes"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title font-bold mb-12">MY WORKS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="bg-card border-neutral-800 hover:border-neutral-700 transition-all"
            >
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.slice(0, 2).map((tag, i) => (
                    <span
                      key={`${project.id}-tag-${i}`}
                      className="text-xs px-2 py-1 rounded-full bg-neutral-800 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={project.link}>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-neutral-800"
                  >
                    View Project
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
