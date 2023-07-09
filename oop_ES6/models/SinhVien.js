//ôn tập es5 : khởi tạo lớp đối tượng
//nhược điểm : khi tạo lớp đối tượng lại dùng từ khoá function của hàm ; Nó không có các tính chất của lập trình hướng đối tượng (kế thừa ; đóng gói ; trừu tượng; đa hình)
// function SinhVien() {
//     this.hoTen = 'Minh Quân';
//     this.lop = 'Lớp 5' ;
// }
// let sinhVien = new SinhVien()
// console.log(sinhVien)

//đóng gói javascript không có 

//KHỞI TẠO OOP TỪ ES6
//tạo ra 1 cái oop chuẩn chung cho các loại nhân viên có trong công ty
//msnv, hoTen, gioiTinh, tuoi, chucVu
class ConNguoi  {
    //nếu không có sẵn thì chỉ cần tạo hàm constructor
    // msnv = 'FE444';
    // hoTen = 'Lương Bích Hữu';
    // gioiTinh = 'Nữ';
    // tuoi = '25';
    // chucVu = 'canBo';

    //hàm khởi tạo (constructor) giống như phương thức của lớp đối tượng
    constructor(hoTen, gioiTinh, msnv, tuoi, chucVu) {
        //hàm khởi tạo nhận vào giá trị người dùng truyền, ở đay có thể xử lí lấy các giá trị và truyền vào các thuộc tính
        console.log('tôi là lao công nè')
        console.log(hoTen);
        console.log(gioiTinh);
        //mình có thể gọi tới các thuộc tính đã tạo và gán cho nó các giá trị mới dựa trên các giá trị người dùng nhập vào
        this.hoTen = hoTen;
        this.gioiTinh = gioiTinh;
        this.msnv = msnv;
        this.tuoi = tuoi;
        this.chucVu = chucVu;
    }
    xinChaoConNguoi = () => {
        console.log(`hello ${this.hoTen}`)
    }
}
// let conNguoi = new ConNguoi('Dũng', 'Nam', 'FE456', 25, 'Sếp')
// console.log(conNguoi)
// conNguoi.xinChaoConNguoi()

//kế thừa 
//tại vì lao công cũng sẽ có các thuộc tính mà lớp đối tượng ConNguoi đã có, chỉ khác là lao công sẽ có thêm 1 số thuộc tính và phương thức
class LaoCong extends ConNguoi {
    //khi kế thừa từ lớp đối tượng con người sẽ có thể nhận đc hết tất cả thuộc tính và phương thức mà lớp đối tượng đó có
    //có thể khai báo thêm 
    // soGioLam = 80;
    // phuCapAnTrua = true;
    //khi kế thừa , sẽ kế thừa hết tất cả bao gồm cả constructor của lớp đối tượng cha
    constructor(hoTen, gioiTinh, msnv, tuoi, chucVu,soGioLam, phuCapAnTrua) {
        // super giúp gọi tới constructor của lớp đối tượng cha hoặc các phương thức bị ghi đè  của khi sử dụng trên lớp đối tượng con 
        //super(hoTen, gioiTinh, msnv, tuoi, chucVu) có thể coi super đó giống như việc gọi new ConNguoi
        super(hoTen, gioiTinh, msnv, tuoi, chucVu);
        console.log(soGioLam);
        console.log(phuCapAnTrua);
        this.soGioLam = soGioLam;
        this.phuCapAnTrua = phuCapAnTrua;


    }
    
}
let laoCong = new LaoCong("Phượng", "nữ", "BNV34", 18, "Lao công", 70, true)
console.log({laoCong: laoCong})