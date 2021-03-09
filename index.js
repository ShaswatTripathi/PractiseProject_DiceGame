function func(){
  var p1 = Math.floor(Math.random() * 6) + 1;
  var p2 = Math.floor(Math.random() * 6) + 1;
  var img1 = document.querySelector(".img1");
  var img2 = document.querySelector(".img2");
  var s1 = "images/dice" + p1 + ".png";
  var s2 = "images/dice" + p2 + ".png";
  img1.setAttribute("src", s1);
  img2.setAttribute("src", s2);
  if(p1===p2){
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
  }else if(p1 > p2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 wins!";
  }else document.getElementsByTagName("h1")[0].innerHTML = "Player 2 wins!";
}
