; 0.001 is too large for small value

; when it is a very large value, the precision is not
; enough to represent the small difference less than 0.001
; so the algorigthm will never terminate


(define (average x y)
  (/ (+ x y) 2))

(define (improve guess x)
  (average guess (/ x guess)))

; use relative difference
(define (good-enough? guess improvedguess x)
  (<= (abs (- guess improvedguess)) (* guess 0.1)))

(define (sqrt-iter guess x)
  (if (good-enough? guess (improve guess x) x)
          guess
          (sqrt-iter (improve guess x) x)))
