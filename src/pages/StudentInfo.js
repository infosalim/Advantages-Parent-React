import BreadCrumb from '../components/BreadCrumb';
import StudentInformation from '../components/studentInfo/StudentInformation';
import StudentRequest from '../components/studentInfo/StudentRequest';

const StudentInfo = () => {
    return (
        <div>
            <BreadCrumb title='Janelle Marshall Information' />
            <StudentInformation/>
            <StudentRequest/>
        </div>
    );
};

export default StudentInfo;