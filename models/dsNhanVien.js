function DanhSachNhanVien() {
    this.listNV = [];

    this.themNhanVien = function (nv) {
        this.listNV.push(nv);
    };

    //Để xóa nhân viên, trước tiên ta tìm vị trí của nhân viên đó
    this._viTriNhanVien = function (taiKhoanNV) {
        var index = -1;
        this.listNV.forEach(function (nv, i) {
            if (nv.taiKhoanNV === taiKhoanNV);
            index = i;
        });
        return index;
    };

    this._xoaNhanVien = function (taiKhoanNV) {
        /**
         * Tìm vị trí
         * - Tạo 1 biến index = -1;
         * - Dúyệt qua mảng listNV, có thứ i
         * - kiểm tra nv.taiKhoanNV trùng taiKhoanNV?
         */
        var index = this._viTriNhanVien(taiKhoanNV);
        if (index !== -1) {
            this.listNV.splice(index, 1);
        }
    };

    // sửa thông tin nhân viên
    this._layThongTinNV = function (taiKhoanNV) {
        var objectNV = null;
        // Tìm vị trí Nhân viên
        var index = this._viTriNhanVien(taiKhoanNV);
        if (index !== -1) {
            objectNV = this.listNV[index];
        }
        return objectNV;
    };

    // Cập nhật thông tin Nhân viên
    this._capNhatNhanVien = function (objectNV) {
        //tìm vị trí
        var index = this._viTriNhanVien(objectNV.taiKhoanNV);
        if (index !== -1) {
            this.listNV[index] = objectNV;
        }
    };

    this._timKiemNhanVien = function (keyword) {
        var mangTimKiem = [];
        this.listNV.forEach(function (nhanvien) {
            var tenNV_LowerCase = nhanvien.tenNhanVien.toLowerCase();
            var taiKhoan_LowerCase = nhanvien.taiKhoanNV.toLowerCase();
            var xepLoai_LowerCase = nhanvien.xepLoai.toLowerCase();
            var keywordLowerCase = keyword.toLowerCase();
            if ((tenNV_LowerCase.indexOf(keywordLowerCase) !== -1)
                || (taiKhoan_LowerCase.indexOf(keywordLowerCase) !== -1)
                || (xepLoai_LowerCase.indexOf(keywordLowerCase) !== -1)) {
                mangTimKiem.push(nhanvien);
            }
        });
        return mangTimKiem;
    };
}