let title = document.querySelector("div");
title.className = "title span4"
let thebigone = document.createElement("div");
thebigone.appendChild(title)

let lastCharIsOperator = false;
let operators = ["+", "-","*", "/","."];
let every = ["Ac","Del","/","1","2","3","*","4","5","6","+","7","8","9","-",".","0","="]

for (let index = 0; index < every.length; index++) {
    let btn = document.createElement("button");
    btn.appendChild(document.createTextNode(every[index]))

    if (every[index] === "=") {
        btn.addEventListener("click",()=>{
            if(!!title.textContent) title.innerText = eval(title.textContent)
         })
         btn.className = "span2"

    }else if (every[index] === "Ac"){
        btn.addEventListener("click",()=>{
            title.innerText = ""
        })
        btn.className = "span2"

    }else if (every[index] === "Del"){
        btn.addEventListener("click",()=>{
            let title_arr = [...title.textContent];
            title_arr.pop();
            title.innerText = title_arr.join("");
            lastCharIsOperator = operators.includes(title_arr[title_arr.length - 1]);

        })

    } else if (operators.includes(every[index])) {
        if (every[index] === "-") {
        btn.addEventListener("click", () => {
                if (!lastCharIsOperator) {
                    title.appendChild(document.createTextNode(every[index]))
                    lastCharIsOperator = true;
                }                
        });
    }else{
        btn.addEventListener("click", () => {
        if (!! title.textContent ) {
            if (!lastCharIsOperator) {
                title.appendChild(document.createTextNode(every[index]))
                lastCharIsOperator = true;
            }                
        }
    });}
    }else{
        btn.addEventListener("click",()=>{
            title.appendChild(document.createTextNode(every[index]))
            lastCharIsOperator = false;
        })

    }

    thebigone.appendChild(btn)
    thebigone.className = "grid" 
    document.body.appendChild(thebigone);
}

