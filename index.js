const con = document.getElementById('canvas-box')

var ctx = con.getContext('2d');
con.width = 400;
con.height = 400;
con.style.border = "1px solid #ccc";
let size = 50 // 50px一个表格

// 画表格
function createTable() {
    const len = parseInt(con.width / size);
    for (let i = 0; i < len; i++) {
        
        createLine([0, size * i], [con.height, size * i])
        createLine([size * i, 0], [size * i, con.height])
    }
}

// 画线
function createLine(start, end, color) {
    ctx.beginPath()
    ctx.moveTo(start[0], start[1]);
    ctx.lineTo(end[0], end[1]);
    ctx.strokeStyle = color || '#999'
    ctx.stroke();
    ctx.closePath();
}

createTable()

window.addEventListener('mousemove', function(e) {
    if (e.target.id === 'canvas-box') {
        ctx.clearRect(0, 0, con.width, con.height); //清除画布
        createTable()
        createLine([0, e.clientY], [con.width, e.clientY], "red");
        createLine([e.clientX, 0], [e.clientX, con.height], "red");
    }
})