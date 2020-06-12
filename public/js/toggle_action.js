/* Toggle button action */

function toggleHandler (body, button, header, navLink, toggleImg){

    let listClassHeader = header.classList;
    for(let element of listClassHeader){
        console.log(element);
    }

    //Listen Action Click In Toggle_Button
    button.addEventListener("click", (event) => {
        console.log("clicked in button");
        event.stopImmediatePropagation();
        event.stopPropagation();
        event.preventDefault();
        //Go back To Verified If CloseHeader Class Is in Element Header_Section
        let states = header.classList.contains("closeHeader");
        if(states){
            console.log("classlist contains closeHeader");
            //Remove closeHeader Class in Element Header_Section
            header.classList.add("openHeader");
            header.classList.remove("closeHeader");
            toggleImg.classList.add("hidden");
        } else{
            console.log("classlist don't contains closeHeader");
            //Remove closeHeader Class in Element Header_Section
            header.classList.remove("openHeader");
            header.classList.add("closeHeader");
            toggleImg.classList.remove("hidden");
        }
    })

    //Listen Action Click In All Nav_Link Link's of NavBar
    for(let element of navLink){
        element.addEventListener("click", () => {
            console.log("clicked in nav link");
            //Remove closeHeader Class in Element Header_Section
            header.classList.remove("openHeader");
            header.classList.add("closeHeader");
            toggleImg.classList.remove("hidden");
        })
    }
    //Listen Click In All Body
    body.addEventListener("click", () => {
        if(header.classList.contains("openHeader")){
            console.log("clicked in body true");
            header.classList.remove("openHeader");
            header.classList.add("closeHeader");
            toggleImg.classList.remove("hidden");
        } else{
            console.log("clicked in body false");
        }
    })
}