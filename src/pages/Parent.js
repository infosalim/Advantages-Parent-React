import BreadCrumb from '../components/BreadCrumb';
import ParentCard from '../components/parent/ParentCard';

const Parent = () => {
    return (
        <div>
            <BreadCrumb title='Profile Page' />
            <ParentCard />
        </div>
    );
};

export default Parent;