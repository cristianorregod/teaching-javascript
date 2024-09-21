const post = [
    { id: 1, title: 'Mi primer post', image: 'https://img.com/1', tags: ['javascript', 'webdevelopment'] },
    {
        id: 2,
        title: 'Mi experiencia con React',
        image: 'https://img.com/2',
        tags: ['javascript', 'webdevelopment', 'react'],
    },
    {
        id: 3,
        title: 'Por qué dejé Angular',
        image: 'https://img.com/3',
        tags: ['javascript', 'webdevelopment', 'angular'],
    },
]

// metodos de arrays

//find permite buscar un elemento que contenga lo que estamos buscando 
const postWithAngular = post.find((p) => p.title === 'Por qué dejé Angular');
console.log(postWithAngular);

// Ejemplo de uso del método some
const hasPostWithReact = post.some((p) => p.tags.includes('react'));
console.log(hasPostWithReact);

// Ejemplo de uso del método every
const allPostsHaveJavascript = post.every((p) => p.tags.includes('javascript'));
console.log(allPostsHaveJavascript);

// Ejemplo de uso del método map
const titles = post.map((p) => p.title);
console.log(titles);

// Ejemplo de uso del método filter
const postWithoutImage = post.filter((p) => !p.image);
console.log(postWithoutImage);

// Ejemplo de uso del método reduce
const allTags = post.reduce((acc, p) => [...acc, ...p.tags], []);
console.log(allTags);

// Ejemplo de uso del método set
const uniqueTags = Array.from(new Set(allTags));
console.log(uniqueTags);

