/* eslint-disable jsx-a11y/role-has-required-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { formatDate, formatHours } from '../utils/formatTime';
import { Package } from '../utils/getPackage';
import { getCities, getDistricts } from '../utils/getVNdata';
import Modal from 'react-responsive-modal';
import OverviewlPost from './OverviewlPost';
const Cities = getCities();
const TableData = props => {
  const { posts, title, purchasePost, history, profile } = props;
  const [isShow, setIsShow] = useState(false);
  const [postModal, setPostModal] = useState(null);
  function handleOpenModal(post) {
    setIsShow(true);
    setPostModal(post);
  }
  function handleCloseModal() {
    setIsShow(false);
  }

  return (
    <div className="tm-dtcv bg-white border border-gray p-3 px-md-5 pb-md-5 pt-md-4">
      <Modal open={isShow} onClose={() => handleCloseModal()} center>
        <OverviewlPost
          history={history}
          profile={profile}
          purchasePost={purchasePost}
          handleCloseModal={handleCloseModal}
          post={postModal}
        />
      </Modal>
      <h2 className="text-uppercase fs-16 fw-6 mb-0">{title}</h2>

      <hr className="mb-3" />

      <div className="row gutter-2 gutter-lg-3 mb-4">
        <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
          <span
            className="select2 select2-container select2-container--bootstrap"
            dir="ltr"
            style={{ width: '249.5px' }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex="0"
                aria-labelledby="select2-cbPrice-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-cbPrice-container"
                  title="Đơn phù hợp với bạn"
                >
                  Đơn phù hợp với bạn
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation" />
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true" />
          </span>
          <select
            className="form-control border-primary rounded-0 fs-15 form-control-default select2-hidden-accessible"
            id="cbPrice"
            tabIndex="-1"
            aria-hidden="true"
          >
            <option value="0">Tất cả</option>
            <option value="1">Miễn phí</option>
            <option value="2">Có phí</option>
            <option value="3">Đơn phù hợp với bạn</option>
            <option value="4">--- Đã xem</option>
            <option value="5">--- Chưa xem</option>
          </select>
        </div>

        <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
          <span
            className="select2 select2-container select2-container--bootstrap"
            dir="ltr"
            style={{ width: '249.5px' }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex="0"
                aria-labelledby="select2-cbProduct-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-cbProduct-container"
                  title="Tất cả"
                >
                  Tất cả
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation" />
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true" />
          </span>
          <select
            className="form-control border-primary rounded-0 fs-15 form-control-default select2-hidden-accessible"
            id="cbProduct"
            tabIndex="-1"
            aria-hidden="true"
          >
            <option value="-1">Tất cả</option>
          </select>
        </div>

        <div className="col-md-3 col-sm-6 mb-3 mb-sm-0">
          <span
            className="select2 select2-container select2-container--bootstrap"
            dir="ltr"
            style={{ width: '249.5px' }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex="0"
                aria-labelledby="select2-cbCity-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-cbCity-container"
                >
                  <span className="select2-selection__placeholder">
                    Chọn Thành Phố...
                  </span>
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation" />
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true" />
          </span>
          <select
            className="select optional form-control input-lg form-control-default select2-hidden-accessible"
            name="CityId"
            id="cbCity"
            tabIndex="-1"
            aria-hidden="true"
          >
            {Cities.map(city => {
              return (
                <option key={city[0]} value={city[0]}>
                  {city[1]}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-md-3 col-sm-6">
          <span
            className="select2 select2-container select2-container--bootstrap select2-container--disabled"
            dir="ltr"
            style={{ width: '249.5px' }}
          >
            <span className="selection">
              <span
                className="select2-selection select2-selection--single"
                role="combobox"
                aria-haspopup="true"
                aria-expanded="false"
                tabIndex="-1"
                aria-labelledby="select2-cbDistrict-container"
              >
                <span
                  className="select2-selection__rendered"
                  id="select2-cbDistrict-container"
                  title="Tất cả"
                >
                  Tất cả
                </span>
                <span className="select2-selection__arrow" role="presentation">
                  <b role="presentation" />
                </span>
              </span>
            </span>
            <span className="dropdown-wrapper" aria-hidden="true" />
          </span>
          <select
            className="select optional form-control input-lg selectpicker show-tick form-control-default select2-hidden-accessible"
            data-actions-box="true"
            name="DistrictId"
            id="cbDistrict"
            disabled=""
            tabIndex="-1"
            aria-hidden="true"
          >
            <option value="-1">Tất cả</option>
          </select>
        </div>
      </div>

      <div id="divLoanAllNew">
        <div className="table-responsive">
          <table
            className="tm-table-1 table text-gray-light"
            style={{ minWidth: 'unset' }}
          >
            <tbody>
              <tr>
                <th className="text-center hidden-xs-down">
                  <div className="border-right">STT</div>
                </th>
                <th className="text-center ">
                  <div className="border-right">Khách hàng</div>
                </th>
                <th className="text-center hidden-xs-down">
                  <div className="border-right">Khu vực</div>
                </th>
                <th className="text-center hidden-xs-down">
                  <div rel="-1" field="1" className="sort border-right">
                    Số tiền <i className="fa fa-sort" aria-hidden="true" />
                  </div>
                </th>
                <th className="text-center hidden-xs-down">
                  <div rel="-1" field="2" className="sort border-right">
                    Thời gian tạo{' '}
                    <i className="fa fa-sort" aria-hidden="true" />
                  </div>
                </th>
                <th className="text-center">
                  <div rel="-1" field="3" className="sort border-right">
                    Giá bán <i className="fa fa-sort" aria-hidden="true" />
                  </div>
                </th>
                <th className="text-center">
                  <div className="border-right" />
                </th>
              </tr>
              {Object.keys(posts).length > 0 &&
                posts.map((post, key) => {
                  return (
                    <tr
                      onClick={() => handleOpenModal(post)}
                      key={key}
                      style={{ cursor: 'pointer' }}
                      title="Nhận đơn"
                    >
                      <td className="h-100 hidden-xs-down">
                        <div className="td-inner d-flex justify-content-center h-100">
                          <ul className="list-h-1 align-self-start mt-3">
                            <li className="list-h-1__item">{key + 1}</li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="td-inner media">
                          <div className="icon-male-circle wf-38 d-flex align-self-center mr-3 hidden-xs-down" />

                          <div className="media-body align-self-center text-ellipsis">
                            <div className="tm-table__para fw-6 line-height-heading mb-1">
                              {post.fullname}
                            </div>
                            <div className="text-gray-lighter">
                              {post.phone}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="hidden-xs-down">
                        <div className="td-inner d-flex justify-content-center text-center">
                          <div className="text-nowrap">
                            {
                              getDistricts(post.address.province).filter(
                                a => a[0] === post.address.district
                              )[0][1]
                            }
                            <hr className="my-0" />
                            {
                              Cities.filter(
                                a => a[0] === post.address.province
                              )[0][1]
                            }
                          </div>
                        </div>
                      </td>
                      <td className="hidden-xs-down">
                        <div className="td-inner d-flex justify-content-center text-center">
                          <div className="text-nowrap">
                            <span className="text-primary">
                              {post.loanNumber} Triệu - {post.date.duration}{' '}
                              Tháng
                            </span>
                            <hr className="my-0" />
                            {
                              Package.filter(
                                a => a[0] === post.typeOfLoan
                              )[0][1]
                            }
                          </div>
                        </div>
                      </td>

                      <td className="h-100 hidden-xs-down">
                        <div className="td-inner d-flex justify-content-center h-100">
                          <ul className="list-h-1 align-self-start">
                            <li className="list-h-1__item text-primary">
                              {formatHours(post.date.fromDate)}
                            </li>
                            <li className="list-h-1__item">
                              {formatDate(post.date.fromDate)}
                            </li>
                          </ul>
                        </div>
                      </td>
                      <td>
                        <div className="td-inner media d-flex justify-content-center text-center">
                          <div className="text-nowrap">
                            <div className="text-nowrap">
                              <span className="text-primary">
                                {post.price.initial * post.price.discount} ₫
                              </span>
                              <hr className="my-0" />
                              <span
                                style={{
                                  textDecoration: 'line-through',
                                  fontSize: '12px',
                                  color: '#9e9e9e'
                                }}
                              >
                                {post.price.initial} ₫
                              </span>
                              <span
                                style={{
                                  fontSize: '12px',
                                  color: 'black',
                                  marginLeft: '5px'
                                }}
                              >
                                -{Math.ceil((1 - post.price.discount) * 100)}%
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="">
                        <div
                          id="1639057"
                          className="td-inner d-flex flex-column align-items-center text-center btnbuy"
                        >
                          <ul className="list-h-1 align-self-start">
                            <li className="list-h-1__item">
                              <button
                                className="btn btn-outline-success btn-sm mr-2"
                                title="Nhận đơn"
                              >
                                <i
                                  className="fa fa-shopping-cart"
                                  aria-hidden="true"
                                />{' '}
                                Nhận đơn
                              </button>
                            </li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

        <hr />

        <div className="d-flex">
          <nav
            className="d-flex justify-content-between ml-lg-2"
            aria-label="Page navigation"
          >
            <ul className="pagination pagination-sm mb-0 mr-3">
              <li className="page-item page-item--prev d-flex">
                <a className="page-link" href="#">
                  Prev
                </a>
              </li>
              <li className="page-item d-flex align-items-center">
                <div className="px-3 text-nowrap">
                  <span id="lblCurrentPage">1</span> of 3
                </div>
              </li>
              <li className="page-item page-item--next d-flex">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <input name="numberItem" id="numberItem" value="8" type="hidden" />
        <input name="currentPage" id="currentPage" value="1" type="hidden" />
        <input name="totalPage" id="totalPage" value="3" type="hidden" />
      </div>
    </div>
  );
};

export default TableData;
