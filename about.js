let product = [
    {
      id: 1,
      name: " 14inch-ombre full frontal bob" ,
      img: "https://i.postimg.cc/zXbjK4GD/14inch-ombre2.webp",
      price: "R1500",
    },
    
    {
      id: 2,
      name: "4x4 frontal bob",
      img: "https://i.postimg.cc/3JYGJ60b/IMG-20230327-WA0124-76b5f201-e634-48e9-9dc9-67f7690bd2a8.webp",
      price: "R1500",
    },
    
    {
      id: 3,
      name: "30inch Malaysian full frontal  ",
      img: "https://i.postimg.cc/Pf6Z6yRL/malaysian-full-frontal-culry-30inch.jpg",
      price: "R8000",
    },
    
    {
      id: 4,
      name: "30inch full frontal kinky ",
      img: "https://i.postimg.cc/C5GZ7LyV/images-3.jpg",
      price: "R5000",
    },
    {
        id: 4,
        name: "Rose Pink 35inch Straight full frontal ",
        img: "https://i.postimg.cc/NfBsHv4m/rose-pink.jpg",
        price: "R4000",
      },
      

  ];
  
  let dispProduct = document.querySelector(".mona");
  product.forEach((data) => {
    dispProduct.innerHTML += `
      <div class= "card  col-3">
      <img src="${data.img}" class="">
      <h4 class="">${data.name}</h4>
      <div class="card-body">
      
      </div>
      </div>`;
  });