import BreadCrumb from '../components/BreadCrumb';
import ProgressTrackingHeading from '../components/progress/ProgressTrackingHeading';
import FilterCard from '../components/progress/FilterCard';
import ProgressTable from '../components/progress/ProgressTable';

const ProgressTracking = () => {
    return (
        <div className='new-project-porgress-traking'>
            <BreadCrumb title='Progress Tracking' />
            <ProgressTrackingHeading/>
            <FilterCard/>
            <ProgressTable/>
        </div>
    );
};

export default ProgressTracking;