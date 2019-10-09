(define (p) (p))

(define (test x y)
  (if (= x 0)
    0
    y))

; applicative-order: loop forever, because `p` is always evaluated as `p`
; (test 0 (p))
; (test 0 (p))
; ...

; normal-order: return 0
; (test 0 (p))
; (if (= 0 0) 0 (p))
; (if #t 0 (p))
; 0
