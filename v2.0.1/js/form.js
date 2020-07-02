
// URLからパラメータを取得して返す
function getParam(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

// Formにパラメータをセットする
function setParams(paramNames) {
    paramNames.forEach(function(paramName){
        setParam(paramName);
    });
}
function setParam(paramName, defaultValue) {
    // param取得
    var paramValue = getParam(paramName);
    if (paramValue) {} else {
        if (defaultValue == null) {
            return;
        } else {
            paramValue = defaultValue;
        }
    }
    // paramのセット
    const e = $("#" + paramName);
    if (e.length) {
        e.val(paramValue);
    } else {
        // radio
        $('[name=' + paramName + '][value="' + paramValue + '"]').prop('checked',true);
    }
}

// Formクエリの変更有無を判定する
var queryIsChangedString = ""; // 変更判定用変数
function queryIsChanged(query) {
    if (query == null) {
        // 引数無しの場合は、判定結果を返す（submit要否判断に使用されることを想定）
        return (queryIsChangedString !== $("#query").serialize());
    } else {
        // 引数有りの場合は、queryをセットする（submit後に実行されることを想定）
        queryIsChangedString = query;
    }
}
