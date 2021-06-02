import BreadCrumb from '../components/BreadCrumb';

import MyScheduleTable from '../components/mySchedule/MyScheduleTable';
import ScheduleChart from '../components/mySchedule/ScheduleChart';
import SliderArea from '../components/mySchedule/SliderArea';

const MySchedule = () => {
    return (
        <div>
            <BreadCrumb title='Calendar' />
            <SliderArea />
            <MyScheduleTable />
            <ScheduleChart />
        </div>
    );
};

export default MySchedule;