const fs = require('fs');
const pathlib=require('path');
const paths = ["d:\\book"]

let selectList = [],sup=[".pdf"]

// console.log(paths);
paths.forEach(path => {
    const findPdf = (sp) => {
        fs.readdirSync(sp).map(mp => {
            const mmpath=`${sp}\\${mp}`
            const mmp = fs.statSync(mmpath);
            if(mmp.isDirectory()){
                if(mp.startsWith(".")){
                    return;
                }
                findPdf(mmpath)
            }else if (mmp.isFile()) {
                const Suffix=pathlib.extname(mmpath).toLowerCase()
                if(sup.indexOf(Suffix)==-1){
                    return
                }
                selectList.push(mmpath)
            }
        })
    }
    findPdf(path)
})
console.log(selectList);