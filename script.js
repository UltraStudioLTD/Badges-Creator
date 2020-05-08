// https://img.shields.io/badge/[name]-[desc]-[color]

function generate() {
    var name = document.getElementById('badge-name').value;
    var desc = document.getElementById('badge-description').value;
    var col = String(document.getElementById('badge-color').value).slice(1);
    var link = 'https://img.shields.io/badge/' + name + '-' + desc + '-' + col;
    console.log(col);
    console.log(link);
    var link_text = document.getElementById('link-text');
    link_text.innerText = link;
    document.getElementById('display').innerHTML = '<img src="https://img.shields.io/badge/' + name + '-' + desc + '-' + col + '" />';
    document.getElementById('copy-icon').style.display = 'block';
}
function copy() {
    url_text = document.getElementById('link-text');
    url_text.select;
    document.execCommand('copy');
    alert('Link Copied: ' + url_text.value);
};