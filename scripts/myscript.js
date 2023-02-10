// Datos del Personal
const personal = [
	{
		id: 1,
		nombre: "Ana Lopez",
		trabajo: "Desarrolladora Web",
		foto: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		nombre: "Rosa Martinez",
		trabajo: "Desarrolladora Web",
		foto: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
		text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
	},
	{
		id: 3,
		nombre: "Pedro Rodriguez",
		trabajo: "Becario",
		foto: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
		text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
	},
	{
		id: 4,
		nombre: "Marcos Alonso",
		trabajo: "El Jefe",
		foto: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
	{
		id: 5,
		nombre: "Sara Alonso",
		trabajo: "Diseñadora UX",
		foto: "./persona-1.jpeg",
		text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui deleniti incidunt alias porro. Dolores possimus dolorum saepe beatae alias repudiandae. ",
	},
]

const $d = document,
	$anterior = $d.querySelector(".prev-btn"),
	$siguiente = $d.querySelector(".next-btn"),
	$imagen = $d.querySelector(".img-contenedor img"),
	$nombre = $d.querySelector("#nombre"),
	$trabajo = $d.querySelector("#trabajo"),
	$info = $d.querySelector("#info"),
	$sorprendeme = $d.querySelector(".random-btn")

function random(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function mostrarAleatorio() {
	let aleatorio
	do {
		aleatorio = random(0, personal.length - 1)
	} while (aleatorio == count)

	$imagen.src = personal[aleatorio].foto
	$nombre.innerHTML = personal[aleatorio].nombre
	$trabajo.innerHTML = personal[aleatorio].trabajo
	$info.innerHTML = personal[aleatorio].text
	count = aleatorio
}

let count = 0
$siguiente.addEventListener("click", (event) => {
	count == personal.length - 1 ? (count = 0) : count++
	$imagen.src = personal[count].foto
	$nombre.innerHTML = personal[count].nombre
	$trabajo.innerHTML = personal[count].trabajo
	$info.innerHTML = personal[count].text
})

$anterior.addEventListener("click", (event) => {
	if (count == 0) {
		count = personal.length
	}
	count--

	$imagen.src = personal[count].foto
	$nombre.innerHTML = personal[count].nombre
	$trabajo.innerHTML = personal[count].trabajo
	$info.innerHTML = personal[count].text
})

$sorprendeme.addEventListener("click", mostrarAleatorio)

$d.addEventListener("DOMContentLoaded", mostrarAleatorio)
