var mark = [-22, 52, 65, 77, 80, 92, 122]; //新建一个数组存储分数。
//计算等级函数
function countLevel(mark) {
    var level;
    // 判断分数符合的范围
    if (mark >= 0 & mark <= 100) {
        if (mark >= 90) {
            // 大于等于90
            return level = 1;
        } else if (mark >= 80 & mark < 90) {
            // 大于等于80小于90
            return level = 2;
        } else if (mark >= 70 & mark < 80) {
            // 大于等于70小宇80
            return level = 3;
        } else if (mark >= 60 & mark < 70) {
            // 大于等于60小于70
            return level = 4;
        } else {
            // 小于60
            return level = 5;
        }
    } else {
        return level = -1;
    }
}
//弹出等级
for (var i = 0; i < mark.length; i++) {
    var level = countLevel(mark[i]);
    if (level != -1) {
        alert(mark[i] + "------------" + level + "等生");
    } else {
        alert("分数不符合！！");
    }
}
