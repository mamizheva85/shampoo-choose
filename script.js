const text = document.querySelector("h1");
const imageOne = document.querySelector(".girls-one");
const imageTwo = document.querySelector(".girls-two");
const imageThree = document.querySelector(".girls-three");
const imageFour = document.querySelector(".girls-four");

const buttonOne = document.querySelector(".btn-start-one");
const buttonTwo = document.querySelector(".btn-start-two");
const buttonThree = document.querySelector(".btn-start-three");
const buttonFour = document.querySelector(".btn-start-four");

buttonOne.addEventListener ("click", straightHair);
buttonTwo.addEventListener ("click", wavyHair);
buttonThree.addEventListener ("click", curlyHair);
buttonFour.addEventListener ("click", afroHair);

//-----------------------------------------1----------------------------------------------

function straightHair() {
	imageOne.setAttribute ("src", "pictures/6.jpg");
	imageTwo.setAttribute ("src", "pictures/8.jpg");
	imageThree.setAttribute ("src", "pictures/7.jpg");
	imageFour.setAttribute ("src", "pictures/9.jpg");
	text.innerHTML = "Твой цвет волос:";
	buttonOne.innerHTML = "Блондин";
	buttonTwo.innerHTML = "Брюнет";
	buttonThree.innerHTML = "Шатен";
	buttonFour.innerHTML = "Рыжий";

	buttonOne.addEventListener("click", srtraigtBlond);

	function srtraigtBlond() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", srtraigtBlondMix);
		function srtraigtBlondMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightBlondMixColoredResultOne);
			buttonTwo.addEventListener("click", straightBlondMixUncoloredResultTwo)

			function straightBlondMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас от природы жирные волосы, но после осветления кончики стали сухими и безжизненными, выбирайте шампунь для комбинированного типа волос, но с акцентом на осветленные локоны. Такое средство очищает достаточно мягко, чтобы не пересушить кончики, но и от слишком быстрого загрязнения корней тоже защищает. Обратите внимение на шампуни, в составе которых нет силиконов и парабенов, которые легко пересушивают поврежденные кончики. Также откажитесь и от натуральных шампуней: их мягкие формулы не справятся с очищением слишком загрязненных корней и кожи головы.";
				text.classList.add("newText");
			}
			function straightBlondMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Жирные корни, сухие кончики - какой шампунь выбрать? Распространенная проблема! Специального шампуня для этого случая пока нет, но некоторые тонкости ухода могут вам помочь: мойте голову шампунем для жирных волос, а вот кондиционер или маску применяйте для сухих.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", srtraigtBlondNormal);
		function srtraigtBlondNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightBlondNormalColoredResultOne);
			buttonTwo.addEventListener("click", straightBlondNormalUncoloredResultTwo)

			function straightBlondNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Для блондинок с прямыми окрашеными волосами подойдут шампуни, в состав которых входят: растительные масла и прочие натуральные ингредиенты для лучшего питания и увлажнения; кератин, минералы и витамины, которые восстанавливают структуру; пантенол, смягчающий кожу головы и убирающий раздражения; ультрафиолетовые фильтры и термическая защита, предотвращающие поражение волос; красящие пигменты, нейтрализующие желтизну.";
				text.classList.add("newText");
			}
			function straightBlondNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "В первую очередь, нужно обратить внимание на ингредиенты шампуня. Профессиональный шампунь для нормальных волос обязательно содержит витамины группы В, которые помогают волосам расти, сохранять структуру и оставаться блестящими и гладкими. Также в шампуни добавляют натуральные компоненты: масла, экстракты растений и фруктов, полезные вытяжки.";
			}
		}

		buttonTwo.addEventListener ("click", srtraigtBlondDry);
		function srtraigtBlondDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightBlondDryColoredResultOne);
			buttonTwo.addEventListener("click", straightBlondDryUncoloredResultTwo)

			function straightBlondDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.classList.add("newText");
				text.innerHTML = "Для сухих окрашеных волос подойдут шампуни, в составе которых обязательно присутствуют: питательные масла, увлажняющие масла, липидные комплексы, силиконы для заполнения пустот внутри сухого волоса, глицирин для восстановления природного блеска, природные компоненты и натуральные экстракты.";
			}
			function straightBlondDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.classList.add("newText");
				text.innerHTML = "Для сухих, ломких светлых волос необходим более питательный уход. Вам подойдет шампунь, восстанавливающий способность кутикулы удерживать влагу. Обратите внимание на составы, в которых должны в обязательном порядке присутствовать масла. Что ценим в составе: про-кератин в высокой концентрации (4%) — заполняет поврежденные участки волоса; витамин B5 — защищает волосы от повреждений и усиливает их природный блеск.";
			}
		}

		buttonOne.addEventListener("click", srtraigtBlondOily);

		function srtraigtBlondOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightBlondOilyColoredResultOne);
			buttonTwo.addEventListener("click", straightBlondOilyUncoloredResultTwo)

			function straightBlondOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Natura Siberica с экстрактом кедрового стланика и арктической малины имеет формулу, способствующую бережному и эффективному очищению локонов от жира у прикорневой зоны. Производитель сделал акцент на максимально натуральном составе. Состав средства обогащен витамином С, который способствует нормализации липидного баланса волосистой части головы. Расторопша в составе способствует естественной активации роста.";
				text.classList.add("newText");
			}
			function straightBlondOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Natura Siberica с экстрактом кедрового стланика и арктической малины имеет формулу, способствующую бережному и эффективному очищению локонов от жира у прикорневой зоны. Производитель сделал акцент на максимально натуральном составе. Состав средства обогащен витамином С, который способствует нормализации липидного баланса волосистой части головы. Расторопша в составе способствует естественной активации роста.";
				text.classList.add("newText");
			}
		}
	}

	buttonTwo.addEventListener("click", straightBlack);
	function straightBlack() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", srtraigtBlackMix);
		function srtraigtBlackMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightBlackMixColoredResultOne);
			buttonTwo.addEventListener("click", straightBlackMixUncoloredResultTwo)

			function straightBlackMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Избегайте шампуней, содержащих жесткие компоненты, средств для глубокого очищения. Они более агрессивны и способствуют вымыванию пигмента, который мы стремимся сохранить. Впрочем, нет необходимости всматриваться в список ингредиентов, указанных на упаковке: множество производителей выпускают шампуни, предназначенные для окрашенных волос.";
				text.classList.add("newText");
			}
			function straightBlackMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.classList.add("newText");
				text.innerHTML = "Жирные корни, сухие кончики - какой шампунь выбрать? Распространенная проблема! Специального шампуня для этого случая пока нет, но некоторые тонкости ухода могут вам помочь: мойте голову шампунем для жирных волос, а вот кондиционер или маску применяйте для сухих, например Nutritive Mask.";
			}
		}

		buttonThree.addEventListener ("click", srtraigtBlackNormal);
		function srtraigtBlackNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightBlackNormalColoredResultOne);
			buttonTwo.addEventListener("click", straightBlackNormalUncoloredResultTwo)

			function straightBlackNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.classList.add("newText");
				text.innerHTML = "Избегайте шампуней, содержащих жесткие компоненты, средств для глубокого очищения. Они более агрессивны и способствуют вымыванию пигмента, который мы стремимся сохранить. Впрочем, нет необходимости всматриваться в список ингредиентов, указанных на упаковке: множество производителей выпускают шампуни, предназначенные для окрашенных волос.";
			}
			function straightBlackNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "У нормальных волос нет каких-то особенных капризов, требующих особенных средств и особенного ухода. Очищение, освежение и увлажнение -с этим прекрасно справляется шампунь Nouvelle Every Day Herb Shampoo.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", srtraigtBlackOily);

		function srtraigtBlackOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightBlackOilyColoredResultOne);
			buttonTwo.addEventListener("click", straightBlackdOilyUncoloredResultTwo)

			function straightBlackOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Жирная кожа требует регулярного глубокого очищения, но важно также не пересушить дерму, чтобы не спровоцировать еще более активное выделение кожного сала. Профессионалы рекомендуют придерживаться комплексного, сбалансированного ухода, включающего в себя применение нескольких видов средств – шампуня для глубокой очистки (не более 2-3 раз в неделю) и средств с мягкими ПАВ для поддержания оптимального водного баланса и питания дермы. В состав шампуня-регулятора жирности должны входить натуральные компоненты – эфирные масла, растительные экстракты, обладающие антибактериальным, антисеборейным действием.";
				text.classList.add("newText");
			}
			function straightBlackdOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.classList.add("newText");
				text.innerHTML = "Если ваша кожа головы склонна к жирности: В составах обращайте внимание на себорегулирующие компоненты и экстракты, если ваша кожа головы склонна к жирности и волосы достаточно быстро теряют свежесть. Такие средства часто имеют пометку “глубокоочищающий шампунь”. Жирная кожа головы требует грамотного ухода и тщательного очищения. Если ваша кожа головы и волосы теряют свежесть за короткий промежуток времени, например, уже к концу дня или на следующий день, то стоит обратить внимание на шампунь для жирных волос, который направлен на глубокое очищение кожи головы и контроль жирности. ";
			}
		}

		buttonTwo.addEventListener("click", srtraigtBlackDry);

		function srtraigtBlackDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightBlackDryColoredResultOne);
			buttonTwo.addEventListener("click", straightBlackDryUncoloredResultTwo)

			function straightBlackDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.classList.add("newText");
				text.innerHTML = "Сухая структура волоса очень уязвима к внешним воздействиям, и агрессивные очищающие средства еще больше истончают и обезвоживают ее. Здесь нужен специальный шампунь для сухих волос, который деликатно удалит загрязнения, не травмируя локоны. Для очищения поврежденной и ломкой шевелюры выбирайте средства без SLS в составе. Этот агрессивный компонент нарушает естественный pH кожи головы, приподнимает кутикулу, делая волосы еще более жесткими и пористыми. Шампуни с деликатными пенообразователями совсем не сушат пряди, способствуют накоплению полезных веществ в структуре и делают локоны более послушными.";
			}
			function straightBlackDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.classList.add("newText");
				text.innerHTML = "Сухая структура волоса очень уязвима к внешним воздействиям, и агрессивные очищающие средства еще больше истончают и обезвоживают ее. Здесь нужен специальный шампунь для сухих волос, который деликатно удалит загрязнения, не травмируя локоны. Для очищения поврежденной и ломкой шевелюры выбирайте средства без SLS в составе. Этот агрессивный компонент нарушает естественный pH кожи головы, приподнимает кутикулу, делая волосы еще более жесткими и пористыми. Шампуни с деликатными пенообразователями совсем не сушат пряди, способствуют накоплению полезных веществ в структуре и делают локоны более послушными.";
			}
		}
	}
	buttonThree.addEventListener("click", straightBrown);
	function straightBrown() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", srtraigtBrownMix);
		function srtraigtBrownMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightBrownMixColoredResultOne);
			buttonTwo.addEventListener("click", straightBrownMixUncoloredResultTwo)

			function straightBrownMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Избегайте шампуней, содержащих жесткие компоненты, средств для глубокого очищения. Они более агрессивны и способствуют вымыванию пигмента, который мы стремимся сохранить. Впрочем, нет необходимости всматриваться в список ингредиентов, указанных на упаковке: множество производителей выпускают шампуни, предназначенные для окрашенных волос.";
				text.classList.add("newText");
			}
			function straightBrownMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Жирные корни, сухие кончики - какой шампунь выбрать? Распространенная проблема! Специального шампуня для этого случая пока нет, но некоторые тонкости ухода могут вам помочь: мойте голову шампунем для жирных волос, а вот кондиционер или маску применяйте для сухих.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", srtraigtBrownNormal);
		function srtraigtBrownNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightBrownNormalColoredResultOne);
			buttonTwo.addEventListener("click", straightBrownNormalUncoloredResultTwo)

			function straightBrownNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Избегайте шампуней, содержащих жесткие компоненты, средств для глубокого очищения. Они более агрессивны и способствуют вымыванию пигмента, который мы стремимся сохранить. Впрочем, нет необходимости всматриваться в список ингредиентов, указанных на упаковке: множество производителей выпускают шампуни, предназначенные для окрашенных волос.";
				text.classList.add("newText");
			}
			function straightBrownNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "У нормальных волос нет каких-то особенных капризов, требующих особенных средств и особенного ухода. Очищение, освежение и увлажнение -с этим прекрасно справляется шампунь для нормальных волос.";
				text.classList.add("newText");
			}
		}

		buttonTwo.addEventListener("click", srtraigtBrownDry);

		function srtraigtBrownDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightBrownDryColoredResultOne);
			buttonTwo.addEventListener("click", straightBrownDryUncoloredResultTwo)

			function straightBrownDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Сухая структура волоса очень уязвима к внешним воздействиям, и агрессивные очищающие средства еще больше истончают и обезвоживают ее. Здесь нужен специальный шампунь для сухих волос, который деликатно удалит загрязнения, не травмируя локоны. Для очищения поврежденной и ломкой шевелюры выбирайте средства без SLS в составе. Этот агрессивный компонент нарушает естественный pH кожи головы, приподнимает кутикулу, делая волосы еще более жесткими и пористыми. Шампуни с деликатными пенообразователями совсем не сушат пряди, способствуют накоплению полезных веществ в структуре и делают локоны более послушными.";
				text.classList.add("newText");
			}
			function straightBrownDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Сухая структура волоса очень уязвима к внешним воздействиям, и агрессивные очищающие средства еще больше истончают и обезвоживают ее. Здесь нужен специальный шампунь для сухих волос, который деликатно удалит загрязнения, не травмируя локоны. Для очищения поврежденной и ломкой шевелюры выбирайте средства без SLS в составе. Этот агрессивный компонент нарушает естественный pH кожи головы, приподнимает кутикулу, делая волосы еще более жесткими и пористыми. Шампуни с деликатными пенообразователями совсем не сушат пряди, способствуют накоплению полезных веществ в структуре и делают локоны более послушными.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", srtraigtBrownOily);

		function srtraigtBrownOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightBrownOilyColoredResultOne);
			buttonTwo.addEventListener("click", straightBrownOilyUncoloredResultTwo)

			function straightBrownOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Жирная кожа требует регулярного глубокого очищения, но важно также не пересушить дерму, чтобы не спровоцировать еще более активное выделение кожного сала. Профессионалы рекомендуют придерживаться комплексного, сбалансированного ухода, включающего в себя применение нескольких видов средств – шампуня для глубокой очистки (не более 2-3 раз в неделю) и средств с мягкими ПАВ для поддержания оптимального водного баланса и питания дермы. В состав шампуня-регулятора жирности должны входить натуральные компоненты – эфирные масла, растительные экстракты, обладающие антибактериальным, антисеборейным действием.";
				text.classList.add("newText");
			}
			function straightBrownOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Natura Siberica с экстрактом кедрового стланика и арктической малины имеет формулу, способствующую бережному и эффективному очищению локонов от жира у прикорневой зоны. Производитель сделал акцент на максимально натуральном составе. Состав средства обогащен витамином С, который способствует нормализации липидного баланса волосистой части головы. Расторопша в составе способствует естественной активации роста.";
				text.classList.add("newText");
			}
		}
	}

	buttonFour.addEventListener("click", straightRed);
	function straightRed() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", srtraigtRedMix);
		function srtraigtRedMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightRedMixColoredResultOne);
			buttonTwo.addEventListener("click", straightRedMixUncoloredResultTwo)

			function straightRedMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Волосы ослабевают по самым разным причинам: окрашивание, горячая укладка, авитаминоз, общее нездоровье организма… Но каковы бы ни были причины повреждения, для восстановления волос используйте специальные шампуни, в составе которых лечебные и укрепляющие компоненты.";
				text.classList.add("newText");
			}
			function straightRedMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Жирные корни, сухие кончики - какой шампунь выбрать? Распространенная проблема! Специального шампуня для этого случая пока нет, но некоторые тонкости ухода могут вам помочь: мойте голову шампунем для жирных волос, а вот кондиционер или маску применяйте для сухих.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", srtraigtRedNormal);
		function srtraigtRedNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightRedNormalColoredResultOne);
			buttonTwo.addEventListener("click", straightRedNormalUncoloredResultTwo)

			function straightRedNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Избегайте шампуней, содержащих жесткие компоненты, средств для глубокого очищения. Они более агрессивны и способствуют вымыванию пигмента, который мы стремимся сохранить. Впрочем, нет необходимости всматриваться в список ингредиентов, указанных на упаковке: множество производителей выпускают шампуни, предназначенные для окрашенных волос.";
				text.classList.add("newText");
			}
			function straightRedNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "У нормальных волос нет каких-то особенных капризов, требующих особенных средств и особенного ухода. Очищение, освежение и увлажнение -с этим прекрасно справляется Nouvelle Every Day Herb Shampoo.";
				text.classList.add("newText");
			}
		}

		buttonTwo.addEventListener("click", srtraigtRedDry);

		function srtraigtRedDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightRedDryColoredResultOne);
			buttonTwo.addEventListener("click", straightRedDryUncoloredResultTwo)

			function straightRedDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Сухая структура волоса очень уязвима к внешним воздействиям, и агрессивные очищающие средства еще больше истончают и обезвоживают ее. Здесь нужен специальный шампунь для сухих волос, который деликатно удалит загрязнения, не травмируя локоны. Для очищения поврежденной и ломкой шевелюры выбирайте средства без SLS в составе. Этот агрессивный компонент нарушает естественный pH кожи головы, приподнимает кутикулу, делая волосы еще более жесткими и пористыми. Шампуни с деликатными пенообразователями совсем не сушат пряди, способствуют накоплению полезных веществ в структуре и делают локоны более послушными.";
				text.classList.add("newText");
			}
			function straightRedDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Сухая структура волоса очень уязвима к внешним воздействиям, и агрессивные очищающие средства еще больше истончают и обезвоживают ее. Здесь нужен специальный шампунь для сухих волос, который деликатно удалит загрязнения, не травмируя локоны. Для очищения поврежденной и ломкой шевелюры выбирайте средства без SLS в составе. Этот агрессивный компонент нарушает естественный pH кожи головы, приподнимает кутикулу, делая волосы еще более жесткими и пористыми. Шампуни с деликатными пенообразователями совсем не сушат пряди, способствуют накоплению полезных веществ в структуре и делают локоны более послушными.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", srtraigtRedOily);

		function srtraigtRedOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", straightRedOilyColoredResultOne);
			buttonTwo.addEventListener("click", straightRedOilyUncoloredResultTwo)

			function straightRedOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Жирная кожа требует регулярного глубокого очищения, но важно также не пересушить дерму, чтобы не спровоцировать еще более активное выделение кожного сала. Профессионалы рекомендуют придерживаться комплексного, сбалансированного ухода, включающего в себя применение нескольких видов средств – шампуня для глубокой очистки (не более 2-3 раз в неделю) и средств с мягкими ПАВ для поддержания оптимального водного баланса и питания дермы. В состав шампуня-регулятора жирности должны входить натуральные компоненты – эфирные масла, растительные экстракты, обладающие антибактериальным, антисеборейным действием.";
				text.classList.add("newText");
			}
			function straightRedOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Natura Siberica с экстрактом кедрового стланика и арктической малины имеет формулу, способствующую бережному и эффективному очищению локонов от жира у прикорневой зоны. Производитель сделал акцент на максимально натуральном составе. Состав средства обогащен витамином С, который способствует нормализации липидного баланса волосистой части головы. Расторопша в составе способствует естественной активации роста.";
				text.classList.add("newText");
			}
		}
	}
}

//-------------------------------------2-----------------------------------------------


function wavyHair() {
	imageOne.setAttribute ("src", "pictures/6.jpg");
	imageTwo.setAttribute ("src", "pictures/8.jpg");
	imageThree.setAttribute ("src", "pictures/7.jpg");
	imageFour.setAttribute ("src", "pictures/9.jpg");
	text.innerHTML = "Твой цвет волос:";
	buttonOne.innerHTML = "Блондин";
	buttonTwo.innerHTML = "Брюнет";
	buttonThree.innerHTML = "Шатен";
	buttonFour.innerHTML = "Рыжий";

	buttonOne.addEventListener("click", wavyBlond);

	function wavyBlond() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", wavyBlondMix);
		function wavyBlondMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyBlondMixColoredResultOne);
			buttonTwo.addEventListener("click", wavyBlondMixUncoloredResultTwo)

			function wavyBlondMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyBlondMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас волнистые волосы смешанного типа, желательно, чтобы в составе шампуня можно было встретить экстракты лекарственной флоры, в частности, василька, белого лотоса, хрена, имбиря, гамамелиса, солодки, шалфея. Главной функцией всех категорий шампуней является удаление с кожного и волосяного покрова пыли, излишков себума, грязи. За обеспечение данного процесса отвечают поверхностно-активные вещества, или ПАВы. В случае с волнистой структурой в приоритете должны быть безопасные и более щадящие очищающие элементы в виде сульфатов со-ПАВов. Они состоят в основном из кератинов, фосфолипидов, коллагенов, церамидов.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", wavyBlondNormal);
		function wavyBlondNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyBlondNormalColoredResultOne);
			buttonTwo.addEventListener("click", wavyBlondNormalUncoloredResultTwo)

			function wavyBlondNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyBlondNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас волнистые волосы, желательно, чтобы в составе шампуня можно было встретить экстракты лекарственной флоры, в частности, василька, белого лотоса, хрена, имбиря, гамамелиса, солодки, шалфея. Главной функцией всех категорий шампуней является удаление с кожного и волосяного покрова пыли, излишков себума, грязи. За обеспечение данного процесса отвечают поверхностно-активные вещества, или ПАВы. В случае с волнистой структурой в приоритете должны быть безопасные и более щадящие очищающие элементы в виде сульфатов со-ПАВов. Они состоят в основном из кератинов, фосфолипидов, коллагенов, церамидов.";
				text.classList.add("newText");
			}
		}


		buttonTwo.addEventListener ("click", wavyBlondDry);
		function wavyBlondDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyBlondDryColoredResultOne);
			buttonTwo.addEventListener("click", wavyBlondDryUncoloredResultTwo)

			function wavyBlondDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyBlondDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Для блондинок с волнистыми сухими волосами подойдут шампуни серии Farmavita Smoothing. Серия, разработанная специально для вьющихся локонов, имеет в основе следующие компоненты: экстракт зеленого чая – этот антиоксидант обладает сильным противовоспалительным и антибактериальным действием, нивелирует свободные радикалы; глицерин отвечает за здоровый блеск и мягкость локонов; глюкоза эффективно увлажняет и придает объем; термополимеры предотвращают негативное воздействие на структуру волос плойки, утюжка, фена.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", wavyBlondOily);

		function wavyBlondOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyBlondOilyColoredResultOne);
			buttonTwo.addEventListener("click", wavyBlondOilyUncoloredResultTwo)

			function wavyBlondOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyBlondOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Для блондинок с волнистыми жирными волосами подойдут шампуни серии Farmavita Smoothing. Серия, разработанная специально для вьющихся локонов, имеет в основе следующие компоненты: экстракт зеленого чая – этот антиоксидант обладает сильным противовоспалительным и антибактериальным действием, нивелирует свободные радикалы; глицерин отвечает за здоровый блеск и мягкость локонов; глюкоза эффективно увлажняет и придает объем; термополимеры предотвращают негативное воздействие на структуру волос плойки, утюжка, фена.";
				text.classList.add("newText");
			}
		}
	}

	buttonTwo.addEventListener("click", wavyBlack);
	function wavyBlack() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", wavyBlackMix);
		function wavyBlackMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyBlackMixColoredResultOne);
			buttonTwo.addEventListener("click", wavyBlackMixUncoloredResultTwo)

			function wavyBlackMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyBlackMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас волнистые темные волосы смешанного типа, вам подйдет шампунь Kapous Smooth and Curly. Шампунь «Капус» для кудрявых волос оптимален для ежедневного ухода, так как способен обеспечить всестороннее увлажнение и очищение, он эффективно предотвращает спутывание прядей, облегчает расчесывание при любой длине. Состав средства основывается на следующих группах компонентов: протеины шелка – они характеризуются глубоким проникновением, в результате образуют тонкую пленку, защищающую волосы от повреждений и ломкости; спецификой воздействия пшеничных протеинов является выраженное противовоспалительное, стимулирующее, увлажняющее действие, они нормализуют водный и липидный баланс.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", wavyBlackNormal);
		function wavyBlackNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyBlackNormalColoredResultOne);
			buttonTwo.addEventListener("click", wavyBlackNormalUncoloredResultTwo)

			function wavyBlackNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyBlackNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас волнистые темные волосы, обратите внимание на шампунь Matrix Curl Please. Бренд с хорошей репутацией, продукция которого придает кудряшкам четкую форму, качественно увлажняет и сводит к минимуму пушистость. Это решение бережно избавляет от грязи и лишнего жира без последующего спутывания шевелюры при высыхании. Масло жожоба позволяет избавиться от перхоти, вызывает ускоренный рост волос, питает.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", wavyBlackOily);

		function wavyBlackOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyBlackOilyColoredResultOne);
			buttonTwo.addEventListener("click", wavyBlackdOilyUncoloredResultTwo)

			function wavyBlackOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyBlackdOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас темные волнистые жирные волосы, следует обратить внимание на шампунь Schwarzkopf Bonacure Curl Bounce. Немецкая серия профессионального спектра имеет в составе преобладающее количество полезных веществ, таких как: д-пантенол – он восстанавливает структуру и «запечатывает» волосяные фолликулы; система curl memory, благодаря которой завитки обретают упругую, четкую форму; питательное масло из абрикосовой косточки защищает прическу от негативного внешнего влияния; вытяжка из кактуса нормализует липидный и водный баланс кожи, проявляет глубокий увлажняющий эффект.";
				text.classList.add("newText");
			}
		}

		buttonTwo.addEventListener("click", wavyBlackDry);

		function wavyBlackDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyBlackDryColoredResultOne);
			buttonTwo.addEventListener("click", wavyBlackDryUncoloredResultTwo)

			function wavyBlackDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyBlackDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет.";
				text.classList.add("newText");
			}
		}
	}
	buttonThree.addEventListener("click", wavyBrown);
	function wavyBrown() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", wavyBrownMix);
		function wavyBrownMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyBrownMixColoredResultOne);
			buttonTwo.addEventListener("click", wavyBrownMixUncoloredResultTwo)

			function wavyBrownMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyBrownMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", wavyBrownNormal);
		function wavyBrownNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyBrownNormalColoredResultOne);
			buttonTwo.addEventListener("click", wavyBrownNormalUncoloredResultTwo)

			function wavyBrownNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyBrownNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет.";
				text.classList.add("newText");
			}
		}

		buttonTwo.addEventListener("click", wavyBrownDry);

		function wavyBrownDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyBrownDryColoredResultOne);
			buttonTwo.addEventListener("click", wavyBrownDryUncoloredResultTwo)

			function wavyBrownDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyBrownDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", wavyBrownOily);

		function wavyBrownOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyBrownOilyColoredResultOne);
			buttonTwo.addEventListener("click", wavyBrownOilyUncoloredResultTwo)

			function wavyBrownOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyBrownOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас темные волнистые жирные волосы, следует обратить внимание на шампунь Schwarzkopf Bonacure Curl Bounce. Немецкая серия профессионального спектра имеет в составе преобладающее количество полезных веществ, таких как: д-пантенол – он восстанавливает структуру и «запечатывает» волосяные фолликулы; система curl memory, благодаря которой завитки обретают упругую, четкую форму; питательное масло из абрикосовой косточки защищает прическу от негативного внешнего влияния; вытяжка из кактуса нормализует липидный и водный баланс кожи, проявляет глубокий увлажняющий эффект.";
				text.classList.add("newText");
			}
		}
	}

	buttonFour.addEventListener("click", wavyRed);
	function wavyRed() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", wavyRedMix);
		function wavyRedMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyRedMixColoredResultOne);
			buttonTwo.addEventListener("click", wavyRedMixUncoloredResultTwo)

			function wavyRedMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyRedMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", wavyRedNormal);
		function wavyRedNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyRedNormalColoredResultOne);
			buttonTwo.addEventListener("click", wavyRedNormalUncoloredResultTwo)

			function wavyRedNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyRedNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет.";
				text.classList.add("newText");
			}
		}

		buttonTwo.addEventListener("click", wavyRedDry);

		function wavyRedDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyRedDryColoredResultOne);
			buttonTwo.addEventListener("click", wavyRedDryUncoloredResultTwo)

			function wavyRedDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyRedDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Сухие, жесткие, волнистые волосы по своей природе более хрупкие и ломкие, нежели остальные типы волос. Чтобы вернуть им здоровье и красоту, необходимо подобрать правильный уход. Используйте бессульфатный шампунь. У вас наверняка много разных шампуней, которые ухаживают за кудрявыми волосами, выпрямляют волнистые и придают им мягкость. То, что их объединяет, это содержание сульфатов, которые, на самом деле, портят сухие и жесткие волосы. Вам необходимо покупать только те шампуни, которые не содержат это вещество. Приобретите средства для ухода за волосами, не содержащие силикона. Мойте голову реже. Чтобы сохранить красоту и здоровье волос, мойте их 2-3 раза в неделю.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", wavyRedOily);

		function wavyRedOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", wavyRedOilyColoredResultOne);
			buttonTwo.addEventListener("click", wavyRedOilyUncoloredResultTwo)

			function wavyRedOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Уход за волнистыми волосами начинается еще на стадии очищения. Подходящий для такого типа волос шампунь должен придавать прядям блеск, способствовать легкому расчесыванию и не утяжелять локоны. Для этих целей может подойти шампунь с добавлением миндального масла, которое сделает ваши волосы блестящими и гладкими по всей длине. Если волосы крашеные, шампунь должен быть таким, чтобы бережно обволакивать их и не вымывать цвет. При самой покраске желательно отдать предпочтение составам, не включающим в себя перекись водорода и аммиак. В приоритете – натуральные растительные вещества, которые будут бережно впитываться в пряди. Если используется хна, в нее нужно вводить легкий бальзам или масло.";
				text.classList.add("newText");
			}
			function wavyRedOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас рыжие волнистые жирные волосы, следует обратить внимание на шампунь Schwarzkopf Bonacure Curl Bounce. Немецкая серия профессионального спектра имеет в составе преобладающее количество полезных веществ, таких как: д-пантенол – он восстанавливает структуру и «запечатывает» волосяные фолликулы; система curl memory, благодаря которой завитки обретают упругую, четкую форму; питательное масло из абрикосовой косточки защищает прическу от негативного внешнего влияния; вытяжка из кактуса нормализует липидный и водный баланс кожи, проявляет глубокий увлажняющий эффект.";
				text.classList.add("newText");
			}
		}
	}
}

//---------------------------------------3--------------------------------------------------

function curlyHair() {
	imageOne.setAttribute ("src", "pictures/6.jpg");
	imageTwo.setAttribute ("src", "pictures/8.jpg");
	imageThree.setAttribute ("src", "pictures/7.jpg");
	imageFour.setAttribute ("src", "pictures/9.jpg");
	text.innerHTML = "Твой цвет волос:";
	buttonOne.innerHTML = "Блондин";
	buttonTwo.innerHTML = "Брюнет";
	buttonThree.innerHTML = "Шатен";
	buttonFour.innerHTML = "Рыжий";

	buttonOne.addEventListener("click", curlyBlond);

	function curlyBlond() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", curlyBlondMix);
		function curlyBlondMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyBlondMixColoredResultOne);
			buttonTwo.addEventListener("click", curlyBlondMixUncoloredResultTwo)

			function curlyBlondMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
			function curlyBlondMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", curlyBlondNormal);
		function curlyBlondNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyBlondNormalColoredResultOne);
			buttonTwo.addEventListener("click", curlyBlondNormalUncoloredResultTwo)

			function curlyBlondNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
			function curlyBlondNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
		}

		buttonTwo.addEventListener ("click", curlyBlondDry);
		function curlyBlondDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyBlondDryColoredResultOne);
			buttonTwo.addEventListener("click", curlyBlondDryUncoloredResultTwo)

			function curlyBlondDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас сухие кудрявы волосы, вам подойдет шампунь Farmavita Smoothing. Это средство, предназначенное специально для кудрей, содержат: Вытяжку зеленого чая – славится мощным антиоксидантным и антибактериальным действием, снимает воспаление, выводит свободные радикалы; Глюкозу — отвечает за придание объема и увлажнение; Глицерин – придает волосам мягкость и блеск; Термо полимеры — защищают структуру прядей от вредного воздействия утюжка, плойки и фена. Благодаря такому уникальному составу шампунь не только эффективно очищает волосы от загрязнений, но и делает их эластичными, легкими и гладкими.";
				text.classList.add("newText");
			}
			function curlyBlondDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас сухие кудрявы волосы, вам подойдет шампунь Farmavita Smoothing. Это средство, предназначенное специально для кудрей, содержат: Вытяжку зеленого чая – славится мощным антиоксидантным и антибактериальным действием, снимает воспаление, выводит свободные радикалы; Глюкозу — отвечает за придание объема и увлажнение; Глицерин – придает волосам мягкость и блеск; Термо полимеры — защищают структуру прядей от вредного воздействия утюжка, плойки и фена. Благодаря такому уникальному составу шампунь не только эффективно очищает волосы от загрязнений, но и делает их эластичными, легкими и гладкими.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", curlyBlondOily);

		function curlyBlondOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyBlondOilyColoredResultOne);
			buttonTwo.addEventListener("click", curlyBlondOilyUncoloredResultTwo)

			function curlyBlondOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы и жирная кожа головы, вам подойдет шампунь Schwarzkopf Bonacure Curl Bounce. Профессиональное средство для кудрявых волос производства Германии содержит сразу несколько полезных компонентов: Curl memory – новая система, придающая завитку красивую и упругую форму; Вытяжка кактуса – регулирует водный и липидный баланс эпидермиса, обладает очень сильным увлажняющим эффектом; Д-пантенол – закрывает и восстанавливает волосяные кутикулы; Масло абрикосовой косточки – питает шевелюру и служит защитой от внешних воздействий. Главной особенностью этого средства является его чрезвычайно легкая текстура. Она помогает справиться даже с самыми непослушными локонами и не утяжеляет их.";
				text.classList.add("newText");
			}
			function curlyBlondOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы и жирная кожа головы, вам подойдет шампунь Schwarzkopf Bonacure Curl Bounce. Профессиональное средство для кудрявых волос производства Германии содержит сразу несколько полезных компонентов: Curl memory – новая система, придающая завитку красивую и упругую форму; Вытяжка кактуса – регулирует водный и липидный баланс эпидермиса, обладает очень сильным увлажняющим эффектом; Д-пантенол – закрывает и восстанавливает волосяные кутикулы; Масло абрикосовой косточки – питает шевелюру и служит защитой от внешних воздействий. Главной особенностью этого средства является его чрезвычайно легкая текстура. Она помогает справиться даже с самыми непослушными локонами и не утяжеляет их.";
				text.classList.add("newText");
			}
		}
	}

	buttonTwo.addEventListener("click", curlyBlack);
	function curlyBlack() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", curlyBlackMix);
		function curlyBlackMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyBlackMixColoredResultOne);
			buttonTwo.addEventListener("click", curlyBlackMixUncoloredResultTwo)

			function curlyBlackMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
			function curlyBlackMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", curlyBlackNormal);
		function curlyBlackNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyBlackNormalColoredResultOne);
			buttonTwo.addEventListener("click", curlyBlackNormalUncoloredResultTwo)

			function curlyBlackNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
			function curlyBlackNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", curlyBlackOily);

		function curlyBlackOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyBlackOilyColoredResultOne);
			buttonTwo.addEventListener("click", curlyBlackdOilyUncoloredResultTwo)

			function curlyBlackOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы с жирной кожей головы, то вам подойдет шампунь Matrix Curl Please. Curl Please – очень хорошая марка для вьющейся шевелюры, которая придает завитку красивую форму, способствует увлажнению прядей и препятствует появлению излишней пушистости. Средство бережно вымывает жир и грязь и не спутывает локоны. А еще оно содержит жожоба, питательное масло, стимулирующее рост волос и избавляющее эпидермис от перхоти и прочих проблем.";
				text.classList.add("newText");
			}
			function curlyBlackdOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы с жирной кожей головы, то вам подойдет шампунь Matrix Curl Please. Curl Please – очень хорошая марка для вьющейся шевелюры, которая придает завитку красивую форму, способствует увлажнению прядей и препятствует появлению излишней пушистости. Средство бережно вымывает жир и грязь и не спутывает локоны. А еще оно содержит жожоба, питательное масло, стимулирующее рост волос и избавляющее эпидермис от перхоти и прочих проблем.";
				text.classList.add("newText");
			}
		}

		buttonTwo.addEventListener("click", curlyBlackDry);

		function curlyBlackDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyBlackDryColoredResultOne);
			buttonTwo.addEventListener("click", curlyBlackDryUncoloredResultTwo)

			function curlyBlackDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые сухие волосы, то вам подойдет шампунь Matrix Curl Please. Curl Please – очень хорошая марка для вьющейся шевелюры, которая придает завитку красивую форму, способствует увлажнению прядей и препятствует появлению излишней пушистости. Средство бережно вымывает жир и грязь и не спутывает локоны. А еще оно содержит жожоба, питательное масло, стимулирующее рост волос и избавляющее эпидермис от перхоти и прочих проблем.";
				text.classList.add("newText");
			}
			function curlyBlackDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые сухие волосы, то вам подойдет шампунь Matrix Curl Please. Curl Please – очень хорошая марка для вьющейся шевелюры, которая придает завитку красивую форму, способствует увлажнению прядей и препятствует появлению излишней пушистости. Средство бережно вымывает жир и грязь и не спутывает локоны. А еще оно содержит жожоба, питательное масло, стимулирующее рост волос и избавляющее эпидермис от перхоти и прочих проблем.";
				text.classList.add("newText");
			}
		}
	}
	buttonThree.addEventListener("click", curlyBrown);
	function curlyBrown() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", curlyBrownMix);
		function curlyBrownMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyBrownMixColoredResultOne);
			buttonTwo.addEventListener("click", curlyBrownMixUncoloredResultTwo)

			function curlyBrownMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
			function curlyBrownMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", curlyBrownNormal);
		function curlyBrownNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyBrownNormalColoredResultOne);
			buttonTwo.addEventListener("click", curlyBrownNormalUncoloredResultTwo)

			function curlyBrownNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
			function curlyBrownNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
		}

		buttonTwo.addEventListener("click", curlyBrownDry);

		function curlyBrownDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyBrownDryColoredResultOne);
			buttonTwo.addEventListener("click", curlyBrownDryUncoloredResultTwo)

			function curlyBrownDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые сухие волосы, то вам подойдет шампунь Matrix Curl Please. Curl Please – очень хорошая марка для вьющейся шевелюры, которая придает завитку красивую форму, способствует увлажнению прядей и препятствует появлению излишней пушистости. Средство бережно вымывает жир и грязь и не спутывает локоны. А еще оно содержит жожоба, питательное масло, стимулирующее рост волос и избавляющее эпидермис от перхоти и прочих проблем.";
				text.classList.add("newText");
			}
			function curlyBrownDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые сухие волосы, то вам подойдет шампунь Matrix Curl Please. Curl Please – очень хорошая марка для вьющейся шевелюры, которая придает завитку красивую форму, способствует увлажнению прядей и препятствует появлению излишней пушистости. Средство бережно вымывает жир и грязь и не спутывает локоны. А еще оно содержит жожоба, питательное масло, стимулирующее рост волос и избавляющее эпидермис от перхоти и прочих проблем.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", curlyBrownOily);

		function curlyBrownOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyBrownOilyColoredResultOne);
			buttonTwo.addEventListener("click", curlyBrownOilyUncoloredResultTwo)

			function curlyBrownOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы и жирная кожа головы, вам подойдет шампунь Schwarzkopf Bonacure Curl Bounce. Профессиональное средство для кудрявых волос производства Германии содержит сразу несколько полезных компонентов: Curl memory – новая система, придающая завитку красивую и упругую форму; Вытяжка кактуса – регулирует водный и липидный баланс эпидермиса, обладает очень сильным увлажняющим эффектом; Д-пантенол – закрывает и восстанавливает волосяные кутикулы; Масло абрикосовой косточки – питает шевелюру и служит защитой от внешних воздействий. Главной особенностью этого средства является его чрезвычайно легкая текстура. Она помогает справиться даже с самыми непослушными локонами и не утяжеляет их.";
				text.classList.add("newText");
			}
			function curlyBrownOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы и жирная кожа головы, вам подойдет шампунь Schwarzkopf Bonacure Curl Bounce. Профессиональное средство для кудрявых волос производства Германии содержит сразу несколько полезных компонентов: Curl memory – новая система, придающая завитку красивую и упругую форму; Вытяжка кактуса – регулирует водный и липидный баланс эпидермиса, обладает очень сильным увлажняющим эффектом; Д-пантенол – закрывает и восстанавливает волосяные кутикулы; Масло абрикосовой косточки – питает шевелюру и служит защитой от внешних воздействий. Главной особенностью этого средства является его чрезвычайно легкая текстура. Она помогает справиться даже с самыми непослушными локонами и не утяжеляет их.";
				text.classList.add("newText");
			}
		}
	}

	buttonFour.addEventListener("click", curlyRed);
	function curlyRed() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", curlyRedMix);
		function curlyRedMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyRedMixColoredResultOne);
			buttonTwo.addEventListener("click", curlyRedMixUncoloredResultTwo)

			function curlyRedMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
			function curlyRedMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", curlyRedNormal);
		function curlyRedNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyRedNormalColoredResultOne);
			buttonTwo.addEventListener("click", curlyRedNormalUncoloredResultTwo)

			function curlyRedNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
			function curlyRedNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы, отдавайте предпочтение средствам, в составе которых присутствуют натуральные масла — жожоба, оливы, карите, косточек винограда. Не менее важным является наличие вытяжек разных растений — цветков лотоса белого, шалфея, имбирного корня и хрена. Также в шампунь должны входить фосфолипиды, керамиды, коллагены и церамиды. Увлажнение волос обеспечат глицерин и гиалуронка, а блеск прядям придадут таурин, конский кератин и жемчужные протеины. Желательно применять безсульфатные шампуни, в основе которых лежат моющие компоненты природного происхождения. Они сохраняют водный баланс эпидермиса и не приводят к развитию аллергии.";
				text.classList.add("newText");
			}
		}

		buttonTwo.addEventListener("click", curlyRedDry);

		function curlyRedDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyRedDryColoredResultOne);
			buttonTwo.addEventListener("click", curlyRedDryUncoloredResultTwo)

			function curlyRedDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые сухие волосы, то вам подойдет шампунь Matrix Curl Please. Curl Please – очень хорошая марка для вьющейся шевелюры, которая придает завитку красивую форму, способствует увлажнению прядей и препятствует появлению излишней пушистости. Средство бережно вымывает жир и грязь и не спутывает локоны. А еще оно содержит жожоба, питательное масло, стимулирующее рост волос и избавляющее эпидермис от перхоти и прочих проблем.";
				text.classList.add("newText");
			}
			function curlyRedDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые сухие волосы, то вам подойдет шампунь Matrix Curl Please. Curl Please – очень хорошая марка для вьющейся шевелюры, которая придает завитку красивую форму, способствует увлажнению прядей и препятствует появлению излишней пушистости. Средство бережно вымывает жир и грязь и не спутывает локоны. А еще оно содержит жожоба, питательное масло, стимулирующее рост волос и избавляющее эпидермис от перхоти и прочих проблем.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", curlyRedOily);

		function curlyRedOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", curlyRedOilyColoredResultOne);
			buttonTwo.addEventListener("click", curlyRedOilyUncoloredResultTwo)

			function curlyRedOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы и жирная кожа головы, вам подойдет шампунь Schwarzkopf Bonacure Curl Bounce. Профессиональное средство для кудрявых волос производства Германии содержит сразу несколько полезных компонентов: Curl memory – новая система, придающая завитку красивую и упругую форму; Вытяжка кактуса – регулирует водный и липидный баланс эпидермиса, обладает очень сильным увлажняющим эффектом; Д-пантенол – закрывает и восстанавливает волосяные кутикулы; Масло абрикосовой косточки – питает шевелюру и служит защитой от внешних воздействий. Главной особенностью этого средства является его чрезвычайно легкая текстура. Она помогает справиться даже с самыми непослушными локонами и не утяжеляет их.";
				text.classList.add("newText");
			}
			function curlyRedOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас кудрявые волосы и жирная кожа головы, вам подойдет шампунь Schwarzkopf Bonacure Curl Bounce. Профессиональное средство для кудрявых волос производства Германии содержит сразу несколько полезных компонентов: Curl memory – новая система, придающая завитку красивую и упругую форму; Вытяжка кактуса – регулирует водный и липидный баланс эпидермиса, обладает очень сильным увлажняющим эффектом; Д-пантенол – закрывает и восстанавливает волосяные кутикулы; Масло абрикосовой косточки – питает шевелюру и служит защитой от внешних воздействий. Главной особенностью этого средства является его чрезвычайно легкая текстура. Она помогает справиться даже с самыми непослушными локонами и не утяжеляет их.";
				text.classList.add("newText");
			}
		}
	}
}

//----------------------------------------------4---------------------------------------

function afroHair() {
	imageOne.setAttribute ("src", "pictures/6.jpg");
	imageTwo.setAttribute ("src", "pictures/8.jpg");
	imageThree.setAttribute ("src", "pictures/7.jpg");
	imageFour.setAttribute ("src", "pictures/9.jpg");
	text.innerHTML = "Твой цвет волос:";
	buttonOne.innerHTML = "Блондин";
	buttonTwo.innerHTML = "Брюнет";
	buttonThree.innerHTML = "Шатен";
	buttonFour.innerHTML = "Рыжий";

	buttonOne.addEventListener("click", afroBlond);

	function afroBlond() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", afroBlondMix);
		function afroBlondMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroBlondMixColoredResultOne);
			buttonTwo.addEventListener("click", afroBlondMixUncoloredResultTwo)

			function afroBlondMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroBlondMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", afroBlondNormal);
		function afroBlondNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroBlondNormalColoredResultOne);
			buttonTwo.addEventListener("click", afroBlondNormalUncoloredResultTwo)

			function afroBlondNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroBlondNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}

		buttonTwo.addEventListener ("click", afroBlondDry);
		function afroBlondDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroBlondDryColoredResultOne);
			buttonTwo.addEventListener("click", afroBlondDryUncoloredResultTwo)

			function afroBlondDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroBlondDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", afroBlondOily);

		function afroBlondOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroBlondOilyColoredResultOne);
			buttonTwo.addEventListener("click", afroBlondOilyUncoloredResultTwo)

			function afroBlondOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroBlondOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}
	}

	buttonTwo.addEventListener("click", afroBlack);
	function afroBlack() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", afroBlackMix);
		function afroBlackMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroBlackMixColoredResultOne);
			buttonTwo.addEventListener("click", afroBlackMixUncoloredResultTwo)

			function afroBlackMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroBlackMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", afroBlackNormal);
		function afroBlackNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroBlackNormalColoredResultOne);
			buttonTwo.addEventListener("click", afroBlackNormalUncoloredResultTwo)

			function afroBlackNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroBlackNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", afroBlackOily);

		function afroBlackOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroBlackOilyColoredResultOne);
			buttonTwo.addEventListener("click", afroBlackdOilyUncoloredResultTwo)

			function afroBlackOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroBlackdOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}

		buttonTwo.addEventListener("click", afroBlackDry);

		function afroBlackDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroBlackDryColoredResultOne);
			buttonTwo.addEventListener("click", afroBlackDryUncoloredResultTwo)

			function afroBlackDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroBlackDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}
	}
	buttonThree.addEventListener("click", afroBrown);
	function afroBrown() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", afroBrownMix);
		function afroBrownMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroBrownMixColoredResultOne);
			buttonTwo.addEventListener("click", afroBrownMixUncoloredResultTwo)

			function afroBrownMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroBrownMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", afroBrownNormal);
		function afroBrownNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroBrownNormalColoredResultOne);
			buttonTwo.addEventListener("click", afroBrownNormalUncoloredResultTwo)

			function afroBrownNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroBrownNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}

		buttonTwo.addEventListener("click", afroBrownDry);

		function afroBrownDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroBrownDryColoredResultOne);
			buttonTwo.addEventListener("click", afroBrownDryUncoloredResultTwo)

			function afroBrownDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroBrownDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", afroBrownOily);

		function afroBrownOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroBrownOilyColoredResultOne);
			buttonTwo.addEventListener("click", afroBrownOilyUncoloredResultTwo)

			function afroBrownOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroBrownOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}
	}

	buttonFour.addEventListener("click", afroRed);
	function afroRed() {
		imageOne.setAttribute ("src", "pictures/10.jpg");
		imageTwo.setAttribute ("src", "pictures/11.jpg");
		imageThree.setAttribute ("src", "pictures/12.jpg");
		imageFour.setAttribute ("src", "pictures/13.jpg");
		text.innerHTML = "Твой тип волос по составу:";
		buttonOne.innerHTML = "Жирные";
		buttonTwo.innerHTML = "Сухие";
		buttonThree.innerHTML = "Нормальные";
		buttonFour.innerHTML = "Смешанные";

		buttonFour.addEventListener ("click", afroRedMix);
		function afroRedMix() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroRedMixColoredResultOne);
			buttonTwo.addEventListener("click", afroRedMixUncoloredResultTwo)

			function afroRedMixColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroRedMixUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}

		buttonThree.addEventListener ("click", afroRedNormal);
		function afroRedNormal () {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroRedNormalColoredResultOne);
			buttonTwo.addEventListener("click", afroRedNormalUncoloredResultTwo)

			function afroRedNormalColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroRedNormalUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}

		buttonTwo.addEventListener("click", afroRedDry);

		function afroRedDry() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroRedDryColoredResultOne);
			buttonTwo.addEventListener("click", afroRedDryUncoloredResultTwo)

			function afroRedDryColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroRedDryUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}

		buttonOne.addEventListener("click", afroRedOily);

		function afroRedOily() {
			imageOne.setAttribute ("src", "pictures/14.jpg");
			imageTwo.setAttribute ("src", "pictures/15.jpg");
			imageThree.style = "display: none";
			imageFour.style = "display: none";
			text.innerHTML = "Вы окрашиваете волосы?";
			buttonOne.innerHTML = "Да";
			buttonTwo.innerHTML = "Нет";
			buttonThree.style = "display: none";
			buttonFour.style = "display: none";

			buttonOne.addEventListener("click", afroRedOilyColoredResultOne);
			buttonTwo.addEventListener("click", afroRedOilyUncoloredResultTwo)

			function afroRedOilyColoredResultOne() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
			function afroRedOilyUncoloredResultTwo() {
				imageOne.style = "display: none";
				imageTwo.style = "display: none";
				imageThree.style = "display: none";
				imageFour.style = "display: none";
				buttonOne.style = "display: none";
				buttonTwo.style = "display: none";
				buttonThree.style = "display: none";
				buttonFour.style = "display: none";
				text.innerHTML = "Если у вас африканские волосы, держитесь подальше от шампуней с вазелином или минеральными маслами. Не выравнивайте ваши волосы слишком часто горячим утюжком, жар может их повредить. То же самое касается всех других термических средств для укладки волос. Мойте волосы раз в 3-7 дней. Африканские волосы быстро высыхают, если их часто мыть шампунем.";
				text.classList.add("newText");
			}
		}
	}
}