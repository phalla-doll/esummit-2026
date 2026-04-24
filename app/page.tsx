'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { Sparkles, Ticket, ArrowRight, CheckCircle2, X } from 'lucide-react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <main className="min-h-screen pb-24 overflow-x-hidden relative bg-white">
      {/* Background Hero Gradient */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[600px] bg-gradient-to-l from-[#FF5416] via-[#FF8A50] to-transparent bg-opacity-90 blur-[120px] rounded-bl-full pointer-events-none -z-10 opacity-70"
        aria-hidden="true"
      />

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-between z-50 relative">
        <div className="flex items-center gap-2 font-medium text-xl tracking-tight">
          <Sparkles className="w-5 h-5 text-black" />
          ESUMMIT
        </div>
        
        <div className="hidden md:flex items-center bg-[#F4F4F4] rounded-full px-2 py-1.5">
          {['About', 'Speakers', 'Agenda', 'Venues', 'Sponsors'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm font-normal px-4 py-1.5 rounded-full hover:bg-black hover:text-white transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-normal hover:bg-gray-800 transition-colors">
          Contact us
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 relative z-10">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-8"
          >
             <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                  <Image 
                    src={`https://picsum.photos/seed/speaker${i}/100/100`}
                    alt={`Speaker ${i}`}
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center text-xs font-semibold z-10 relative">
                +
              </div>
            </div>
            <div className="text-sm font-normal leading-tight text-gray-500">
              200+ <br /> Speakers
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[5rem] leading-[1.05] font-normal tracking-[-0.03em] mb-6"
          >
            Global virtual <br /> summit - 2026
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-lg mb-12 leading-relaxed font-normal"
          >
            A 3-day digital experience designed to bring together innovators, creators, and changemakers from around the world.
          </motion.p>

          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[#FF5416] text-white px-8 py-3.5 rounded-full font-normal inline-flex items-center gap-2 hover:bg-[#e0430b] transition-colors"
          >
            Grab your seat 
            <Ticket className="w-4 h-4 ml-1" />
          </motion.button>
        </div>
      </section>

      {/* Venues/Gallery Strip */}
      <section className="mt-12 overflow-hidden mx-auto">
        <div className="flex gap-2 min-w-max px-4">
          {[
             { aspect: "aspect-[3/4]", id: 11 },
             { aspect: "aspect-[4/5]", id: 12 },
             { aspect: "aspect-square", id: 13 },
             { aspect: "aspect-[16/9] w-96", id: 14 },
             { aspect: "aspect-[4/5]", id: 15 },
             { aspect: "aspect-[3/4]", id: 16 },
             { aspect: "aspect-square", id: 17 }
          ].map((item, i) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              key={i} 
              className={`relative h-64 sm:h-80 md:h-96 w-48 sm:w-56 md:w-64 rounded-sm overflow-hidden flex-shrink-0 ${item.aspect.includes('w-') ? item.aspect : ''}`}
            >
              <Image 
                src={`https://picsum.photos/seed/venue${item.id}/600/800`}
                alt="Venue"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Overlay for mockups in some images if desired */}
              {i === 2 && (
                <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center">
                   <div className="bg-black text-white px-3 py-1 text-xs font-semibold rounded-md backdrop-blur-sm">Mockup</div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Information Block */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-normal tracking-[-0.02em] mb-20 max-w-xl">
          A next-level digital <br /> experience
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image */}
          <div className="lg:col-span-4 self-end">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden mt-12 w-full lg:w-5/6">
              <Image 
                src="https://picsum.photos/seed/experience1/600/400"
                alt="Workshop presentation"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Center Content */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <p className="text-xl font-normal leading-relaxed mb-8">
              The eventra virtual conference offers live keynotes, hands-on <span className="text-gray-400">learning, and networking opportunities. discover trends in</span>
            </p>

            <ul className="space-y-4 mb-10">
              {[
                'Digital design & UX',
                'AI, no-code, and emerging tech',
                'Creative leadership & branding',
                'Remote collaboration & innovation culture'
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1 text-[#FF5416]">
                    <CheckCircle2 className="w-5 h-5 fill-current text-white stroke-[#FF5416]" />
                  </div>
                  <span className="text-sm font-normal">{text}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap items-center gap-4">
              <button className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-normal hover:bg-gray-800 transition-colors">
                Learn more
              </button>
              <button className="bg-gray-100 text-black px-6 py-2.5 rounded-full text-sm font-normal hover:bg-gray-200 transition-colors">
                Grab your access
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:col-span-4 self-start">
             <div className="relative aspect-[3/4] rounded-sm overflow-hidden w-full lg:w-4/5 ml-auto">
              <Image 
                src="https://picsum.photos/seed/experience2/600/800"
                alt="Conference room"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experts Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-normal tracking-[-0.02em] mb-16 max-w-xl">
          Meet the global <br /> experts
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: 'Henri Robert', role: 'Founder & CEO' },
            { name: 'James Killer', role: 'Creative Director' },
            { name: 'Founder, Edilta', role: 'UX Design Lead' },
            { name: 'Kathleen Breitman', role: 'Marketing Consultant' },
            { name: 'Henri Robert', role: 'Innovation Coach' }
          ].slice(0, 4).map((expert, i) => (
            <div key={i} className="bg-[#F7F7F7] p-6 rounded-sm flex flex-col group hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-normal text-lg leading-tight">{expert.name}</h3>
                  <p className="text-xs text-gray-500 mt-1">{expert.role}</p>
                </div>
                {i === 0 && (
                  <div className="flex bg-black text-white rounded-[4px] overflow-hidden">
                    <span className="px-2 py-0.5 text-[10px] border-r border-gray-700">X</span>
                    <span className="px-2 py-0.5 text-[10px]">in</span>
                  </div>
                )}
              </div>
              <div className="relative aspect-square w-full mt-auto rounded-sm overflow-hidden">
                <Image 
                  src={`https://picsum.photos/seed/expert${i}/400/400`}
                  alt={expert.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Agenda/Schedule Fragment (Right Side in Design) */}
      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-gray-100 mt-16">
        <h2 className="text-4xl md:text-[3.5rem] leading-[1.1] font-normal tracking-[-0.02em] mb-16">
          Agenda Highlights
        </h2>

        <div className="flex flex-col gap-6 max-w-4xl">
          {[
            {
              time: '9:00 AM - 10:20 AM',
              title: 'No-code tech & digital building',
              desc: 'Learn how to scale your product without writing a single line of code.',
              seed: 'agenda1'
            },
            {
              time: '10:00 AM - 11:30 AM',
              title: 'UX that works everywhere',
              desc: 'Design for global accessibility and create experiences that reach everyone.',
              seed: 'agenda2'
            },
            {
              time: '10:00 AM - 11:30 AM',
              title: 'Visual storytelling for creatives',
              desc: 'Master the art of visual design and tell stories that inspire action.',
              seed: 'agenda3'
            }
          ].map((item, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 items-start p-6 bg-white border border-gray-100 hover:shadow-xl transition-shadow duration-300 rounded-sm">
              <div className="relative w-full md:w-56 aspect-[4/3] md:aspect-square flex-shrink-0 bg-gray-100 rounded-sm overflow-hidden">
                <Image 
                  src={`https://picsum.photos/seed/${item.seed}/400/400`}
                  alt={item.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-opacity duration-300"
                  style={{ mixBlendMode: 'multiply' }}
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="flex-1 pt-2 w-full">
                <div className="inline-block bg-gray-100 text-gray-700 px-4 py-1.5 text-xs font-medium rounded-full mb-4">
                  {item.time}
                </div>
                <h3 className="text-2xl font-medium tracking-tight mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-normal mb-6 text-sm max-w-md">
                  {item.desc}
                </p>
                <button className={`px-5 py-2.5 rounded-full text-sm font-normal flex items-center gap-2 transition-colors ${i === 0 ? 'bg-[#FF5416] text-white hover:bg-[#e0430b]' : 'bg-black text-white hover:bg-gray-800'}`}>
                  Buy tickets
                  <Ticket className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
