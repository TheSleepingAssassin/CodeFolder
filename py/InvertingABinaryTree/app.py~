def invertBinaryTree(tree):
    if tree:
        right = tree.right
        left = tree.left
        tree.left = right
        tree.right = left
        invertBinaryTree(tree.left)
        invertBinaryTree(tree.right)


class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
