import SingleRequest from './SingleRequest';

import transcript from '../../assets/images/parent/trans_icon.png';
import enrollment from '../../assets/images/parent/trans_icon_3.png';
import support from '../../assets/images/parent/trans_icon_4.png';
import record from '../../assets/images/parent/trans_icon_4.png';

const StudentRequest = () => {
    return (
        <div className="students-request-area">
            <div className="container">
                <div className="students-request-heading">
                    <p>Requests</p>
                </div>
                <div className="students-request-content">
                    <div className="row">
                        {/* <!-- single students request content --> */}
                        <div className="col-lg-4 col-md-6">
                            <SingleRequest
                                title='Request Transcript (Official and Unofficial)'
                                thumb={transcript}
                                isTranscript
                                btnText='View Unofficial Transcript'
                            />
                        </div>
                        {/* <!-- single students request content --> */}

                        {/* <!-- single students request content --> */}
                        <div className="col-lg-4 col-md-6">
                            <SingleRequest
                                title='Request Enrollment'
                                thumb={enrollment}
                                btnText='Request Enrollment'
                            />
                        </div>
                        {/* <!-- single students request content --> */}

                        {/* <!-- single students request content --> */}
                        <div className="col-lg-4 col-md-6">
                            <SingleRequest
                                title='Contact Support'
                                thumb={support}
                                btnText='Submit Support Ticket'
                            />
                        </div>
                        {/* <!-- single students request content --> */}

                        {/* <!-- single students request content --> */}
                        <div className="col-lg-4 col-md-6">
                            <SingleRequest
                                title='Upload Student Records'
                                thumb={record}
                                btnText='Submit Support Ticket'
                            />
                        </div>
                        {/* <!-- single students request content --> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentRequest;