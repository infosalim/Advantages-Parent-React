import BreadCrumb from '../components/BreadCrumb';
import ProgressTrackingHeading from '../components/progress/ProgressTrackingHeading';

const ProgressTracking = () => {
    return (
        <div className='new-project-porgress-traking'>
            <BreadCrumb title='Progress Tracking' />
            <ProgressTrackingHeading/>
        </div>
    );
};

export default ProgressTracking;