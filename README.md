# tree-clean

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
