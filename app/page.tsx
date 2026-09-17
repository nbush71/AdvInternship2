import Navbar from '../src/components/Navbar';
import Landing from '../src/components/Landing';
import Features from '../src/components/Features';
import Reviews from '../src/components/Reviews';
import Numbers from '../src/components/Numbers';
import Footer from '../src/components/Footer';

export default function Home() {
  return (
    <div className="grid min-h-screen grid-cols-1 items-center justify-center font-sans">
      <Navbar />
      <main className="flex-1 px-3 py-4 md:px-6 md:py-6">
        <div className="flex items-center justify-center py-4 md:py-8">
          <Landing />
        </div>
        <div className="flex items-center justify-center py-4 md:py-8">
          <Features />
        </div>
        <div className="flex items-center justify-center py-4 md:py-8">
          <Reviews />
        </div>
        <div className="flex items-center justify-center py-4 md:py-8">
          <Numbers />
        </div>
        <div className="flex items-center justify-center py-4 md:py-8">
          <Footer />
        </div>
      </main>
    </div>
  );
}
