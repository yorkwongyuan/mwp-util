module.exports = function () {
  class Node {
    constructor (value) {
      this.value = value
      this.children = []
      this.parent = null
    }
    addChild (node) {
      node.parent = this
      this.children.push(node)
      return this
    }
    siblings () {
      const self = this
      if (this.parent) {
        return this.parent.children.filter(node => {
          return node !== self
        })
      }
    }
    get degree () {
      return this.children.length
    }
    get depth () {
      return this.getdepthByRoot(null)
    }
    getdepthByRoot (root) {
      let currentNode = this
      let depth = 0
      if (this === root) {
        return 0
      }
      while(currentNode.parent && currentNode.parent !== root) {
        depth ++
        currentNode = currentNode.parent
      }
      return depth + 1
    }
    get height () {
      let queue = [this]
      let deepsNode = this
  
      while (queue.length > 0) {
        let len = queue.length
        console.log(this.value)
        for(let i = 0; i< len; ++i) {
          let curNode = queue.shift()
          deepsNode = curNode
          if (curNode.children.length > 0) {
            queue.push(...curNode.children)
          }
        }
      }
      console.log(this, 'this')
      console.log(deepsNode, 'deepsNode')
      return deepsNode.getdepthByRoot(this)
    }
  }
  
  let root = new Node('德川家康')
  let node2 = new Node('德川秀忠')
  let node3 = new Node('德川赖房')
  let node4 = new Node('德川庆喜')
  let node5 = new Node('德川荷叶')
  root.addChild(node2)
  root.addChild(node3)
  node3.addChild(node4)
  node4.addChild(node5)
  // console.log(root.degree)
  // console.log(root.depth, '深度')
  // console.log(node3.depth, '深度')
  // console.log(node4.depth, '深度')
  
  console.log(root.height, 'root高度')
  console.log(node5.height, '高度')
  return Node
}