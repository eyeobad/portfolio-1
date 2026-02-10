import { useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.jpg";
import editOne from "../../assets/edit1.mp4";
import editTwo from "../../assets/edit 2.mp4";
import choplife from "../../assets/flyer hotel.png";
import untitled from "../../assets/Untitled design.png";
import yellowLogo from "../../assets/Yellow and Black Modern Electrical Specialized Logo  (1).jpg";
import monday from "../../assets/monday.png";

const creativeCapsules = [
  {
    title: "Signal Bloom Identity",
    medium: "Graphic Design",
    description:
      "From logotypes to full brand systems, Signal Bloom keeps every visual detail purposeful so print and digital assets feel unified.",
    highlights: [
      "Brand language & typography exploration",
      "Editorial spreads and promotional layouts",
      "Packaging and social motion-ready artwork",
    ],
    gradient: "from-amber-500/80 via-rose-500/70 to-fuchsia-600/80",
  },
  {
    title: "Lumen Motion Studio",
    medium: "Video Editing",
    description:
      "Lumen Motion edits cinematic stories for product launches, tutorials and commissioned films with a keen eye for light, rhythm, and pacing.",
    highlights: [
      "Color grading guided by brand palettes",
      "Dynamic cutdowns, reels, and montages",
      "Audio balanced with bespoke sound beds",
    ],
    gradient: "from-sky-500/80 via-indigo-500/70 to-purple-600/80",
  },
];

const designSamples = [
  {
    src: choplife,
    title: "hotel flyer",
    caption: "Social-media flyer for a hotel.",
  },
  {
    src: untitled,
    title: "logo design",
    caption: "minmalistic logo design for a cargo company.",
  },
  {
    src: yellowLogo,
    title: "VoltCharge identity studies",
    caption: "Electric yellow marks for electrical and solar service.",
  },
  {
    src: monday,
    title: "lounge performance flyer",
    caption: "social media flyer for lounge event.",
  },
];

const localEdits = [
  {
    label: "sample",
    title: "motion visual design for a streaming intro",
    description:
      "",
    src: editOne,
  },
  {
    label: "sample",
    title: "motion graphic sample",
    description:
      "",
    src: editTwo,
  },
];

export default function ChromaForge() {
  const [activeSample, setActiveSample] = useState(null);

  const closeSampler = () => setActiveSample(null);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
    


      <section className="max-w-6xl mx-auto px-4 pb-16 md:pt-[10rem]">
        <div className="bg-gradient-to-br from-black/80 via-slate-900 to-slate-900 rounded-[32px] border border-white/10 p-8 shadow-2xl shadow-black/80">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-emerald-400">
                YouTube long-form video
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold">
                worked on a short film as the video editor.
              </h2>
           
            </div>

            <div className="rounded-3xl border border-white/10 overflow-hidden bg-black">
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/hbvIZr_AuPo"
                  title="ChromaForge Creative Reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="bg-gradient-to-br from-black/80 via-slate-900 to-slate-900 rounded-[32px] border border-white/10 p-8 shadow-2xl shadow-black/80">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="space-y-4 order-2 lg:order-1">
               <p className="text-xs uppercase tracking-[0.4em] text-emerald-400">
                 TikTok short-form video
               </p>
               <h2 className="text-3xl md:text-4xl font-semibold">
                 created a short form connect on tiktok with over 1.2m views
               </h2>
              
               <a
                 href="https://vm.tiktok.com/ZSHojPKeGj2XH-Kcuef/"
                 target="_blank"
                 rel="noreferrer"
                 className="inline-flex text-xs uppercase tracking-[0.4em] text-cyan-400 hover:text-cyan-200 transition"
               >
                 Watch on TikTok &rarr;
               </a>

            </div>

            <div className="rounded-3xl border border-white/10 overflow-hidden bg-black order-1 lg:order-2">
              <div className="relative w-full" style={{ paddingBottom: "178.5%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src="https://www.tiktok.com/embed/7519106931844287800"
                  title="TikTok ChromaForge Reel"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex h-full flex-col gap-8 rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-900/80 via-slate-900 to-black p-8 shadow-2xl shadow-black/60">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-400">
              more samples
            </p>
          
        
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {localEdits.map((edit) => (
              <LocalEditCard key={edit.title} edit={edit} />
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 pb-20">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-emerald-400">
              Design samples
            </p>
            <h3 className="text-3xl font-semibold text-white">
              Active concepts from the root asset library
            </h3>
          </div>
          <span className="text-sm text-white/70">Swipe for inspiration</span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {designSamples.map((sample) => (
            <DesignSampleCard
              key={sample.title}
              sample={sample}
              onActivate={() => setActiveSample(sample)}
            />
          ))}
        </div>
      </section>
      {activeSample && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-lg"
          role="dialog"
          aria-modal="true"
          onClick={closeSampler}
        >
          <figure
            className="relative mx-4 max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeSample.src}
              alt={activeSample.title}
              className="h-full w-full object-contain"
            />
            <figcaption className="p-4 text-sm text-white/70">
              {activeSample.caption}
            </figcaption>
            <button
              className="absolute right-3 top-3 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white transition hover:bg-white/20"
              onClick={closeSampler}
            >
              Close
            </button>
          </figure>
        </div>
      )}
    </main>
  );
}

function CapsuleCard({ capsule }) {
  const { title, medium, description, highlights, gradient } = capsule;

  return (
    <article
      className={`rounded-3xl border border-white/10 bg-gradient-to-br ${gradient} p-8 shadow-2xl shadow-black/60 backdrop-blur`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-[0.3em] text-white/70">
          {medium}
        </span>
        <span className="text-xs font-bold text-white/80">ChromaForge</span>
      </div>
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 leading-tight">
        {title}
      </h2>
      <p className="text-white/80 mb-6">{description}</p>
      <ul className="space-y-2 text-sm text-white/90">
        {highlights.map((highlight) => (
          <li key={highlight} className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-white/80" />
            {highlight}
          </li>
        ))}
      </ul>
    </article>
  );
}

function DesignSampleCard({ sample, onActivate }) {
  return (
    <div
      role="button"
      tabIndex={0}
      className="bg-slate-900/80 rounded-3xl border border-white/10 overflow-hidden shadow-xl shadow-black/60 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
      onClick={onActivate}
      onKeyDown={(event) => {
        if (event.key === "Enter" && onActivate) {
          onActivate();
        }
      }}
      aria-label={`View ${sample.title}`}
    >
      <div className="relative w-full h-64 bg-black">
        <img
          src={sample.src}
          alt={sample.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/40" />
      </div>
      <div className="p-6 space-y-2">
        <h4 className="text-xl font-semibold">{sample.title}</h4>
        <p className="text-sm text-white/70">{sample.caption}</p>
      </div>
    </div>
  );
}

function LocalEditCard({ edit }) {
  const { label, title, description, src } = edit;

  return (
    <article className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-2xl shadow-black/60">
        <div className="relative h-56 bg-black">
          <video
            className="h-full w-full object-cover"
          src={src}
          controls
          loop
          muted
          playsInline
        >
          Your browser does not support HTML5 video.
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
      </div>
      <div className="space-y-2 p-6">
        <span className="text-xs uppercase tracking-[0.3em] text-white/60">
          {label}
        </span>
        <h4 className="text-xl font-semibold text-white">{title}</h4>
        <p className="text-sm text-white/70">{description}</p>
      </div>
    </article>
  );
}
