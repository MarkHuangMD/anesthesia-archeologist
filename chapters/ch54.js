// Ch54 減重麻醉統計資料 (供網頁顯示)
window.ch54_info = {
    title: "Ch54 減重麻醉",
    total_count: 10,
    percentage: "2.0%",
    distribution: [
        { year: 114, questions: [49, 50] },
        { year: 113, questions: [49, 50] },
        { year: 112, questions: [49, 50] },
        { year: 111, questions: [52] },
        { year: 110, questions: [25, 52, 53] }
    ]
};

// 題目與詳解資料庫
window.ch54_data = [
    {
        meta: "114年 筆試第49題",
        question: "有關病態肥胖患者接受減重手術（Bariatric Surgery）的麻醉前評估，下列敘述何者錯誤？",
        options: ["(A) 肥胖患者的阻塞性睡眠呼吸中止症（OSA）盛行率極高", "(B) 評估心血管風險時，常因行動不便而難以精確評估運動耐受力", "(C) 肥胖患者的胃容積與胃酸分泌量通常減少", "(D) 術前常合併有非酒精性脂肪肝（NAFLD）"],
        answer: "(C)",
        explanation: "肥胖病患的胃容積、胃內壓力與胃酸分泌量通常是顯著增加而非減少，且常合併胃食道逆流（GERD），屬於吸入性肺炎的高風險群 [cite: 1363, 1463]。"
    },
    {
        meta: "114年 筆試第50題",
        question: "關於肥胖患者的全麻給藥劑量調整，下列哪一種類肌肉鬆弛劑的「維持劑量」，建議按照「理想體重（IBW）」而非實際體重計算以防蓄積延遲甦醒？",
        options: ["(A) Succinylcholine", "(B) Rocuronium 或 Vecuronium", "(C) 所有的吸入性氣體藥物", "(D) 大劑量荷爾蒙補充劑"],
        answer: "(B)",
        explanation: "非去極化肌肉鬆弛劑（如 rocuronium、vecuronium）應依據理想體重（IBW）計算，以避免在肥胖病患體內過度蓄積 [cite: 2006]。"
    },
    {
        meta: "113年 筆試第49題",
        question: "病態肥胖患者接受減重手術的術前麻醉評估，下列哪一項敘述錯誤？",
        options: ["(A) 合併阻塞性睡眠呼吸中止症（OSA）的機率極高", "(B) 肥胖患者的胃容積與胃酸分泌量通常增加", "(C) 患者行動不便常使運動耐受力評估困難", "(D) 肥胖患者百分之百不會合併任何非酒精性脂肪肝"],
        answer: "(D)",
        explanation: "非酒精性脂肪肝（NAFLD）及 NASH 在病態肥胖病患中的盛行率極高，常需於術前評估其肝功能 [cite: 1458]。"
    },
    {
        meta: "113年 筆試第50題",
        question: "關於病態肥胖患者的全麻藥物劑量調整，下列哪一種肌肉鬆弛劑的「維持劑量」，建議嚴格按照「理想體重（IBW）」而非實際體重計算以防延遲甦醒？",
        options: ["(A) Succinylcholine", "(B) Rocuronium 或 Vecuronium", "(C) 所有的吸入性揮發性氣體", "(D) 大劑量高張氯化鈉"],
        answer: "(B)",
        explanation: "非去極化肌鬆劑維持量應按 IBW 計算，避免蓄積 [cite: 2006]。"
    },
    {
        meta: "112年 筆試第49題",
        question: "病態肥胖患者接受減重手術的術前麻醉評估，下列哪一項敘述錯誤？",
        options: ["(A) 合併OSA機率高", "(B) 胃容積增加", "(C) METs 評估困難", "(D) 肥胖患者百分之百不會合併任何非酒精性脂肪肝"],
        answer: "(D)",
        explanation: "如前所述，NAFLD 在肥胖病患中非常普遍，並非絕對不會合併 [cite: 1458]。"
    },
    {
        meta: "112年 筆試第50題",
        question: "關於病態肥胖患者的全麻藥物劑量調整，下列哪一種肌肉鬆弛劑的「維持劑量」，建議嚴格按照「理想體重（IBW）」而非實際體重計算以防延遲甦醒？",
        options: ["(A) Succinylcholine", "(B) Rocuronium 或 Vecuronium", "(C) 所有的吸入性揮發性氣體", "(D) 大劑量高張氯化鈉"],
        answer: "(B)",
        explanation: "非去極化肌鬆劑維持量應按 IBW 計算 [cite: 2006]。"
    },
    {
        meta: "111年 筆試第52題",
        question: "病態肥胖病患圍術期風險增加,以下麻醉注意事項敘述何者錯誤:",
        options: ["(A) 須注意斜坡擺位 (ramped position) 以改善 laryngoscopic view", "(B) Propofol及Remifentanil 劑量須以實際體重TBW計算", "(C) 術前評估包括合併症、呼吸道、心臟功能和肝功能", "(D) 術中可同時併用 PEEP 及 recruitment maneuvers", "(E) BMI大於40是建議手術對象"],
        answer: "(B)",
        explanation: "Propofol 的全麻誘導劑量應以理想體重（IBW）計算，而非 TBW，以防過量導致循環抑制 [cite: 2006]。"
    },
    {
        meta: "110年 筆試第25題",
        question: "下列何者不是減重手術麻醉照顧需要注意的事項？",
        options: ["(A) 麻醉中使用靜脈輸注 propofol 較 desflurane 氣體麻醉恢復更快", "(B) 術中需注意呼吸道處置、擺位和麻醉藥物劑量調整", "(C) 術前評估包括合併症、呼吸道狀況、心臟功能和肝功能等", "(D) 劑量可根據理想體重調整"],
        answer: "(A)",
        explanation: "Desflurane 因其低血/氣溶解度，在肥胖患者中的甦醒速度通常優於長時間持續輸注 Propofol [cite: 2017, 2018]。"
    },
    {
        meta: "110年 筆試第52題",
        question: "病態肥胖患者接受減重手術的術前麻醉評估，下列哪一項敘述正確？",
        options: ["(A) OSA機率高", "(B) 胃容積增加", "(C) METs 評估困難", "(D) 以上皆是"],
        answer: "(D)",
        explanation: "肥胖病患具備上述所有臨床風險，需全面評估 [cite: 1363, 1463]。"
    },
    {
        meta: "110年 筆試第53題",
        question: "關於病態肥胖患者的全麻藥物劑量調整，下列哪一種肌肉鬆弛劑的「維持劑量」，指引多建議嚴格按照「理想體重（IBW）」而非實際體重計算以防延遲甦醒？",
        options: ["(A) Succinylcholine", "(B) Rocuronium 或 Vecuronium", "(C) 所有的吸入性揮發性氣體", "(D) 大劑量高張氯化鈉"],
        answer: "(B)",
        explanation: "非去極化肌鬆劑維持量請務必以 IBW 計算 [cite: 2006]。"
    }
];
