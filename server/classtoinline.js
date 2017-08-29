var text = (document.querySelectorAll("#mpcp-req-mid >table>tbody>tr:nth-child(4)>td")[1]).innerHTML;

match =str.match(/class=(\"[\w\s\-]+\")/);
var classname=(match[0].split('='))[1].split('"')[1];

function getCSSProperties(style, selector, sheet) {
    var sheets = typeof sheet !== 'undefined' ? [sheet] : document.styleSheets;
    for (var i = 0, l = sheets.length; i < l; i++) {
        var sheet = sheets[i];
        if( !sheet.cssRules ) { continue; }
        for (var j = 0, k = sheet.cssRules.length; j < k; j++) {
            var rule = sheet.cssRules[j];
            if (rule.selectorText && rule.selectorText.split(',').indexOf(selector) !== -1) {
                return rule.style[style];
            }
        }
    }
    return null;
};

var properties=['color', 'font-style'];

getCSSProperties('color', "."+classname);

var text1 = document.querySelectorAll("#mpcp-req-mid >table>tbody>tr:nth-child(4)>td")[1];

var txt2=text1.getElementsByClassName(classname);
txt2[0].style.color='blue'