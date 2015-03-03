var fp = require('./fp');
var bt = require('./bt');

if ( ! exports )
   var exports = [ ];

var insert = function (value,tree) {
    if(bt.isEmpty(tree)){
        return bt.makeTree(value, [], []);
    }else{
        if(bt.isLeaf(tree)){
            if(fp.isLT(value, bt.root(tree))){
                return 
            }
        }
    }
}

var makeBST = function (ns) {

    /* to be completed */
}


var isBST = function (tree) {

    /* to be completed */
}

var find = function (value,tree) {

    /* to be completed */
}

var inorder = function (tree) {

    /* to be completed */
}

var curryLandR = function (f) {

    /* to be completed */
}

var compose = function (list) {

    /* to be completed */
}

var xerox = function (ns) {

    /* to be completed */
}

var minima = function (ns) {

    /* to be completed */
}

var convert = function (ns) {

    /* to be completed */
}

var map = function (f,ns) {

    /* to be completed */
}

exports.insert = insert;
exports.makeBST = makeBST;
exports.isBST = isBST;
exports.find = find;
exports.inorder = inorder;
exports.curryLandR = curryLandR;
exports.compose = compose;
exports.xerox = xerox;
exports.minima = minima;
exports.convert = convert;
exports.map = map;
