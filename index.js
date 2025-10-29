const btns = document.querySelectorAll('.btn');
const body = document.querySelector("body");

btns.forEach(function (btn) {
  console.log(btn);
  btn.addEventListener('click', function (c) {
    console.log(c);
    console.log(c.target);
    switch (c.target.id) {
      case "yellow":
        body.style.backgroundColor = c.target.id;
        break;
      case "white":
        body.style.backgroundColor = c.target.id;
        break;
      case "blue":
        body.style.backgroundColor = c.target.id;
        break;

      default:
        body.style.backgroundColor = "grey";
    }
  })
})