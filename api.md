<a name="TreeFilter"></a>

## TreeFilter
**Kind**: global class  

* [TreeFilter](#TreeFilter)
    * [new TreeFilter(identifier)](#new_TreeFilter_new)
    * [~arrayTreeFilter(tree, filterFn)](#TreeFilter..arrayTreeFilter) ⇒ <code>tree</code>

<a name="new_TreeFilter_new"></a>

### new TreeFilter(identifier)
**Returns**: <code>function</code> - arrayTreeFilter - closure that searches a tree using a filterFunction  

| Param | Type | Description |
| --- | --- | --- |
| identifier | <code>String</code> | unique identifier for each node, for searching children when doing parental removal |

<a name="TreeFilter..arrayTreeFilter"></a>

### TreeFilter~arrayTreeFilter(tree, filterFn) ⇒ <code>tree</code>
Filters Tree INPLACE! clone before if you dont want it filtered inplace ( this is fastest )
     you could be lazy and clone with JSON.parse(JSON.stringify(myTree)) if your tree is a object literal with no
     functions or any oddities

**Kind**: inner method of <code>[TreeFilter](#TreeFilter)</code>  

| Param | Type | Description |
| --- | --- | --- |
| tree | <code>tree</code> | tree you are filtering |
| filterFn | <code>function</code> | filter function takes in a node and parent result determines if children are pruned |

