const apiUrl = "https://restaurant.stepprojects.ge/api/Products/GetAll";


function createText(parent,value,fontsize,fontcolor){
    let name = document.createElement("p")
    document.getElementById(`${parent}`).appendChild(name)
    let namenode = document.createTextNode(`${value}`)
    name.appendChild(namenode)
    name.style.fontSize = `${fontsize}px`
    name.style.color = `${fontcolor}`
}
function createImg(parent,src){
    let img = document.createElement("img")
    document.getElementById(`${parent}`).appendChild(img)
    img.setAttribute("src",`${src}`)
}
function createDiv(parent_id,self_id,self_class){
    let div = document.createElement("div")
    document.getElementById(`${parent_id}`).appendChild(div)
    div.setAttribute("id", `${self_id}`)
    div.setAttribute("class", `${self_class}`)
}

fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
        for(i = 0; i < data.length; i++){
            createDiv("body",i,i)
            createImg(i,data[i].image)
            createText(i,data[i].name,20)
            createText(i,"$"+data[i].price,15)
            switch(data[i].spiciness) {
                case 0:
                    createText(i,"spiciness: "+"None")
                  break;
                case 1:
                  createText(i,"spiciness: "+"Mild",18,"lightgreen")
                  break;
                case 2:
                  createText(i,"spiciness: "+"Mild+",18,"green")
                  break
                case 3:
                  createText(i,"spiciness: "+"Medium",18,"darkorange")
                  break
                case 4:
                  createText(i,"spiciness: "+"Hot🔥",18,"red")
                  break
                default:
                    console.log(error)
                  // code block
            }
            if(data[i].nuts || data[i].vegeterian == true){
                if(data[i].nuts && data[i].vegeterian == true){
                    createText(i,"includes nuts and is vegeterian")
                }else{
                    if (data[i].nuts == true) {
                        createText(i,"includes nuts")
                    }else{
                        createText(i,"vegeterian")
                    }
                }
            }  
         }
    })