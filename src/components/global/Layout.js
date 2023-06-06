import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children,isFixed}) => (
  <div>
    <Navbar fix={isFixed} />
    {children}
    <Footer />
  </div>
);

export default Layout;
