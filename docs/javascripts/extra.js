document.addEventListener("DOMContentLoaded", function() {
    // 自动记录页面访问
    var currentPath = window.location.pathname;
    var visitLog = JSON.parse(localStorage.getItem("visitLog") || "{}");
    visitLog[currentPath] = {
        lastVisit: new Date().toISOString(),
        count: (visitLog[currentPath]?.count || 0) + 1
    };
    localStorage.setItem("visitLog", JSON.stringify(visitLog));

    // 学习进度标记功能
    document.querySelectorAll(".md-content__inner details").forEach(function(detail) {
        var summary = detail.querySelector("summary");
        if (summary && summary.textContent.includes("学习进度")) {
            detail.setAttribute("open", "");
        }
    });

    // 为外部链接添加新窗口打开
    document.querySelectorAll('a[href^="http"]').forEach(function(link) {
        if (!link.hostname.includes("github.io")) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        }
    });
});