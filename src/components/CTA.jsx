export default function CTA() {
    return (
        <section className="py-32 px-4 text-center relative z-10">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-5xl md:text-7xl font-clancy text-white mb-8 tracking-wide drop-shadow-md">
                    ¿VEMOS ESTO <span className="text-clancy-yellow">JUNTOS?</span>
                </h2>

                {/* Event Details Card */}
                <div className="bg-clancy-gray border-2 border-clancy-red/30 p-6 md:p-8 mb-12 max-w-lg mx-auto relative group">
                    <div className="absolute -top-4 -left-4 tape-edge tape-yellow transform -rotate-6 z-20 shadow-md">
                        <span className="font-clancy text-lg text-black">TOP SECRET</span>
                    </div>
                    <div className="absolute -bottom-4 -right-4 tape-edge tape-yellow transform rotate-3 z-20 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"></div>

                    <div className="flex flex-col gap-5 text-left relative z-10">
                        <div className="flex items-center gap-4">
                            <svg className="w-8 h-8 text-clancy-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <div>
                                <p className="text-sm text-clancy-yellow font-clancy uppercase tracking-wider">Fecha & Hora</p>
                                <p className="text-xl text-white font-medium">26/02/2026 — 8:00 PM</p>
                            </div>
                        </div>
                        <div className="h-px w-full bg-white/10 my-1"></div>
                        <div className="flex items-center gap-4">
                            <svg className="w-8 h-8 text-clancy-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <div>
                                <p className="text-sm text-clancy-yellow font-clancy uppercase tracking-wider">Lugar</p>
                                <p className="text-xl text-white font-medium">Cinemark — Ventura Plaza</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-gray-400 mb-14 text-lg font-light max-w-xl mx-auto">
                    Prometo que será una noche que recordaremos. More Than We Ever Imagined.
                </p>

                <button className="relative inline-flex items-center justify-center px-14 py-5 text-xl font-clancy text-white tracking-widest transition-all duration-300 bg-clancy-red hover:bg-[#b01e15] hover:shadow-[0_0_40px_rgba(218,41,28,0.6)] animate-glow active:scale-95 group overflow-hidden border-2 border-transparent hover:border-white/20">
                    <span className="absolute inset-0 w-full h-full opacity-30 bg-gradient-to-b from-transparent via-transparent to-black transition-all group-hover:opacity-50"></span>
                    <span className="absolute top-0 left-0 w-full h-1 bg-white/20"></span>
                    <span className="relative">SÍ, ACEPTO</span>
                </button>
            </div>
        </section>
    )
}
