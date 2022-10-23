class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head) {
        return head
    }

    modifyValues(0, head);

    return head;
};

function modifyValues(index: number, head: ListNode): ListNode | undefined {
    if (!head.next) {
        return head;
    }

    if (index % 2 === 0) {
        const oldValue = head.val

        head.val = head.next.val;
        head.next.val = oldValue;
    }

    modifyValues(index + 1, head.next);
}