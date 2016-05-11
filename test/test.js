/**
 * Created by dirwin517 on 5/10/16.
 */


describe('test tree clean', function(){
    var treeClean = require('../index')('name');

    var assert = require('chai').assert;

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
    },
    {
        name : 'parent2',
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

    it('clean all but parent and nodes containing 1 in their name', function(){
        var cleanedTree = treeClean(tree, function(node, parent){
            return node&& node.name && (node.name.indexOf('1') > -1 || node.name === 'parent');
        });

        assert.deepEqual(cleanedTree, [{
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
        }]);

    });


    it('clean all, bug discovered May 11, 2016', function(){
        var cleanedTree = treeClean([
            {
                "name": "1"
            },
            {
                "name": "5"
            },
            {
                "name": "9"
            }
        ], function(node, parent){
            return false;
        });

        assert.deepEqual(cleanedTree, []);

    });


    // worked when bug discovered but want more test coverage bug discovered May 11, 2016
    it('clean all children', function(){
        var cleanedTree = treeClean([
            {
                "name": "1",
                "children": [
                    {
                        "name": "2"
                    },
                    {
                        "name": "3"
                    },
                    {
                        "name": "4"
                    }
                ]
            }
        ], function(node, parent){
            return node.name === '1';
        });

        assert.deepEqual(cleanedTree, [{
            name : '1'
        }]);

    });

});
