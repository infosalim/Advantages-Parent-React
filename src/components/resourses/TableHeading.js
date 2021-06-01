import {Link} from 'react-router-dom';

import star from '../../assets/images/list-resource/star.png';
import upArrow from '../../assets/images/list-resource/ic_up.png';
import downArrow from '../../assets/images/list-resource/ic_down.png';

const TableHeading = () => {
    return (
        <section className="list_srtable_main_area">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="list_check_sortable_main">
                            <div className="list_top_check">
                                <div className="list_check">
                                    {/* <!-- Start Check box --> */}
                                    <div className="mu_icon_header_checkbox">
                                        <form>
                                            <div className="mu-form-group">
                                                <input type="checkbox" id="items_1"/>
                                                <label></label>
                                            </div>
                                        </form>
                                    </div>
                                    {/* <!-- End Check box --> */}
                                    {/* <!-- start star design --> */}
                                    <div className="li_star_design">
                                        <Link to="#"><img src={star} alt=""/></Link>
                                    </div>
                                    {/* <!-- end star design --> */}
                                </div>
                            </div>
                            {/* <!-- single arrow sorable items --> */}
                            <div className="li_sortable_source_area">
                                <div className="left_li_sortable_design">
                                    <div className="single_sortable_design">
                                        <h4>Format</h4>
                                        <div className="li_arrow_sort">
                                            <button href="#"><img src={upArrow} alt=""/></button>
                                            <button href="#"><img src={downArrow} alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single arrow sorable items --> */}
                            <div className="li_sortable_source_middle_area">
                                <div className="left_li_sortable_design">
                                    <div className="single_sortable_design">
                                        <h4>Description</h4>
                                        <div className="li_arrow_sort">
                                            <button href="#"><img src={upArrow} alt=""/></button>
                                            <button href="#"><img src={downArrow} alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- single arrow sorable items --> */}
                            <div className="li_sortable_source_right_area">
                                <div className="left_li_sortable_design">
                                    <div className="single_sortable_design">
                                        <h4>Date added</h4>
                                        <div className="li_arrow_sort">
                                            <button href="#"><img src={upArrow} alt=""/></button>
                                            <button href="#"><img src={downArrow} alt=""/></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TableHeading;