setInterval(() => {
  let d = new Date();
  let htime = d.getHours();
  let mtime = d.getMinutes();
  let stime = d.getSeconds();

  let hrotation = 30 * htime + mtime / 2;
  let mrotation = 6 * mtime;
  let srotation = 6 * stime;

  let hour = document.getElementById("hour");
  hour.style.transform = `rotate(${hrotation}deg)`;

  let min = document.getElementById("min");
  min.style.transform = `rotate(${mrotation}deg)`;

  let sec = document.getElementById("sec");
  sec.style.transform = `rotate(${srotation}deg)`;
}, 1000);
