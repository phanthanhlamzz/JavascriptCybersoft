/**
 * Hàm lấy thông tin 
 */


function layThongTin(){
    var maNV= document.getElementById("txtMaNV").value;
    var tenNV= document.getElementById("txtTenNV").value;
    var chucVu= document.getElementById("txtChucVu").value;
    var luongCB= document.getElementById("txtLuongCoBan").value;
    var gioLamTrongThang= document.getElementById("txtGioLamTrongThang").value;

    var nv = new NhanVien(tenNV,maNV,luongCB,chucVu,gioLamTrongThang);
    return nv;
}

/**
 * Hàm Hiển thị thông tin
 */
function hienThiThongTin(nv){
    document.getElementById("spanTenNV").innerHTML=nv.tenNV;
    document.getElementById("spanMaNV").innerHTML=nv.maNV;
    document.getElementById("spanChucVu").innerHTML=nv.chucVu;
    document.getElementById("spanTongLuong").innerHTML=nv.tongLuong();
    document.getElementById("spanXepLoaiTrongThang").innerHTML=nv.xepLoaiTrongThang();

}



/**
 *  Xử Lý Sự Kiện
 */

 // Xử Kiện Hiện click nút hiên thị thông tin
document.getElementById("btnHienThiThongTin").addEventListener("click",function(){
    var nv=layThongTin();
    hienThiThongTin(nv);
});