import BreadCrumb from '../components/BreadCrumb';
import ProgressTrackingHeading from '../components/progress/ProgressTrackingHeading';
import FilterCard from '../components/progress/FilterCard';
import LearningPathChart from '../components/learningPath/LearningPathChart';

const LearningPath = () => {
    return (
        <div>
            <BreadCrumb title='Progress Tracking' />
            <ProgressTrackingHeading/>
            <FilterCard/>
            <LearningPathChart/>
        </div>
    );
};

export default LearningPath;