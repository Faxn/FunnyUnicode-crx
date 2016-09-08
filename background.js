

function directCopy(str){
    //based on http://stackoverflow.com/a/12693636
        document.oncopy = function(event) {
    event.clipboardData.setData("Text", str);
    event.preventDefault();
        };
    document.execCommand("Copy");
        document.oncopy = undefined;
}

var tr = {
    'fromList': "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWYXZ",
    'toList': "𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐘𝐗𝐙"
};
tr.toList = Array.from(tr.toList);

function transform(string){
    var out = '';
    for( i in string){
        s = string[i];
        si = tr.fromList.indexOf(s);
        if(si >= 0){
            s = tr.toList[si];
        }
        out = out + s;
    }
    return out;
}


function toQ(info, tab){
    if(info.selectionText){
        out = transform(info.selectionText);
        directCopy(out);
    }else{
        console.log(info);
    }
    
}

//create the button
chrome.contextMenus.create({'contexts':['selection'], 'title':'Copy as 𝐁𝐨𝐥𝐝', 'onclick':toQ});


