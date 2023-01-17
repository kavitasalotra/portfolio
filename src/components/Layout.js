import Footer from './global/Footer';
import Navbar from './global/Navbar';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
