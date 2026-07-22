function updateTime() {
    const now = new Date();

    document.getElementById("time").innerText =
        now.toLocaleString("zh-CN");
}

setInterval(updateTime, 1000);
updateTime();

const table = document.getElementById("fundTable");

funds.forEach(fund => {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${fund.code}</td>
        <td>${fund.name}</td>
        <td>${fund.premium}%</td>
        <td>${fund.turnover}</td>
        <td>${fund.limit}</td>
        <td>${fund.settlement}</td>
        <td>${fund.score}</td>
    `;

    table.appendChild(row);

});
