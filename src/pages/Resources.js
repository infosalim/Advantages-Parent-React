import BreadCrumb from '../components/BreadCrumb';
import FilterCard from '../components/progress/FilterCard';
import FilterTop from '../components/resourses/FilterTop';
import Table from '../components/resourses/Table';
import TableHeading from '../components/resourses/TableHeading';

const Home = () => {
    return (
        <div>
            <BreadCrumb title='Resources' />
            <FilterTop/>
            <FilterCard/>
            <TableHeading/>
            <Table/>
        </div>
    );
};

export default Home;