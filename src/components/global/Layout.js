import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => (
  <div className="relative">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
