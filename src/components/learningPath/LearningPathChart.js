import React from 'react';

const LearningPathChart = () => {
    return (
        <div className="ju_progress_tracking_main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ju_progress_tracking_section_full">
                                <div className="ju_progress_tracking_section">
                                    <div className="ju_pro_heading_area">
                                        <ul className="card-header bg_header_area" id="headingOne">
                                            <li>Subject</li>
                                            <li>9</li>
                                            <li>10</li>
                                            <li>11</li>
                                            <li>12</li>
                                            <li>Status</li>
                                        </ul>
                                    </div>

                                    <div className="ju_table_content_area" id="accordion">
                                        {/* <!-- 1.single items of table Start --> */}
                                        <div className="ju_single_table_content_design">
                                            <ul data-toggle="collapse" data-target="#demo1" id="headingOne" className="card-header rjdesign active">
                                                <li className="ju_first">
                                                    <i className="fas fa-chevron-down"></i>
                                                    <div className="box_cmt"></div>
                                                    Science
                                                </li>
                                                <li className="text-center"><span className="adil">Earth Science 101</span></li>
                                                <li className="text-center"><span className="adil">Earth Science 202</span></li>
                                                <li className="text-center"><span className="adil">Environmental Science 304</span></li>
                                                <li className="text-center"><span className="adil">Environmental Science</span></li>
                                                <li className="ju_first text-center text_dft">On track</li>
                                                <div className="ju_posional_progress adil">
                                                    <div className="myclassroom-single-left-cross-progress">
                                                        <div className="barra-nivel" data-nivel="84%" style={{width: '84%'}}></div>
                                                    </div>
                                                </div>
                                            </ul>
                                            <div className="ju_tabcontent_main_area show collapse" id="demo1">
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Earth Science 101</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Earth Science 102</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Environmental Science 304</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Environmental Science</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="25%" style={{width: '25%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">In-progress</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- 1.single items of table End --> */}

                                        {/* <!-- 2.single items of table Start --> */}
                                        <div className="ju_single_table_content_design">
                                            <ul data-toggle="collapse" data-target="#collapseTwo" id="headingTwo" className="card-header rjdesign collapsed">
                                                <li className="ju_first">
                                                    <i className="fas fa-chevron-down"></i>
                                                    <div className="box_cmt box_tb_items1"></div>
                                                    Techonology
                                                </li>
                                                <li className="text-center"><span className="adil">Intro to Computers</span></li>
                                                <li className="text-center"><span className="adil">HTML Beginner</span></li>
                                                <li className="text-center"><span className="adil">Website Management 101</span></li>
                                                <li className="text-center"><span className="adil">Human Factors</span></li>
                                                <li className="ju_first text_dft">On track</li>
                                                <div className="ju_posional_progress adil">
                                                    <div className="myclassroom-single-left-cross-progress">
                                                        <div className="barra-nivel" data-nivel="84%" style={{width: '84%'}}></div>
                                                    </div>
                                                </div>
                                            </ul>
                                            <div id="collapseTwo" className="collapse">
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Intro to Computers</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>HTML Beginner</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Website Management 101</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Human Factors</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="25%" style={{width: '25%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">On track</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- 2.single items of table End --> */}

                                        {/* <!-- 3.single items of table Start --> */}
                                        <div className="ju_single_table_content_design">
                                            <ul data-toggle="collapse" data-target="#collapseThree" id="headingTwo" className="card-header rjdesign">
                                                <li className="ju_first">
                                                    <i className="fas fa-chevron-down"></i>
                                                    <div className="box_cmt box_tb_items2"></div>
                                                    Math
                                                </li>
                                                <li className="text-center"><span className="adil">Geometry 101</span></li>
                                                <li className="text-center"><span className="adil">Geometry 202</span></li>
                                                <li className="text-center"><span className="">Geometry 303</span></li>
                                                <li className="text-center"><span className="adil">Pre-Calculus</span></li>
                                                <li className="ju_first text_dft">On track</li>
                                                <div className="ju_posional_progress adil">
                                                    <div className="myclassroom-single-left-cross-progress">
                                                        <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                    </div>
                                                </div>
                                            </ul>
                                            <div id="collapseThree" className="collapse">
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Geometry 101</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Geometry 202</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Geometry 303</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Pre-Calculus</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="20%" style={{width: '20%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">On track</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- 3.single items of table Start --> */}

                                        {/* <!-- 4.single items of table Start --> */}
                                        <div className="ju_single_table_content_design">
                                            <ul data-toggle="collapse" data-target="#collapseFour" id="headingTwo" className="card-header rjdesign">
                                                <li className="ju_first">
                                                    <i className="fas fa-chevron-down"></i>
                                                    <div className="box_cmt box_tb_items3"></div>
                                                    Fine Art
                                                </li>
                                                <li className="text-center"><span className="adil">Art History 101</span></li>
                                                <li className="text-center"><span className="adil">Theater Design</span></li>
                                                <li className="text-center"><span className="adil">Art Through the Ages</span></li>
                                                <li className="text-center"><span className="adil">Art History 202</span></li>
                                                <li className="ju_first text_dft">On track</li>
                                                <div className="ju_posional_progress adil">
                                                    <div className="myclassroom-single-left-cross-progress">
                                                        <div className="barra-nivel" data-nivel="88%" style={{width: '88%'}}></div>
                                                    </div>
                                                </div>
                                            </ul>
                                            <div id="collapseFour" className="collapse">
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Art History 101</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Theater Design</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Art Through the Ages</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Art History 202</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="45%" style={{width: '45%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">On track</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- 4.single items of table Start --> */}

                                        {/* <!-- 5.single items of table Start --> */}
                                        <div className="ju_single_table_content_design">
                                            <ul data-toggle="collapse" data-target="#collapseFive" id="headingTwo" className="card-header rjdesign">
                                                <li className="ju_first">
                                                    <i className="fas fa-chevron-down"></i>
                                                    <div className="box_cmt box_tb_items4"></div>
                                                    Social Studies
                                                </li>
                                                <li className="text-center"><span className="adil">US History</span></li>
                                                <li className="text-center"><span className="adil">World History 202</span></li>
                                                <li className="text-center"><span className="adil">Anthropology</span></li>
                                                <li className="text-center"><span className="adil">People, Places, and Environments</span></li>
                                                <li className="ju_first text_dft">On track</li>
                                                <div className="ju_posional_progress adil">
                                                    <div className="myclassroom-single-left-cross-progress">
                                                        <div className="barra-nivel" data-nivel="90%" style={{width: '90%'}}></div>
                                                    </div>
                                                </div>
                                            </ul>
                                            <div id="collapseFive" className="collapse">
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>US History</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>World History 202</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Anthropology</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>People, Places, and Environments</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="50%" style={{width: '50%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">On track</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- 5.single items of table Start --> */}

                                        {/* <!-- 6.single items of table Start --> */}
                                        <div className="ju_single_table_content_design">
                                            <ul data-toggle="collapse" data-target="#collapseSix" id="headingTwo" className="card-header rjdesign">
                                                <li className="ju_first tide_here">
                                                    <i className="fas fa-chevron-down"></i>
                                                    <div className="box_cmt box_tb_items5"></div>
                                                    Foreign Language
                                                </li>
                                                <li className="text-center"><span className="adil">Intro to Foreign Language</span></li>
                                                <li className="text-center"><span className="adil">Spanish 01</span></li>
                                                <li className="text-center"><span className="adil">Spanish 02</span></li>
                                                <li className="text-center"><span className="adil">Spanish 03</span></li>
                                                <li className="ju_first text_dft">On track</li>
                                                <div className="ju_posional_progress adil">
                                                    <div className="myclassroom-single-left-cross-progress">
                                                        <div className="barra-nivel" data-nivel="85%" style={{width: '85%'}}></div>
                                                    </div>
                                                </div>
                                            </ul>
                                            <div id="collapseSix" className="collapse">
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Intro to Foreign Language</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Spanish 01</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Spanish 02</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="80%" style={{width: '80%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">Complete</li>
                                                    </ul>
                                                </div>
                                                <div className="ui_single">
                                                    <ul>
                                                        <li>Spanish 03</li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress hidden_basic">
                                                                <div className="barra-nivel" data-nivel="100%" style={{width: '100%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="myclassroom-single-left-cross-progress">
                                                                <div className="barra-nivel" data-nivel="45%" style={{width: '45%'}}></div>
                                                            </div>
                                                        </li>
                                                        <li className="ju_first text_dft">On track</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- 6.single items of table Start --> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default LearningPathChart;