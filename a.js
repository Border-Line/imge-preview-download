var $input = document.getElementById('file-select')
var src = ''
$input.addEventListener('change', function (e) {
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = function (ev) {
        var imgEle = document.getElementById('img')
        imgEle.setAttribute('width', '200')
        imgEle.setAttribute('height', '100')
        imgEle.src = ev.target.result
        src = imgEle.src
    }
})

function download(e) {
    // var cav = document.getElementsByTagName('canvas')[0]
    // var ctx = cav.getContext('2d')
    // 新建图片
    // var Img = new Image()
    // Img.src = "a.png"


    // Img.onload = function () {
    // ctx.drawImage(Img, 0, 0, Img.width, Img.height)
    // var base = cav.toDataURL('image/png')
    var el = document.createElement('a')
    el.setAttribute('href', src)
    el.setAttribute('download', 'test')
    el.click()
    // }
}

var btn = document.getElementsByTagName('button')[0]
btn.addEventListener('click', download)

