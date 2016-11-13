var arrletter = ["a", "x", "b", "d", "m", "a", "k", "m", "p", "j", "a"];
var count = {}; //字母出现次数
var pos = {}; //字母位置
//遍历arr，统计每个字母出现次数且记录位置
arrletter.forEach(function(value, index) {
    if (count[value]) {
        count[value]++;
        pos[value] += "," + index;
    } else {
        count[value] = 1;
        pos[value] = "" + index;
    }
});
//打印控制台
console.log(count);
console.log(pos);
//获取出现最多的字母
var max = 0; //最多次数
var letter; //出现最多的字母
for (i in count) {
    if (count[i] > max) {
        max = count[i];
        letter = i;
    }
}
//打印控制台
console.log("最多的是：" + letter);
console.log("位置分布：" + pos[letter]);
alert("最多的是：" +letter);
alert("位置分布：" +pos[letter]);