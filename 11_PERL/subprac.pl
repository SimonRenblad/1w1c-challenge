# C:\Users\simon\Documents\Programming_Challenge\11_PERL

sub avgSquares {

	# get number of arguments entered
	$n = scalar(@_);
	
	# initialize the sum + loop
	$sum = 0;

	# looop over all the arguments entered
	foreach $tnum (@_) {

		# multiply the number by itself
		$nnum = $tnum * $tnum;

		# add the square to the sum
		$sum += $nnum;

	}
	
	# create output
	$out = $sum / $n;

	return $out;
}

$testvar = avgSquares(23, 12, 4, 56);

print $testvar;















