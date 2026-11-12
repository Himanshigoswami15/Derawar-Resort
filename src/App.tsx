import { Instagram, ShoppingCart, X, Plus, Minus } from 'lucide-react';
import React, { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'motion/react';

const Ornament = () => (
  <svg width="120" height="24" viewBox="0 0 120 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
    <path d="M60 0L63 9L72 12L63 15L60 24L57 15L48 12L57 9L60 0Z" fill="var(--color-accent)"/>
    <path d="M30 9L31.5 13.5L36 15L31.5 16.5L30 21L28.5 16.5L24 15L28.5 13.5L30 9Z" fill="var(--color-accent)"/>
    <path d="M90 9L91.5 13.5L96 15L91.5 16.5L90 21L88.5 16.5L84 15L88.5 13.5L90 9Z" fill="var(--color-accent)"/>
    <line x1="0" y1="12" x2="20" y2="12" stroke="var(--color-accent)" strokeWidth="0.5"/>
    <line x1="100" y1="12" x2="120" y2="12" stroke="var(--color-accent)" strokeWidth="0.5"/>
  </svg>
);

const JharokhaTop = () => (
  <svg viewBox="0 0 1200 200" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24 md:h-32 lg:h-48 text-[var(--color-accent)] block">
    <defs>
      <linearGradient id="jharokha-grad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="var(--color-bg-card)" stopOpacity="0.1" />
        <stop offset="100%" stopColor="var(--color-bg-card)" stopOpacity="0.7" />
      </linearGradient>
      <g id="ornament" fill="currentColor" stroke="currentColor" strokeWidth="0.5">
        <line x1="0" y1="0" x2="0" y2="15" strokeOpacity="0.5" />
        <path d="M 0 15 L 4 22 L 0 29 L -4 22 Z" fillOpacity="0.6" stroke="none" />
        <circle cx="0" cy="33" r="1.5" fillOpacity="0.8" stroke="none" />
      </g>
    </defs>

    {/* Background Fill */}
    <path d="M 1 200 
             L 1 180 
             L 40 180 
             C 40 100, 180 150, 230 120 
             C 280 90, 370 100, 420 70 
             C 470 40, 550 50, 600 20 
             C 650 50, 730 40, 780 70 
             C 830 100, 920 90, 970 120 
             C 1020 150, 1160 100, 1160 180 
             L 1199 180 
             L 1199 200 Z" 
          fill="url(#jharokha-grad)" />

    {/* Main Outer Stroke */}
    <path d="M 1 200 
             L 1 180 
             L 40 180 
             C 40 100, 180 150, 230 120 
             C 280 90, 370 100, 420 70 
             C 470 40, 550 50, 600 20 
             C 650 50, 730 40, 780 70 
             C 830 100, 920 90, 970 120 
             C 1020 150, 1160 100, 1160 180 
             L 1199 180 
             L 1199 200" 
          fill="none" stroke="currentColor" strokeWidth="2" strokeOpacity="0.4" 
          vectorEffect="non-scaling-stroke" />

    {/* Inner Decorative Line 1 */}
    <path d="M 40 180 
             C 40 100, 180 150, 230 120 
             C 280 90, 370 100, 420 70 
             C 470 40, 550 50, 600 20 
             C 650 50, 730 40, 780 70 
             C 830 100, 920 90, 970 120 
             C 1020 150, 1160 100, 1160 180" 
          fill="none" stroke="currentColor" strokeWidth="1" strokeOpacity="0.3" 
          transform="translate(0, 6)"
          vectorEffect="non-scaling-stroke" />

    {/* Inner Decorative Line 2 */}
    <path d="M 40 180 
             C 40 100, 180 150, 230 120 
             C 280 90, 370 100, 420 70 
             C 470 40, 550 50, 600 20 
             C 650 50, 730 40, 780 70 
             C 830 100, 920 90, 970 120 
             C 1020 150, 1160 100, 1160 180" 
          fill="none" stroke="currentColor" strokeWidth="0.5" strokeOpacity="0.2" 
          transform="translate(0, 12)"
          vectorEffect="non-scaling-stroke" />

    {/* Hanging Ornaments */}
    <use href="#ornament" x="230" y="120" />
    <use href="#ornament" x="420" y="70" />
    <use href="#ornament" x="600" y="20" />
    <use href="#ornament" x="780" y="70" />
    <use href="#ornament" x="970" y="120" />
  </svg>
);

interface MenuSection {
  category: string;
  items: { id?: number; name: string; price: string; description: string; image: string }[];
}

const menuDataPlaceholder: MenuSection[] = [];

const TiltImage = ({ src, alt }: { src: string, alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="w-full sm:w-48 md:w-56 lg:w-48 xl:w-56 shrink-0">
      <div
        className="rect-image w-full aspect-[4/3] relative overflow-hidden rounded-xl bg-[var(--color-bg-card)]/50 transform-gpu"
      >
        <div className="rect-image-inner w-full h-full">
          {/* Static Skeleton Loader */}
          {!isLoaded && (
            <div className="absolute inset-0 bg-[var(--color-bg-card)]" />
          )}
          
          <img
            src={src}
            alt={alt}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ease-out transform-gpu ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          />
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [menuData, setMenuData] = useState<MenuSection[]>(menuDataPlaceholder);
  const [menuLoading, setMenuLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('');
  const navRef = useRef<HTMLDivElement>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [cart, setCart] = useState<{name: string, price: number, quantity: number}[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Fetch menu data from the database API
  useEffect(() => {
    fetch('/api/menu')
      .then(res => res.json())
      .then((data: MenuSection[]) => {
        setMenuData(data);
        if (data.length > 0) {
          setActiveCategory(data[0].category);
        }
        setMenuLoading(false);
      })
      .catch(() => {
        setMenuLoading(false);
      });
  }, []);

  const parsePrice = (priceStr: string) => parseInt(priceStr.replace(/[^\d]/g, ''), 10);

  const addToCart = (item: {name: string, price: string}) => {
    setCart(prev => {
      const existing = prev.find(i => i.name === item.name);
      if (existing) {
        return prev.map(i => i.name === item.name ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { name: item.name, price: parsePrice(item.price), quantity: 1 }];
    });
  };

  const updateQuantity = (name: string, delta: number) => {
    setCart(prev => prev.map(i => {
      if (i.name === name) {
        return { ...i, quantity: Math.max(0, i.quantity + delta) };
      }
      return i;
    }).filter(i => i.quantity > 0));
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) {
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 150);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (isScrollingRef.current) return;
        
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        if (visibleEntries.length > 0) {
          const mostVisible = visibleEntries.reduce((prev, current) => 
            (prev.intersectionRatio > current.intersectionRatio) ? prev : current
          );
          
          const categoryId = mostVisible.target.id;
          const matchedCategory = menuData.find(c => c.category.replace(/\s+/g, '-') === categoryId);
          if (matchedCategory) {
            setActiveCategory(matchedCategory.category);
          }
        }
      },
      {
        rootMargin: '-100px 0px -60% 0px',
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    if (navRef.current) {
      const activeElement = navRef.current.querySelector(`[data-category="${activeCategory}"]`) as HTMLElement;
      if (activeElement) {
        const container = navRef.current;
        const scrollLeft = activeElement.offsetLeft - container.offsetWidth / 2 + activeElement.offsetWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeCategory]);

  if (menuLoading) {
    return (
      <div className="min-h-screen bg-texture flex items-center justify-center">
        <div className="text-center">
          <motion.img 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            src="https://ik.imagekit.io/j1fgksdwx/Derawar%20(6).png" 
            alt="Derawar Logo" 
            referrerPolicy="no-referrer"
            className="w-48 md:w-64 mb-6 object-contain mx-auto"
          />
          <div className="inline-block w-8 h-8 border-2 border-[var(--color-accent)]/30 border-t-[var(--color-accent)] rounded-full animate-spin"></div>
          <p className="mt-4 font-inter font-light tracking-[0.3em] text-sm text-[var(--color-accent-muted)] uppercase">Loading Menu...</p>
        </div>
      </div>
    );
  }

  if (menuData.length === 0) {
    return (
      <div className="min-h-screen bg-texture flex items-center justify-center">
        <p className="text-[var(--color-accent-muted)] font-inter">Menu unavailable. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-texture relative overflow-x-clip">
      
      {/* Floating Navigation */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden 2xl:flex flex-col gap-4 items-center">
        <div className="w-px h-16 bg-gradient-to-b from-transparent to-[var(--color-accent)] opacity-30"></div>
        {menuData.map((section, idx) => {
          const isActive = activeCategory === section.category;
          return (
            <a 
              key={idx} 
              href={`#${section.category.replace(/\s+/g, '-')}`}
              onClick={(e) => {
                e.preventDefault();
                isScrollingRef.current = true;
                setActiveCategory(section.category);
                const element = document.getElementById(section.category.replace(/\s+/g, '-'));
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                  // Fallback in case scroll event doesn't fire
                  if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
                  scrollTimeoutRef.current = setTimeout(() => {
                    isScrollingRef.current = false;
                  }, 2000);
                }
              }}
              className="group relative flex items-center justify-center w-6 h-6"
            >
              <div className={`w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] transition-all duration-300 ${isActive ? 'opacity-100 scale-150 shadow-[0_0_10px_rgba(212,175,55,0.8)]' : 'opacity-30 group-hover:opacity-100 group-hover:scale-150'}`}></div>
              <span className={`absolute right-8 transition-opacity duration-300 font-cinzel text-[var(--color-accent)] text-xs whitespace-nowrap tracking-widest ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
                {section.category}
              </span>
            </a>
          );
        })}
        <div className="w-px h-16 bg-gradient-to-t from-transparent to-[var(--color-accent)] opacity-30"></div>
      </div>

      <div className="content-wrapper max-w-[1400px] mx-auto px-4 py-16 sm:px-6 lg:px-12 relative z-10">
        
        {/* Jharokha Top Border */}
        <div className="w-full relative z-20 -mb-[1px]">
          <JharokhaTop />
        </div>

        <div className="border-x-2 border-b-2 border-t-0 border-[var(--color-accent)]/40 rounded-b-3xl p-6 md:p-12 bg-[var(--color-bg-card)]/80 shadow-2xl relative z-10 pt-0">
          {/* Corner Ornaments */}
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[var(--color-accent)] opacity-60"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[var(--color-accent)] opacity-60"></div>
          
        {/* Header */}
        <header className="text-center mb-8 flex flex-col items-center pt-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 45 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{ perspective: 1000 }}
          >
            <motion.img 
              animate={{ 
                y: [0, -10, 0]
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              src="https://ik.imagekit.io/j1fgksdwx/Derawar%20(6).png" 
              alt="Derawar Logo" 
              referrerPolicy="no-referrer"
              className="w-72 md:w-96 lg:w-[32rem] mb-2 object-contain transform-gpu"
            />
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-inter font-light tracking-[0.3em] text-sm md:text-base text-[var(--color-accent-muted)] uppercase"
          >
            Heritage Dining Experience
          </motion.p>
        </header>

        {/* Category Navigation (Horizontal Scroll) */}
        <div className="sticky top-0 z-40 w-auto mb-8 -mx-6 md:-mx-12 bg-[var(--color-bg-card)]/90 backdrop-blur-md border-y border-[var(--color-accent)]/20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative py-4 px-6 md:px-12"
          >
            {/* Fading edges for scroll indication */}
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[var(--color-bg-card)] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[var(--color-bg-card)] to-transparent z-10 pointer-events-none"></div>
            
            <div 
              ref={navRef}
              className="flex items-center gap-3 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] scroll-smooth relative z-0 px-4"
            >
              {menuData.map((section, idx) => {
                const isActive = activeCategory === section.category;
                return (
                  <a
                    key={idx}
                    href={`#${section.category.replace(/\s+/g, '-')}`}
                    data-category={section.category}
                    onClick={(e) => {
                      e.preventDefault();
                      isScrollingRef.current = true;
                      setActiveCategory(section.category);
                      const element = document.getElementById(section.category.replace(/\s+/g, '-'));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        // Fallback in case scroll event doesn't fire
                        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
                        scrollTimeoutRef.current = setTimeout(() => {
                          isScrollingRef.current = false;
                        }, 2000);
                      }
                    }}
                    className={`px-5 py-2 rounded-full border transition-all duration-300 font-cinzel text-xs md:text-sm tracking-widest whitespace-nowrap flex-shrink-0 ${
                      isActive 
                        ? 'bg-[var(--color-accent)] text-[var(--color-bg)] border-[var(--color-accent)] shadow-[0_0_15px_rgba(212,175,55,0.4)]' 
                        : 'border-[var(--color-accent)]/40 text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 shadow-[0_0_10px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.2)]'
                    }`}
                  >
                    {section.category}
                  </a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Menu Sections */}
        <main className="space-y-20">
          {menuData.map((section, idx) => (
            <section key={idx} id={section.category.replace(/\s+/g, '-')} className="relative pt-8 scroll-mt-32">
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center justify-center mb-12"
              >
                <Ornament />
                <div className="flex items-center justify-center mt-6">
                  <div className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent to-[var(--color-accent)] opacity-50"></div>
                  <h2 className="mx-6 font-cinzel text-4xl md:text-6xl text-[var(--color-accent)] tracking-[0.2em] uppercase text-glow text-center">
                    {section.category}
                  </h2>
                  <div className="w-12 md:w-24 h-px bg-gradient-to-l from-transparent to-[var(--color-accent)] opacity-50"></div>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 lg:gap-x-12 xl:gap-x-16 xl:gap-y-12">
                {section.items.map((item, itemIdx) => (
                  <motion.div 
                    key={itemIdx} 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: (itemIdx % 4) * 0.1 }}
                    className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 md:gap-6 group relative p-4 sm:p-6 -mx-4 sm:-mx-6 rounded-2xl transition-colors duration-500 hover:bg-[var(--color-accent)]/5 hover:shadow-[inset_0_0_30px_rgba(212,175,55,0.05)] transform-gpu"
                  >
                    {item.image && (
                      <div className="shrink-0 relative z-10">
                        <TiltImage src={item.image} alt={item.name} />
                      </div>
                    )}
                    
                      <div className="flex flex-col justify-center flex-grow w-full relative z-10">
                        <div className="flex flex-col xl:flex-row xl:items-baseline justify-between w-full mb-1 gap-1 xl:gap-4">
                          <motion.h3 
                            whileHover={{ scale: 1.02, color: "var(--color-accent)", originX: 0 }}
                            className="font-cormorant text-2xl md:text-3xl font-medium text-[var(--color-text-main)] transition-colors cursor-default flex items-center justify-center sm:justify-start gap-3"
                          >
                            <span className="text-[var(--color-accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm hidden sm:inline-block">✦</span>
                            {item.name}
                          </motion.h3>
                          
                          <span className="font-cinzel text-xl text-[var(--color-accent)] tracking-widest whitespace-nowrap xl:ml-4">
                            {item.price}
                          </span>
                        </div>
                        
                        <div className="h-px w-full bg-gradient-to-r from-[var(--color-accent-muted)] to-transparent opacity-30 mb-2"></div>
                        
                        <div className="mt-4 flex justify-center sm:justify-start">
                          <button
                            onClick={() => addToCart(item)}
                            className="px-4 py-1.5 border border-[var(--color-accent)]/50 text-[var(--color-accent)] rounded-full text-xs md:text-sm font-cinzel tracking-widest hover:bg-[var(--color-accent)] hover:text-[var(--color-bg-main)] transition-all duration-300 shadow-[0_0_10px_rgba(212,175,55,0.1)] hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                          >
                            Add to Cart
                          </button>
                        </div>
                      </div>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </main>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="mt-32 pt-16 pb-12 relative flex flex-col items-center"
        >
          {/* Elegant Divider */}
          <div className="w-full max-w-lg flex items-center justify-center mb-12 opacity-30">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent"></div>
            <div className="w-2 h-2 rotate-45 border border-[var(--color-accent)] absolute bg-[var(--color-bg-main)]"></div>
          </div>

          <div className="opacity-50">
            <Ornament />
          </div>

          {/* Resort ID Section */}
          <div className="mt-12 mb-6 flex flex-col items-center">
            <a href="https://instagram.com/derawar_resort_" target="_blank" rel="noopener noreferrer" className="group relative">
              <div className="absolute -inset-4 bg-[var(--color-accent)]/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex items-center gap-3 px-6 py-1 transition-all duration-500"
              >
                <Instagram strokeWidth={1} className="w-4 h-4 md:w-5 md:h-5 text-[var(--color-accent)] opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="font-cormorant font-light italic text-[var(--color-text-main)] text-xl md:text-2xl tracking-[0.15em] opacity-80 group-hover:opacity-100 group-hover:text-[var(--color-accent)] transition-all duration-500">
                  @derawar_resort_
                </span>
              </motion.div>
            </a>
          </div>

          {/* Design By Section */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-inter font-thin tracking-[0.4em] text-[var(--color-text-muted)] text-[8px] uppercase opacity-30">
              Design by
            </span>
            <a href="https://instagram.com/qreativemenus" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 opacity-40 hover:opacity-80 transition-opacity duration-500">
              <Instagram strokeWidth={1} className="w-3 h-3 text-[var(--color-accent)]" />
              <span className="font-inter font-thin tracking-[0.3em] text-[var(--color-accent)] text-[9px] uppercase">
                @qreativemenus
              </span>
            </a>
          </div>
        </motion.footer>

        </div>
      </div>

      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-[var(--color-accent)] text-[var(--color-bg-main)] p-4 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:scale-110 transition-transform duration-300"
      >
        <ShoppingCart size={24} />
        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold">
            {cartCount}
          </span>
        )}
      </button>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--color-bg-card)] z-[70] shadow-2xl border-l border-[var(--color-accent)]/30 flex flex-col"
            >
              <div className="p-6 border-b border-[var(--color-accent)]/20 flex justify-between items-center">
                <h2 className="font-cinzel text-2xl text-[var(--color-accent)]">Your Order</h2>
                <button onClick={() => setIsCartOpen(false)} className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors">
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cart.length === 0 ? (
                  <p className="text-center text-[var(--color-text-muted)] font-inter italic mt-10">Your cart is empty.</p>
                ) : (
                  cart.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <div>
                        <h4 className="font-cormorant text-lg text-[var(--color-text-main)]">{item.name}</h4>
                        <p className="font-inter text-sm text-[var(--color-accent)]">₹{item.price}</p>
                      </div>
                      <div className="flex items-center gap-3 border border-[var(--color-accent)]/30 rounded-full px-3 py-1">
                        <button onClick={() => updateQuantity(item.name, -1)} className="text-[var(--color-accent)] hover:text-white transition-colors"><Minus size={14} /></button>
                        <span className="font-inter text-sm w-4 text-center text-[var(--color-text-main)]">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.name, 1)} className="text-[var(--color-accent)] hover:text-white transition-colors"><Plus size={14} /></button>
                      </div>
                    </div>
                  ))
                )}
              </div>

              <div className="p-6 border-t border-[var(--color-accent)]/20 bg-[var(--color-bg-main)]/50">
                <div className="text-center p-4 border border-[var(--color-accent)]/30 rounded-xl bg-[var(--color-accent)]/5">
                  <p className="font-cormorant text-lg text-[var(--color-text-main)] italic">
                    Please review your selections.
                  </p>
                  <p className="font-inter text-sm text-[var(--color-accent-muted)] mt-2">
                    Our attentive staff will take your order shortly.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}
