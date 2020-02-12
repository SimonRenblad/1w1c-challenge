#lang sicp
(define !
  (lambda (n)
    (if (= n 0)
      1
      (* n (! (- n 1)))
    )
  )
)
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
