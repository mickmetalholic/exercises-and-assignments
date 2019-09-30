(define (new-if pred then-cls else-cls)
  (cond (pred the-cls)
        (else else-cls)))

(define (average x y)
  (/ (+ x y) 2))

(define (improve guess x)
  (average guess (/ x guess)))

(define (good-enough? guess x)
  (< (abs (- (* guess guess) x)) 0.01))

; `if` evaluates the prediction expression first
; if prediction is true, the then clause will be evaluated
; or the else clause will be evaluated, but not both of them

; `new-if` evaluates all of the three arguments
; so the third arguments will always be evaluated
; and will not stop calling it self
(define (sqrt-iter guess x)
  (new-if (good-enough? guess x)
          guess
          (sqrt-iter (improve guess x) x)))
