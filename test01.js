//1 promptで入力した値から「正の数」「負の数」を判定してalertする処理を書いてください。
//2 1.で数値以外が入力された場合には「数値を入力してください」とalertする処理を追加してください。
//3 配列に'パンダ', 'ライオン', 'キリン'を定義し、while文ですべて表示する処理を書いてください。
//4 3.でwhile文より前にpromptでキー入力し、その入力した内容が'ライオン'の場合に処理を中断するように変更してください。
//5 4.で中断したときの'ライオン'の添字もalertするように変更してください。
//6 オブジェクト変数の配列の形式で、動物と体重を表現してみましょう。例としてパンダは80(Kg)、ライオンは200(Kg)、キリンは300(Kg)としましょう。
//7 6.でpromptで入力した動物名の体重をalertするように変更してください。
//8 円の半径を入力するとその面積を返す関数をつくり、その結果をalertしましょう。円周率は3.14とします。

var answer = prompt('正の数か負の数を判断します\n半角で数値を入力してください')
if (answer > 0){
  alert('正の数');
} else if (answer < 0) {
  alert('負の数');
} else if (answer == 0) {
  alert('どちらでもありません');
} else {
  alert('半角で数値を入力してください');
}

var animals = ['パンダ','ライオン','キリン']
var answer = prompt('動物の名前を入力してください')

var i = 0;
while (i < animals.length ) {
  if (answer == 'ライオン') {
  alert('ライオン');
  break;
  }
  alert(animals[i]);
  i++;
}

var answer = prompt('動物の体重は？\nパンダ、ライオン、キリンのいずれかを入力してください')
var animals = [
  {'name': 'パンダ', 'weight':'80kg'},
  {'name': 'ライオン', 'weight':'200kg'},
  {'name': 'キリン', 'weight':'300kg'}
];

if (answer == 'パンダ') {
  alert(animals[0].weight);
}else if (answer == 'ライオン') {
  alert(animals[1].weight);
}else if (answer == 'キリン') {
  alert(animals[1].weight);
}else {
  'パンダ、ライオン、キリンのいずれかを入力してください'
}

var x = prompt('円の面積を求めます\n円の半径を数字のみで入力してください')
  alert('面積は' + x * x * 3.14 + '平方センチメートル')
