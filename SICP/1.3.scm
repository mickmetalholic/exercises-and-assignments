(define (sqr x) (* x x))

(define (sqr-sum x y)
  (+ (sqr x) (sqr y)))

(define (max-sqr-sum x y z)
  (cond ((and (> x z) (> y z)) (sqrsum x y))
        ((and (> x y) (> z y)) (sqrsum x z))
        (else (sqrsum y z))))
