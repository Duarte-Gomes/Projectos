'use strict';

angular.module('dieta31diasApp')
    .factory('ServerService', function() {
		return {
			getDiasList: function() {
		    	return [{
		    		"id":1,
		    		"dia": "Dia 1",
		      		"titulo": "Hoje é o primeiro dia da sua dieta. Está certamente motivado e com vontade de cumprir à risca o que lhe proponho. Deve, portanto, aproveitar ao máximo essa motivação, porque os quatro primeiros dias são os mais difíceis. Depois disso, o seu corpo já se terá habituado e será muito fácil chegar ao final da primeira fase, que é a mais rígida. Mas atenção que aproveitar ao máximo não significa ser demasiado exigente consigo próprio. O mais importante de tudo é que encare este grande passo que deu como uma fase de mudança e desfrute de tudo aquilo que esta dieta lhe permite. Como verá, todas as receitas que lhe sugiro resultam em pratos deliciosos que em nada ficam a dever àqueles que, por agora, não pode comer. Entregue-se, por isso, à sua confeção e faça da hora da refeição um momento de puro prazer.",
		      		"conselho": "Não passe fome! Sempre que a sentir, faça um pequeno lanche com os alimentos permitidos sem limite de quantidade. Coma bem às refeições principais. Assim terá menos fomenos intervalos das mesmas. Lembre-se de que, no final da semana, existe o «Dia da Asneira» - aquele em que vai poder comer o que lhe apetecer. Poderá prescindir dele, para obter melhores resultados, mastenha em mente que isso obrigará a uma força de vontade adicional, e poderá criar alguma saturação. Se pensar nele como uma meta, vai ver que a semana passa muito mais depressa. Durante os 6 dias da dieta, tente não frequentar restaurantes que para si sejam uma tentação. Se adora pizas, por exemplo,evite as pizarias. É verdade que numa pizaria há sempre saladas e bifes, mas vai ser muito difícil resistir àquilo de que realmente gosta nesse espaço. O próprio cheiro será um apelo ao consumo dos alimentos que agora tem de evitar.",
		      		"pqalm": [
		        		{
		          			"desc": "1 pão com 2 fatias de fiambre de peru"
		        		},
		        		{
		          			"desc": "1 copo de leite com café"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 iogurte magro"
		          		},
		          		{
		          			"desc": "1 bolinha de queijo flamengo"
		        		}
		      		],
		      		"almocotitulo": "Rolinho de peru com fiambre e mozzarella",
		      		"almocoing": [
				        {
				          	"ing": "Orégãos"
				        },
				        {
				          	"ing": "2 bifes pequenos e fininhos de peru"
				        },
				        {
				          	"ing": "2 fatias de fiambre de frango"
				        },
				        {
				          	"ing": "2 fatias de queijo mozzarella light"
				        },
				        {
				          	"ing": "2 tomates descascados e cortados ao bocadinhos"
				        },
				        {
				          	"ing": "1 cebola pequena picada"
				        },
				        {
				          	"ing": "Salsa picada"
				        },
				        {
				          	"ing": "Sal e pimenta"
				        },
				        {
				          	"ing": "Um fio de azeite"
				        },
				        {
				          	"ing": "Palitos"
				        }
				    ],
				    "almocopreparacao": "Tempere os bifes com sal e pimenta. Coloque uma fatia de fiambre e depois uma fatia de queijo em cima de cada bife. Polvilhe com os orégãos e enrole. Depois coloque o palito para os manter enrolados. Ponha o fiozinho de azeite numa frigideira e, quando este estiver quente, aloure os bifinhos de todos os lados. Retire e reserve. Ponha a cebola na frigideira e vá mexendo até ficar transparente. Junte o tomate e vá mexendo. Adicione a salsa picada e os bifinhos enrolados. Tape e deixe em lume brando até os bifinhos estarem tenros. Acompanhe com uma salada de alface bem temperada, e beba água ou uma cola light.",
				    "durantetarde": [
				        {
				          	"desc": "1 gelatina"
				        },
				        {
				          	"desc": "1 ovo cozido"
				        }
				    ],
		      		"jantartitulo": "Gambas com gengibre",
		      		"jantaring": [
		        		{
		          		  	"ing": "Gambas"
				        },
				        {
				          	"ing": "Azeite"
				        },
				        {
				          	"ing": "2 dentes de alho"
				        },
				        {
				          	"ing": "Gengibre ralado (do tamanho de um dente de alho grande)"
				        },
				        {
				          	"ing": "50 g de cogumelos"
				        },
				        {
				          	"ing": "1 colher de sobremesa de molho de soja"
				        },
				        {
				          	"ing": "Piripiri seco (para quem gosta de picante)"
				        }
				    ],
		      		"jantarpreparacao": "Numa frigideira ou wook, aqueça o azeite. Quando estiver quente, junte o alho e a gengibre, o molho de soja e o piripiri. Mexa durante meio minuto e depois junte os cogumelos. Após alguns minutos, junte as gambas e misture até ficarem cor-de-rosa."
	    			},
	    			{
	    			"id":2,
		    		"dia": "Dia 2",
		      		"titulo": "Se é guloso, é normal que, entre o segundo e o terceiro dias de dieta, sinta alguma falta dos seus doces habituais. O seu corpo está habituado a eles, e poderá até sentir que, sem esse açúcar, fica sem energia, triste ou esquecido. Mas atenção que isto é uma ilusão. O seu corpo não precisa de rebuçados e pastéis de nata para funcionar. Está viciado, isso sim, nesse tipo de alimentos. Mas, felizmente, este é daqueles vícios que se combatem rápida e eficazmente. A partir do dia 4 da dieta, já nem se lembrará de que comia um doce por dia, e verá que encontra essa mesma energia, alegria e memória noutros alimentos mais saudáveis.",
		      		"conselho": "Se sentir mesmo falta de um doce, seja para se concentrar ou para se «mimar», opte por uma pastilha ou rebuçado sem açúcar. São uma boa forma de sossegar o seu desejo e de entreter o seu estômago até à refeição seguinte.",
		      		"pqalm": [
		        		{
		          			"desc": "1 pão com 1 queijo fresco"
		        		},
		        		{
		          			"desc": "1 copo de leite com café"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "2 salsichas de peru"
		        		}
		      		],
		      		"almocotitulo": "Wrap de alface",
		      		"almocoing": [
				        {
				          	"ing": "200 g de carne picada de vaca"
				        },
				        {
				          	"ing": "1 colher de sopa de molho de soja"
				        },
				        {
				          	"ing": "Gengibre fresco (do tamanho de um dente de alho) picado"
				        },
				        {
				          	"ing": "1 dente de alho picado"
				        },
				        {
				          	"ing": "Ervas aromáticas finas"
				        },
				        {
				          	"ing": "Um fiozinho de azeite"
				        },
				        {
				          	"ing": "1 cebola às rodelas finas"
				        },
				        {
				          	"ing": "1 pimento vermelho pequeno sem sementes e cortado aos cubos"
				        },
				        {
				          	"ing": "4 folhas de alface grandes lavadas e bem secas"
				        },
				        {
				          	"ing": "Salsa picada"
				        }
				    ],
				    "almocopreparacao": "Corte a carne em ripas e ponha numa tigela com o molho de soja, o gengibre, o alho e as ervas aromáticas. Misture e reserve, tapado. Ponha um fiozinho de azeite numa frigideira e, quando estiver quente, junte as cebolas e o pimento. Misture durante cerca de 1 minuto. Junte a carne e mexa até estar pronta. Tempere com sal e pimenta e polvilhe com a salsa. Ponha um bocadinho em cada folha de alface e embrulhe.",
				    "durantetarde": [
				        {
				          	"desc": "1 iogurte magro"
				        },
				        {
				          	"desc": "1 cenoura crua enrolada numa fatia de fiambre"
				        }
				    ],
		      		"jantartitulo": "Atum com maionese e queijo",
		      		"jantaring": [
		        		{
		          			"ing": "2 latas de atum em água"
				        },
				        {
				          	"ing": "Maionese caseira"
				        },
				        {
				          	"ing": "Queijo ralado magro"
				        }
				    ],
		      		"jantarpreparacao": "Misture o atum com um pouco de maionese (feita por si, com azeite) e tempere com sal e pimenta. Numa frigideira, não muito grande, ponha um fiozinho de azeite. Quando estiver quente, espalhe o queijo pela base toda da frigideira. Assim que começar a derreter, espalhe o atum por cima e deixe-o lá até o queijo ficar dourado dos lados. Sirva com brócolos cozidos. Beba água ou uma cola light."
	    			},
	    			{
	    			"id":3,
		    		"dia": "Dia 3",
		      		"titulo": "Hoje será, provavelmente, o dia mais difícil da sua dieta. Mas o que serão 24 horas a contrariar algum apetite e ansiedade, quando o resultado é voltar a ter o peso que deseja? Amanhã o seu corpo já se terá desabituado de tudo aquilo que estava a fazê-lo engordar, e reagirá de forma correta ao que ingerir. E lembre-se de que está a quatro dias apenas do dia em que poderá ingerir tudo aquilo de que hoje prescinde...",
		      		"conselho": "Para a maioria das pessoas, o período mais difícil do dia é a meio da tarde. Habituámo-nos a ir lanchar à pastelaria mais próxima ou a trincar bolachas no escritório. Existe normalmente uma quebra de energia nesta altura, e compensamo-lo com aquilo que ingerimos nesta hora. Vá prevenido para o escritório com bolas de queijo, rolinhos de fiambre, salsichas de aves, iogurtes magros e gelatina sem açúcar. Não deixe de comer se sentir fome. Se tentar controlá-la, quando decidir finalmente comer é muito provável que coma o dobro. Assim evitará chegar a casa e fazer o que a maioria dos meus pacientes confessa que fazia noutras dietas, que era chegar a casa do trabalho e comer tudo o que encontravam na despensa e no frigorífico.",
		      		"pqalm": [
		        		{
		          			"desc": "1 pão com 1 ovo mexido"
		        		},
		        		{
		          			"desc": "1 iogurte magro"
		        		},
		        		{
		          			"desc": "Café"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 triângulo de queijo"
		        		},
		        		{
		          			"desc": "1 fatia de presunto"
		        		}
		      		],
		      		"almocotitulo": "Salsichas com couve-lombarda",
		      		"almocoing": [
				        {
				          	"ing": "Salsichas de aves"
				        },
				        {
				          	"ing": "Couve-lombarda"
				        },
				        {
				          	"ing": "Palitos"
				        },
				        {
				          	"ing": "Tomate"
				        },
				        {
				          	"ing": "Cebola"
				        },
				        {
				          	"ing": "Azeite"
				        }
				    ],
				    "almocopreparacao": "Enrole as salsichas na couve-lombarda com um palito e faça o estufado normal, com cebola, tomate e azeite.",
				    "durantetarde": [
				        {
				          	"desc": "1 queijo fresco"
				        },
				        {
				          	"desc": "2 fatias de carpaccio de bacalhau"
				        }
				    ],
		      		"jantartitulo": "Peito de peru balsâmico",
		      		"jantaring": [
		        		{
		          			"ing": "1 peito de peru grande"
				        },
				        {
				          	"ing": "Vinagre balsâmico"
				        },
				        {
				          	"ing": "60 g de cogumelos laminados"
				        },
				        {
				          	"ing": "Queijo ralado de 2 cores light "
				        },
				        {
				          	"ing": "Sal e pimenta"
				        }
				    ],
		      		"jantarpreparacao": "Tempere o bife de peru com sal e pimenta e adicione o vinagre balsâmico, de forma generosa. Numa frigideira, aqueça o azeite e, quando estiver quente, junte os cogumelos. Vá mexendo e, depois de alguns minutos, junte o bife de peru. Vire o bife e polvilhe com o queijo. Tape e deixe cozinhar até o queijo estar derretido. Acompanhe com uma salada de tomate e orégãos. De sobremesa, pode comer uma gelatina."
	    			},
	    			{
	    			"id":4,
		    		"dia": "Dia 4",
		      		"titulo": "O pior já passou! Está a três dias do «Dia da Asneira» e o seu corpo começa a habituar-se à ausência de hidratos de carbono. A energia que pode ter achado que lhe faltava começa a voltar, e com ela também a sua capacidade de concentração, atenção emotivação. Lembre-se de que está a «desviciar» o corpo dos hidratos de carbono, e isso pode mexer consigo durante dois ou três dias. Mas se já chegou até aqui, daqui para a frente será tudo mais fácil. Até porque, provavelmente, já abotoa melhor o botão das suas calças. Esse é o primeiro sinal de que a dieta está a fazer os seus efeitos... Agora é continuar!",
		      		"conselho": "Uma forma de controlar o apetite entre o jantar e a hora de ir para a cama, é comendo uma sobremesa a seguir à refeição da noite. É muito fácil preparar algo que o deixe satisfeito, desde uma simples gelatina até uma porção de requeijão com uma fatia de paio do lombo.",
		      		"pqalm": [
		        		{
		          			"desc": "1 cachorro-quente com pão escuro e salsicha de aves"
		        		},
		        		{
		          			"desc": "1 copo de café com leite"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 queijo fresco"
		        		},
		        		{
		          			"desc": "2 fatias de carpaccio de bacalhau (que abriu na véspera)"
		        		}
		      		],
		      		"almocotitulo": "Espetadinhas de carne no forno",
		      		"almocoing": [
				        {
				          	"ing": "Cubinhos de carne de peru, frango e vaca"
				        },
				        {
				          	"ing": "Cebola"
				        },
				        {
				          	"ing": "Pimentos"
				        },
				        {
				          	"ing": "Azeite"
				        },
				        {
				          	"ing": "Paus de espetada"
				        }
				    ],
				    "almocopreparacao": "Aqueça o forno a 180° C. Espete os cubos de carne, a gosto, nos paus de espetada, alternando com fatias de pimento e cebola. Leve ao forno em cima de uma prata, só com um fio de azeite para não colar à prata. Vire as espetadas a meio do processo para ficarem bem assadas. Acompanhe com as courgettes (receita seguinte, que pode preparar em seguida).Courgette no forno Ingredientes 2 courgettes pequenas Sal grosso Alho em pó Papel vegetal Um fiozinho de azeite Preparação Com um descascador, descasque as courgettes e retire as 2 pontas. Corte fatias fininhas ao comprido e coloque-as a direito num tabuleiro de ir ao forno, por cima do papel vegetal. Regue com um fio de azeite e polvilhe com o sal grosso e o alho em pó. Leve também ao forno até os bordos das fatias começarem a ficar dourados. Acompanhe com as espetadas.",
				    "durantetarde": [
				        {
				          	"desc": "1 iogurte magro"
				        },
				        {
				          	"desc": "2 fatias de fiambre"
				        }
				    ],
		      		"jantartitulo": "Almofadinhas de atum",
		      		"jantaring": [
		        		{
		          			"ing": "2 latas de atum em água"
				        },
				        {
				          	"ing": "1 tomate picado sem sementes"
				        },
				        {
				          	"ing": "1 ovo batido"
				        },
				        {
				          	"ing": "½ pimento vermelho picado"
				        },
				        {
				          	"ing": "Sal e pimenta"
				        },
				        {
				          	"ing": "Azeite"
				        },
				        {
				          	"ing": "Uma colher de sobremesa de salsa picada"
				        }
				    ],
		      		"jantarpreparacao": "Ponha o atum (sem água) numa tigela e adicione o tomate, o pimento e a salsa. Tempere com sal e pimenta. Adicione o ovo e mexa. Faça bolinhos pequenos e, em azeite bem quente, frite durante 2 minutos de cada lado, até ficarem dourados. Acompanhe com salada de alface."
	    			},
	    			{
	    			"id":5,
		    		"dia": "Dia 5",
		      		"titulo": "É provável que os resultados da dieta comecem a fazer-se notar. A primeira coisa que sentirá será uma redução do seu volume corporal e a barriga, em geral, é a primeira a dar sinal, porque é nela que acumulámos grande parte dos nossos excessos. O botão das calças tornou-se mais fácil de apertar, e as blusas mais justas começaram a cair melhor sobre o seu corpo, que já começou a mudar... para melhor! Se, no entanto, ainda não sente diferenças, não desespere. Nem todos os organismos reagem da mesma maneira, e alguns poderão demorar mais algum tempo do que outros. Isto notar-se-á tanto mais quanto menos peso necessite de perder. Mas é tudo uma questão de tempo. Continue sem quebrar as regras, desfrutando de tudo o que esta dieta lhe proporciona, e os resultados não tardarão a aparecer.",
		      		"conselho": "Várias pessoas que vêm à minha consulta dizem-me que não conseguem tomar o pequeno-almoço. A verdade é que, ao contrário daquilo que muitos pensam, saltar esta refeição não emagrece ninguém. Muito pelo contrário. Ainda que se ingiram menos calorias, essa ausência de comida (o«combustível» do corpo) provoca uma queda dos níveis de açúcar no sangue, que depois gerará mais fome e tornará mais rápida a absorção do que se ingerir. E, para além disso, se não tomar pequeno-almoço, aquilo que lhe vai apetecer comer, ao final da manhã, é muito provavelmente algo que engorda mais do que um simples pão e uma caneca de leite. Quem está em jejum, mais facilmente se sente tentado (e até com alguns direitos) a comer um folhado e um refrigerante, ou um bolo e um café.",
		      		"pqalm": [
		        		{
		          			"desc": "1 pão com mortadela de aves"
		        		},
		        		{
		          			"desc": "1 copo de café com leite"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 iogurte magro"
		        		},
		        		{
		          			"desc": "1 bolinha de queijo flamengo"
		        		}
		      		],
		      		"almocotitulo": "Empadão mexicano",
		      		"almocoing": [
				        {
				          	"ing": "300 g de carne picada (pode ser uma mistura de vaca e peru oufrango)"
				        },
				        {
				          	"ing": "1 pacote de tempero seco para tacos"
				        },
				        {
				          	"ing": "Meia cebola picada"
				        },
				        {
				          	"ing": "2 dentes de alho picados"
				        },
				        {
				          	"ing": "1 colher de sopa bem cheia de queijo Philadelphia light"
				        },
				        {
				          	"ing": "1 tomate grande sem sementes cortado aos bocadinhos"
				        },
				        {
				          	"ing": "Alface lavada e cortada em juliana"
				        },
				        {
				          	"ing": "Uma mão-cheia de queijo ralado magro"
				        },
				        {
				          	"ing": "Meia lata de tomate aos pedaços"
				        },
				        {
				          	"ing": "Um fiozinho de azeite"
				        },
				        {
				          	"ing": "Sal e pimenta"
				        }
				    ],
				    "almocopreparacao": "Ponha um fiozinho de azeite numa frigideira e, quando estiver quente, junte o alho e a cebola e mexa. Junte a carne e vá mexendo. Tempere com sal e pimenta.Junte o tempero de taco e mexa até a carne estar douradinha. Retire da frigideira e ponha numa taça funda para servir à mesa, de forma a cobrir o fundo. Espalhe o queijo Philadelphia por cima de forma uniforme, para tapar a carne toda. Polvilhe com o queijo ralado também de uma forma uniforme para cobrir o queijo Philadelphia (como a carne está quente, o queijo ralado vai derreter um pouco). Espalhe o tomate por cima do queijo e depois a alface por cimado tomate, sempre para cobrir a camada inferior por inteiro. Tempere os tomates em lata com sal e pimenta e espalhe levemente por cima da alface. E está pronto a servir...",
				    "durantetarde": [
				        {
				          	"desc": "1 porção de requeijão magro com tomate e orégãos"
				        }
				    ],
		      		"jantartitulo": "Atum fresco com molho de pimentos vermelhos assados",
		      		"jantaring": [
		        		{
		          			"ing": "1 bife de atum fresco"
				        },
				        {
				          	"ing": "1 pimento vermelho (assado no forno com um fiozinho deazeite)"
				        },
				        {
				          	"ing": "30 ml de caldo de peixe ou legumes"
				        },
				        {
				          	"ing": "5 ml de vinagre balsâmico"
				        },
				        {
				          	"ing": "Gengibre ralado (do tamanho de um dente de alho, ou seco, em pó)"
				        },
				        {
				          	"ing": "1 dente de alho picado"
				        },
				        {
				          	"ing": "Sal e pimenta"
				        },
				        {
				          	"ing": "Azeite"
				        }
				    ],
		      		"jantarpreparacao": "Temperar o bife de atum com sal e pimenta dos dois lados. Pôr um fiozinho de azeite numa frigideira e, quando estiver bem quente, adicionar o atum. Deixar dourar durante 3 minutos de cada lado (se gostar mais bem passado, deixe durante mais tempo). Passe o resto dos ingredientes com a varinha mágica até obter um molho muito cremoso. Colocar o molho por cima do bife de atum. Acompanhe com espinafres ou grelos salteados."
	    			},
	    			{
	    			"id":6,
		    		"dia": "Dia 6",
		      		"titulo": "Amanhã vai ter o seu primeiro dia de liberdade, por isso hoje tente portar-se o melhor possível. Beba bastante água e, se possível, não coma hoje o pão da manhã. Algumas pessoas conseguem fazê-lo todos os dias, mas a maioria não prescinde desse pão, que sabe tão bem e parece dar tanta energia para odia que se segue. Agora você já sabe que consegue ter energia sem essa ingestão de hidratos de carbono - antes, talvez também pensasse que não teria energia se não comesse arroz, massa ou batata a todas as refeições, e hoje já percebeu que passa sem esses alimentos. Mas não precisa de pôr o pão de lado, se não quiser. Se quiser, e se se sentir com motivação para isso, experimente hoje um dia diferente, seguindo o plano de refeições que lhe apresento em seguida.",
		      		"conselho": "O molho de soja é um dos que se pode usar, porque não tem hidratos de carbono. No entanto, sem exageros, porque é um pouco salgado. Quem tem tendência para fazer retenção delíquidos deve evitá-lo, assim como evitar tudo o que contém sal.",
		      		"pqalm": [
		        		{
		          			"desc": "1 omeleta de queijo e fiambre"
		        		},
		        		{
		          			"desc": "Café"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 cenoura às tiras com requeijão"
		        		}
		      		],
		      		"almocotitulo": "Almôndegas de queijo",
		      		"almocoing": [
				        {
				          	"ing": "250 g de carne picada (pode ser uma mistura entre vaca, frangoe peru)"
				        },
				        {
				          	"ing": "Uma mão-cheia de queijo ralado"
				        },
				        {
				          	"ing": "Sal e pimenta"
				        }
				    ],
				    "almocopreparacao": "Numa tigela, misture a carne picada com o queijo e tempere com sal e pimenta. Forme em bolinhas e cozinhe numa frigideira com azeite ou no forno. Sirva com o esparregado, cuja receita vem em seguida. Esparregado Ingredientes 1 saco de espinafres frescos Meio iogurte magro natural 1 dente de alho picado 1 colher de café de cebola em pó seca 1 chalota picada Sal e pimenta Coza os espinafres em água. Quando estiverem prontos, escorra bem e retire o excesso de água (se necessário, ponha num pano e esprema até sair a água toda).Passe os espinafres, o iogurte, o alho, a cebola e a chalota com a varinha mágica. Tempere com sal e pimenta. Ponha numa frigideira e deixe em lume brando até estar bem cremoso, mexendo sempre. Se necessário, junte mais iogurte.",
				    "durantetarde": [
				        {
				          	"desc": "1 iogurte"
				        },
				        {
				          	"desc": "2 fatias de fiambre"
				        }
				    ],
		      		"jantartitulo": "Sashimi",
		      		"jantaring": [
		        		{
		          			"ing": "1 bife de atum fresco"
				        },
				        {
				          	"ing": "1 bife de salmão fresco"
				        },
				        {
				          	"ing": "Molho de soja"
				        },
				        {
				          	"ing": "Wasabi (para quem gosta de picante)"
				        },
				        {
				          	"ing": "Gengibre"
				        }
				    ],
		      		"jantarpreparacao": "Retire as peles e espinhas do peixe. Corte em fatias fininhas. Sirva com o molho de soja, wasabi e o gengibre."
	    			},
	    			{
	    			"id":7,
		    		"dia": "Dia 7",
		      		"titulo": "Parabéns! Se chegou até aqui, já se sente, de certeza, mais leve e menos dependente de alguns alimentos que dantes achava imprescindíveis na sua alimentação. Hoje, no entanto, é dia de matar saudades. Entre logo de manhã na sua pastelaria favorita e escolha aquilo com que sonhou a semana inteira. Tente não exagerar na quantidade (não coma 3 bolos! Se comer um, já ficará consolado e só terá ingerido um terço das calorias), mas aproveite bem este dia, porque só terá outro daqui a outros sete dias. Se lhe apetecer um chocolate, coma um quadradinho. Se lhe apetecer vinho, beba um copo. Se lhe apetecer feijoada, coma um prato (não o tacho inteiro!). É certo que hoje estará a ingerir algumas calorias que já havia perdido, mas também estará a motivar-se para mais uma semana de alguns sacrifícios, por isso usufrua, com conta, peso e medida, das coisas boas que a vida tem para lhe dar. Hoje não há receitas! Cozinhe à vontade, vá almoçar ou jantar fora. Amanhã voltamos ao trabalho.",
		      		"conselho": "Se gosta de beber, e está em condições de optar entre o vinho e a cerveja, escolha o primeiro. A cerveja, como poderá ver na tabela do Índice Glicémico dos alimentos (p. 31), tem um elevado IG, com a desvantagem de que as suas calorias são maioritariamente acumuladas na barriga. Já o vinho - nomeadamente o tinto - tem algumas propriedades interessantes e, se não for consumido em exagero, pode mesmo ajudá-lo a prevenir problemas cardiovasculares.",
		      		"pqalm": [
		        		{
		          			"desc": ""
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": ""
		        		}
		      		],
		      		"almocotitulo": "",
		      		"almocoing": [
				        {
				          	"ing": ""
				        }
				    ],
				    "almocopreparacao": "",
				    "durantetarde": [
				        {
				          	"desc": ""
				        }
				    ],
		      		"jantartitulo": "",
		      		"jantaring": [
		        		{
		          			"ing": ""
				        }
				    ],
		      		"jantarpreparacao": ""
	    			},
	    			{
	    			"id":8,
		    		"dia": "Dia 8",
		      		"titulo": "A sua motivação está ao rubro! Ontem deliciou-se com os salgados e os doces que mais o têm tentado, nos últimos tempos, hoje é dia de voltar à dieta. São só mais sete dias até poder «prevaricar» novamente. E, quando lá chegar, já terámenos alguns quilos, e todo o seu esforço já terá valido a pena. Hoje é dia de se deliciar com outro tipo de iguarias... mais saudáveis. Aqui lhe deixo algumas sugestões...",
		      		"conselho": "Generalizou-se a ideia de que os ovos são inimigos da dieta, porque têm índices elevados de colesterol. A verdade é que os ovos não têm gorduras saturadas e, sobretudo a gema, é uma ótima fonte de proteínas e vitamina E.",
		      		"pqalm": [
		        		{
		          			"desc": "1 pão com fiambre e queijo"
		        		},
		        		{
		          			"desc": "1 copo de leite"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 iogurte"
		        		},
		        		{
		          			"desc": "1 gelatina"
		        		}
		      		],
		      		"almocotitulo": "Amêijoas à Bulhão Pato",
		      		"almocoing": [
				        {
				          	"ing": " ½ kg de amêijoas"
				        },
				        {
				          	"ing": "1 fio de azeite"
				        },
				        {
				          	"ing": "2 dentes de alho cortados às rodelas"
				        },
				        {
				          	"ing": "½ molho de coentros picados"
				        },
				        {
				          	"ing": "Sumo de ½ limão"
				        },
				        {
				          	"ing": "Sal e pimenta"
				        }
				    ],
				    "almocopreparacao": "Lave bem as amêijoas. Ponha o azeite num tacho e, quando estiver quente, junte o alho e os coentros até o alho alourar. Junte as amêijoas e tape. Vá mexendo de vez em quando. Quando as amêijoas estiverem todas abertas, retire do lume e ponha num prato fundo para servir. Tempere com sal, pimenta e o sumo de limão e mexa bem. Acompanhe com espargos, confecionados segundo a receita que se segue. Espargos Espargos frescos Alho em pó Sal grosso Meio limão Azeite Lave bem os espargos e corte a parte de baixo. Numa frigideira, aqueça o azeite. Junte os espargos e mexa. Adicione o alho, o sal e a pimenta. Tape e deixe em lume brando até os espargos estarem tenrinhos. Quando estiverem prontos, sirva com umas gotas de limão por cima. NOTA: Também poderá fazer as amêijoas (assim como uma saladinha de polvo, gambas al ajillo ou pica-pau) a meio da tarde. É uma boa opção para os dias em que não lhe apetece fazer jantar. Faça um género de um lanche de petiscos e prove um bocado de cada um.",
				    "durantetarde": [
				        {
				          	"desc": "1 chávena de chá"
				        },
				        {
				          	"desc": "Carpaccio de carne de vaca"
				        }
				    ],
		      		"jantartitulo": "Omeleta de salmão fumado",
		      		"jantaring": [
		        		{
		          			"ing": "3 ovos"
				        },
				        {
				          	"ing": "2 fatias de salmão fumado"
				        },
				        {
				          	"ing": "1 fatia de queijo flamengo magro"
				        },
				        {
				          	"ing": "1 fio de azeite"
				        }
				    ],
		      		"jantarpreparacao": "Numa frigideira, aqueça o azeite. Enquanto isso, bata os ovos numa tigela. Depois, quando o azeite estiver bem quente, deite os ovos sobre ele e deixe encorpar. Quando os ovos começarem a dar corpo à omeleta, deite sobre eles o queijo e depois o salmão fumado. Dobre as pontas sobre o recheio, de forma a transformar o círculo de ovo num retângulo. Quando os ovos começarem a soltar-se, vire e deixe alourar do outro lado. Sirva acompanhado de uma salada de alface e tomate."
	    			},
	    			{
	    			"id":9,
		    		"dia": "Dia 9",
		      		"titulo": "Provavelmente já sentiu necessidade de voltar ao supermercado, para se abastecer de novos produtos e tentar diversificar as suas proteínas. É importante que o faça, e que procure ir a mercados diferentes para conhecer a sua oferta. Nesta segunda semana pode sentir alguma saturação, e é fundamental que não se deixe cair na rotina. Diversifique tanto quanto possível, na qualidade dos produtos e na refeição em que os ingere. Se um dia come ovos ao pequeno-almoço, no outro cozinhe-os para o seu jantar. Se um dia bebe o iogurte a meio da manhã, experimente bebê-lo no dia seguinte à tarde. Desta forma conseguirá tornar todos os dias da sua dieta num dia único, com conquistas próprias.",
		      		"conselho": "Apesar de esta ser uma dieta bem variada, já deve ter reparado que não tenho sugerido outro pão que não o de centeio. E já se deve ter perguntado se fará assim tanta diferença comer o pão branco a que estava habituado. A verdade é que faz. Tudo o que seja mais fácil de digerir, em geral, implica que o processamento seja mais rápido. Ou seja, o seu organismo fará menos esforço para o assimilar. E isso levá-lo-á a engordar. O pão branco, até chegar à sua mesa, já passou por muitas fases de processamento que o seu estômago já não terá de fazer. Ao trigo é retirado o farelo e as fibras, e só depois ele é moído e transformado numa fina farinha. Todo este processo faz com que uma fatia de pão branco seja assimilado tão depressa como um pacote de açúcar, e o seu pâncreas seja levado a produzir uma grande quantidade de insulina, para combater essa descarga súbita de açúcar no sangue. Isso faz também com quese sinta menos saciado, e tenha vontade de comer mais outra fatia, e mais outra, e mais outra... Ou a que, mesmo que coma só uma, sinta fome pouco tempo depois. O pão escuro, artesanal, menos processado, contém igualmente amidos, mas não lhes foram retiradas as fibras, o que fará com que os açúcares entrem mais lentamente na corrente sanguínea. E, consequentemente, o pâncreas produzirá menos insulina, e você sentir-se-á muito mais saciado.",
		      		"pqalm": [
		        		{
		          			"desc": "Torradas com queijo Philadelphia ou manteiga magra (pouco esó para variar)"
		        		},
		        		{
		          			"desc": "1 chávena de chá com uns pingos de nata magra"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 gelatina"
		        		},
		        		{
		          			"desc": "1 ovo cozido"
		        		}
		      		],
		      		"almocotitulo": "Rolo de carne",
		      		"almocoing": [
				        {
				          	"ing": "300 g de carne picada (pode ser uma mistura de carne de peru//frango/vaca)"
				        },
				        {
				          	"ing": "1 cebola picada"
				        },
				        {
				          	"ing": "2 dentes de alho picados ou 1 colher de chá de alho em pó"
				        },
				        {
				          	"ing": "1 colher de chá de mostarda sem açúcar"
				        },
				        {
				          	"ing": "1 colher de chá de tomilho"
				        },
				        {
				          	"ing": "Sal e pimenta"
				        },
				        {
				          	"ing": "1 ovo"
				        },
				        {
				          	"ing": "50 ml de leite"
				        },
				        {
				          	"ing": "2 colheres de sobremesa de molho de Worcestershire"
				        }
				    ],
				    "almocopreparacao": "Aqueça o forno a 170° C. Ponha todos os ingredientes numa tigela e, com as mãos, misture tudo. Ponha numa forma e leve ao forno durante mais ou menos 1 hora (se tiver um termómetro de carne verifique se, no centro, está a aproximadamente 68° C). Retire e corte às fatias. Sirva com cenoura ralada.",
				    "durantetarde": [
				        {
				          	"desc": "1 iogurte magro"
				        },
				        {
				          	"desc": "3 fatias de mortadela"
				        }
				    ],
		      		"jantartitulo": "1 ou 2 hambúrgueres + 1 ovo estrelado + cebola frita + 1 fatiade fiambre + 1 folha de alface + 1 rodela de tomate (Se estiver com desejos de fast food, faça este jantar) Grelhe os hambúrgueres e, ao mesmo tempo, frite a cebola num fio de azeite e estrele o ovo. Depois faça uma torre no seu prato. Ex.: hambúrguer, ovo estrelado por cima, a cebola, a alface, o tomate, a fatia de fiambre e o outro hambúrguer no cimo da torre.",
		      		"jantaring": [
		        		{
		          			"ing": ""
				        }
				    ],
		      		"jantarpreparacao": ""
	    			},
	    			{
	    			"id":10,
		    		"dia": "Dia 10",
		      		"titulo": "Um terço da dieta já ficou para trás, e aproxima-se a passos largos da metade, altura em que voltará a poder comer sopa e fruta - alimentos dos quais até talvez prescindisse, antes de iniciar a dieta, mas de que agora certamente sente falta. Temos sempre mais saudades daquilo que não podemos ter... Mas não se preocupe porque, neste caso, está prestes a matar essas saudades, e depois poderá usufruir destes alimentos para o resto da vida.A fruta será também importante para contrariar a obstipação(prisão de ventre), que é provável que sinta nesta fase. Mas não se esqueça de que há formas de a contornar...",
		      		"conselho": "Se estes primeiros dias da dieta o deixaram com os «intestinos preguiçosos», aconselho-o a comprar, num supermercado ou numa ervanária, um chá contra a obstipação. Se não gosta de chá, experimente um laxante natural, também disponível em ervanárias ou farmácias. Estes têm a desvantagem de causar alguma dependência, quando usados por sistema, mas no seu caso será um recurso pontual, porque a sua alimentação está prestes a recuperar os alimentos que vão pôr os seus intestinosa funcionar outra vez.",
		      		"pqalm": [
		        		{
		          			"desc": "1 pão com ovo mexido"
		        		},
		        		{
		          			"desc": "1 copo de leite com café"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 iogurte"
		        		},
		        		{
		          			"desc": "1 fatia de queijo"
		        		},
		        		{
		          			"desc": "1 fatia de fiambre"
		        		}
		      		],
		      		"almocotitulo": "Courgette recheada com salsicha de peru",
		      		"almocoing": [
				        {
				          	"ing": "1 courgette grande"
				        },
				        {
				          	"ing": "Um fio de azeite"
				        },
				        {
				          	"ing": "1 cebola picada"
				        },
				        {
				          	"ing": "3 dentes de alho picados"
				        },
				        {
				          	"ing": "60 g de cogumelos"
				        },
				        {
				          	"ing": "2 salsichas de peru"
				        },
				        {
				          	"ing": "2 tomates cortados aos bocadinhos sem sementes"
				        },
				        {
				          	"ing": "Manjericão picado"
				        },
				        {
				          	"ing": "Tomilho picado (pode ser seco)"
				        },
				        {
				          	"ing": "60 g de queijo parmesão ralado"
				        },
				        {
				          	"ing": "1 ovo"
				        },
				        {
				          	"ing": "Sal e pimenta"
				        },
				    ],
				    "almocopreparacao": "Corte a courgette ao meio (ao comprido) e retire o interior. Reserve. Numa frigideira, ponha um fiozinho de azeite. Refogue o alho e a cebola. Junte os cogumelos e o interior da courgette reservada. Mexa bem. Retire o interior das salsichas e junte à frigideira. Adicione o tomate, o manjericão, o tomilho e tempere com sal e pimenta. Mexa até a carne estar dourada. Deixe arrefecer um bocadinho, retire o excesso de líquido, e depois misture tudo com o ovo batido e o queijo. Encha as 2 metades da courgette. Num pirex pequeno, coloque as courgettes e deite água até cobrir ½ delas. Leve ao forno até estar dourado(aproximadamente 30 minutos em lume médio).",
				    "durantetarde": [
				        {
				          	"desc": "1 chávena de chá"
				        },
				        {
				          	"desc": "1 fatia de rolo de carne (se sobrou da véspera)"
				        }
				    ],
		      		"jantartitulo": "Pâté de requeijão com legumes (para um jantar mais leve)",
		      		"jantaring": [
		        		{
		          			"ing": "1 requeijão pequeno"
				        },
				        {
				          	"ing": "1 colher de sopa de leite magro"
				        },
				        {
				          	"ing": "1 colher de sopa de iogurte magro"
				        },
				        {
				          	"ing": "1 cebola chalota picada"
				        },
				        {
				          	"ing": "1 dente de alho picado"
				        },
				        {
				          	"ing": "1 colher de café de cebolinho seco"
				        },
				        {
				          	"ing": "1 colher de café de coentro picado (ou seco)"
				        }
				    ],
		      		"jantarpreparacao": "Misture tudo e tempere com sal e pimenta. Sirva com tiras de aipo, cenoura, pepino, pimentos vermelhos ou rodelas de rabanete."
	    			},
	    			{
	    			"id":11,
		    		"dia": "Dia 11",
		      		"titulo": "Se chegou até aqui sem se pesar uma única vez, dou-lhe os meus sinceros parabéns! A maior parte dos meus pacientes não resiste a subir à balança de vez em quando, durante os primeiros 15 dias, na esperança de ver o ponteiro a descer. Há até quem se pese todos os dias, mas eu não aconselho, porque a quantidadede peso que vai perder, dia a dia, é variável. Há pessoas que perdem logo muito no início (porque o corpo reage imediatamente à dieta) e outras que só começam a perder ao fim da primeira semana. Se se pesar e não vir o ponteiro descer como gostaria, poderá sentir-se frustrado, colocar em causa a eficácia da dieta, e até desistir. E, se está a fazer esta dieta com alguém que perde peso mais rapidamente (um homem, por exemplo), será ainda pior. O que eu aconselho, nestes primeiros 15 dias, é que se foque na diminuição do seu volume, que se irá refletir nas suas roupas. Imagine-se mais leve, mais saudável, mais liberto das dependências de antigamente, e deixe a balança para quando chegar a meio da dieta e tiver de se avaliar, para avançar para a fase seguinte.",
		      		"conselho": "É normal que associemos a palavra «dieta» a exercício físico, e que comecemos a praticá-lo abundantemente na mesma altura em que mudamos os nossos hábitos alimentares. Afinal de contas, queremos resultados rápidos e sempre nos ensinaram que era esta a forma de os conseguir. Eu, no entanto, não sou apologista de que se tente as duas estratégias ao mesmo tempo. Porque a verdade é que, se começar a praticar exercício de forma intensa, estará a transformar a gordura em músculo (o que é bom) mas não estará a perder peso, e mais dificilmente diminuirá o seu volume corporal. Para além de que o exercício abrirá o seu apetite, e ser-lhe-á muito mais difícil seguir as restrições de uma dieta. Ainda para mais uma dieta baseada na restrição de hidratos de carbono, que no início lhe poderá dar uma sensaçãode «fraqueza» (depois passa). Se fizer exercício físico intenso, maior e mais desconfortável será esta sensação de fraqueza. Se já praticava um desporto, pode e deve continuar a fazê-lo,mas sem o intensificar. Se escolheu o início da dieta para começar a praticar exercício, aconselho-o a esperar mais um pouco. Perca primeiro os quilos que precisa, diminua o seu volume corporal, e depois, sim, será a altura indicada para criar hábitos de vida saudável, onde o exercício físico é fundamental. Por agora, se quiser ter uma vida mais ativa, fique-se pelas caminhadas ou, no máximo, pelos exercícios aeróbicos (aeróbica, step, bodyjump, bodycombat e danças).",
		      		"pqalm": [
		        		{
		          			"desc": "Torradas com um pouco de manteiga magra"
		        		},
		        		{
		          			"desc": "1 chávena de chá"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 galão"
		        		},
		        		{
		          			"desc": "3 fatias de mortadela"
		        		}
		      		],
		      		"almocotitulo": "Frittata de gambas, courgette e tomate",
		      		"almocoing": [
				        {
				          	"ing": "Azeite"
				        },
				        {
				          	"ing": "1 courgette pequena cortada às rodelas"
				        },
				        {
				          	"ing": "1 dente de alho picado"
				        },
				        {
				          	"ing": "1 tomate sem sementes cortado aos bocadinhos"
				        },
				        {
				          	"ing": "70 g de miolo de gambas cozidas"
				        },
				        {
				          	"ing": "3 ovos"
				        },
				        {
				          	"ing": "Sal e pimenta"
				        }
				    ],
				    "almocopreparacao": "Numa frigideira (que possa ir ao forno), aqueça o azeite.Quando estiver quente, junte as rodelas de courgette e vá mexendo durante mais ou menos 4 minutos. Junte o alho, o tomate e as gambas inteiras e deixe ao lume durante aproximadamente 2 minutos. Bata os ovos com o sal e a pimenta e deite na frigideira. Misture uma só vez e deixe cozinhar mais ou menos 2 minutos. Leve ao forno (grill) uns minutos até a parte de cima ficar dourada.",
				    "durantetarde": [
				        {
				          	"desc": "1 gelatina"
				        },
				        {
				          	"desc": "2 triângulos de queijo"
				        },
				        {
				          	"desc": "1 lata de espargos"
				        }
				    ],
		      		"jantartitulo": "Beringela recheada",
		      		"jantaring": [
		        		{
		          			"ing": "1 beringela grande"
				        },
				        {
				          	"ing": "200 g de carne de frango ou peru picada"
				        },
				        {
				          	"ing": "Um fio de azeite"
				        },
				        {
				          	"ing": "Sal e pimenta"
				        },
				        {
				          	"ing": "1 cebola pequena picada"
				        },
				        {
				          	"ing": "1 dente de alho picado"
				        },
				        {
				          	"ing": "1 pimento vermelho picado"
				        },
				        {
				          	"ing": "2 tomates cortados aos bocadinhos sem sementes"
				        },
				        {
				          	"ing": "Salsa fresca picada"
				        },
				        {
				          	"ing": "Manjericão fresco picado"
				        },
				        {
				          	"ing": "2 colheres de sopa de queijo parmesão"
				        },
				        {
				          	"ing": "2 claras de ovos"
				        }
				    ],
		      		"jantarpreparacao": "Aqueça o forno a 180° C. Corte a beringela ao meio (ao comprido). Retire a maioria do centro, mas deixe o suficiente para a beringela manter a sua forma. Coza o interior da beringela em água a ferver durante aproximadamente 10 minutos. Numa frigideira, ponha um fiozinho de azeite e, quando este estiver quente, ponha a cebola, o alho e os pimentos. Quando a cebola estiver transparente, ponha a carne, tempere com sal e pimenta e vá mexendo até ela ficar dourada. Desligue o lume e adicione a beringela cozida, as ervas frescas, 1 colher de queijo parmesão e as claras. Mexa bem e encha as 2 metades da beringela. Espalhe por cima das 2 metades o tomate e tempere com sal e pimenta. Polvilhe o resto com queijo parmesão e leve ao forno durante aproximadamente 45 minutos, ou até as coberturas estarem bem douradas."
	    			},
	    			{
	    			"id":12,
		    		"dia": "Dia 12",
		      		"titulo": "Por esta altura, imagino que já esteja um pouco saturado desta fase da dieta. Mas tenho boas notícias para si: está apenas a dois dias de um novo «Dia da Asneira», em que poderá matar saudades de todos os alimentos de que tanto gosta. E, depois disso, entrará numa segunda fase, onde haverá novidades que o ajudarão a quebrar a rotina. A verdade é que a «rotina», no caso desta dieta, é meramente psicológica. Não sente fome, pode comer uma variada imensa de alimentos e combiná-los de formas variadas, cozinhando-os também de formas diversas... Tudo coisas que, na maioria das outras dietas, não acontece. O que sente falta é da liberdade de poder comer tudo O que lhe apetece, como lhe apetece. Mas lembre-se de que foi essa liberdade que o conduziu ao peso que tinha, há 12 dias. Essa liberdade é possível, e voltará a tê-la quando alcançar o peso que deseja. Mas terá de ser uma liberdade consciente, que saiba que certos alimentos e comportamentos têm as suas consequências, por isso devem ser exceções em vez de hábitos.",
		      		"conselho": "Coma devagar. Mastigue e saboreie bem os alimentos. Ao começar a ingeri-los, não sente imediatamente satisfação. Segundo alguns estudos indicam, só vinte minutos depois começará a senti-la. Por isso, se comer rapidamente, sem controlar as quantidades, é muito provável que coma muito mais do que se comesse pausadamente, uma vez que dessa forma sentir-se-ia satisfeito mais cedo, com menos alimentos ingeridos.",
		      		"pqalm": [
		        		{
		          			"desc": "1 pão com presunto"
		        		},
		        		{
		          			"desc": "1 copo de café com leite"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 gelatina"
		        		},
		        		{
		          			"desc": "1 bolinha de queijo flamengo"
		        		},
		        		{
		          			"desc": "1 cenoura"
		        		}
		      		],
		      		"almocotitulo": "Hambúrguer de salsicha de peru",
		      		"almocoing": [
				        {
				          	"ing": "3 salsichas de peru"
				        },
				        {
				          	"ing": "1 colher de café de cominho em pó"
				        },
				        {
				          	"ing": "1 colher de café de coentros picados"
				        },
				        {
				          	"ing": "1 colher de café de alho em pó"
				        },
				        {
				          	"ing": "1 colher de café de paprika em pó"
				        },
				        {
				          	"ing": "Sal e pimenta-de-caiena"
				        }
				    ],
				    "almocopreparacao": "Triture as salsichas ou corte-as em pedaços muito pequenos, para dentro de uma tigela. Adicione o resto dos ingredientes emexa bem. Forme um hambúrguer.Aqueça o azeite na frigideira e, quando este estiver bem quente,coloque o hambúrguer e deixe fritar durante 3 minutos, de cadalado, ou até ficar dourado.Sirva com salada de rúcula com coentros.",
				    "durantetarde": [
				        {
				          	"desc": "1 iogurte"
				        },
				        {
				          	"desc": "1 queijo fresco com pimenta"
				        }
				    ],
		      		"jantartitulo": "1 bife de vaca grelhado com cogumelos cremosos Cogumelos cremosos",
		      		"jantaring": [
		        		{
		          			"ing": "100 g de cogumelos lavados e laminados"
				        },
				        {
				            "ing": "Azeite"
				        },
				        {
				          	"ing": "Sal e pimenta"
				        },
				        {
				          	"ing": "10 folhas de espinafres picadas"
				        },
				        {
				          	"ing": "1 colher de sopa de queijo Philadelphia light"
				        },
				        {
				          	"ing": "1 colher de sobremesa de leite magro"
				        }
				    ],
		      		"jantarpreparacao": "Aqueça o azeite numa frigideira. Junte os cogumelos e vá mexendo até ficarem dourados. Adicione os espinafres e mexa.Misture o queijo Philadelphia com o leite, numa tigela à parte, e depois junte-os aos restantes ingredientes que tem na frigideira. Tempere com sal e pimenta. Sirva com salada de tomate temperada com azeite e orégãos."
	    			},
	    			{
	    			"id":13,
		    		"dia": "Dia 13",
		      		"titulo": "Agora que o seu corpo já começou a mudar, e já acredita que está mesmo a perder peso, e vai perder ainda mais, é normal quese sinta tentado a fazer tudo o mais que lhe digam que emagrece. É quando conseguimos um dedo que começamos a desejar o braço todo! E ainda bem que assim é, porque só quando estamos motivados é que temos ambição. Se já começou a idealizar o seu corpo com um peso adequado, e com aquelas formas que havia perdido, é sinal de que está no bom caminho, e que a frustração já deu lugar ao ânimo e ao empenho. No dia 12 falei-lhe sobre o exercício físico, e hoje falo-lhe sobre os tratamentos estéticos, que cada vez estão mais na moda e a preços muito acessíveis. A verdade é que não costumo aconselhá-los aos meus pacientes enquanto dura a dieta. Há tratamentos muito eficazes para combater a celulite, tonificar a pele, e até para perder alguns centímetros em determinadas zonas onde a gordura é mais difícil de eliminar. Mas a verdadeé que tem tempo para o fazer. Acho sempre preferível que uma pessoa se concentre primeiro na perda de peso e depois, quando atingir o peso adequado, comece a pensar nas formas do seu corpo e no aspeto da sua pele. Inclusive há pessoas que perdem tanto peso, que só conseguem livrar-se das «peles» com uma cirurgia estética! Mas tudo isso poderá ficar para uma segunda fase. Neste mês, concentre-se naquilo que é importante, por agora: alcançar o peso que deseja e aprender a comer, para não voltar a engordar.",
		      		"conselho": "Ainda que deixe os trata mentos estéticos para depois da dieta, é importante que vá já mimando a sua pele com produtos que melhorem o seu aspeto. Se não tem por hábito usar um bom hidratante, depois do banho, é altura de começar a fazê-lo. A verdade é que, ao engordar, a sua pele foi obrigada a esticar. Em alguns casos, até terá «partido» e formado estrias. Ao emagrecer, perderá a gordura que tinha em excesso, mas a sua pele demorará mais algum tempo a acompanhar esta mudança. Em pessoas de mais idade, cuja pele já tem pouca elasticidade, esse retrocesso pode ser mesmo impossível sem o recurso a tratamentos estéticos ou cirúrgicos específicos. É importante, por isso, que hidrate bem a sua pele, para que ela mantenha a elasticidade necessária para acompanhar as mudanças que estão a operar-se no seu corpo. Se uma grávida o faz, porque está a engordar rapidamente, também você, que está a emagrecer rapidamente, terá de o fazer...",
		      		"pqalm": [
		        		{
		          			"desc": "1 pão de centeio com requeijão"
		        		},
		        		{
		          			"desc": "1 chávena de chá"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 iogurte natural magro com canela e adoçante"
		        		},
		        		{
		          			"desc": "2 rolinhos mistos de queijo e fiambre"
		        		}
		      		],
		      		"almocotitulo": "Lulas recheadas com camarão",
		      		"almocoing": [
				        {
				          	"ing": "6 lulas limpas inteiras"
				        },
				        {
				          	"ing": "150 g de camarões pequenos"
				        },
				        {
				          	"ing": "2 tomates sem pele e sem sementes cortados aos bocadinhos"
				        },
				        {
				          	"ing": "Tomate em polpa"
				        },
				        {
				          	"ing": "Caldo de marisco ou peixe"
				        },
				        {
				          	"ing": "1 cebola picada"
				        },
				        {
				          	"ing": "4 dentes de alho picados"
				        },
				        {
				          	"ing": "Sal e pimenta"
				        },
				        {
				          	"ing": "Um fio de azeite"
				        },
				        {
				          	"ing": "Palitos"
				        }
				    ],
				    "almocopreparacao": "Lave bem as lulas e tempere com um bocadinho de alho. Aqueça o azeite numa frigideira e, quando este estiver bem quente, junte metade dos alhos e metade da cebola. Quando a cebola estiver transparente, junte os tomates picados, o camarão e os tentáculos das lulas, cortados em pedaços. Tempere com sal e pimenta e deixe cozinhar, destapado (para evaporar os líquidos e ficar mais espesso). Recheie as lulas com este preparado, prenda com um palito e reserve. Entretanto, faça um molho com o alho e a cebola refogados em azeite, a polpa de tomate e o caldo. Junte as lulas e cozinhe, tapadas, até ficarem macias. Na hora de servir, tire os palitos e decore com a salsa picada. Pode acompanhar com brócolos cozidos, temperados com  omolho das lulas. De sobremesa, coma uma gelatina.",
				    "durantetarde": [
				        {
				          	"desc": "1 copo de café com leite"
				        },
				        {
				          	"desc": "3 fatias de paio do lombo"
				        }
				    ],
		      		"jantartitulo": "Cozido à portuguesa",
		      		"jantaring": [
		        		{
		          			"ing": "Nacos de carne de vaca e de frango"
				        },
				        {
				          "ing": "1 chouriço (só para dar sabor. Depois não o coma)"
				        },
				        {
				          "ing": "1 couve"
				        },
				        {
				          "ing": "1 nabo"
				        },
				        {
				          "ing": "1 chuchu"
				        }
				    ],
		      		"jantarpreparacao": "Coza as carnes e, quando estas estiverem a ficar tenras, junte os legumes e cozinhe-os no caldo da carne. Se quiser, pode juntar outros enchidos e até carne de porco.Mas, na hora de servir, deixe essas carnes para os outros e sirva-se apenas daquelas que lhe são permitidas."
	    			},
	    			{
	    			"id":14,
		    		"dia": "Dia 14",
		      		"titulo": "Parabéns! Hoje está por sua conta e pode fazer todos os disparates que quiser! Mas com conta, peso e medida, de preferência... Faça um bolo, encomende uma piza, vá jantar fora e peça uma boa porção de batatas fritas! Conquistou este dia, por isso usufrua dele. Se lhe apetece fazer muitos disparates, mas é daqueles que depois fica com a consciência pesada, faça-os na mesma, e depois aproveite o dia para fazer uma boa caminhada ou praticar aquele desporto de que mais gosta, com os seus amigos. Será uma forma de ocupar parte do dia, sem pensar em comida, e de queimar algumas das calorias extra que ingeriu.",
		      		"conselho": "Vai comer fora, mas não quer estragar por completo a sua dieta? Experimente fazer um pequeno lanchinho com os alimentos permitidos antes de sair para o restaurante. Certamente que sentirá menos apetite na hora da refeição, e sentir-se-á menos tentado a encher-se com as entradas (e sobretudo o pão) que costuma rechear as mesas dos restaurantes. Deliciar-se com pão, ao contrário do que muitas pessoas pensam, não vai enchê-lo e saciar-lhe a fome. Pelo contrário. A ingestão desses hidratos de carbono (sobretudo se estiver com fome, se for pão branco, e se não acompanhar o pão de nenhuma gordura ou proteína) vai provocar uma descarga de glicose na sua corrente sanguínea, que o levará a ter mais fome passado pouco tempo. Se chegar com fome ao restaurante, o mais prudente é pedir que levem o cesto do pão e lhe tragam uma sopa ou caldo, queo ajudará a sentir-se saciado sem ingerir tantos hidratos de carbono. Se não resistir mesmo ao pão (para mim é uma dificuldade!), escolha um pedaço, de preferência escuro, mas não o coma a seco. Molhe-o antes num bocado de azeite, o que vai impedir que todos os hidratos sejam absorvidos. Mas atenção: é azeite, não é manteiga! É bem mais saudável e igualmente delicioso. Por último, se lhe apetece mesmo uma sobremesa, coma-a. Mas sugira a um amigo partilhá-la, ou coma apenas parte dela. Se o fizer, sentirá o seu desejo saciado, sem ingerir todas as suas calorias.",
		      		"pqalm": [
		        		{
		          			"desc": ""
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": ""
		        		}
		      		],
		      		"almocotitulo": "",
		      		"almocoing": [
				        {
				          	"ing": ""
				        }
				    ],
				    "almocopreparacao": "",
				    "durantetarde": [
				        {
				          	"desc": ""
				        }
				    ],
		      		"jantartitulo": "",
		      		"jantaring": [
		        		{
		          			"ing": ""
				        }
				    ],
		      		"jantarpreparacao": ""
	    			},
	    			{
	    			"id":15,
		    		"dia": "Dia 15",
		      		"titulo": "Começa hoje a segunda fase da sua dieta e acaba de recuperar a possibilidade de comer fruta e sopa (ainda que com as devidas restrições). Isto permitir-lhe-á novas combinações de alimentos e receitas mais diversificadas, para que faça de cada dia da dieta um prazer. Lembre-se de que, nesta fase, é normal que perca peso mais lentamente. Mas poderá, depois dos 15 dias que este livro lhe irá propor, manter-se mais algum tempo nesta fase, ou recorrer ainda à terceira, que é uma fase intermédia entre a 2 e a Manutenção. Tudo dependerá dos resultados que obtiver, mas é preferível que perca peso mais lentamente com menor sacrifíciodo que fazer agora um grande esforço, que o pode conduzir agrandes resultados, mas que depois serão mais difíceis de manter porque, depois de uma grande restrição, apetece-nos sempre uma compensação.",
		      		"conselho": "Os frutos vermelhos ficam muito saborosos misturados com um iogurte gelado, ou com uma bola de gelado de baixas calorias. É certo que o gelado, na maioria dos casos, tem muito açúcar, mas, como também tem gordura, dar-lhe-á uma boa sensação de satisfação. Desde que não o faça todos os dias, é uma boa sobremesa para o deixar saciado.",
		      		"pqalm": [
		        		{
		          			"desc": "1 tosta mista"
		        		},
		        		{
		          			"desc": "1 copo de leite com café"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 gelatina"
		        		},
		        		{
		          			"desc": "1 bolinha de queijo"
		        		},
		        		{
		          			"desc": "1 fatia de presunto"
		        		}
		      		],
		      		"almocotitulo": "Miniquiche de salmão, alho-francês e cogumelos",
		      		"almocoing": [
				        {
				          	"ing": "2 ovos"
				        },
				         {
				          	"ing": "1 copo de leite"
				        },
				         {
				          	"ing": "100 g de salmão fumado picado (ou cortado em bocadinhosmuito pequeninos)"
				        },
				         {
				          	"ing": "1 alho-francês cortado às rodelas"
				        },
				         {
				          	"ing": "1 pimento vermelho cortado aos bocadinhos, sem sementes"
				        },
				         {
				          	"ing": "50 g de cogumelos laminados"
				        },
				         {
				          	"ing": "60 g de queijo ralado (mozzarella light ou flamengo light)"
				        },
				         {
				          	"ing": "1 colher de chá de mostarda sem açúcar"
				        },
				         {
				          	"ing": "Tomilho"
				        },
				         {
				          	"ing": "Paprika"
				        },
				         {
				          	"ing": "Sal e pimenta"
				        },
				         {
				          	"ing": "Azeite"
				        }

				    ],
				    "almocopreparacao": "Aqueça o forno a 190° C. Numa frigideira, verta um fiozinho de azeite e, quando este estiver quente, adicione o alho-francês às rodelas. Após cerca de 2 minutos, junte os cogumelos laminados e, mais uns depois, o pimento aos bocadinhos. Mexa bem. Junte o tomilho e desligue o lume. Mexa bem. Na tarteira, espalhe o salmão e depois ponha o combinado de legumes por cima. Espalhe o queijo ralado por cima dos legumes. Numa tigela, bata os ovos com o leite, a mostarda, o sal e a pimenta. Deite em cima do queijo ralado e polvilhe com paprika. Leve a quiche ao forno durante aproximadamente 45 minutos ou até ficar dourada.",
				    "durantetarde": [
				        {
				          	"desc": "1 iogurte"
				        },
				        {
				          	"desc": "1 porção de frutos vermelhos (pode misturá-los com o iogurte e com uma gelatina, se quiser)"
				        }
				    ],
		      		"jantartitulo": "Sopa com os legumes permitidos",
		      		"jantaring": [
		        		{
		          			"ing": ""
				        }
				    ],
		      		"jantarpreparacao": "Por exemplo: 1 couve-flor + 1 courgette + 1 alho-francês + 1 cebola + 1 molho de coentros; 2 courgettes + 2 alhos-franceses + 2 cebolas. Depois junte algumas folhas verdes (agriões, espinafres, etc.) e não triture."
	    			},
	    			{
	    			"id":16,
		    		"dia": "Dia 16",
		      		"titulo": "Tenho-lhe sugerido, ao longo deste livro, receitas variadas e fáceis de confecionar, com recurso aos alimentos que lhe são permitidos ingerir. Mas, se vive com outras pessoas que não estão a fazer dieta, nomeadamente filhos, é provável que a esta hora eles já se tenham queixado por não poderem comer pratos como bacalhau à brás, lasanha, arroz de polvo ou arroz de pato. De facto, estes não são os pratos mais indicados para si, porque não é possível separar o bacalhau da batata palha, a carne da massa de lasanha, ou o polvo e o pato do arroz. Pode sempre vê-los comer estes pratos, enquanto se delicia com os seus...mas será tortuoso, e um teste difícil à sua força de vontade, a que é escusado submeter-se. Se quer preparar uma refeição em família, opte pelos pratos em que seja fácil separar os hidratosde carbono: frango no churrasco (deixe o pão, o arroz e as batatas), esparguete à bolonhesa (sirva o esparguete e a bolonhesa separados, e coma apenas a segunda), carne assada com batata (coma a carne e deixa a batata para os outros) ou carne ou peixe grelhado com batata e legumes (coma só a carne ou o peixe e os legumes). Desta forma sentir-se-á menos «diferente» e não terá a família ou os amigos a olharem para o seu prato e a fazerem-lhe perguntas sem fim sobre a sua dieta e de como ela está a decorrer (o que geralmente é desagradável, mesmo quando os resultados são muito satisfatórios).",
		      		"conselho": "Os grelhados podem ser um prato muito saboroso, se temperar bem a carne ou o peixe, com uma pitada de sal e especiarias. Apesar de serem considerados «de dieta», os grelhados são excelentes para todos os membros da família, estejam eles a fazer dieta ou não. São os acompanhamentos que fazem a diferença. Quem está a fazer dieta deverá evitar todos os hidratos de carbono, enquanto quem não esteja pode acompanhar os grelhados com batata, arroz ou pão. E esqueça a ideia de que os grelhados são um prato de verão. Com um grelhador elétrico e um bom exaustor poderá fazer grelhados todo o ano, em sua casa. É rápido, muito fácil de confecionar, e é sempre saboroso.",
		      		"pqalm": [
		        		{
		          			"desc": "1 pão"
		        		},
		        		{
		          			"desc": "2 fatias de mortadela"
		        		},
		        		{
		          			"desc": "1 iogurte"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 maçã assada com canela (sem açúcar)"
		        		},
		        		{
		          			"desc": "1 porção de requeijão"
		        		}
		      		],
		      		"almocotitulo": "Piza omeleta",
		      		"almocoing": [
				        {
				          	"ing": "2 ovos grandes"
				        },
				         {
				          	"ing": "85 g de tomate cortado aos bocadinhos"
				        },
				         {
				          	"ing": "30 g de cogumelos laminados"
				        },
				         {
				          	"ing": "20 g de queijo mozzarella light ralado"
				        },
				         {
				          	"ing": "Orégãos secos"
				        },
				         {
				          	"ing": "Sal e pimenta"
				        },
				         {
				          	"ing": "Azeite"
				        }
				    ],
				    "almocopreparacao": "Bata os ovos com o sal e a pimenta. Numa frigideira (que possa ir ao forno), ponha um fio de azeitee, quando este estiver quente, junte os ovos e espalhe-os bem para cobrir o fundo da frigideira. Deixe cozinhar até os lados começarem a ficar dourados (vá levantando os lados para os ovos se irem espalhando por baixo). Com o centro ainda pouco cozinhado, deite os tomates, os cogumelos e o queijo ralado, uniformemente e sem mexer. Polvilhe com os orégãos e ponha no grill até o queijo estar derretido e douradinho. Sirva com salada de alface.",
				    "durantetarde": [
				        {
				          	"desc": "1 gelatina"
				        },
				        {
				          	"desc": "2 bolinhas de queijo"
				        },
				        {
				          	"desc": "1 fatia de fiambre"
				        }
				    ],
		      		"jantartitulo": "Bacalhau na broa (mas não coma a broa)",
		      		"jantaring": [
		        		{
		          			"ing": "3 cebolas grandes"
				        },
				        {
		          			"ing": "Dentes de alho"
				        },
				        {
		          			"ing": "200 g de espinafres ou grelos"
				        },
				        {
		          			"ing": "400 g de bacalhau"
				        },
				        {
		          			"ing": "Sal e pimenta"
				        },
				        {
		          			"ing": "Azeite"
				        }
				    ],
		      		"jantarpreparacao": "Coza os espinafres ou os grelos e o bacalhau e escorra-os bem.Entretanto, vá refogando a cebola e o alho. Depois deite no refogado o bacalhau e os espinafres, envolva tudo muito bem e tempere. Coloque no prato uma fatia de broa para os seus convidados e deite o preparado por cima. No seu prato, coloque ou não a broa (mas não a pode comer!)",
		      		},
	    			{
	    			"id":17,
		    		"dia": "Dia 17",
		      		"titulo": "Para muitas pessoas, a introdução da fruta e da sopa faz toda a diferença, porque a dieta começa a assemelhar-se àquilo que é a alimentação comum de qualquer português. No entanto, alguns pacientes meus reclamam que comer apenas sopa ao jantar, por mais quantidade que ingiram, os deixa sempre com fome. Se for daqueles que, após o jantar, se deita na cama ou no sofá, comer apenas a sopa é mais do que suficiente, porque não irá despender mais energias até ao dia seguinte. Se, a seguir ao jantar, gosta de ir dar um passeio, se costuma trabalhar, ou ficar algum tempo a ler, pode preparar uma ceia com uma chávena de chá (calmante, que até o ajudará a dormir melhor) e uma cenoura, ou uma porção de queijo ou fiambre. Não convém que se encha demasiado, porque irá para a cama passado algum tempo, mas se fizer uma pequena ceia com os alimentos permitidos, não deixará de perder peso por isso.",
		      		"conselho": "Não coma fruta ao pequeno-almoço, porque pode provocar uma umento de insulina. Preferencialmente, coma-a após o almoçoou o jantar, ou entre as refeições, acompanhada de um iogurte ou queijo. Quando a fruta é ingerida isoladamente, ao contrário de saciar, abre ainda mais o apetite, porque provoca igualmente uma maior subida de açúcar no sangue.",
		      		"pqalm": [
		        		{
		          			"desc": "1 pão"
		        		},
		        		{
		          			"desc": "1 ovo estrelado"
		        		},
		        		{
		          			"desc": "1 chávena de chá"
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": "1 copo de leite"
		        		},
		        		{
		          			"desc": "1 porção de requeijão"
		        		}
		      		],
		      		"almocotitulo": "Quase lasanha",
		      		"almocoing": [
				        {
				          	"ing": "250 g de carne picada"
				        },
				         {
				          	"ing": "1 queijo mozzarella light ralado"
				        },
				         {
				          	"ing": "4 colheres de sopa de queijo ricotta"
				        },
				         {
				          	"ing": "Uma colher de sopa de queijo ralado parmesão"
				        },
				         {
				          	"ing": "2 ovos"
				        },
				         {
				          	"ing": "4 tomates às rodelas"
				        },
				         {
				          	"ing": "4 colheres de polpa de tomate"
				        },
				         {
				          	"ing": "1 alho picado"
				        },
				         {
				          	"ing": "Manjericão e orégãos secos"
				        },
				         {
				          	"ing": "Azeite"
				        }

				    ],
				    "almocopreparacao": "Numa frigideira, ponha um fiozinho de azeite. Aqueça. Junte a carne e tempere com um pouco de sal e pimenta. Quando estiver bem douradinha, ponha no pirex e espalhe pelo fundo. Com uma varinha mágica, misture o queijo ricotta, o queijo parmesão, o alho, os orégãos e o manjericão, e os ovos. Espalhe as rodelas de tomate por cima da carne e a polpa de tomate por cima dos tomates. Distribua o preparado que foi passado com a varinha mágica por cima da polpa de tomate e, por fim, polvilhe com o queijo mozzarella light. Leve ao forno a 180° C, até o queijo estar derretido e douradinho. Coma uma laranja de sobremesa.",
				    "durantetarde": [
				        {
				          	"desc": "Fatias de aipo molhadas em pasta de atum (atum, 1 iogurtenatural e especiarias a gosto)."
				        }
				    ],
		      		"jantartitulo": "Sopa à descrição",
		      		"jantaring": [
		        		{
		          			"ing": ""
				        }
				    ],
		      		"jantarpreparacao": ""
	    			},
	    			{
	    			"id":18,
		    		"dia": "Dia",
		      		"titulo": "",
		      		"conselho": "",
		      		"pqalm": [
		        		{
		          			"desc": ""
		        		},
		        		{
		          			"desc": ""
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": ""
		        		},
		        		{
		          			"desc": ""
		        		},
		        		{
		          			"desc": ""
		        		}
		      		],
		      		"almocotitulo": "",
		      		"almocoing": [
				        {
				          	"ing": ""
				        },
				         {
				          	"ing": ""
				        }
				    ],
				    "almocopreparacao": "",
				    "durantetarde": [
				        {
				          	"desc": ""
				        },
				        {
				          	"desc": ""
				        }
				    ],
		      		"jantartitulo": "",
		      		"jantaring": [
		        		{
		          			"ing": ""
				        }
				    ],
		      		"jantarpreparacao": ""
	    			},
	    			{
	    			"id":19,
		    		"dia": "Dia",
		      		"titulo": "",
		      		"conselho": "",
		      		"pqalm": [
		        		{
		          			"desc": ""
		        		},
		        		{
		          			"desc": ""
		        		}
		      		],
		      		"meiomanha": [
		        		{
		          			"desc": ""
		        		},
		        		{
		          			"desc": ""
		        		},
		        		{
		          			"desc": ""
		        		}
		      		],
		      		"almocotitulo": "",
		      		"almocoing": [
				        {
				          	"ing": ""
				        },
				         {
				          	"ing": ""
				        }
				    ],
				    "almocopreparacao": "",
				    "durantetarde": [
				        {
				          	"desc": ""
				        },
				        {
				          	"desc": ""
				        }
				    ],
		      		"jantartitulo": "",
		      		"jantaring": [
		        		{
		          			"ing": ""
				        }
				    ],
		      		"jantarpreparacao": ""
	    			}		    			
	    		];
	    	},		
    	};
        
    });