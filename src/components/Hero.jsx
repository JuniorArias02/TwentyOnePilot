export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image/Gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/clancy_poster.png), linear-gradient(to bottom, #1a1a1a, #0a0a0a)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                    backgroundBlendMode: 'overlay'
                }}
            >
                <div className="absolute inset-0 bg-clancy-dark/70 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-clancy-dark via-transparent to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-clancy-red/5 to-clancy-dark"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
                <h2 className="text-clancy-red font-semibold tracking-[0.3em] uppercase mb-4 animate-[fade-in_1.5s_ease-out_forwards] opacity-0 text-sm md:text-base">
                    Una Invitación Especial
                </h2>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight animate-[slide-up_1.2s_ease-out_forwards] opacity-0 delay-200" style={{ animationDelay: '200ms' }}>
                    More Than We <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-clancy-red">
                        {' '}Ever Imagined
                    </span>
                </h1>
                <p className="text-gray-300 text-lg md:text-xl font-light max-w-2xl mx-auto animate-[fade-in_1.5s_ease-out_forwards] opacity-0 delay-500" style={{ animationDelay: '500ms' }}>
                    Una noche dedicada a nosotros, la música y nuestra conexión.
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float opacity-0 animate-[fade-in_1.5s_ease-out_forwards]" style={{ animationDelay: '800ms' }}>
                <div className="w-[1px] h-20 bg-gradient-to-b from-clancy-red to-transparent"></div>
            </div>
        </section>
    )
}
