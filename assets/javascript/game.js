//Create global variables
var hero;
var villain;

var characters = {};

[
	{
		name: "aragorn",
		strength: 4,
		hp: 150
	},
	{
		name: "legolas",
		strength: 3,
		hp: 130
	},
	{
		name: "gimli",
		strength: 5,
		hp: 120
	},
	{
		name: "gandalf",
		strength: 4,
		hp: 100
	},
	{
		name: "borimir",
		strength: 4,
		hp: 150
	},
	{
		name: "theoden",
		strength: 13,
		hp: 110
	},
	{
		name: "witchKing",
		strength: 30,
		hp: 150
	},
	{
		name: "balrog",
		strength: 40,
		hp: 200
	},
	{
		name: "saruman",
		strength: 25,
		hp: 110
	},
	{
		name: "lurtz",
		strength: 14,
		hp: 140
	},
	{
		name: "caveTroll",
		strength: 6,
		hp: 160
	}
	// etc etc
].forEach(function (characterOptions) {
	characters[characterOptions.name] = {
		hp: characterOptions.hp || Math.round(Math.random() * 150) +1,
		strength: characterOptions.strength || Math.round(Math.random() * 15) + 1,
		$elem: $("#" + characterOptions.name)
	};
});

function showstats(i) {
	console.log(i);
}

function attack() {
		this.villain.hp = (villain.hp - hero.strength);
		this.hero.hp = (hero.hp - villain.strength);
		this.hero.strength = (2 * hero.strength);
		this.hero.$elem.find(".hp").text(hero.hp);
		this.villain.$elem.find(".hp").text(villain.hp);
		animateHero();
		killVillain();
		killHero();
		alertVictory();
		alertDefeat();
		// console.log('results of find?', this.hero.$elem.find(".hp"));
}

$("#attack").click(function() {
	attack();
});


function animateHero() {
	var div = $(this.hero.$elem);
	console.log(this.hero.name);
	div.animate({left: "+=70px"}, "fast");
	div.animate({left: "-=70px"}, "fast");
}

function killVillain() {
	if(villain.hp <=0) {
		this.villain.$elem.find(".hp").text(0);
		$(this.villain.$elem).delay("slow").fadeOut();
	} else {}
}

function killHero() {
	if(hero.hp <=0) {
		this.hero.$elem.find(".hp").text(0);
		$(this.hero.$elem).delay("slow").fadeOut();
	} else {}
}

function alertVictory() {
	if(villain.hp <=0) {
		setTimeout(function() {	
			$("#villainBattleground").empty();
			$("#victory").css("visibility", "initial");
		}, 1000);
	} else{}
}

function alertDefeat() {
	if(hero.hp <=0) {
		setTimeout(function() {	
			$("#heroBattleground").empty();
			$("#defeat").css("visibility", "initial");
		}, 1000);
	} else{}
}

function stageEnd() {
	if($("#villainRow").find(".villain-box").length < 1 && $("#villainBattleground").find(".villain-box").length < 1 && $("#heroBattleground").find(".hero-box").length >= 1) {
		setTimeout(function() {
			$("#stage").css("display", "inline");
			$("#stageComplete").css("visibility", "initial");
		}, 1000);
		
	} else {}
	setTimeout("stageEnd()", 200);
}

stageEnd();

// TODO: consider using this
function heroClick () {
	var $this = $(this);
	var id = $this.attr('id');
	var character = characters[id];
	if(character) {
		console.log("character", character);
		if ($("#heroBattleground").find(".hero-box").length < 1) {
			$(this).appendTo("#heroBattleground");
			$(this).find(".hp").append(character.hp);
			hero = character;
			$("#defeat").css("visibility", "hidden");
		}	
	} else {
		console.log("hero isn't in array");
	}
}

$(".hero-box").on("click", heroClick);

function villainClick () {
	var $this = $(this);
	var id = $this.attr('id');
	var character = characters[id];
	if(character) {
		console.log("character", character);
		if ($("#villainBattleground").find(".villain-box").length < 1) {
			$(this).appendTo("#villainBattleground");
			$(this).find(".hp").append(character.hp);
			villain = character;
			$("#victory").css("visibility", "hidden");
		}
	} else {
		console.log("villain isn't in array");
	}	
}

$(".villain-box").on("click", villainClick);




//Make Hp attatched to each character

//create an attack value for characters
//create a function to select heros and villains
//create an attack function
//create a win/loss trigger once a character reaches 0hp