const labels = ["A", "B", "C", "D", "E"];

const papers = [
  {
    id: "A",
    title: "練習卷 A",
    answers: ["C", "D", "A", "E", "B", "C", "E", "A", "B", "D", "B", "C", "D", "A", "B", "C", "D", "E", "ACE"],
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
      ["已知 θ 為第二象限角，下列敘述哪些正確？", ["sin θ>0", "cos θ>0", "tan θ<0", "sin(-θ)>0", "cos(-θ)<0"], true],
    ],
  },
  {
    id: "B",
    title: "練習卷 B",
    answers: ["A", "E", "B", "D", "C", "D", "A", "B", "C", "E", "D", "C", "B", "A", "B", "D", "A", "E", "BCD"],
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
      ["已知 θ 為第三象限角，下列敘述哪些正確？", ["sin θ>0", "cos θ<0", "tan θ>0", "sin(-θ)>0", "cos(-θ)>0"], true],
    ],
  },
  {
    id: "C",
    title: "練習卷 C",
    answers: ["D", "A", "E", "B", "A", "E", "C", "B", "C", "A", "D", "B", "C", "E", "C", "D", "A", "B", "BDE"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=10，BC=6，AC=8，下列何者為 cos A 之值？", ["3/5", "5/4", "6/10", "4/5", "8/6"]],
      ["已知 0°<θ<90°，且 cos θ=12/13，下列何者為 tan θ 之值？", ["5/12", "12/5", "13/5", "5/13", "12/13"]],
      ["已知 0°<θ<90°，且 sin θ=3/5，下列何者為 cos θ 之值？", ["3/5", "5/3", "5/4", "√3/2", "4/5"]],
      ["已知三角形 ABC 中，C 為直角，sin A=4/5 且 AB=15，下列何者為三角形的周長？", ["30", "36", "39", "42", "45"]],
      ["已知 sin θ=d 且 θ 為銳角，下列何者為 cos θ？", ["√(1-d²)", "d", "d/√(1-d²)", "√(1-d²)/d", "以上皆非"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["0", "1", "3", "4", "2"]],
      ["已知 sin θ cos θ=0.4，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√1.2", "√1.4", "√1.8", "√0.8", "√1"]],
      ["下列何者為 315° 的同界角？", ["45°", "-45°", "135°", "-315°", "675°"]],
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
      ["已知 θ 為第四象限角，下列敘述哪些正確？", ["sin θ>0", "cos θ>0", "tan θ>0", "sin(-θ)>0", "cos(-θ)>0"], true],
    ],
  },
  {
    id: "D",
    title: "練習卷 D",
    answers: ["B", "E", "C", "E", "D", "B", "D", "C", "D", "E", "C", "D", "A", "B", "C", "B", "B", "E", "ABCE"],
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
      ["已知 θ 為第一象限角，下列敘述哪些正確？", ["sin θ>0", "cos θ>0", "tan θ>0", "sin(-θ)>0", "cos(-θ)>0"], true],
    ],
  },
  {
    id: "E",
    title: "練習卷 E",
    answers: ["A", "D", "B", "C", "E", "A", "E", "A", "A", "B", "D", "B", "C", "A", "B", "E", "B", "D", "ABD"],
    questions: [
      ["在三角形 ABC 中，已知 ∠C 為直角，AB=29，BC=20，AC=21，下列何者為 cos A 之值？", ["21/29", "20/29", "29/21", "20/21", "21/20"]],
      ["已知 0°<θ<90°，且 cos θ=7/25，下列何者為 tan θ 之值？", ["7/24", "25/24", "7/25", "24/7", "24/25"]],
      ["已知 0°<θ<90°，且 sin θ=√3/2，下列何者為 cos θ 之值？", ["√3/2", "1/2", "√2/2", "0", "1"]],
      ["已知三角形 ABC 中，C 為直角，sin A=8/17 且 AB=34，下列何者為三角形的周長？", ["48", "64", "80", "96", "112"]],
      ["已知 sin θ=f 且 θ 為銳角，下列何者為 cos θ？", ["f", "f/√(1-f²)", "√(1-f²)/f", "以上皆非", "√(1-f²)"]],
      ["下列何者為 (sin θ+cos θ)²+(sin θ-cos θ)² 之值？", ["2", "1", "3", "4", "0"]],
      ["已知 sin θ cos θ=0.45，且 0<θ<90°，下列何者為 sin θ+cos θ？", ["√1.1", "√1.3", "√1.5", "√1.7", "√1.9"]],
      ["下列何者為 285° 的同界角？", ["-75°", "75°", "-285°", "105°", "645°"]],
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
      ["已知 θ 為第三象限角，下列敘述哪些正確？", ["sin θ<0", "cos θ<0", "tan θ<0", "sin(-θ)>0", "cos(-θ)>0"], true],
    ],
  },
];

const state = {
  paperIndex: 0,
  graded: false,
  wrongOnly: false,
};

const paperSelect = document.querySelector("#paperSelect");
const quizForm = document.querySelector("#quizForm");
const scorePill = document.querySelector("#scorePill");
const progressText = document.querySelector("#progressText");
const progressFill = document.querySelector("#progressFill");
const resultPanel = document.querySelector("#resultPanel");
const resetBtn = document.querySelector("#resetBtn");
const gradeBtn = document.querySelector("#gradeBtn");
const showWrongBtn = document.querySelector("#showWrongBtn");

function answerKey(answer) {
  return answer.split("").sort().join("");
}

function selectedAnswer(questionIndex) {
  const inputs = [...quizForm.querySelectorAll(`[name="q${questionIndex}"]:checked`)];
  return inputs.map((input) => input.value).sort().join("");
}

function currentPaper() {
  return papers[state.paperIndex];
}

function renderPaperOptions() {
  paperSelect.innerHTML = papers
    .map((paper, index) => `<option value="${index}">${paper.title}</option>`)
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
      </article>
    `;
  }).join("");
  state.graded = false;
  state.wrongOnly = false;
  showWrongBtn.textContent = "只看錯題";
  resultPanel.hidden = true;
  scorePill.textContent = "尚未批改";
  updateProgress();
}

function updateProgress() {
  const paper = currentPaper();
  const answered = paper.questions.filter((_, index) => selectedAnswer(index)).length;
  progressText.textContent = `${answered} / ${paper.questions.length} 題`;
  progressFill.style.width = `${Math.round((answered / paper.questions.length) * 100)}%`;
}

function gradeQuiz() {
  const paper = currentPaper();
  let correct = 0;
  const wrong = [];

  paper.questions.forEach((question, index) => {
    const expected = answerKey(paper.answers[index]);
    const selected = selectedAnswer(index);
    const article = quizForm.querySelector(`[data-question="${index}"]`);
    const feedback = article.querySelector(".feedback");
    const isCorrect = selected === expected;
    article.classList.toggle("is-correct", isCorrect);
    article.classList.toggle("is-wrong", !isCorrect);
    feedback.hidden = false;
    feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
    feedback.textContent = isCorrect
      ? `答對了。正解：${paper.answers[index]}`
      : `再看一次。你的答案：${selected || "未作答"}；正解：${paper.answers[index]}`;
    if (isCorrect) {
      correct += 1;
    } else {
      wrong.push(index + 1);
    }
  });

  state.graded = true;
  const percent = Math.round((correct / paper.questions.length) * 100);
  scorePill.textContent = `${percent} 分`;
  resultPanel.hidden = false;
  resultPanel.innerHTML = `
    <h2>${paper.title} 批改結果</h2>
    <p>答對 ${correct} 題，共 ${paper.questions.length} 題，換算 ${percent} 分。</p>
    <p>${wrong.length ? `錯題：第 ${wrong.join("、")} 題` : "全部答對，這張很漂亮。"}</p>
  `;
  applyWrongFilter();
}

function resetQuiz() {
  quizForm.reset();
  [...quizForm.querySelectorAll(".question")].forEach((article) => {
    article.classList.remove("is-correct", "is-wrong", "hidden-by-filter");
    article.querySelector(".feedback").hidden = true;
  });
  state.graded = false;
  state.wrongOnly = false;
  showWrongBtn.textContent = "只看錯題";
  resultPanel.hidden = true;
  scorePill.textContent = "尚未批改";
  updateProgress();
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

quizForm.addEventListener("change", updateProgress);
resetBtn.addEventListener("click", resetQuiz);
gradeBtn.addEventListener("click", gradeQuiz);
showWrongBtn.addEventListener("click", () => {
  if (!state.graded) {
    gradeQuiz();
  }
  state.wrongOnly = !state.wrongOnly;
  showWrongBtn.textContent = state.wrongOnly ? "顯示全部" : "只看錯題";
  applyWrongFilter();
});

renderPaperOptions();
renderQuiz();
