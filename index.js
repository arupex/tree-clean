/*
 * Created by dirwin517 on 5/10/16.
 */

'use strict';

/**
 *
 * @param {String} identifier - unique identifier for each node, for searching children when doing parental removal
 *
 * @returns {function} arrayTreeFilter - closure that searches a tree using a filterFunction
 *
 * @constructor
 */
function TreeFilter(identifier) {
    identifier = identifier || 'id';

    var treeIterator = typeof TreeIterator !== 'undefined'? TreeIterator : require('tree-iterate');

    /**
     *  Filters Tree INPLACE! clone before if you dont want it filtered inplace ( this is fastest )
     *      you could be lazy and clone with JSON.parse(JSON.stringify(myTree)) if your tree is a object literal with no
     *      functions or any oddities
     *
     * @param {tree} tree - tree you are filtering
     * @param {function} filterFn - filter function takes in a node and parent result determines if children are pruned
     *
     * @returns {tree}
     */
    function arrayTreeFilter(tree, filterFn) {
        treeIterator(tree, function (node, parent) {
            if (!filterFn(node)) {

                var index = 0;
                if(parent.children) {
                    parent.children.forEach(function children(child) {

                        if (child[identifier] === node[identifier]) {

                            delete parent.children[index];

                            parent.children = parent.children.filter(function (child) {
                                return child == null ? false : true;
                            });

                            if (parent.children.length === 0) {
                                delete parent.children;
                            }
                        }
                        index++;
                    });
                }
            }
            return true;
        });
        return tree;
    }
    return arrayTreeFilter;
};


//Make it useable in browser as well
if(typeof module !== 'undefined'){
    module.exports = TreeFilter;
}