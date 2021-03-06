({
	"nl" : {
		"question1"	: 'Wat is het domein van <code>f(x)</code>?'
		
		"hint1"		: '<code>f(x)</code> is undefined when the denominator is 0.',
		"hint2"		: 'The denominator is 0 when <code>x=<var>(-1*A)</var></code> or <code>x=<var>B</var></code>.',
		"hint3"		: 'So we know that <code>x \neq <var>-1*A</var></code> and <code>x \neq <var>B</var></code>.',
		"hint4"		: 'Expressing this mathematically, the domain is <code><var>CHOICES["two-denom-simplify"]</var></code>.',
		"hint5"		: '<code>f(x)</code> is a piecewise function, so we need to examine where each piece is undefined.',
		"hint6"		: 'The first piecewise definition of <code>f(x)</code>, <code>\frac{ x + <var>A</var> }{ ( x + <var>A</var> )( x - <var>B</var> ) }</code>, is undefined when its denominator is 0.',
		"hint7"		: 'The denominator is 0 when <code>x=<var>-1*A</var></code> or <code>x=<var>B</var></code>.',
		"hint8"		: 'So, based on the first piecewise definition, we know that <code>x \neq <var>-1*A</var></code> and <code>x \neq <var>B</var></code>.',
		"hint9"		: 'However, the second piecewise definition applies when <code>x = <var>B</var></code>, and the second piecewise definition, <code><var>C</var></code>, has no weird gaps or holes, so <code>f(x)</code> is defined at <code>x = <var>B</var></code>.',
		"hint10"	: 'So the only restriction on the domain is that <code>x \neq <var>-1*A</var></code>.',
		"hint11"	: 'Expressing this mathematically, the domain is <code><var>CHOICES["two-denom-cond"]</var></code>.',
		"hint12"	: '<code>f(x)</code> is undefined when the radicand (the expression under the radical) is less than zero.',
		"hint13"	: 'So the radicand, <code>x - <var>A</var></code>, must be greater than or equal to zero.',
		"hint14"	: 'So <code>x - <var>A</var> \geq 0</code>; this means <code>x \geq <var>A</var></code>.',
		"hint15"	: 'Expressing this mathematically, the domain is <code><var>CHOICES["sqrt"]</var></code>.',
		"hint16"	: 'First, we need to consider that <code>f(x)</code> is undefined when the radicand (the expression under the radical) is less than zero.',
		"hint17"	: 'So the radicand, <code>x - <var>A</var></code>, must be greater than or equal to zero.',
		"hint18"	: 'So <code>x - <var>A</var> \geq 0</code>; this means <code>x \geq <var>A</var></code>.',
		"hint19"	: 'Next, we also need to consider that <code>f(x)</code> is undefined when the denominator, <code>\sqrt{ x - <var>A</var> }</code>, is zero.',
		"hint20"	: 'So <code>\sqrt{ x - <var>A</var> } \neq 0</code>.',
		"hint21"	: '<code>\sqrt{ z } = 0</code> only when <code>z = 0</code>, so <code>\sqrt{ x - <var>A</var> } \neq 0</code> means that <code>x - <var>A</var> \neq 0</code>.',
		"hint22"	: 'So <code>x \neq <var>A</var></code>.',
		"hint23"	: 'So we have two restrictions: <code>x \geq <var>A</var></code> and <code>x \neq <var>A</var></code>.',
		"hint24"	: 'Combining these two restrictions, we are left with simply <code>x > <var>A</var></code>.',
		"hint25"	: 'Expressing this in mathematical notation, the domain is <code><var>CHOICES["inverse-sqrt"]</var></code>.',
		"hint26"	: '<code>f(x)</code> is a piecewise function, so we need to examine where each piece is undefined.',
		"hint27"	: 'The first piecewise definition of <code>f(x)</code>, <code>\frac{ 1 }{ \sqrt{ x - <var>A</var> } }</code>, is undefined where the denominator is zero and where the radicand (the expression under the radical) is less than zero.',
		"hint28"	: 'The denominator, <code>\sqrt{ x - <var>A</var> }</code>, is zero when <code>x - <var>A</var> = 0</code>, so we know that <code>x \neq <var>A</var></code>.',
		"hint29"	: 'The radicand, <code>x - <var>A</var></code>, is less than zero when <code>x < <var>A</var></code>, so we know that <code>x \geq <var>A</var></code>.',
		"hint30"	: 'So the first piecewise definition of <code>f(x)</code> is defined when <code>x \neq <var>A</var></code> and <code>x \geq <var>A</var></code>. Combining these two restrictions, the first piecewise definition is defined when <code>x > <var>A</var></code>. The first piecewise defintion applies when <code>x \geq <var>A</var></code>, so this restriction is relevant.',
		"hint31"	: 'The second piecewise definition of <code>f(x)</code>, <code>\frac{ 1 }{ \sqrt{ <var>A</var> - x } }</code>, applies when <code>x < <var>A</var></code> and is undefined where the denominator is zero and where the radicand is less than zero.',
		"hint32"	: 'The denominator, <code>\sqrt{ <var>A</var> - x }</code>, is zero when <code><var>A</var> - x = 0</code>, so we know that <code>x \neq <var>A</var></code>.',
		"hint33"	: 'The radicand, <code><var>A</var> - x</code>, is less than zero when <code>x > <var>A</var></code>, so we know that <code>x \leq <var>A</var></code>.',
		"hint34"	: "So the second piecewise definition of <code>f(x)</code> is defined when <code>x \neq <var>A</var></code> and <code>x \leq <var>A</var></code>. Combining these two restrictions, the second piecewise definition is defined when <code>x < <var>A</var></code>. However, the second piecewise definition of <code>f(x)</code> only applies when <code>x < <var>A</var></code>, so restriction isn't actually relevant to the domain of <code>f(x)</code>.",
		"hint35"	: 'So the first piecewise definition is defined when <code>x > <var>A</var></code> and applies when <code>x \geq <var>A</var></code>; the second piecewise definition is defined when <code>x < <var>A</var></code> and applies when <code>x < <var>A</var></code>. Putting the restrictions of these two together, the only place where a definition applies and the value is undefined is at <code>x = <var>A</var></code>. So the only restriction on the domain of <code>f(x)</code> is <code>x \neq <var>A</var></code>.',
		"hint36"	: 'Expressing this mathematically, the domain is <code><var>CHOICES["inverse-sqrt-cond"]</var></code>.',
		"hint37"	: 'First, we need to consider that <code>f(x)</code> is undefined anywhere where either radical is undefined, so anywhere where either radicand (the expression under the radical symbol) is less than zero.',
		"hint38"	: 'The top radical is undefined when <code><var>A+B</var> - x < 0</code>.',
		"hint39"	: 'So the top radical is undefined when <code>x > <var>A+B</var></code>, so we know <code>x \leq <var>A+B</var></code>.',
		"hint40"	: 'The bottom radical is undefined when <code>x - <var>A</var> < 0</code>.',
		"hint41"	: 'So the bottom radical is undefined when <code>x < <var>A</var></code>, so we know <code>x \geq <var>A</var></code>.',
		"hint42"	: 'Next, we need to consider that <code>f(x)</code> is undefined anywhere where the denominator, <code>\sqrt{ x - <var>A</var> }</code>, is zero.',
		"hint43"	: 'So <code>\sqrt{ x - <var>A</var> } \neq 0</code>, so <code>x - <var>A</var> \neq 0</code>, so <code>x \neq <var>A</var></code>.',
		"hint44"	: 'So we have three restrictions: <code>x \leq <var>A+B</var></code>, <code>x \geq <var>A</var></code>, and <code>x \neq <var>A</var></code>.',
		"hint45"	: 'Combining these three restrictions, we know that <code><var>A</var> < x \leq <var>A+B</var></code>.',
		"hint46"	: 'Expressing this mathematically, the domain is <code><var>CHOICES["sqrt-frac"]</var></code>.',
		"hint47"	: '<code>f(x)</code> is a piecewise function, so we need to examine where each piece is undefined.',
		"hint48"	: 'The first piecewise definition of <code>f(x)</code>, <code>\frac{ x + <var>A</var> }{ ( x + <var>A</var> )( x - <var>C</var> ) }</code>, is undefined where the denominator is zero.',
		"hint49"	: 'The denominator, <code>(x + <var>A</var>)(x - <var>C</var>)</code>, is zero when <code>x = <var>-1*A</var></code> or <code>x = <var>C</var></code>.',
		"hint50"	: 'So the first piecewise definition of <code>f(x)</code> is defined when <code>x \neq <var>-1*A</var></code> and <code>x \neq <var>C</var></code>. The first piecewise definition applies when <code>x = <var>-1*A</var></code> and <code>x = <var>C</var></code>, so these restrictions are relevant to the domain of <code>f(x)</code>.',
		"hint51"	: 'The second piecewise definition of <code>f(x)</code>, <code><var>A</var></code>, is a simple horizontal line function and so has no holes or gaps to worry about, so it is defined everywhere.',
		"hint52"	: 'So the first piecewise definition is defined when <code>x \neq <var>-1*A</var></code> and <code>x \neq <var>C</var></code> and applies when <code>x \neq <var>B</var></code>; the second piecewise definition is defined always and applies when <code>x = <var>B</var></code>. Putting the restrictions of these two together, the only places where a definition applies and is undefined are at <code>x = <var>-1*A</var></code> and <code>x = <var>C</var></code>. So the restriction on the domain of <code>f(x)</code> is that <code>x \neq <var>-1*A</var></code> and <code>x \neq <var>C</var></code>.',
		"hint53"	: 'Expressing this mathematically, the domain is <code><var>CHOICES["two-denom-cond-weird"]</var></code>.',
		"hint54"	: '<code>f(x) = \dfrac{ \sqrt{ x - <var>C</var> } }{ x^2 + <var>A+B</var> x + <var>A*B</var> } = \dfrac{ \sqrt{ x - <var>C</var> } }{ ( x + <var>A</var> )( x + <var>B</var> ) }</code>',
		"hint55"	: 'First, we need to consider that <code>f(x)</code> is undefined anywhere where the radical is undefined, so the radicand (the expression under the radical) cannot be less than zero.',
		"hint56"	: 'So <code>x - <var>C</var> \geq 0</code>, which means <code>x \geq <var>C</var></code>.',
		"hint57"	: 'Next, we also need to consider that <code>f(x)</code> is undefined anywhere where the denominator is zero.',
		"hint58"	: 'So <code>x \neq <var>-1*A</var></code> and <code>x \neq <var>-1*B</var></code>.',
		"hint59"	: 'However, these last two restrictions are irrelevant since <code><var>C</var> > <var>-1*A</var></code> and <code><var>C</var> > <var>-1*B</var></code> and so <code>x \geq <var>C</var></code> will ensure that <code>x \neq <var>-1*A</var></code> and <code>x \neq <var>-1*B</var></code>.',
		"hint60"	: 'Combining these restrictions, then, leaves us with simply <code>x \geq <var>C</var></code>.',
		"hint61"	: 'Expressing this mathematically, the domain is <code><var>CHOICES["sqrt-poly-frac"]</var></code>.',
		"hint62"	: '<code>f(x)</code> is undefined when the radicand (the expression under the radical) is less than zero.',
		"hint63"	: 'So we know that <code><var>A</var> - \lvert x \rvert \geq 0</code>.',
		"hint64"	: 'So <code>\lvert x \rvert \leq <var>A</var></code>.',
		"hint65"	: 'This means <code>x \leq <var>A</var></code> and <code>x \geq <var>-1*A</var></code>; or, equivalently, <code><var>-1*A</var> \leq x \leq <var>A</var></code>.',
		"hint66"	: 'Expressing this mathematically, the domain is <code><var>CHOICES["sqrt-abs"]</var></code>.',
		"hint67"	: 'First, we need to consider that <code>f(x)</code> is undefined anywhere where the radicand (the expression under the radical) is less than zero.',
		"hint68"	: 'So we know that <code><var>A</var> - \lvert x \rvert \geq 0</code>.',
		"hint69"	: 'This means <code>\lvert x \rvert \leq <var>A</var></code>, which means <code><var>-1*A</var> \leq x \leq <var>A</var></code>.',
		"hint70"	: 'Next, we need to consider that <code>f(x)</code> is also undefined anywhere where the denominator is zero.',
		"hint71"	: 'So we know that <code>\sqrt{ <var>A</var> - \lvert x \rvert } \neq 0</code>, so <code>\lvert x \rvert \neq <var>A</var></code>.',
		"hint72"	: 'This means that <code>x \neq <var>A</var></code> and <code>x \neq <var>-1*A</var></code>.',
		"hint73"	: 'So we have four restrictions: <code>x \geq <var>-1*A</var></code>, <code>x \leq <var>A</var></code>, <code>x \neq <var>-1*A</var></code>, and <code>x \neq <var>A</var></code>.',
		"hint74"	: 'Combining these four, we know that <code>x > <var>-1*A</var></code> and <code>x < <var>A</var></code>; alternatively, that <code><var>-1*A</var> < x < <var>A</var></code>.',
		"hint75"	: 'Expressing this mathematically, the domain is <code><var>CHOICES["inverse-sqrt-abs"]</var></code>.'
		}
})