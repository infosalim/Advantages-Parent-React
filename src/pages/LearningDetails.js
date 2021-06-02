import BreadCrumb from '../components/BreadCrumb';
import LearningDetailsCourse from '../components/learningDetails/LearningDetailsCourse';
import LearningDetailCard from '../components/learningDetails/LearningDetailCard';
import CourseProgress from '../components/learningDetails/CourseProgress';
import SliderArea from '../components/learningDetails/SliderArea';
import Calender from '../components/learningDetails/Calender';

const LearningDetails = () => {
    return (
        <div>
            <BreadCrumb title='Progress Tracking / Environmental Science' />
            <LearningDetailsCourse />
            <LearningDetailCard />
            <SliderArea />
            <CourseProgress />
            <Calender />
        </div>
    );
};

export default LearningDetails;