import React, { Component } from 'react';

export default class PostSuccess extends Component {
  render() {
    return (
      <div class="main-page">
        <div class="container w-100 align-content-center">
          <div class="row text-center" style={{ backgroundColor: 'white' }}>
            <div class="col-12 col-sm-offset-3">
              <br />
              <br />
              <h2 style={{ color: '#ffbb38' }}>Đăng ký đơn vay thành công</h2>
              <i class="far fa-check-circle fa-5x" />
              <p style={{ fontSize: '20px', color: '#5C5C5C' }}>
                Cảm ơn bạn đã tin dùng dịch vụ. Để đơn được xét duyệt nhanh hơn
                vui lòng liên hệ tổng đài để biết thêm chi tiết
              </p>
              <hr />
              <h5
                class="text-left"
                style={{ color: '#ffbb38', fontWeight: '550' }}
              >
                Cảnh báo lừa đảo:
              </h5>
              <p
                class="text-left"
                style={{ fontSize: '20px', color: '#5C5C5C' }}
              >
                Hiện nay có nhiều nhóm tội phạm chuyên giả dạng các công ty kết
                nối tài chính tương tự công ty của chúng tôi để lợi dụng lòng
                tin từ khách hàng và các dịch vụ mà chúng tôi cung cấp với nhiều
                cách thức tinh vi như sau:
              </p>
              <p
                class="text-left"
                style={{ fontSize: '20px', color: '#5C5C5C' }}
              >
                • Yêu cầu người đi vay thanh toán lãi trước khi giải ngân sau đó
                không giải ngân
              </p>
              <p
                class="text-left"
                style={{ fontSize: '20px', color: '#5C5C5C' }}
              >
                • Làm giả chứng từ chuyển khoản khi vay vẫn chưa được chuyển đến
                và yêu cầu thanh toán các khoản phí trước khi người vay được
                giải ngân
              </p>
              <p
                class="text-left"
                style={{ fontSize: '20px', color: '#5C5C5C' }}
              >
                Để tránh lừa đảo, vui lòng không thanh toán bất kì khoản lãi hay
                phí phụ nào khác trước khi được giải ngân. Chi tiết xin lên hệ
                1900.663.688 để được nhân viên tư vấn. Trân trọng cảm ơn quý
                khách
              </p>
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
