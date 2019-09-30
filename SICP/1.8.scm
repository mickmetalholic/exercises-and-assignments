(define (improve guess x)
  (/ (+ (/ x (* guess guess)) (* 2 guess)) 3))

(define (good-enough? guess improvedguess)
  (<= (abs (- guess improvedguess)) (abs (* guess 0.001))))

(define (cube-root-iter x guess)
  (if (good-enough? guess (improve guess x))
    guess
    (cube-root-iter x (improve guess x))))
