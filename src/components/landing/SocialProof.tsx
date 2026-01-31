import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const beforeAfterImages = [
  "https://bellawavederm.com.br/wp-content/uploads/2025/10/1-2.png",
  "https://bellawavederm.com.br/wp-content/uploads/2025/10/2-1.png",
  "https://bellawavederm.com.br/wp-content/uploads/2025/10/3.png",
  "https://bellawavederm.com.br/wp-content/uploads/2025/10/4.png",
  "https://bellawavederm.com.br/wp-content/uploads/2025/10/5.png",
  "https://bellawavederm.com.br/wp-content/uploads/2025/10/6.png",
];

const testimonials = [
  {
    name: "Maria Clara",
    location: "São Paulo, SP",
    text: "Minha pele ficou visivelmente mais uniforme e com brilho natural. Nunca tive um resultado assim com outros produtos!",
    rating: 5,
  },
  {
    name: "Juliana Santos",
    location: "Rio de Janeiro, RJ",
    text: "Em poucos dias senti a diferença na textura e hidratação. Super recomendo!",
    rating: 5,
  },
  {
    name: "Fernanda Lima",
    location: "Belo Horizonte, MG",
    text: "Adorei a leveza do produto e como ele absorve rápido sem deixar oleoso. Minha pele nunca esteve tão bonita.",
    rating: 5,
  },
];

const SocialProof = () => {
  return (
    <section className="py-16 bg-background overflow-hidden">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Resultados reais em até{" "}
            <span className="text-primary">30 dias</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pele visivelmente mais uniforme, hidratada e com textura suave.
          </p>
        </div>

        {/* Before/After Carousel */}
        <div className="relative mb-16">
          <div className="flex animate-marquee gap-6">
            {[...beforeAfterImages, ...beforeAfterImages].map((img, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 md:w-80"
              >
                <img
                  src={img}
                  alt={`Resultado ${(index % 6) + 1}`}
                  className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-card"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-card shadow-card border-0 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Text */}
              <p className="text-muted-foreground mb-4 italic">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            size="lg"
            className="bg-secondary hover:bg-green-dark text-secondary-foreground font-semibold text-lg px-8 py-6 shadow-cta"
            onClick={() => document.getElementById('precos')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Quero esses resultados
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
