import { Separator } from "./ui/separator";
import { InfiniteLoopVideo } from "./InfiniteLoopVideo";

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen py-32 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Get To Know</h5>
        <h2 className="section-title font-bold mb-12">ABOUT</h2>

        {/* Main About content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-lg mb-8">
              Highlighting my transition from a licensed electrician with extensive hands-on
              experience to a software developer with a robust academic foundation in
              computer science.
            </p>

            {/* Video Section - Positioned below the About grid */}
            <div className="mt-16">
              <InfiniteLoopVideo
                src="/videos/about-video.mp4"
                className="w-full aspect-video rounded-lg shadow-lg"
              />
              <p className="text-sm text-center text-muted-foreground mt-2">
                Watch my journey from electrician to software developer
              </p>
            </div>
          </div>

          <div>
            <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">My</h5>
            <h3 className="text-3xl font-bold mb-6">STORY</h3>

            <div className="bg-card rounded-lg p-6">
              <p className="mb-4">
                Established in my career as a licensed electrician at Baptist Health South Florida, I discovered
                my passion for technology and software development.
              </p>
              <p className="mb-4">
                While maintaining my role as an electrician, I pursued a Bachelor's degree in Computer Science
                at Florida International University, completing my education in 2024.
              </p>
              <p>
                Driven by a mission to build exceptional digital experiences, I've developed skills in Java,
                Python, JavaScript, and various web technologies, launching my career as an Associate Software
                Developer at Amazing Minds Therapy.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-20 bg-neutral-800" />

        <div>
          <h5 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Professional</h5>
          <h3 className="text-3xl font-bold mb-10">EXPERIENCE</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card rounded-lg p-6 transition-transform hover:translate-y-[-5px]">
              <h4 className="text-xl font-medium mb-2">Associate Software Developer</h4>
              <h5 className="text-muted-foreground mb-4">Amazing Minds Therapy | 2024 - Present</h5>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Designed and developed a professional, user-friendly website using WordPress</li>
                <li>Customized themes and plugins to align with business branding and functionality needs</li>
                <li>Optimized website performance, security, and SEO to improve visibility</li>
                <li>Integrated booking systems, contact forms, and accessibility features</li>
                <li>Collaborated with stakeholders to gather requirements and implement updates</li>
                <li>Provided ongoing maintenance, troubleshooting, and content management support</li>
              </ul>
            </div>

            <div className="bg-card rounded-lg p-6 transition-transform hover:translate-y-[-5px]">
              <h4 className="text-xl font-medium mb-2">Licensed Electrician</h4>
              <h5 className="text-muted-foreground mb-4">Baptist Health South Florida | 2020 - Present</h5>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Installed and tested electrical machinery and switchboard components</li>
                <li>Performed generator testing in compliance with NFPA 110, 99 standards</li>
                <li>Diagnosed and repaired electrical defects using testing instruments</li>
                <li>Inspected and tested systems to ensure compliance with standards</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
