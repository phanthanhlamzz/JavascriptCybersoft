var NhanVien = function(tenNV,maNV,luongCB,chucVu,gioLamTrongThang){
    // Thuộc Tính
    this.tenNV=tenNV;
    this.maNV=maNV;
    this.luongCB=luongCB;
    this.chucVu=chucVu;
    this.gioLamTrongThang=gioLamTrongThang;
    // Phương Thức
    this.tongLuong = function(){
        tongLuong=0;

        return tongLuong;
    }
    this.xepLoaiTrongThang = function(){
        xepLoaiTrongThang="";

        return xepLoaiTrongThang;
    }
}