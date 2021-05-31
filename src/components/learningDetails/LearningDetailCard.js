import React from 'react';

import progressBg1 from '../../assets/images/learning/bg-progress1.png'
import progressBg2 from '../../assets/images/learning/bg-progress2.png'
import progressBg3 from '../../assets/images/learning/bg-progress3.png'
import progressBg4 from '../../assets/images/learning/bg-progress4.png'

const LearningDetailCard = () => {
    return (
        <div className="ra_repetable_area">
            <div className="container">
                <div className="top-progress-area">
                    {/* <!-- start single top progress area --> */}
                    <div className="single-top-progress-area" style={{backgroundImage: `url('${progressBg1}')`}}>
                        <div className="single-top-progress-heading-text">
                            <p>Activities Complete</p>
                        </div>
                        <div className="single-top-progress-count-text">
                            <div className="single-top-pera-count">
                                <h1 className="counter">4</h1>
                            </div>
                            <h5>activities complete</h5>
                        </div>
                    </div>
                    {/* <!-- end single top progress area --> */}

                    {/* <!-- start single top progress area --> */}
                    <div className="single-top-progress-area" style={{backgroundImage: `url('${progressBg2}')`}}>
                        <div className="single-top-progress-heading-text">
                            <p>Assignments Due</p>
                        </div>
                        <div className="single-top-progress-count-text">
                            <div className="single-top-pera-count">
                                <h1 className="counter">3</h1>
                            </div>
                            <h5>assignments</h5>
                        </div>
                    </div>
                    {/* <!-- end single top progress area --> */}

                    {/* <!-- start single top progress area --> */}
                    <div className="single-top-progress-area" style={{backgroundImage: `url('${progressBg3}')`}}>
                        <div className="single-top-progress-heading-text">
                            <p>Current Grade</p>
                        </div>
                        <div className="single-top-progress-last-text">
                            <div className="single-top-progress-count-text">
                                <h1>B+</h1>
                                <h5>(89%)</h5>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end single top progress area --> */}

                    {/* <!-- start single top progress area --> */}
                    <div className="single-top-progress-area single-top-progress-area_ex" style={{backgroundImage: `url('${progressBg4}')`}}>
                        <div className="single-top-progress-heading-text">
                            <p>Average weekly session</p>
                        </div>
                        <div className="single-top-progress-last-text">
                            <div className="single-top-progress-count-text">
                                <h5>2 <span> hours </span> 35 <span>minutes</span></h5>
                            </div>
                            <div className="single-top-progress-count-text single-top-progress-count-text_ex">
                                <h5>+2.5%</h5>
                            </div>
                        </div>
                    </div>
                    {/* <!-- end single top progress area --> */}
                </div>
            </div>
        </div>
    );
};

export default LearningDetailCard;