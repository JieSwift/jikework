var txt1Ele = document.getElementById("txt1");
var txt2Ele = document.getElementById("txt2");



function count() {
    var result = 0;
    // 获取第一个输入框的值
    if (txt1Ele.value != "") {
        var firstnum = parseInt(txt1Ele.value);
        return firstnum;
    } else {
        alert("输入框不能为空！！");
    }
    // 获取第二个输入框的值    
    if (txt2Ele.value != "") {
        var secnum = parseInt(txt2Ele.value);
        return secnum;
    } else {
        alert("输入框不能为空！！");
    }
    // 获取选择框的值
    var select = document.getElementById("select").value;
    // 获取通过下拉框来选择的值来改变加减乘除的运算法则
    switch (select) {
        case '+':
            result = firstnum + secnum;
            break;
        case '-':
            result = firstnum - secnum;
            break;
        case '*':
            result = firstnum * secnum;
            break;
        case '/':
            if (secnum != 0) {
                result = firstnum / secnum;
                break;
            } else {
                alert("除数不能为0!!");
            }
    }
    // 输出结果
    document.getElementById("result").value = result;
}