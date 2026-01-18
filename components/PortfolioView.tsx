import React from 'react';
import { PortfolioData } from '../types';

interface PortfolioViewProps {
  data: PortfolioData;
  onDownloadResume: () => void;
  isGeneratingResume: boolean;
}

const PortfolioView: React.FC<PortfolioViewProps> = ({ data, onDownloadResume, isGeneratingResume }) => {
  return (
    <div className="print-full min-h-screen">
      {/* Side Navigation */}
     <nav className="fixed left-0 top-0 h-full w-20 hidden lg:flex flex-col items-center py-12 border-r border-slate-200 bg-white z-40 no-print">
  <div className="text-2xl font-bold serif border-2 border-slate-900 w-10 h-10 flex items-center justify-center mb-12">
    T
  </div>

  <div className="flex flex-col gap-12 text-xs font-bold uppercase tracking-widest">
    
    {/* PORTFOLIO – normal vertical */}
    <a
      href="#work"
      className="hover:text-amber-600 transition-colors rotate-180"
      style={{ writingMode: 'vertical-rl' }}
    >
      Portfolio
    </a>

    {/* CONTACT – opposite direction */}
    <a
      href="#contact"
      className="hover:text-amber-600 transition-colors rotate-180"
      style={{ writingMode: 'vertical-rl' }}
    >
      Contact
    </a>

  </div>
</nav>



      <div className="lg:ml-20">
        {/* Hero Section */}
        <header className="px-6 py-24 md:px-16 md:py-32 lg:px-24 bg-white border-b border-slate-100">
          <div className="max-w-5xl">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 no-print">
              <div className="flex gap-3">
                <span className="flex items-center gap-2 px-4 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                  <i className="fas fa-pen-nib text-[8px]"></i> Blogger
                </span>
                <span className="flex items-center gap-2 px-4 py-1.5 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm">
                  <i className="fas fa-feather-pointed text-[8px]"></i> Poet
                </span>
              </div>

              <button
                onClick={onDownloadResume}
                className="text-xs font-bold px-6 py-3 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2 uppercase tracking-widest shadow-md active:scale-95"
              >
                <i className="fas fa-file-arrow-down"></i> Download Resume
              </button>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold serif text-slate-900 mb-8 leading-tight">
              {data.name}
            </h1>

            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
              <p className="text-xl md:text-2xl text-amber-600 font-medium serif italic">
                {data.title}
              </p>
              <div className="h-px flex-1 bg-slate-200 hidden md:block"></div>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
                <i className="fas fa-location-dot mr-2"></i>
                Based in {data.contact.location}
              </p>
            </div>

            <p className="mt-12 text-2xl md:text-4xl text-slate-500 font-light leading-snug max-w-4xl">
              {data.brandStatement}
            </p>
          </div>
        </header>

        {/* Intro Section */}
        <section id="about" className="px-6 py-20 md:px-16 lg:px-24 bg-slate-50">
          <div className="max-w-5xl grid md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">
                Background
              </h2>
              <p className="text-slate-900 font-medium">Engineer. Storyteller.</p>
            </div>

            <div className="md:col-span-2">
              <p className="text-2xl md:text-3xl leading-relaxed text-slate-800 serif italic">
                "{data.intro}"
              </p>
              <p className="mt-8 text-slate-600 leading-relaxed text-lg">
                {data.aboutMe}
              </p>
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="px-6 py-20 md:px-16 lg:px-24 bg-white">
          <div className="max-w-5xl">
            <div className="flex items-baseline justify-between mb-16 border-b border-slate-100 pb-8">
              <h2 className="text-4xl font-bold serif text-slate-900">
                Selected Works
              </h2>
              <span className="text-slate-400 text-sm font-mono uppercase tracking-widest">
                Selected Samples
              </span>
            </div>

            <div className="grid gap-20">
              {data.samples.map((sample, index) => (
                <div key={sample.id} className="group grid md:grid-cols-12 gap-8 items-start">
                  <div className="md:col-span-1 text-4xl font-serif text-slate-200 group-hover:text-amber-200 transition-colors">
                    0{index + 1}
                  </div>

                  <div className="md:col-span-11">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold uppercase tracking-widest rounded-full border border-amber-100 flex items-center gap-2">
                        {sample.category.toLowerCase().includes('poetry') ? (
                          <i className="fas fa-feather"></i>
                        ) : (
                          <i className="fas fa-quote-left"></i>
                        )}
                        {sample.category}
                      </span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 group-hover:translate-x-2 transition-transform duration-300">
                      {sample.title}
                    </h3>

                    <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-3xl">
                      {sample.description}
                    </p>

                    <a
                      href={sample.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center group/link text-slate-900 font-bold text-lg"
                    >
                      View Writing
                      <span className="ml-3 w-10 h-px bg-slate-900 group-hover/link:w-16 transition-all"></span>
                      <i className="fas fa-arrow-right ml-2 text-sm group-hover/link:translate-x-2 transition-transform"></i>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <footer id="contact" className="px-6 py-24 md:px-16 lg:px-24 bg-slate-900 text-white">
          <div className="max-w-5xl">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold mb-6">
                  Contact & Hire
                </p>
                <h2 className="text-3xl md:text-5xl font-bold serif mb-8 leading-tight">
                  Interested in collaborating?
                </h2>

                <a
                  href={`mailto:${data.contact.email}`}
                  className="inline-flex items-center gap-4 text-xl md:text-2xl font-medium text-amber-400 hover:text-amber-300 transition-colors group"
                >
                  <span className="bg-slate-800 w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="border-b border-amber-900 group-hover:border-amber-400 transition-all pb-1">
                    {data.contact.email}
                  </span>
                </a>

                <div className="mt-10 no-print">
                  <button
                    onClick={onDownloadResume}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-slate-900 rounded-full font-bold text-sm uppercase tracking-widest hover:bg-amber-400 transition-colors"
                  >
                    <i className="fas fa-file-pdf"></i> Access Resume File
                  </button>
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-10">
                <div className="flex flex-col gap-6 w-full md:w-auto">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500 font-bold md:text-right">
                    Digital Presence
                  </p>

                  <div className="flex flex-col md:items-end gap-5">
                    <a
                      href={data.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors font-semibold text-lg"
                    >
                      LinkedIn
                      <span className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                        <i className="fab fa-linkedin-in group-hover:text-white"></i>
                      </span>
                    </a>

                    <a
                      href={data.contact.medium}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 text-slate-300 hover:text-white transition-colors font-semibold text-lg"
                    >
                      Medium
                      <span className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-slate-50 transition-colors">
                        <i className="fab fa-medium-m group-hover:text-black"></i>
                      </span>
                    </a>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-800 w-full md:text-right text-slate-500">
                  <p className="font-mono text-sm">&copy; 2024 Tanmay Mandal</p>
                  <p className="text-[10px] uppercase tracking-widest mt-2">
                    Storyteller Portfolio &bull; Navi Mumbai, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PortfolioView;
