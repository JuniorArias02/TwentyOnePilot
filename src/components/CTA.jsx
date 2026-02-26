export default function CTA() {
    return (
        <section className="py-32 px-4 text-center relative z-10">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
                    ¿Vemos esto <span className="text-clancy-red">juntos?</span>
                </h2>

                {/* Event Details Card */}
                <div className="bg-clancy-dark/50 border border-white/10 rounded-2xl p-6 md:p-8 mb-12 backdrop-blur-md max-w-lg mx-auto transform transition-all hover:border-clancy-red/30">
                    <div className="flex flex-col gap-4 text-left">
                        <div className="flex items-center gap-4">
                            <svg className="w-6 h-6 text-clancy-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            <div>
                                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Fecha & Hora</p>
                                <p className="text-lg text-white">26/02/2026 — 8:00 PM</p>
                            </div>
                        </div>
                        <div className="h-px w-full bg-white/10 my-2"></div>
                        <div className="flex items-center gap-4">
                            <svg className="w-6 h-6 text-clancy-red shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <div>
                                <p className="text-sm text-gray-400 font-semibold uppercase tracking-wider">Lugar</p>
                                <p className="text-lg text-white">Cinemark — Ventura Plaza</p>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-gray-400 mb-14 text-lg font-light">
                    Prometo que será una noche que recordaremos. More Than We Ever Imagined.
                </p>
                <button className="relative inline-flex items-center justify-center px-12 py-5 text-lg font-semibold text-white transition-all duration-300 bg-clancy-red rounded-full hover:bg-red-700 hover:shadow-[0_0_40px_rgba(200,16,46,0.8)] animate-glow active:scale-95 group overflow-hidden">
                    <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black transition-all group-hover:opacity-50"></span>
                    <span className="relative">Sí, acepto ir contigo</span>
                </button>
            </div>
        </section>
    )
}
