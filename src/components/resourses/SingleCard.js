import { useState } from 'react';
import { Link } from 'react-router-dom';

import star from '../../assets/images/list-resource/star.png';
import base from '../../assets/images/list-resource/base.png';
import pdf from '../../assets/images/list-resource/pdf.png';
import more from '../../assets/images/learning/more.png';

const SingleCard = () => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className="dc_single_items">
            {/* <!-- dc single items design --> */}
            <div className="dc_check_star">
                <div className="list_check">
                    {/* <!-- Start Check box --> */}
                    <div className="mu_icon_header_checkbox">
                        <form>
                            <div className="mu-form-group">
                                <input type="checkbox" id="box_1" />
                                <label></label>
                            </div>
                        </form>
                    </div>
                    {/* <!-- End Check box --> */}
                    {/* <!-- start star design --> */}
                    <div className="li_star_design">
                        <Link to="#"><img src={star} alt="" /></Link>
                    </div>
                    {/* <!-- end star design --> */}
                </div>
            </div>
            {/* <!-- dc single items design --> */}

            <div className="dc_jackson_img_area">
                <div className="left_dc_img">
                    <img src={base} alt="" />
                </div>
                <div className="right_dc_img">
                    <Link to="#">Mrs. Jackson: <span>Environmental Science</span></Link>
                    <Link to="#"><img src={pdf} alt="" /><span>Student Science Welcome Document.pdf</span></Link>
                </div>
            </div>
            {/* <!-- dc single items design --> */}
            <div className="dc_describ_txt_area new-class">
                <div className="dc_new_button_add">
                    <button>Science</button>
                    <button>Environmental Science</button>
                    <button>Welcome Document</button>
                    <button>My Very Long Tag</button>
                    <button>Janelle</button>
                </div>
                <div className="dc_middle_txt new-class-add">
                    <Link to="#">New</Link>
                    <p>Student Science Welcome Document with…</p>
                </div>
            </div>
            {/* <!-- dc single items design --> */}
            <div className="right_dc_date_time">
                <Link to="#">02 - 17 - 2021</Link>
                <div className="dc_dots_area">
                    <button onClick={() => setDropdown(!dropdown)} className="dropdown-toggle shfocus" type="button" id="dropdownMenuButton11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="down-icon"><img src={more} alt="Images" /></div>
                    </button>

                    {dropdown ? <div className="dropdown-menu" aria-labelledby="dropdownMenuButton11">
                        <Link className="dropdown-item drop_as" to="#">Add Label</Link>
                        <Link className="dropdown-item drop_as" to="#">Launch Course</Link>
                        <Link className="dropdown-item drop_as" to="#">Download Document</Link>
                    </div> : null}
                </div>
            </div>
        </div>
    );
};

export default SingleCard;