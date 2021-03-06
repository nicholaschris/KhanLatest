({
	"nl" : {
				"exercise1"		: '{<var>person(1)</var> is <var>A</var> jaar ouder dan <var>person(2)</var>|<var>person(2)</var> is <var>A</var> jaar jonger dan <var>person(1)</var>}.'+ 
									'{De afgelopen {vier|3|twee} jaar gingen <var>person(1)</var> en <var>person(2)</var> naar dezelfde school.|<var>person(1)</var> en <var>person(2)</var> hebben elkaar 3 jaar geleden ontmoet.|}' +
									'<var>B</var> jaar geleden was <var>person(1)</var> <var>C</var> keer {zo oud als|ouder dan} <var>person(2)</var>.',
				'exercise2' 	: 'Hoe oud is <var>person(1)</var> nu?',
				'hint1'			: 'De leeftijd van <var>person(1)</var> noemen we <code><var>personVar(1)</var></code>.',
				'hint2'			: 'Dat betekent dat <var>person(1)</var> <var>B</var> jaar geleden <code><var>personVar(1)</var> - <var>B</var></code> jaar oud was.',
				'hint3'			: '<var>person(2)</var> is momenteel <code><var>personVar(1)</var> - <var>A</var></code> jaar oud, dus <var>B</var> jaar geleden, was <var>he(2)</var> <code>(<var>personVar(1)</var> - <var>A</var>) - <var>B</var> = <var>personVar(1)</var> - <var>A + B</var></code> jaar oud.',
				'hint4' 		: '<var>person(1)</var> was <var>C</var> keer zo oud als <var>person(2)</var>, dus dat betekent <code><var>personVar(1)</var> - <var>B</var> = <var>C</var> (<var>personVar(1)</var> - <var>A + B</var>)</code>.',
				'hint5' 		: 'Uitwerken geeft: <code><var>personVar(1)</var> - <var>B</var> = <var>C</var> <var>personVar(1)</var> - <var>C * (A + B)</var></code>.',
				'hint6' 		: 'Los op voor <code><var>personVar(1)</var></code> en krijg <code><var>C - 1</var> <var>personVar(1)</var> = <var>C * (A + B) - B</var></code>; <code><var>personVar(1)</var> = <var>(C * (B + A) - B) / (C - 1)</var></code>.',
				'exercise3' 	: '<var>person(1)</var> is <var>A</var> jaar ouder dan '+
									'<var>person(2)</var>. <var>Cardinal(B)</var> jaar geleden, was <var>person(1)</var>'+
									' <var>C</var> keer zo oud als <var>person(2)</var>.',
				'exercise4' 	: 'Hoe oud is <var>person(2)</var> nu?',
				'hint7' 		: 'De huidige leeftijd van <var>person(2)</var> noemen we <code><var>personVar(2)</var></code>.',
				'hint8' 		: 'Dat betekent dat <var>person(1)</var> momenteel <code><var>personVar(2)</var> + <var>A</var></code> jaar is en <var>B</var> jaar geleden, was <var>person(1)</var> <code>(<var>personVar(2)</var> + <var>A</var>) - <var>B</var> = <var>personVar(2)</var> + <var>A - B</var></code> jaar oud.',
				'hint9' 		: '<var>B</var> jaar geleden, was <var>person(2)</var> <code><var>personVar(2)</var> - <var>B</var></code> jaar oud.',
				'hint10' 		: '<var>person(1)</var> was <var>C</var> keer zo oud als <var>person(2)</var>, dus dat is <code><var>personVar(2)</var> + <var>A - B</var> = <var>C</var> (<var>personVar(2)</var> - <var>B</var>)</code>.',
				'hint11' 		: 'Uitwerken geeft: <code><var>personVar(2)</var> + <var>A - B</var> = <var>C</var> <var>personVar(2)</var> - <var>C * B</var></code>.',
				'hint12' 		: 'Los op voor <code><var>personVar(2)</var></code> en krijg <code><var>C - 1</var> <var>personVar(2)</var> = <var>A - B + C * B</var></code>; <code><var>personVar(2)</var> = <var>(A - B + C * B) / (C - 1)</var></code>.',
				'exercise5' 	: '<var>person(1)</var> is <var>C</var> keer zo oud als '+
									'<var>person(2)</var> en is ook <var>A</var> '+
									'jaarc ouder dan <var>person(2)</var>.',
				'exercise6' 	: 'Hoe oud is <var>person(1)</var>?',
				'hint13' : 'De leeftijd van <var>person(1)</var> noemen we <code><var>personVar(1)</var></code>.',
				'hint14' : 'We weten dat <var>person(2)</var> <code>1/<var>C</var></code> keer zo oud is als <var>person(1)</var>, dus de leeftijd van <var>person(2)</var> kan geschreven worden als <code><var>personVar(1)</var> / <var>C</var></code>.',
				'hint15' : '<var>His(2)</var> leeftijd kan ook worden genoteerd als <code><var>personVar(1)</var> - <var>A</var></code>.',
				'hint16' : 'De twee vergelijkingen voor de leeftijd van <var>person(2)</var> zijn gelijk aan elkaar: <code><var>personVar(1)</var> / <var>C</var> = <var>personVar(1)</var> - <var>A</var></code>.',
				'hint17' : 'Vermenigvuldig beide zijden met <code><var>C</var></code> en krijg <code><var>personVar(1)</var> = <var>C</var> <var>personVar(1)</var> - <var>A * C</var></code>.',
				'hint18' : 'Los op voor <code><var>personVar(1)</var></code> en krijg <code><var>C - 1</var> <var>personVar(1)</var> = <var>A * C</var></code>; <code><var>personVar(1)</var> = <var>A * C / (C - 1)</var></code>.',
				'exercise7' : '<var>person(1)</var> is <var>C</var> keer zo oud als '+
								'<var>person(2)</var> en is ook <var>A</var> '+
								'jaar ouder dan <var>person(2)</var>.',
				'exercise8' : 'Hoe oud is <var>person(2)</var>?',
				'hint19' : 'De leeftijd van <var>person(2)</var> noemen we <code><var>personVar(2)</var></code>.',
				'hint20' : 'We weten dat <var>person(1)</var> <var>C</var> keer zo oud is als <var>person(2)</var>, dus de leeftijd van <var>person(1)</var> kan worden geschreven als <code><var>C</var> <var>personVar(2)</var></code>.',
				'hint21' : '<var>His(1)</var> leeftijd kan ook worden geschreven als <code><var>personVar(2)</var> + <var>A</var></code>.',
				'hint22' : 'De twee vergelijkingen voor de leeftijd van <var>person(1)</var> zijn gelijk aan elkaar: <code><var>C</var> <var>personVar(2)</var> = <var>personVar(2)</var> + <var>A</var></code>.',
				'hint23' : 'Los op voor <code><var>personVar(2)</var></code> en krijg <code><var>C - 1</var> <var>personVar(2)</var> = <var>A</var></code>; <code><var>personVar(2)</var> = <var>A / (C - 1)</var></code>.',
				'exercise9' : '<var>person(1)</var> is <var>A</var> keer zo oud als <var>person(2)</var>. <var>B</var> jaar geleden was <var>person(1)</var> <var>C</var> keer zo oud als <var>person(2)</var>.',
				'exercise10' : 'Hoe oud is <var>person(1)</var> nu?',
				'hint24' : 'De leeftijd van <var>person(1)</var> noemen we <code><var>personVar(1)</var></code>.',
				'hint25' : 'We weten dat <var>person(2)</var> <code>1/<var>A</var></code> zo oud is als <var>person(1)</var>, dus de leeftijd van <var>person(2)</var> kan worden geschreven als <code><var>personVar(1)</var> / <var>A</var></code>.',
				'hint26' : '<var>B</var> jaar geleden was <var>person(1)</var> <code><var>personVar(1)</var> - <var>B</var></code> jaar oud en was <var>person(2)</var> <code><var>personVar(1)</var> / <var>A</var> - <var>B</var></code> jaar oud.',
				'hint27' : 'Op dat moment was <var>person(1)</var> <var>C</var> keer zo oud als <var>person(2)</var>, dat kunnen we noteren als <code><var>personVar(1)</var> - <var>B</var> = <var>C</var> (<var>personVar(1)</var> / <var>A</var> - <var>B</var>)</code>.',
				'hint28' : 'Uitwerken geeft: <code><var>personVar(1)</var> - <var>B</var> = <var>fractionReduce(C, A)</var> <var>personVar(1)</var> - <var>C * B</var></code>.',
				'hint29' : 'Los op voor <code><var>personVar(1)</var></code> en krijg <code><var>fractionReduce(C - A, A)</var> <var>personVar(1)</var> = <var>B * (C - 1)</var></code>; <code><var>personVar(1)</var> = <var>fractionReduce(A, C - A)</var> \cdot <var>B * (C - 1)</var> = <var>A * B * (C - 1) / (C - A)</var></code>.',
				'exercise11' : '<var>person(1)</var> is <var>A</var> keer zo oud als <var>person(2)</var>. <var>Cardinal(B)</var> jaar geleden, was <var>person(1)</var> <var>C</var> keer zo oud als <var>person(2)</var>.',
				'exercise12' : 'Hoe oud is <var>person(2)</var> nu?',
				'hint30' : 'De leeftijd van <var>person(2)</var> noemen we <code><var>personVar(2)</var></code>.',
				'hint31' : 'We weten dat <var>person(1)</var> <var>A</var> keer zo oud is als <var>person(2)</var>, dus de leeftijd van <var>person(1)</var> kan worden geschreven als <code><var>A</var> <var>personVar(2)</var></code>.',
				'hint32' : '<var>B</var> jaar geleden was <var>person(1)</var> <code><var>A</var> <var>personVar(2)</var> - <var>B</var></code> jaar oud en was <var>person(2)</var> <code><var>personVar(2)</var> - <var>B</var></code> jaar oud.',
				'hint33' : 'Op dat moment was <var>person(1)</var> <var>C</var> keer zo oud als <var>person(2)</var>, dat kunnen we noteren als <code><var>A</var> <var>personVar(2)</var> - <var>B</var> = <var>C</var> (<var>personVar(2)</var> - <var>B</var>)</code>.',
				'hint34' : 'Uitwerken geeft: <code><var>A</var> <var>personVar(2)</var> - <var>B</var> = <var>C</var> <var>personVar(2)</var> - <var>B * C</var></code>.',
				'hint35' : 'Los op voor <code><var>personVar(2)</var></code> en krijg <code><var>C - A</var> <var>personVar(2)</var> = <var>B * (C - 1)</var></code>; <code><var>personVar(2)</var> = <var>B * (C - 1) / (C - A)</var></code>.',
				'exercise13' : 'Over <var>B</var> jaar is <var>person(1)</var> <var>A</var> keer zo oud als <var>he(1)</var> nu is.',
				'exercise14' : 'Hoe oud is <var>he(1)</var> nu?',
				'hint36' : 'De leeftijd van <var>person(1)</var> noemen we <code><var>personVar(1)</var></code>.',
				'hint37' : 'Over <var>B</var> jaar, is <var>he(1)</var> <code><var>personVar(1)</var> + <var>B</var></code> jaar oud.',
				'hint38' : 'Op dat moment is <var>he(1)</var> ook <code><var>A</var> <var>personVar(1)</var></code> jaar oud.',
				'hint39' : 'We noteren <code><var>personVar(1)</var> + <var>B</var> = <var>A</var> <var>personVar(1)</var></code>.',
				'hint40' : 'Los op voor <code><var>personVar(1)</var></code> en krijg <code><var>A - 1</var> <var>personVar(1)</var> = <var>B</var></code>; <code><var>personVar(1)</var> = <var>B / (A - 1)</var></code>.',
				'exercise15' : '<var>person(1)</var> is <var>A</var> jaar oud en <var>person(2)</var> is <var>B</var> jaar oud.',
				'exercise16' : 'Over hoeveel jaar is <var>person(1)</var> slechts <var>C</var> keer zo oud als <var>person(2)</var>?',
				'hint41' : 'Noem <code>y</code> het aantal jaar dat het duurt voor het zover is.',
				'hint42' : 'Over <code>y</code> jaar is <var>person(1)</var> <code><var>A</var> + y</code> jaar oud en is <var>person(2)</var> <code><var>B</var> + y</code> jaar oud.',
				'hint43' : 'Op dat moment is <var>person(1)</var> <var>C</var> keer zo oud als <var>person(2)</var>.',
				'hint44' : 'We schrijven <code><var>A</var> + y = <var>C</var> (<var>B</var> + y)</code>.',
				'hint45' : 'Uitwerken geeft to get <code><var>A</var> + y = <var>C * B</var> + <var>C</var> y</code>.',
				'hint46' : 'Los op voor <code>y</code>, waardoor je krijgt <code><var>C - 1</var> y = <var>A - C * B</var></code>; <code>y = <var>(A - C * B) / (C - 1)</var></code>.'

		}
})