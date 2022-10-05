var request = require('request-promise');
var a = new Array();
async function associados() {
    var data = {
        array: 1
    }
    var options = {
        method: 'POST',
        uri: 'http://127.0.0.1:5000/associados',
        body: data,
        json: true
    };
    var sendrequest = await request(options)
        .then(function (parsedBody) {
            result = parsedBody['result'];
            //console.log(result)
            return result
        })
        .catch(function (err) {
            console.log(err);
        });
        //console.log(r)
    return sendrequest
}

async function trechos(nomes) {
    var data = {
        array: nomes
    }
    var options = {
        method: 'POST',
        uri: 'http://127.0.0.1:5000/trechos',
        body: data,
        json: true
    };
    var sendrequest = await request(options)
        .then(function (parsedBody) {
            result = parsedBody['result'];
            //console.log(result)
            return result
        })
        .catch(function (err) {
            console.log(err);
        });
        //console.log(r)
    return sendrequest
}
//console.log(arraysum().resolve());
//console.log(x)

async function main() {
    var x = await associados()
    var y = await trechos(x)
    // for(i in x[0]){
    //     console.log(x[0][i])
    console.log(x)
    console.log(y)
    }


main()

// (async () => {
//     var x = await arraysum()
//     for(i in x[0]){
//         console.log(x[0][i])
//     }
//  })()

