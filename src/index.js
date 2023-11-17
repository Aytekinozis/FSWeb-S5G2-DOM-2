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
  document.addEventListener("dragstart", (e) => {
    //drag baslangicinda start olan elementin id sini kaydettik.
    e.dataTransfer.setData("text", e.target.id);
  });
  element.addEventListener("drop", (e) => {
    e.preventDefault();
    //dragin start oldugu elementi ve onun url ini aldik.
    let firstelementid = e.dataTransfer.getData("text");
    const firstelement = document.getElementById(firstelementid);
    const firsturl = firstelement.src;
    //drop ettigimiz elementin url ini aldik.
    urlbackup = e.target.src;
    console.log(firstelementid);
    console.log(urlbackup);
    //url leri yer degistirdik.
    e.target.src = firsturl;
    firstelement.src = urlbackup;
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
