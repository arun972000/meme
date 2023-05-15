let container=document.createElement("div");
container.setAttribute("class","container");

let row=document.createElement("div");
row.setAttribute("class","row")

container.append(row);


async function foo() {
    let p1 = await fetch("https://api.imgflip.com/get_memes");
    console.log(p1)
    let data1 = await p1.json();
    console.log(data1)
    for(let i=0;i<data1.data.memes.length;i++){
        console.log(data1.data.memes[i])
      row.innerHTML+=`<div class="col-sm-4 text-center">
        <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
        <img class="card-img-top" src="${data1.data.memes[i].url}" alt="Card image cap">
        <div class="card-header">${data1.data.memes[i].name
        }</div>
        <div class="card-body">
          <p class="card-title">ID: ${data1.data.memes[i].id}</p>
          <p class="card-title">Caption: ${data1.data.memes[i].captions}</p>
          <p class="card-title">Width: ${data1.data.memes[i].width}</p>
        
        </div>
      </div>
      </div>`
    }
    document.body.append(container)
  }

  foo()