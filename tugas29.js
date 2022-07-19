// Tugas Replace Regular Expression
function panggilRegexp() {
  let data = "Belajar-Satu-Tahun-Bersama-Niomic";
  console.log(data.replace(/-/g, ' '))
}
panggilRegexp()

console.log('-----------------')

//Tugas 29
function regex() {
  let data = "Belajar menimba ilmu programming bersama Niomic";
  let str = new RegExp("bersama");
  console.log(str.exec(data));
}
regex()