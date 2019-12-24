var num1 = []
var newnum = (r) => {
    //let numnum = r % 10

    var
    // 產生 img 的 jQuery 物件在變數 $img
        $img = $('<img>').attr('src', './img/question.png').addClass('numclass')
    $img.attr('data-poker', r)
        //$img.attr('data-num', numnum)
    $img.attr('data-back', true)

    $('#btna').on('click', () => {
        console.log('解答')


        $img.attr('src', './img/n' + (r + 1) + '.png')
        $img.attr('data-back', false)
        $("#btni").attr("disabled", true);
        $("#btng").attr("disabled", true);
    })



    // 產生 div 的 jQuery 物件在變數 $div
    $div = $('<div>').addClass('col').addClass('poker')

    // 將 $img 插入到 $div 內
    $div.append($img)

    // 將 $div 插入到網頁 id=data 的html element 裡面
    $('#data').append($div)
}
var answer = () => {

    for (let i = 0; i < 10; i++) { num1.push(i) }
    for (let i = 0; i < 100; i++) {
        // 隨機抽第 r 張，和第一張交換
        let r = rand(0, 9)
        let temp = num1[r]
        num1[r] = num1[0]
        num1[0] = temp
    }
    for (let i = 0; i < 4; i++) { newnum(num1[i]) }


}
$(() => {
    console.log('JS 正常執行')
    $('#btng').on('click', () => {
        console.log('產生')

        // 洗空桌面
        $('#data').empty();
        answer()
        $('#btni').removeAttr('disabled')


    })

    /*$('#in1').keypress(function(e) {
        if (e.which == 13) {
            $('#btni').focus().click();
        }
    })
    $('#in2').keypress(function(e) {
        if (e.which == 13) {
            $('#btni').focus().click();
        }
    })
    $('#in3').keypress(function(e) {
        if (e.which == 13) {
            $('#btni').focus().click();
        }
    })
    $('#in4').keypress(function(e) {
        if (e.which == 13) {
            $('#btni').focus().click();
        }
    })*/
    $('#btni').on('click', () => {
        console.log('輸入')
        $('#output').empty();
        $('#output').removeAttr('disabled')
        let aorba = [0, 0, 0, 0]
        let aorbb = [0, 0, 0, 0]
        let wrong = false

        if ($("#in1").val() == "" || $("#in2").val() == "" || $("#in3").val() == "" || $("#in4").val() == "") {
            alert("數字不能有空");
            wrong = true;

            //document.form1.elements[i].focus();
            //return false;
            alert("數字不能重複");
            wrong = true;
        } else {
            wrong = false

            if ($("#in1").val() == ((num1[0] + 1) % 10)) { aorba[0] = 1 }
            if ($("#in2").val() == ((num1[1] + 1) % 10)) { aorba[1] = 1 }
            if ($("#in3").val() == ((num1[2] + 1) % 10)) { aorba[2] = 1 }
            if ($("#in4").val() == ((num1[3] + 1) % 10)) { aorba[3] = 1 }
            if ($("#in1").val() == ((num1[1] + 1) % 10) || $("#in1").val() == ((num1[2] + 1) % 10) || $("#in1").val() == ((num1[3] + 1) % 10)) { aorbb[0] = 1 }
            if ($("#in2").val() == ((num1[0] + 1) % 10) || $("#in2").val() == ((num1[2] + 1) % 10) || $("#in2").val() == ((num1[3] + 1) % 10)) { aorbb[1] = 1 }
            if ($("#in3").val() == ((num1[1] + 1) % 10) || $("#in3").val() == ((num1[0] + 1) % 10) || $("#in3").val() == ((num1[3] + 1) % 10)) { aorbb[2] = 1 }
            if ($("#in4").val() == ((num1[1] + 1) % 10) || $("#in4").val() == ((num1[2] + 1) % 10) || $("#in4").val() == ((num1[0] + 1) % 10)) { aorbb[3] = 1 }
        }
        console.log(num1)
        console.log(aorba)
        console.log(aorbb)

        var counta = function(aa) { return aa.reduce((a, b) => a + b); }
        console.log(counta(aorba))
        console.log(counta(aorbb))



        var opt = ''
        var click = function() {
            $("#btna").click()
        }
        if (wrong) { opt = '' } else {
            if ((counta(aorba) == 0) && (counta(aorbb) == 0)) {
                opt = '0A0B'
            }
            if ((counta(aorba) == 1) && (counta(aorbb) == 0)) {
                opt = '1A0B'
            }
            if ((counta(aorba) == 2) && (counta(aorbb) == 0)) {
                opt = '2A0B'
            }
            if ((counta(aorba) == 3) && (counta(aorbb) == 0)) {
                opt = '3A0B'
            }
            if ((counta(aorba) == 4) && (counta(aorbb) == 0)) {
                opt = '4A'
                alert("恭喜你答對了！");
                click()
            }
            if ((counta(aorba) == 0) && (counta(aorbb) == 1)) {
                opt = '0A1B'
            }
            if ((counta(aorba) == 1) && (counta(aorbb) == 1)) {
                opt = '1A1B'
            }
            if ((counta(aorba) == 2) && (counta(aorbb) == 1)) {
                opt = '2A1B'
            }
            if ((counta(aorba) == 0) && (counta(aorbb) == 2)) {
                opt = '0A2B'
            }
            if ((counta(aorba) == 1) && (counta(aorbb) == 2)) {
                opt = '1A2B'
            }
            if ((counta(aorba) == 2) && (counta(aorbb) == 2)) {
                opt = '2A2B'
            }
            if ((counta(aorba) == 0) && (counta(aorbb) == 3)) {
                opt = '0A3B'
            }
            if ((counta(aorba) == 1) && (counta(aorbb) == 3)) {
                opt = '1A3B'
            }
            if ((counta(aorba) == 0) && (counta(aorbb) == 4)) {
                opt = '0A4B'
            }

        }


        $('#output').val(opt)
    })
    $('#btnr').on('click', () => {
        console.log('重新')
        $("#btng").attr("disabled", false);
        $('#data').empty();
    })

})