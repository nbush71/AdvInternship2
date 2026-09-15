import Navbar from '../src/components/Navbar';
import Landing from '../src/components/Landing';
import Features from '../src/components/Features';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 min-h-screen items-center justify-center font-sans">
      <Navbar />
      <main className="flex-1 p-6">
        <div className="flex items-center justify-center py-8">
          <Landing />
        </div>
        <div className="flex items-center justify-center py-8">
          <Features />
        </div>
      </main>
      
    </div>
  );
}
