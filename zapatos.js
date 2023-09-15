const express = require('express');
const app = express();
const port = 3000;

const zapatosData = {
  zapatos: [{
    id: 1,  
      nombre: 'Nike For One In Boot',
      descripcion: 'They are very comfortable and also have a lot of urban style.',
      precio: 59.99,
      imagen: 'https://images.unsplash.com/photo-1512374382149-233c42b6a83b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    },
    {
      id: 2,
      nombre: 'New Balance 550',
      descripcion: 'Very cute and they are also very comfortable',
      precio: 49.99,
      imagen: 'https://images.unsplash.com/photo-1665517464780-ab4f42d8af95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2127&q=80',
    },
    {
        id: 3,
        nombre: 'Puma By BMW',
        descripcion: 'Lots of style and elegance',
        precio: 49.99,
        imagen: 'https://zshopp.com/wp-content/uploads/2021/04/blanco-8-600x600.jpg',
      },
    {
        id: 4,
        nombre: 'Nike Jordan 1 Low Red',
        descripcion: 'Inspired by the original AJ1 from 1985, the Air Jordan 1 Low offers a classic and clean look in a low-profile model ideal for a casual style.',
        precio: 49.99,
        imagen: 'https://images.unsplash.com/photo-1600181516264-3ea807ff44b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    },
    {
        id: 5,
        nombre: 'Superrep Go Training Shoe',
        descripcion: 'The Nike Superrep Go Combines The Fundamental Performance Elements of Cushioning, Flexibility And Support to Get you Moving In Station-Based Fitness Classes Or Streaming Workouts at Home.',
        precio: 49.99,
        imagen: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80',
    },
    {
        id: 6,
        nombre: 'Classic Nike',
        descripcion: 'Classic And Elegant',
        precio: 49.99,
        imagen: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    },
    {
        id: 7,
        nombre: 'Nike Air Max Dawn',
        descripcion: 'Perfect For Your Daily Runs',
        precio: 49.99,
        imagen: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e67fb2af-118a-4dd5-8283-2a630f50033e/calzado-air-max-dawn-224mWf.png',
    },
    {
        id: 8,
        nombre: 'Nike Sues Over Satan Shoes Promoted By Lil Nas X - The New York Times',
        descripcion: '“Luke 10:18” — a reference to the biblical passage that says, “I saw Satan fall like lightning from heaven” — printed on them.',
        precio: 49.99,
        imagen: 'https://static01.nyt.com/images/2021/03/30/multimedia/28xp-shoes-09/28xp-shoes-09-superJumbo.jpg?quality=75&auto=webp',
    },
  ],
};

// Ruta para obtener todos los zapatos
app.get('/api/zapatos', (req, res) => {
  res.json(zapatosData);
});

// Ruta para obtener un zapato por ID
app.get('/api/zapatos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const zapato = zapatosData.zapatos.find((item) => item.id === id);

  if (!zapato) {
    res.status(404).json({ error: 'Zapato no encontrado' });
  } else {
    res.json(zapato);
  }
});

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});




