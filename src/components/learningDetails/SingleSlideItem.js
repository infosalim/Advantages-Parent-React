import { Link } from 'react-router-dom';

import dots from '../../assets/images/learning/dotted.png';

const SingleSlideItem = ({
    addedDate,
    dueDate,
    title,
    details,
    instructor,
    subject,
    instructorThumb,
    cardThumb
}) => {
    return (
        <div className="ra_resources_slider_area_single_main">
            <div className="ra_resources_slider_area_top">
                <div className="ra_resources_slider_area_top_single">
                    <ul>
                        <li>Date added: {addedDate}</li>
                        <li>Due date: {dueDate}</li>
                    </ul>
                    <img src={cardThumb} alt="photos" />
                </div>
                <div className="ra_resources_slider_area_middle">
                    <h2>{title}</h2>
                    <p>{details}</p>
                </div>
                <div className="ra_resources_slider_pdf">
                    <Link to="#">PDF</Link>
                </div>
            </div>

            <div className="ra_resources_slider_area_butttom">
                <div className="ra_resources_slider_area_butttom_man">
                    <img src={instructorThumb} alt='' />
                    <div className="ra_single_man">
                        <h6>{instructor}</h6>
                        <p>{subject}</p>
                    </div>
                </div>
                <div>
                    <img src={dots} alt="photos" />
                </div>
            </div>
        </div>
    );
};

export default SingleSlideItem;