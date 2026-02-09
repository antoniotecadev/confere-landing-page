import { MessageSquare, ChevronDown } from "lucide-react";
import { useState } from "react";

// Import screenshots
import comment1 from "@/assets/IMG_1782.PNG";
import comment2 from "@/assets/IMG_1784.PNG";
import comment3 from "@/assets/IMG_1785.PNG";
import comment4 from "@/assets/IMG_1786.PNG";
import comment5 from "@/assets/IMG_1788.PNG";
import comment6 from "@/assets/IMG_1791.PNG";
import comment7 from "@/assets/IMG_1793.PNG";
import comment8 from "@/assets/IMG_1794.PNG";
import comment9 from "@/assets/IMG_1795.PNG";

const comments = [
    { id: 1, image: comment1 },
    { id: 2, image: comment2 },
    { id: 3, image: comment3 },
    { id: 4, image: comment4 },
    { id: 5, image: comment5 },
    { id: 6, image: comment6 },
    { id: 7, image: comment7 },
    { id: 8, image: comment8 },
    { id: 9, image: comment9 },
];

const SocialProof = () => {
    const [showAll, setShowAll] = useState(false);
    const visibleComments = showAll ? comments : comments.slice(0, 3);

    return (
        <section className="py-20 bg-muted/30">
            <div className="container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                        <MessageSquare className="w-4 h-4" />
                        Prova Social
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        Angolanos Relatam o Mesmo Problema
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Comentários reais de um vídeo no TikTok de uma influencer sobre os problemas
                        que todos enfrentam nos supermercados
                    </p>
                </div>

                {/* Comments Grid - Masonry style */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {visibleComments.map((comment, index) => (
                        <div
                            key={comment.id}
                            className="group relative overflow-hidden rounded-xl bg-card border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                            style={{
                                animationDelay: `${index * 100}ms`,
                            }}
                        >
                            <div className="aspect-[9/16] relative">
                                <img
                                    src={comment.image}
                                    alt={`Comentário ${comment.id} sobre problemas em supermercados`}
                                    className="w-full h-full object-contain bg-muted"
                                    loading="lazy"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
                {/* Show More Button */}
                {!showAll && (
                    <div className="text-center mt-8">
                        <button
                            onClick={() => setShowAll(true)}
                            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg"
                        >
                            Ver mais {comments.length - 3} comentários
                            <ChevronDown className="w-5 h-5 animate-bounce" />
                        </button>
                    </div>
                )}

                {/* }
        </div>

        {/* Bottom CTA */}
                <div className="text-center mt-12">
                    <p className="text-muted-foreground mb-4">
                        <span className="font-semibold text-foreground">Milhares de angolanos</span> passam por isso todos os dias. <br />
                        É hora de ter o controlo das tuas compras!
                    </p>
                    <a
                        href="#solucao"
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                        Ver como o Confere resolve isto
                        <span>→</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
