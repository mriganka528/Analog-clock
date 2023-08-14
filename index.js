setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30 * htime + mtime / 2;
    mrotation = 6 * mtime;
    srotation = 6 * stime;
    sc.style.transform = `rotate(${srotation}deg)`;
    mt.style.transform = `rotate(${mrotation}deg)`;
    hr.style.transform = `rotate(${hrotation}deg)`;

}, 1000);