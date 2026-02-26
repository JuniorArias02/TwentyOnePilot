export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image/Gradient */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/clancy_poster.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'top center',
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-clancy-dark via-black/40 to-black/80"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-clancy-dark leading-tight"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20 flex flex-col items-center">
                <div className="tape-edge tape-yellow mb-4 animate-[fade-in_1.5s_ease-out_forwards] opacity-0 text-xs md:text-sm font-clancy tracking-wider">
                    <span className="opacity-90">UNA INVITACIÓN ESPECIAL</span>
                </div>

                <h1 className="text-6xl md:text-8xl lg:text-9xl font-clancy text-white mb-4 leading-none tracking-normal animate-[slide-up_1.2s_ease-out_forwards] opacity-0 delay-200" style={{ animationDelay: '200ms' }}>
                    MORE THAN WE <br className="hidden md:block" />
                    <span className="text-clancy-yellow drop-shadow-[0_0_15px_rgba(242,199,92,0.4)]">
                        EVER IMAGINED
                    </span>
                </h1>

                <p className="text-clancy-paper text-lg md:text-xl font-light max-w-2xl mx-auto animate-[fade-in_1.5s_ease-out_forwards] opacity-0 delay-500" style={{ animationDelay: '500ms' }}>
                    Una noche dedicada a nosotros, la música y nuestra conexión.
                </p>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float opacity-0 animate-[fade-in_1.5s_ease-out_forwards]" style={{ animationDelay: '800ms' }}>
                <div className="w-[2px] h-16 bg-gradient-to-b from-clancy-yellow to-transparent"></div>
            </div>
        </section>
    )
}
