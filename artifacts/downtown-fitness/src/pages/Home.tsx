import { useState, useEffect, lazy, Suspense } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhyUs from '@/components/WhyUs';
import Membership from '@/components/Membership';
import Facilities from '@/components/Facilities';
import People from '@/components/People';
import Footer from '@/components/Footer';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import FloatingCTA from '@/components/FloatingCTA';

const Gallery = lazy(() => import('@/components/Gallery'));
const BMICalculator = lazy(() => import('@/components/BMICalculator'));
const FAQ = lazy(() => import('@/components/FAQ'));
const Contact = lazy(() => import('@/components/Contact'));

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isLoading={loading} />
      <div className="film-grain" />
      {!loading && (
        <div className="bg-background min-h-screen text-foreground">
          <ScrollProgress />
          <Navbar />
          <main>
            <Hero />
            <About />
            <WhyUs />
            <Membership />
            <Facilities />
            <People />
            <Suspense fallback={<div className="h-screen" />}><Gallery /></Suspense>
            <Suspense fallback={<div className="h-screen" />}><BMICalculator /></Suspense>
            <Suspense fallback={<div className="h-screen" />}><FAQ /></Suspense>
            <Suspense fallback={<div className="h-screen" />}><Contact /></Suspense>
          </main>
          <Footer />
          <BackToTop />
          <FloatingCTA />
        </div>
      )}
    </>
  );
}
