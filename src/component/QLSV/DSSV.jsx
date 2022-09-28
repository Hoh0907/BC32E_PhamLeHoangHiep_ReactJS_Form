
import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUser, editUser } from "../../store/actions";

class DSSV extends Component {
  state = {
    mangSinhVien: [],
  };
  static getDerivedStateFromProps = (nextProps, currentState) => {
    if (nextProps.svSearch.length !== 0) {
      return (currentState.mangSinhVien = nextProps.svSearch);
    }
    return (currentState.mangSinhVien = nextProps.mangSinhVien);
  };
  render() {
    const { mangSinhVien } = this.state;
    const { flag } = this.props;
    return (
      <div className="mt-[30px]">
        <div>
          <table className="w-full p-6 text-xs text-left whitespace-nowrap mt-10">
            <thead className="bg-black p-5 text-white text-lg mb-5">
              <tr >
                <th className="p-3"></th>
                <th className='p-3'>Mã SV</th>
                <th className='p-3'>Họ tên</th>
                <th className='p-3'>Số điện thoại</th>
                <th className='p-3'>Email</th>
                <th className='p-3'></th>
                <th className='p-3'></th>
              </tr>
            </thead>
            <tbody className="border-b text-lg mb-5">
              {!flag ? (
                <tr className="border-2">
                  <td className="text-center text-3xl" colSpan={5}>
                    Không tìm thấy kết quả này
                  </td>
                </tr>
              ) : (mangSinhVien.map((item, index) => (
                <tr key={item.id} >
                  <td className='p-4'></td>
                  <td className='p-4'>{item.maSV}</td>
                  <td className='p-4'>{item.fullName}</td>
                  <td className='p-4'>{item.phoneNumber}</td>
                  <td className='p-4'>{item.email}</td>
                  <td className='p-4'></td>
                  <td className='p-4'>
                    <button
                      className="pr-6 pl-6 pt-3 pb-3 bg-red-300 cursor-pointer hover:bg-red-900 mr-2 text-white"
                      onClick={() => {
                        this.props.dispatch(deleteUser(item.id));
                      }}
                    >
                      Delete
                    </button>
                    <button
                      className="pr-6 pl-6 pt-3 pb-3 bg-yellow-300 cursor-pointer hover:bg-yellow-900 ml-2 text-white"
                      onClick={() => {
                        this.props.dispatch(editUser(item.id));
                      }}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state.baiTapQuanLySinhVien,
  };
};

export default connect(mapStateToProps)(DSSV);
