import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatBox from '../components/chat/ChatBox';

const Layout = ({ children }) => {
    return (

        <div>
            <ChatBox />
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;