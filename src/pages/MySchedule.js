import BreadCrumb from '../components/BreadCrumb';

import MyScheduleTable from '../components/mySchedule/MyScheduleTable';
import ScheduleChart from '../components/mySchedule/ScheduleChart';

const MySchedule = () => {
    return (
        <div>
            <BreadCrumb title='Calendar' />
            <MyScheduleTable />
            <ScheduleChart />
        </div>
    );
};

export default MySchedule;