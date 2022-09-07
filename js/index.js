// Bài 01
/**
 * Sơ đồ 3 khối
 * Input:
 * Lương 1 ngày người dùng nhập vào
 * Số ngày làm người dùng nhập vào
 *
 * Process:
 * 1. DOM để lấy giá trị người dùng nhập vào
 * 2. Tính tiền lương nhân viên, lương nhân viên bằng lương 1 ngày nhân với số ngày làm
 * 3. Tạo thẻ HTML để show kết quả ra màn hình
 *
 * Output
 * Tính tiền lương nhân viên và xuất kết quả ra màn hình
 */

function calcWage() {
  var wagePerDay = +document.getElementById("wagePerDay").value;
  var day = +document.getElementById("day").value;

  var wage = wagePerDay * day;

  var div = document.createElement("DIV");
  div.innerHTML = "Lương nhân viên: " + wage;
  div.style.margin = "15px 0px";
  document.getElementById("bai-01").appendChild(div);
}

// Bài 02
/**
 * Sơ đồ 3 khối
 * Input: người dùng nhập vào 5 số thực
 *
 * Process:
 * 1. DOM để lấy giá trị của 5 số thực
 * 2. Tính giá trị trung bình của 5 số thực, là tổng của 5 số chia cho 5
 * 3. Tạo thẻ HTML để show kết quả ra màn hình
 *
 * Output: Tính giá trị trung bình của 5 số thực và xuất kết quả ra màn hình
 */

function calcAverageNumber() {
  var number01 = +document.getElementById("number01").value;
  var number02 = +document.getElementById("number02").value;
  var number03 = +document.getElementById("number03").value;
  var number04 = +document.getElementById("number04").value;
  var number05 = +document.getElementById("number05").value;

  var average = (number01 + number02 + number03 + number04 + number05) / 5;

  var div = document.createElement("DIV");
  div.innerHTML = "Giá trị trung bình của 5 số thực trên là: " + average;
  div.style.margin = "15px 0px";
  document.getElementById("bai-02").appendChild(div);
}

// Bài 03
/**
 * Sơ đồ 3 khối
 * Input: Nhập vào giá USD và số tiền USD
 *
 * Process:
 * 1. DOM để lấy giá trị người dùng nhập vào
 * 2. Tính số tiền sau quy đổi
 * 3. Tạo thẻ HTML để show kết quả ra màn hình
 *
 * Output: Tính ra số tiền sau quy đổi VND và xuất kết quả ra màn hình
 */

function usdToVnd() {
  var priceUSD = +document.getElementById("priceUSD").value;
  var usd = +document.getElementById("usd").value;

  var vnd = usd * priceUSD;

  var div = document.createElement("DIV");
  div.innerHTML = "Số tiền sau quy đổi VND là: " + vnd + " VND";
  div.style.margin = "15px 0px";
  document.getElementById("bai-03").appendChild(div);
}

// Bài 04
/**
 * Sơ đồ 3 khối
 * Input: Nhập vào chiều dài và chiều rộng của hình chữ nhật
 *
 * Process:
 * 1. DOM để lấy giá trị chiều dài và chiều rộng do người dùng nhập vào
 * 2. Tính diện tích và chu vi của hình chữ nhật
 * Diện tích: var S = length * width
 * Chu vi: var P = (length + width) * 2
 * 3. Tạo thẻ HTML để show kết quả ra màn hình
 *
 * Output: Tính diện tích và chu vi của hình chữ nhật và xuất kết quả ra màn hình
 */
function calcRec() {
  var lengthRec = +document.getElementById("lengthRec").value;
  var widthRec = +document.getElementById("widthRec").value;

  var S = lengthRec * widthRec;
  var P = (lengthRec + widthRec) * 2;

  var div1 = document.createElement("DIV");
  div1.innerHTML = "Diện tích hình chữ nhật là: " + S;
  div1.style.margin = "15px 0px";
  document.getElementById("bai-04").appendChild(div1);

  var div2 = document.createElement("DIV");
  div2.innerHTML = "Chu vi hình chữ nhật là: " + P;
  div2.style.margin = "15px 0px";
  document.getElementById("bai-04").appendChild(div2);
}

// Bài 05
/**
 * Sơ đồ 3 khối
 * Input: Nhập vào 1 số có 2 chữ số
 *
 * Process:
 *  1. DOM để lấy giá trị do người dùng nhập vào
 *  2. Tách 2 kí số
 *     number1 = number % 10
 *     number2 = Math.floor(number / 10)
 *  3. Tổng 2 ký số của số vừa nhập: var sum = number1 + number2
 *  4. Tạo thẻ HTML để show kết quả ra màn hình
 *
 * Output: Tính tổng 2 ký số của số vừa nhập và xuất kết quả ra màn hình
 */
function calcNumber() {
  var number = +document.getElementById("number").value;

  var number1 = number % 10;
  var number2 = Math.floor(number / 10);
  var sum = number1 + number2;

  var div = document.createElement("DIV");
  div.innerHTML = "Tổng 2 ký số là: " + sum;
  div.style.margin = "15px 0px";
  document.getElementById("bai-05").appendChild(div);
}
