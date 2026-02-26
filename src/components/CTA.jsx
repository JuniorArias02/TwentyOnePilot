export default function CTA() {
    return (
        <section className="py-32 px-4 text-center relative z-10">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
                    ¿Vemos esto <span className="text-clancy-red">juntos?</span>
                </h2>
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
