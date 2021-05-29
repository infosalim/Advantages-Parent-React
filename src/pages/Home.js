import BreadCrumb from '../components/BreadCrumb';
import Progress from '../components/home/Progress';
import Upcoming from '../components/home/Upcoming';

const Home = () => {
    return (
        <div>
            <BreadCrumb title='Home' />
            <Progress/>
            <Upcoming/>
        </div>
    );
};

export default Home;