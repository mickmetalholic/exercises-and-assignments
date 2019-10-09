; `a-plus-abs-b` is a procedure.
; in this procedure, if b > 0, the value of the expression is a + b;
; else it is a - b
(define (a-plus-abs-b a b)
  ((if (> b 0) + -) a b))
