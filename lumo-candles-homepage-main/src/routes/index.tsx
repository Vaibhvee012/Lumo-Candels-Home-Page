import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ShoppingBag, Menu, Leaf, Flame, Sparkles, Instagram, Facebook, Twitter } from "lucide-react";
import heroImg from "@/assets/hero-candle.jpg";
import storyImg from "@/assets/story.jpg";
import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";
import p4 from "@/assets/product-4.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = ["Shop", "Collections", "Our Story", "Journal", "Contact"];

const PRODUCTS = [
  { name: "Amber & Oud", note: "Warm · Woody", price: "₹3,200", img: p1 },
  { name: "Linen Bloom", note: "Fresh · Floral", price: "₹2,999", img: p2 },
  { name: "Cocoa Hearth", note: "Rich · Sweet", price: "₹3,499", img: p3 },
  { name: "Sea Salt Sage", note: "Cool · Herbal", price: "₹2,999", img: p4 },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden -ml-2 p-2 text-foreground"
          aria-label="Menu"
        >
          <Menu className="h-5 w-5" />
        </button>
        <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide text-foreground/80">
          {NAV.slice(0, 3).map((n) => (
            <a key={n} href="#" className="hover:text-primary transition-colors">{n}</a>
          ))}
        </nav>
        <a href="/" className="font-serif text-2xl tracking-[0.25em] text-primary">
          LUMO
        </a>
        <div className="flex items-center gap-6 text-sm text-foreground/80">
          <a href="#" className="hidden md:inline hover:text-primary transition-colors">Journal</a>
          <a href="#" className="hidden md:inline hover:text-primary transition-colors">Contact</a>
          <button aria-label="Cart" className="relative p-1 hover:text-primary transition-colors">
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              0
            </span>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <nav className="flex flex-col px-6 py-4 gap-4 text-sm">
            {NAV.map((n) => (
              <a key={n} href="#" className="text-foreground/80 hover:text-primary">{n}</a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
        <div className="flex items-center px-6 py-20 lg:px-20 lg:py-0 order-2 lg:order-1">
          <div className="max-w-lg">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              New · Autumn Collection
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-primary">
              A quieter kind of warmth.
            </h1>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground max-w-md">
              Hand-poured in small batches with natural soy wax and pure essential oils — candles
              made to soften your evenings and slow your mornings.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#shop"
                className="inline-flex items-center justify-center rounded-sm bg-primary px-8 py-4 text-xs uppercase tracking-[0.25em] text-primary-foreground transition-all hover:bg-primary/90"
              >
                Shop Candles
              </a>
              <a
                href="#story"
                className="text-xs uppercase tracking-[0.25em] text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
        <div className="relative order-1 lg:order-2 h-[55vh] lg:h-auto">
          <img
            src={heroImg}
            alt="Lumo handmade scented candle in a cream ceramic vessel"
            className="absolute inset-0 h-full w-full object-cover"
            width={1600}
            height={1200}
          />
        </div>
      </div>
    </section>
  );
}

function ValueProps() {
  const items = [
    { Icon: Leaf, title: "100% Natural Soy", desc: "Clean-burning wax, never paraffin." },
    { Icon: Flame, title: "50+ Hour Burn", desc: "Long-lasting, evenly poured." },
    { Icon: Sparkles, title: "Hand-Poured", desc: "Small batches, made with care." },
  ];
  return (
    <section className="border-y border-border/60 bg-secondary/40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 md:grid-cols-3 lg:px-10">
        {items.map(({ Icon, title, desc }) => (
          <div key={title} className="flex flex-col items-center text-center">
            <Icon className="h-6 w-6 text-primary" strokeWidth={1.25} />
            <h3 className="mt-4 font-serif text-xl text-primary">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Products() {
  return (
    <section id="shop" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="flex flex-col items-center text-center mb-16">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Bestsellers
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-primary max-w-2xl">
          Scents to live slowly by.
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4 md:gap-x-8">
        {PRODUCTS.map((p) => (
          <a key={p.name} href="#" className="group block">
            <div className="overflow-hidden bg-secondary/40 aspect-[4/5]">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                width={900}
                height={1100}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex flex-col items-center text-center">
              <h3 className="font-serif text-lg text-primary">{p.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {p.note}
              </p>
              <p className="mt-2 text-sm text-foreground">{p.price}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="bg-secondary/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-32">
        <div className="overflow-hidden">
          <img
            src={storyImg}
            alt="Hand-pouring wax into a ceramic vessel"
            loading="lazy"
            width={1200}
            height={1400}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center">
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Our Story
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-primary leading-[1.1]">
              Made by hand, made to linger.
            </h2>
            <p className="mt-8 text-base leading-relaxed text-muted-foreground">
              Lumo began in a small studio with one quiet idea: that the right scent can turn an
              ordinary moment into a ritual. Every candle is poured by hand, blended with pure
              essential oils, and finished with a label we still write ourselves.
            </p>
            <a
              href="#"
              className="mt-8 inline-block text-xs uppercase tracking-[0.25em] text-primary border-b border-primary/40 pb-1 hover:border-primary transition-colors"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Newsletter() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center lg:py-32">
      <h2 className="font-serif text-4xl md:text-5xl text-primary">Join the slow list.</h2>
      <p className="mt-5 text-sm text-muted-foreground">
        New scents, quiet rituals, and 10% off your first order.
      </p>
      <form
        className="mt-10 flex flex-col sm:flex-row items-stretch gap-3 max-w-md mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          required
          placeholder="your@email.com"
          className="flex-1 border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
        />
        <button
          type="submit"
          className="bg-primary px-6 py-3 text-xs uppercase tracking-[0.25em] text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}

function Footer() {
  const cols = [
    { title: "Shop", links: ["All Candles", "Gift Sets", "Refills", "Accessories"] },
    { title: "About", links: ["Our Story", "Journal", "Sustainability", "Stockists"] },
    { title: "Help", links: ["Shipping", "Returns", "Care Guide", "Contact"] },
  ];
  return (
    <footer className="border-t border-border/60 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="font-serif text-2xl tracking-[0.25em] text-primary">LUMO</a>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              Hand-poured candles for the quieter moments.
            </p>
            <div className="mt-6 flex items-center gap-4 text-foreground/70">
              <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-4 w-4" /></a>
              <a href="#" aria-label="Facebook" className="hover:text-primary"><Facebook className="h-4 w-4" /></a>
              <a href="#" aria-label="Twitter" className="hover:text-primary"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-5">{c.title}</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                {c.links.map((l) => (
                  <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Lumo Candles. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <Products />
        <Story />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
