// Seu código aqui!

const products = [
  {
    id: 1,
    name: 'Iphone 11',
    tags: ['smartphone', 'tech', 'apple']
  },
    {
    id: 2,
    name: 'Macbook Pro',
    tags: ['laptop', 'tech', 'apple']
  },
    {
    id: 3,
    name: 'JBL Headphones',
    tags: ['headphone', 'tech', 'jbl']
  },
    {
    id: 4,
    name: 'Nike Shorts',
    tags: ['shorts', 'clothing', 'nike']
  },
];


let sortInfo = []

function filterProducts(infoString) {
  products.forEach(element => 
    element.tags.forEach(tags => {if(tags === infoString) {
      sortInfo.push(element)
    }
      })
        )

  console.log(sortInfo)
}

filterProducts('tech')

// Declare sua funçao aqui. Nao se esqueça de invocar a função para conseguir testar!
