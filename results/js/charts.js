google.charts.load("current", { packages: ["corechart"], language: "ko" });

google.charts.setOnLoadCallback(drawRankingPieChart);
google.charts.setOnLoadCallback(drawOpportunityColumnChart);
google.charts.setOnLoadCallback(drawTimeZoneColumnChart);

google.charts.setOnLoadCallback(drawWeekdayPlayTimeColumnChart);
google.charts.setOnLoadCallback(drawWeekendPlayTimeColumnChart);
google.charts.setOnLoadCallback(drawEveryDayPlayTimeColumnChart);
google.charts.setOnLoadCallback(drawWeekdayPlayTimeWithoutEveryDayColumnChart);
google.charts.setOnLoadCallback(drawWeekendPlayTimeWithoutEveryDayColumnChart);

google.charts.setOnLoadCallback(drawPlayTimeColumnChart);
google.charts.setOnLoadCallback(drawPlayStartDateColumnChart);
google.charts.setOnLoadCallback(drawPlayStartMonthColumnChart);
google.charts.setOnLoadCallback(drawRankingPlayTimeScatterChart);
google.charts.setOnLoadCallback(drawRankingPlayTimeUnderSixDigitScatterChart);
google.charts.setOnLoadCallback(drawRankingPlayStartDateScatterChart);
google.charts.setOnLoadCallback(
  drawRankingPlayStartDateUnderSixDigitScatterChart
);

google.charts.setOnLoadCallback(drawTopPlayColumnChart);
google.charts.setOnLoadCallback(drawBottomColumnChart);
google.charts.setOnLoadCallback(drawBestPerformanceCandlestickChart);
google.charts.setOnLoadCallback(drawHitsPerPlayColumnChart);
google.charts.setOnLoadCallback(drawRankingHitsPerPlayScatterChart);
google.charts.setOnLoadCallback(
  drawRankingHitsPerPlayUnderSixDigitScatterChart
);

google.charts.setOnLoadCallback(drawDevicePieChart);
google.charts.setOnLoadCallback(drawTabletPlaystylePieChart);
google.charts.setOnLoadCallback(drawMousePlaystylePieChart);
google.charts.setOnLoadCallback(drawRankingDeviceColumnChart);
google.charts.setOnLoadCallback(drawHandedPieChart);
google.charts.setOnLoadCallback(drawSpinDirectionPieChart);
google.charts.setOnLoadCallback(drawTabletSpinDirectionPieChart);
google.charts.setOnLoadCallback(drawMouseSpinDirectionPieChart);

google.charts.setOnLoadCallback(drawTabletBrandPieChart);
google.charts.setOnLoadCallback(drawTabletModelPieChart);
google.charts.setOnLoadCallback(drawTabletDriverPieChart);
google.charts.setOnLoadCallback(drawTabletAreaScatterChart);
google.charts.setOnLoadCallback(drawTabletRotationScatterChart);
google.charts.setOnLoadCallback(drawTabletFilterPieChart);
google.charts.setOnLoadCallback(drawTabletWhichFilterBarChart);
google.charts.setOnLoadCallback(drawDevocubAntichatterLatencyScatterChart);
google.charts.setOnLoadCallback(drawHawkuSmoothingFilterScatterChart);
google.charts.setOnLoadCallback(drawTabletCoverPieChart);
google.charts.setOnLoadCallback(drawTabletWhichCoverPieChart);

google.charts.setOnLoadCallback(drawMouseBrandPieChart);
google.charts.setOnLoadCallback(drawMouseModelPieChart);
google.charts.setOnLoadCallback(drawMouseDPIScatterChart);
google.charts.setOnLoadCallback(drawMouseEDPIScatterChart);
google.charts.setOnLoadCallback(drawMousePadBrandPieChart);
google.charts.setOnLoadCallback(drawMousePadModelPieChart);

google.charts.setOnLoadCallback(drawHowManyKeyboardsPieChart);
google.charts.setOnLoadCallback(drawKeyboardSwitchPieChart);
google.charts.setOnLoadCallback(drawKeyboardWhichSwitchPieChart);
google.charts.setOnLoadCallback(drawKeyboardBrandPieChart);
google.charts.setOnLoadCallback(drawKeyboardModelPieChart);
google.charts.setOnLoadCallback(drawKeyboardPriceRangeColumnChart);
google.charts.setOnLoadCallback(drawKeyboardTotalPriceColumnChart);

google.charts.setOnLoadCallback(drawRapidTriggerPieChart);
google.charts.setOnLoadCallback(drawRapidTriggerActuationPointScatterChart);
google.charts.setOnLoadCallback(drawRapidTriggerCandlestickChart);
google.charts.setOnLoadCallback(drawSayoDeviceRTAreaCandlestickChart);
google.charts.setOnLoadCallback(drawSayoDeviceRapidTriggerCandlestickChart);

google.charts.setOnLoadCallback(drawTappingStylePieChart);
google.charts.setOnLoadCallback(drawUsedFingerPieChart);
google.charts.setOnLoadCallback(drawIndexMiddleMoreOftenUsedFingerPieChart);
google.charts.setOnLoadCallback(drawIndexRingMoreOftenUsedFingerPieChart);
google.charts.setOnLoadCallback(drawIndexMiddleFirstNoteUsedFingerPieChart);
google.charts.setOnLoadCallback(drawIndexRingFirstNoteUsedFingerPieChart);
google.charts.setOnLoadCallback(drawIndexMiddleStartStreamUsedFingerPieChart);
google.charts.setOnLoadCallback(drawIndexRingStartStreamUsedFingerPieChart);

google.charts.setOnLoadCallback(drawKeyboardKeySettingPieChart);
google.charts.setOnLoadCallback(drawKeypadKeySettingPieChart);
google.charts.setOnLoadCallback(drawKeyboardSmokeKeySettingPieChart);
google.charts.setOnLoadCallback(drawKeypadSmokeKeySettingPieChart);

google.charts.setOnLoadCallback(drawHowManyMonitorsPieChart);
google.charts.setOnLoadCallback(drawMonitorBrandPieChart);
google.charts.setOnLoadCallback(drawMonitorModelPieChart);
google.charts.setOnLoadCallback(drawMonitorPanelPieChart);
google.charts.setOnLoadCallback(drawMonitorSizeColumnChart);
google.charts.setOnLoadCallback(drawMonitorRefreshRateColumnChart);
google.charts.setOnLoadCallback(drawMonitorResolutionPieChart);
google.charts.setOnLoadCallback(drawMonitorIsCurvedPieChart);
google.charts.setOnLoadCallback(drawMonitorPriceRangeColumnChart);

google.charts.setOnLoadCallback(drawHowManyAudiosPieChart);
google.charts.setOnLoadCallback(drawAudioTypePieChart);
google.charts.setOnLoadCallback(drawAudioBrandPieChart);
google.charts.setOnLoadCallback(drawAudioModelPieChart);
google.charts.setOnLoadCallback(drawAudioPriceRangeColumnChart);

google.charts.setOnLoadCallback(drawInGameResolutionPieChart);
google.charts.setOnLoadCallback(drawInGameResolutionColumnChart);
google.charts.setOnLoadCallback(drawInGameOptionsColumnChart);
google.charts.setOnLoadCallback(drawSmallerResolutionFullscreenColumnChart);
google.charts.setOnLoadCallback(drawTabletRawInputColumnChart);
google.charts.setOnLoadCallback(drawMouseRawInputColumnChart);
google.charts.setOnLoadCallback(drawTabletSensitivityScatterChart);
google.charts.setOnLoadCallback(drawMouseSensitivityScatterChart);
google.charts.setOnLoadCallback(drawCursorSizeScatterChart);
google.charts.setOnLoadCallback(drawMasterVolumeScatterChart);
google.charts.setOnLoadCallback(drawVolumeCandlestickChart);

google.charts.setOnLoadCallback(drawDoWarmUpPieChart);
google.charts.setOnLoadCallback(drawWhatMapForWarmUpColumnChart);

google.charts.setOnLoadCallback(drawModCombinationColumnChart);
google.charts.setOnLoadCallback(drawUnduplicatedModsColumnChart);
google.charts.setOnLoadCallback(drawModsColumnChart);

google.charts.setOnLoadCallback(drawMappingPieChart);
google.charts.setOnLoadCallback(drawMapTypeColumnChart);

google.charts.setOnLoadCallback(drawMapperScatterChart);
google.charts.setOnLoadCallback(drawPlayerScatterChart);

google.charts.setOnLoadCallback(drawNMTypeBarChart);
google.charts.setOnLoadCallback(drawNMCursorTrailPieChart);
google.charts.setOnLoadCallback(drawNMCursorColorPieChart);
google.charts.setOnLoadCallback(drawNMCursorTrailColorPieChart);

google.charts.setOnLoadCallback(drawHDTypeBarChart);
google.charts.setOnLoadCallback(drawHDCursorTrailPieChart);
google.charts.setOnLoadCallback(drawHDCursorColorPieChart);
google.charts.setOnLoadCallback(drawHDCursorTrailColorPieChart);

google.charts.setOnLoadCallback(drawHRTypeBarChart);
google.charts.setOnLoadCallback(drawHRCursorTrailPieChart);
google.charts.setOnLoadCallback(drawHRCursorColorPieChart);
google.charts.setOnLoadCallback(drawHRCursorTrailColorPieChart);

google.charts.setOnLoadCallback(drawDTTypeBarChart);
google.charts.setOnLoadCallback(drawDTCursorTrailPieChart);
google.charts.setOnLoadCallback(drawDTCursorColorPieChart);
google.charts.setOnLoadCallback(drawDTCursorTrailColorPieChart);

google.charts.setOnLoadCallback(drawEZTypeBarChart);
google.charts.setOnLoadCallback(drawEZCursorTrailPieChart);
google.charts.setOnLoadCallback(drawEZCursorColorPieChart);
google.charts.setOnLoadCallback(drawEZCursorTrailColorPieChart);

google.charts.setOnLoadCallback(drawAllTypeBarChart);
google.charts.setOnLoadCallback(drawAllCursorTrailPieChart);
google.charts.setOnLoadCallback(drawAllCursorColorPieChart);
google.charts.setOnLoadCallback(drawAllCursorTrailColorPieChart);

google.charts.setOnLoadCallback(drawTournamentParticipationFrequencyPieChart);
google.charts.setOnLoadCallback(drawReasonForNonParticipationColumnChart);

google.charts.setOnLoadCallback(drawSupporterStatusPieChart);
google.charts.setOnLoadCallback(drawSupporterFirstReasonPieChart);
google.charts.setOnLoadCallback(drawSupporterSecondReasonPieChart);
google.charts.setOnLoadCallback(drawSupporterThirdReasonPieChart);
google.charts.setOnLoadCallback(drawSupporterTotalReasonColumnChart);
google.charts.setOnLoadCallback(drawReasonForNonMaintenanceColumnChart);
google.charts.setOnLoadCallback(drawSupporterTotalAmountColumnChart);

google.charts.setOnLoadCallback(drawLazerChangesAwarenessPieChart);
google.charts.setOnLoadCallback(drawPreferredClientPieChart);
google.charts.setOnLoadCallback(drawLazerScoreColumnChart);
google.charts.setOnLoadCallback(drawLazerGoodPartColumnChart);
google.charts.setOnLoadCallback(drawLazerBadPartColumnChart);

google.charts.setOnLoadCallback(drawHabitColumnChart);
google.charts.setOnLoadCallback(drawPreferredMusicGenreColumnChart);
google.charts.setOnLoadCallback(drawGalleryStartDateColumnChart);
google.charts.setOnLoadCallback(drawGalleryPlayStartMonthColumnChart);

google.charts.setOnLoadCallback(drawVisionCorrectedOrNotPieChart);
google.charts.setOnLoadCallback(drawVisionWithoutCorrectionScatterChart);
google.charts.setOnLoadCallback(drawVisionBeforeCorrectionScatterChart);
google.charts.setOnLoadCallback(drawVisionAfterCorrectionScatterChart);
google.charts.setOnLoadCallback(drawTotalFinalVisionScatterChart);

google.charts.setOnLoadCallback(drawBirthYearScatterChart);
google.charts.setOnLoadCallback(drawMilitaryServicePieChart);

function drawRankingPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["자릿수", "인원수"],
    ["3자리", 6],
    ["4자리", 32],
    ["5자리", 67],
    ["6자리", 26],
  ]);

  const options = {
    title: "랭킹대",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("rankingPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawRankingPieChart, false);
}

function drawOpportunityColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["계기", "인원수"],
    ["주변 사람에 의해", 54],
    ["유튜브 영상을 보고", 40],
    ["리듬 게임을 찾다가", 13],
    ["에임 연습을 위해", 8],
    ["씹덕 요소에 이끌려서", 7],
    ["응원단 시리즈의 영향으로", 5],
    ["기타", 11],
  ]);

  const options = {
    title: "osu!를 접하게 된 계기",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("opportunityColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawOpportunityColumnChart, false);
}

function drawTimeZoneColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["시간대", "인원수"],
    ["0시", 35],
    ["1시", 34],
    ["2시", 21],
    ["3시", 8],
    ["4시", 3],
    ["5시", 3],
    ["6시", 2],
    ["7시", 1],
    ["8시", 0],
    ["9시", 0],
    ["10시", 4],
    ["11시", 5],
    ["12시", 5],
    ["13시", 5],
    ["14시", 6],
    ["15시", 7],
    ["16시", 14],
    ["17시", 19],
    ["18시", 29],
    ["19시", 34],
    ["20시", 46],
    ["21시", 51],
    ["22시", 57],
    ["23시", 49],
  ]);

  const options = {
    title: "주로 플레이하는 시간대",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("timeZoneColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTimeZoneColumnChart, false);
}

function drawWeekdayPlayTimeColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["플레이 시간", "인원수"],
    ["1시간 미만", 10],
    ["1 ~ 2시간", 46],
    ["2 ~ 3시간", 43],
    ["3 ~ 4시간", 15],
    ["4 ~ 5시간", 5],
    ["5 ~ 6시간", 7],
    ["6시간 이상", 1],
  ]);

  const options = {
    title: "평일 플레이 시간",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
    vAxis: {
      ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("weekdayPlayTimeColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawWeekdayPlayTimeColumnChart, false);
}

function drawWeekendPlayTimeColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["플레이 시간", "인원수"],
    ["1시간 미만", 7],
    ["1 ~ 2시간", 33],
    ["2 ~ 3시간", 38],
    ["3 ~ 4시간", 23],
    ["4 ~ 5시간", 10],
    ["5 ~ 6시간", 10],
    ["6시간 이상", 6],
  ]);

  const options = {
    title: "휴일 플레이 시간",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
    vAxis: {
      ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("weekendPlayTimeColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawWeekendPlayTimeColumnChart, false);
}

function drawEveryDayPlayTimeColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["플레이 시간", "인원수"],
    ["1시간 미만", 7],
    ["1 ~ 2시간", 31],
    ["2 ~ 3시간", 33],
    ["3 ~ 4시간", 12],
    ["4 ~ 5시간", 4],
    ["5 ~ 6시간", 6],
    ["6시간 이상", 1],
  ]);

  const options = {
    title: "매일 플레이 시간",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
    vAxis: {
      ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("everyDayPlayTimeColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawEveryDayPlayTimeColumnChart, false);
}

function drawWeekdayPlayTimeWithoutEveryDayColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["플레이 시간", "인원수"],
    ["1시간 미만", 3],
    ["1 ~ 2시간", 15],
    ["2 ~ 3시간", 10],
    ["3 ~ 4시간", 3],
    ["4 ~ 5시간", 1],
    ["5 ~ 6시간", 1],
    ["6시간 이상", 0],
  ]);

  const options = {
    title: "평일 플레이 시간",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
    vAxis: {
      ticks: [0, 2, 4, 6, 8, 10, 12, 14, 16],
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("weekdayPlayTimeWithoutEveryDayColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawWeekdayPlayTimeWithoutEveryDayColumnChart,
    false
  );
}

function drawWeekendPlayTimeWithoutEveryDayColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["플레이 시간", "인원수"],
    ["1시간 미만", 0],
    ["1 ~ 2시간", 2],
    ["2 ~ 3시간", 5],
    ["3 ~ 4시간", 11],
    ["4 ~ 5시간", 6],
    ["5 ~ 6시간", 4],
    ["6시간 이상", 5],
  ]);

  const options = {
    title: "휴일 플레이 시간",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
    vAxis: {
      ticks: [0, 2, 4, 6, 8, 10, 12, 14, 16],
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("weekendPlayTimeWithoutEveryDayColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawWeekendPlayTimeWithoutEveryDayColumnChart,
    false
  );
}

function drawPlayTimeColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["총 플레이 시간", "인원수"],
    ["1 ~ 499시간", 40],
    ["500 ~ 999시간", 42],
    ["1000 ~ 1499시간", 32],
    ["1500 ~ 1999시간", 13],
    ["2000시간 이상", 4],
  ]);

  const options = {
    title: "총 플레이 시간",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "10%",
      bottom: "13%",
      width: "100%",
      height: "100%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("playTimeColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawPlayTimeColumnChart, false);
}

function drawPlayStartDateColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["년도", "인원수"],
    ["2012", 2],
    ["2013", 6],
    ["2014", 5],
    ["2015", 10],
    ["2016", 5],
    ["2017", 5],
    ["2018", 10],
    ["2019", 15],
    ["2020", 31],
    ["2021", 14],
    ["2022", 24],
    ["2023", 4],
  ]);

  const options = {
    title: "플레이 시작 연도",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "10%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("playStartDateColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawPlayStartDateColumnChart, false);
}

function drawPlayStartMonthColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["월", "인원수"],
    ["1월", 13],
    ["2월", 12],
    ["3월", 10],
    ["4월", 13],
    ["5월", 6],
    ["6월", 8],
    ["7월", 7],
    ["8월", 14],
    ["9월", 13],
    ["10월", 7],
    ["11월", 14],
    ["12월", 12],
  ]);

  const options = {
    title: "플레이 시작 월",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "10%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("playStartMonthColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawPlayStartMonthColumnChart, false);
}

function drawRankingPlayTimeScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "총 플레이 시간");
  data.addColumn("number", "랭킹");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows(
    [
      [1328, 30402, "1,328시간 | #30,402"],
      [525, 53023, "525시간 | #53,023"],
      [1858, 17179, "1,858시간 | #17,179"],
      [594, 29395, "594시간 | #29,395"],
      [1204, 2881, "1,204시간 | #2,881"],
      [369, 98504, "369시간 | #98,504"],
      [782, 49445, "782시간 | #49,445"],
      [1232, 235, "1,232시간 | #235"],
      [632, 34588, "632시간 | #34,588"],
      [1572, 3172, "1,572시간 | #3,172"],
      [369, 100185, "369시간 | #100,185"],
      [1431, 28561, "1,431시간 | #28,561"],
      [459, 139130, "459시간 | #139,130"],
      [780, 19508, "780시간 | #19,508"],
      [1020, 7851, "1,020시간 | #7,851"],
      [811, 20045, "811시간 | #20,045"],
      [1091, 29972, "1,091시간 | #29,972"],
      [295, 88434, "295시간 | #88,434"],
      [2006, 958, "2,006시간 | #958"],
      [1039, 7349, "1,039시간 | #7,349"],
      [341, 60841, "341시간 | #60,841"],
      [918, 64475, "918시간 | #64,475"],
      [509, 48545, "509시간 | #48,545"],
      [870, 12760, "870시간 | #12,760"],
      [1953, 11681, "1,953시간 | #11,681"],
      [1255, 1132, "1,255시간 | #1,132"],
      [1641, 11323, "1,641시간 | #11,323"],
      [2080, 10189, "2,080시간 | #10,189"],
      [242, 341031, "242시간 | #341,031"],
      [1360, 5445, "1,360시간 | #5,445"],
      [1588, 8344, "1,588시간 | #8,344"],
      [377, 53203, "377시간 | #53,203"],
      [1220, 1685, "1,220시간 | #1,685"],
      [670, 8203, "670시간 | #8,203"],
      [792, 74814, "792시간 | #74,814"],
      [1881, 1466, "1,881시간 | #1,466"],
      [585, 34223, "585시간 | #34,223"],
      [1977, 10536, "1,977시간 | #10,536"],
      [340, 91364, "340시간 | #91,364"],
      [538, 11070, "538시간 | #11,070"],
      [1016, 1861, "1,016시간 | #1,861"],
      [764, 244530, "764시간 | #244,530"],
      [873, 5696, "873시간 | #5,696"],
      [224, 167624, "224시간 | #167,624"],
      [1140, 4980, "1,140시간 | #4,980"],
      [1881, 292, "1,881시간 | #292"],
      [698, 45063, "698시간 | #45,063"],
      [1411, 244, "1,411시간 | #244"],
      [467, 43966, "467시간 | #43,966"],
      [1278, 1567, "1,278시간 | #1,567"],
      [361, 58328, "361시간 | #58,328"],
      [765, 43310, "765시간 | #43,310"],
      [1227, 7770, "1,227시간 | #7,770"],
      [785, 11176, "785시간 | #11,176"],
      [654, 23550, "654시간 | #23,550"],
      [1198, 19946, "1,198시간 | #19,946"],
      [819, 71290, "819시간 | #71,290"],
      [638, 13448, "638시간 | #13,448"],
      [1235, 5967, "1,235시간 | #5,967"],
      [620, 10414, "620시간 | #10,414"],
      [445, 65793, "445시간 | #65,793"],
      [998, 13989, "998시간 | #13,989"],
      [1046, 7315, "1,046시간 | #7,315"],
      [774, 9749, "774시간 | #9,749"],
      [1064, 8501, "1,064시간 | #8,501"],
      [319, 121041, "319시간 | #121,041"],
      [1527, 8409, "1,527시간 | #8,409"],
      [214, 433535, "214시간 | #433,535"],
      [1019, 3938, "1,019시간 | #3,938"],
      [1734, 282, "1,734시간 | #282"],
      [523, 73436, "523시간 | #73,436"],
      [145, 387583, "145시간 | #387,583"],
      [1422, 21040, "1,422시간 | #21,040"],
      [764, 13536, "764시간 | #13,536"],
      [393, 54269, "393시간 | #54,269"],
      [1505, 18608, "1,505시간 | #18,608"],
      [548, 87398, "548시간 | #87,398"],
      [720, 15351, "720시간 | #15,351"],
      [2762, 2726, "2,762시간 | #2,726"],
      [322, 212265, "322시간 | #212,265"],
      [863, 10114, "863시간 | #10,114"],
      [327, 56131, "327시간 | #56,131"],
      [499, 188964, "499시간 | #188,964"],
      [858, 29108, "858시간 | #29,108"],
      [588, 138668, "588시간 | #138,668"],
      [395, 24454, "395시간 | #24,454"],
      [32, 549438, "32시간 | #549,438"],
      [265, 73926, "265시간 | #73,926"],
      [443, 208199, "443시간 | #208,199"],
      [601, 51896, "601시간 | #51,896"],
      [823, 39444, "823시간 | #39,444"],
      [416, 3627, "416시간 | #3,627"],
      [2824, 371, "2,824시간 | #371"],
      [484, 119601, "484시간 | #119,601"],
      [1163, 29387, "1,163시간 | #29,387"],
      [466, 107644, "466시간 | #107,644"],
      [691, 21745, "691시간 | #21,745"],
      [183, 215898, "183시간 | #215,898"],
      [1192, 12685, "1,192시간 | #12,685"],
      [497, 23135, "497시간 | #23,135"],
      [1059, 5923, "1,059시간 | #5,923"],
      [688, 11539, "688시간 | #11,539"],
      [365, 251739, "365시간 | #251,739"],
      [131, 326409, "131시간 | #326,409"],
      [1054, 9274, "1,054시간 | #9,274"],
      [1482, 18069, "1,482시간 | #18,069"],
      [91, 185907, "91시간 | #185,907"],
      [690, 15943, "690시간 | #15,943"],
      [411, 92508, "411시간 | #92,508"],
      [1196, 5520, "1,196시간 | #5,520"],
      [1166, 2725, "1,166시간 | #2,725"],
      [713, 23081, "713시간 | #23,081"],
      [239, 271378, "239시간 | #271,378"],
      [861, 13451, "861시간 | #13,451"],
      [1537, 10285, "1,537시간 | #10,285"],
      [860, 165923, "860시간 | #165,923"],
      [547, 35740, "547시간 | #35,740"],
      [1322, 7539, "1,322시간 | #7,539"],
      [495, 161619, "495시간 | #161,619"],
      [317, 100662, "317시간 | #100,662"],
      [198, 155863, "198시간 | #155,863"],
      [666, 2636, "666시간 | #2,636"],
      [1325, 7056, "1,325시간 | #7,056"],
      [561, 39172, "561시간 | #39,172"],
      [438, 33937, "438시간 | #33,937"],
      [180, 151039, "180시간 | #151,039"],
      [1546, 6234, "1,546시간 | #6,234"],
      [442, 28755, "442시간 | #28,755"],
      [123, 541743, "123시간 | #541,743"],
      [1172, 9426, "1,172시간 | #9,426"],
      [1138, 45282, "1,138시간 | #45,282"],
    ],
    true
  );

  const options = {
    title: "전체",
    width: "100%",
    chartArea: {
      left: "10%",
      right: "2%",
      top: "5%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    trendlines: {
      0: {
        color: "green",
      },
    },
    vAxis: { direction: -1 },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("rankingPlayTimeScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawRankingPlayTimeScatterChart, false);
}

function drawRankingPlayTimeUnderSixDigitScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "총 플레이 시간");
  data.addColumn("number", "랭킹");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows(
    [
      [1328, 30402, "1,328시간 | #30,402"],
      [525, 53023, "525시간 | #53,023"],
      [1858, 17179, "1,858시간 | #17,179"],
      [594, 29395, "594시간 | #29,395"],
      [1204, 2881, "1,204시간 | #2,881"],
      [369, 98504, "369시간 | #98,504"],
      [782, 49445, "782시간 | #49,445"],
      [1232, 235, "1,232시간 | #235"],
      [632, 34588, "632시간 | #34,588"],
      [1572, 3172, "1,572시간 | #3,172"],
      [1431, 28561, "1,431시간 | #28,561"],
      [780, 19508, "780시간 | #19,508"],
      [1020, 7851, "1,020시간 | #7,851"],
      [811, 20045, "811시간 | #20,045"],
      [1091, 29972, "1,091시간 | #29,972"],
      [295, 88434, "295시간 | #88,434"],
      [2006, 958, "2,006시간 | #958"],
      [1039, 7349, "1,039시간 | #7,349"],
      [341, 60841, "341시간 | #60,841"],
      [918, 64475, "918시간 | #64,475"],
      [509, 48545, "509시간 | #48,545"],
      [870, 12760, "870시간 | #12,760"],
      [1953, 11681, "1,953시간 | #11,681"],
      [1255, 1132, "1,255시간 | #1,132"],
      [1641, 11323, "1,641시간 | #11,323"],
      [2080, 10189, "2,080시간 | #10,189"],
      [1360, 5445, "1,360시간 | #5,445"],
      [1588, 8344, "1,588시간 | #8,344"],
      [377, 53203, "377시간 | #53,203"],
      [1220, 1685, "1,220시간 | #1,685"],
      [670, 8203, "670시간 | #8,203"],
      [792, 74814, "792시간 | #74,814"],
      [1881, 1466, "1,881시간 | #1,466"],
      [585, 34223, "585시간 | #34,223"],
      [1977, 10536, "1,977시간 | #10,536"],
      [340, 91364, "340시간 | #91,364"],
      [538, 11070, "538시간 | #11,070"],
      [1016, 1861, "1,016시간 | #1,861"],
      [873, 5696, "873시간 | #5,696"],
      [1140, 4980, "1,140시간 | #4,980"],
      [1881, 292, "1,881시간 | #292"],
      [698, 45063, "698시간 | #45,063"],
      [1411, 244, "1,411시간 | #244"],
      [467, 43966, "467시간 | #43,966"],
      [1278, 1567, "1,278시간 | #1,567"],
      [361, 58328, "361시간 | #58,328"],
      [765, 43310, "765시간 | #43,310"],
      [1227, 7770, "1,227시간 | #7,770"],
      [785, 11176, "785시간 | #11,176"],
      [654, 23550, "654시간 | #23,550"],
      [1198, 19946, "1,198시간 | #19,946"],
      [819, 71290, "819시간 | #71,290"],
      [638, 13448, "638시간 | #13,448"],
      [1235, 5967, "1,235시간 | #5,967"],
      [620, 10414, "620시간 | #10,414"],
      [445, 65793, "445시간 | #65,793"],
      [998, 13989, "998시간 | #13,989"],
      [1046, 7315, "1,046시간 | #7,315"],
      [774, 9749, "774시간 | #9,749"],
      [1064, 8501, "1,064시간 | #8,501"],
      [1527, 8409, "1,527시간 | #8,409"],
      [1019, 3938, "1,019시간 | #3,938"],
      [1734, 282, "1,734시간 | #282"],
      [523, 73436, "523시간 | #73,436"],
      [1422, 21040, "1,422시간 | #21,040"],
      [764, 13536, "764시간 | #13,536"],
      [393, 54269, "393시간 | #54,269"],
      [1505, 18608, "1,505시간 | #18,608"],
      [548, 87398, "548시간 | #87,398"],
      [720, 15351, "720시간 | #15,351"],
      [2762, 2726, "2,762시간 | #2,726"],
      [863, 10114, "863시간 | #10,114"],
      [327, 56131, "327시간 | #56,131"],
      [858, 29108, "858시간 | #29,108"],
      [395, 24454, "395시간 | #24,454"],
      [265, 73926, "265시간 | #73,926"],
      [601, 51896, "601시간 | #51,896"],
      [823, 39444, "823시간 | #39,444"],
      [416, 3627, "416시간 | #3,627"],
      [2824, 371, "2,824시간 | #371"],
      [1163, 29387, "1,163시간 | #29,387"],
      [691, 21745, "691시간 | #21,745"],
      [1192, 12685, "1,192시간 | #12,685"],
      [497, 23135, "497시간 | #23,135"],
      [1059, 5923, "1,059시간 | #5,923"],
      [688, 11539, "688시간 | #11,539"],
      [1054, 9274, "1,054시간 | #9,274"],
      [1482, 18069, "1,482시간 | #18,069"],
      [690, 15943, "690시간 | #15,943"],
      [411, 92508, "411시간 | #92,508"],
      [1196, 5520, "1,196시간 | #5,520"],
      [1166, 2725, "1,166시간 | #2,725"],
      [713, 23081, "713시간 | #23,081"],
      [861, 13451, "861시간 | #13,451"],
      [1537, 10285, "1,537시간 | #10,285"],
      [547, 35740, "547시간 | #35,740"],
      [1322, 7539, "1,322시간 | #7,539"],
      [666, 2636, "666시간 | #2,636"],
      [1325, 7056, "1,325시간 | #7,056"],
      [561, 39172, "561시간 | #39,172"],
      [438, 33937, "438시간 | #33,937"],
      [1546, 6234, "1,546시간 | #6,234"],
      [442, 28755, "442시간 | #28,755"],
      [1172, 9426, "1,172시간 | #9,426"],
      [1138, 45282, "1,138시간 | #45,282"],
    ],
    true
  );

  const options = {
    title: "3 ~ 5자리",
    width: "100%",
    chartArea: {
      left: "10%",
      right: "2%",
      top: "5%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    trendlines: {
      0: {
        color: "green",
      },
    },
    vAxis: { direction: -1 },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("rankingPlayTimeUnderSixDigitScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawRankingPlayTimeUnderSixDigitScatterChart,
    false
  );
}

function drawRankingPlayStartDateScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "시작일");
  data.addColumn("number", "랭킹");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows(
    [
      [66, 30402, "2018년 8월 | #30,402"],
      [25, 53023, "2022년 1월 | #53,023"],
      [78, 17179, "2017년 8월 | #17,179"],
      [102, 29395, "2015년 8월 | #29,395"],
      [73, 2881, "2018년 1월 | #2,881"],
      [18, 98504, "2022년 8월 | #98,504"],
      [13, 49445, "2023년 1월 | #49,445"],
      [130, 235, "2013년 4월 | #235"],
      [32, 34588, "2021년 6월 | #34,588"],
      [99, 3172, "2015년 11월 | #3,172"],
      [65, 100185, "2018년 9월 | #100,185"],
      [22, 28561, "2022년 4월 | #28,561"],
      [20, 139130, "2022년 6월 | #139,130"],
      [22, 19508, "2022년 4월 | #19,508"],
      [17, 7851, "2022년 9월 | #7,851"],
      [36, 20045, "2021년 2월 | #20,045"],
      [35, 29972, "2021년 3월 | #29,972"],
      [14, 88434, "2022년 12월 | #88,434"],
      [70, 958, "2018년 4월 | #958"],
      [41, 7349, "2020년 9월 | #7,349"],
      [103, 60841, "2015년 7월 | #60,841"],
      [39, 64475, "2020년 11월 | #64,475"],
      [51, 48545, "2019년 11월 | #48,545"],
      [46, 12760, "2020년 4월 | #12,760"],
      [100, 11681, "2015년 10월 | #11,681"],
      [44, 1132, "2020년 6월 | #1,132"],
      [143, 11323, "2012년 3월 | #11,323"],
      [77, 10189, "2017년 9월 | #10,189"],
      [16, 341031, "2022년 10월 | #341,031"],
      [129, 5445, "2013년 5월 | #5,445"],
      [51, 8344, "2019년 11월 | #8,344"],
      [49, 53203, "2020년 1월 | #53,203"],
      [50, 1685, "2019년 12월 | #1,685"],
      [29, 8203, "2021년 9월 | #8,203"],
      [22, 74814, "2022년 4월 | #74,814"],
      [47, 1466, "2020년 3월 | #1,466"],
      [14, 34223, "2022년 12월 | #34,223"],
      [95, 10536, "2016년 3월 | #10,536"],
      [71, 91364, "2018년 3월 | #91,364"],
      [65, 11070, "2018년 9월 | #11,070"],
      [100, 1861, "2015년 10월 | #1,861"],
      [133, 244530, "2013년 1월 | #244,530"],
      [33, 5696, "2021년 5월 | #5,696"],
      [4, 167624, "2023년 10월 | #167,624"],
      [50, 4980, "2019년 12월 | #4,980"],
      [115, 292, "2014년 7월 | #292"],
      [36, 45063, "2021년 2월 | #45,063"],
      [90, 244, "2016년 8월 | #244"],
      [14, 43966, "2022년 12월 | #43,966"],
      [113, 1567, "2014년 9월 | #1,567"],
      [105, 58328, "2015년 5월 | #58,328"],
      [17, 43310, "2022년 9월 | #43,310"],
      [41, 7770, "2020년 9월 | #7,770"],
      [39, 11176, "2020년 11월 | #11,176"],
      [39, 23550, "2020년 11월 | #23,550"],
      [47, 19946, "2020년 3월 | #19,946"],
      [10, 71290, "2023년 4월 | #71,290"],
      [23, 13448, "2022년 3월 | #13,448"],
      [34, 5967, "2021년 4월 | #5,967"],
      [55, 10414, "2019년 7월 | #10,414"],
      [48, 65793, "2020년 2월 | #65,793"],
      [22, 13989, "2022년 4월 | #13,989"],
      [49, 7315, "2020년 1월 | #7,315"],
      [129, 9749, "2013년 5월 | #9,749"],
      [53, 8501, "2019년 9월 | #8,501"],
      [15, 121041, "2022년 11월 | #121,041"],
      [108, 8409, "2015년 2월 | #8,409"],
      [27, 433535, "2021년 11월 | #433,535"],
      [90, 3938, "2016년 8월 | #3,938"],
      [60, 282, "2019년 2월 | #282"],
      [59, 73436, "2019년 3월 | #73,436"],
      [24, 387583, "2022년 2월 | #387,583"],
      [61, 21040, "2019년 1월 | #21,040"],
      [30, 13536, "2021년 8월 | #13,536"],
      [22, 54269, "2022년 4월 | #54,269"],
      [26, 18608, "2021년 12월 | #18,608"],
      [44, 87398, "2020년 6월 | #87,398"],
      [132, 15351, "2013년 2월 | #15,351"],
      [140, 2726, "2012년 6월 | #2,726"],
      [56, 212265, "2019년 6월 | #212,265"],
      [38, 10114, "2020년 12월 | #10,114"],
      [38, 56131, "2020년 12월 | #56,131"],
      [20, 188964, "2022년 6월 | #188,964"],
      [29, 29108, "2021년 9월 | #29,108"],
      [103, 138668, "2015년 7월 | #138,668"],
      [25, 24454, "2022년 1월 | #24,454"],
      [105, 549438, "2015년 5월 | #549,438"],
      [38, 73926, "2020년 12월 | #73,926"],
      [15, 208199, "2022년 11월 | #208,199"],
      [53, 51896, "2019년 9월 | #51,896"],
      [49, 39444, "2020년 1월 | #39,444"],
      [42, 3627, "2020년 8월 | #3,627"],
      [55, 371, "2019년 7월 | #371"],
      [40, 119601, "2020년 10월 | #119,601"],
      [87, 29387, "2016년 11월 | #29,387"],
      [18, 107644, "2022년 8월 | #107,644"],
      [73, 21745, "2018년 1월 | #21,745"],
      [13, 215898, "2023년 1월 | #215,898"],
      [84, 12685, "2017년 2월 | #12,685"],
      [48, 23135, "2020년 2월 | #23,135"],
      [48, 5923, "2020년 2월 | #5,923"],
      [91, 11539, "2016년 7월 | #11,539"],
      [21, 251739, "2022년 5월 | #251,739"],
      [59, 326409, "2019년 3월 | #326,409"],
      [106, 9274, "2015년 4월 | #9,274"],
      [42, 18069, "2020년 8월 | #18,069"],
      [31, 185907, "2021년 7월 | #185,907"],
      [74, 15943, "2017년 12월 | #15,943"],
      [46, 92508, "2020년 4월 | #92,508"],
      [54, 5520, "2019년 8월 | #5,520"],
      [47, 2725, "2020년 3월 | #2,725"],
      [54, 23081, "2019년 8월 | #23,081"],
      [120, 271378, "2014년 2월 | #271,378"],
      [29, 13451, "2021년 9월 | #13,451"],
      [133, 10285, "2013년 1월 | #10,285"],
      [28, 165923, "2021년 10월 | #165,923"],
      [18, 35740, "2022년 8월 | #35,740"],
      [111, 7539, "2014년 11월 | #7,539"],
      [39, 161619, "2020년 11월 | #161,619"],
      [39, 100662, "2020년 11월 | #100,662"],
      [14, 155863, "2022년 12월 | #155,863"],
      [64, 2636, "2018년 10월 | #2,636"],
      [43, 7056, "2020년 7월 | #7,056"],
      [38, 39172, "2020년 12월 | #39,172"],
      [43, 33937, "2020년 7월 | #33,937"],
      [46, 151039, "2020년 4월 | #151,039"],
      [85, 6234, "2017년 1월 | #6,234"],
      [44, 28755, "2020년 6월 | #28,755"],
      [63, 541743, "2018년 11월 | #541,743"],
      [120, 9426, "2014년 2월 | #9,426"],
      [66, 45282, "2018년 8월 | #45,282"],
    ],
    true
  );

  const options = {
    title: "전체",
    width: "100%",
    chartArea: {
      left: "10%",
      right: "2%",
      top: "5%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    trendlines: {
      0: {
        color: "green",
      },
    },
    hAxis: {
      ticks: [
        { v: 145, f: "2012" },
        { v: 133, f: "2013" },
        { v: 121, f: "2014" },
        { v: 109, f: "2015" },
        { v: 97, f: "2016" },
        { v: 85, f: "2017" },
        { v: 73, f: "2018" },
        { v: 61, f: "2019" },
        { v: 49, f: "2020" },
        { v: 37, f: "2021" },
        { v: 25, f: "2022" },
        { v: 13, f: "2023" },
        { v: 1, f: "2024" },
      ],
    },
    vAxis: { direction: -1 },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("rankingPlayStartDateScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawRankingPlayStartDateScatterChart,
    false
  );
}

function drawRankingPlayStartDateUnderSixDigitScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "시작일");
  data.addColumn("number", "랭킹");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows(
    [
      [66, 30402, "2018년 8월 | #30,402"],
      [25, 53023, "2022년 1월 | #53,023"],
      [78, 17179, "2017년 8월 | #17,179"],
      [102, 29395, "2015년 8월 | #29,395"],
      [73, 2881, "2018년 1월 | #2,881"],
      [18, 98504, "2022년 8월 | #98,504"],
      [13, 49445, "2023년 1월 | #49,445"],
      [130, 235, "2013년 4월 | #235"],
      [32, 34588, "2021년 6월 | #34,588"],
      [99, 3172, "2015년 11월 | #3,172"],
      [22, 28561, "2022년 4월 | #28,561"],
      [22, 19508, "2022년 4월 | #19,508"],
      [17, 7851, "2022년 9월 | #7,851"],
      [36, 20045, "2021년 2월 | #20,045"],
      [35, 29972, "2021년 3월 | #29,972"],
      [14, 88434, "2022년 12월 | #88,434"],
      [70, 958, "2018년 4월 | #958"],
      [41, 7349, "2020년 9월 | #7,349"],
      [103, 60841, "2015년 7월 | #60,841"],
      [39, 64475, "2020년 11월 | #64,475"],
      [51, 48545, "2019년 11월 | #48,545"],
      [46, 12760, "2020년 4월 | #12,760"],
      [100, 11681, "2015년 10월 | #11,681"],
      [44, 1132, "2020년 6월 | #1,132"],
      [143, 11323, "2012년 3월 | #11,323"],
      [77, 10189, "2017년 9월 | #10,189"],
      [129, 5445, "2013년 5월 | #5,445"],
      [51, 8344, "2019년 11월 | #8,344"],
      [49, 53203, "2020년 1월 | #53,203"],
      [50, 1685, "2019년 12월 | #1,685"],
      [29, 8203, "2021년 9월 | #8,203"],
      [22, 74814, "2022년 4월 | #74,814"],
      [47, 1466, "2020년 3월 | #1,466"],
      [14, 34223, "2022년 12월 | #34,223"],
      [95, 10536, "2016년 3월 | #10,536"],
      [71, 91364, "2018년 3월 | #91,364"],
      [65, 11070, "2018년 9월 | #11,070"],
      [100, 1861, "2015년 10월 | #1,861"],
      [33, 5696, "2021년 5월 | #5,696"],
      [50, 4980, "2019년 12월 | #4,980"],
      [115, 292, "2014년 7월 | #292"],
      [36, 45063, "2021년 2월 | #45,063"],
      [90, 244, "2016년 8월 | #244"],
      [14, 43966, "2022년 12월 | #43,966"],
      [113, 1567, "2014년 9월 | #1,567"],
      [105, 58328, "2015년 5월 | #58,328"],
      [17, 43310, "2022년 9월 | #43,310"],
      [41, 7770, "2020년 9월 | #7,770"],
      [39, 11176, "2020년 11월 | #11,176"],
      [39, 23550, "2020년 11월 | #23,550"],
      [47, 19946, "2020년 3월 | #19,946"],
      [10, 71290, "2023년 4월 | #71,290"],
      [23, 13448, "2022년 3월 | #13,448"],
      [34, 5967, "2021년 4월 | #5,967"],
      [55, 10414, "2019년 7월 | #10,414"],
      [48, 65793, "2020년 2월 | #65,793"],
      [22, 13989, "2022년 4월 | #13,989"],
      [49, 7315, "2020년 1월 | #7,315"],
      [129, 9749, "2013년 5월 | #9,749"],
      [53, 8501, "2019년 9월 | #8,501"],
      [108, 8409, "2015년 2월 | #8,409"],
      [90, 3938, "2016년 8월 | #3,938"],
      [60, 282, "2019년 2월 | #282"],
      [59, 73436, "2019년 3월 | #73,436"],
      [61, 21040, "2019년 1월 | #21,040"],
      [30, 13536, "2021년 8월 | #13,536"],
      [22, 54269, "2022년 4월 | #54,269"],
      [26, 18608, "2021년 12월 | #18,608"],
      [44, 87398, "2020년 6월 | #87,398"],
      [132, 15351, "2013년 2월 | #15,351"],
      [140, 2726, "2012년 6월 | #2,726"],
      [38, 10114, "2020년 12월 | #10,114"],
      [38, 56131, "2020년 12월 | #56,131"],
      [29, 29108, "2021년 9월 | #29,108"],
      [25, 24454, "2022년 1월 | #24,454"],
      [38, 73926, "2020년 12월 | #73,926"],
      [53, 51896, "2019년 9월 | #51,896"],
      [49, 39444, "2020년 1월 | #39,444"],
      [42, 3627, "2020년 8월 | #3,627"],
      [55, 371, "2019년 7월 | #371"],
      [87, 29387, "2016년 11월 | #29,387"],
      [73, 21745, "2018년 1월 | #21,745"],
      [84, 12685, "2017년 2월 | #12,685"],
      [48, 23135, "2020년 2월 | #23,135"],
      [48, 5923, "2020년 2월 | #5,923"],
      [91, 11539, "2016년 7월 | #11,539"],
      [106, 9274, "2015년 4월 | #9,274"],
      [42, 18069, "2020년 8월 | #18,069"],
      [74, 15943, "2017년 12월 | #15,943"],
      [46, 92508, "2020년 4월 | #92,508"],
      [54, 5520, "2019년 8월 | #5,520"],
      [47, 2725, "2020년 3월 | #2,725"],
      [54, 23081, "2019년 8월 | #23,081"],
      [29, 13451, "2021년 9월 | #13,451"],
      [133, 10285, "2013년 1월 | #10,285"],
      [18, 35740, "2022년 8월 | #35,740"],
      [111, 7539, "2014년 11월 | #7,539"],
      [64, 2636, "2018년 10월 | #2,636"],
      [43, 7056, "2020년 7월 | #7,056"],
      [38, 39172, "2020년 12월 | #39,172"],
      [43, 33937, "2020년 7월 | #33,937"],
      [85, 6234, "2017년 1월 | #6,234"],
      [44, 28755, "2020년 6월 | #28,755"],
      [120, 9426, "2014년 2월 | #9,426"],
      [66, 45282, "2018년 8월 | #45,282"],
    ],
    true
  );

  const options = {
    title: "3 ~ 5자리",
    width: "100%",
    chartArea: {
      left: "10%",
      right: "2%",
      top: "5%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    trendlines: {
      0: {
        color: "green",
      },
    },
    hAxis: {
      ticks: [
        { v: 145, f: "2012" },
        { v: 133, f: "2013" },
        { v: 121, f: "2014" },
        { v: 109, f: "2015" },
        { v: 97, f: "2016" },
        { v: 85, f: "2017" },
        { v: 73, f: "2018" },
        { v: 61, f: "2019" },
        { v: 49, f: "2020" },
        { v: 37, f: "2021" },
        { v: 25, f: "2022" },
        { v: 13, f: "2023" },
        { v: 1, f: "2024" },
      ],
    },
    vAxis: { direction: -1 },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("rankingPlayStartDateUnderSixDigitScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawRankingPlayStartDateUnderSixDigitScatterChart,
    false
  );
}

function drawTopPlayColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["베퍼포", "인원수"],
    ["0 ~ 99", 1],
    ["100 ~ 199", 9],
    ["200 ~ 299", 23],
    ["300 ~ 399", 35],
    ["400 ~ 499", 33],
    ["500 ~ 599", 18],
    ["600 ~ 699", 5],
    ["700 ~ 799", 2],
    ["800 ~ 899", 4],
    ["900 ~ 999", 1],
  ]);

  const options = {
    title: "베퍼포",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "10%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    bar: { groupWidth: "100%" },
    vAxis: {
      ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40],
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("topPlayColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTopPlayColumnChart, false);
}

function drawBottomColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["바닥", "인원수"],
    ["0 ~ 99", 14],
    ["100 ~ 199", 27],
    ["200 ~ 299", 40],
    ["300 ~ 399", 34],
    ["400 ~ 499", 11],
    ["500 ~ 599", 4],
    ["600 ~ 699", 1],
    ["700 ~ 799", 0],
    ["800 ~ 899", 0],
    ["900 ~ 999", 0],
  ]);

  const options = {
    title: "바닥",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "10%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    bar: { groupWidth: "100%" },
    vAxis: {
      ticks: [0, 5, 10, 15, 20, 25, 30, 35, 40],
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("bottomColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawBottomColumnChart, false);
}

function drawBestPerformanceCandlestickChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("string", "순위");
  data.addColumn("number", "베퍼포");
  data.addColumn("number", "베퍼포");
  data.addColumn("number", "바닥");
  data.addColumn("number", "바닥");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows(
    [
      ["", 859, 859, 591, 591, "1: #235 | 859 ~ 591"],
      ["", 907, 907, 563, 563, "2: #244 | 907 ~ 563"],
      ["", 851, 851, 616, 616, "3: #282 | 851 ~ 616"],
      ["", 860, 860, 542, 542, "4: #292 | 860 ~ 542"],
      ["", 830, 830, 512, 512, "5: #371 | 830 ~ 512"],
      ["", 743, 743, 435, 435, "6: #958 | 743 ~ 435"],
      ["", 705, 705, 477, 477, "7: #1,132 | 705 ~ 477"],
      ["", 672, 672, 439, 439, "8: #1,466 | 672 ~ 439"],
      ["", 650, 650, 459, 459, "9: #1,567 | 650 ~ 459"],
      ["", 685, 685, 393, 393, "10: #1,685 | 685 ~ 393"],
      ["", 606, 606, 449, 449, "11: #1,861 | 606 ~ 449"],
      ["", 627, 627, 420, 420, "12: #2,636 | 627 ~ 420"],
      ["", 586, 586, 421, 421, "13: #2,725 | 586 ~ 421"],
      ["", 588, 588, 415, 415, "14: #2,726 | 588 ~ 415"],
      ["", 591, 591, 402, 402, "15: #2,881 | 591 ~ 402"],
      ["", 544, 544, 420, 420, "16: #3,172 | 544 ~ 420"],
      ["", 580, 580, 408, 408, "17: #3,627 | 580 ~ 408"],
      ["", 540, 540, 386, 386, "18: #3,938 | 540 ~ 386"],
      ["", 546, 546, 346, 346, "19: #4,980 | 546 ~ 346"],
      ["", 525, 525, 381, 381, "20: #5,445 | 525 ~ 381"],
      ["", 555, 555, 334, 334, "21: #5,520 | 555 ~ 334"],
      ["", 498, 498, 342, 342, "22: #5,696 | 498 ~ 342"],
      ["", 498, 498, 351, 351, "23: #5,923 | 498 ~ 351"],
      ["", 516, 516, 351, 351, "24: #5,967 | 516 ~ 351"],
      ["", 535, 535, 374, 374, "25: #6,234 | 535 ~ 374"],
      ["", 515, 515, 338, 338, "26: #7,056 | 515 ~ 338"],
      ["", 477, 477, 319, 319, "27: #7,315 | 477 ~ 319"],
      ["", 490, 490, 349, 349, "28: #7,349 | 490 ~ 349"],
      ["", 512, 512, 339, 339, "29: #7,539 | 512 ~ 339"],
      ["", 489, 489, 314, 314, "30: #7,770 | 489 ~ 314"],
      ["", 531, 531, 306, 306, "31: #7,851 | 531 ~ 306"],
      ["", 496, 496, 320, 320, "32: #8,203 | 496 ~ 320"],
      ["", 472, 472, 346, 346, "33: #8,344 | 472 ~ 346"],
      ["", 465, 465, 361, 361, "34: #8,409 | 465 ~ 361"],
      ["", 470, 470, 322, 322, "35: #8,501 | 470 ~ 322"],
      ["", 489, 489, 315, 315, "36: #9,274 | 489 ~ 315"],
      ["", 464, 464, 329, 329, "37: #9,426 | 464 ~ 329"],
      ["", 510, 510, 283, 283, "38: #9,749 | 510 ~ 283"],
      ["", 456, 456, 335, 335, "39: #10,114 | 456 ~ 335"],
      ["", 465, 465, 328, 328, "40: #10,189 | 465 ~ 328"],
      ["", 478, 478, 336, 336, "41: #10,285 | 478 ~ 336"],
      ["", 459, 459, 328, 328, "42: #10,414 | 459 ~ 328"],
      ["", 450, 450, 335, 335, "43: #10,536 | 450 ~ 335"],
      ["", 472, 472, 312, 312, "44: #11,070 | 472 ~ 312"],
      ["", 487, 487, 310, 310, "45: #11,176 | 487 ~ 310"],
      ["", 465, 465, 316, 316, "46: #11,323 | 465 ~ 316"],
      ["", 442, 442, 338, 338, "47: #11,539 | 442 ~ 338"],
      ["", 425, 425, 330, 330, "48: #11,681 | 425 ~ 330"],
      ["", 517, 517, 296, 296, "49: #12,685 | 517 ~ 296"],
      ["", 549, 549, 236, 236, "50: #12,760 | 549 ~ 236"],
      ["", 427, 427, 274, 274, "51: #13,448 | 427 ~ 274"],
      ["", 446, 446, 295, 295, "52: #13,451 | 446 ~ 295"],
      ["", 444, 444, 310, 310, "53: #13,536 | 444 ~ 310"],
      ["", 404, 404, 314, 314, "54: #13,989 | 404 ~ 314"],
      ["", 410, 410, 307, 307, "55: #15,351 | 410 ~ 307"],
      ["", 446, 446, 295, 295, "56: #15,943 | 446 ~ 295"],
      ["", 478, 478, 242, 242, "57: #17,179 | 478 ~ 242"],
      ["", 436, 436, 272, 272, "58: #18,069 | 436 ~ 272"],
      ["", 407, 407, 283, 283, "59: #18,608 | 407 ~ 283"],
      ["", 393, 393, 282, 282, "60: #19,508 | 393 ~ 282"],
      ["", 381, 381, 267, 267, "61: #19,946 | 381 ~ 267"],
      ["", 469, 469, 236, 236, "62: #20,045 | 469 ~ 236"],
      ["", 397, 397, 250, 250, "63: #21,040 | 397 ~ 250"],
      ["", 390, 390, 274, 274, "64: #21,745 | 390 ~ 274"],
      ["", 378, 378, 274, 274, "65: #23,081 | 378 ~ 274"],
      ["", 507, 507, 219, 219, "66: #23,135 | 507 ~ 219"],
      ["", 380, 380, 251, 251, "67: #23,550 | 380 ~ 251"],
      ["", 418, 418, 230, 230, "68: #24,454 | 418 ~ 230"],
      ["", 362, 362, 255, 255, "69: #28,561 | 362 ~ 255"],
      ["", 390, 390, 226, 226, "70: #28,755 | 390 ~ 226"],
      ["", 359, 359, 240, 240, "71: #29,108 | 359 ~ 240"],
      ["", 378, 378, 248, 248, "72: #29,387 | 378 ~ 248"],
      ["", 453, 453, 176, 176, "73: #29,395 | 453 ~ 176"],
      ["", 385, 385, 236, 236, "74: #29,972 | 385 ~ 236"],
      ["", 357, 357, 247, 247, "75: #30,402 | 357 ~ 247"],
      ["", 395, 395, 184, 184, "76: #33,937 | 395 ~ 184"],
      ["", 357, 357, 215, 215, "77: #34,223 | 357 ~ 215"],
      ["", 374, 374, 222, 222, "78: #34,588 | 374 ~ 222"],
      ["", 350, 350, 235, 235, "79: #35,740 | 350 ~ 235"],
      ["", 373, 373, 243, 243, "80: #39,172 | 373 ~ 243"],
      ["", 332, 332, 242, 242, "81: #39,444 | 332 ~ 242"],
      ["", 341, 341, 210, 210, "82: #43,310 | 341 ~ 210"],
      ["", 342, 342, 209, 209, "83: #43,966 | 342 ~ 209"],
      ["", 345, 345, 222, 222, "84: #45,063 | 345 ~ 222"],
      ["", 334, 334, 236, 236, "85: #45,282 | 334 ~ 236"],
      ["", 342, 342, 218, 218, "86: #48,545 | 342 ~ 218"],
      ["", 306, 306, 217, 217, "87: #49,445 | 306 ~ 217"],
      ["", 309, 309, 215, 215, "88: #51,896 | 309 ~ 215"],
      ["", 314, 314, 212, 212, "89: #53,023 | 314 ~ 212"],
      ["", 340, 340, 207, 207, "90: #53,203 | 340 ~ 207"],
      ["", 325, 325, 192, 192, "91: #54,269 | 325 ~ 192"],
      ["", 309, 309, 202, 202, "92: #56,131 | 309 ~ 202"],
      ["", 336, 336, 202, 202, "93: #58,328 | 336 ~ 202"],
      ["", 324, 324, 195, 195, "94: #60,841 | 324 ~ 195"],
      ["", 300, 300, 181, 181, "95: #64,475 | 300 ~ 181"],
      ["", 281, 281, 188, 188, "96: #65,793 | 281 ~ 188"],
      ["", 289, 289, 197, 197, "97: #71,290 | 289 ~ 197"],
      ["", 274, 274, 188, 188, "98: #73,436 | 274 ~ 188"],
      ["", 310, 310, 190, 190, "99: #73,926 | 310 ~ 190"],
      ["", 279, 279, 187, 187, "100: #74,814 | 279 ~ 187"],
      ["", 271, 271, 168, 168, "101: #87,398 | 271 ~ 168"],
      ["", 258, 258, 170, 170, "102: #88,434 | 258 ~ 170"],
      ["", 285, 285, 131, 131, "103: #91,364 | 285 ~ 131"],
      ["", 250, 250, 188, 188, "104: #92,508 | 250 ~ 188"],
      ["", 303, 303, 136, 136, "105: #98,504 | 303 ~ 136"],
      ["", 311, 311, 120, 120, "106: #100,185 | 311 ~ 120"],
      ["", 255, 255, 162, 162, "107: #100,662 | 255 ~ 162"],
      ["", 262, 262, 146, 146, "108: #107,644 | 262 ~ 146"],
      ["", 258, 258, 150, 150, "109: #119,601 | 258 ~ 150"],
      ["", 271, 271, 122, 122, "110: #121,041 | 271 ~ 122"],
      ["", 217, 217, 149, 149, "111: #138,668 | 217 ~ 149"],
      ["", 262, 262, 103, 103, "112: #139,130 | 262 ~ 103"],
      ["", 238, 238, 109, 109, "113: #151,039 | 238 ~ 109"],
      ["", 221, 221, 94, 94, "114: #155,863 | 221 ~ 94"],
      ["", 241, 241, 105, 105, "115: #161,619 | 241 ~ 105"],
      ["", 190, 190, 129, 129, "116: #165,923 | 190 ~ 129"],
      ["", 218, 218, 109, 109, "117: #167,624 | 218 ~ 109"],
      ["", 238, 238, 61, 61, "118: #185,907 | 238 ~ 61"],
      ["", 284, 284, 126, 126, "119: #188,964 | 284 ~ 126"],
      ["", 219, 219, 98, 98, "120: #208,199 | 219 ~ 98"],
      ["", 173, 173, 90, 90, "121: #212,265 | 173 ~ 90"],
      ["", 203, 203, 72, 72, "122: #215,898 | 203 ~ 72"],
      ["", 221, 221, 72, 72, "123: #244,530 | 221 ~ 72"],
      ["", 179, 179, 75, 75, "124: #251,739 | 179 ~ 75"],
      ["", 190, 190, 85, 85, "125: #271,378 | 190 ~ 85"],
      ["", 135, 135, 39, 39, "126: #326,409 | 135 ~ 39"],
      ["", 130, 130, 69, 69, "127: #341,031 | 130 ~ 69"],
      ["", 120, 120, 48, 48, "128: #387,583 | 120 ~ 48"],
      ["", 104, 104, 58, 58, "129: #433,535 | 104 ~ 58"],
      ["", 104, 104, 21, 21, "130: #541,743 | 104 ~ 21"],
      ["", 92, 92, 31, 31, "131: #549,438 | 92 ~ 31"],
    ],
    true
  );

  const options = {
    title: "최고 성과",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "5%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    bar: { groupWidth: "75%" },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#3366cc" },
    },
  };

  const chart = new google.visualization.CandlestickChart(
    document.getElementById("bestPerformanceCandlestickChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawBestPerformanceCandlestickChart, false);
}

function drawHitsPerPlayColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["Hits Per Play", "인원수"],
    ["0 ~ 99", 1],
    ["100 ~ 149", 11],
    ["150 ~ 199", 30],
    ["200 ~ 249", 36],
    ["250 ~ 299", 30],
    ["300 ~ 349", 11],
    ["350 ~ 399", 5],
    ["400 ~ 449", 3],
    ["450 ~ 499", 3],
    ["500 이상", 1],
  ]);

  const options = {
    title: "Hits per Play",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "10%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("hitsPerPlayColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHitsPerPlayColumnChart, false);
}

function drawRankingHitsPerPlayScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "Hits per Play");
  data.addColumn("number", "랭킹");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows(
    [
      [220.25, 30402, "220.25 | #30,402"],
      [121.07, 53023, "121.07 | #53,023"],
      [463.18, 17179, "463.18 | #17,179"],
      [261.88, 29395, "261.88 | #29,395"],
      [255.83, 2881, "255.83 | #2,881"],
      [97.42, 98504, "97.42 | #98,504"],
      [369.82, 49445, "369.82 | #49,445"],
      [343.9, 235, "343.9 | #235"],
      [283.6, 34588, "283.6 | #34,588"],
      [203.83, 3172, "203.83 | #3,172"],
      [199.02, 100185, "199.02 | #100,185"],
      [412.99, 28561, "412.99 | #28,561"],
      [173.54, 139130, "173.54 | #139,130"],
      [190.89, 19508, "190.89 | #19,508"],
      [274.37, 7851, "274.37 | #7,851"],
      [252.05, 20045, "252.05 | #20,045"],
      [353.94, 29972, "353.94 | #29,972"],
      [296.94, 88434, "296.94 | #88,434"],
      [298.44, 958, "298.44 | #958"],
      [275.51, 7349, "275.51 | #7,349"],
      [285.15, 60841, "285.15 | #60,841"],
      [235.4, 64475, "235.4 | #64,475"],
      [137.23, 48545, "137.23 | #48,545"],
      [231.99, 12760, "231.99 | #12,760"],
      [311.9, 11681, "311.9 | #11,681"],
      [224.33, 1132, "224.33 | #1,132"],
      [318.66, 11323, "318.66 | #11,323"],
      [239.6, 10189, "239.6 | #10,189"],
      [186.31, 341031, "186.31 | #341,031"],
      [168.06, 5445, "168.06 | #5,445"],
      [205.49, 8344, "205.49 | #8,344"],
      [305.17, 53203, "305.17 | #53,203"],
      [400.82, 1685, "400.82 | #1,685"],
      [240.11, 8203, "240.11 | #8,203"],
      [127.44, 74814, "127.44 | #74,814"],
      [261.51, 1466, "261.51 | #1,466"],
      [318.39, 34223, "318.39 | #34,223"],
      [165.25, 10536, "165.25 | #10,536"],
      [156.11, 91364, "156.11 | #91,364"],
      [292.49, 11070, "292.49 | #11,070"],
      [235.34, 1861, "235.34 | #1,861"],
      [139.04, 244530, "139.04 | #244,530"],
      [258.36, 5696, "258.36 | #5,696"],
      [360.27, 167624, "360.27 | #167,624"],
      [472.27, 4980, "472.27 | #4,980"],
      [213.13, 292, "213.13 | #292"],
      [250.69, 45063, "250.69 | #45,063"],
      [224.31, 244, "224.31 | #244"],
      [216.07, 43966, "216.07 | #43,966"],
      [334.67, 1567, "334.67 | #1,567"],
      [190.43, 58328, "190.43 | #58,328"],
      [282.22, 43310, "282.22 | #43,310"],
      [216.99, 7770, "216.99 | #7,770"],
      [191.65, 11176, "191.65 | #11,176"],
      [245.97, 23550, "245.97 | #23,550"],
      [167.97, 19946, "167.97 | #19,946"],
      [199.51, 71290, "199.51 | #71,290"],
      [229.13, 13448, "229.13 | #13,448"],
      [453.83, 5967, "453.83 | #5,967"],
      [429.43, 10414, "429.43 | #10,414"],
      [261.64, 65793, "261.64 | #65,793"],
      [352.79, 13989, "352.79 | #13,989"],
      [282.05, 7315, "282.05 | #7,315"],
      [208.54, 9749, "208.54 | #9,749"],
      [304.4, 8501, "304.4 | #8,501"],
      [265.29, 121041, "265.29 | #121,041"],
      [271.45, 8409, "271.45 | #8,409"],
      [149.16, 433535, "149.16 | #433,535"],
      [196.5, 3938, "196.5 | #3,938"],
      [260.38, 282, "260.38 | #282"],
      [209.67, 73436, "209.67 | #73,436"],
      [140.72, 387583, "140.72 | #387,583"],
      [187.67, 21040, "187.67 | #21,040"],
      [184.93, 13536, "184.93 | #13,536"],
      [151.19, 54269, "151.19 | #54,269"],
      [274.67, 18608, "274.67 | #18,608"],
      [128.34, 87398, "128.34 | #87,398"],
      [264.2, 15351, "264.2 | #15,351"],
      [235.66, 2726, "235.66 | #2,726"],
      [211.32, 212265, "211.32 | #212,265"],
      [208.18, 10114, "208.18 | #10,114"],
      [159.59, 56131, "159.59 | #56,131"],
      [174.94, 188964, "174.94 | #188,964"],
      [213.16, 29108, "213.16 | #29,108"],
      [342.66, 138668, "342.66 | #138,668"],
      [177.68, 24454, "177.68 | #24,454"],
      [200.26, 549438, "200.26 | #549,438"],
      [171.32, 73926, "171.32 | #73,926"],
      [146.61, 208199, "146.61 | #208,199"],
      [236.64, 51896, "236.64 | #51,896"],
      [261.96, 39444, "261.96 | #39,444"],
      [219.35, 3627, "219.35 | #3,627"],
      [237.44, 371, "237.44 | #371"],
      [137.39, 119601, "137.39 | #119,601"],
      [339.02, 29387, "339.02 | #29,387"],
      [178.12, 107644, "178.12 | #107,644"],
      [349.97, 21745, "349.97 | #21,745"],
      [244.5, 215898, "244.5 | #215,898"],
      [291.16, 12685, "291.16 | #12,685"],
      [178.88, 23135, "178.88 | #23,135"],
      [291.82, 5923, "291.82 | #5,923"],
      [115.87, 11539, "115.87 | #11,539"],
      [269.93, 251739, "269.93 | #251,739"],
      [242.29, 326409, "242.29 | #326,409"],
      [202.53, 9274, "202.53 | #9,274"],
      [636.84, 18069, "636.84 | #18,069"],
      [154.11, 185907, "154.11 | #185,907"],
      [199.5, 15943, "199.5 | #15,943"],
      [196.05, 92508, "196.05 | #92,508"],
      [206.25, 5520, "206.25 | #5,520"],
      [195.99, 2725, "195.99 | #2,725"],
      [205.4, 23081, "205.4 | #23,081"],
      [133.71, 271378, "133.71 | #271,378"],
      [262.07, 13451, "262.07 | #13,451"],
      [231.32, 10285, "231.32 | #10,285"],
      [150.81, 165923, "150.81 | #165,923"],
      [263.2, 35740, "263.2 | #35,740"],
      [167.79, 7539, "167.79 | #7,539"],
      [289.33, 161619, "289.33 | #161,619"],
      [245.33, 100662, "245.33 | #100,662"],
      [280.57, 155863, "280.57 | #155,863"],
      [178.09, 2636, "178.09 | #2,636"],
      [279.64, 7056, "279.64 | #7,056"],
      [199.97, 39172, "199.97 | #39,172"],
      [301.84, 33937, "301.84 | #33,937"],
      [208.55, 151039, "208.55 | #151,039"],
      [218.68, 6234, "218.68 | #6,234"],
      [186.26, 28755, "186.26 | #28,755"],
      [361.34, 541743, "361.34 | #541,743"],
      [227.47, 9426, "227.47 | #9,426"],
      [226.07, 45282, "226.07 | #45,282"],
    ],
    true
  );

  const options = {
    title: "전체",
    width: "100%",
    chartArea: {
      left: "10%",
      right: "2%",
      top: "5%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    trendlines: {
      0: {
        color: "green",
      },
    },
    vAxis: { direction: -1 },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("rankingHitsPerPlayScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawRankingHitsPerPlayScatterChart, false);
}

function drawRankingHitsPerPlayUnderSixDigitScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "Hits per Play");
  data.addColumn("number", "랭킹");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows(
    [
      [220.25, 30402, "220.25 | #30,402"],
      [121.07, 53023, "121.07 | #53,023"],
      [463.18, 17179, "463.18 | #17,179"],
      [261.88, 29395, "261.88 | #29,395"],
      [255.83, 2881, "255.83 | #2,881"],
      [97.42, 98504, "97.42 | #98,504"],
      [369.82, 49445, "369.82 | #49,445"],
      [343.9, 235, "343.9 | #235"],
      [283.6, 34588, "283.6 | #34,588"],
      [203.83, 3172, "203.83 | #3,172"],
      [412.99, 28561, "412.99 | #28,561"],
      [190.89, 19508, "190.89 | #19,508"],
      [274.37, 7851, "274.37 | #7,851"],
      [252.05, 20045, "252.05 | #20,045"],
      [353.94, 29972, "353.94 | #29,972"],
      [296.94, 88434, "296.94 | #88,434"],
      [298.44, 958, "298.44 | #958"],
      [275.51, 7349, "275.51 | #7,349"],
      [285.15, 60841, "285.15 | #60,841"],
      [235.4, 64475, "235.4 | #64,475"],
      [137.23, 48545, "137.23 | #48,545"],
      [231.99, 12760, "231.99 | #12,760"],
      [311.9, 11681, "311.9 | #11,681"],
      [224.33, 1132, "224.33 | #1,132"],
      [318.66, 11323, "318.66 | #11,323"],
      [239.6, 10189, "239.6 | #10,189"],
      [168.06, 5445, "168.06 | #5,445"],
      [205.49, 8344, "205.49 | #8,344"],
      [305.17, 53203, "305.17 | #53,203"],
      [400.82, 1685, "400.82 | #1,685"],
      [240.11, 8203, "240.11 | #8,203"],
      [127.44, 74814, "127.44 | #74,814"],
      [261.51, 1466, "261.51 | #1,466"],
      [318.39, 34223, "318.39 | #34,223"],
      [165.25, 10536, "165.25 | #10,536"],
      [156.11, 91364, "156.11 | #91,364"],
      [292.49, 11070, "292.49 | #11,070"],
      [235.34, 1861, "235.34 | #1,861"],
      [258.36, 5696, "258.36 | #5,696"],
      [472.27, 4980, "472.27 | #4,980"],
      [213.13, 292, "213.13 | #292"],
      [250.69, 45063, "250.69 | #45,063"],
      [224.31, 244, "224.31 | #244"],
      [216.07, 43966, "216.07 | #43,966"],
      [334.67, 1567, "334.67 | #1,567"],
      [190.43, 58328, "190.43 | #58,328"],
      [282.22, 43310, "282.22 | #43,310"],
      [216.99, 7770, "216.99 | #7,770"],
      [191.65, 11176, "191.65 | #11,176"],
      [245.97, 23550, "245.97 | #23,550"],
      [167.97, 19946, "167.97 | #19,946"],
      [199.51, 71290, "199.51 | #71,290"],
      [229.13, 13448, "229.13 | #13,448"],
      [453.83, 5967, "453.83 | #5,967"],
      [429.43, 10414, "429.43 | #10,414"],
      [261.64, 65793, "261.64 | #65,793"],
      [352.79, 13989, "352.79 | #13,989"],
      [282.05, 7315, "282.05 | #7,315"],
      [208.54, 9749, "208.54 | #9,749"],
      [304.4, 8501, "304.4 | #8,501"],
      [271.45, 8409, "271.45 | #8,409"],
      [196.5, 3938, "196.5 | #3,938"],
      [260.38, 282, "260.38 | #282"],
      [209.67, 73436, "209.67 | #73,436"],
      [187.67, 21040, "187.67 | #21,040"],
      [184.93, 13536, "184.93 | #13,536"],
      [151.19, 54269, "151.19 | #54,269"],
      [274.67, 18608, "274.67 | #18,608"],
      [128.34, 87398, "128.34 | #87,398"],
      [264.2, 15351, "264.2 | #15,351"],
      [235.66, 2726, "235.66 | #2,726"],
      [208.18, 10114, "208.18 | #10,114"],
      [159.59, 56131, "159.59 | #56,131"],
      [213.16, 29108, "213.16 | #29,108"],
      [177.68, 24454, "177.68 | #24,454"],
      [171.32, 73926, "171.32 | #73,926"],
      [236.64, 51896, "236.64 | #51,896"],
      [261.96, 39444, "261.96 | #39,444"],
      [219.35, 3627, "219.35 | #3,627"],
      [237.44, 371, "237.44 | #371"],
      [339.02, 29387, "339.02 | #29,387"],
      [349.97, 21745, "349.97 | #21,745"],
      [291.16, 12685, "291.16 | #12,685"],
      [178.88, 23135, "178.88 | #23,135"],
      [291.82, 5923, "291.82 | #5,923"],
      [115.87, 11539, "115.87 | #11,539"],
      [202.53, 9274, "202.53 | #9,274"],
      [636.84, 18069, "636.84 | #18,069"],
      [199.5, 15943, "199.5 | #15,943"],
      [196.05, 92508, "196.05 | #92,508"],
      [206.25, 5520, "206.25 | #5,520"],
      [195.99, 2725, "195.99 | #2,725"],
      [205.4, 23081, "205.4 | #23,081"],
      [262.07, 13451, "262.07 | #13,451"],
      [231.32, 10285, "231.32 | #10,285"],
      [263.2, 35740, "263.2 | #35,740"],
      [167.79, 7539, "167.79 | #7,539"],
      [178.09, 2636, "178.09 | #2,636"],
      [279.64, 7056, "279.64 | #7,056"],
      [199.97, 39172, "199.97 | #39,172"],
      [301.84, 33937, "301.84 | #33,937"],
      [218.68, 6234, "218.68 | #6,234"],
      [186.26, 28755, "186.26 | #28,755"],
      [227.47, 9426, "227.47 | #9,426"],
      [226.07, 45282, "226.07 | #45,282"],
    ],
    true
  );

  const options = {
    title: "3 ~ 5자리",
    width: "100%",
    chartArea: {
      left: "10%",
      right: "2%",
      top: "5%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    trendlines: {
      0: {
        color: "green",
      },
    },
    vAxis: { direction: -1 },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("rankingHitsPerPlayUnderSixDigitScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawRankingHitsPerPlayUnderSixDigitScatterChart,
    false
  );
}

function drawDevicePieChart() {
  const data = google.visualization.arrayToDataTable([
    ["플레이 장비", "인원수"],
    ["키보드 + 타블렛", 97],
    ["키보드 + 마우스", 31],
    ["기타", 3],
  ]);

  const options = {
    title: "플레이 장비",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("devicePieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawDevicePieChart, false);
}

function drawTabletPlaystylePieChart() {
  const data = google.visualization.arrayToDataTable([
    ["플레이스타일", "인원수"],
    ["드래깅", 83],
    ["호버링", 11],
    ["콕콕이", 1],
    ["혼합", 4],
  ]);

  const options = {
    title: "타블렛 플레이스타일",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("tabletPlaystylePieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTabletPlaystylePieChart, false);
}

function drawMousePlaystylePieChart() {
  const data = google.visualization.arrayToDataTable([
    ["플레이스타일", "인원수"],
    ["팜 그립", 4],
    ["팜클로 그립", 3],
    ["클로 그립", 14],
    ["핑거팁 그립", 12],
    ["기타", 1],
  ]);

  const options = {
    title: "마우스 플레이스타일",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("mousePlaystylePieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMousePlaystylePieChart, false);
}

function drawRankingDeviceColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["자릿수", "타블렛", "마우스", { type: "string", role: "annotation" }],
    ["3자리", 6, 0, ""],
    ["4자리 초반", 10, 2, "5 : 1"],
    ["4자리 중반", 6, 1, "6 : 1"],
    ["4자리 후반", 11, 3, "3.67 : 1"],
    ["5자리 초반", 33, 10, "3.3 : 1"],
    ["5자리 중반", 9, 6, "1.5 : 1"],
    ["5자리 후반", 6, 4, "1.5 : 1"],
    ["6자리 초반", 18, 5, "3.6 : 1"],
    ["6자리 중반", 0, 3, ""],
  ]);

  const options = {
    title: "랭킹대 / 플레이 장비",
    width: "100%",
    isStacked: true,
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("rankingDeviceColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawRankingDeviceColumnChart, false);
}

function drawHandedPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["손", "인원수"],
    ["왼손", 6],
    ["오른손", 125],
  ]);

  const options = {
    title: "타블렛 / 마우스를 쥐는 손",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("handedPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHandedPieChart, false);
}

function drawSpinDirectionPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["방향", "인원수"],
    ["시계 방향", 65],
    ["반시계 방향", 62],
    ["때에 따라 다름", 4],
  ]);

  const options = {
    title: "스피너 돌리는 방향",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("spinDirectionPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawSpinDirectionPieChart, false);
}

function drawTabletSpinDirectionPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["방향", "인원수"],
    ["시계 방향", 48],
    ["반시계 방향", 48],
    ["때에 따라 다름", 3],
  ]);

  const options = {
    title: "타블렛 스핀 방향",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("tabletSpinDirectionPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTabletSpinDirectionPieChart, false);
}

function drawMouseSpinDirectionPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["방향", "인원수"],
    ["시계 방향", 18],
    ["반시계 방향", 15],
    ["때에 따라 다름", 1],
  ]);

  const options = {
    title: "마우스 스핀 방향",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("mouseSpinDirectionPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMouseSpinDirectionPieChart, false);
}

function drawTabletBrandPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["브랜드", "개수"],
    ["Wacom", 95],
    ["XPPen", 5],
    ["Huion", 2],
    ["Gaomon", 2],
  ]);

  const options = {
    title: "타블렛 브랜드",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("tabletBrandPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTabletBrandPieChart, false);
}

function drawTabletModelPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["기종", "개수"],
    ["Wacom CTL-472", 53],
    ["Wacom CTL-480", 15],
    ["Wacom CTH-480", 11],
    ["Wacom CTL-490", 2],
    ["Wacom CTL-672", 3],
    ["Wacom CTH-680", 2],
    ["Wacom CTL-4100", 2],
    ["XPPen Star G640", 2],
    ["XPPen Star G640S", 2],
    ["Gaomon S620", 2],
    ["기타", 10],
  ]);

  const options = {
    title: "타블렛 기종",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("tabletModelPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTabletModelPieChart, false);
}

function drawTabletDriverPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["드라이버", "인원수"],
    ["제조사의 기본 타블렛 드라이버", 10],
    ["OpenTabletDriver", 68],
    ["hawku", 12],
    ["Devocub", 8],
    ["osu!lazer", 1],
  ]);

  const options = {
    title: "타블렛 드라이버",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("tabletDriverPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTabletDriverPieChart, false);
}

function drawTabletAreaScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "가로");
  data.addColumn("number", "세로");
  data.addColumn({ type: "string", role: "style" });
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [
      38.08146,
      21.420822,
      "color: #20df20",
      "가로: 38.08146, 세로: 21.420822, 넓이: 815.74, 비율: 1.7778",
    ],
    [
      42,
      23.625,
      "color: #20df20",
      "가로: 42, 세로: 23.625, 넓이: 992.25, 비율: 1.7778 (2명)",
    ],
    [
      83,
      46.6875,
      "color: #20df20",
      "가로: 83, 세로: 46.6875, 넓이: 3875.06, 비율: 1.7778",
    ],
    [
      60,
      33.75,
      "color: #20df20",
      "가로: 60, 세로: 33.75, 넓이: 2025, 비율: 1.7778 (3명)",
    ],
    [
      115,
      64.68,
      "color: #20df20",
      "가로: 115, 세로: 64.68, 넓이: 7438.2, 비율: 1.7778",
    ],
    [70, 45, "color: #8cdf20", "가로: 70, 세로: 45, 넓이: 3150, 비율: 1.5556"],
    [96, 54, "color: #20df20", "가로: 96, 세로: 54, 넓이: 5184, 비율: 1.7778"],
    [
      67,
      39.8027,
      "color: #50df20",
      "가로: 67, 세로: 39.8027, 넓이: 2666.78, 비율: 1.6833",
    ],
    [
      72,
      40.5,
      "color: #20df20",
      "가로: 72, 세로: 40.5, 넓이: 2916, 비율: 1.7778",
    ],
    [68, 42, "color: #6cdf20", "가로: 68, 세로: 42, 넓이: 2856, 비율: 1.619"],
    [
      75,
      42.1875,
      "color: #20df20",
      "가로: 75, 세로: 42.1875, 넓이: 3164.06, 비율: 1.7778",
    ],
    [
      78,
      43.875,
      "color: #20df20",
      "가로: 78, 세로: 43.875, 넓이: 3422.25, 비율: 1.7778",
    ],
    [63, 43, "color: #b9df20", "가로: 63, 세로: 43, 넓이: 2709, 비율: 1.4651"],
    [
      47.47,
      27.27,
      "color: #33df20",
      "가로: 47.47, 세로: 27.27, 넓이: 1294.51, 비율: 1.7407",
    ],
    [
      81.28,
      45.72,
      "color: #20df20",
      "가로: 81.28, 세로: 45.72, 넓이: 3716.12, 비율: 1.7778",
    ],
    [
      35,
      19.69,
      "color: #20df20",
      "가로: 35, 세로: 19.69, 넓이: 689.15, 비율: 1.7778",
    ],
    [
      47.5,
      26.72,
      "color: #20df20",
      "가로: 47.5, 세로: 26.72, 넓이: 1269.2, 비율: 1.7778",
    ],
    [
      67,
      37.6875,
      "color: #20df20",
      "가로: 67, 세로: 37.6875, 넓이: 2525.06, 비율: 1.7778",
    ],
    [82, 51, "color: #73df20", "가로: 82, 세로: 51, 넓이: 4182, 비율: 1.6078"],
    [
      59,
      43.5,
      "color: #dfcf20",
      "가로: 59, 세로: 43.5, 넓이: 2566.5, 비율: 1.3563",
    ],
    [
      81.375,
      58.333333,
      "color: #dcdf20",
      "가로: 81.375, 세로: 58.333333, 넓이: 4746.87, 비율: 1.395",
    ],
    [
      60,
      40,
      "color: #a9df20",
      "가로: 60, 세로: 40, 넓이: 2400, 비율: 1.5 (2명)",
    ],
    [
      47.4908,
      26.713573,
      "color: #20df20",
      "가로: 47.4908, 세로: 26.713573, 넓이: 1268.65, 비율: 1.7778",
    ],
    [
      160,
      90,
      "color: #20df20",
      "가로: 160, 세로: 90, 넓이: 14400, 비율: 1.7778",
    ],
    [39, 37, "color: #df3920", "가로: 39, 세로: 37, 넓이: 1443, 비율: 1.0541"],
    [
      50.66,
      37,
      "color: #dfd620",
      "가로: 50.66, 세로: 37, 넓이: 1874.42, 비율: 1.3692",
    ],
    [
      99.59,
      67.4,
      "color: #b3df20",
      "가로: 99.59, 세로: 67.4, 넓이: 6712.37, 비율: 1.4776",
    ],
    [46, 26, "color: #23df20", "가로: 46, 세로: 26, 넓이: 1196, 비율: 1.7692"],
    [
      120,
      79.1,
      "color: #9fdf20",
      "가로: 120, 세로: 79.1, 넓이: 9492, 비율: 1.5171",
    ],
    [
      65,
      36.5625,
      "color: #20df20",
      "가로: 65, 세로: 36.5625, 넓이: 2376.56, 비율: 1.7778",
    ],
    [50, 35, "color: #ccdf20", "가로: 50, 세로: 35, 넓이: 1750, 비율: 1.4286"],
    [
      152,
      85.5,
      "color: #20df20",
      "가로: 152, 세로: 85.5, 넓이: 12996, 비율: 1.7778 (2명)",
    ],
    [
      73.333333,
      38.333333,
      "color: #20df63",
      "가로: 73.333333, 세로: 38.333333, 넓이: 2811.11, 비율: 1.913",
    ],
    [
      100,
      56.25,
      "color: #20df20",
      "가로: 100, 세로: 56.25, 넓이: 5625, 비율: 1.7778",
    ],
    [
      52,
      34.5,
      "color: #a6df20",
      "가로: 52, 세로: 34.5, 넓이: 1794, 비율: 1.5072",
    ],
    [
      66.14,
      46.29,
      "color: #ccdf20",
      "가로: 66.14, 세로: 46.29, 넓이: 3061.62, 비율: 1.4288",
    ],
    [75, 45, "color: #56df20", "가로: 75, 세로: 45, 넓이: 3375, 비율: 1.6667"],
    [35, 33, "color: #df3d20", "가로: 35, 세로: 33, 넓이: 1155, 비율: 1.0606"],
    [
      102,
      57,
      "color: #20df26",
      "가로: 102, 세로: 57, 넓이: 5814, 비율: 1.7895",
    ],
    [
      62.847,
      42.85,
      "color: #b9df20",
      "가로: 62.847, 세로: 42.85, 넓이: 2692.99, 비율: 1.4667",
    ],
    [
      71.111115,
      40,
      "color: #20df20",
      "가로: 71.111115, 세로: 40, 넓이: 2844.44, 비율: 1.7778",
    ],
    [
      86.2,
      66.4,
      "color: #dfb320",
      "가로: 86.2, 세로: 66.4, 넓이: 5723.68, 비율: 1.2982",
    ],
    [
      68,
      38.25,
      "color: #20df20",
      "가로: 68, 세로: 38.25, 넓이: 2601, 비율: 1.7778 (2명)",
    ],
    [
      81,
      42.73,
      "color: #20df59",
      "가로: 81, 세로: 42.73, 넓이: 3461.13, 비율: 1.8956",
    ],
    [
      50,
      28.125,
      "color: #20df20",
      "가로: 50, 세로: 28.125, 넓이: 1406.25, 비율: 1.7778",
    ],
    [
      58,
      45.4,
      "color: #dfa920",
      "가로: 58, 세로: 45.4, 넓이: 2633.2, 비율: 1.2775",
    ],
    [
      67,
      47.856,
      "color: #d9df20",
      "가로: 67, 세로: 47.856, 넓이: 3206.35, 비율: 1.4",
    ],
    [64, 42, "color: #9cdf20", "가로: 64, 세로: 42, 넓이: 2688, 비율: 1.5238"],
    [
      36.19,
      25.09,
      "color: #c6df20",
      "가로: 36.19, 세로: 25.09, 넓이: 908.01, 비율: 1.4424",
    ],
    [
      46,
      25.875,
      "color: #20df20",
      "가로: 46, 세로: 25.875, 넓이: 1190.25, 비율: 1.7778",
    ],
    [
      59.8,
      46,
      "color: #dfb320",
      "가로: 59.8, 세로: 46, 넓이: 2750.8, 비율: 1.3",
    ],
    [
      74.66,
      42,
      "color: #20df20",
      "가로: 74.66, 세로: 42, 넓이: 3135.72, 비율: 1.7776",
    ],
    [
      56.72,
      52.15,
      "color: #df4d20",
      "가로: 56.72, 세로: 52.15, 넓이: 2957.95, 비율: 1.0876",
    ],
    [45, 34, "color: #dfbf20", "가로: 45, 세로: 34, 넓이: 1530, 비율: 1.3235"],
    [
      66.4,
      45.24,
      "color: #b9df20",
      "가로: 66.4, 세로: 45.24, 넓이: 3003.94, 비율: 1.4677 (3명)",
    ],
    [
      78.62,
      51.01,
      "color: #93df20",
      "가로: 78.62, 세로: 51.01, 넓이: 4010.41, 비율: 1.5413",
    ],
    [34, 24, "color: #d2df20", "가로: 34, 세로: 24, 넓이: 816, 비율: 1.4167"],
    [
      42.14,
      27.94,
      "color: #a6df20",
      "가로: 42.14, 세로: 27.94, 넓이: 1177.39, 비율: 1.5082",
    ],
    [
      36.666667,
      35.555556,
      "color: #df3020",
      "가로: 36.666667, 세로: 35.555556, 넓이: 1303.7, 비율: 1.0312",
    ],
    [
      54.6,
      42.8,
      "color: #dfa920",
      "가로: 54.6, 세로: 42.8, 넓이: 2336.88, 비율: 1.2757",
    ],
    [55, 33, "color: #56df20", "가로: 55, 세로: 33, 넓이: 1815, 비율: 1.6667"],
    [64, 43, "color: #afdf20", "가로: 64, 세로: 43, 넓이: 2752, 비율: 1.4884"],
    [
      45,
      25.3125,
      "color: #20df20",
      "가로: 45, 세로: 25.3125, 넓이: 1139.06, 비율: 1.7778",
    ],
    [
      73.9556,
      41.60002,
      "color: #20df20",
      "가로: 73.9556, 세로: 41.60002, 넓이: 3076.55, 비율: 1.7778",
    ],
    [53, 42, "color: #df9f20", "가로: 53, 세로: 42, 넓이: 2226, 비율: 1.2619"],
    [66, 44, "color: #a9df20", "가로: 66, 세로: 44, 넓이: 2904, 비율: 1.5"],
    [
      64.4,
      42,
      "color: #99df20",
      "가로: 64.4, 세로: 42, 넓이: 2704.8, 비율: 1.5333",
    ],
    [
      82.11,
      51.02,
      "color: #73df20",
      "가로: 82.11, 세로: 51.02, 넓이: 4189.25, 비율: 1.6094",
    ],
    [
      40,
      28.24,
      "color: #d2df20",
      "가로: 40, 세로: 28.24, 넓이: 1129.6, 비율: 1.4164",
    ],
    [
      73.78,
      41.5,
      "color: #20df20",
      "가로: 73.78, 세로: 41.5, 넓이: 3061.87, 비율: 1.7778",
    ],
    [33, 24, "color: #dfd920", "가로: 33, 세로: 24, 넓이: 792, 비율: 1.375"],
    [
      38.49,
      31.76,
      "color: #df8920",
      "가로: 38.49, 세로: 31.76, 넓이: 1222.44, 비율: 1.2119",
    ],
    [
      61.8,
      49.85,
      "color: #df9620",
      "가로: 61.8, 세로: 49.85, 넓이: 3080.73, 비율: 1.2397",
    ],
    [
      66.666667,
      37.5,
      "color: #20df20",
      "가로: 66.666667, 세로: 37.5, 넓이: 2500, 비율: 1.7778",
    ],
    [80, 45, "color: #20df20", "가로: 80, 세로: 45, 넓이: 3600, 비율: 1.7778"],
    [47, 30, "color: #89df20", "가로: 47, 세로: 30, 넓이: 1410, 비율: 1.5667"],
    [
      59.71,
      35.85,
      "color: #56df20",
      "가로: 59.71, 세로: 35.85, 넓이: 2140.6, 비율: 1.6656",
    ],
    [70, 42, "color: #56df20", "가로: 70, 세로: 42, 넓이: 2940, 비율: 1.6667"],
    [78, 49, "color: #7cdf20", "가로: 78, 세로: 49, 넓이: 3822, 비율: 1.5918"],
    [
      65.62,
      43.15,
      "color: #9fdf20",
      "가로: 65.62, 세로: 43.15, 넓이: 2831.5, 비율: 1.5207",
    ],
    [50, 31, "color: #70df20", "가로: 50, 세로: 31, 넓이: 1550, 비율: 1.6129"],
    [
      70,
      39.38,
      "color: #20df20",
      "가로: 70, 세로: 39.38, 넓이: 2756.6, 비율: 1.7778",
    ],
    [
      45,
      25.24887,
      "color: #20df23",
      "가로: 45, 세로: 25.24887, 넓이: 1136.2, 비율: 1.7823",
    ],
    [48, 33, "color: #bfdf20", "가로: 48, 세로: 33, 넓이: 1584, 비율: 1.4545"],
    [
      65,
      45.24,
      "color: #c9df20",
      "가로: 65, 세로: 45.24, 넓이: 2940.6, 비율: 1.4368",
    ],
    [
      115,
      64.6875,
      "color: #20df20",
      "가로: 115, 세로: 64.6875, 넓이: 7439.06, 비율: 1.7778",
    ],
    [
      70,
      43.75,
      "color: #76df20",
      "가로: 70, 세로: 43.75, 넓이: 3062.5, 비율: 1.6",
    ],
    [
      37,
      27.75,
      "color: #dfc220",
      "가로: 37, 세로: 27.75, 넓이: 1026.75, 비율: 1.3333",
    ],
    [
      85.014,
      55.547,
      "color: #99df20",
      "가로: 85.014, 세로: 55.547, 넓이: 4722.27, 비율: 1.5305",
    ],
    [
      216,
      121.5,
      "color: #20df20",
      "가로: 216, 세로: 121.5, 넓이: 26244, 비율: 1.7778",
    ],
    [
      128,
      72,
      "color: #20df20",
      "가로: 128, 세로: 72, 넓이: 9216, 비율: 1.7778",
    ],
  ]);

  const options = {
    title: "타블렛 영역",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    trendlines: {
      0: {
        color: "black",
      },
    },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("tabletAreaScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTabletAreaScatterChart, false);
}

function drawTabletRotationScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "각도");
  data.addColumn("number", "인원수");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [0.3894, 1, "0.3894°"],
    [5.8087, 1, "5.8087°"],
    [-1.2, 1, "-1.2°"],
    [0, 1, "0°"],
    [0, 2, "0°"],
    [0, 3, "0°"],
    [0, 4, "0°"],
    [-8, 1, "-8°"],
    [-1, 1, "-1°"],
    [0, 5, "0°"],
    [0, 6, "0°"],
    [0, 7, "0°"],
    [0, 8, "0°"],
    [-5, 1, "-5°"],
    [0, 9, "0°"],
    [0, 10, "0°"],
    [0, 11, "0°"],
    [0, 12, "0°"],
    [0, 13, "0°"],
    [0, 14, "0°"],
    [-5, 2, "-5°"],
    [0, 15, "0°"],
    [0, 16, "0°"],
    [0, 17, "0°"],
    [0, 18, "0°"],
    [0, 19, "0°"],
    [0, 20, "0°"],
    [-4, 1, "-4°"],
    [0, 21, "0°"],
    [0, 22, "0°"],
    [0, 23, "0°"],
    [0, 24, "0°"],
    [0, 25, "0°"],
    [0, 26, "0°"],
    [0, 27, "0°"],
    [0, 28, "0°"],
    [0, 29, "0°"],
    [0, 30, "0°"],
    [0, 31, "0°"],
    [0, 32, "0°"],
    [0.5, 1, "0.5°"],
    [0, 33, "0°"],
    [0, 34, "0°"],
    [0, 35, "0°"],
    [0, 36, "0°"],
    [-3, 1, "-3°"],
    [0, 37, "0°"],
    [6, 1, "6°"],
    [0, 38, "0°"],
    [0, 39, "0°"],
    [0, 40, "0°"],
    [0, 41, "0°"],
    [0, 42, "0°"],
    [0, 43, "0°"],
    [0, 44, "0°"],
    [0, 45, "0°"],
    [0, 46, "0°"],
    [0, 47, "0°"],
    [0, 48, "0°"],
    [0, 49, "0°"],
    [0, 50, "0°"],
    [0, 51, "0°"],
    [0, 52, "0°"],
    [0, 53, "0°"],
    [0, 54, "0°"],
    [0, 55, "0°"],
    [0, 56, "0°"],
    [0, 57, "0°"],
    [0, 58, "0°"],
    [0, 59, "0°"],
    [0, 60, "0°"],
    [0, 61, "0°"],
    [0, 62, "0°"],
    [0, 63, "0°"],
    [0, 64, "0°"],
    [0, 65, "0°"],
    [0, 66, "0°"],
    [-1, 2, "-1°"],
    [0, 67, "0°"],
    [0, 68, "0°"],
    [0, 69, "0°"],
    [0, 70, "0°"],
    [0, 71, "0°"],
    [0, 72, "0°"],
    [0, 73, "0°"],
    [0, 74, "0°"],
    [0, 75, "0°"],
    [0, 76, "0°"],
    [0, 77, "0°"],
    [0, 78, "0°"],
    [0, 79, "0°"],
    [0, 80, "0°"],
    [0, 81, "0°"],
    [3.5, 1, "3.5°"],
    [-3.4, 1, "-3.4°"],
    [0, 82, "0°"],
    [0, 83, "0°"],
  ]);

  const options = {
    title: "타블렛 영역 각도",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    hAxis: {
      ticks: [-8, -6, -4, -2, 0, 2, 4, 6, 8],
    },
    vAxis: {
      baseline: 1,
      ticks: [1, 10, 20, 30, 40, 50, 60, 70, 80, 90],
    },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("tabletRotationScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTabletRotationScatterChart, false);
}

function drawTabletFilterPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["필터 사용 유무", "인원수"],
    ["사용", 35],
    ["미사용", 54],
  ]);

  const options = {
    title: "타블렛 필터 사용 유무 (제조사 드라이버 제외)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("tabletFilterPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTabletFilterPieChart, false);
}

function drawTabletWhichFilterBarChart() {
  const data = google.visualization.arrayToDataTable([
    ["필터", "인원수"],
    ["Devocub Antichatter", 29],
    ["Hawku Smoothing Filter", 12],
    ["Hawku Noise Reduction", 1],
    ["Kuuube's CHATTER EXTERMINATOR RAW", 1],
  ]);

  const options = {
    title: "사용하는 필터",
    width: "100%",
    chartArea: {
      left: "20%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.BarChart(
    document.getElementById("tabletWhichFilterBarChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTabletWhichFilterBarChart, false);
}

function drawDevocubAntichatterLatencyScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "Latency");
  data.addColumn("number", "인원수");
  data.addColumn({ type: "string", role: "style" });
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [
      0,
      1,
      "color: #00dfdf",
      "Latency: 0, AC Strength: 0, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: O,\nPD Strength: 1.1, PD Sharpness: 1, PD Offset X: 3, PD Offset Y: 0.3, Frequency: 1000",
    ],
    [
      0,
      2,
      "color: #3366cc",
      "Latency: 0, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 500",
    ],
    [
      0,
      3,
      "color: #bf00ff",
      "Latency: 0, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      0.8875,
      1,
      "color: #3366cc",
      "Latency: 0.8875, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      1,
      1,
      "color: #3366cc",
      "Latency: 1, AC Strength: 1, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      1,
      2,
      "color: #3366cc",
      "Latency: 1, AC Strength: 5, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      2,
      1,
      "color: #3366cc",
      "Latency: 2, AC Strength: 1, AC Multiplier: 0, AC Offset X: 1, AC Offset Y: 1, Prediction: X, Frequency: 500",
    ],
    [
      2,
      2,
      "color: #3366cc",
      "Latency: 2, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      2,
      3,
      "color: #3366cc",
      "Latency: 2, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      2,
      4,
      "color: #3366cc",
      "Latency: 2, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      2,
      5,
      "color: #3366cc",
      "Latency: 2, AC Strength: 15, AC Multiplier: 10, AC Offset X: 0.7, AC Offset Y: 0.6, Prediction: X, Frequency: 1000",
    ],
    [
      3,
      1,
      "color: #3366cc",
      "Latency: 3, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      3,
      2,
      "color: #3366cc",
      "Latency: 3, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      3,
      3,
      "color: #3366cc",
      "Latency: 3, AC Strength: 5, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      3,
      4,
      "color: #3366cc",
      "Latency: 3, AC Strength: 5, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      3,
      5,
      "color: #bf00ff",
      "Latency: 3, AC Strength: 5, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      5,
      1,
      "color: #3366cc",
      "Latency: 5, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      5,
      2,
      "color: #3366cc",
      "Latency: 5, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      5,
      3,
      "color: #3366cc",
      "Latency: 5, AC Strength: 5, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      5,
      4,
      "color: #3366cc",
      "Latency: 5, AC Strength: 5, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: O,\nPD Strength: 0, PD Sharpness: 0, PD Offset X: 0, PD Offset Y: 0, Frequency: 1000",
    ],
    [
      10,
      1,
      "color: #3366cc",
      "Latency: 10, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 250",
    ],
    [
      10,
      2,
      "color: #3366cc",
      "Latency: 10, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      10,
      3,
      "color: #3366cc",
      "Latency: 10, AC Strength: 5, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      12,
      1,
      "color: #3366cc",
      "Latency: 12, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      15,
      1,
      "color: #dc3912",
      "Latency: 15, AC Strength: 3, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      15,
      2,
      "color: #3366cc",
      "Latency: 15, AC Strength: 5, AC Multiplier: 1, AC Offset X: 0, AC Offset Y: 1, Prediction: X, Frequency: 1000",
    ],
    [
      15,
      3,
      "color: #3366cc",
      "Latency: 15, AC Strength: 30, AC Multiplier: 20, AC Offset X: 0.7, AC Offset Y: 0.6, Prediction: X, Frequency: 1000",
    ],
    [
      15,
      4,
      "color: #3366cc",
      "Latency: 15, AC Strength: 10, AC Multiplier: 30, AC Offset X: 0.7, AC Offset Y: 1, Prediction: O,\nPD Strength: 0.4, PD Sharpness: 0.8, PD Offset X: 2, PD Offset Y: 0.5, Frequency: 1000",
    ],
    [
      20,
      1,
      "color: #dc3912",
      "Latency: 20, AC Strength: 20, AC Multiplier: 10, AC Offset X: 0, AC Offset Y: 1, Prediction: O,\nPD Strength: 1.1, PD Sharpness: 1, PD Offset X: 0.5, PD Offset Y: 0.3, Frequency: 1000",
    ],
  ]);

  const options = {
    title: "Devocub Antichatter",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    vAxis: {
      baseline: 1,
      ticks: [1, 2, 3, 4, 5, 6],
    },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("devocubAntichatterLatencyScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawDevocubAntichatterLatencyScatterChart,
    false
  );
}

function drawHawkuSmoothingFilterScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "Latency");
  data.addColumn("number", "인원수");
  data.addColumn({ type: "string", role: "style" });
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [0, 1, "color: #3366cc", "Latency: 0, Frequency: 1000"],
    [0, 2, "color: #00dfdf", "Latency: 0, Frequency: 1000"],
    [1, 1, "color: #3366cc", "Latency: 1, Frequency: 1000"],
    [5, 1, "color: #3366cc", "Latency: 5, Frequency: 1000"],
    [12, 1, "color: #3366cc", "Latency: 12, Frequency: 1000"],
    [15, 1, "color: #3366cc", "Latency: 15, Frequency: 333"],
    [15, 2, "color: #3366cc", "Latency: 15, Frequency: 1000"],
    [15, 3, "color: #dc3912", "Latency: 15, Frequency: 1000"],
    [15, 4, "color: #3366cc", "Latency: 15, Frequency: 1000"],
    [18, 1, "color: #3366cc", "Latency: 18, Frequency: 200"],
    [20, 1, "color: #109618", "Latency: 20, Frequency: 250"],
    [20, 2, "color: #3366cc", "Latency: 20, Frequency: 1000"],
  ]);

  const options = {
    title: "Hawku Smoothing Filter",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    vAxis: {
      baseline: 1,
      ticks: [1, 2, 3, 4, 5],
    },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("hawkuSmoothingFilterScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawHawkuSmoothingFilterScatterChart,
    false
  );
}

function drawTabletCoverPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["커버 사용 유무", "인원수"],
    ["사용", 41],
    ["미사용", 58],
  ]);

  const options = {
    title: "타블렛 커버 사용 유무",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("tabletCoverPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTabletCoverPieChart, false);
}

function drawTabletWhichCoverPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["커버", "인원수"],
    ["팝스킨", 25],
    ["마우스패드", 3],
    ["Foxbox 타블렛 커버", 2],
    ["보호필름", 2],
    ["강화유리 필름", 2],
    ["종이질감 필름", 2],
    ["종이", 2],
    ["기타", 4],
  ]);

  const options = {
    title: "사용하는 커버",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("tabletWhichCoverPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTabletWhichCoverPieChart, false);
}

function drawMouseBrandPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["브랜드", "개수"],
    ["로지텍", 19],
    ["Razer", 5],
    ["ROCCAT", 3],
    ["Pulsar", 2],
    ["LAMZU", 2],
    ["기타", 8],
  ]);

  const options = {
    title: "마우스 브랜드",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("mouseBrandPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMouseBrandPieChart, false);
}

function drawMouseModelPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["기종", "개수"],
    ["로지텍 G102", 7],
    ["로지텍 G PRO X SUPERLIGHT", 3],
    ["Razer Viper Mini", 3],
    ["로지텍 G304", 2],
    ["ROCCAT KONE PURE", 2],
    ["기타", 22],
  ]);

  const options = {
    title: "마우스 기종",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("mouseModelPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMouseModelPieChart, false);
}

function drawMouseDPIScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "DPI");
  data.addColumn("number", "인원수");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [1200, 1, "1200DPI"],
    [1600, 1, "1600DPI"],
    [900, 1, "900DPI"],
    [800, 1, "800DPI"],
    [800, 2, "800DPI"],
    [800, 3, "800DPI"],
    [3000, 1, "3000DPI"],
    [800, 4, "800DPI"],
    [1200, 2, "1200DPI"],
    [1200, 3, "1200DPI"],
    [1600, 2, "1600DPI"],
    [800, 5, "800DPI"],
    [1200, 4, "1200DPI"],
    [750, 1, "750DPI"],
    [1400, 1, "1400DPI"],
    [800, 6, "800DPI"],
    [1400, 2, "1400DPI"],
    [800, 7, "800DPI"],
    [800, 8, "800DPI"],
    [1000, 1, "1000DPI"],
    [1350, 1, "1350DPI"],
    [1000, 2, "1000DPI"],
    [1000, 3, "1000DPI"],
    [1200, 5, "1200DPI"],
    [1000, 4, "1000DPI"],
    [2400, 1, "2400DPI"],
    [3200, 1, "3200DPI"],
    [800, 9, "800DPI"],
    [1200, 6, "1200DPI"],
    [1600, 3, "1600DPI"],
    [400, 1, "400DPI"],
    [1200, 7, "1200DPI"],
    [1500, 1, "1500DPI"],
    [880, 1, "880DPI"],
  ]);

  const options = {
    title: "마우스 DPI",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    vAxis: {
      baseline: 1,
      ticks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("mouseDPIScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMouseDPIScatterChart, false);
}

function drawMouseEDPIScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "DPI");
  data.addColumn("number", "인원수");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [1152, 1, "1152eDPI"],
    [1140, 1, "1140eDPI"],
    [900, 1, "900eDPI"],
    [800, 1, "800eDPI"],
    [800, 2, "800eDPI"],
    [880, 1, "880eDPI"],
    [3600, 1, "3600eDPI"],
    [800, 3, "800eDPI"],
    [1200, 1, "1200eDPI"],
    [768, 1, "768eDPI"],
    [3475, 1, "3475eDPI"],
    [800, 4, "800eDPI"],
    [1200, 2, "1200eDPI"],
    [750, 1, "750eDPI"],
    [1400, 1, "1400eDPI"],
    [880, 2, "880eDPI"],
    [560, 1, "560eDPI"],
    [1400, 2, "1400eDPI"],
    [1016, 1, "1016eDPI"],
    [6000, 1, "6000eDPI"],
    [1350, 1, "1350eDPI"],
    [1020, 1, "1020eDPI"],
    [1060, 1, "1060eDPI"],
    [1440, 1, "1440eDPI"],
    [1000, 1, "1000eDPI"],
    [1800, 1, "1800eDPI"],
    [5491, 1, "5491eDPI"],
    [800, 5, "800eDPI"],
    [1560, 1, "1560eDPI"],
    [780, 1, "780eDPI"],
    [400, 1, "400eDPI"],
    [480, 1, "480eDPI"],
    [1380, 1, "1380eDPI"],
    [1091, 1, "1091eDPI"],
  ]);

  const options = {
    title: "마우스 eDPI",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    vAxis: {
      baseline: 1,
      ticks: [1, 2, 3, 4, 5, 6],
    },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("mouseEDPIScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMouseEDPIScatterChart, false);
}

function drawMousePadBrandPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["브랜드", "개수"],
    ["X-raypad", 5],
    ["ARTISAN", 4],
    ["스틸시리즈", 4],
    ["Pulsar", 3],
    ["CORSAIR", 2],
    ["기타", 9],
    ["모름", 10],
  ]);

  const options = {
    title: "마우스패드 브랜드",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("mousePadBrandPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMousePadBrandPieChart, false);
}

function drawMousePadModelPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["기종", "개수"],
    ["X-raypad 아쿠아컨트롤2 사쿠라 에디션", 3],
    ["X-raypad Aqua Control+", 2],
    ["스틸시리즈 Qck+", 2],
    ["펄사 PARA 컨트롤", 2],
    ["기타", 18],
    ["모름", 10],
  ]);

  const options = {
    title: "마우스패드 기종",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("mousePadModelPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMousePadModelPieChart, false);
}

function drawHowManyKeyboardsPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["대수", "인원수"],
    ["1대", 105],
    ["2대", 19],
    ["3대", 4],
    ["4대", 3],
  ]);

  const options = {
    title: "사용하는 키보드 대수",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("howManyKeyboardsPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHowManyKeyboardsPieChart, false);
}

function drawKeyboardSwitchPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["스위치", "개수"],
    ["자석축", 100],
    ["클릭", 1],
    ["택타일", 4],
    ["리니어", 43],
    ["무접점 (광축)", 7],
    ["무접점 (정전용량)", 1],
    ["멤브레인", 3],
    ["터치패드", 1],
    ["모름", 9],
  ]);

  const options = {
    title: "키보드 스위치 분류",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("keyboardSwitchPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawKeyboardSwitchPieChart, false);
}

function drawKeyboardWhichSwitchPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["스위치", "개수"],
    ["Lekker L60", 20],
    ["Lekker L45", 19],
    ["DrunkDeer 자석축", 14],
    ["HyperX 적축", 13],
    ["Gateron KS-20 White", 8],
    ["CHERRY 적축", 8],
    ["CHERRY 스피드 은축", 5],
    ["CORSAIR OPX 광적축", 4],
    ["기타", 23],
    ["모름", 55],
  ]);

  const options = {
    title: "키보드 스위치",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("keyboardWhichSwitchPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawKeyboardWhichSwitchPieChart, false);
}

function drawKeyboardBrandPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["브랜드", "개수"],
    ["SayoDevice", 45],
    ["Wooting", 31],
    ["DrunkDeer", 15],
    ["HyperX", 13],
    ["CORSAIR", 10],
    ["CHERRY", 6],
    ["메기패드", 5],
    ["COX", 4],
    ["Deck", 3],
    ["앱코", 3],
    ["로지텍", 3],
    ["기타", 28],
    ["모름", 1],
  ]);

  const options = {
    title: "키보드 브랜드",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("keyboardBrandPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawKeyboardBrandPieChart, false);
}

function drawKeyboardModelPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["기종", "개수"],
    ["SayoDevice O3C", 40],
    ["Wooting UwU", 17],
    ["DrunkDeer A75", 11],
    ["Wooting 60HE", 9],
    ["HyperX Alloy Origins", 8],
    ["SayoDevice O3C++", 5],
    ["메기패드", 5],
    ["DrunkDeer G65", 4],
    ["CHERRY MX BOARD 3.0S", 4],
    ["Wooting Two HE", 3],
    ["HyperX Alloy Origins Core", 3],
    ["기타", 48],
    ["모름", 10],
  ]);

  const options = {
    title: "키보드 기종",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("keyboardModelPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawKeyboardModelPieChart, false);
}

function drawKeyboardPriceRangeColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["가격대", "대수"],
    ["3만 원 미만", 26],
    ["3 ~ 5만 원", 27],
    ["5 ~ 10만 원", 33],
    ["10 ~ 15만 원", 34],
    ["15 ~ 20만 원", 18],
    ["20 ~ 25만 원", 6],
    ["25 ~ 30만 원", 2],
    ["30만 원 이상", 13],
  ]);

  const options = {
    title: "키보드 가격대",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("keyboardPriceRangeColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawKeyboardPriceRangeColumnChart, false);
}

function drawKeyboardTotalPriceColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["가격대", "인원수"],
    ["3만 원 미만", 22],
    ["3 ~ 5만 원", 18],
    ["5 ~ 10만 원", 21],
    ["10 ~ 15만 원", 25],
    ["15 ~ 20만 원", 11],
    ["20 ~ 25만 원", 9],
    ["25 ~ 30만 원", 4],
    ["30만 원 이상", 17],
  ]);

  const options = {
    title: "총 사용 금액",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("keyboardTotalPriceColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawKeyboardTotalPriceColumnChart, false);
}

function drawRapidTriggerPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["여부", "인원수"],
    ["사용", 81],
    ["미사용", 4],
    ["지원하지 않는 키보드", 45],
  ]);

  const options = {
    title: "래피드 트리거 사용 여부",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("rapidTriggerPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawRapidTriggerPieChart, false);
}

function drawRapidTriggerActuationPointScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "입력 지점");
  data.addColumn("number", "인원수");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [0.1, 1, "0.1mm"],
    [0.2, 1, "0.2mm"],
    [0.2, 2, "0.2mm"],
    [0.2, 3, "0.2mm"],
    [0.2, 4, "0.2mm"],
    [0.2, 5, "0.2mm"],
    [0.2, 6, "0.2mm"],
    [0.2, 7, "0.2mm"],
    [0.3, 1, "0.3mm"],
    [0.3, 2, "0.3mm"],
    [0.3, 3, "0.3mm"],
    [0.3, 4, "0.3mm"],
    [0.3, 5, "0.3mm"],
    [0.3, 6, "0.3mm"],
    [0.3, 7, "0.3mm"],
    [0.3, 8, "0.3mm"],
    [0.4, 1, "0.4mm"],
    [0.4, 2, "0.4mm"],
    [0.4, 3, "0.4mm"],
    [0.4, 4, "0.4mm"],
    [0.4, 5, "0.4mm"],
    [0.4, 6, "0.4mm"],
    [0.4, 7, "0.4mm"],
    [0.4, 8, "0.4mm"],
    [0.4, 9, "0.4mm"],
    [0.4, 10, "0.4mm"],
    [0.5, 1, "0.5mm"],
    [0.5, 2, "0.5mm"],
    [0.5, 3, "0.5mm"],
    [0.5, 4, "0.5mm"],
    [0.5, 5, "0.5mm"],
    [0.5, 6, "0.5mm"],
    [0.6, 1, "0.6mm"],
    [0.6, 2, "0.6mm"],
    [0.6, 3, "0.6mm"],
    [0.6, 4, "0.6mm"],
    [0.7, 1, "0.7mm"],
    [0.7, 2, "0.7mm"],
    [0.8, 1, "0.8mm"],
    [1, 1, "1mm"],
    [1, 2, "1mm"],
    [0.1, 2, "0.1mm"],
    [0.3, 9, "0.3mm"],
    [0.3, 10, "0.3mm"],
    [0.3, 11, "0.3mm"],
    [0.3, 12, "0.3mm"],
    [0.3, 13, "0.3mm"],
    [0.3, 14, "0.3mm"],
    [0.3, 15, "0.3mm"],
    [0.3, 16, "0.3mm"],
    [0.3, 17, "0.3mm"],
    [0.3, 18, "0.3mm"],
    [0.3, 19, "0.3mm"],
    [0.3, 20, "0.3mm"],
    [0.3, 21, "0.3mm"],
    [0.3, 22, "0.3mm"],
    [0.3, 23, "0.3mm"],
    [0.3, 24, "0.3mm"],
    [0.4, 11, "0.4mm"],
    [0.4, 12, "0.4mm"],
    [0.4, 13, "0.4mm"],
    [1.2, 1, "1.2mm"],
    [3, 1, "3mm"],
  ]);

  const options = {
    title: "입력 지점",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    vAxis: {
      baseline: 1,
      ticks: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25],
    },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("rapidTriggerActuationPointScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawRapidTriggerActuationPointScatterChart,
    false
  );
}

function drawRapidTriggerCandlestickChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("string", "");
  data.addColumn("number", "Press");
  data.addColumn("number", "Press");
  data.addColumn("number", "Release");
  data.addColumn("number", "Release");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows(
    [
      [
        "",
        0.2,
        0.2,
        0.55,
        0.55,
        "입력 지점: 0.1mm, Press: 0.2mm, Release: 0.55mm",
      ],
      [
        "",
        0.15,
        0.15,
        0.2,
        0.2,
        "입력 지점: 0.2mm, Press: 0.15mm, Release: 0.2mm",
      ],
      [
        "",
        0.15,
        0.15,
        0.5,
        0.5,
        "입력 지점: 0.2mm, Press: 0.15mm, Release: 0.5mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.2,
        0.2,
        "입력 지점: 0.2mm, Press: 0.2mm, Release: 0.2mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.2,
        0.2,
        "입력 지점: 0.2mm, Press: 0.2mm, Release: 0.2mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.2,
        0.2,
        "입력 지점: 0.2mm, Press: 0.2mm, Release: 0.2mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.2,
        0.2,
        "입력 지점: 0.2mm, Press: 0.2mm, Release: 0.2mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "입력 지점: 0.2mm, Press: 0.2mm, Release: 0.4mm",
      ],
      [
        "",
        0.15,
        0.15,
        0.15,
        0.15,
        "입력 지점: 0.3mm, Press: 0.15mm, Release: 0.15mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.2,
        0.2,
        "입력 지점: 0.3mm, Press: 0.2mm, Release: 0.2mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.2,
        0.2,
        "입력 지점: 0.3mm, Press: 0.2mm, Release: 0.2mm",
      ],
      [
        "",
        0.3,
        0.3,
        0.3,
        0.3,
        "입력 지점: 0.3mm, Press: 0.3mm, Release: 0.3mm",
      ],
      [
        "",
        0.3,
        0.3,
        0.3,
        0.3,
        "입력 지점: 0.3mm, Press: 0.3mm, Release: 0.3mm",
      ],
      [
        "",
        0.3,
        0.3,
        0.3,
        0.3,
        "입력 지점: 0.3mm, Press: 0.3mm, Release: 0.3mm",
      ],
      [
        "",
        0.35,
        0.35,
        0.2,
        0.2,
        "입력 지점: 0.3mm, Press: 0.35mm, Release: 0.2mm",
      ],
      [
        "",
        0.4,
        0.4,
        0.4,
        0.4,
        "입력 지점: 0.3mm, Press: 0.4mm, Release: 0.4mm",
      ],
      [
        "",
        0.15,
        0.15,
        0.2,
        0.2,
        "입력 지점: 0.4mm, Press: 0.15mm, Release: 0.2mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.2,
        0.2,
        "입력 지점: 0.4mm, Press: 0.2mm, Release: 0.2mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.3,
        0.3,
        "입력 지점: 0.4mm, Press: 0.2mm, Release: 0.3mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.55,
        0.55,
        "입력 지점: 0.4mm, Press: 0.2mm, Release: 0.55mm",
      ],
      [
        "",
        0.3,
        0.3,
        0.3,
        0.3,
        "입력 지점: 0.4mm, Press: 0.3mm, Release: 0.3mm",
      ],
      [
        "",
        0.3,
        0.3,
        0.3,
        0.3,
        "입력 지점: 0.4mm, Press: 0.3mm, Release: 0.3mm",
      ],
      [
        "",
        0.3,
        0.3,
        0.4,
        0.4,
        "입력 지점: 0.4mm, Press: 0.3mm, Release: 0.4mm",
      ],
      [
        "",
        0.4,
        0.4,
        0.4,
        0.4,
        "입력 지점: 0.4mm, Press: 0.4mm, Release: 0.4mm",
      ],
      [
        "",
        0.4,
        0.4,
        0.4,
        0.4,
        "입력 지점: 0.4mm, Press: 0.4mm, Release: 0.4mm",
      ],
      [
        "",
        0.4,
        0.4,
        0.4,
        0.4,
        "입력 지점: 0.4mm, Press: 0.4mm, Release: 0.4mm",
      ],
      [
        "",
        0.15,
        0.15,
        0.15,
        0.15,
        "입력 지점: 0.5mm, Press: 0.15mm, Release: 0.15mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.2,
        0.2,
        "입력 지점: 0.5mm, Press: 0.2mm, Release: 0.2mm",
      ],
      [
        "",
        0.3,
        0.3,
        0.3,
        0.3,
        "입력 지점: 0.5mm, Press: 0.3mm, Release: 0.3mm",
      ],
      [
        "",
        0.4,
        0.4,
        0.4,
        0.4,
        "입력 지점: 0.5mm, Press: 0.4mm, Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.5,
        0.5,
        0.5,
        "입력 지점: 0.5mm, Press: 0.5mm, Release: 0.5mm",
      ],
      [
        "",
        0.55,
        0.55,
        0.6,
        0.6,
        "입력 지점: 0.5mm, Press: 0.55mm, Release: 0.6mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.2,
        0.2,
        "입력 지점: 0.6mm, Press: 0.2mm, Release: 0.2mm",
      ],
      [
        "",
        0.3,
        0.3,
        0.3,
        0.3,
        "입력 지점: 0.6mm, Press: 0.3mm, Release: 0.3mm",
      ],
      [
        "",
        0.3,
        0.3,
        0.3,
        0.3,
        "입력 지점: 0.6mm, Press: 0.3mm, Release: 0.3mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.55,
        0.55,
        "입력 지점: 0.7mm, Press: 0.2mm, Release: 0.55mm",
      ],
      [
        "",
        0.5,
        0.5,
        0.5,
        0.5,
        "입력 지점: 0.7mm, Press: 0.5mm, Release: 0.5mm",
      ],
      [
        "",
        0.8,
        0.8,
        0.8,
        0.8,
        "입력 지점: 0.8mm, Press: 0.8mm, Release: 0.8mm",
      ],
      ["", 0.2, 0.2, 0.2, 0.2, "입력 지점: 1mm, Press: 0.2mm, Release: 0.2mm"],
      ["", 1, 1, 1, 1, "입력 지점: 1mm, Press: 1mm, Release: 1mm"],
    ],
    true
  );

  const options = {
    title: "래피드 트리거 설정",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "5%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    bar: { groupWidth: "75%" },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#dc3912" },
      risingColor: { strokeWidth: 0, fill: "#3366cc" },
    },
    vAxis: {
      direction: -1,
      ticks: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2],
    },
  };

  const chart = new google.visualization.CandlestickChart(
    document.getElementById("rapidTriggerCandlestickChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawRapidTriggerCandlestickChart, false);
}

function drawSayoDeviceRTAreaCandlestickChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("string", "");
  data.addColumn("number", "RT Top");
  data.addColumn("number", "Trigger");
  data.addColumn("number", "Release");
  data.addColumn("number", "RT End");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows(
    [
      [
        "",
        0.5,
        0.1,
        0.05,
        3.8,
        "Trigger: 0.1mm, Release: 0.05mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.15,
        0.3,
        0.25,
        3.8,
        "Trigger: 0.3mm, Release: 0.25mm, RT Top: 0.15mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.3mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        0.3,
        0.2,
        3.8,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.3,
        0.4,
        0.3,
        3.7,
        "Trigger: 0.4mm, Release: 0.3mm, RT Top: 0.3mm, RT End: 3.7mm, RT Trigger: 0.4mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.5,
        1.2,
        1,
        3.9,
        "Trigger: 1.2mm, Release: 1mm, RT Top: 0.5mm, RT End: 3.9mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0,
        3.95,
        0.1,
        3.95,
        "Trigger: 3.95mm, Release: 0.1mm, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.1mm, RT Release: 0.1mm",
      ],
      [
        "",
        0,
        3.95,
        0.4,
        3.95,
        "Trigger: 3.95mm, Release: 0.4mm, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.25mm, RT Release: 0.4mm",
      ],
      [
        "",
        0,
        3.95,
        0.8,
        3.95,
        "Trigger: 3.95mm, Release: 8raw, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.25mm, RT Release: 0.4mm",
      ],
      [
        "",
        0,
        3.95,
        0.8,
        3.95,
        "Trigger: 3.95mm, Release: 8raw, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.4mm, RT Release: 0.4mm",
      ],
      [
        "",
        0,
        3.95,
        1,
        3.95,
        "Trigger: 3.95mm, Release: ?, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.4mm, RT Release: 0.35mm",
      ],
      [
        "",
        0,
        3.95,
        1,
        3.95,
        "Trigger: 3.95mm, Release: ?, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.4mm, RT Release: 0.4mm",
      ],
      [
        "",
        0,
        3.95,
        1,
        3.95,
        "Trigger: 3.95mm, Release: ?, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.45mm, RT Release: 0.45mm",
      ],
    ],
    true
  );

  const options = {
    title: "SayoDevice 래피드 트리거 범위",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "5%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    bar: { groupWidth: "75%" },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#dc3912" },
    },
    vAxis: {
      direction: -1,
    },
  };

  const chart = new google.visualization.CandlestickChart(
    document.getElementById("sayoDeviceRTAreaCandlestickChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawSayoDeviceRTAreaCandlestickChart,
    false
  );
}

function drawSayoDeviceRapidTriggerCandlestickChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("string", "");
  data.addColumn("number", "RT Trigger");
  data.addColumn("number", "RT Trigger");
  data.addColumn("number", "RT Release");
  data.addColumn("number", "RT Release");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows(
    [
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.1mm, Release: 0.05mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.3,
        0.3,
        "Trigger: 0.3mm, Release: 0.25mm, RT Top: 0.15mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.3mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 0.3mm, Release: 0.2mm, RT Top: 0.5mm, RT End: 3.8mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.4,
        0.4,
        0.4,
        0.4,
        "Trigger: 0.4mm, Release: 0.3mm, RT Top: 0.3mm, RT End: 3.7mm, RT Trigger: 0.4mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.2,
        0.2,
        0.4,
        0.4,
        "Trigger: 1.2mm, Release: 1mm, RT Top: 0.5mm, RT End: 3.9mm, RT Trigger: 0.2mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.1,
        0.1,
        0.1,
        0.1,
        "Trigger: 3.95mm, Release: 0.1mm, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.1mm, RT Release: 0.1mm",
      ],
      [
        "",
        0.25,
        0.25,
        0.4,
        0.4,
        "Trigger: 3.95mm, Release: 0.4mm, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.25mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.25,
        0.25,
        0.4,
        0.4,
        "Trigger: 3.95mm, Release: 8rawmm, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.25mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.4,
        0.4,
        0.4,
        0.4,
        "Trigger: 3.95mm, Release: 8rawmm, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.4mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.4,
        0.4,
        0.35,
        0.35,
        "Trigger: 3.95mm, Release: ?mm, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.4mm, RT Release: 0.35mm",
      ],
      [
        "",
        0.4,
        0.4,
        0.4,
        0.4,
        "Trigger: 3.95mm, Release: ?mm, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.4mm, RT Release: 0.4mm",
      ],
      [
        "",
        0.45,
        0.45,
        0.45,
        0.45,
        "Trigger: 3.95mm, Release: ?mm, RT Top: 0mm, RT End: 3.95mm, RT Trigger: 0.45mm, RT Release: 0.45mm",
      ],
    ],
    true
  );

  const options = {
    title: "SayoDevice 래피드 트리거 설정",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "5%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    bar: { groupWidth: "75%" },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#dc3912" },
      risingColor: { strokeWidth: 0, fill: "#3366cc" },
    },
    vAxis: {
      direction: -1,
      ticks: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2],
    },
  };

  const chart = new google.visualization.CandlestickChart(
    document.getElementById("sayoDeviceRapidTriggerCandlestickChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawSayoDeviceRapidTriggerCandlestickChart,
    false
  );
}

function drawTappingStylePieChart() {
  const data = google.visualization.arrayToDataTable([
    ["태핑 스타일", "인원수"],
    ["단타", 19],
    ["양타", 28],
    ["잡타", 28],
    ["상황에 따라 단타, 양타 바꿔가며 사용", 54],
    ['기타', 2]
  ]);

  const options = {
    title: "태핑 스타일",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("tappingStylePieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTappingStylePieChart, false);
}

function drawUsedFingerPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["손가락 조합", "인원수"],
    ["검지 + 중지", 95],
    ["검지 + 약지", 31],
    ['기타', 5]
  ]);

  const options = {
    title: "사용하는 손가락",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("usedFingerPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawUsedFingerPieChart, false);
}

function drawIndexMiddleMoreOftenUsedFingerPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["손가락", "인원수"],
    ["검지", 38],
    ["중지", 48],
    ["풀양타", 7],
    ["기타", 4],
  ]);

  const options = {
    title: "더 자주 사용하는 손가락 (검지 + 중지)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("indexMiddleMoreOftenUsedFingerPieChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawIndexMiddleMoreOftenUsedFingerPieChart,
    false
  );
}

function drawIndexRingMoreOftenUsedFingerPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["손가락", "인원수"],
    ["검지", 18],
    ["약지", 10],
    ["풀양타", 3],
    ["기타", 2],
  ]);

  const options = {
    title: "더 자주 사용하는 손가락 (검지 + 약지)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("indexRingMoreOftenUsedFingerPieChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawIndexRingMoreOftenUsedFingerPieChart,
    false
  );
}

function drawIndexMiddleFirstNoteUsedFingerPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["손가락", "인원수"],
    ["검지", 45],
    ["중지", 45],
    ["기타", 7],
  ]);

  const options = {
    title: "첫 노트를 처리하는 손가락 (검지 + 중지)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("indexMiddleFirstNoteUsedFingerPieChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawIndexMiddleFirstNoteUsedFingerPieChart,
    false
  );
}

function drawIndexRingFirstNoteUsedFingerPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["손가락", "인원수"],
    ["검지", 17],
    ["약지", 13],
    ["기타", 3],
  ]);

  const options = {
    title: "첫 노트를 처리하는 손가락 (검지 + 약지)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("indexRingFirstNoteUsedFingerPieChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawIndexRingFirstNoteUsedFingerPieChart,
    false
  );
}

function drawIndexMiddleStartStreamUsedFingerPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["손가락", "인원수"],
    ["검지", 32],
    ["중지", 41],
    ["풀양타 (직전에 누른 손가락과 반대)", 19],
    ["기타", 5],
  ]);

  const options = {
    title: "연타를 시작하는 손가락 (검지 + 중지)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("indexMiddleStartStreamUsedFingerPieChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawIndexMiddleStartStreamUsedFingerPieChart,
    false
  );
}

function drawIndexRingStartStreamUsedFingerPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["손가락", "인원수"],
    ["검지", 15],
    ["약지", 11],
    ["풀양타 (직전에 누른 손가락과 반대)", 4],
    ["기타", 3],
  ]);

  const options = {
    title: "연타를 시작하는 손가락 (검지 + 약지)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("indexRingStartStreamUsedFingerPieChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawIndexRingStartStreamUsedFingerPieChart,
    false
  );
}

function drawKeyboardKeySettingPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["키", "인원수"],
    ["Z + X", 28],
    ["Z + C", 8],
    ["S + D", 6],
    ["X + C", 5],
    ["C + V", 4],
    ["A + S", 4],
    ["G + H", 4],
    ["A + D", 3],
    ["D + G", 3],
    ["F + G", 3],
    ["N + M", 3],
    ["; + '", 3],
    ['기타', 27]
  ]);

  const options = {
    title: "사용하는 키 (키보드)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("keyboardKeySettingPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawKeyboardKeySettingPieChart, false);
}

function drawKeypadKeySettingPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["키", "인원수"],
    ["1번째 키 + 2번째 키", 18],
    ["2번째 키 + 3번째 키", 13],
    ["1번째 키 + 3번째 키", 4],
    ["3번째 키 + 4번째 키", 1],
  ]);

  const options = {
    title: "사용하는 키 (키패드)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("keypadKeySettingPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawKeypadKeySettingPieChart, false);
}

function drawKeyboardSmokeKeySettingPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["키", "인원수"],
    ["C", 30],
    ["V", 12],
    ["X", 4],
    ["B", 4],
    ["M", 4],
    ["D", 4],
    ["S", 3],
    ["J", 3],
    ["Y", 3],
    ["P", 3],
    [",", 3],
    ['기타', 25],
    ['최대한 멀리 / 없음', 2]
  ]);

  const options = {
    title: "스모크 키 (키보드)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("keyboardSmokeKeySettingPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawKeyboardSmokeKeySettingPieChart, false);
}

function drawKeypadSmokeKeySettingPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["키", "인원수"],
    ["3번째 키", 10],
    ["1번째 키", 4],
    ["키보드에 설정", 12],
    ['없음', 9]
  ]);

  const options = {
    title: "스모크 키 (키패드)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("keypadSmokeKeySettingPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawKeypadSmokeKeySettingPieChart, false);
}

function drawHowManyMonitorsPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["대수", "인원수"],
    ["1대", 123],
    ["2대", 7],
    ["3대", 1],
  ]);

  const options = {
    title: "사용하는 모니터 대수",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("howManyMonitorsPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHowManyMonitorsPieChart, false);
}

function drawMonitorBrandPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["브랜드", "인원수"],
    ["LG전자", 22],
    ["삼성전자", 17],
    ["BenQ", 16],
    ["DELL", 13],
    ["한성컴퓨터", 12],
    ["제이씨현", 4],
    ["ASUS", 3],
    ["크로스오버", 3],
    ["HP", 3],
    ["기타", 31],
    ["모름", 7],
  ]);

  const options = {
    title: "모니터 브랜드",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("monitorBrandPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMonitorBrandPieChart, false);
}

function drawMonitorModelPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["기종", "인원수"],
    ["삼성전자 오디세이 G4 G40B S25BG400", 6],
    ["LG전자 울트라기어 24GN600", 5],
    ["DELL S2522HG", 5],
    ["LG전자 울트라기어 27GP750", 3],
    ["BenQ ZOWIE XL2411P", 3],
    ["BenQ ZOWIE XL2411K", 3],
    ["BenQ ZOWIE XL2540K", 2],
    ["삼성전자 오디세이 G3 G30A S24AG300", 2],
    ["DELL 에일리언웨어 AW2521HF", 2],
    ["DELL 에일리언웨어 AW2523HF", 2],
    ["기타", 60],
    ["모름", 40],
  ]);

  const options = {
    title: "모니터 기종",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("monitorModelPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMonitorModelPieChart, false);
}

function drawMonitorPanelPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["패널", "인원수"],
    ["IPS", 48],
    ["TN", 25],
    ["VA", 20],
    ["OLED", 2],
    ["모름", 36],
  ]);

  const options = {
    title: "모니터 패널",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("monitorPanelPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMonitorPanelPieChart, false);
}

function drawMonitorSizeColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["크기", "인원수"],
    ["14인치", 1],
    ["15.6인치", 4],   
    ["21인치", 1],
    ["24인치", 40],
    ["25인치", 24],
    ["27인치", 24],
    ["28인치", 1],
    ["32인치", 7],
    ["34인치", 1],
    ["45인치", 1],
    ["모름", 27],
  ]);

  const options = {
    title: "모니터 크기",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("monitorSizeColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMonitorSizeColumnChart, false);
}

function drawMonitorRefreshRateColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["주사율", "인원수"],
    ["60Hz", 12],
    ["75Hz", 6],
    ["100Hz", 1],
    ["120Hz", 3],
    ["144Hz", 45],
    ["165Hz", 13],
    ["180Hz", 2],
    ["240Hz", 39],
    ["280Hz", 3],
    ["360Hz", 3],
    ["540Hz", 1],
    ["모름", 3],
  ]);

  const options = {
    title: "모니터 주사율",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("monitorRefreshRateColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMonitorRefreshRateColumnChart, false);
}

function drawMonitorResolutionPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["해상도", "인원수"],
    ["1920x1080 (FHD)", 113],
    ["2560x1440 (QHD)", 16],
    ["2560x1080 (WFHD)", 1],
    ["3840x2160 (4K UHD)", 1],
  ]);

  const options = {
    title: "모니터 해상도",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("monitorResolutionPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMonitorResolutionPieChart, false);
}

function drawMonitorIsCurvedPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["커브드 여부", "인원수"],
    ["평면", 122],
    ["커브드", 9],
  ]);

  const options = {
    title: "모니터 커브드 여부",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("monitorIsCurvedPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMonitorIsCurvedPieChart, false);
}

function drawMonitorPriceRangeColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["가격대", "인원수"],
    ["10만 원 미만", 1],
    ["10 ~ 20만 원", 22],
    ["20 ~ 30만 원", 37],
    ["30 ~ 40만 원", 18],
    ["40 ~ 50만 원", 11],
    ["50 ~ 60만 원", 9],
    ["60 ~ 70만 원", 1],
    ["70 ~ 80만 원", 2],
    ["80 ~ 90만 원", 0],
    ["90 ~ 100만 원", 1],
    ["100만 원 이상", 3],
  ]);

  const options = {
    title: "모니터 가격대",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("monitorPriceRangeColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMonitorPriceRangeColumnChart, false);
}

function drawHowManyAudiosPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["개수", "인원수"],
    ["1개", 123],
    ["2개", 8],
  ]);

  const options = {
    title: "사용하는 오디오 장치 개수",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("howManyAudiosPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHowManyAudiosPieChart, false);
}

function drawAudioTypePieChart() {
  const data = google.visualization.arrayToDataTable([
    ["종류", "인원수"],
    ["헤드폰 / 헤드셋", 68],
    ["이어폰", 58],
    ["스피커", 7],
    ["오디오 인터페이스", 3],
    ["USB 사운드 카드", 1],
    ["DAC", 1],
  ]);

  const options = {
    title: "오디오 장치 종류",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("audioTypePieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawAudioTypePieChart, false);
}

function drawAudioBrandPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["브랜드", "인원수"],
    ["Razer", 12],
    ["HyperX", 11],
    ["삼성전자", 11],
    ["APPLE", 10],
    ["앱코", 6],
    ["티앤에스인터내셔널", 6],
    ["Creative", 6],
    ["SONY", 5],
    ["Britz", 5],
    ["기타", 52],
    ["모름", 15],
  ]);

  const options = {
    title: "오디오 장치 브랜드",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("audioBrandPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawAudioBrandPieChart, false);
}

function drawAudioModelPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["기종", "인원수"],
    ["APPLE EarPods", 9],
    ["Razer Barracuda X", 4],
    ["삼성전자 AKG EO-IC100", 4],
    ["HyperX Cloud II Wireless", 3],
    ["앱코 HACKER N550 ENC", 3],
    ['Razer Barracuda X Plus', 2],
    ['Razer Kraken V3 X', 2],
    ['HyperX Cloud Flight', 2],
    ['티앤에스인터내셔널 NX-2 PLUS', 2],
    ['Creative PEBBLE V2', 2],
    ['Creative 사운드 블라스터X G1', 2],
    ['SONY INZONE H3', 2],
    ['Britz BR-1600BT', 2],
    ['파이널 E1000', 2],
    ["기타", 66],
    ["모름", 32],
  ]);

  const options = {
    title: "오디오 장치 기종",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("audioModelPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawAudioModelPieChart, false);
}

function drawAudioPriceRangeColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["가격대", "개수"],
    ["3만 원 미만", 26],
    ["3 ~ 5만 원", 22],
    ["5 ~ 10만 원", 21],
    ["10 ~ 15만 원", 15],
    ["15 ~ 20만 원", 17],
    ["20 ~ 25만 원", 6],
    ["25 ~ 30만 원", 2],
    ["30만 원 이상", 2],
  ]);

  const options = {
    title: "오디오 장치 가격대",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("audioPriceRangeColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawAudioPriceRangeColumnChart, false);
}

function drawInGameResolutionPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["여부", "인원수"],
    ["일치", 111],
    ["불일치", 21],
  ]);

  const options = {
    title: "인게임 해상도 일치 여부",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("inGameResolutionPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawInGameResolutionPieChart, false);
}

function drawInGameResolutionColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["해상도", "불일치", "일치"],
    ["800x600 (4:3)", 1, 0],
    ["1024x600 (17:10)", 1, 0],
    ["1024x768 (4:3)", 1, 0],
    ["1360x768 (16:9)", 1, 0],
    ["1600x900 (16:9)", 12, 0],
    ["1760x990 (16:9)", 1, 0],
    ["1768x992 (16:9)", 1, 0],
    ["1920x1080 (16:9)", 2, 97],
    ["1920x1200 (16:10)", 1, 0],
    ["2560x1440 (16:9)", 0, 13],
    ["3840x2160 (16:9)", 0, 1],
  ]);

  const options = {
    title: "인게임 해상도",
    width: "100%",
    isStacked: true,
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    colors: ['#dc3912', '#3366cc']
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("inGameResolutionColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawInGameResolutionColumnChart, false);
}

function drawInGameOptionsColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["설정", "인원수"],
    ["비트맵 정보 원어로 보기", 22],
    ["전체 화면 모드", 113],
    ["Render at native resolution", 71],
    ["움직이는 슬라이더", 61],
    ["배경 동영상", 17],
    ["스토리보드", 19],
    ["셰이더 효과", 6],
    ["소프트닝 필터", 5],
    ["히트사운드 무시", 73],
    ["커서 크기 자동조절", 25],
    ["직접 입력 사용", 50],
    ["osu! 창에 직접 입력 사용", 30],
  ]);

  const options = {
    title: "인게임 설정",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    vAxis: {
      ticks: [0, 20, 40, 60, 80, 100, 120, 131]
    }
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("inGameOptionsColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawInGameOptionsColumnChart, false);
}

function drawSmallerResolutionFullscreenColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["설정", "인원수"],
    ["전체 화면 모드", 1],
    ["Render at native resolution", 1],
    ["둘 다 활성화", 15],
    ["둘 다 비활성화", 4],
  ]);

  const options = {
    title: "화면 설정 (해상도 불일치)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("smallerResolutionFullscreenColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawSmallerResolutionFullscreenColumnChart,
    false
  );
}

function drawTabletRawInputColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["설정", "인원수"],
    ["직접 입력 사용", 24],
    ["osu! 창에 직접 입력 사용", 21],
  ]);

  const options = {
    title: "직접 입력 (타블렛)",
    width: "100%",
    chartArea: {
      left: "10%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    vAxis: {
      ticks: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 99]
    }
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("tabletRawInputColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTabletRawInputColumnChart, false);
}

function drawMouseRawInputColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["설정", "인원수"],
    ["직접 입력 사용", 26],
    ["osu! 창에 직접 입력 사용", 10],
  ]);

  const options = {
    title: "직접 입력 (마우스)",
    width: "100%",
    isStacked: true,
    chartArea: {
      left: "10%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    vAxis: {
      ticks: [0, 5, 10, 15, 20, 25, 30, 34]
    }
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("mouseRawInputColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMouseRawInputColumnChart, false);
}

function drawTabletSensitivityScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "감도");
  data.addColumn("number", "인원수");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [ 1, 1, '1x' ],
    [ 1, 2, '1x' ],
    [ 1, 3, '1x' ],
    [ 1, 4, '1x' ],
    [ 1, 5, '1x' ],
    [ 1, 6, '1x' ],
    [ 1, 7, '1x' ],
    [ 1, 8, '1x' ],
    [ 1, 9, '1x' ],
    [ 1, 10, '1x' ],
    [ 1, 11, '1x' ],
    [ 1, 12, '1x' ],
    [ 1, 13, '1x' ],
    [ 1, 14, '1x' ],
    [ 1, 15, '1x' ],
    [ 1, 16, '1x' ],
    [ 1, 17, '1x' ],
    [ 1, 18, '1x' ],
    [ 1, 19, '1x' ],
    [ 1, 20, '1x' ],
    [ 1, 21, '1x' ],
    [ 1, 22, '1x' ],
    [ 1, 23, '1x' ],
    [ 1, 24, '1x' ],
    [ 1, 25, '1x' ],
    [ 1, 26, '1x' ],
    [ 1, 27, '1x' ],
    [ 1, 28, '1x' ],
    [ 1, 29, '1x' ],
    [ 1, 30, '1x' ],
    [ 1, 31, '1x' ],
    [ 1, 32, '1x' ],
    [ 1, 33, '1x' ],
    [ 1, 34, '1x' ],
    [ 1, 35, '1x' ],
    [ 1, 36, '1x' ],
    [ 1, 37, '1x' ],
    [ 1, 38, '1x' ],
    [ 1, 39, '1x' ],
    [ 1, 40, '1x' ],
    [ 1, 41, '1x' ],
    [ 1, 42, '1x' ],
    [ 1, 43, '1x' ],
    [ 1, 44, '1x' ],
    [ 1, 45, '1x' ],
    [ 1, 46, '1x' ],
    [ 1.08, 1, '1.08x' ],
    [ 1, 47, '1x' ],
    [ 1.05, 1, '1.05x' ],
    [ 1, 48, '1x' ],
    [ 1, 49, '1x' ],
    [ 1, 50, '1x' ],
    [ 1, 51, '1x' ],
    [ 1, 52, '1x' ],
    [ 1, 53, '1x' ],
    [ 1, 54, '1x' ],
    [ 1.13, 1, '1.13x' ],
    [ 1.2, 1, '1.2x' ],
    [ 1, 55, '1x' ],
    [ 1, 56, '1x' ],
    [ 1, 57, '1x' ],
    [ 1, 58, '1x' ],
    [ 1, 59, '1x' ],
    [ 1, 60, '1x' ],
    [ 1, 61, '1x' ],
    [ 1, 62, '1x' ],
    [ 1, 63, '1x' ],
    [ 1, 64, '1x' ],
    [ 1, 65, '1x' ],
    [ 1, 66, '1x' ],
    [ 1, 67, '1x' ],
    [ 1, 68, '1x' ],
    [ 0.75, 1, '0.75x' ],
    [ 1, 69, '1x' ],
    [ 1, 70, '1x' ],
    [ 1, 71, '1x' ],
    [ 1, 72, '1x' ],
    [ 1, 73, '1x' ],
    [ 1, 74, '1x' ],
    [ 1, 75, '1x' ],
    [ 1, 76, '1x' ],
    [ 1, 77, '1x' ],
    [ 1, 78, '1x' ],
    [ 1, 79, '1x' ],
    [ 1, 80, '1x' ],
    [ 1, 81, '1x' ],
    [ 1, 82, '1x' ],
    [ 1, 83, '1x' ],
    [ 1, 84, '1x' ],
    [ 1, 85, '1x' ],
    [ 1, 86, '1x' ],
    [ 1.71, 1, '1.71x' ],
    [ 1, 87, '1x' ],
    [ 1, 88, '1x' ],
    [ 1, 89, '1x' ],
    [ 1, 90, '1x' ],
    [ 1, 91, '1x' ],
    [ 1, 92, '1x' ],
    [ 1, 93, '1x' ]
  ]);

  const options = {
    title: "인게임 감도 (타블렛)",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    vAxis: {
      baseline: 1,
      ticks: [1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
    },
    hAxis: {
      ticks: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8]
    }
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("tabletSensitivityScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTabletSensitivityScatterChart, false);
}

function drawMouseSensitivityScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "감도");
  data.addColumn("number", "인원수");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [ 0.96, 1, '0.96x' ],
    [ 0.95, 1, '0.95x' ],
    [ 1, 1, '1x' ],
    [ 1, 2, '1x' ],
    [ 1, 3, '1x' ],
    [ 1.1, 1, '1.1x' ],
    [ 1.2, 1, '1.2x' ],
    [ 1, 4, '1x' ],
    [ 1, 5, '1x' ],
    [ 0.64, 1, '0.64x' ],
    [ 1.54, 1, '1.54x' ],
    [ 1, 6, '1x' ],
    [ 1, 7, '1x' ],
    [ 1, 8, '1x' ],
    [ 1, 9, '1x' ],
    [ 1.1, 2, '1.1x' ],
    [ 0.4, 1, '0.4x' ],
    [ 1.75, 1, '1.75x' ],
    [ 1.27, 1, '1.27x' ],
    [ 1, 10, '1x' ],
    [ 0.85, 1, '0.85x' ],
    [ 1.06, 1, '1.06x' ],
    [ 1, 11, '1x' ],
    [ 1, 12, '1x' ],
    [ 1, 13, '1x' ],
    [ 1.43, 1, '1.43x' ],
    [ 1, 14, '1x' ],
    [ 1.3, 1, '1.3x' ],
    [ 0.65, 1, '0.65x' ],
    [ 1, 15, '1x' ],
    [ 0.4, 2, '0.4x' ],
    [ 0.92, 1, '0.92x' ],
    [ 1.24, 1, '1.24x' ] 
  ]);

  const options = {
    title: "인게임 감도 (마우스)",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    vAxis: {
      baseline: 1,
      ticks: [1, 2, 4, 6, 8, 10, 12, 14, 16]
    },
    hAxis: {
      ticks: [0.2, 0.4, 0.6, 0.8, 1, 1.2, 1.4, 1.6, 1.8]
    }
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("mouseSensitivityScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMouseSensitivityScatterChart, false);
}

function drawCursorSizeScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "커서 크기");
  data.addColumn("number", "인원수");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [ 0.75, 1, '0.75x' ],
    [ 0.8, 1, '0.8x' ],
    [ 0.87, 1, '0.87x' ],
    [ 0.9, 1, '0.9x' ],
    [ 1, 1, '1x' ],
    [ 1, 2, '1x' ],
    [ 1, 3, '1x' ],
    [ 1.35, 1, '1.35x' ],
    [ 1, 4, '1x' ],
    [ 0.8, 2, '0.8x' ],
    [ 0.7, 1, '0.7x' ],
    [ 1.2, 1, '1.2x' ],
    [ 0.53, 1, '0.53x' ],
    [ 0.85, 1, '0.85x' ],
    [ 0.72, 1, '0.72x' ],
    [ 1, 5, '1x' ],
    [ 0.8, 3, '0.8x' ],
    [ 1.2, 2, '1.2x' ],
    [ 1, 6, '1x' ],
    [ 1.14, 1, '1.14x' ],
    [ 0.85, 2, '0.85x' ],
    [ 0.35, 1, '0.35x' ],
    [ 1.01, 1, '1.01x' ],
    [ 0.75, 2, '0.75x' ],
    [ 0.8, 4, '0.8x' ],
    [ 1, 7, '1x' ],
    [ 1.3, 1, '1.3x' ],
    [ 0.8, 5, '0.8x' ],
    [ 1.1, 1, '1.1x' ],
    [ 1, 8, '1x' ],
    [ 0.9, 2, '0.9x' ],
    [ 0.95, 1, '0.95x' ],
    [ 0.83, 1, '0.83x' ],
    [ 2, 1, '2x' ],
    [ 1.55, 1, '1.55x' ],
    [ 1.3, 2, '1.3x' ],
    [ 0.78, 1, '0.78x' ],
    [ 0.81, 1, '0.81x' ],
    [ 0.7, 2, '0.7x' ],
    [ 0.45, 1, '0.45x' ],
    [ 0.75, 3, '0.75x' ],
    [ 1, 9, '1x' ],
    [ 1, 10, '1x' ],
    [ 0.5, 1, '0.5x' ],
    [ 0.4, 1, '0.4x' ],
    [ 1.1, 2, '1.1x' ],
    [ 1.15, 1, '1.15x' ],
    [ 1.15, 2, '1.15x' ],
    [ 1.13, 1, '1.13x' ],
    [ 1.28, 1, '1.28x' ],
    [ 0.76, 1, '0.76x' ],
    [ 0.86, 1, '0.86x' ],
    [ 1, 11, '1x' ],
    [ 1, 12, '1x' ],
    [ 0.84, 1, '0.84x' ],
    [ 1, 13, '1x' ],
    [ 1.1, 3, '1.1x' ],
    [ 0.9, 3, '0.9x' ],
    [ 0.9, 4, '0.9x' ],
    [ 1, 14, '1x' ],
    [ 1.25, 1, '1.25x' ],
    [ 1.3, 3, '1.3x' ],
    [ 0.7, 3, '0.7x' ],
    [ 1.3, 4, '1.3x' ],
    [ 0.9, 5, '0.9x' ],
    [ 0.7, 4, '0.7x' ],
    [ 1.2, 3, '1.2x' ],
    [ 1.13, 2, '1.13x' ],
    [ 1, 15, '1x' ],
    [ 1.5, 1, '1.5x' ],
    [ 0.75, 4, '0.75x' ],
    [ 0.8, 6, '0.8x' ],
    [ 1.25, 2, '1.25x' ],
    [ 1, 16, '1x' ],
    [ 1.3, 5, '1.3x' ],
    [ 1, 17, '1x' ],
    [ 0.5, 2, '0.5x' ],
    [ 0.6, 1, '0.6x' ],
    [ 0.7, 5, '0.7x' ],
    [ 0.9, 6, '0.9x' ],
    [ 0.41, 1, '0.41x' ],
    [ 0.86, 2, '0.86x' ],
    [ 1.3, 6, '1.3x' ],
    [ 0.69, 1, '0.69x' ],
    [ 1.1, 4, '1.1x' ],
    [ 0.7, 6, '0.7x' ],
    [ 1, 18, '1x' ],
    [ 2, 2, '2x' ],
    [ 1, 19, '1x' ],
    [ 0.82, 1, '0.82x' ],
    [ 2, 3, '2x' ],
    [ 1.05, 1, '1.05x' ],
    [ 0.7, 7, '0.7x' ],
    [ 1.2, 4, '1.2x' ],
    [ 1.2, 5, '1.2x' ],
    [ 0.8, 7, '0.8x' ],
    [ 1, 20, '1x' ],
    [ 0.7, 8, '0.7x' ],
    [ 0.8, 8, '0.8x' ],
    [ 1, 21, '1x' ],
    [ 1, 22, '1x' ],
    [ 0.84, 2, '0.84x' ],
    [ 0.8, 9, '0.8x' ],
    [ 1.4, 1, '1.4x' ],
    [ 0.93, 1, '0.93x' ],
    [ 0.8, 10, '0.8x' ],
    [ 0.8, 11, '0.8x' ],
    [ 0.75, 5, '0.75x' ],
    [ 0.75, 6, '0.75x' ],
    [ 1, 23, '1x' ],
    [ 1.35, 2, '1.35x' ],
    [ 0.5, 3, '0.5x' ],
    [ 1.6, 1, '1.6x' ],
    [ 0.45, 2, '0.45x' ],
    [ 0.85, 3, '0.85x' ],
    [ 0.8, 12, '0.8x' ],
    [ 1, 24, '1x' ],
    [ 0.5, 4, '0.5x' ],
    [ 1.21, 1, '1.21x' ],
    [ 1, 25, '1x' ],
    [ 0.58, 1, '0.58x' ],
    [ 1, 26, '1x' ],
    [ 1, 27, '1x' ],
    [ 0.8, 13, '0.8x' ],
    [ 0.7, 9, '0.7x' ],
    [ 0.75, 7, '0.75x' ],
    [ 0.75, 8, '0.75x' ],
    [ 0.85, 4, '0.85x' ],
    [ 1.1, 5, '1.1x' ],
    [ 1, 28, '1x' ],
    [ 1, 29, '1x' ],
    [ 0.8, 14, '0.8x' ],
    [ 0.8, 15, '0.8x' ],
    [ 0.56, 1, '0.56x' ],
    [ 1.2, 6, '1.2x' ],
    [ 0.75, 9, '0.75x' ],
    [ 0.6, 2, '0.6x' ],
    [ 1, 30, '1x' ],
    [ 0.9, 7, '0.9x' ],
    [ 1, 31, '1x' ],
    [ 0.5, 5, '0.5x' ]
  ]);

  const options = {
    title: "커서 크기",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    vAxis: {
      baseline: 1,
      ticks: [1, 5, 10, 15, 20, 25, 30, 35]
    }
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("cursorSizeScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawCursorSizeScatterChart, false);
}

function drawMasterVolumeScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "볼륨");
  data.addColumn("number", "인원수");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [ 45, 1, '45%' ],
    [ 25, 1, '25%' ],
    [ 30, 1, '30%' ],
    [ 50, 1, '50%' ],
    [ 30, 2, '30%' ],
    [ 100, 1, '100%' ],
    [ 30, 3, '30%' ],
    [ 30, 4, '30%' ],
    [ 85, 1, '85%' ],
    [ 60, 1, '60%' ],
    [ 15, 1, '15%' ],
    [ 100, 2, '100%' ],
    [ 40, 1, '40%' ],
    [ 35, 1, '35%' ],
    [ 10, 1, '10%' ],
    [ 50, 2, '50%' ],
    [ 90, 1, '90%' ],
    [ 40, 2, '40%' ],
    [ 15, 2, '15%' ],
    [ 35, 2, '35%' ],
    [ 35, 3, '35%' ],
    [ 30, 5, '30%' ],
    [ 17, 1, '17%' ],
    [ 100, 3, '100%' ],
    [ 15, 3, '15%' ],
    [ 50, 3, '50%' ],
    [ 15, 4, '15%' ],
    [ 20, 1, '20%' ],
    [ 40, 3, '40%' ],
    [ 20, 2, '20%' ],
    [ 55, 1, '55%' ],
    [ 15, 5, '15%' ],
    [ 40, 4, '40%' ],
    [ 70, 1, '70%' ],
    [ 50, 4, '50%' ],
    [ 100, 4, '100%' ],
    [ 80, 1, '80%' ],
    [ 10, 2, '10%' ],
    [ 50, 5, '50%' ],
    [ 25, 2, '25%' ],
    [ 40, 5, '40%' ],
    [ 7, 1, '7%' ],
    [ 30, 6, '30%' ],
    [ 20, 3, '20%' ],
    [ 25, 3, '25%' ],
    [ 50, 6, '50%' ],
    [ 20, 4, '20%' ],
    [ 30, 7, '30%' ],
    [ 30, 8, '30%' ],
    [ 100, 5, '100%' ],
    [ 15, 6, '15%' ],
    [ 15, 7, '15%' ],
    [ 25, 4, '25%' ],
    [ 13, 1, '13%' ],
    [ 60, 2, '60%' ],
    [ 20, 5, '20%' ],
    [ 10, 3, '10%' ],
    [ 50, 7, '50%' ],
    [ 25, 5, '25%' ],
    [ 100, 6, '100%' ],
    [ 50, 8, '50%' ],
    [ 10, 4, '10%' ],
    [ 20, 6, '20%' ],
    [ 100, 7, '100%' ],
    [ 70, 2, '70%' ],
    [ 100, 8, '100%' ],
    [ 30, 9, '30%' ],
    [ 100, 9, '100%' ],
    [ 2, 1, '2%' ],
    [ 25, 6, '25%' ],
    [ 5, 1, '5%' ],
    [ 100, 10, '100%' ],
    [ 25, 7, '25%' ],
    [ 60, 3, '60%' ],
    [ 40, 6, '40%' ],
    [ 30, 10, '30%' ],
    [ 70, 3, '70%' ],
    [ 45, 2, '45%' ],
    [ 75, 1, '75%' ],
    [ 40, 7, '40%' ],
    [ 35, 4, '35%' ],
    [ 10, 5, '10%' ],
    [ 25, 8, '25%' ],
    [ 30, 11, '30%' ],
    [ 20, 7, '20%' ],
    [ 90, 2, '90%' ],
    [ 36, 1, '36%' ],
    [ 15, 8, '15%' ],
    [ 50, 9, '50%' ],
    [ 30, 12, '30%' ],
    [ 10, 6, '10%' ],
    [ 25, 9, '25%' ],
    [ 50, 10, '50%' ],
    [ 40, 8, '40%' ],
    [ 5, 2, '5%' ],
    [ 40, 9, '40%' ],
    [ 100, 11, '100%' ],
    [ 40, 10, '40%' ],
    [ 15, 9, '15%' ],
    [ 10, 7, '10%' ],
    [ 100, 12, '100%' ],
    [ 5, 3, '5%' ],
    [ 80, 2, '80%' ],
    [ 40, 11, '40%' ],
    [ 65, 1, '65%' ],
    [ 80, 3, '80%' ],
    [ 10, 8, '10%' ],
    [ 40, 12, '40%' ],
    [ 30, 13, '30%' ],
    [ 30, 14, '30%' ],
    [ 50, 11, '50%' ],
    [ 30, 15, '30%' ],
    [ 100, 13, '100%' ],
    [ 20, 8, '20%' ],
    [ 30, 16, '30%' ],
    [ 100, 14, '100%' ],
    [ 10, 9, '10%' ],
    [ 30, 17, '30%' ],
    [ 100, 15, '100%' ],
    [ 20, 9, '20%' ],
    [ 40, 13, '40%' ],
    [ 40, 14, '40%' ],
    [ 20, 10, '20%' ],
    [ 10, 10, '10%' ],
    [ 38, 1, '38%' ],
    [ 10, 11, '10%' ],
    [ 40, 15, '40%' ],
    [ 100, 16, '100%' ],
    [ 100, 17, '100%' ]
  ]);

  const options = {
    title: "마스터 볼륨",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    vAxis: {
      baseline: 1,
      ticks: [1, 2, 4, 6, 8, 10, 12, 14, 16, 18]
    }
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("masterVolumeScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMasterVolumeScatterChart, false);
}

function drawVolumeCandlestickChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("string", "");
  data.addColumn("number", "음악");
  data.addColumn("number", "음악");
  data.addColumn("number", "효과음");
  data.addColumn("number", "효과음");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows(
    [
      [ '', 40, 40, 20, 20, '음악: 40%, 효과음: 20% | 0.5x' ],
      [ '', 100, 100, 50, 50, '음악: 100%, 효과음: 50% | 0.5x' ],
      [ '', 45, 45, 30, 30, '음악: 45%, 효과음: 30% | 0.67x' ],
      [ '', 40, 40, 30, 30, '음악: 40%, 효과음: 30% | 0.75x' ],
      [ '', 100, 100, 80, 80, '음악: 100%, 효과음: 80% | 0.8x' ],
      [ '', 100, 100, 80, 80, '음악: 100%, 효과음: 80% | 0.8x' ],
      [ '', 40, 40, 35, 35, '음악: 40%, 효과음: 35% | 0.88x' ],
      [ '', 90, 90, 80, 80, '음악: 90%, 효과음: 80% | 0.89x' ],
      [ '', 100, 100, 90, 90, '음악: 100%, 효과음: 90% | 0.9x' ],
      [ '', 100, 100, 90, 90, '음악: 100%, 효과음: 90% | 0.9x' ],
      [ '', 6, 6, 6, 6, '음악: 6%, 효과음: 6% | 1x' ],
      [ '', 20, 20, 20, 20, '음악: 20%, 효과음: 20% | 1x' ],
      [ '', 30, 30, 30, 30, '음악: 30%, 효과음: 30% | 1x' ],
      [ '', 50, 50, 50, 50, '음악: 50%, 효과음: 50% | 1x' ],
      [ '', 50, 50, 50, 50, '음악: 50%, 효과음: 50% | 1x' ],
      [ '', 50, 50, 50, 50, '음악: 50%, 효과음: 50% | 1x' ],
      [ '', 50, 50, 50, 50, '음악: 50%, 효과음: 50% | 1x' ],
      [ '', 60, 60, 60, 60, '음악: 60%, 효과음: 60% | 1x' ],
      [ '', 80, 80, 80, 80, '음악: 80%, 효과음: 80% | 1x' ],
      [ '', 80, 80, 80, 80, '음악: 80%, 효과음: 80% | 1x' ],
      [ '', 80, 80, 80, 80, '음악: 80%, 효과음: 80% | 1x' ],
      [ '', 80, 80, 80, 80, '음악: 80%, 효과음: 80% | 1x' ],
      [ '', 80, 80, 80, 80, '음악: 80%, 효과음: 80% | 1x' ],
      [ '', 100, 100, 100, 100, '음악: 100%, 효과음: 100% | 1x' ],
      [ '', 100, 100, 100, 100, '음악: 100%, 효과음: 100% | 1x' ],
      [ '', 100, 100, 100, 100, '음악: 100%, 효과음: 100% | 1x' ],
      [ '', 100, 100, 100, 100, '음악: 100%, 효과음: 100% | 1x' ],
      [ '', 100, 100, 100, 100, '음악: 100%, 효과음: 100% | 1x' ],
      [ '', 100, 100, 100, 100, '음악: 100%, 효과음: 100% | 1x' ],
      [ '', 100, 100, 100, 100, '음악: 100%, 효과음: 100% | 1x' ],
      [ '', 100, 100, 100, 100, '음악: 100%, 효과음: 100% | 1x' ],
      [ '', 60, 60, 65, 65, '음악: 60%, 효과음: 65% | 1.08x' ],
      [ '', 50, 50, 55, 55, '음악: 50%, 효과음: 55% | 1.1x' ],
      [ '', 90, 90, 100, 100, '음악: 90%, 효과음: 100% | 1.11x' ],
      [ '', 90, 90, 100, 100, '음악: 90%, 효과음: 100% | 1.11x' ],
      [ '', 90, 90, 100, 100, '음악: 90%, 효과음: 100% | 1.11x' ],
      [ '', 80, 80, 90, 90, '음악: 80%, 효과음: 90% | 1.13x' ],
      [ '', 35, 35, 40, 40, '음악: 35%, 효과음: 40% | 1.14x' ],
      [ '', 85, 85, 100, 100, '음악: 85%, 효과음: 100% | 1.18x' ],
      [ '', 20, 20, 25, 25, '음악: 20%, 효과음: 25% | 1.25x' ],
      [ '', 40, 40, 50, 50, '음악: 40%, 효과음: 50% | 1.25x' ],
      [ '', 40, 40, 50, 50, '음악: 40%, 효과음: 50% | 1.25x' ],
      [ '', 40, 40, 50, 50, '음악: 40%, 효과음: 50% | 1.25x' ],
      [ '', 80, 80, 100, 100, '음악: 80%, 효과음: 100% | 1.25x' ],
      [ '', 80, 80, 100, 100, '음악: 80%, 효과음: 100% | 1.25x' ],
      [ '', 80, 80, 100, 100, '음악: 80%, 효과음: 100% | 1.25x' ],
      [ '', 80, 80, 100, 100, '음악: 80%, 효과음: 100% | 1.25x' ],
      [ '', 80, 80, 100, 100, '음악: 80%, 효과음: 100% | 1.25x' ],
      [ '', 80, 80, 100, 100, '음악: 80%, 효과음: 100% | 1.25x' ],
      [ '', 30, 30, 40, 40, '음악: 30%, 효과음: 40% | 1.33x' ],
      [ '', 60, 60, 80, 80, '음악: 60%, 효과음: 80% | 1.33x' ],
      [ '', 60, 60, 80, 80, '음악: 60%, 효과음: 80% | 1.33x' ],
      [ '', 75, 75, 100, 100, '음악: 75%, 효과음: 100% | 1.33x' ],
      [ '', 75, 75, 100, 100, '음악: 75%, 효과음: 100% | 1.33x' ],
      [ '', 75, 75, 100, 100, '음악: 75%, 효과음: 100% | 1.33x' ],
      [ '', 50, 50, 70, 70, '음악: 50%, 효과음: 70% | 1.4x' ],
      [ '', 50, 50, 70, 70, '음악: 50%, 효과음: 70% | 1.4x' ],
      [ '', 35, 35, 50, 50, '음악: 35%, 효과음: 50% | 1.43x' ],
      [ '', 35, 35, 50, 50, '음악: 35%, 효과음: 50% | 1.43x' ],
      [ '', 70, 70, 100, 100, '음악: 70%, 효과음: 100% | 1.43x' ],
      [ '', 70, 70, 100, 100, '음악: 70%, 효과음: 100% | 1.43x' ],
      [ '', 55, 55, 80, 80, '음악: 55%, 효과음: 80% | 1.45x' ],
      [ '', 20, 20, 30, 30, '음악: 20%, 효과음: 30% | 1.5x' ],
      [ '', 40, 40, 60, 60, '음악: 40%, 효과음: 60% | 1.5x' ],
      [ '', 25, 25, 40, 40, '음악: 25%, 효과음: 40% | 1.6x' ],
      [ '', 50, 50, 80, 80, '음악: 50%, 효과음: 80% | 1.6x' ],
      [ '', 50, 50, 80, 80, '음악: 50%, 효과음: 80% | 1.6x' ],
      [ '', 50, 50, 80, 80, '음악: 50%, 효과음: 80% | 1.6x' ],
      [ '', 50, 50, 80, 80, '음악: 50%, 효과음: 80% | 1.6x' ],
      [ '', 50, 50, 80, 80, '음악: 50%, 효과음: 80% | 1.6x' ],
      [ '', 30, 30, 50, 50, '음악: 30%, 효과음: 50% | 1.67x' ],
      [ '', 30, 30, 50, 50, '음악: 30%, 효과음: 50% | 1.67x' ],
      [ '', 30, 30, 50, 50, '음악: 30%, 효과음: 50% | 1.67x' ],
      [ '', 60, 60, 100, 100, '음악: 60%, 효과음: 100% | 1.67x' ],
      [ '', 60, 60, 100, 100, '음악: 60%, 효과음: 100% | 1.67x' ],
      [ '', 60, 60, 100, 100, '음악: 60%, 효과음: 100% | 1.67x' ],
      [ '', 60, 60, 100, 100, '음악: 60%, 효과음: 100% | 1.67x' ],
      [ '', 60, 60, 100, 100, '음악: 60%, 효과음: 100% | 1.67x' ],
      [ '', 50, 50, 85, 85, '음악: 50%, 효과음: 85% | 1.7x' ],
      [ '', 35, 35, 60, 60, '음악: 35%, 효과음: 60% | 1.71x' ],
      [ '', 35, 35, 60, 60, '음악: 35%, 효과음: 60% | 1.71x' ],
      [ '', 55, 55, 100, 100, '음악: 55%, 효과음: 100% | 1.82x' ],
      [ '', 55, 55, 100, 100, '음악: 55%, 효과음: 100% | 1.82x' ],
      [ '', 10, 10, 20, 20, '음악: 10%, 효과음: 20% | 2x' ],
      [ '', 15, 15, 30, 30, '음악: 15%, 효과음: 30% | 2x' ],
      [ '', 35, 35, 70, 70, '음악: 35%, 효과음: 70% | 2x' ],
      [ '', 35, 35, 70, 70, '음악: 35%, 효과음: 70% | 2x' ],
      [ '', 35, 35, 70, 70, '음악: 35%, 효과음: 70% | 2x' ],
      [ '', 40, 40, 80, 80, '음악: 40%, 효과음: 80% | 2x' ],
      [ '', 50, 50, 100, 100, '음악: 50%, 효과음: 100% | 2x' ],
      [ '', 50, 50, 100, 100, '음악: 50%, 효과음: 100% | 2x' ],
      [ '', 50, 50, 100, 100, '음악: 50%, 효과음: 100% | 2x' ],
      [ '', 50, 50, 100, 100, '음악: 50%, 효과음: 100% | 2x' ],
      [ '', 50, 50, 100, 100, '음악: 50%, 효과음: 100% | 2x' ],
      [ '', 50, 50, 100, 100, '음악: 50%, 효과음: 100% | 2x' ],
      [ '', 50, 50, 100, 100, '음악: 50%, 효과음: 100% | 2x' ],
      [ '', 50, 50, 100, 100, '음악: 50%, 효과음: 100% | 2x' ],
      [ '', 50, 50, 100, 100, '음악: 50%, 효과음: 100% | 2x' ],
      [ '', 50, 50, 100, 100, '음악: 50%, 효과음: 100% | 2x' ],
      [ '', 20, 20, 45, 45, '음악: 20%, 효과음: 45% | 2.25x' ],
      [ '', 40, 40, 90, 90, '음악: 40%, 효과음: 90% | 2.25x' ],
      [ '', 40, 40, 90, 90, '음악: 40%, 효과음: 90% | 2.25x' ],
      [ '', 33, 33, 75, 75, '음악: 33%, 효과음: 75% | 2.27x' ],
      [ '', 15, 15, 35, 35, '음악: 15%, 효과음: 35% | 2.33x' ],
      [ '', 30, 30, 70, 70, '음악: 30%, 효과음: 70% | 2.33x' ],
      [ '', 30, 30, 70, 70, '음악: 30%, 효과음: 70% | 2.33x' ],
      [ '', 25, 25, 60, 60, '음악: 25%, 효과음: 60% | 2.4x' ],
      [ '', 40, 40, 100, 100, '음악: 40%, 효과음: 100% | 2.5x' ],
      [ '', 40, 40, 100, 100, '음악: 40%, 효과음: 100% | 2.5x' ],
      [ '', 40, 40, 100, 100, '음악: 40%, 효과음: 100% | 2.5x' ],
      [ '', 30, 30, 80, 80, '음악: 30%, 효과음: 80% | 2.67x' ],
      [ '', 20, 20, 60, 60, '음악: 20%, 효과음: 60% | 3x' ],
      [ '', 25, 25, 75, 75, '음악: 25%, 효과음: 75% | 3x' ],
      [ '', 25, 25, 75, 75, '음악: 25%, 효과음: 75% | 3x' ],
      [ '', 30, 30, 100, 100, '음악: 30%, 효과음: 100% | 3.33x' ],
      [ '', 30, 30, 100, 100, '음악: 30%, 효과음: 100% | 3.33x' ],
      [ '', 30, 30, 100, 100, '음악: 30%, 효과음: 100% | 3.33x' ],
      [ '', 30, 30, 100, 100, '음악: 30%, 효과음: 100% | 3.33x' ],
      [ '', 30, 30, 100, 100, '음악: 30%, 효과음: 100% | 3.33x' ],
      [ '', 30, 30, 100, 100, '음악: 30%, 효과음: 100% | 3.33x' ],
      [ '', 30, 30, 100, 100, '음악: 30%, 효과음: 100% | 3.33x' ],
      [ '', 30, 30, 100, 100, '음악: 30%, 효과음: 100% | 3.33x' ],
      [ '', 20, 20, 75, 75, '음악: 20%, 효과음: 75% | 3.75x' ],
      [ '', 20, 20, 80, 80, '음악: 20%, 효과음: 80% | 4x' ],
      [ '', 25, 25, 100, 100, '음악: 25%, 효과음: 100% | 4x' ],
      [ '', 20, 20, 100, 100, '음악: 20%, 효과음: 100% | 5x' ],
      [ '', 20, 20, 100, 100, '음악: 20%, 효과음: 100% | 5x' ],
      [ '', 5, 5, 40, 40, '음악: 5%, 효과음: 40% | 8x' ],
      [ '', 12, 12, 100, 100, '음악: 12%, 효과음: 100% | 8.33x' ],
      [ '', 10, 10, 100, 100, '음악: 10%, 효과음: 100% | 10x' ]
    ],
    true
  );

  const options = {
    title: "음악 볼륨 / 효과음 볼륨",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "5%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    bar: { groupWidth: "75%" },
    candlestick: {
      fallingColor: { strokeWidth: 0, fill: "#dc3912" },
      risingColor: { strokeWidth: 0, fill: "#3366cc" },
    },
  };

  const chart = new google.visualization.CandlestickChart(
    document.getElementById("volumeCandlestickChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawVolumeCandlestickChart, false);
}

function drawDoWarmUpPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["여부", "인원수"],
    ["O", 101],
    ["X", 30],
  ]);

  const options = {
    title: "워밍업 여부",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("doWarmUpPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawDoWarmUpPieChart, false);
}

function drawWhatMapForWarmUpColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["맵", "인원수"],
    ["양타", 18],
    ["점프", 15],
    ["연타", 15],
    ["저BPM", 14],
    ["제네릭", 8],
    ["본인에게 쉬운 맵", 7],
    ["본인에게 어려운 맵", 6],
    ["고BPM", 6],
    ["롱스", 6],
    ["기타", 52],
  ]);

  const options = {
    title: "워밍업에 사용하는 맵",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("whatMapForWarmUpColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawWhatMapForWarmUpColumnChart, false);
}

function drawModCombinationColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["모드 조합", "인원수"],
    ["NM", 105],
    ["HD", 52],
    ["DT", 46],
    ["HR", 46],
    ["HDDT", 44],
    ["HDHR", 36],
    ["EZ", 11],
    ["기타", 16],
  ]);

  const options = {
    title: "선호하는 모드 조합",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    vAxis: {
      ticks: [0, 20, 40, 60, 80, 100, 120, 131]
    }
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("modCombinationColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawModCombinationColumnChart, false);
}

function drawUnduplicatedModsColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["모드", "인원수"],
    ["NM", 105],
    ["DT", 74],
    ["HD", 73],
    ["HR", 68],
    ["EZ", 14],
    ["NF", 4],
    ["NC", 2],
    ["HT", 2],
    ["RX", 2],
    ["SO", 2],
    ["FL", 1],
    ["V2", 1],
  ]);

  const options = {
    title: "선호하는 모드",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    vAxis: {
      ticks: [0, 20, 40, 60, 80, 100, 120, 131]
    }
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("unduplicatedModsColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawUnduplicatedModsColumnChart, false);
}

function drawModsColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["모드", "언급 횟수"],
    ["HD", 140],
    ["NM", 105],
    ["DT", 99],
    ["HR", 86],
    ["EZ", 19],
    ["NF", 4],
    ["NC", 3],
    ["HT", 2],
    ["RX", 2],
    ["SO", 2],
    ["FL", 1],
    ["V2", 1],
  ]);

  const options = {
    title: "선호하는 모드 (중복 허용)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("modsColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawModsColumnChart, false);
}

function drawMappingPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["상태", "인원수"],
    ["랭매퍼", 6],
    ["Active 언랭매퍼", 15],
    ["Inactive 언랭매퍼", 21],
    ["매핑 경험 없음", 89],
  ]);

  const options = {
    title: "매핑 여부",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("mappingPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMappingPieChart, false);
}

function drawMapTypeColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["맵 종류", "인원수"],
    ["점프", 73],
    ["연타", 50],
    ["양타", 50],
    ["테크", 43],
    ["스피드", 28],
    ["저AR", 15],
    ["고AR", 9],
    ["제네릭", 8],
    ["고CS", 6],
    ["고BPM", 5],
    ["핑컨", 5],
    ["기믹", 4],
    ["기타", 23],
  ]);

  const options = {
    title: "선호하는 맵 종류",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("mapTypeColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMapTypeColumnChart, false);
}

function drawMapperScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "언급 횟수");
  data.addColumn("number", "점수");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [ 1,
      2,
      '_Epreus |  언급 횟수: 1, 점수: 2\nAcylica | 언급 횟수: 1, 점수: 2\nAltai | 언급 횟수: 1, 점수: 2\nAthanasia- | 언급 횟수: 1, 점수: 2\nChaoslitz | 언급 횟수: 1, 점수: 2\neringiRa | 언급 횟수: 1, 점수: 2\nflake | 언급 횟수: 1, 점수: 2\nJeZag | 언급 횟수: 1, 점수: 2\nKuki1537 | 언급 횟수: 1, 점수: 2\nmoph | 언급 횟수: 1, 점수: 2\nMuya | 언급 횟수: 1, 점수: 2\nnebuwua | 언급 횟수: 1, 점수: 2\nquantumvortex | 언급 횟수: 1, 점수: 2\nRukq | 언급 횟수: 1, 점수: 2\nShurelia | 언급 횟수: 1, 점수: 2\ntsundereSam | 언급 횟수: 1, 점수: 2' ],
    [ 2,
      5,
      '_kotachi_ |  언급 횟수: 2, 점수: 5\nBloxi | 언급 횟수: 2, 점수: 5\ncaren_sk | 언급 횟수: 2, 점수: 5\nKKipalt | 언급 횟수: 2, 점수: 5\nLasse | 언급 횟수: 2, 점수: 5\nsytho | 언급 횟수: 2, 점수: 5' ],
    [ 1,
      5,
      '_maika |  언급 횟수: 1, 점수: 5\n9ami | 언급 횟수: 1, 점수: 5\nAmai Chocolate | 언급 횟수: 1, 점수: 5\namanatu2 | 언급 횟수: 1, 점수: 5\nCherry Blossom | 언급 횟수: 1, 점수: 5\nCyril Scarlet | 언급 횟수: 1, 점수: 5\nDJPop | 언급 횟수: 1, 점수: 5\nelicz1 | 언급 횟수: 1, 점수: 5\nHayakou | 언급 횟수: 1, 점수: 5\nKarliah | 언급 횟수: 1, 점수: 5\nNatsumeRin | 언급 횟수: 1, 점수: 5\nNelliel | 언급 횟수: 1, 점수: 5\nRumia- | 언급 횟수: 1, 점수: 5\nSarawatlism | 언급 횟수: 1, 점수: 5\nSh4rq_ | 언급 횟수: 1, 점수: 5\nWien Margarete | 언급 횟수: 1, 점수: 5' ],
    [ 1,
      1,
      '-PC |  언급 횟수: 1, 점수: 1\nailv | 언급 횟수: 1, 점수: 1\nCiyus Miapah | 언급 횟수: 1, 점수: 1\nDailycare | 언급 횟수: 1, 점수: 1\ngrumd | 언급 횟수: 1, 점수: 1\nHarumiii | 언급 횟수: 1, 점수: 1\nLen | 언급 횟수: 1, 점수: 1\nNatsume Shizuku | 언급 횟수: 1, 점수: 1\npkk | 언급 횟수: 1, 점수: 1\nPlasma | 언급 횟수: 1, 점수: 1\npregnant woman | 언급 횟수: 1, 점수: 1\nRiana | 언급 횟수: 1, 점수: 1\nShru | 언급 횟수: 1, 점수: 1\nsjoy | 언급 횟수: 1, 점수: 1\nSnowNiNo_ | 언급 횟수: 1, 점수: 1\nyf_bmp | 언급 횟수: 1, 점수: 1' ],
    [ 2, 2, '-Visceral- |  언급 횟수: 2, 점수: 2' ],
    [ 2,
      9,
      '[Karcher] |  언급 횟수: 2, 점수: 9\nHollow Wings | 언급 횟수: 2, 점수: 9\ntomatas95 | 언급 횟수: 2, 점수: 9' ],
    [ 1,
      4,
      '0ppInOsu |  언급 횟수: 1, 점수: 4\nCoLouRed GlaZeE | 언급 횟수: 1, 점수: 4\ndasdwqdf | 언급 횟수: 1, 점수: 4\nDeppyforce | 언급 횟수: 1, 점수: 4\nFaiVillager | 언급 횟수: 1, 점수: 4\nGranDSenpai | 언급 횟수: 1, 점수: 4\nHalfslashed | 언급 횟수: 1, 점수: 4\nKalibe | 언급 횟수: 1, 점수: 4\nLesjuh | 언급 횟수: 1, 점수: 4\nLivia | 언급 횟수: 1, 점수: 4\nMakiDonalds | 언급 횟수: 1, 점수: 4\nN a s y a | 언급 횟수: 1, 점수: 4\nNo Dap | 언급 횟수: 1, 점수: 4\nSeni | 언급 횟수: 1, 점수: 4\nShunao | 언급 횟수: 1, 점수: 4\nSparhten | 언급 횟수: 1, 점수: 4' ],
    [ 4,
      12,
      'A r M i N |  언급 횟수: 4, 점수: 12\nDeviousPanda | 언급 횟수: 4, 점수: 12' ],
    [ 1,
      3,
      'acnozei |  언급 횟수: 1, 점수: 3\nAJT | 언급 횟수: 1, 점수: 3\nAngelHoney | 언급 횟수: 1, 점수: 3\nAvena | 언급 횟수: 1, 점수: 3\nEkoro | 언급 횟수: 1, 점수: 3\nFycho | 언급 횟수: 1, 점수: 3\nHoushou Hari | 언급 횟수: 1, 점수: 3\nKibbleru | 언급 횟수: 1, 점수: 3\nLami | 언급 횟수: 1, 점수: 3\nMimari | 언급 횟수: 1, 점수: 3\nMirash | 언급 횟수: 1, 점수: 3\nnyarvis | 언급 횟수: 1, 점수: 3\npishifat | 언급 횟수: 1, 점수: 3\nSaten | 언급 횟수: 1, 점수: 3\nSing | 언급 횟수: 1, 점수: 3\nSMOKELIND | 언급 횟수: 1, 점수: 3\ntoybot | 언급 횟수: 1, 점수: 3\nworst hr player | 언급 횟수: 1, 점수: 3\nYusomi | 언급 횟수: 1, 점수: 3\nZapy | 언급 횟수: 1, 점수: 3' ],
    [ 9, 29, 'Akitoshi |  언급 횟수: 9, 점수: 29' ],
    [ 2, 10, 'Amateurre |  언급 횟수: 2, 점수: 10' ],
    [ 4, 19, 'apoq |  언급 횟수: 4, 점수: 19' ],
    [ 2,
      6,
      'Arushii09 |  언급 횟수: 2, 점수: 6\nHeilia | 언급 횟수: 2, 점수: 6\nhifu | 언급 횟수: 2, 점수: 6\niljaaz | 언급 횟수: 2, 점수: 6\nRealazy | 언급 횟수: 2, 점수: 6' ],
    [ 2,
      4,
      'Azrealy |  언급 횟수: 2, 점수: 4\nDelis | 언급 횟수: 2, 점수: 4\nDoormat | 언급 횟수: 2, 점수: 4' ],
    [ 2,
      8,
      'BarkingMadDog |  언급 횟수: 2, 점수: 8\nCamo | 언급 횟수: 2, 점수: 8\nKujinn | 언급 횟수: 2, 점수: 8\nSeamob | 언급 횟수: 2, 점수: 8' ],
    [ 11, 39, 'browiec |  언급 횟수: 11, 점수: 39' ],
    [ 4,
      13,
      'captin1 |  언급 횟수: 4, 점수: 13\ngazimal | 언급 횟수: 4, 점수: 13\nhehe | 언급 횟수: 4, 점수: 13\nSatellite | 언급 횟수: 4, 점수: 13' ],
    [ 13, 44, 'Down |  언급 횟수: 13, 점수: 44' ],
    [ 2,
      7,
      'dsco |  언급 횟수: 2, 점수: 7\nIOException | 언급 횟수: 2, 점수: 7\nLivermorium | 언급 횟수: 2, 점수: 7\nNatsu | 언급 횟수: 2, 점수: 7' ],
    [ 5, 21, 'elchxyrlia |  언급 횟수: 5, 점수: 21' ],
    [ 4,
      11,
      'fanzhen0019 |  언급 횟수: 4, 점수: 11\nRyuusei Aika | 언급 횟수: 4, 점수: 11' ],
    [ 3, 12, 'fieryrage |  언급 횟수: 3, 점수: 12' ],
    [ 4, 18, 'Halgoh |  언급 횟수: 4, 점수: 18\nPetal | 언급 횟수: 4, 점수: 18' ],
    [ 3, 13, 'knowledgeking |  언급 횟수: 3, 점수: 13' ],
    [ 3, 9, 'kowari |  언급 횟수: 3, 점수: 9' ],
    [ 13, 46, 'ktgster |  언급 횟수: 13, 점수: 46' ],
    [ 3,
      8,
      'Left |  언급 횟수: 3, 점수: 8\nNevo | 언급 횟수: 3, 점수: 8\nRLC | 언급 횟수: 3, 점수: 8' ],
    [ 10, 31, 'Log Off Now |  언급 횟수: 10, 점수: 31' ],
    [ 8,
      23,
      'Luscent |  언급 횟수: 8, 점수: 23\nNathan | 언급 횟수: 8, 점수: 23' ],
    [ 5, 17, 'Meg |  언급 횟수: 5, 점수: 17' ],
    [ 4, 10, 'Mir |  언급 횟수: 4, 점수: 10' ],
    [ 2, 3, 'Mismagius |  언급 횟수: 2, 점수: 3\nTyp4 | 언급 횟수: 2, 점수: 3' ],
    [ 8, 30, 'Monstrata |  언급 횟수: 8, 점수: 30' ],
    [ 4, 15, 'ProfessionalBox |  언급 횟수: 4, 점수: 15' ],
    [ 5, 15, 'Raijodo |  언급 횟수: 5, 점수: 15' ],
    [ 6, 22, 'Settia |  언급 횟수: 6, 점수: 22' ],
    [ 10, 34, 'SkyFlame |  언급 횟수: 10, 점수: 34' ],
    [ 8, 33, 'Skystar |  언급 횟수: 8, 점수: 33' ],
    [ 14, 47, 'Sotarks |  언급 횟수: 14, 점수: 47' ],
    [ 5, 11, 'Taeyang |  언급 횟수: 5, 점수: 11' ],
    [ 7, 24, 'val0108 |  언급 횟수: 7, 점수: 24' ]
  ]);

  const options = {
    title: "선호하는 매퍼",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    trendlines: {
      0: {
        color: "green",
      },
    },
    explorer: {
      maxZoomIn: 0.05
    }
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("mapperScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMapperScatterChart, false);
}

function drawPlayerScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "언급 횟수");
  data.addColumn("number", "점수");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [ 7, 22, '_maika |  언급 횟수: 7, 점수: 22' ],
    [ 1,
      3,
      '_Slow |  언급 횟수: 1, 점수: 3\nAery | 언급 횟수: 1, 점수: 3\nagnes98170926 | 언급 횟수: 1, 점수: 3\nAireu | 언급 횟수: 1, 점수: 3\nAnze | 언급 횟수: 1, 점수: 3\nmcy4 | 언급 횟수: 1, 점수: 3\nPieris | 언급 횟수: 1, 점수: 3\nSure | 언급 횟수: 1, 점수: 3\nyykkrr | 언급 횟수: 1, 점수: 3\nzeluaR | 언급 횟수: 1, 점수: 3' ],
    [ 3, 9, '-GN |  언급 횟수: 3, 점수: 9\nBikko | 언급 횟수: 3, 점수: 9' ],
    [ 1,
      4,
      '-Melodies- |  언급 횟수: 1, 점수: 4\n[TAKA] | 언급 횟수: 1, 점수: 4\nAllegrissimo | 언급 횟수: 1, 점수: 4\nbig snag | 언급 횟수: 1, 점수: 4\nEnon | 언급 횟수: 1, 점수: 4\nExGon | 언급 횟수: 1, 점수: 4\nFakercambing | 언급 횟수: 1, 점수: 4\nKaruna | 언급 횟수: 1, 점수: 4\nLolu | 언급 횟수: 1, 점수: 4\nmokia- | 언급 횟수: 1, 점수: 4\nsayonara-bye | 언급 횟수: 1, 점수: 4\nT A K A O | 언급 횟수: 1, 점수: 4\nxasuma | 언급 횟수: 1, 점수: 4\nYaong | 언급 횟수: 1, 점수: 4' ],
    [ 13, 44, '[Karcher] |  언급 횟수: 13, 점수: 44' ],
    [ 2, 6, '[MG]Arnold24x24 |  언급 횟수: 2, 점수: 6' ],
    [ 2, 5, 'Accolibed |  언급 횟수: 2, 점수: 5' ],
    [ 7, 19, 'aetrna |  언급 횟수: 7, 점수: 19\nbadeu | 언급 횟수: 7, 점수: 19' ],
    [ 3,
      11,
      'Amamya Kokoro |  언급 횟수: 3, 점수: 11\nenri | 언급 횟수: 3, 점수: 11' ],
    [ 1,
      5,
      'Aricin |  언급 횟수: 1, 점수: 5\nBTMC | 언급 횟수: 1, 점수: 5\nDeppyforce | 언급 횟수: 1, 점수: 5\nDoomsday | 언급 횟수: 1, 점수: 5\nEFFECTOW | 언급 횟수: 1, 점수: 5\ngasanww | 언급 횟수: 1, 점수: 5\nGonya_ | 언급 횟수: 1, 점수: 5\nhoanito | 언급 횟수: 1, 점수: 5\nmugio3 | 언급 횟수: 1, 점수: 5\nNopekjk | 언급 횟수: 1, 점수: 5\nokinamo | 언급 횟수: 1, 점수: 5\nSeobaek | 언급 횟수: 1, 점수: 5\nShizuru- | 언급 횟수: 1, 점수: 5' ],
    [ 3, 13, 'BlancPur |  언급 횟수: 3, 점수: 13' ],
    [ 2,
      3,
      'Bonk |  언급 횟수: 2, 점수: 3\nGambler | 언급 횟수: 2, 점수: 3\nUmbre | 언급 횟수: 2, 점수: 3' ],
    [ 1,
      2,
      'BoshyMan741 |  언급 횟수: 1, 점수: 2\nBubbleman | 언급 횟수: 1, 점수: 2\ncriller | 언급 횟수: 1, 점수: 2\ndasdwqdf | 언급 횟수: 1, 점수: 2\ndecaten | 언급 횟수: 1, 점수: 2\nDereban | 언급 횟수: 1, 점수: 2\ngusrua123 | 언급 횟수: 1, 점수: 2\nionn | 언급 횟수: 1, 점수: 2\nKepler | 언급 횟수: 1, 점수: 2\nMaklovitz | 언급 횟수: 1, 점수: 2\nMy Aim Trash | 언급 횟수: 1, 점수: 2\nNongsa | 언급 횟수: 1, 점수: 2\nNyanPotato | 언급 횟수: 1, 점수: 2\nPain | 언급 횟수: 1, 점수: 2\nwuhua | 언급 횟수: 1, 점수: 2' ],
    [ 45, 177, 'chocomint |  언급 횟수: 45, 점수: 177' ],
    [ 2,
      9,
      'Doomsday fanboy |  언급 횟수: 2, 점수: 9\nNameless Player | 언급 횟수: 2, 점수: 9\nWubWoofWolf | 언급 횟수: 2, 점수: 9' ],
    [ 7, 17, 'Ekoro |  언급 횟수: 7, 점수: 17' ],
    [ 3,
      12,
      'firebat92 |  언급 횟수: 3, 점수: 12\nHugofrost | 언급 횟수: 3, 점수: 12\nrrtyui | 언급 횟수: 3, 점수: 12\nsiina | 언급 횟수: 3, 점수: 12' ],
    [ 19, 62, 'FlyingTuna |  언급 횟수: 19, 점수: 62' ],
    [ 1,
      1,
      'Gameroft |  언급 횟수: 1, 점수: 1\nParaqeet | 언급 횟수: 1, 점수: 1\nPeresia | 언급 횟수: 1, 점수: 1\nRill 0 | 언급 횟수: 1, 점수: 1\nRiviclia | 언급 횟수: 1, 점수: 1' ],
    [ 3,
      6,
      'gnahus |  언급 횟수: 3, 점수: 6\nVarvalian | 언급 횟수: 3, 점수: 6' ],
    [ 10, 31, 'his kitten |  언급 횟수: 10, 점수: 31' ],
    [ 2, 8, 'hvick225 |  언급 횟수: 2, 점수: 8' ],
    [ 2,
      2,
      'hyeok2044 |  언급 횟수: 2, 점수: 2\nZoomer | 언급 횟수: 2, 점수: 2' ],
    [ 6, 20, 'lifeline |  언급 횟수: 6, 점수: 20' ],
    [ 18, 59, 'maliszewski |  언급 횟수: 18, 점수: 59' ],
    [ 4,
      12,
      'Mathi |  언급 횟수: 4, 점수: 12\nRektygon | 언급 횟수: 4, 점수: 12' ],
    [ 26, 95, 'mrekk |  언급 횟수: 26, 점수: 95' ],
    [ 3, 8, 'ninerik |  언급 횟수: 3, 점수: 8' ],
    [ 2, 4, 'Petit |  언급 횟수: 2, 점수: 4\nyadon | 언급 횟수: 2, 점수: 4' ],
    [ 5, 15, 'rayuii |  언급 횟수: 5, 점수: 15' ],
    [ 3, 7, 'rustbell |  언급 횟수: 3, 점수: 7' ],
    [ 16, 48, 'Vaxei |  언급 횟수: 16, 점수: 48' ],
    [ 17, 66, 'WhiteCat |  언급 횟수: 17, 점수: 66' ],
    [ 54, 212, 'worst hr player |  언급 횟수: 54, 점수: 212' ] 
  ]);

  const options = {
    title: "롤모델 플레이어",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    trendlines: {
      0: {
        color: "green",
      },
    },
    explorer: {
      maxZoomIn: 0.05
    }
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("playerScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawPlayerScatterChart, false);
}

function drawNMTypeBarChart() {
  const data = google.visualization.arrayToDataTable([
    ["모드", "Type A", "Type B", "Type C", "Type D"],
    ["NM", 2, 127, 9, 10],
  ]);

  const options = {
    title: "타입",
    width: "100%",
    isStacked: 'percent',
    chartArea: {
      left: "0%",
      right: "0%",
      top: "10%",
      bottom: "0%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.BarChart(
    document.getElementById("nmTypeBarChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawNMTypeBarChart, false);

  const chart2 = new google.visualization.BarChart(
    document.getElementById("nmTypeBarChart2")
  );

  chart2.draw(data, {
    title: "NM",
    width: "100%",
    isStacked: 'percent',
    chartArea: {
      left: "0%",
      right: "0%",
      top: "30%",
      bottom: "0%",
      width: "100%",
      height: "100%",
    },
  });

  window.addEventListener("resize", drawNMTypeBarChart, false);
}

function drawNMCursorTrailPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["트레일", "개수"],
    ["일반 트레일", 102],
    ["롱 트레일", 13],
    ["트레일 없음", 31],
  ]);

  const options = {
    title: "커서 트레일 유형",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("nmCursorTrailPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawNMCursorTrailPieChart, false);
}

function drawNMCursorColorPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["색상", "개수"],
    ["노란색", 66],
    ["초록색", 20],
    ["하얀색", 19],
    ["파란색", 17],
    ["분홍색", 9],
    ["연보라색", 9],
    ["빨간색", 4],
    ["검은색", 1]
  ]);

  const options = {
    title: "커서 색상",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    colors: ["#ff9900", "#109618", "#e0e0e0", "#3366cc", "#f06292", "#ba68c8", "#dc3912", "#000000"],
    slices: {2: {textStyle: {color: 'black'}}}
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("nmCursorColorPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawNMCursorColorPieChart, false);
}

function drawNMCursorTrailColorPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["색상", "개수"],
    ["노란색", 42],
    ["파란색", 27],
    ["하얀색", 20],
    ["빨간색", 11],
    ["초록색", 5],
    ["연보라색", 5],
    ["분홍색", 5],
  ]);

  const options = {
    title: "커서 트레일 색상",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    colors: ["#ff9900", "#3366cc", "#e0e0e0", "#dc3912", "#109618", "#ba68c8", "#f06292"],
    slices: {2: {textStyle: {color: 'black'}}}
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("nmCursorTrailColorPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawNMCursorTrailColorPieChart, false);
}



function drawHDTypeBarChart() {
  const data = google.visualization.arrayToDataTable([
    ["모드", "Type A", "Type B", "Type C", "Type D"],
    ["HD", 1, 62, 7, 3],
  ]);

  const options = {
    title: "타입",
    width: "100%",
    isStacked: 'percent',
    chartArea: {
      left: "0%",
      right: "0%",
      top: "10%",
      bottom: "0%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.BarChart(
    document.getElementById("hdTypeBarChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHDTypeBarChart, false);

  const chart2 = new google.visualization.BarChart(
    document.getElementById("hdTypeBarChart2")
  );

  chart2.draw(data, {
    title: "HD",
    width: "100%",
    isStacked: 'percent',
    chartArea: {
      left: "0%",
      right: "0%",
      top: "30%",
      bottom: "0%",
      width: "100%",
      height: "100%",
    },
  });
  
  window.addEventListener("resize", drawHDTypeBarChart, false);
}

function drawHDCursorTrailPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["트레일", "개수"],
    ["일반 트레일", 53],
    ["롱 트레일", 6],
    ["트레일 없음", 12],
  ]);

  const options = {
    title: "커서 트레일 유형",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("hdCursorTrailPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHDCursorTrailPieChart, false);
}

function drawHDCursorColorPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["색상", "개수"],
    ["노란색", 30],
    ["하얀색", 12],
    ["초록색", 9],
    ["파란색", 9],
    ["연보라색", 5],
    ["분홍색", 4],
    ["빨간색", 2],
  ]);

  const options = {
    title: "커서 색상",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    colors: ["#ff9900", "#e0e0e0", "#109618", "#3366cc", "#ba68c8", "#f06292", "#dc3912"],
    slices: {1: {textStyle: {color: 'black'}}}
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("hdCursorColorPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHDCursorColorPieChart, false);
}

function drawHDCursorTrailColorPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["색상", "개수"],
    ["파란색", 20],
    ["노란색", 17],
    ["하얀색", 12],
    ["빨간색", 4],
    ["분홍색", 3],
    ["연보라색", 2],
    ["초록색", 1],
  ]);

  const options = {
    title: "커서 트레일 색상",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    colors: ["#3366cc", "#ff9900", "#e0e0e0", "#dc3912", "#f06292", "#ba68c8", "#109618"],
    slices: {2: {textStyle: {color: 'black'}}}
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("hdCursorTrailColorPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHDCursorTrailColorPieChart, false);
}



function drawHRTypeBarChart() {
  const data = google.visualization.arrayToDataTable([
    ["모드", "Type A", "Type B", "Type C", "Type D"],
    ["HR", 1, 72, 10, 10],
  ]);

  const options = {
    title: "타입",
    width: "100%",
    isStacked: 'percent',
    chartArea: {
      left: "0%",
      right: "0%",
      top: "10%",
      bottom: "0%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.BarChart(
    document.getElementById("hrTypeBarChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHRTypeBarChart, false);

  const chart2 = new google.visualization.BarChart(
    document.getElementById("hrTypeBarChart2")
  );

  chart2.draw(data, {
    title: "HR",
    width: "100%",
    isStacked: 'percent',
    chartArea: {
      left: "0%",
      right: "0%",
      top: "30%",
      bottom: "0%",
      width: "100%",
      height: "100%",
    },
  });
  
  window.addEventListener("resize", drawHRTypeBarChart, false);
}

function drawHRCursorTrailPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["트레일", "개수"],
    ["일반 트레일", 72],
    ["롱 트레일", 1],
    ["트레일 없음", 19],
  ]);

  const options = {
    title: "커서 트레일 유형",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("hrCursorTrailPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHRCursorTrailPieChart, false);
}

function drawHRCursorColorPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["색상", "개수"],
    ["노란색", 41],
    ["초록색", 14],
    ["하얀색", 13],
    ["연보라색", 9],
    ["파란색", 7],
    ["분홍색", 5],
    ["빨간색", 3],
  ]);

  const options = {
    title: "커서 색상",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    colors: ["#ff9900", "#109618", "#e0e0e0", "#ba68c8", "#3366cc", "#f06292", "#dc3912"],
    slices: {2: {textStyle: {color: 'black'}}}
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("hrCursorColorPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHRCursorColorPieChart, false);
}

function drawHRCursorTrailColorPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["색상", "개수"],
    ["노란색", 28],
    ["파란색", 12],
    ["하얀색", 12],
    ["빨간색", 9],
    ["초록색", 6],
    ["분홍색", 3],
    ["연보라색", 3],
  ]);

  const options = {
    title: "커서 트레일 색상",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    colors: ["#ff9900", "#3366cc", "#e0e0e0", "#dc3912", "#109618", "#f06292", "#ba68c8", ],
    slices: {2: {textStyle: {color: 'black'}}}
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("hrCursorTrailColorPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHRCursorTrailColorPieChart, false);
}



function drawDTTypeBarChart() {
  const data = google.visualization.arrayToDataTable([
    ["모드", "Type A", "Type B", "Type C", "Type D"],
    ["DT", 1, 41, 59, 12],
  ]);

  const options = {
    title: "타입",
    width: "100%",
    isStacked: 'percent',
    chartArea: {
      left: "0%",
      right: "0%",
      top: "10%",
      bottom: "0%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.BarChart(
    document.getElementById("dtTypeBarChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawDTTypeBarChart, false);

  const chart2 = new google.visualization.BarChart(
    document.getElementById("dtTypeBarChart2")
  );

  chart2.draw(data, {
    title: "DT",
    width: "100%",
    isStacked: 'percent',
    chartArea: {
      left: "0%",
      right: "0%",
      top: "30%",
      bottom: "0%",
      width: "100%",
      height: "100%",
    },
  });
  
  window.addEventListener("resize", drawDTTypeBarChart, false);
}

function drawDTCursorTrailPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["트레일", "개수"],
    ["일반 트레일", 91],
    ["롱 트레일", 3],
    ["트레일 없음", 19],
  ]);

  const options = {
    title: "커서 트레일 유형",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("dtCursorTrailPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawDTCursorTrailPieChart, false);
}

function drawDTCursorColorPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["색상", "개수"],
    ["노란색", 77],
    ["하얀색", 15],
    ["초록색", 8],
    ["파란색", 7],
    ["분홍색", 3],
    ["빨간색", 2],
    ["연보라색", 1],
  ]);

  const options = {
    title: "커서 색상",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    colors: ["#ff9900", "#e0e0e0", "#109618", "#3366cc", "#f06292", "#dc3912", "#ba68c8"],
    slices: {1: {textStyle: {color: 'black'}}}
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("dtCursorColorPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawDTCursorColorPieChart, false);
}

function drawDTCursorTrailColorPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["색상", "개수"],
    ["노란색", 61],
    ["하얀색", 11],
    ["파란색", 11],
    ["빨간색", 6],
    ["분홍색", 3],
    ["초록색", 2],
  ]);

  const options = {
    title: "커서 트레일 색상",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    colors: ["#ff9900", "#e0e0e0", "#3366cc", "#dc3912", "#f06292", "#109618"],
    slices: {1: {textStyle: {color: 'black'}}}
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("dtCursorTrailColorPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawDTCursorTrailColorPieChart, false);
}



function drawEZTypeBarChart() {
  const data = google.visualization.arrayToDataTable([
    ["모드", "Type A", "Type B", "Type C", "Type D"],
    ["EZ", 9, 11, 1, 0],
  ]);

  const options = {
    title: "타입",
    width: "100%",
    isStacked: 'percent',
    chartArea: {
      left: "0%",
      right: "0%",
      top: "10%",
      bottom: "0%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.BarChart(
    document.getElementById("ezTypeBarChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawEZTypeBarChart, false);

  const chart2 = new google.visualization.BarChart(
    document.getElementById("ezTypeBarChart2")
  );

  chart2.draw(data, {
    title: "EZ",
    width: "100%",
    isStacked: 'percent',
    chartArea: {
      left: "0%",
      right: "0%",
      top: "30%",
      bottom: "0%",
      width: "100%",
      height: "100%",
    },
  });
  
  window.addEventListener("resize", drawEZTypeBarChart, false);
}

function drawEZCursorTrailPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["트레일", "개수"],
    ["일반 트레일", 15],
    ["롱 트레일", 3],
    ["트레일 없음", 3],
  ]);

  const options = {
    title: "커서 트레일 유형",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("ezCursorTrailPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawEZCursorTrailPieChart, false);
}

function drawEZCursorColorPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["색상", "개수"],
    ["노란색", 8],
    ["분홍색", 6],
    ["초록색", 3],
    ["연보라색", 2],
    ["파란색", 1],
  ]);

  const options = {
    title: "커서 색상",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    colors: ["#ff9900", "#f06292", "#109618", "#ba68c8", "#3366cc"],
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("ezCursorColorPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawEZCursorColorPieChart, false);
}

function drawEZCursorTrailColorPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["색상", "개수"],
    ["노란색", 6],
    ["파란색", 6],
    ["분홍색", 5],
    ["연보라색", 1],
  ]);

  const options = {
    title: "커서 트레일 색상",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    colors: ["#ff9900", "#3366cc", "#dc3912", "#ba68c8"],
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("ezCursorTrailColorPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawEZCursorTrailColorPieChart, false);
}



function drawAllTypeBarChart() {
  const data = google.visualization.arrayToDataTable([
    ["모드", "Type A", "Type B", "Type C", "Type D"],
    ["전체", 12, 161, 62, 20],
  ]);

  const options = {
    title: "타입",
    width: "100%",
    isStacked: 'percent',
    chartArea: {
      left: "0%",
      right: "0%",
      top: "10%",
      bottom: "0%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.BarChart(
    document.getElementById("allTypeBarChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawAllTypeBarChart, false);
}

function drawAllCursorTrailPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["트레일", "개수"],
    ["일반 트레일", 189],
    ["롱 트레일", 17],
    ["트레일 없음", 47],
  ]);

  const options = {
    title: "커서 트레일 유형",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("allCursorTrailPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawAllCursorTrailPieChart, false);
}

function drawAllCursorColorPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["색상", "개수"],
    ["노란색", 131],
    ["하얀색", 33],
    ["초록색", 29],
    ["파란색", 24],
    ["분홍색", 14],
    ["연보라색", 14],
    ["빨간색", 6],
    ["검은색", 1]
  ]);

  const options = {
    title: "커서 색상",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    colors: ["#ff9900", "#e0e0e0", "#109618", "#3366cc", "#f06292", "#ba68c8", "#dc3912", "#000000"],
    slices: {1: {textStyle: {color: 'black'}}}
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("allCursorColorPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawAllCursorColorPieChart, false);
}

function drawAllCursorTrailColorPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["색상", "개수"],
    ["노란색", 95],
    ["파란색", 44],
    ["하얀색", 30],
    ["빨간색", 16],
    ["분홍색", 9],
    ["초록색", 6],
    ["연보라색", 6],
  ]);

  const options = {
    title: "커서 트레일 색상",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
    colors: ["#ff9900", "#3366cc", "#e0e0e0", "#dc3912", "#f06292", "#109618", "#ba68c8"],
    slices: {2: {textStyle: {color: 'black'}}}
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("allCursorTrailColorPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawAllCursorTrailColorPieChart, false);
}

function drawTournamentParticipationFrequencyPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["빈도", "인원수"],
    ["자주 참가한다", 10],
    ["가끔 참가한다", 36],
    ["거의 참가하지 않는다", 35],
    ["대회에 참가해 본 적이 없다", 50],
  ]);

  const options = {
    title: "대회 참가 빈도",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("tournamentParticipationFrequencyPieChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawTournamentParticipationFrequencyPieChart,
    false
  );
}

function drawReasonForNonParticipationColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["이유", "인원수"],
    ["실력이 부족하다고 생각해서", 86],
    ["긴장을 잘 타서", 51],
    ["일정이 잘 맞지 않아서", 37],
    ["다른 사람들과 커뮤니케이션하는 것이 꺼려져서", 20],
    ["방송에 내 플레이가 송출되는 것이 부담스러워서", 6],
    ["현재 랭킹이 대회 참여에 불리해서", 6],
    ["기타", 16],
  ]);

  const options = {
    title: "대회에 자주 참가하지 않는 이유",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("reasonForNonParticipationColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawReasonForNonParticipationColumnChart,
    false
  );
}

function drawSupporterStatusPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["상태", "인원수"],
    ["현재 서포터를 유지하고 있다", 68],
    ["서포터를 사용해 본 적은 있지만, 현재는 유지하고 있지 않다", 49],
    ["서포터를 사용해 본 적이 없다", 14],
  ]);

  const options = {
    title: "서포터 상태",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("supporterStatusPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawSupporterStatusPieChart, false);
}

function drawSupporterFirstReasonPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["혜택", "인원수"],
    ["국가 순위 / 친구 순위 / 모드순 필터링 리더보드 열람", 38],
    ["osu!direct + 멀티플레이와 관전 시 비트맵 자동 다운로드", 23],
    ["프로필 커버 변경 가능", 3],
    ["추가 스키닝 가능 옵션 (메인 메뉴 배경, 게임 실행 / 종료 시 음성)", 1],
    ["공식 홈페이지에서의 추가 비트맵 검색 옵션", 1],
    ["*유저 프로필 편집", 1],
  ]);

  const options = {
    title: "자신에게 가장 유용하다고 생각되는 혜택",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("supporterFirstReasonPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawSupporterFirstReasonPieChart, false);
}

function drawSupporterSecondReasonPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["혜택", "인원수"],
    ["osu!direct + 멀티플레이와 관전 시 비트맵 자동 다운로드", 28],
    ["국가 순위 / 친구 순위 / 모드순 필터링 리더보드 열람", 21],
    ["추가 스키닝 가능 옵션 (메인 메뉴 배경, 게임 실행 / 종료 시 음성)", 7],
    ["프로필 커버 변경 가능", 5],
    ["최대 즐겨찾기 수 증가", 2],
    ["최대 친구 수 증가", 1],
    ["공식 홈페이지에서의 추가 비트맵 검색 옵션", 1],
    ["업로드 가능한 Pending 비트맵 수 증가", 1],
    ["*닉네임 변경 초회 무료", 1]
  ]);

  const options = {
    title: "자신에게 두 번째로 유용하다고 생각되는 혜택",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("supporterSecondReasonPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawSupporterSecondReasonPieChart, false);
}

function drawSupporterThirdReasonPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["혜택", "인원수"],
    ["프로필 커버 변경 가능", 23],
    ["추가 스키닝 가능 옵션 (메인 메뉴 배경, 게임 실행 / 종료 시 음성)", 11],
    ["osu!direct + 멀티플레이와 관전 시 비트맵 자동 다운로드", 9],
    ["공식 홈페이지에서의 추가 비트맵 검색 옵션", 9],
    ["최대 즐겨찾기 수 증가", 5],
    ["국가 순위 / 친구 순위 / 모드순 필터링 리더보드 열람", 4],
    ["최대 친구 수 증가", 3],
    ["업로드 가능한 Pending 비트맵 수 증가", 1],
    ["*유저 프로필 편집", 1],
  ]);

  const options = {
    title: "자신에게 세 번째로 유용하다고 생각되는 혜택",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("supporterThirdReasonPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawSupporterThirdReasonPieChart, false);
}

function drawSupporterTotalReasonColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["혜택", "인원수"],
    ["국가 순위 / 친구 순위 / 모드순 필터링 리더보드 열람", 63],
    ["osu!direct + 멀티플레이와 관전 시 비트맵 자동 다운로드", 60],
    ["프로필 커버 변경 가능", 31],
    ["추가 스키닝 가능 옵션 (메인 메뉴 배경, 게임 실행 / 종료 시 음성)", 19],
    ["공식 홈페이지에서의 추가 비트맵 검색 옵션", 11],
    ["최대 즐겨찾기 수 증가", 7],
    ["최대 친구 수 증가", 4],
    ["업로드 가능한 Pending 비트맵 수 증가", 2],
    ["*유저 프로필 편집", 2],
    ["*닉네임 변경 초회 무료", 1],
  ]);

  const options = {
    title: "유용하다고 생각되는 혜택",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    vAxis: {
      ticks: [0, 10, 20, 30, 40, 50, 60, 68]
    }
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("supporterTotalReasonColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawSupporterTotalReasonColumnChart, false);
}

function drawReasonForNonMaintenanceColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["혜택", "인원수"],
    ["서포터를 유지함으로써 받을 수 있는 혜택이 매력적이지 않아서", 16],
    [
      "닉네임 변경이나 프로필 꾸미기만을 목적으로 서포터를 구입했던 것이어서",
      15,
    ],
    [
      "이벤트에 참여해 받은 서포터였을 뿐, 그걸 내 돈 내고 사용하고 싶진 않아서",
      14,
    ],
    ["최근 오스를 할 시간이 없어서", 8],
    ["가격이 비싸서", 3],
    ["예전의 실력이 나오지 않아 리더보드 열람의 재미가 하락해서", 1],
  ]);

  const options = {
    title: "서포터를 유지하지 않는 이유",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("reasonForNonMaintenanceColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawReasonForNonMaintenanceColumnChart,
    false
  );
}

function drawSupporterTotalAmountColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["금액", "인원수"],
    ["0원", 34],
    ["1원 ~ 1만원", 16],
    ["1 ~ 3만원", 23],
    ["3 ~ 5만원", 20],
    ["5 ~ 10만원", 14],
    ["10 ~ 20만원", 17],
    ["20 ~ 30만원", 5],
    ["30만원 이상", 2],
  ]);

  const options = {
    title: "총 후원 금액",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("supporterTotalAmountColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawSupporterTotalAmountColumnChart, false);
}

function drawLazerChangesAwarenessPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["인식도", "인원수"],
    ["잘 알고 있다", 10],
    ["대략적으로는 알고 있다", 56],
    ["거의 모른다", 37],
    ["전혀 모른다", 28],
  ]);

  const options = {
    title: "레이저 변경 사항 인식도",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("lazerChangesAwarenessPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawLazerChangesAwarenessPieChart, false);
}

function drawPreferredClientPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["클라이언트", "인원수"],
    ["기존 클라이언트", 90],
    ["레이저", 27],
    ["기타", 14],
  ]);

  const options = {
    title: "선호하는 클라이언트",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("preferredClientPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawPreferredClientPieChart, false);
}

function drawLazerScoreColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["선호도", "인원수"],
    ["1 (전혀 마음에 들지 않는다)", 7],
    ["2", 10],
    ["3", 13],
    ["4", 47],
    ["5", 19],
    ["6", 25],
    ["7 (매우 마음에 든다)", 10],
  ]);

  const options = {
    title: "레이저에 대한 생각",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("lazerScoreColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawLazerScoreColumnChart, false);
}

function drawLazerGoodPartColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["마음에 드는 부분", "인원수"],
    ["UI/UX/애니메이션 등 전체적인 디자인", 38],
    ["노트락 삭제", 18],
    ["배속 기능 추가", 16],
    ["다양한 모드 추가", 14],
    ["인게임에서 공식 홈페이지 사용", 11],
    ["ScoreV2 도입", 9],
    ["UI 커스텀", 8],
    ["멀티플레이 개편", 7],
    ['기타', 39],
    ['잘 모르겠음', 13],
    ['마음에 드는 부분이 없음', 11]
  ]);

  const options = {
    title: "레이저의 변경 사항 중 마음에 드는 부분",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("lazerGoodPartColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawLazerGoodPartColumnChart, false);
}

function drawLazerBadPartColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["마음에 들지 않는 부분", "인원수"],
    ["UI/UX/애니메이션 등 전체적인 디자인", 34],
    ["인풋렉/프레임 드랍 등 최적화 이슈", 23],
    ["ScoreV2 도입", 17],
    ["익숙하지 않아 적응하기 힘들 것 같음", 12],
    ["굳이 넘어갈 이유가 없는 것 같음", 5],
    ["스킨 자유도 하락", 5],
    ["개발이 너무 오래 걸림", 4],
    ['기타', 33],
    ['잘 모르겠음', 17],
    ['마음에 들지 않는 부분이 없음', 16]
  ]);

  const options = {
    title: "레이저의 변경 사항 중 마음에 들지 않는 부분",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("lazerBadPartColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawLazerBadPartColumnChart, false);
}

function drawHabitColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["습관", "인원수"],
    ["세팅 / 자세", 49],
    ["커서", 35],
    ["허공에 연타", 12],
    ["스모크", 8],
    ["태핑", 8],
    ["점수판 / 정확도 등 수시로 확인", 7],
    ["입력 횟수", 5],
    ["기타", 19],
    ['이렇다 할 습관이 없음', 29]
  ]);

  const options = {
    title: "습관 / 루틴 / 강박",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("habitColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawHabitColumnChart, false);
}

function drawPreferredMusicGenreColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["장르", "인원수"],
    ["팝 (+ J-POP)", 39],
    ["락 (+ J-ROCK)", 21],
    ["애니송", 21],
    ["일렉트로닉", 19],
    ["퓨쳐 / 카와이 베이스", 10],
    ["보컬로이드", 9],
    ["게임 음악", 9],
    ["동방", 7],
    ["EDM", 6],
    ["재즈", 5],
    ["기타", 63],
    ["딱히 장르를 가리지 않는다", 16]
  ]);

  const options = {
    title: "선호하는 음악 장르",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("preferredMusicGenreColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawPreferredMusicGenreColumnChart, false);
}

function drawGalleryStartDateColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["연도", "인원수"],
    ["2017", 2],
    ["2018", 5],
    ["2019", 13],
    ["2020", 14],
    ["2021", 20],
    ["2022", 36],
    ["2023", 34],
    ["2024", 4],
  ]);

  const options = {
    title: "스탠갤 시작 연도 (Osu! 갤러리 시절 포함)",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "5%",
      width: "100%",
      height: "85%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("galleryStartDateColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawGalleryStartDateColumnChart, false);
}

function drawGalleryPlayStartMonthColumnChart() {
  const data = google.visualization.arrayToDataTable([
    ["월", "인원수"],
    ["1월", 18],
    ["2월", 4],
    ["3월", 10],
    ["4월", 4],
    ["5월", 8],
    ["6월", 6],
    ["7월", 5],
    ["8월", 6],
    ["9월", 4],
    ["10월", 10],
    ["11월", 8],
    ["12월", 17],
  ]);

  const options = {
    title: "스탠갤 시작 월",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "15%",
      top: "10%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    bar: { groupWidth: "100%" },
  };

  const chart = new google.visualization.ColumnChart(
    document.getElementById("galleryPlayStartMonthColumnChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawGalleryPlayStartMonthColumnChart, false);
}

function drawVisionCorrectedOrNotPieChart() {
  const data = google.visualization.arrayToDataTable([
    ["여부", "인원수"],
    ["O", 83],
    ["X", 48],
  ]);

  const options = {
    title: "안경 착용 여부",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("visionCorrectedOrNotPieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawVisionCorrectedOrNotPieChart, false);
}

function drawVisionWithoutCorrectionScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "오른눈");
  data.addColumn("number", "왼눈");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [ 0.8, 0.8, '왼눈: 0.8, 오른눈: 0.8 (2명)' ],
    [ 1, 1, '왼눈: 1.0, 오른눈: 1.0 (9명)' ],
    [ 1.5, 1.5, '왼눈: 1.5, 오른눈: 1.5 (7명)' ],
    [ 0.7, 0.3, '왼눈: 0.3, 오른눈: 0.7 (2명)' ],
    [ 0.5, 0.5, '왼눈: 0.5, 오른눈: 0.5 (3명)' ],
    [ 2, 1.5, '왼눈: 1.5, 오른눈: 2.0' ],
    [ 1, 0.7, '왼눈: 0.7, 오른눈: 1.0' ],
    [ 1, 1.2, '왼눈: 1.2, 오른눈: 1.0' ],
    [ 0.3, 0.1, '왼눈: 0.1, 오른눈: 0.3' ],
    [ 1.2, 1.5, '왼눈: 1.5, 오른눈: 1.2' ],
    [ 2, 2, '왼눈: 2.0, 오른눈: 2.0 (2명)' ],
    [ 0.6, 1, '왼눈: 1.0, 오른눈: 0.6' ],
    [ 0.2, 0.2, '왼눈: 0.2, 오른눈: 0.2 (2명)' ],
    [ 0.7, 0.7, '왼눈: 0.7, 오른눈: 0.7' ],
    [ 1, 0.8, '왼눈: 0.8, 오른눈: 1.0' ],
    [ 1.3, 1.2, '왼눈: 1.2, 오른눈: 1.3' ],
    [ 0.3, 0.7, '왼눈: 0.7, 오른눈: 0.3' ],
    [ 1.5, 2, '왼눈: 2.0, 오른눈: 1.5' ],
    [ 0.6, 0.9, '왼눈: 0.9, 오른눈: 0.6' ],
    [ 1.2, 1.8, '왼눈: 1.8, 오른눈: 1.2' ]
  ]);

  const options = {
    title: "안경 미착용 시력",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    trendlines: {
      0: {
        color: "green",
      },
    },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("visionWithoutCorrectionScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawVisionWithoutCorrectionScatterChart,
    false
  );
}

function drawVisionBeforeCorrectionScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "오른눈");
  data.addColumn("number", "왼눈");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [ 0.2, 0.2, '왼눈: 0.2, 오른눈: 0.2 (9명)' ],
    [ 0.2, 0.1, '왼눈: 0.1, 오른눈: 0.2 (3명)' ],
    [ 0.04, 0.07, '왼눈: 0.07, 오른눈: 0.04' ],
    [ 0.7, 0.2, '왼눈: 0.2, 오른눈: 0.7 (2명)' ],
    [ 0.1, 0.1, '왼눈: 0.1, 오른눈: 0.1 (14명)' ],
    [ 0.3, 0.3, '왼눈: 0.3, 오른눈: 0.3 (3명)' ],
    [ 0.6, 0.4, '왼눈: 0.4, 오른눈: 0.6' ],
    [ 0.5, 0.5, '왼눈: 0.5, 오른눈: 0.5' ],
    [ 0.08, 0.08, '왼눈: 0.08, 오른눈: 0.08 (2명)' ],
    [ 0.05, 0.05, '왼눈: 0.05, 오른눈: 0.05' ],
    [ 0.05, 0.3, '왼눈: 0.3, 오른눈: 0.05' ],
    [ 0.04, 0.04, '왼눈: 0.04, 오른눈: 0.04 (2명)' ],
    [ 0.5, 0.2, '왼눈: 0.2, 오른눈: 0.5 (2명)' ],
    [ 0.4, 0.2, '왼눈: 0.2, 오른눈: 0.4' ],
    [ 0.5, 0.3, '왼눈: 0.3, 오른눈: 0.5 (2명)' ],
    [ 0.1, 0.2, '왼눈: 0.2, 오른눈: 0.1' ],
    [ 0.6, 0.2, '왼눈: 0.2, 오른눈: 0.6' ],
    [ 0.3, 0.1, '왼눈: 0.1, 오른눈: 0.3' ],
    [ 0.03, 0.1, '왼눈: 0.1, 오른눈: 0.03' ],
    [ 0.04, 0.06, '왼눈: 0.06, 오른눈: 0.04' ],
    [ 0.3, 0.2, '왼눈: 0.2, 오른눈: 0.3 (2명)' ],
    [ 0.4, 1, '왼눈: 1.0, 오른눈: 0.4' ],
    [ 0.4, 0.4, '왼눈: 0.4, 오른눈: 0.4 (2명)' ],
    [ 0.06, 0.06, '왼눈: 0.06, 오른눈: 0.06 (2명)' ],
    [ 0.8, 0.6, '왼눈: 0.6, 오른눈: 0.8' ],
    [ 0.07, 0.07, '왼눈: 0.07, 오른눈: 0.07' ],
    [ 0.01, 0.01, '왼눈: 0.01, 오른눈: 0.01 (2명)' ],
    [ 0.4, 0.3, '왼눈: 0.3, 오른눈: 0.4' ],
    [ 0.03, 0.05, '왼눈: 0.05, 오른눈: 0.03' ],
    [ 0.2, 0.4, '왼눈: 0.4, 오른눈: 0.2' ],
    [ 0.03, 0.03, '왼눈: 0.03, 오른눈: 0.03' ],
    [ 0.05, 0.01, '왼눈: 0.01, 오른눈: 0.05' ],
  ]);

  const options = {
    title: "안경 착용 전 시력",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    trendlines: {
      0: {
        color: "green",
      },
    },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("visionBeforeCorrectionScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawVisionBeforeCorrectionScatterChart,
    false
  );
}

function drawVisionAfterCorrectionScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "오른눈");
  data.addColumn("number", "왼눈");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [ 1, 1, '왼눈: 1.0, 오른눈: 1.0 (38명)' ],
    [ 1.3, 1.1, '왼눈: 1.1, 오른눈: 1.3' ],
    [ 0.8, 0.9, '왼눈: 0.9, 오른눈: 0.8' ],
    [ 0.9, 0.9, '왼눈: 0.9, 오른눈: 0.9 (4명)' ],
    [ 1.2, 1.2, '왼눈: 1.2, 오른눈: 1.2 (4명)' ],
    [ 1.2, 1, '왼눈: 1.0, 오른눈: 1.2' ],
    [ 0.5, 0.9, '왼눈: 0.9, 오른눈: 0.5' ],
    [ 0.8, 0.8, '왼눈: 0.8, 오른눈: 0.8 (13명)' ],
    [ 0.7, 0.7, '왼눈: 0.7, 오른눈: 0.7 (4명)' ],
    [ 0.6, 0.6, '왼눈: 0.6, 오른눈: 0.6' ],
    [ 0.7, 0.8, '왼눈: 0.8, 오른눈: 0.7' ],
    [ 1.5, 0.2, '왼눈: 0.2, 오른눈: 1.5' ],
    [ 1, 0.9, '왼눈: 0.9, 오른눈: 1.0' ],
    [ 1.3, 1.2, '왼눈: 1.2, 오른눈: 1.3 (3명)' ],
    [ 0.7, 0.4, '왼눈: 0.4, 오른눈: 0.7' ],
    [ 0.8, 0.7, '왼눈: 0.7, 오른눈: 0.8' ],
    [ 0.9, 1, '왼눈: 1.0, 오른눈: 0.9' ],
    [ 1.1, 1.1, '왼눈: 1.1, 오른눈: 1.1' ],
    [ 0.7, 0.5, '왼눈: 0.5, 오른눈: 0.7' ] 
  ]);

  const options = {
    title: "안경 착용 후 시력",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    trendlines: {
      0: {
        color: "green",
      },
    },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("visionAfterCorrectionScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener(
    "resize",
    drawVisionAfterCorrectionScatterChart,
    false
  );
}

function drawTotalFinalVisionScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "오른눈");
  data.addColumn("number", "왼눈");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [ 1, 1, '왼눈: 1.0, 오른눈: 1.0 (47명)' ],
    [ 1.3, 1.1, '왼눈: 1.1, 오른눈: 1.3' ],
    [ 0.8, 0.8, '왼눈: 0.8, 오른눈: 0.8 (15명)' ],
    [ 1.5, 1.5, '왼눈: 1.5, 오른눈: 1.5 (7명)' ],
    [ 0.8, 0.9, '왼눈: 0.9, 오른눈: 0.8' ],
    [ 0.9, 0.9, '왼눈: 0.9, 오른눈: 0.9 (4명)' ],
    [ 1.2, 1.2, '왼눈: 1.2, 오른눈: 1.2 (4명)' ],
    [ 1.2, 1, '왼눈: 1.0, 오른눈: 1.2' ],
    [ 0.5, 0.9, '왼눈: 0.9, 오른눈: 0.5' ],
    [ 0.7, 0.3, '왼눈: 0.3, 오른눈: 0.7 (2명)' ],
    [ 0.5, 0.5, '왼눈: 0.5, 오른눈: 0.5 (3명)' ],
    [ 2, 1.5, '왼눈: 1.5, 오른눈: 2.0' ],
    [ 0.7, 0.7, '왼눈: 0.7, 오른눈: 0.7 (5명)' ],
    [ 1, 0.7, '왼눈: 0.7, 오른눈: 1.0' ],
    [ 0.6, 0.6, '왼눈: 0.6, 오른눈: 0.6' ],
    [ 0.7, 0.8, '왼눈: 0.8, 오른눈: 0.7' ],
    [ 1, 1.2, '왼눈: 1.2, 오른눈: 1.0' ],
    [ 1.5, 0.2, '왼눈: 0.2, 오른눈: 1.5' ],
    [ 0.3, 0.1, '왼눈: 0.1, 오른눈: 0.3' ],
    [ 1, 0.9, '왼눈: 0.9, 오른눈: 1.0' ],
    [ 1.2, 1.5, '왼눈: 1.5, 오른눈: 1.2' ],
    [ 2, 2, '왼눈: 2.0, 오른눈: 2.0 (2명)' ],
    [ 1.3, 1.2, '왼눈: 1.2, 오른눈: 1.3 (4명)' ],
    [ 0.6, 1, '왼눈: 1.0, 오른눈: 0.6' ],
    [ 0.2, 0.2, '왼눈: 0.2, 오른눈: 0.2 (2명)' ],
    [ 1, 0.8, '왼눈: 0.8, 오른눈: 1.0' ],
    [ 0.7, 0.4, '왼눈: 0.4, 오른눈: 0.7' ],
    [ 0.8, 0.7, '왼눈: 0.7, 오른눈: 0.8' ],
    [ 0.3, 0.7, '왼눈: 0.7, 오른눈: 0.3' ],
    [ 0.9, 1, '왼눈: 1.0, 오른눈: 0.9' ],
    [ 1.1, 1.1, '왼눈: 1.1, 오른눈: 1.1' ],
    [ 1.5, 2, '왼눈: 2.0, 오른눈: 1.5' ],
    [ 0.6, 0.9, '왼눈: 0.9, 오른눈: 0.6' ],
    [ 1.2, 1.8, '왼눈: 1.8, 오른눈: 1.2' ],
    [ 0.7, 0.5, '왼눈: 0.5, 오른눈: 0.7' ]
  ]);

  const options = {
    title: "최종 시력",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
    trendlines: {
      0: {
        color: "green",
      },
    },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("totalFinalVisionScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawTotalFinalVisionScatterChart, false);
}

function drawBirthYearScatterChart() {
  let data = new google.visualization.DataTable();
  data.addColumn("number", "출생 연도");
  data.addColumn("number", "인원수");
  data.addColumn({ type: "string", role: "tooltip" });
  data.addRows([
    [ 1993, 0, '1993년' ],
    [ 1998, 0, '1998년' ],
    [ 1998, 1, '1998년' ],
    [ 1999, 0, '1999년' ],
    [ 1999, 1, '1999년' ],
    [ 2000, 0, '2000년' ],
    [ 2000, 1, '2000년' ],
    [ 2000, 2, '2000년' ],
    [ 2001, 0, '2001년' ],
    [ 2001, 1, '2001년' ],
    [ 2001, 2, '2001년' ],
    [ 2002, 0, '2002년' ],
    [ 2003, 0, '2003년' ],
    [ 2003, 1, '2003년' ],
    [ 2003, 2, '2003년' ],
    [ 2004, 0, '2004년' ],
    [ 2004, 1, '2004년' ],
    [ 2004, 2, '2004년' ],
    [ 2004, 3, '2004년' ],
    [ 2004, 4, '2004년' ],
    [ 2004, 5, '2004년' ],
    [ 2004, 6, '2004년' ],
    [ 2005, 0, '2005년' ],
    [ 2005, 1, '2005년' ],
    [ 2005, 2, '2005년' ],
    [ 2006, 0, '2006년' ],
    [ 2006, 1, '2006년' ],
    [ 2006, 2, '2006년' ],
    [ 2006, 3, '2006년' ],
    [ 2007, 0, '2007년' ],
    [ 2008, 0, '2008년' ],
    [ 2009, 0, '2009년' ],
    [ 1999, 2, '1999년' ],
    [ 1999, 3, '1999년' ],
    [ 1999, 4, '1999년' ],
    [ 2000, 3, '2000년' ],
    [ 2001, 3, '2001년' ],
    [ 2001, 4, '2001년' ],
    [ 2001, 5, '2001년' ],
    [ 2001, 6, '2001년' ],
    [ 2001, 7, '2001년' ],
    [ 2001, 8, '2001년' ],
    [ 2002, 1, '2002년' ],
    [ 2002, 2, '2002년' ],
    [ 2003, 3, '2003년' ],
    [ 2004, 7, '2004년' ],
    [ 2004, 8, '2004년' ],
    [ 2004, 9, '2004년' ],
    [ 2005, 3, '2005년' ],
    [ 2005, 4, '2005년' ],
    [ 2005, 5, '2005년' ],
    [ 2005, 6, '2005년' ],
    [ 2005, 7, '2005년' ],
    [ 2005, 8, '2005년' ],
    [ 2005, 9, '2005년' ],
    [ 2006, 4, '2006년' ],
    [ 2006, 5, '2006년' ],
    [ 2007, 1, '2007년' ],
    [ 2007, 2, '2007년' ],
    [ 2007, 3, '2007년' ],
    [ 2007, 4, '2007년' ],
    [ 2007, 5, '2007년' ],
    [ 2008, 1, '2008년' ],
    [ 2008, 2, '2008년' ],
    [ 1997, 0, '1997년' ],
    [ 1998, 2, '1998년' ],
    [ 1998, 3, '1998년' ],
    [ 1998, 4, '1998년' ],
    [ 1999, 5, '1999년' ],
    [ 1999, 6, '1999년' ],
    [ 1999, 7, '1999년' ],
    [ 1999, 8, '1999년' ],
    [ 1999, 9, '1999년' ],
    [ 1999, 10, '1999년' ],
    [ 1999, 11, '1999년' ],
    [ 2000, 4, '2000년' ],
    [ 2000, 5, '2000년' ],
    [ 2000, 6, '2000년' ],
    [ 2001, 9, '2001년' ],
    [ 2001, 10, '2001년' ],
    [ 2001, 11, '2001년' ],
    [ 2001, 12, '2001년' ],
    [ 2001, 13, '2001년' ],
    [ 2001, 14, '2001년' ],
    [ 2001, 15, '2001년' ],
    [ 2001, 16, '2001년' ],
    [ 2001, 17, '2001년' ],
    [ 2002, 3, '2002년' ],
    [ 2002, 4, '2002년' ],
    [ 2002, 5, '2002년' ],
    [ 2002, 6, '2002년' ],
    [ 2003, 4, '2003년' ],
    [ 2003, 5, '2003년' ],
    [ 2003, 6, '2003년' ],
    [ 2003, 7, '2003년' ],
    [ 2003, 8, '2003년' ],
    [ 2003, 9, '2003년' ],
    [ 2004, 10, '2004년' ],
    [ 2004, 11, '2004년' ],
    [ 2004, 12, '2004년' ],
    [ 2004, 13, '2004년' ],
    [ 2004, 14, '2004년' ],
    [ 2004, 15, '2004년' ],
    [ 2004, 16, '2004년' ],
    [ 2004, 17, '2004년' ],
    [ 2004, 18, '2004년' ],
    [ 2004, 19, '2004년' ],
    [ 2004, 20, '2004년' ],
    [ 2005, 10, '2005년' ],
    [ 2005, 11, '2005년' ],
    [ 2005, 12, '2005년' ],
    [ 2005, 13, '2005년' ],
    [ 2005, 14, '2005년' ],
    [ 2005, 15, '2005년' ],
    [ 2005, 16, '2005년' ],
    [ 2005, 17, '2005년' ],
    [ 2005, 18, '2005년' ],
    [ 2006, 6, '2006년' ],
    [ 2006, 7, '2006년' ],
    [ 2006, 8, '2006년' ],
    [ 2007, 6, '2007년' ],
    [ 2007, 7, '2007년' ],
    [ 2007, 8, '2007년' ],
    [ 2007, 9, '2007년' ],
    [ 2007, 10, '2007년' ],
    [ 2006, 9, '2006년' ],
    [ 2007, 11, '2007년' ],
    [ 2007, 12, '2007년' ]
  ]);

  const options = {
    title: "출생 연도",
    width: "100%",
    chartArea: {
      left: "7%",
      right: "2%",
      top: "5%",
      bottom: "10%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.ScatterChart(
    document.getElementById("birthYearScatterChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawBirthYearScatterChart, false);
}

function drawMilitaryServicePieChart() {
  const data = google.visualization.arrayToDataTable([
    ["상황", "인원수"],
    ["현역", 42],
    ["보충역", 17],
    ["면제", 3],
    ["미필", 67],
    ["기타", 3]
  ]);

  const options = {
    title: "병역 이행 상황",
    width: "100%",
    chartArea: {
      left: "5%",
      right: "0%",
      top: "10%",
      bottom: "5%",
      width: "100%",
      height: "100%",
    },
  };

  const chart = new google.visualization.PieChart(
    document.getElementById("militaryServicePieChart")
  );

  chart.draw(data, options);
  window.addEventListener("resize", drawMilitaryServicePieChart, false);
}