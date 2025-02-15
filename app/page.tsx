// Home
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Home } from '@/components/home';

const page = () => {
  return (
    <>
      <div className="h-full">
        <Navbar />

        <Home />

        <Footer />
      </div>
    </>
  );
};

export default page;
