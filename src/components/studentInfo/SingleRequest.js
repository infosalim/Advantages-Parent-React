import { Link } from 'react-router-dom';

const SingleRequest = ({ title, isTranscript, thumb, btnText }) => {
    return (
        <div className="single-students-request-content">
            <div className="st_single_action">
                <h5>{title}</h5>
                <div className="action_st_btn_img">
                    <img src={thumb} alt="images" />
                </div>
                <div className="action_st_btn_img">
                    <Link className="btn_style_1" to="#">{btnText}</Link>
                    {isTranscript ? <Link className="btn_style_2" to="#">Request Official Transcript</Link> : null}
                </div>
            </div>
        </div>
    );
};

export default SingleRequest;