import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
//document.querySelector("h2").addEventListener("click", function (e) {
//  alert("Bana tıkladın!");
//});

// Kodlar buraya gelecek!

document.querySelector("input").addEventListener("keyup", (event) => {
  if (event.key == 3) {
    document.querySelector("body").style.backgroundColor = "#7777df";
  }
  console.log(event.key);
  event.target.value = event.target.value.toUpperCase();
});

document.querySelectorAll("img").forEach((element) => {
  element.addEventListener("mouseover", (e) => {
    //console.log("mouseover");
    e.target.style.transform = "scale(0.9)";
  });
});

document.querySelectorAll("img").forEach((element) => {
  element.addEventListener("mouseout", (e) => {
    //console.log("mouseout");
    e.target.style.transform = null;
  });
});

document.addEventListener("dragover", (event) => {
  event.preventDefault();
});
let urlbackup;

document.querySelectorAll("img").forEach((element) => {
  element.addEventListener("drop", (e) => {
    e.preventDefault();
    console.log("dropped");
    let data = e.dataTransfer.getData("text");
    urlbackup = e.target.src;
    console.log(data);
    console.log(urlbackup);
    e.target.src = data;
  });
});

document.querySelector("input").addEventListener("focus", (e) => {
  e.target.style.backgroundColor = "red";
});
document.querySelector("input").addEventListener("blur", (e) => {
  e.target.style.backgroundColor = null;
});

window.addEventListener("load", (e) => {
  setTimeout(() => {
    console.log("test");
    alert("page loaded 5 seconds ago");
  }, 5000);
});

document.querySelectorAll("img").forEach((element) => {
  element.addEventListener("dblclick", (e) => {
    e.target.style.transform = "scale(-1, 1)";
  });
});
