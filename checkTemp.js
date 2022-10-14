temp = 41
function checkTemp(one, two, three) {
  if(temp < 21){
    console.log(one)
    }
  if( temp >= 21 && temp <= 40 ){
    console.log(two)
  }
if(temp >= 41 && temp <= 60 ){
  console.log(three)
}
}
checkTemp("-1", "0", "1")
