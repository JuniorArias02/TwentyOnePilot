export default function Experience() {
    const features = [
        {
            title: "Música & Emoción",
            desc: "El sonido de Clancy guiando la noche, con cada letra sintiéndose nuestra.",
            icon: (
                <svg className="w-8 h-8 text-clancy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
            )
        },
        {
            title: "Atmósfera Íntima",
            desc: "Luz baja, ambiente perfecto y la comodidad que solo nosotros entendemos.",
            icon: (
                <svg className="w-8 h-8 text-clancy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            )
        },
        {
            title: "Solo Nosotros",
            desc: "Un espacio reservado para desconectar del resto y conectar profundo.",
            icon: (
                <svg className="w-8 h-8 text-clancy-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
            )
        }
    ]

    return (
        <section className="py-20 border-y border-white/5 relative overflow-hidden bg-clancy-gray/30">
            {/* Subtle Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-clancy-red/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <h3 className="text-3xl font-bold text-center text-white mb-16 tracking-widest uppercase text-sm md:text-xl">
                    La Experiencia
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {features.map((feat, idx) => (
                        <div key={idx} className="bg-clancy-dark/80 p-8 rounded-2xl border border-white/5 hover:border-clancy-red/40 transition-all duration-500 group relative overflow-hidden backdrop-blur-sm">
                            <div className="absolute inset-0 bg-gradient-to-br from-clancy-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                            <div className="mb-8 w-14 h-14 rounded-full flex items-center justify-center bg-white/5 group-hover:scale-110 transition-transform duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.5)] relative z-10">
                                {feat.icon}
                            </div>
                            <h4 className="text-xl font-semibold text-gray-100 mb-3 relative z-10">{feat.title}</h4>
                            <p className="text-gray-400 font-light leading-relaxed text-sm md:text-base relative z-10">
                                {feat.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
