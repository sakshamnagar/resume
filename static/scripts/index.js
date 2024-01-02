function viewmore() {
    var a = document.getElementById('more');
    var b = document.getElementById('morebtn');
    var c = document.getElementById('lessbtn');

    if (a.style.display === 'none') {
        a.style.display = 'block';
        b.style.display = 'none';
        c.style.display = 'block';
    }
}


function viewless() {
    var a = document.getElementById('more');
    var b = document.getElementById('morebtn');
    var c = document.getElementById('lessbtn');

    if (a.style.display === 'block') {
        a.style.display = 'none';
        b.style.display = 'block';
        c.style.display = 'none';
    }
}


function viewimg() {
    var a = document.getElementById('resume');
    var b = document.getElementById('fullimgcarousel1');

    if (b.style.display === 'none') {
        b.style.display = 'block';
        a.style.display = 'none';
    }
}

function viewimg2() {
    var a = document.getElementById('resume');
    var b = document.getElementById('fullimgcarousel2');

    if (b.style.display === 'none') {
        b.style.display = 'block';
        a.style.display = 'none';
    }
}

function hideimg() {
    var a = document.getElementById('resume');
    var b = document.getElementById('fullimgcarousel1');
    

    if (b.style.display === 'block') {
        b.style.display = 'none';
        a.style.display = 'block';
    }
}

function hideimg2() {
    var a = document.getElementById('resume');
    var b = document.getElementById('fullimgcarousel2');
    

    if (b.style.display === 'block') {
        b.style.display = 'none';
        a.style.display = 'block';
    }
}

