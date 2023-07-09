// ES5 (javascript object prototype)
//ES6 phiên bản đột phá, giúp xử lý code nhanh hơn



/** CÁCH KHAI BÁO BIẾN MỚI TRONG ES6
 * var : cơ chế hosting đưa các khai báo biến và function lên trên đầu file; nhược điểm làm cho các logic code bị lẫn lộn không đúng flow code ;
 * let : không có cơ chế hosting, không cho phép gọi lại let để tạo 1 biến đã có bên trên
 * const : hằng số và không có cơ chế hosting ; khi khai báo ra const sẽ không cho phép gán lại giá trị mới
 *
 */
var hoTen;
console.log(hoTen); //kết quả undifined

function hienThi(x, y) {
  return x + y;
}

let gioiTinh = "nam";
console.log(gioiTinh);

/** Scope (phạm vi sử dụng)
 * global scope : phạm vi hoạt động toàn bộ, khi có các biến cần sử dụng ở nhiều nơi ta sẽ đặt biến này nằm ngoài cùng file javascript
 * local scope : phạm vi hoạt động nằm trong {}, có thể là function scope hoặc 1 block scope (ví dụ như if), chỉ có thể sử dụng trong scope đó không thể sử dụng ở các scope khác
 */
let namSinh = 3000;
function tinhNam() {
  let ngaySinh = "21/2/99";
  console.log(ngaySinh);
}
if (namSinh == 3000) {
  let tuoi = 30;
  console.log(tuoi);
}
// console.log(tuoi)
tinhNam();
console.clear();
/** arrow function
 * cơ chế khai báo biến trong javascrip es6
 * nhực điểm : có cơ chế hosting nên có thể sử dụng  trước khi khai báo
 * Arrow function không có cơ chế hosting
 *
 *
 */
// var sinhVien = {
//   hoTen: "Nam",
//   demo: function demo() {
//     console.log(this);
//     function demo2() {
//       console.log(this);
//     }
//     demo2();
//   },
// };
// sinhVien.demo();
// function expression : function này không có cơ chế hosting , nên không thể sử dụng trước khi khai báo
// hienThiXinChao();
var hienThiXinChao = function () {
    console.log('hello')
}
hienThiXinChao()

//cách khai báo arrow function
let DemoArrow = hoTen => {
    //có 1 tham số truyên vô thi có thể loại bỏ dấu ngoặc ()
    console.log(hoTen);
    return `tôi tên là ${hoTen}`
}
DemoArrow('Dũng')

let hocSinh = {
    mssv : 'FE77',
    layMSSV : function () {
        console.log(this.mssv);
        // function demoMSSV() {
        //     console.log(this.mssv);
        // }
        let demoMSSV = () => {
            //chỏ tới lớp đối tượng và đối tượng nằm bên ngoài
            //loại bỏ ngữ cảnh con chỏ this trong arrow function
            console.log(this.mssv)
        };
        demoMSSV();
    },
};
hocSinh.layMSSV()

//có thể dùng arrow function loại bỏ cặp dấu ngoặc {} nếu như function đó trả về giá trị luôn
let DemoReturn = (hoTen) => `tôi tên là ${hoTen}`;
console.log(DemoReturn('Tiến'));

//default parameter values giúp chạy những hàm không truyền tham số thì sẽ lấy giá trị mặc đinh
let demoDefaultParameter = (hoTen ='Quang Khải') => {
    console.log(hoTen);
}
demoDefaultParameter('Anh Dũng');


//rest Parameter
//khai báo 1 hàm với số lượng tham số không xác định
//ví dụ như cho 1 học sinh làm 6 bài tập; cho 1 học sinh nữa làm 10 bài tập

function tinhDiemTrungBinh (...diem) {
  console.log(diem)
  //dùng rest parameterd để thực hiện việc tính điểm trung bình khi không biết người dùng sẽ truyền vào bao nhiêu môn
  var tong = 0 ;
  for (let i = 0; i < diem.length; i++) {
    tong += diem[i];
  }
  return tong / diem.length ;
}
let hocSinhA = tinhDiemTrungBinh(1, 5, 3, 6, 8)
console.log(hocSinhA)
let hocSinhB = tinhDiemTrungBinh(9,6,8,7,5,9,10);
console.log(hocSinhB)


//spread operator

let objectA = {
  hoTen : "Nam",
};
let objectB = objectA;
let objectC = {
  hoTen : 'Nam',
};

//2 kiểu dữ liệu tham trị và tham chiếu 
// tham trị : string , number , null, undefined, Boolean
//tham chiếu : array và object : tạo trên thanh ram 2 cái vùng nhớ khác nhau 

let objectD = {
  gioiTinh : "nam"
}
//sử dụng spread operator thay cho object.assign; tương tự như là dùng object.assign
//có thể thêm một hoặc nhiều thuộc tính vào khi sử dụng spread operator
//có thể gán giá trị mới trong spread operator bằng cách gọi thuộc tính trong đó và gán giá trị mới
let objectE = {...objectD, hoTen : 'Cường', tuoi : 32, gioiTinh:"nữ"};
// objectE.hoTen = "Cường"
// Object.assign(objectE, objectD)
console.log(objectD);
console.log(objectE)
console.log(objectD == objectE)

/** DESTRUCTURING
 * 
 * 
 */
let conMeoW = {
  ten : 'Bánh bao',
  tuoi : 2,
  gioiTinh : 'Đực',
  mauLong : 'trắng',
  canNang : '4.5kg',
};
// let ten = conMeoW.ten;
// let tuoi = conMeoW.tuoi;
// let mauLong = conMeoW.mauLong
//khai báo destructuring
// bên trong let {} là tên thuộc tính mình muốn lấy tạo ra biến trùng với tên thuộc tính mình muốn lấy
let {ten, mauLong, canNang, diaChi} = conMeoW
//bóc ra 1 thuộc tính không nằm trong đối tương thì giá trị trả về là underfined
console.log(diaChi)

let arrNumber = [4, 9, 23];
let [number1, number2] = arrNumber;
console.log(number1, number2)

/**OBJECT LITERAL
 * giúp khai báo 1 thuộc tính trùng tên với biến truyền vào
 */
let ngaySinh = "09/05/1993";
let sinhVienNgeo = {
  ngaySinh,
  // ngaySinh : "09/05/1993"
};
console.log(sinhVienNgeo.ngaySinh)

//VÒNG LẶP FOR...IN
let arrCurrency = ["VND", "DOLLAR", "YEN", "NDT", "RUB"]
//vòng lặp for in giúp duyệt mảng dựa trên các giá trị index(trả về index)
//cách viết mới 
// for (let index in arrCurrency) {
//   console.log(index);
//   console.log(arrCurrency[index]);
// }

//vòng lặp for...of giúp duyệt mảng dựa trên các giá trị phần tử trong mảng (giá trị trong mảng ví dụ vnd dollar yen ndt rub)

// for(let item of arrCurrency ) {
//   console.log(item);
// }
console.clear()
//vòng lặp for in có thể duyệt cả object sẽ trả về tên các thuộc tính có trong object, có thể dùng các tên thuộc tính đó để lấy các giá trị
let sinhVien = {
  ten : "Giao",
  gioiTinh : "Nữ",
  lop : 14,
  diaChi : "quận 13"
};
for (let thongTin in sinhVien) {
  console.log(thongTin)
  console.log(sinhVien[thongTin])
}


/**
 * Import và export
 */
// muốn sử dụng lại hienThi
//nhớ thêm đuôi chấm js vô
//cú pháp import
import fileHienThi,{bienA,hienThiTen} from './demoImport.js';
fileHienThi()
hienThiTen()
console.log(bienA)

// import hienthiHello from './demoImport.js';

// fileHienThi()
