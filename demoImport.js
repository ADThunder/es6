//trong những file đoạn code cần sử dụng ở các nơi khác, ta sẽ gắn từ khoá export vào
// export default thì ko cần bỏ chữ let
const hienThi = () => {
    console.log('hello tui là export nè')
};

export default hienThi;

let bienA = {
    number : 1,
};
let hienThiTen = () => {
    console.log('tôi tên nam');
};
//export nhiều phần tử 
export {bienA, hienThiTen};
