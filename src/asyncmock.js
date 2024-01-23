const productos = [
    {
        id: "1",
        nombre: "Paredes y Techos",
        idCat: "Rodillos",
        precio: 2100,
        img: "../img/rodillo1.jpg",
        stock: 100,
        desc: "Su pelo largo lo hace ideal para una mayor carga de pintura. Ideal para techos y superficies irregulares."
    },

    {
        id: "2",
        nombre: "Microfibra",
        idCat: "Rodillos",
        precio: 2100,
        img: "../img/rodillo2.jpg",
        stock: 100,
        desc: "Pelo intermedio, elaborado con hilado, monofilamento. Sin desprendimiento de pelus, deja una terminación diferencial sobre todo en satinado."
    },

    {
        id: "3",
        nombre: "Epoxi",
        idCat: "Rodillos",
        precio: 2300,
        img: "../img/rodillo3.jpg",
        stock: 100,
        desc: "Pelo Corto, compacto, sin desprendimiento de pelusa, ideal para epoxi y poliuretanos."
    },

    {
        id: "4",
        nombre: "Antigota",
        idCat: "Rodillos",
        precio: 2500,
        img: "../img/rodillo4.jpg",
        stock: 100,
        desc: "Pelo medio, permite la aplicación de pintura evitando el goteo. Ideal para piletas, techos y para todo tipo de superficies. Excelente terminación."
    },

    {
        id: "5",
        nombre: "Hogar",
        idCat: "Rodillos",
        precio: 2400,
        img: "../img/rodillo5.jpg",
        stock: 100,
        desc: "Lana natural tejida, de pelo largo, lo que otorga una alta capacidad de carga y poder cubritivo."
    },

    {
        id: "6",
        nombre: "Cuero Lanar",
        idCat: "Rodillos",
        precio: 2200,
        img: "../img/rodillo6.jpg",
        stock: 100,
        desc: " Rodillo profesional. Ideal para todo tipo de superficies."
    },

    {
        id: "7",
        nombre: "Dorado",
        idCat: "Rodillos",
        precio: 2600,
        img: "../img/rodillo7.jpg",
        stock: 100,
        desc: "Altura y densidad de lana seleccionada para una óptima carga de pintura, especial para superficies rugosas."
    },

    {
        id: "8",
        nombre: "EG Plus",
        idCat: "Rodillos",
        precio: 2700,
        img: "../img/rodillo8.jpg",
        stock: 100,
        desc: "La mayor altura y densidad de Lana seleccionada permite una mayor carga de pintura y un poder de cubrimiento óptimo desde la primera mano en todo tipo de superficie."
    },

    {
        id: "1000",
        nombre: "Bandeja de Colgar",
        idCat: "Bandejas",
        precio: 3600,
        img: "../img/bandeja1.jpg",
        stock: 100,
        desc:"Capacidad de de carga máxima: 4lt."
    },

    {
        id: "1001",
        nombre: "Bandeja de Colgar Economica",
        idCat: "Bandejas",
        precio: 3200,
        img: "../img/bandeja2.jpg",
        stock: 100,
        desc:"Capacidad de de carga máxima: 4lt."
    },

    {
        id: "1002",
        nombre: "Bandeja Chata",
        idCat: "Bandejas",
        precio: 4600,
        img: "../img/bandeja3.png",
        stock: 100,
        desc:"Capacidad de de carga máxima: 1lt."
    },

    {
        id: "1003",
        nombre: "Bandeja Chata Economica",
        idCat: "Bandejas",
        precio: 4000,
        img: "../img/bandeja4.png",
        stock: 100,
        desc:"Capacidad de de carga máxima: 1lt."
    },

    {
        id: "1004",
        nombre: "Handy Paint",
        idCat: "Bandejas",
        precio: 3000,
        img: "../img/bandeja5.jpg",
        stock: 100,
        desc:"Exclusivo imán sujeta pincel. Capacidad de de carga máxima: 1lt"
    },

    {
        id: "2001",
        nombre: "Profesional",
        idCat: "Pinceles",
        precio: 1500,
        img: "../img/pincel1.jpg",
        stock: 100,
        desc: "Cerda de color negra, uso para todo tipo de pinturas. Mayor carga transfiriendo suavemente la pintura a la superficie, de fácil limpieza."
    },

    {
        id: "2002",
        nombre: "Brocha redonda",
        idCat: "Pinceles",
        precio: 1700,
        img: "../img/pincel2.jpg",
        stock: 100,
        desc: "Brocha de cerda sintética que se puede utilizar en distintas direcciones, con acabados prolijos y parejos. Ideal para pintar muebles y grandes superficies. Especial para pintura a la tiza."
    },

    {
        id: "2003",
        nombre: "Silver",
        idCat: "Pinceles",
        precio: 2000,
        img: "../img/pincel3.jpg",
        stock: 100,
        desc: "Cabo inyectado plateado con cerdas sintéticas afinadas, optima terminación y durabilidad. Excelente relación precio-producto."

    }

]

export const getProductos = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}


