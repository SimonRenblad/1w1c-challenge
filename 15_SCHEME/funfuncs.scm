#lang sicp
(define !
  (lambda (n)
    (if (= n 0)
      1
      (* n (! (- n 1)))
    )
  )
)
;;; Selection Sort
(define selection
  (lambda (L)
    (cond ( (null? L) '() )
          ( else (cons (smallest L (car L))
                       (selection (remove L (smallest L (car L))))
                 )
          )
    )
  )
)

(define remove
  (lambda (L A)
    (cond ( (null? L) '() )
          ( (= (car L) A) (cdr L))
          (else (cons (car L) (remove (cdr L) A)))
    )
  )
)

(define smallest
  (lambda (L A)
    (cond ( (null? L) A)
          ( (< (car L) A) (smallest (cdr L) (car L)))
          (else (smallest (cdr L) A))
    )
  )
)
(selection '(5 6 3 1))
;;; Power Operand (only for positive integer values of p...)
(define ^
  (lambda (n p)
    (if (= p 0)
      1
      (* n (^ n (- p 1)))
    )
  )
)
(^ 2 2)
;;; Logarithm Operand (only for positive integers peeps)
(define log-base
  (lambda (n b)
    (if (= n 1)
      0
      (+ 1 (log-base (/ n b) b)))))
(log-base 4 2)
(log-base 25 5)
;;; List Length
(define list-length
  (lambda (L)
    (if (null? L)
      0
      (+ 1 (list-length (cdr L))))))
(list-length '(2 3 4 5 5))
;;; Combines elements of lists in some kind of fashion
(define list-combine
  (lambda (L1 L2 f)
    (if (or (null? L1) (null? L2))
      '()
      (cons (f (car L1) (car L2)) (list-combine (cdr L1) (cdr L2) f)))))
(define list-multiply
  (lambda (L1 L2)
    (list-combine L1 L2 *)))
(define list-add
  (lambda (L1 L2)
    (list-combine L1 L2 +)))
(define list-subtract
  (lambda (L1 L2)
    (list-combine L1 L2 -)))
(define list-divide
  (lambda (L1 L2)
    (list-combine L1 L2 /)))
(define list-power
  (lambda (L1 L2)
    (list-combine L1 L2 ^)))
"List Stuff"
(define A '(1 2 3))
(define B '(2 3 4 5))
"Test Combine"
(list-combine A B +)
"Test multiply"
(list-multiply A B)
"test power"
(list-power B A)

;;; Find object at index of list
(define get-at-index
  (lambda (L i)
    (cond ( (null? L) ("error, index out of bounds"))
          ( (= i 0) (car L) )
          (else (get-at-index (cdr L) (- i 1))))))
;;; Find index of first instance of object
(define linear-find
  (lambda (L v s)
    (cond ( (null? L) ("error, no object found"))
          ( (= v (car L)) s)
          (else (linear-find (cdr L) v (+ s 1))))))
"test get at index"
(get-at-index A 0)
(get-at-index A 1)
(get-at-index A 2)
"test linear-find"
(linear-find B 4 0)
"test linear-find get at index combo"
(get-at-index B (+ (linear-find B 3 0) 1))
    






