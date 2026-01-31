import HeroImg from "@/assets/images/hero.jpg";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Designer, Creator, Innovator
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

            <div className="relative space-y-4 ">
              <p className="text-white">
                Hello! I'm Oguda Victor, a Full-Stack Developer, UI/UX Designer,
                and Video & Motion Specialist based in Lagos, Nigeria. With 5+
                years of experience I deliver high-performance web and mobile
                applications while simultaneously shaping cohesive branding and
                motion narratives for diverse brands and clients.
              </p>
              <p className="text-white">
                I blend full-stack frameworks (React, Next.js, Django, Node.js)
                with tools like Figma, Adobe, and Premiere/After Effects so
                every user journey feels polished. Generative AI (Grok, Gemini,
                OpenAI, n8n) helps me iterate faster without sacrificing craft,
                whether it's UX flows, motion intros, or video content for social
                reach.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-teal-300 pl-4">
                  <p className="text-white">
                    I aim to deliver digital work that feels thoughtful, human,
                    and memorable—whether that means a production-ready web app or
                    a viral short-form video.
                  </p>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
