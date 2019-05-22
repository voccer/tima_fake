/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import PropTypes from 'prop-types'
import './Section3.scss'
import Img22 from '../../image/bg-img/22.jpg';
import Img23 from '../../image/bg-img/23.jpg';
import Img24 from '../../image/bg-img/24.jpg';
import Img10 from '../../image/bg-img/10.jpg';
import Img11 from '../../image/bg-img/11.jpg';
import Img12 from '../../image/bg-img/12.jpg';
import pencil from '../../image/core-img/pencil.png';
import calendar from '../../image/core-img/calendar.png';
function Section3(props) {
    return (
        <section class="news-area section-padding-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">

                    <div class="single-blog-area mb-70">
                        <div class="blog-thumbnail">
                            <a href="#"><img src={Img22} alt=""/></a>
                        </div>
                        <div class="blog-content">
                            <span>Tháng tư 1, 2019</span>
                            <a href="#" class="post-title">Vay tiền trực tuyến</a>
                            <div class="blog-meta">
                                <a href="#" class="post-author"><img src="img/core-img/pencil.png" alt=""/> Tiến
                                    Đạt</a>
                                <a href="#" class="post-date"><img src="img/core-img/calendar.png" alt=""/> Tháng tư
                                    1</a>
                            </div>
                            <p>Hạn mức lên đến 600 triệu đồng. Miễn lãi lên đến 55 ngày. Hoàn tiền thêm đến 1 triệu và
                                cơ hội nhận chuyến du lịch bằng du thuyền vòng quanh Châu Á. Mở thẻ ngay hôm nay!</p>
                        </div>
                    </div>

                    <div class="single-blog-area mb-70">
                        <div class="blog-thumbnail">
                            <a href="#"><img src={Img23} alt=""/></a>
                        </div>
                        <div class="blog-content">
                            <span>Tháng ba 1, 2019</span>
                            <a href="#" class="post-title">Kỉ niệm ngày thành lập</a>
                            <div class="blog-meta">
                                <a href="#" class="post-author"><img src="img/core-img/pencil.png" alt=""/> Cao
                                    Cảnh</a>
                                <a href="#" class="post-date"><img src="img/core-img/calendar.png" alt=""/> Tháng ba
                                    1</a>
                            </div>
                            <p>Vào ngày 03.08.2018, tại Tòa nhà Almaz Long Biên đã diễn ra chương trình nội bộ của Tập
                                đoàn, chương trình này nằm trong chuỗi những sự kiện kỷ niệm 25 năm thành lập
                                Tập đoàn.</p>
                        </div>
                    </div>

                    <div class="single-blog-area mb-70">
                        <div class="blog-thumbnail">
                            <a href="#"><img src={Img24} alt=""/></a>
                        </div>
                        <div class="blog-content">
                            <span>Tháng hai 1, 2019</span>
                            <a href="#" class="post-title">10 kĩ năng để có khoản vay phù hợp</a>
                            <div class="blog-meta">
                                <a href="#" class="post-author"><img src="img/core-img/pencil.png" alt=""/> Trọng
                                    Đức</a>
                                <a href="#" class="post-date"><img src="img/core-img/calendar.png" alt=""/> Tháng hai
                                    1</a>
                            </div>
                            <p>Dưới đây là 10 kỹ năng mà bạn nên cải thiện nếu muốn được thăng tiến nhanh ... Vậy kỹ
                                năng sáng tạo trong công việc do chính bạn nắm bắt và khơi nguồn.</p>
                        </div>
                    </div>

                    <nav aria-label="Page navigation">
                        <ul class="pagination">
                            <li class="page-item active"><a class="page-link" href="#">01</a></li>
                            <li class="page-item"><a class="page-link" href="#">02</a></li>
                            <li class="page-item"><a class="page-link" href="#">03</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="col-sm-9 col-md-6 col-lg-4">
                    <div class="sidebar-area">

                        <div class="single-widget-area search-widget">
                            <form action="#" method="post">
                                <input type="search" name="search" placeholder="Search"/>
                                <button type="submit">Tìm kiếm</button>
                            </form>
                        </div>

                        <div class="single-widget-area tabs-widget">
                            <div class="widget-heading">
                                <div class="line"></div>
                                <h4>Tin tức khác</h4>
                            </div>

                            <div class="credit-tabs-content">
                                <ul class="nav nav-tabs" id="myTab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link" id="tab--1" data-toggle="tab" href="#tab1" role="tab"
                                            aria-controls="tab1" aria-selected="false">Mới nhất</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link active" id="tab--2" data-toggle="tab" href="#tab2" role="tab"
                                            aria-controls="tab2" aria-selected="false">Phổ biến</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" id="tab--3" data-toggle="tab" href="#tab3" role="tab"
                                            aria-controls="tab3" aria-selected="true">Bình luận</a>
                                    </li>
                                </ul>

                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade" id="tab1" role="tabpanel" aria-labelledby="tab--1">
                                        <div class="credit-tab-content">
                                            <div class="single-news-area d-flex align-items-center">
                                                <div class="news-thumbnail">
                                                    <img src={Img10} alt=""/>
                                                </div>
                                                <div class="news-content">
                                                    <span>Tháng tư 19, 2019</span>
                                                    <a href="#">Vay tiền trực tuyến</a>
                                                    <div class="news-meta">
                                                        <a href="#" class="post-author"><img
                                                                src="img/core-img/pencil.png" alt=""/> Tiến
                                                            Đạt</a>
                                                        <a href="#" class="post-date"><img
                                                                src="img/core-img/calendar.png" alt=""/> Tháng
                                                            tư
                                                            1</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="single-news-area d-flex align-items-center">
                                                <div class="news-thumbnail">
                                                    <img src={Img11} alt=""/>
                                                </div>
                                                <div class="news-content">
                                                    <span>Tháng ba 1, 2019</span>
                                                    <a href="#">Kỉ niệm ngày thành lập</a>
                                                    <div class="news-meta">
                                                        <a href="#" class="post-author"><img
                                                                src="img/core-img/pencil.png" alt=""/> Cao
                                                            Cảnh</a>
                                                        <a href="#" class="post-date"><img
                                                                src="img/core-img/calendar.png" alt=""/> Tháng
                                                            ba
                                                            1</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="single-news-area d-flex align-items-center">
                                                <div class="news-thumbnail">
                                                    <img src={Img12} alt=""/>
                                                </div>
                                                <div class="news-content">
                                                    <span>Tháng hai 1, 2019</span>
                                                    <a href="#">10 kĩ năng để có khoản vay phù hợp</a>
                                                    <div class="news-meta">
                                                        <a href="#" class="post-author"><img
                                                                src="img/core-img/pencil.png" alt=""/> Trọng
                                                            Đức</a>
                                                        <a href="#" class="post-date"><img
                                                                src="img/core-img/calendar.png" alt=""/> Tháng
                                                            hai
                                                            1</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="tab-pane fade show active" id="tab2" role="tabpanel"
                                        aria-labelledby="tab--2">
                                        <div class="credit-tab-content">
                                            <div class="single-news-area d-flex align-items-center">
                                                <div class="news-thumbnail">
                                                    <img src={Img10} alt=""/>
                                                </div>
                                                <div class="news-content">
                                                    <span>Tháng tư 19, 2019</span>
                                                    <a href="#">Vay tiền trực tuyến</a>
                                                    <div class="news-meta">
                                                        <a href="#" class="post-author"><img
                                                                src="img/core-img/pencil.png" alt=""/> Tiến
                                                            Đạt</a>
                                                        <a href="#" class="post-date"><img
                                                                src="img/core-img/calendar.png" alt=""/> Tháng
                                                            tư
                                                            1</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="single-news-area d-flex align-items-center">
                                                <div class="news-thumbnail">
                                                    <img src={Img11} alt=""/>
                                                </div>
                                                <div class="news-content">
                                                    <span>Tháng ba 1, 2019</span>
                                                    <a href="#">Kỉ niệm ngày thành lập</a>
                                                    <div class="news-meta">
                                                        <a href="#" class="post-author"><img
                                                                src="img/core-img/pencil.png" alt=""/> Cao
                                                            Cảnh</a>
                                                        <a href="#" class="post-date"><img
                                                                src="img/core-img/calendar.png" alt=""/> Tháng
                                                            ba
                                                            1</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="single-news-area d-flex align-items-center">
                                                <div class="news-thumbnail">
                                                    <img src={Img12} alt=""/>
                                                </div>
                                                <div class="news-content">
                                                    <span>Tháng hai 1, 2019</span>
                                                    <a href="#">10 kĩ năng để có khoản vay phù hợp</a>
                                                    <div class="news-meta">
                                                        <a href="#" class="post-author"><img
                                                                src="img/core-img/pencil.png" alt=""/> Trọng
                                                            Đức</a>
                                                        <a href="#" class="post-date"><img
                                                                src="img/core-img/calendar.png" alt=""/> Tháng
                                                            hai
                                                            1</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="tab--3">
                                        <div class="credit-tab-content">
                                            <div class="single-news-area d-flex align-items-center">
                                                <div class="news-thumbnail">
                                                    <img src={Img10} alt=""/>
                                                </div>
                                                <div class="news-content">
                                                    <span>Tháng tư 19, 2019</span>
                                                    <a href="#">Vay tiền trực tuyến</a>
                                                    <div class="news-meta">
                                                        <a href="#" class="post-author"><img
                                                                src="img/core-img/pencil.png" alt=""/> Tiến
                                                            Đạt</a>
                                                        <a href="#" class="post-date"><img
                                                                src="img/core-img/calendar.png" alt=""/> Tháng
                                                            tư
                                                            1</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="single-news-area d-flex align-items-center">
                                                <div class="news-thumbnail">
                                                    <img src={Img11} alt=""/>
                                                </div>
                                                <div class="news-content">
                                                    <span>Tháng ba 1, 2019</span>
                                                    <a href="#">Kỉ niệm ngày thành lập</a>
                                                    <div class="news-meta">
                                                        <a href="#" class="post-author"><img
                                                                src="img/core-img/pencil.png" alt=""/> Cao
                                                            Cảnh</a>
                                                        <a href="#" class="post-date"><img
                                                                src="img/core-img/calendar.png" alt=""/> Tháng
                                                            ba
                                                            1</a>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="single-news-area d-flex align-items-center">
                                                <div class="news-thumbnail">
                                                    <img src={Img12} alt=""/>
                                                </div>
                                                <div class="news-content">
                                                    <span>Tháng hai 1, 2019</span>
                                                    <a href="#">10 kĩ năng để có khoản vay phù hợp</a>
                                                    <div class="news-meta">
                                                        <a href="#" class="post-author"><img
                                                                src="img/core-img/pencil.png" alt=""/> Trọng
                                                            Đức</a>
                                                        <a href="#" class="post-date"><img
                                                                src="img/core-img/calendar.png" alt=""/> Tháng
                                                            hai
                                                            1</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

Section3.propTypes = {

}

export default Section3

