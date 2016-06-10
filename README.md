# tree-clean
Lets you prune a tree via a callback similar to JS's build in Array.prototype.filter

[![npm version](https://badge.fury.io/js/tree-clean.svg)](https://badge.fury.io/js/tree-clean) [![dependencies](https://david-dm.org/arupex/tree-clean.svg)](http://github.com/arupex/tree-clean) ![Build Status](https://api.travis-ci.org/arupex/tree-clean.svg?branch=master) <a href='https://pledgie.com/campaigns/31873'><img alt='Pledge To Arupex!' src='https://pledgie.com/campaigns/31873.png?skin_name=chrome' border='0' ></a>


Install

    npm install tree-clean --save


How To Use:

    var treeClean = require('tree-clean')('name');

    var tree = [{
                       name : 'parent',
                       children : [
                           {
                               name : 'child1',
                               children : [
                                   {
                                       name : 'child1Deep1'
                                   },
                                   {
                                       name : 'child1Deep2'
                                   }
                               ]
                           },
                           {
                               name : 'child2',
                               children : [
                                   {
                                       name : 'child2Deep1'
                                   },
                                   {
                                       name : 'child2Deep2'
                                   }
                               ]
                           }
                       ]
                   }];

    var myTreeResult = treeClean(tree, function(node, parent){
        return node&& node.name && (node.name.indexOf('1') > -1 || node.name === 'parent');
    });

Expected Output:

    myTreeResult = [{
            name : 'parent',
            children : [
                {
                    name : 'child1',
                    children : [
                        {
                            name : 'child1Deep1'
                        },
                        {
                            name : 'child1Deep2'
                        }
                    ]
                }
            ]
        }]
