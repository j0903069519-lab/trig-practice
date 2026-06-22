const labels = ["A", "B", "C", "D", "E"];
const leaderboardKey = "trigPracticeLeaderboard";
const studentKey = "trigPracticeStudent";
const sharedLeaderboardUrl = "https://script.google.com/macros/s/AKfycbyctoOY03uZKvznm-je5NirX5JZkXixKEhqMc5UgbvEbnKM-AVnY7lS7fz5INjI_tiKig/exec";
const typeTitles = [
  "第 1 題：直角三角形求 cos",
  "第 2 題：已知 cos 求 tan",
  "第 3 題：已知 sin 求 cos",
  "第 4 題：直角三角形周長",
  "第 5 題：sin 與 cos 關係",
  "第 6 題：三角恆等式化簡",
  "第 7 題：已知 sinθcosθ",
  "第 8 題：同界角",
  "第 9 題：終邊點求 cos",
  "第 10 題：終邊點求 sin",
  "第 11 題：查表估 sin",
  "第 12 題：查表估 cos",
  "第 13 題：查表估 sin",
  "第 14 題：極座標轉直角坐標",
  "第 15 題：三角形面積",
  "第 16 題：餘弦定理",
  "第 17 題：外接圓半徑",
  "第 18 題：正弦定理求 sin A",
  "第 19 題：象限判斷多選",
];
const sinTableText = "sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98";
const sinTable = {
  10: "0.17",
  20: "0.34",
  30: "0.50",
  40: "0.64",
  50: "0.77",
  60: "0.87",
  70: "0.94",
  80: "0.98",
};
const pythagoreanTriples = [
  [3, 4, 5],
  [5, 12, 13],
  [8, 15, 17],
  [7, 24, 25],
  [20, 21, 29],
  [9, 40, 41],
];

const papers = [
  {
    id: "A",
    title: "練習卷 A",
    answers: ["C", "D", "A", "E", "B", "C", "E", "A", "B", "D", "B", "C", "D", "A", "B", "C", "D", "E", "AC"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=17，BC=8，AC=15，下列何者為 cos A 之值？", ["8/15", "8/17", "15/17", "17/15", "15/8"]],
      ["已知 0°<θ<90°，且 cos θ=3/5，下列何者為 tan θ 之值？", ["3/4", "5/4", "3/5", "4/3", "4/5"]],
      ["已知 0°<θ<90°，且 sin θ=√2/2，下列何者為 cos θ 之值？", ["√2/2", "1/2", "√3/2", "0", "1"]],
      ["已知三角形 ABC 中，C 為直角，sin A=3/5 且 AB=20，下列何者為三角形的周長？", ["32", "36", "40", "44", "48"]],
      ["已知 sin θ=b 且 θ 為銳角，下列何者為 cos θ？", ["b", "√(1-b²)", "b/√(1-b²)", "√(1-b²)/b", "以上皆非"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["0", "1", "2", "3", "4"]],
      ["已知 sin θ cos θ=0.3，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√0.8", "√1", "√1.2", "√1.4", "√1.6"]],
      ["下列何者為 75° 的同界角？", ["435°", "-75°", "255°", "-435°", "315°"]],
      ["已知點 P(5,-12) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["12/13", "5/13", "-12/13", "-5/13", "-5/12"]],
      ["已知點 P(-8,15) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["8/17", "-8/17", "-15/17", "15/17", "-15/8"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 320° 估計至小數點第二位之值？", ["0.64", "-0.64", "0.77", "-0.77"]],
      ["依上表，下列選項何者為 cos 650° 估計至小數點第二位之值？", ["0.17", "-0.17", "0.34", "-0.34"]],
      ["依上表，下列選項何者為 sin 210° 估計至小數點第二位之值？", ["0.50", "0.87", "-0.87", "-0.50"]],
      ["已知 P 點的極座標為 [50,300°]，下列哪一個直角坐標最接近 P 點？", ["(25,-43)", "(-25,43)", "(43,-25)", "(-43,25)"]],
      ["已知在三角形 ABC 中，AB=10，BC=9，sin B=2/5，則三角形 ABC 的面積是多少？", ["12", "18", "24", "30"]],
      ["已知在三角形 ABC 中，AB=10，BC=6，cos B=1/5，則 AC 的長度是多少？", ["√102", "√108", "√112", "√118", "√124"]],
      ["已知在三角形 ABC 中，AB=10，BC=15，sin C=1/2，三角形 ABC 的外接圓半徑為何？", ["5", "8", "9", "10", "12"]],
      ["承上題，在三角形 ABC 中，sin A 是多少？", ["1/3", "1/2", "2/3", "5/6", "3/4"]],
      ["已知 θ 為第二象限角，下列敘述哪些正確？", ["sin θ>0", "cos θ>0", "tan θ<0", "sin(-θ)>0", "cos(-θ)>0"], true],
    ],
  },
  {
    id: "B",
    title: "練習卷 B",
    answers: ["A", "E", "B", "D", "C", "D", "A", "B", "C", "E", "D", "C", "B", "A", "B", "D", "A", "E", "BC"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=25，BC=7，AC=24，下列何者為 cos A 之值？", ["24/25", "7/25", "25/24", "7/24", "24/7"]],
      ["已知 0°<θ<90°，且 cos θ=5/13，下列何者為 tan θ 之值？", ["5/12", "13/12", "5/13", "12/13", "12/5"]],
      ["已知 0°<θ<90°，且 sin θ=√3/2，下列何者為 cos θ 之值？", ["0", "1/2", "√2/2", "√3/2", "1"]],
      ["已知三角形 ABC 中，C 為直角，sin A=5/13 且 AB=26，下列何者為三角形的周長？", ["36", "48", "52", "60", "72"]],
      ["已知 sin θ=c 且 θ 為銳角，下列何者為 cos θ？", ["c", "c/√(1-c²)", "√(1-c²)", "√(1-c²)/c", "以上皆非"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["0", "1", "3", "2", "4"]],
      ["已知 sin θ cos θ=0.1，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√1.2", "√1.4", "√1.6", "√0.8", "√1"]],
      ["下列何者為 210° 的同界角？", ["150°", "-150°", "-210°", "30°", "390°"]],
      ["已知點 P(-4,-3) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["3/5", "-3/5", "-4/5", "4/5", "-3/4"]],
      ["已知點 P(6,-8) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["3/5", "-3/5", "4/5", "6/10", "-4/5"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 300° 估計至小數點第二位之值？", ["0.87", "-0.77", "0.50", "-0.87"]],
      ["依上表，下列選項何者為 cos 400° 估計至小數點第二位之值？", ["0.64", "-0.64", "0.77", "-0.77"]],
      ["依上表，下列選項何者為 sin 250° 估計至小數點第二位之值？", ["0.94", "-0.94", "0.34", "-0.34"]],
      ["已知 P 點的極座標為 [80,150°]，下列哪一個直角坐標最接近 P 點？", ["(-69,40)", "(69,-40)", "(-40,69)", "(40,-69)"]],
      ["已知在三角形 ABC 中，AB=14，BC=10，sin B=3/7，則三角形 ABC 的面積是多少？", ["24", "30", "36", "42"]],
      ["已知在三角形 ABC 中，AB=14，BC=10，cos B=2/5，則 AC 的長度是多少？", ["√164", "√174", "√180", "√184", "√194"]],
      ["已知在三角形 ABC 中，AB=16，BC=20，sin C=4/5，三角形 ABC 的外接圓半徑為何？", ["10", "12", "16", "18", "20"]],
      ["承上題，在三角形 ABC 中，sin A 是多少？", ["1/2", "3/5", "4/5", "5/6", "1"]],
      ["已知 θ 為第三象限角，下列敘述哪些正確？", ["sin θ>0", "cos θ<0", "tan θ>0", "sin(-θ)<0", "cos(-θ)>0"], true],
    ],
  },
  {
    id: "C",
    title: "練習卷 C",
    answers: ["D", "A", "E", "B", "A", "E", "C", "B", "C", "A", "D", "B", "C", "E", "C", "D", "A", "B", "BE"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=10，BC=6，AC=8，下列何者為 cos A 之值？", ["3/5", "5/4", "6/10", "4/5", "8/6"]],
      ["已知 0°<θ<90°，且 cos θ=12/13，下列何者為 tan θ 之值？", ["5/12", "12/5", "13/5", "5/13", "12/13"]],
      ["已知 0°<θ<90°，且 sin θ=3/5，下列何者為 cos θ 之值？", ["3/5", "5/3", "5/4", "√3/2", "4/5"]],
      ["已知三角形 ABC 中，C 為直角，sin A=4/5 且 AB=15，下列何者為三角形的周長？", ["30", "36", "39", "42", "45"]],
      ["已知 sin θ=d 且 θ 為銳角，下列何者為 cos θ？", ["√(1-d²)", "d", "d/√(1-d²)", "√(1-d²)/d", "以上皆非"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["0", "1", "3", "4", "2"]],
      ["已知 sin θ cos θ=0.4，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√1.2", "√1.4", "√1.8", "√0.8", "√1"]],
      ["下列何者為 315° 的同界角？", ["45°", "-45°", "135°", "-315°", "615°"]],
      ["已知點 P(8,15) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["15/17", "-15/17", "8/17", "-8/17", "8/15"]],
      ["已知點 P(-5,-12) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["-12/13", "12/13", "-5/13", "5/13", "-12/5"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 340° 估計至小數點第二位之值？", ["0.34", "-0.64", "0.64", "-0.34"]],
      ["依上表，下列選項何者為 cos 610° 估計至小數點第二位之值？", ["0.34", "-0.34", "0.94", "-0.94"]],
      ["依上表，下列選項何者為 sin 140° 估計至小數點第二位之值？", ["0.50", "-0.50", "0.64", "-0.64"]],
      ["已知 P 點的極座標為 [60,220°]，下列哪一個直角坐標最接近 P 點？", ["(46,39)", "(-39,-46)", "(39,46)", "(46,-39)", "(-46,-39)"]],
      ["已知在三角形 ABC 中，AB=16，BC=9，sin B=1/4，則三角形 ABC 的面積是多少？", ["12", "16", "18", "24"]],
      ["已知在三角形 ABC 中，AB=16，BC=9，cos B=1/3，則 AC 的長度是多少？", ["√211", "√221", "√231", "√241", "√251"]],
      ["已知在三角形 ABC 中，AB=18，BC=24，sin C=3/4，三角形 ABC 的外接圓半徑為何？", ["12", "16", "18", "20", "24"]],
      ["承上題，在三角形 ABC 中，sin A 是多少？", ["3/4", "1", "2/3", "1/2", "4/5"]],
      ["已知 θ 為第四象限角，下列敘述哪些正確？", ["sin θ>0", "cos θ>0", "tan θ>0", "sin(-θ)<0", "cos(-θ)>0"], true],
    ],
  },
  {
    id: "D",
    title: "練習卷 D",
    answers: ["B", "E", "C", "E", "D", "B", "D", "C", "D", "E", "C", "D", "A", "B", "C", "B", "B", "E", "AB"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=13，BC=5，AC=12，下列何者為 cos A 之值？", ["5/13", "12/13", "13/12", "5/12", "12/5"]],
      ["已知 0°<θ<90°，且 cos θ=8/17，下列何者為 tan θ 之值？", ["8/15", "17/15", "8/17", "15/17", "15/8"]],
      ["已知 0°<θ<90°，且 sin θ=1/2，下列何者為 cos θ 之值？", ["1/2", "√2/2", "√3/2", "0", "1"]],
      ["已知三角形 ABC 中，C 為直角，sin A=7/25 且 AB=50，下列何者為三角形的周長？", ["64", "88", "100", "104", "112"]],
      ["已知 sin θ=e 且 θ 為銳角，下列何者為 cos θ？", ["e", "e/√(1-e²)", "√(1-e²)/e", "√(1-e²)", "以上皆非"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["1", "2", "3", "4", "0"]],
      ["已知 sin θ cos θ=0.2，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√0.8", "√1", "√1.2", "√1.4", "√1.6"]],
      ["下列何者為 120° 的同界角？", ["240°", "-120°", "480°", "-480°", "300°"]],
      ["已知點 P(-12,5) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["5/13", "12/13", "-5/13", "-12/13", "-12/5"]],
      ["已知點 P(9,-40) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["9/41", "-9/41", "40/41", "41/40", "-40/41"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 310° 估計至小數點第二位之值？", ["0.77", "-0.64", "-0.77", "0.64"]],
      ["依上表，下列選項何者為 cos 560° 估計至小數點第二位之值？", ["0.94", "-0.17", "0.17", "-0.94"]],
      ["依上表，下列選項何者為 sin 150° 估計至小數點第二位之值？", ["0.50", "-0.50", "0.87", "-0.87"]],
      ["已知 P 點的極座標為 [40,240°]，下列哪一個直角坐標最接近 P 點？", ["(20,35)", "(-20,-35)", "(-35,-20)", "(35,-20)"]],
      ["已知在三角形 ABC 中，AB=12，BC=15，sin B=1/3，則三角形 ABC 的面積是多少？", ["18", "24", "30", "36"]],
      ["已知在三角形 ABC 中，AB=12，BC=8，cos B=1/4，則 AC 的長度是多少？", ["√144", "√160", "√176", "√192", "√208"]],
      ["已知在三角形 ABC 中，AB=12，BC=18，sin C=3/5，三角形 ABC 的外接圓半徑為何？", ["8", "10", "12", "15", "18"]],
      ["承上題，在三角形 ABC 中，sin A 是多少？", ["3/5", "2/3", "3/4", "4/5", "9/10"]],
      ["已知 θ 為第一象限角，下列敘述哪些正確？", ["sin θ>0", "cos θ>0", "tan θ<0", "sin(-θ)>0", "cos(-θ)<0"], true],
    ],
  },
  {
    id: "E",
    title: "練習卷 E",
    answers: ["A", "D", "B", "C", "E", "A", "E", "A", "A", "B", "D", "B", "C", "A", "B", "E", "B", "D", "AB"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=29，BC=20，AC=21，下列何者為 cos A 之值？", ["21/29", "20/29", "29/21", "20/21", "21/20"]],
      ["已知 0°<θ<90°，且 cos θ=7/25，下列何者為 tan θ 之值？", ["7/24", "25/24", "7/25", "24/7", "24/25"]],
      ["已知 0°<θ<90°，且 sin θ=√3/2，下列何者為 cos θ 之值？", ["√3/2", "1/2", "√2/2", "0", "1"]],
      ["已知三角形 ABC 中，C 為直角，sin A=8/17 且 AB=34，下列何者為三角形的周長？", ["48", "64", "80", "96", "112"]],
      ["已知 sin θ=f 且 θ 為銳角，下列何者為 cos θ？", ["f", "f/√(1-f²)", "√(1-f²)/f", "以上皆非", "√(1-f²)"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["2", "1", "3", "4", "0"]],
      ["已知 sin θ cos θ=0.45，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√1.1", "√1.3", "√1.5", "√1.7", "√1.9"]],
      ["下列何者為 285° 的同界角？", ["-75°", "75°", "-285°", "105°", "615°"]],
      ["已知點 P(7,24) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["7/25", "24/25", "-7/25", "-24/25", "7/24"]],
      ["已知點 P(-15,8) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["-15/17", "8/17", "-8/17", "15/17", "8/15"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 330° 估計至小數點第二位之值？", ["0.50", "0.87", "-0.87", "-0.50"]],
      ["依上表，下列選項何者為 cos 620° 估計至小數點第二位之值？", ["0.17", "-0.17", "0.94", "-0.94"]],
      ["依上表，下列選項何者為 sin 120° 估計至小數點第二位之值？", ["0.50", "-0.50", "0.87", "-0.87"]],
      ["已知 P 點的極座標為 [70,330°]，下列哪一個直角坐標最接近 P 點？", ["(61,-35)", "(-61,35)", "(35,-61)", "(-35,61)"]],
      ["已知在三角形 ABC 中，AB=18，BC=10，sin B=2/5，則三角形 ABC 的面積是多少？", ["24", "36", "42", "48"]],
      ["已知在三角形 ABC 中，AB=18，BC=10，cos B=3/5，則 AC 的長度是多少？", ["√168", "√188", "√198", "√204", "√208"]],
      ["已知在三角形 ABC 中，AB=20，BC=24，sin C=5/8，三角形 ABC 的外接圓半徑為何？", ["12", "16", "18", "20", "24"]],
      ["承上題，在三角形 ABC 中，sin A 是多少？", ["1/2", "5/8", "2/3", "3/4", "4/5"]],
      ["已知 θ 為第三象限角，下列敘述哪些正確？", ["sin θ<0", "cos θ<0", "tan θ<0", "sin(-θ)<0", "cos(-θ)>0"], true],
    ],
  },
  {
    id: "F",
    title: "練習卷 F",
    answers: ["E", "B", "A", "E", "A", "D", "B", "A", "D", "E", "A", "A", "C", "C", "E", "D", "E", "A", "AD"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=17，BC=8，AC=15，下列何者為 cos A 之值？", ["8/17", "15/8", "8/15", "17/15", "15/17"]],
      ["已知 0°<θ<90°，且 cos θ=9/41，下列何者為 tan θ 之值？", ["9/40", "40/9", "40/41", "41/40", "9/41"]],
      ["已知 0°<θ<90°，且 sin θ=√3/2，下列何者為 cos θ 之值？", ["1/2", "0", "1", "√3/2", "√2/2"]],
      ["已知三角形 ABC 中，C 為直角，sin A=3/5 且 AB=10，下列何者為三角形的周長？", ["22", "30", "26", "20", "24"]],
      ["已知 sin θ=y 且 θ 為銳角，下列何者為 cos θ？", ["√(1-y²)", "y/√(1-y²)", "以上皆非", "y", "√(1-y²)/y"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["1", "0", "4", "2", "3"]],
      ["已知 sin θ cos θ=0.4，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√0.8", "√1.8", "√1.6", "√1", "√1.2"]],
      ["下列何者為 60° 的同界角？", ["420°", "240°", "660°", "-60°", "300°"]],
      ["已知點 P(-9,-40) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["40/41", "-9/40", "9/41", "-9/41", "-40/41"]],
      ["已知點 P(-3,4) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["3/5", "4/3", "-4/5", "-3/5", "4/5"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 340° 估計至小數點第二位之值？", ["-0.34", "0.77", "0.64", "0.87", "-0.94"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 cos 610° 估計至小數點第二位之值？", ["-0.34", "0.34", "0.77", "0.94", "-0.94"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 120° 估計至小數點第二位之值？", ["0.50", "-0.77", "0.87", "-0.34", "-0.64"]],
      ["已知 P 點的極座標為 [70,30°]，下列哪一個直角坐標最接近 P 點？", ["(35,61)", "(-35,-61)", "(61,35)", "(61,-35)", "(-61,35)"]],
      ["已知在三角形 ABC 中，AB=12，BC=12，sin B=1/3，則三角形 ABC 的面積是多少？", ["30", "21", "36", "18", "24"]],
      ["已知在三角形 ABC 中，AB=10，BC=12，cos B=1/4，則 AC 的長度是多少？", ["√204", "√174", "√194", "√184", "√164"]],
      ["已知在三角形 ABC 中，AB=18，BC=24，sin C=3/4，三角形 ABC 的外接圓半徑為何？", ["10", "18", "8", "14", "12"]],
      ["已知在三角形 ABC 中，AB=16，BC=20，sin C=4/5，下列何者為 sin A？", ["1", "5/6", "4/5", "3/4", "2/3"]],
      ["已知 θ 為第三象限角，下列敘述哪些正確？", ["tan θ>0", "sin(-θ)<0", "sin θ>0", "cos θ<0", "cos(-θ)>0"], true],
    ],
  },
  {
    id: "G",
    title: "練習卷 G",
    answers: ["C", "D", "D", "E", "C", "C", "A", "E", "D", "C", "A", "E", "B", "B", "D", "E", "D", "B", "BD"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=58，BC=40，AC=42，下列何者為 cos A 之值？", ["40/42", "58/42", "42/58", "42/40", "40/58"]],
      ["已知 0°<θ<90°，且 cos θ=8/17，下列何者為 tan θ 之值？", ["8/17", "17/15", "15/17", "15/8", "8/15"]],
      ["已知 0°<θ<90°，且 sin θ=3/5，下列何者為 cos θ 之值？", ["5/4", "4/3", "√3/2", "4/5", "3/5"]],
      ["已知三角形 ABC 中，C 為直角，sin A=3/5 且 AB=10，下列何者為三角形的周長？", ["20", "22", "26", "30", "24"]],
      ["已知 sin θ=c 且 θ 為銳角，下列何者為 cos θ？", ["c", "c/√(1-c²)", "√(1-c²)", "√(1-c²)/c", "以上皆非"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["3", "0", "2", "4", "1"]],
      ["已知 sin θ cos θ=0.2，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√1.4", "√1.9", "√1.2", "√1.8", "√1"]],
      ["下列何者為 150° 的同界角？", ["-30°", "330°", "210°", "-150°", "870°"]],
      ["已知點 P(-20,-21) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["20/29", "-21/29", "21/29", "-20/29", "-20/21"]],
      ["已知點 P(3,4) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["-4/5", "4/3", "4/5", "-3/5", "3/5"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 330° 估計至小數點第二位之值？", ["-0.50", "0.34", "-0.77", "-0.34", "-0.64"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 cos 200° 估計至小數點第二位之值？", ["-0.34", "-0.17", "0.77", "-0.77", "-0.94"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 220° 估計至小數點第二位之值？", ["-0.50", "-0.64", "0.77", "0.50", "-0.34"]],
      ["已知 P 點的極座標為 [40,240°]，下列哪一個直角坐標最接近 P 點？", ["(35,20)", "(-20,-35)", "(-35,-20)", "(-20,35)", "(20,-35)"]],
      ["已知在三角形 ABC 中，AB=16，BC=9，sin B=1/3，則三角形 ABC 的面積是多少？", ["30", "21", "18", "24", "36"]],
      ["已知在三角形 ABC 中，AB=16，BC=6，cos B=1/3，則 AC 的長度是多少？", ["√218", "√248", "√208", "√238", "√228"]],
      ["已知在三角形 ABC 中，AB=18，BC=24，sin C=3/4，三角形 ABC 的外接圓半徑為何？", ["8", "14", "18", "12", "10"]],
      ["已知在三角形 ABC 中，AB=10，BC=15，sin C=1/2，下列何者為 sin A？", ["1/2", "3/4", "1", "5/6", "4/5"]],
      ["已知 θ 為第一象限角，下列敘述哪些正確？", ["sin(-θ)>0", "cos θ>0", "tan θ<0", "sin θ>0", "cos(-θ)<0"], true],
    ],
  },
  {
    id: "H",
    title: "練習卷 H",
    answers: ["D", "E", "B", "D", "E", "E", "A", "A", "B", "A", "B", "C", "A", "C", "D", "B", "A", "D", "DE"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=25，BC=7，AC=24，下列何者為 cos A 之值？", ["7/25", "24/7", "25/24", "24/25", "7/24"]],
      ["已知 0°<θ<90°，且 cos θ=9/41，下列何者為 tan θ 之值？", ["40/41", "9/41", "9/40", "41/40", "40/9"]],
      ["已知 0°<θ<90°，且 sin θ=1/2，下列何者為 cos θ 之值？", ["1/2", "√3/2", "√2/2", "0", "1"]],
      ["已知三角形 ABC 中，C 為直角，sin A=7/25 且 AB=50，下列何者為三角形的周長？", ["110", "118", "114", "112", "108"]],
      ["已知 sin θ=c 且 θ 為銳角，下列何者為 cos θ？", ["c", "√(1-c²)/c", "c/√(1-c²)", "以上皆非", "√(1-c²)"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["4", "0", "1", "3", "2"]],
      ["已知 sin θ cos θ=0.2，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√1.4", "√1.8", "√1.2", "√1.9", "√1.6"]],
      ["下列何者為 120° 的同界角？", ["-240°", "300°", "600°", "240°", "-60°"]],
      ["已知點 P(-20,-21) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["-20/21", "-20/29", "-21/29", "21/29", "20/29"]],
      ["已知點 P(8,15) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["15/17", "-15/17", "8/17", "-8/17", "15/8"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 140° 估計至小數點第二位之值？", ["0.94", "0.64", "-0.34", "-0.50", "-0.64"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 cos 560° 估計至小數點第二位之值？", ["-0.17", "-0.77", "-0.94", "-0.34", "-0.64"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 330° 估計至小數點第二位之值？", ["-0.50", "-0.64", "0.64", "0.34", "-0.94"]],
      ["已知 P 點的極座標為 [40,150°]，下列哪一個直角坐標最接近 P 點？", ["(-35,-20)", "(-20,35)", "(-35,20)", "(35,20)", "(20,-35)"]],
      ["已知在三角形 ABC 中，AB=12，BC=10，sin B=1/2，則三角形 ABC 的面積是多少？", ["42", "36", "27", "30", "24"]],
      ["已知在三角形 ABC 中，AB=10，BC=12，cos B=1/5，則 AC 的長度是多少？", ["√216", "√196", "√176", "√206", "√186"]],
      ["已知在三角形 ABC 中，AB=16，BC=20，sin C=4/5，三角形 ABC 的外接圓半徑為何？", ["10", "6", "16", "8", "12"]],
      ["已知在三角形 ABC 中，AB=10，BC=15，sin C=1/2，下列何者為 sin A？", ["1", "4/5", "1/2", "3/4", "5/6"]],
      ["已知 θ 為第四象限角，下列敘述哪些正確？", ["cos(-θ)<0", "sin θ>0", "sin(-θ)<0", "tan θ<0", "cos θ>0"], true],
    ],
  },
  {
    id: "I",
    title: "練習卷 I",
    answers: ["D", "C", "D", "B", "C", "E", "A", "B", "B", "B", "A", "A", "A", "D", "A", "D", "C", "E", "AC"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=10，BC=6，AC=8，下列何者為 cos A 之值？", ["6/8", "8/6", "6/10", "8/10", "10/8"]],
      ["已知 0°<θ<90°，且 cos θ=5/13，下列何者為 tan θ 之值？", ["13/12", "5/12", "12/5", "12/13", "5/13"]],
      ["已知 0°<θ<90°，且 sin θ=5/13，下列何者為 cos θ 之值？", ["12/5", "5/12", "5/13", "12/13", "13/12"]],
      ["已知三角形 ABC 中，C 為直角，sin A=8/17 且 AB=34，下列何者為三角形的周長？", ["86", "80", "76", "78", "82"]],
      ["已知 sin θ=x 且 θ 為銳角，下列何者為 cos θ？", ["x", "√(1-x²)/x", "√(1-x²)", "以上皆非", "x/√(1-x²)"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["1", "0", "4", "3", "2"]],
      ["已知 sin θ cos θ=0.2，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√1.4", "√1.9", "√0.8", "√1.8", "√1.6"]],
      ["下列何者為 120° 的同界角？", ["-120°", "840°", "-60°", "240°", "600°"]],
      ["已知點 P(20,21) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["21/29", "20/29", "-21/29", "-20/29", "20/21"]],
      ["已知點 P(9,-40) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["40/41", "-40/41", "-40/9", "9/41", "-9/41"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 320° 估計至小數點第二位之值？", ["-0.64", "0.77", "0.94", "0.50", "-0.77"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 cos 610° 估計至小數點第二位之值？", ["-0.34", "0.17", "0.64", "0.34", "-0.94"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 210° 估計至小數點第二位之值？", ["-0.50", "0.77", "-0.64", "-0.87", "0.94"]],
      ["已知 P 點的極座標為 [60,150°]，下列哪一個直角坐標最接近 P 點？", ["(-52,-30)", "(52,30)", "(-30,52)", "(-52,30)", "(30,-52)"]],
      ["已知在三角形 ABC 中，AB=20，BC=15，sin B=1/3，則三角形 ABC 的面積是多少？", ["50", "47", "62", "44", "56"]],
      ["已知在三角形 ABC 中，AB=18，BC=10，cos B=3/5，則 AC 的長度是多少？", ["√198", "√188", "√218", "√208", "√228"]],
      ["已知在三角形 ABC 中，AB=12，BC=18，sin C=3/5，三角形 ABC 的外接圓半徑為何？", ["16", "12", "10", "8", "6"]],
      ["已知在三角形 ABC 中，AB=16，BC=20，sin C=4/5，下列何者為 sin A？", ["2/3", "5/6", "1/2", "4/5", "1"]],
      ["已知 θ 為第四象限角，下列敘述哪些正確？", ["cos θ>0", "cos(-θ)<0", "tan θ<0", "sin(-θ)<0", "sin θ>0"], true],
    ],
  },
  {
    id: "J",
    title: "練習卷 J",
    answers: ["E", "C", "D", "A", "D", "B", "B", "B", "D", "B", "A", "A", "C", "C", "B", "A", "A", "C", "DE"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=17，BC=8，AC=15，下列何者為 cos A 之值？", ["15/8", "8/15", "8/17", "17/15", "15/17"]],
      ["已知 0°<θ<90°，且 cos θ=3/5，下列何者為 tan θ 之值？", ["4/5", "3/5", "4/3", "3/4", "5/4"]],
      ["已知 0°<θ<90°，且 sin θ=√3/2，下列何者為 cos θ 之值？", ["√3/2", "1", "√2/2", "1/2", "0"]],
      ["已知三角形 ABC 中，C 為直角，sin A=7/25 且 AB=50，下列何者為三角形的周長？", ["112", "110", "108", "118", "114"]],
      ["已知 sin θ=c 且 θ 為銳角，下列何者為 cos θ？", ["c/√(1-c²)", "c", "以上皆非", "√(1-c²)", "√(1-c²)/c"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["0", "2", "3", "4", "1"]],
      ["已知 sin θ cos θ=0.3，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√1", "√1.6", "√1.8", "√1.9", "√0.8"]],
      ["下列何者為 120° 的同界角？", ["-120°", "840°", "-60°", "600°", "240°"]],
      ["已知點 P(-5,12) 在標準位置角 θ 的終邊上，下列何者為 cos θ？", ["-12/13", "5/13", "-5/12", "-5/13", "12/13"]],
      ["已知點 P(3,-4) 在標準位置角 θ 的終邊上，下列何者為 sin θ？", ["-3/5", "-4/5", "3/5", "-4/3", "4/5"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 220° 估計至小數點第二位之值？", ["-0.64", "-0.34", "-0.87", "0.64", "-0.77"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 cos 400° 估計至小數點第二位之值？", ["0.77", "0.94", "0.34", "-0.34", "-0.64"]],
      ["下表為部分三角函數的估計值：sin10°=0.17，sin20°=0.34，sin30°=0.50，sin40°=0.64，sin50°=0.77，sin60°=0.87，sin70°=0.94，sin80°=0.98。下列選項何者為 sin 250° 估計至小數點第二位之值？", ["0.64", "0.77", "-0.94", "-0.34", "-0.50"]],
      ["已知 P 點的極座標為 [40,330°]，下列哪一個直角坐標最接近 P 點？", ["(-35,-20)", "(-20,35)", "(35,-20)", "(35,20)", "(20,-35)"]],
      ["已知在三角形 ABC 中，AB=16，BC=8，sin B=1/2，則三角形 ABC 的面積是多少？", ["44", "32", "29", "26", "38"]],
      ["已知在三角形 ABC 中，AB=14，BC=6，cos B=1/4，則 AC 的長度是多少？", ["√190", "√180", "√200", "√210", "√170"]],
      ["已知在三角形 ABC 中，AB=16，BC=20，sin C=4/5，三角形 ABC 的外接圓半徑為何？", ["10", "8", "16", "12", "6"]],
      ["已知在三角形 ABC 中，AB=16，BC=20，sin C=4/5，下列何者為 sin A？", ["2/3", "4/5", "1", "5/6", "1/2"]],
      ["已知 θ 為第一象限角，下列敘述哪些正確？", ["sin(-θ)>0", "tan θ<0", "cos(-θ)<0", "sin θ>0", "cos θ>0"], true],
    ],
  },
];

const state = {
  paperIndex: 0,
  typeIndex: 0,
  mode: "paper",
  graded: false,
  typeGraded: false,
  typeQuestions: [],
  paperScoreText: "尚未批改",
  typeScoreText: "題型練習",
  wrongOnly: false,
};

const studentForm = document.querySelector("#studentForm");
const classInput = document.querySelector("#classInput");
const seatInput = document.querySelector("#seatInput");
const nameInput = document.querySelector("#nameInput");
const studentStatus = document.querySelector("#studentStatus");
const studentNotice = document.querySelector("#studentNotice");
const queryRecordsBtn = document.querySelector("#queryRecordsBtn");
const queryRecordsStatus = document.querySelector("#queryRecordsStatus");
const studentRecordsPanel = document.querySelector("#studentRecordsPanel");
const paperView = document.querySelector("#paperView");
const typePracticeView = document.querySelector("#typePracticeView");
const paperModeBtn = document.querySelector("#paperModeBtn");
const typeModeBtn = document.querySelector("#typeModeBtn");
const paperSelect = document.querySelector("#paperSelect");
const typeSelect = document.querySelector("#typeSelect");
const quizForm = document.querySelector("#quizForm");
const typePracticeForm = document.querySelector("#typePracticeForm");
const scorePill = document.querySelector("#scorePill");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");
const typeProgressText = document.querySelector("#typeProgressText");
const typeProgressFill = document.querySelector("#typeProgressFill");
const resultPanel = document.querySelector("#resultPanel");
const typeResultPanel = document.querySelector("#typeResultPanel");
const leaderboardList = document.querySelector("#leaderboardList");
const clearLeaderboardBtn = document.querySelector("#clearLeaderboardBtn");
const resetBtn = document.querySelector("#resetBtn");
const gradeBtn = document.querySelector("#gradeBtn");
const showWrongBtn = document.querySelector("#showWrongBtn");
const typeResetBtn = document.querySelector("#typeResetBtn");
const typeGradeBtn = document.querySelector("#typeGradeBtn");
const typeNewBtn = document.querySelector("#typeNewBtn");

function answerKey(answer) {
  return answer.split("").sort().join("");
}

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function unique(items) {
  return [...new Set(items.map(String))];
}

function formatFraction(numerator, denominator) {
  if (denominator === 1) return String(numerator);
  return `${numerator}/${denominator}`;
}

function makeSingleQuestion(stem, correct, distractors) {
  const options = shuffle(unique([correct, ...distractors])).slice(0, 5);
  if (!options.includes(correct)) {
    options[0] = correct;
  }
  const answer = labels[options.indexOf(correct)];
  return { question: [stem, options], answer };
}

function makeMultiQuestion(stem, correctOptions, distractors) {
  const options = shuffle(unique([...correctOptions, ...distractors])).slice(0, 5);
  correctOptions.forEach((correct, index) => {
    if (!options.includes(correct)) {
      options[index] = correct;
    }
  });
  const answer = options
    .map((option, index) => correctOptions.includes(option) ? labels[index] : "")
    .join("");
  return { question: [stem, options, true], answer };
}

function generateQuestion(typeIndex) {
  const generators = [
    generateRightTriangleCos,
    generateCosToTan,
    generateSinToCos,
    generateTrianglePerimeter,
    generateSymbolicCos,
    generateIdentity,
    generateSumFromProduct,
    generateCoterminalAngle,
    generatePointCos,
    generatePointSin,
    () => generateTableSin("下表為部分三角函數的估計值："),
    generateTableCos,
    () => generateTableSin("下表為部分三角函數的估計值："),
    generatePolarToRectangular,
    generateTriangleArea,
    generateCosineLaw,
    generateCircumradius,
    generateLawOfSinesSinA,
    generateQuadrantMulti,
  ];
  return generators[typeIndex]();
}

function generateRightTriangleCos() {
  const [short, long, hypotenuse] = pick(pythagoreanTriples);
  const scale = pick([1, 2]);
  const bc = short * scale;
  const ac = long * scale;
  const ab = hypotenuse * scale;
  return makeSingleQuestion(
    `在三角形 ABC 中，已知 ∠C 為直角，AB=${ab}，BC=${bc}，AC=${ac}，下列何者為 cos A 之值？`,
    formatFraction(ac, ab),
    [formatFraction(bc, ab), formatFraction(ab, ac), formatFraction(bc, ac), formatFraction(ac, bc)]
  );
}

function generateCosToTan() {
  const [adjacent, opposite, hypotenuse] = pick(pythagoreanTriples);
  return makeSingleQuestion(
    `已知 0°<θ<90°，且 cos θ=${formatFraction(adjacent, hypotenuse)}，下列何者為 tan θ 之值？`,
    formatFraction(opposite, adjacent),
    [formatFraction(adjacent, opposite), formatFraction(adjacent, hypotenuse), formatFraction(opposite, hypotenuse), formatFraction(hypotenuse, opposite)]
  );
}

function generateSinToCos() {
  const data = pick([
    ["1/2", "√3/2", ["1/2", "√2/2", "0", "1"]],
    ["√2/2", "√2/2", ["1/2", "√3/2", "0", "1"]],
    ["√3/2", "1/2", ["√3/2", "√2/2", "0", "1"]],
    ["3/5", "4/5", ["3/5", "5/4", "4/3", "√3/2"]],
    ["5/13", "12/13", ["5/12", "13/12", "5/13", "12/5"]],
  ]);
  return makeSingleQuestion(
    `已知 0°<θ<90°，且 sin θ=${data[0]}，下列何者為 cos θ 之值？`,
    data[1],
    data[2]
  );
}

function generateTrianglePerimeter() {
  const [opposite, adjacent, hypotenuse] = pick(pythagoreanTriples);
  const scale = pick([2, 3]);
  const ab = hypotenuse * scale;
  const perimeter = (opposite + adjacent + hypotenuse) * scale;
  return makeSingleQuestion(
    `已知三角形 ABC 中，C 為直角，sin A=${formatFraction(opposite, hypotenuse)} 且 AB=${ab}，下列何者為三角形的周長？`,
    String(perimeter),
    [perimeter - scale * 2, perimeter - scale, perimeter + scale, perimeter + scale * 3].map(String)
  );
}

function generateSymbolicCos() {
  const letter = pick(["a", "b", "c", "d", "e", "f", "x", "y"]);
  return makeSingleQuestion(
    `已知 sin θ=${letter} 且 θ 為銳角，下列何者為 cos θ？`,
    `√(1-${letter}²)`,
    [letter, `${letter}/√(1-${letter}²)`, `√(1-${letter}²)/${letter}`, "以上皆非"]
  );
}

function generateIdentity() {
  return makeSingleQuestion(
    "下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？",
    "2",
    ["0", "1", "3", "4"]
  );
}

function generateSumFromProduct() {
  const product = pick(["0.1", "0.2", "0.3", "0.4", "0.45"]);
  const correct = `√${(1 + 2 * Number(product)).toFixed(1)}`;
  return makeSingleQuestion(
    `已知 sin θ cos θ=${product}，且 0<θ<90°，下列何者為 sin θ+cos θ？`,
    correct,
    ["√0.8", "√1", "√1.2", "√1.4", "√1.6", "√1.8", "√1.9"].filter((option) => option !== correct)
  );
}

function generateCoterminalAngle() {
  const angle = pick([45, 60, 75, 120, 150, 210, 285, 315]);
  const correct = pick([angle + 360, angle - 360, angle + 720]);
  const distractors = [360 - angle, -angle, angle + 180, angle - 180, 720 - angle]
    .filter((value) => Math.abs(value - angle) % 360 !== 0)
    .map((value) => `${value}°`);
  return makeSingleQuestion(
    `下列何者為 ${angle}° 的同界角？`,
    `${correct}°`,
    distractors
  );
}

function generatePointCos() {
  const [xBase, yBase, radius] = pick(pythagoreanTriples);
  const xSign = pick([1, -1]);
  const ySign = pick([1, -1]);
  const x = xBase * xSign;
  const y = yBase * ySign;
  return makeSingleQuestion(
    `已知點 P(${x},${y}) 在標準位置角 θ 的終邊上，下列何者為 cos θ？`,
    formatFraction(x, radius),
    [formatFraction(y, radius), formatFraction(-x, radius), formatFraction(-y, radius), formatFraction(x, yBase)]
  );
}

function generatePointSin() {
  const [xBase, yBase, radius] = pick(pythagoreanTriples);
  const xSign = pick([1, -1]);
  const ySign = pick([1, -1]);
  const x = xBase * xSign;
  const y = yBase * ySign;
  return makeSingleQuestion(
    `已知點 P(${x},${y}) 在標準位置角 θ 的終邊上，下列何者為 sin θ？`,
    formatFraction(y, radius),
    [formatFraction(x, radius), formatFraction(-y, radius), formatFraction(-x, radius), formatFraction(y, xBase)]
  );
}

function sinEstimate(angle) {
  const normalized = ((angle % 360) + 360) % 360;
  const reference = normalized <= 90 ? normalized : normalized <= 180 ? 180 - normalized : normalized <= 270 ? normalized - 180 : 360 - normalized;
  const sign = normalized > 180 ? "-" : "";
  return `${sign}${sinTable[reference]}`;
}

function cosEstimate(angle) {
  const normalized = ((angle % 360) + 360) % 360;
  const reference = normalized <= 90 ? normalized : normalized <= 180 ? 180 - normalized : normalized <= 270 ? normalized - 180 : 360 - normalized;
  const sign = normalized > 90 && normalized < 270 ? "-" : "";
  return `${sign}${sinTable[90 - reference]}`;
}

function generateTableSin(prefix) {
  const angle = pick([120, 140, 150, 210, 220, 250, 300, 310, 320, 330, 340]);
  const correct = sinEstimate(angle);
  return makeSingleQuestion(
    `${prefix}${sinTableText}。下列選項何者為 sin ${angle}° 估計至小數點第二位之值？`,
    correct,
    ["0.34", "-0.34", "0.50", "-0.50", "0.64", "-0.64", "0.77", "-0.77", "0.87", "-0.87", "0.94", "-0.94"].filter((option) => option !== correct)
  );
}

function generateTableCos() {
  const angle = pick([200, 290, 400, 470, 560, 610, 620, 650]);
  const correct = cosEstimate(angle);
  return makeSingleQuestion(
    `下表為部分三角函數的估計值：${sinTableText}。下列選項何者為 cos ${angle}° 估計至小數點第二位之值？`,
    correct,
    ["0.17", "-0.17", "0.34", "-0.34", "0.64", "-0.64", "0.77", "-0.77", "0.94", "-0.94"].filter((option) => option !== correct)
  );
}

function generatePolarToRectangular() {
  const radius = pick([40, 50, 60, 70, 80]);
  const angle = pick([30, 120, 150, 210, 220, 240, 300, 330]);
  const radians = angle * Math.PI / 180;
  const x = Math.round(radius * Math.cos(radians));
  const y = Math.round(radius * Math.sin(radians));
  return makeSingleQuestion(
    `已知 P 點的極座標為 [${radius},${angle}°]，下列哪一個直角坐標最接近 P 點？`,
    `(${x},${y})`,
    [`(${-x},${y})`, `(${x},${-y})`, `(${y},${x})`, `(${-y},${-x})`]
  );
}

function generateTriangleArea() {
  let ab;
  let bc;
  let sinB;
  let area;
  do {
    ab = pick([10, 12, 14, 16, 18, 20]);
    bc = pick([8, 9, 10, 12, 15]);
    sinB = pick([[1, 3], [2, 5], [3, 7], [1, 4], [1, 2]]);
    area = ab * bc * sinB[0] / (2 * sinB[1]);
  } while (!Number.isInteger(area));
  return makeSingleQuestion(
    `已知在三角形 ABC 中，AB=${ab}，BC=${bc}，sin B=${formatFraction(sinB[0], sinB[1])}，則三角形 ABC 的面積是多少？`,
    String(area),
    [area - 6, area - 3, area + 6, area + 12].map(String)
  );
}

function generateCosineLaw() {
  let ab;
  let bc;
  let cosB;
  let value;
  do {
    ab = pick([10, 12, 14, 16, 18]);
    bc = pick([6, 8, 9, 10, 12, 15]);
    cosB = pick([[1, 5], [1, 4], [1, 3], [2, 5], [3, 5]]);
    value = ab * ab + bc * bc - 2 * ab * bc * cosB[0] / cosB[1];
  } while (!Number.isInteger(value));
  return makeSingleQuestion(
    `已知在三角形 ABC 中，AB=${ab}，BC=${bc}，cos B=${formatFraction(cosB[0], cosB[1])}，則 AC 的長度是多少？`,
    `√${value}`,
    [value - 20, value - 10, value + 10, value + 20].filter((item) => item > 0).map((item) => `√${item}`)
  );
}

function generateCircumradius() {
  const data = pick([
    [10, 15, 1, 2],
    [12, 18, 3, 5],
    [16, 20, 4, 5],
    [18, 24, 3, 4],
    [20, 24, 5, 8],
  ]);
  const [ab, bc, sinNumerator, sinDenominator] = data;
  const radius = ab * sinDenominator / (2 * sinNumerator);
  return makeSingleQuestion(
    `已知在三角形 ABC 中，AB=${ab}，BC=${bc}，sin C=${formatFraction(sinNumerator, sinDenominator)}，三角形 ABC 的外接圓半徑為何？`,
    String(radius),
    [radius - 4, radius - 2, radius + 2, radius + 6].filter((item) => item > 0).map(String)
  );
}

function generateLawOfSinesSinA() {
  const data = pick([
    [10, 15, 1, 2],
    [12, 18, 3, 5],
    [16, 20, 4, 5],
    [18, 24, 3, 4],
    [20, 24, 5, 8],
  ]);
  const [ab, bc, sinNumerator, sinDenominator] = data;
  const numerator = bc * sinNumerator;
  const denominator = ab * sinDenominator;
  const divisor = gcd(numerator, denominator);
  const answer = formatFraction(numerator / divisor, denominator / divisor);
  return makeSingleQuestion(
    `已知在三角形 ABC 中，AB=${ab}，BC=${bc}，sin C=${formatFraction(sinNumerator, sinDenominator)}，下列何者為 sin A？`,
    answer,
    ["1/2", "2/3", "3/4", "4/5", "5/6", "1"].filter((option) => option !== answer)
  );
}

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function generateQuadrantMulti() {
  const quadrant = pick([
    ["第一象限", ["sin θ>0", "cos θ>0"], ["tan θ<0", "sin(-θ)>0", "cos(-θ)<0"]],
    ["第二象限", ["sin θ>0", "tan θ<0"], ["cos θ>0", "sin(-θ)>0", "cos(-θ)<0"]],
    ["第三象限", ["cos θ<0", "tan θ>0"], ["sin θ>0", "sin(-θ)<0", "cos(-θ)>0"]],
    ["第四象限", ["cos θ>0", "tan θ<0"], ["sin θ>0", "sin(-θ)<0", "cos(-θ)<0"]],
  ]);
  return makeMultiQuestion(
    `已知 θ 為${quadrant[0]}角，下列敘述哪些正確？`,
    quadrant[1],
    quadrant[2]
  );
}

function selectedAnswer(questionIndex) {
  const inputs = [...quizForm.querySelectorAll(`[name="q${questionIndex}"]:checked`)];
  return inputs.map((input) => input.value).sort().join("");
}

function selectedTypeAnswer(questionIndex) {
  const inputs = [...typePracticeForm.querySelectorAll(`[name="t${questionIndex}"]:checked`)];
  return inputs.map((input) => input.value).sort().join("");
}

function currentPaper() {
  return papers[state.paperIndex];
}

function currentTypeQuestions() {
  return state.typeQuestions;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function answerLabelText(question, answer) {
  const [, options] = question;
  return answer
    .split("")
    .map((label) => {
      const option = options[labels.indexOf(label)];
      return `(${label}) ${option}`;
    })
    .join("、");
}

function explanationSteps(index) {
  const steps = [
    [
      "先找直角。對著直角的邊是斜邊，本題斜邊是 AB。",
      "要求 cos A，要站在角 A 的位置看三角形：靠著角 A 的直角邊是鄰邊，另一條直角邊是對邊。",
      "公式是 cos A = 鄰邊 / 斜邊，所以把 AC 放分子、AB 放分母。",
      "最後和選項比對，選出相同的分數。",
    ],
    [
      "先把 cos θ 看成 鄰邊 / 斜邊。題目給的分子是鄰邊，分母是斜邊。",
      "用畢氏定理找對邊：對邊² = 斜邊² - 鄰邊²。",
      "找到對邊後，再用 tan θ = 對邊 / 鄰邊。",
      "θ 是銳角，所以邊長和三角函數值都取正。",
    ],
    [
      "先記住基本公式：sin²θ + cos²θ = 1。",
      "把題目給的 sin θ 代進去，得到 cos²θ = 1 - sin²θ。",
      "再開根號得到 cos θ。",
      "因為 θ 是銳角，cos θ 是正的，所以不用加負號。",
    ],
    [
      "sin A = 對邊 / 斜邊。題目給 sin A 和斜邊 AB，可以先算出對邊。",
      "有了對邊和斜邊後，用畢氏定理算另一條直角邊。",
      "三角形周長就是三邊相加：對邊 + 鄰邊 + 斜邊。",
      "這類題目最容易錯在把 sin 的對邊和鄰邊看反。",
    ],
    [
      "使用公式 sin²θ + cos²θ = 1。",
      "已知 sin θ 是題目給的字母，所以 cos²θ = 1 - 那個字母²。",
      "開根號得到 cos θ = √(1 - 字母²)。",
      "題目說 θ 是銳角，所以 cos θ 要取正值。",
    ],
    [
      "可以先把 sin θ 當成 a，cos θ 當成 b。",
      "套用公式：(a+b)² + (a-b)² = 2a² + 2b²。",
      "所以原式 = 2sin²θ + 2cos²θ = 2(sin²θ + cos²θ)。",
      "因為 sin²θ + cos²θ = 1，所以最後答案是 2。",
    ],
    [
      "要求 sin θ + cos θ，可以先把它平方。",
      "(sin θ + cos θ)² = sin²θ + 2sinθcosθ + cos²θ。",
      "sin²θ + cos²θ = 1，所以變成 1 + 2sinθcosθ。",
      "把題目給的 sinθcosθ 代入後開根號。θ 是銳角，所以取正根。",
    ],
    [
      "同界角的意思是兩個角最後停在同一條終邊上。",
      "判斷方法是用 選項角度 - 題目角度。",
      "如果差是 360° 的倍數，例如 360°、-360°、720°、-720°，就是同界角。",
      "不是只看角度正負，而是看相差多少度。",
    ],
    [
      "點 P(x,y) 在終邊上時，先算 r = √(x² + y²)。",
      "cos θ 的公式是 x / r，也就是 x 坐標除以半徑。",
      "如果 x 是負的，cos θ 就是負的；如果 x 是正的，cos θ 就是正的。",
      "這題不要拿 y 去算 cos，y 是給 sin 用的。",
    ],
    [
      "點 P(x,y) 在終邊上時，先算 r = √(x² + y²)。",
      "sin θ 的公式是 y / r，也就是 y 坐標除以半徑。",
      "如果 y 是負的，sin θ 就是負的；如果 y 是正的，sin θ 就是正的。",
      "這題不要拿 x 去算 sin，x 是給 cos 用的。",
    ],
    [
      "先把角度放到 0° 到 360° 之間，再判斷它在哪一象限。",
      "接著找參考角，也就是它離 x 軸最近的銳角。",
      "sin 在第一、第二象限是正；第三、第四象限是負。",
      "最後查表找參考角的 sin 值，再補上正負號。",
    ],
    [
      "先把角度減掉或加上 360°，化成比較容易看的同界角。",
      "再判斷象限：cos 在第一、第四象限是正；第二、第三象限是負。",
      "查表是 sin 表，所以可用 cos θ = sin(90° - 參考角) 來換。",
      "最後把查到的數值加上正負號。",
    ],
    [
      "做法和前面的 sin 查表題一樣。",
      "先判斷象限，再找參考角。",
      "sin 在第一、第二象限為正，在第三、第四象限為負。",
      "查表得到參考角的數值後，依象限補正負號。",
    ],
    [
      "極座標 [r,θ] 轉直角坐標，要用 x = r cos θ，y = r sin θ。",
      "先看 θ 在哪個象限，決定 x 和 y 的正負。",
      "再用特殊角或近似值算出 x、y。",
      "選項通常會放正負號相反或 x、y 對調的答案，要特別小心。",
    ],
    [
      "題目給兩邊和夾角的 sin，可以用面積公式。",
      "公式是 面積 = 1/2 × 兩邊 × sin 夾角。",
      "本題角 B 夾在 AB 和 BC 之間，所以用 1/2 × AB × BC × sin B。",
      "先乘完再約分，會比較不容易算錯。",
    ],
    [
      "看到兩邊和夾角的 cos，要想到餘弦定理。",
      "角 B 夾在 AB 和 BC 中間，所以要求對面的 AC。",
      "公式是 AC² = AB² + BC² - 2 × AB × BC × cos B。",
      "算出 AC² 後，答案通常寫成 √某數。",
    ],
    [
      "使用正弦定理的外接圓版本：邊長 / 對角的 sin = 2R。",
      "AB 這條邊對到角 C，所以 AB / sin C = 2R。",
      "要求 R，就把結果再除以 2，也就是 R = AB / (2sin C)。",
      "代入分數時可以先把除以分數改成乘倒數。",
    ],
    [
      "這題用正弦定理比較快。",
      "AB 對到角 C，BC 對到角 A，所以 AB / sin C = BC / sin A。",
      "交叉相乘整理：sin A = BC × sin C / AB。",
      "最後把分數約分到最簡。",
    ],
    [
      "先背象限正負：第一象限 sin、cos、tan 都正。",
      "第二象限 sin 正，cos 負，tan 負；第三象限 sin 負，cos 負，tan 正；第四象限 sin 負，cos 正，tan 負。",
      "遇到負角時要記得：sin(-θ) = -sinθ，cos(-θ) = cosθ，tan(-θ) = -tanθ。",
      "多選題要一個選項一個選項判斷，不要只選第一個看起來對的。",
    ],
  ];
  return steps[index] || ["先判斷題型，再套用對應公式，最後和選項比對。"];
}

function explanationHtml(index, question, answer) {
  const correctText = answerLabelText(question, answer);
  const steps = explanationSteps(index)
    .map((step) => `<li>${escapeHtml(step)}</li>`)
    .join("");
  return `
    <h3>詳解算法</h3>
    <p>正確答案：${escapeHtml(correctText)}</p>
    <ol>${steps}</ol>
  `;
}

function getStudent() {
  return {
    className: classInput.value.trim(),
    seatNumber: seatInput.value.trim(),
    studentName: nameInput.value.trim(),
  };
}

function isStudentReady(student = getStudent()) {
  return Boolean(student.className && student.seatNumber && student.studentName);
}

function updateStudentStatus() {
  const ready = isStudentReady();
  studentStatus.textContent = ready ? "已填寫" : "尚未填寫";
  studentStatus.classList.toggle("is-ready", ready);
  if (ready) {
    studentNotice.hidden = true;
    localStorage.setItem(studentKey, JSON.stringify(getStudent()));
  }
}

function loadStudent() {
  try {
    const saved = JSON.parse(localStorage.getItem(studentKey));
    if (!saved) return;
    classInput.value = saved.className || "";
    seatInput.value = saved.seatNumber || "";
    nameInput.value = saved.studentName || "";
  } catch {
    localStorage.removeItem(studentKey);
  }
  updateStudentStatus();
}

function loadLeaderboard() {
  try {
    return JSON.parse(localStorage.getItem(leaderboardKey)) || [];
  } catch {
    localStorage.removeItem(leaderboardKey);
    return [];
  }
}

function saveLeaderboard(records) {
  localStorage.setItem(leaderboardKey, JSON.stringify(records));
}

function hasSharedLeaderboard() {
  return Boolean(sharedLeaderboardUrl.trim());
}

function requestSharedLeaderboard(params = {}) {
  return new Promise((resolve, reject) => {
    const callbackName = `leaderboardCallback_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const url = new URL(sharedLeaderboardUrl);
    Object.entries({ ...params, callback: callbackName }).forEach(([key, value]) => {
      url.searchParams.set(key, value);
    });

    window[callbackName] = (data) => {
      delete window[callbackName];
      script.remove();
      resolve(data);
    };
    script.onerror = () => {
      delete window[callbackName];
      script.remove();
      reject(new Error("shared leaderboard request failed"));
    };
    script.src = url.toString();
    document.body.appendChild(script);
  });
}

async function loadSharedLeaderboard() {
  if (!hasSharedLeaderboard()) return loadLeaderboard();
  try {
    const data = await requestSharedLeaderboard({ action: "leaderboard" });
    if (data && data.ok && Array.isArray(data.records)) {
      return data.records;
    }
  } catch {
    return loadLeaderboard();
  }
  return loadLeaderboard();
}

async function renderLeaderboard(records) {
  const leaderboardRecords = records || await loadSharedLeaderboard();
  if (!leaderboardRecords.length) {
    leaderboardList.innerHTML = `<li class="empty-rank">尚無紀錄，完成一次批改後會出現在這裡。</li>`;
    return;
  }

  leaderboardList.innerHTML = groupLeaderboardByPaper(leaderboardRecords)
    .map(({ paperTitle, records: paperRecords }) => `
      <li class="paper-rank-head">${escapeHtml(paperTitle)}</li>
      ${paperRecords.map((record, index) => `
        <li>
          <span class="rank-num">#${index + 1}</span>
          <span class="rank-main">
            <span class="rank-name">${escapeHtml(record.studentName)}</span>
            <span class="rank-meta">${escapeHtml(record.className)} ${escapeHtml(record.seatNumber)} 號｜${escapeHtml(record.finishedAt)}</span>
          </span>
          <span class="rank-score">${record.percent} 分</span>
        </li>
      `).join("")}
    `).join("");
}

function groupLeaderboardByPaper(records) {
  const groups = {};
  records.forEach((record) => {
    const paperTitle = record.paperTitle || "未指定考卷";
    if (!groups[paperTitle]) groups[paperTitle] = [];
    groups[paperTitle].push(record);
  });

  return Object.keys(groups)
    .sort((a, b) => paperSortValue(a) - paperSortValue(b))
    .map((paperTitle) => ({
      paperTitle,
      records: groups[paperTitle]
        .sort((a, b) => {
          if (b.percent !== a.percent) return b.percent - a.percent;
          if (b.correct !== a.correct) return b.correct - a.correct;
          return new Date(b.createdAt) - new Date(a.createdAt);
        })
        .slice(0, 5),
    }));
}

async function queryStudentRecords() {
  const className = classInput.value.trim();
  const seatNumber = seatInput.value.trim();

  studentRecordsPanel.hidden = true;
  studentRecordsPanel.innerHTML = "";
  queryRecordsStatus.classList.remove("is-error");

  if (!className || !seatNumber) {
    queryRecordsStatus.textContent = "請先填班級與座號";
    queryRecordsStatus.classList.add("is-error");
    return;
  }

  queryRecordsBtn.disabled = true;
  queryRecordsStatus.textContent = "查詢中...";

  try {
    const data = await requestStudentRecords(className, seatNumber);
    if (!data || !data.ok || data.scope !== "studentRecords" || !Array.isArray(data.records)) {
      throw new Error("invalid student records response");
    }
    renderStudentRecords(data.records);
    queryRecordsStatus.textContent = data.records.length ? `找到 ${data.records.length} 筆` : "沒有紀錄";
  } catch {
    queryRecordsStatus.textContent = "查詢失敗，稍後再試";
    queryRecordsStatus.classList.add("is-error");
  } finally {
    queryRecordsBtn.disabled = false;
  }
}

async function requestStudentRecords(className, seatNumber) {
  if (hasSharedLeaderboard()) {
    return requestSharedLeaderboard({
      action: "studentRecords",
      className,
      seatNumber,
    });
  }

  const records = loadLeaderboard().filter((record) => {
    return normalizeText(record.className) === normalizeText(className)
      && splitSeatNumbers(record.seatNumber).includes(normalizeSeatNumber(seatNumber));
  });
  return { ok: true, scope: "studentRecords", records };
}

function renderStudentRecords(records) {
  studentRecordsPanel.hidden = false;
  if (!records.length) {
    studentRecordsPanel.innerHTML = `<p>查不到這個班級座號的完整考卷紀錄。</p>`;
    return;
  }

  studentRecordsPanel.innerHTML = `
    <ul class="student-records-list">
      ${records.map((record) => `
        <li>
          <span class="record-main">
            <span class="record-title">${escapeHtml(record.paperTitle || "未指定考卷")}</span>
            <span class="record-meta">${escapeHtml(record.finishedAt || record.createdAt || "")}｜${escapeHtml(record.studentName || "")}</span>
            <span class="record-wrong">錯題：${escapeHtml(formatWrongQuestions(record.wrongQuestions))}</span>
          </span>
          <span class="record-score">${Number(record.percent) || 0} 分</span>
        </li>
      `).join("")}
    </ul>
  `;
}

function formatWrongQuestions(value) {
  const text = String(value || "").trim();
  if (!text) return "未紀錄";
  if (text === "none") return "無";
  return text;
}

function splitSeatNumbers(value) {
  const text = String(value || "").trim();
  if (!text) return [];

  const separated = text
    .replace(/[,，、＋+&]/g, " ")
    .split(/\s+/)
    .filter(Boolean);
  if (separated.length > 1) return separated.map(normalizeSeatNumber);

  const digits = text.replace(/\D/g, "");
  if (digits.length === 4) {
    return [digits.slice(0, 2), digits.slice(2, 4)].map(normalizeSeatNumber);
  }
  return [normalizeSeatNumber(text)];
}

function normalizeSeatNumber(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (!digits) return String(value || "").trim();
  return String(Number(digits));
}

function normalizeText(value) {
  return String(value || "").trim();
}

function paperSortValue(paperTitle) {
  const order = ["練習卷 A", "練習卷 B", "練習卷 C", "練習卷 D", "練習卷 E", "練習卷 F", "練習卷 G", "練習卷 H", "練習卷 I", "練習卷 J"];
  const index = order.indexOf(String(paperTitle || ""));
  return index === -1 ? 999 : index;
}

async function addLeaderboardRecord(record) {
  if (hasSharedLeaderboard()) {
    try {
      const data = await requestSharedLeaderboard({ action: "submit", ...record });
      if (data && data.ok && Array.isArray(data.records)) {
        await renderLeaderboard(data.records);
        return;
      }
    } catch {
      // Keep a local backup when the shared leaderboard is temporarily unreachable.
    }
  }

  const records = loadLeaderboard();
  records.push(record);
  records.sort((a, b) => {
    if (b.percent !== a.percent) return b.percent - a.percent;
    if (b.correct !== a.correct) return b.correct - a.correct;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
  saveLeaderboard(records.slice(0, 100));
  await renderLeaderboard(records);
}

function updateLeaderboardButton() {
  clearLeaderboardBtn.textContent = hasSharedLeaderboard() ? "重新整理" : "清除紀錄";
}

function setMode(mode) {
  state.mode = mode;
  const isTypePractice = mode === "type";
  paperView.hidden = isTypePractice;
  typePracticeView.hidden = !isTypePractice;
  paperModeBtn.classList.toggle("is-active", !isTypePractice);
  typeModeBtn.classList.toggle("is-active", isTypePractice);
  scorePill.textContent = isTypePractice ? state.typeScoreText : state.paperScoreText;
}

function renderPaperOptions() {
  paperSelect.innerHTML = papers
    .map((paper, index) => `<option value="${index}">${paper.title}</option>`)
    .join("");
}

function renderTypeOptions() {
  typeSelect.innerHTML = typeTitles
    .map((title, index) => `<option value="${index}">${title}</option>`)
    .join("");
}

function renderQuiz() {
  const paper = currentPaper();
  quizForm.innerHTML = paper.questions.map((question, index) => {
    const [stem, options, multiple] = question;
    const type = multiple ? "多選" : "單選";
    const inputType = multiple ? "checkbox" : "radio";
    const optionHtml = options.map((option, optionIndex) => {
      const label = labels[optionIndex];
      return `
        <label class="option">
          <input type="${inputType}" name="q${index}" value="${label}">
          <span>(${label}) ${option}</span>
        </label>
      `;
    }).join("");

    return `
      <article class="question" data-question="${index}">
        <div class="q-head">
          <span class="q-num">第 ${index + 1} 題</span>
          <span class="q-type">${type}</span>
        </div>
        <p class="stem">${stem}</p>
        <div class="options">${optionHtml}</div>
        <div class="feedback" hidden></div>
        <button class="explanation-toggle" type="button" data-explanation="${index}" hidden>看詳解</button>
        <div class="explanation-panel" hidden></div>
      </article>
    `;
  }).join("");
  state.graded = false;
  state.wrongOnly = false;
  showWrongBtn.textContent = "只看錯題";
  resultPanel.hidden = true;
  state.paperScoreText = "尚未批改";
  scorePill.textContent = state.paperScoreText;
  updateProgress();
}

function renderTypePractice() {
  state.typeQuestions = Array.from({ length: 5 }, (_, index) => ({
    paperTitle: `第 ${index + 1} 題`,
    ...generateQuestion(state.typeIndex),
  }));
  const typeQuestions = currentTypeQuestions();
  typePracticeForm.innerHTML = typeQuestions.map((item, index) => {
    const [stem, options, multiple] = item.question;
    const type = multiple ? "多選" : "單選";
    const inputType = multiple ? "checkbox" : "radio";
    const optionHtml = options.map((option, optionIndex) => {
      const label = labels[optionIndex];
      return `
        <label class="option">
          <input type="${inputType}" name="t${index}" value="${label}">
          <span>(${label}) ${option}</span>
        </label>
      `;
    }).join("");

    return `
      <article class="question" data-type-question="${index}">
        <div class="q-head">
          <span class="q-num">${item.paperTitle} 變式</span>
          <span class="q-type">${type}</span>
        </div>
        <p class="stem">${stem}</p>
        <div class="options">${optionHtml}</div>
        <div class="feedback" hidden></div>
      </article>
    `;
  }).join("");
  state.typeGraded = false;
  typeResultPanel.hidden = true;
  state.typeScoreText = "題型練習";
  if (state.mode === "type") {
    scorePill.textContent = state.typeScoreText;
  }
  updateTypeProgress();
}

function updateProgress() {
  const paper = currentPaper();
  const answered = paper.questions.filter((_, index) => selectedAnswer(index)).length;
  progressText.textContent = `${answered} / ${paper.questions.length} 題`;
  progressFill.style.width = `${Math.round((answered / paper.questions.length) * 100)}%`;
}

function updateTypeProgress() {
  const typeQuestions = currentTypeQuestions();
  const answered = typeQuestions.filter((_, index) => selectedTypeAnswer(index)).length;
  typeProgressText.textContent = `${answered} / ${typeQuestions.length} 題`;
  typeProgressFill.style.width = `${Math.round((answered / typeQuestions.length) * 100)}%`;
}

function gradeQuiz() {
  const student = getStudent();
  if (!isStudentReady(student)) {
    studentNotice.hidden = false;
    studentForm.reportValidity();
    return;
  }

  const paper = currentPaper();
  const wasGraded = state.graded;
  let correct = 0;
  const wrong = [];

  paper.questions.forEach((question, index) => {
    const expected = answerKey(paper.answers[index]);
    const selected = selectedAnswer(index);
    const article = quizForm.querySelector(`[data-question="${index}"]`);
    const feedback = article.querySelector(".feedback");
    const explanationButton = article.querySelector(".explanation-toggle");
    const explanationPanel = article.querySelector(".explanation-panel");
    const isCorrect = selected === expected;
    article.classList.toggle("is-correct", isCorrect);
    article.classList.toggle("is-wrong", !isCorrect);
    feedback.hidden = false;
    feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
    feedback.textContent = isCorrect
      ? `答對了。正解：${paper.answers[index]}`
      : `再看一次。你的答案：${selected || "未作答"}；正解：${paper.answers[index]}`;
    explanationButton.hidden = false;
    explanationButton.textContent = "看詳解";
    explanationButton.setAttribute("aria-expanded", "false");
    explanationPanel.hidden = true;
    explanationPanel.innerHTML = explanationHtml(index, question, paper.answers[index]);
    if (isCorrect) {
      correct += 1;
    } else {
      wrong.push(index + 1);
    }
  });

  state.graded = true;
  const percent = Math.round((correct / paper.questions.length) * 100);
  const createdAt = new Date();
  state.paperScoreText = `${percent} 分`;
  scorePill.textContent = state.paperScoreText;
  resultPanel.hidden = false;
  resultPanel.innerHTML = `
    <h2>${paper.title} 批改結果</h2>
    <p>${escapeHtml(student.className)} ${escapeHtml(student.seatNumber)} 號 ${escapeHtml(student.studentName)}</p>
    <p>答對 ${correct} 題，共 ${paper.questions.length} 題，換算 ${percent} 分。</p>
    <p>${wrong.length ? `錯題：第 ${wrong.join("、")} 題` : "全部答對，這張很漂亮。"}</p>
  `;
  if (!wasGraded) {
    addLeaderboardRecord({
      ...student,
      paperTitle: paper.title,
      correct,
      total: paper.questions.length,
      percent,
      wrongQuestions: wrong.length ? wrong.join("、") : "none",
      createdAt: createdAt.toISOString(),
      finishedAt: createdAt.toLocaleString("zh-TW", {
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      }),
    });
  }
  applyWrongFilter();
}

function resetQuiz() {
  quizForm.reset();
  [...quizForm.querySelectorAll(".question")].forEach((article) => {
    article.classList.remove("is-correct", "is-wrong", "hidden-by-filter");
    article.querySelector(".feedback").hidden = true;
    article.querySelector(".explanation-toggle").hidden = true;
    article.querySelector(".explanation-panel").hidden = true;
  });
  state.graded = false;
  state.wrongOnly = false;
  showWrongBtn.textContent = "只看錯題";
  resultPanel.hidden = true;
  state.paperScoreText = "尚未批改";
  scorePill.textContent = state.paperScoreText;
  updateProgress();
}

function gradeTypePractice() {
  const typeQuestions = currentTypeQuestions();
  let correct = 0;
  const wrong = [];

  typeQuestions.forEach((item, index) => {
    const expected = answerKey(item.answer);
    const selected = selectedTypeAnswer(index);
    const article = typePracticeForm.querySelector(`[data-type-question="${index}"]`);
    const feedback = article.querySelector(".feedback");
    const isCorrect = selected === expected;
    article.classList.toggle("is-correct", isCorrect);
    article.classList.toggle("is-wrong", !isCorrect);
    feedback.hidden = false;
    feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
    feedback.textContent = isCorrect
      ? `答對了。正解：${item.answer}`
      : `再看一次。你的答案：${selected || "未作答"}；正解：${item.answer}`;
    if (isCorrect) {
      correct += 1;
    } else {
      wrong.push(index + 1);
    }
  });

  state.typeGraded = true;
  const percent = Math.round((correct / typeQuestions.length) * 100);
  state.typeScoreText = `${percent} 分`;
  scorePill.textContent = state.typeScoreText;
  typeResultPanel.hidden = false;
  typeResultPanel.innerHTML = `
    <h2>${escapeHtml(typeTitles[state.typeIndex])} 結果</h2>
    <p>答對 ${correct} 題，共 ${typeQuestions.length} 題，換算 ${percent} 分。</p>
    <p>${wrong.length ? `需要再看：第 ${wrong.join("、")} 題` : "這個題型已經很穩。"}</p>
  `;
}

function resetTypePractice() {
  typePracticeForm.reset();
  [...typePracticeForm.querySelectorAll(".question")].forEach((article) => {
    article.classList.remove("is-correct", "is-wrong");
    article.querySelector(".feedback").hidden = true;
  });
  state.typeGraded = false;
  typeResultPanel.hidden = true;
  state.typeScoreText = "題型練習";
  scorePill.textContent = state.typeScoreText;
  updateTypeProgress();
}

function applyWrongFilter() {
  [...quizForm.querySelectorAll(".question")].forEach((article) => {
    const hide = state.wrongOnly && !article.classList.contains("is-wrong");
    article.classList.toggle("hidden-by-filter", hide);
  });
}

paperSelect.addEventListener("change", () => {
  state.paperIndex = Number(paperSelect.value);
  renderQuiz();
});

typeSelect.addEventListener("change", () => {
  state.typeIndex = Number(typeSelect.value);
  renderTypePractice();
});

paperModeBtn.addEventListener("click", () => setMode("paper"));
typeModeBtn.addEventListener("click", () => setMode("type"));
studentForm.addEventListener("input", updateStudentStatus);
quizForm.addEventListener("change", updateProgress);
quizForm.addEventListener("click", (event) => {
  const button = event.target.closest("[data-explanation]");
  if (!button) return;
  const article = button.closest(".question");
  const panel = article.querySelector(".explanation-panel");
  const shouldOpen = panel.hidden;
  panel.hidden = !shouldOpen;
  button.textContent = shouldOpen ? "收起詳解" : "看詳解";
  button.setAttribute("aria-expanded", String(shouldOpen));
});
typePracticeForm.addEventListener("change", updateTypeProgress);
resetBtn.addEventListener("click", resetQuiz);
gradeBtn.addEventListener("click", gradeQuiz);
typeResetBtn.addEventListener("click", renderTypePractice);
typeGradeBtn.addEventListener("click", gradeTypePractice);
typeNewBtn.addEventListener("click", () => setMode("paper"));
queryRecordsBtn.addEventListener("click", queryStudentRecords);
showWrongBtn.addEventListener("click", () => {
  if (!state.graded) {
    gradeQuiz();
    if (!state.graded) return;
  }
  state.wrongOnly = !state.wrongOnly;
  showWrongBtn.textContent = state.wrongOnly ? "顯示全部" : "只看錯題";
  applyWrongFilter();
});
clearLeaderboardBtn.addEventListener("click", async () => {
  if (hasSharedLeaderboard()) {
    await renderLeaderboard();
    return;
  }
  localStorage.removeItem(leaderboardKey);
  await renderLeaderboard([]);
});

loadStudent();
renderPaperOptions();
renderTypeOptions();
renderQuiz();
renderTypePractice();
updateLeaderboardButton();
renderLeaderboard();
