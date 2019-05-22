import React from 'react';
import PropTypes from 'prop-types';
import { getDistricts, getCities } from '../utils/getVNdata';
import { Package } from '../utils/getPackage';
import Notifications, { notify } from 'react-notify-toast';
const toast = notify.createShowQueue();
function OverviewlPost(props) {
  const { post, purchasePost, history, profile } = props;
  return (
    <div className="modal-dialog modal-lg" role="document">
      <Notifications options={{ zIndex: 200, top: '125px' }} />
      <div
        id="divResultDetailsLoan"
        className="modal-content of-hidden rounded-10 border-0"
      >
        <div className="modal-header bg-warning text-white">
          <div className="d-flex flex-wrap">
            <h3 className="modal-title mr-3">
              {' '}
              Bạn đồng ý mua hồ sơ của:{' '}
              <span className="">{post && post.fullname} ?</span>
            </h3>
          </div>
        </div>
        <div>
          <h4 className="modal-body bg-gray-lighter fs-base">
            1. Thông tin đơn vay
          </h4>
          <div className="modal-body">
            <div className="row gutter-2">
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Tên khách hàng</div>
                  <div className="col-7">
                    <strong className="text-primary">
                      {post && post.fullname}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Số điện thoại</div>
                  <div className="col-7">
                    <strong className="text-primary">
                      {post && post.phone}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Số tiền vay</div>
                  <div className="col-7">
                    <strong className="text-primary">
                      {post && post.loanNumber} 000 000 VNĐ
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Thời gian vay</div>
                  <div className="col-7">
                    <strong className="text-primary">
                      {post && post.date && post.date.duration} tháng
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Khu vực</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        post.address &&
                        post.address.province &&
                        getDistricts(post.address.province).filter(
                          a => a[0] === post.address.district,
                        )[0][1]}{' '}
                      -{' '}
                      {post &&
                        post.address &&
                        getCities().filter(
                          a => a[0] === post.address.province,
                        )[0][1]}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Loại hình</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        Package.filter(a => a[0] === post.typeOfLoan)[0][1]}
                    </strong>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">CMND</div>
                  <div className="col-7">
                    <strong className="">
                      {post && post.CMND && post.CMND}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h4 className="modal-body bg-gray-lighter fs-base">
            2. Thông tin checklist
          </h4>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Hình thức kinh doanh</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        post.careerInfo &&
                        post.careerInfo.career &&
                        post.careerInfo.career}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Thu nhập</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        post.careerInfo &&
                        post.careerInfo.income &&
                        post.careerInfo.income}{' '}
                      triệu/ tháng
                    </strong>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Hình thức cư trú</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        post.property2 &&
                        post.property2.residence &&
                        post.property2.residence}
                    </strong>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="row">
                  <div className="col-5">Khách đang vay</div>
                  <div className="col-7">
                    <strong className="">
                      {post &&
                        post.property2 &&
                        post.property2.borrowing &&
                        post.property2.borrowing}
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {post && post.property1 && post.property1.length > 0 && (
          <div>
            <h4 className="modal-body bg-gray-lighter fs-base">
              3. Thông tin tài sản
            </h4>
            <div className="modal-body">
              <div className="row">
                {post.property1.map((val, key) => {
                  return (
                    <div key={key} className="col-md-6 mb-3">
                      <div className="row">
                        <div className="col-5">{val.keyProp}</div>
                        <div className="col-7">
                          <strong className="">{val.valueProp}</strong>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        <div className="modal-footer justify-content-center">
          {post && profile && (
            <button
              type="button"
              className="btn btn-danger btn-sm text-center"
              id="btnAccept"
              onClick={() => {
                if (Object.keys(profile).length === 0) {
                  toast(
                    'Bạn cần phải đăng nhập trước khi mua bài đăng này',
                    'warning',
                    3000,
                  );
                } else if (profile.balance > 25000) {
                  purchasePost(post.id, history);
                } else {
                  toast(
                    'Bạn không đủ tiền để mua bài đăng này, vui lòng nạp thêm',
                    'warning',
                    3000,
                  );
                }
              }}
            >
              Đồng ý
            </button>
          )}
          <button
            type="button"
            className="btn btn-default btn-sm text-center"
            onClick={() => props.handleCloseModal()}
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
}

OverviewlPost.propTypes = {
  post: PropTypes.object,
};

export default OverviewlPost;
