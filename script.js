// console.log("Hello Viewers")

const searchWrapper = document.querySelector(".search");
const inputBox = searchWrapper.querySelector(".input");
const suggestionBox = searchWrapper.querySelector(".auto-search");

inputBox.onkeyup = (e)=>{
    // console.log(e.target.value);
    let userData = e.target.value;
    let emptyArray =[];
    if(userData){
        emptyArray = suggestions.filter((data)=>{

            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        }); 
        // console.log(emptyArray);
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggestionBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++){
            allList[i].setAttribute("onclick" , "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active");
    }
}

function select(element){
    let selectUserData = element.textContent;
    // console.log(selectUserData);
    inputBox.value = selectUserData;
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join(' ');
    }
    suggestionBox.innerHTML = listData;
}

document.querySelector(".sbtn").addEventListener("click", searchfunction = () =>{ 
    var searchTerm = document.querySelector(".input").value.toLowerCase();
    switch(searchTerm) {
        case "black soil":
            window.open("black-soil.html");
            break;
        case "rock soil":
            window.open("rock-soil.html");
            break;
        case "white soil":
            window.open("white-soil.html");
            break;
        case "red soil":
            window.open("red-soil.html");
            break;
        case "basalt rock":
            window.open("basalt-rock.html");
            break;
        case "alluvial soil":
            window.open("alluvial.html");
            break;
        case "black cotton soil":
            window.open("black-cotton-soil.html");
            break;
        case "red & yellow soil":
            window.open("red-yellow-soil.html");
            break;
        case "laterite soil":
            window.open("laterite.html");
            break;
        case "mountainous or forest soil":
            window.open("forest-soil.html");
            break;
        case "saline soil":
            window.open("saline-soil.html");
            break;
        case "alkaline soil":
            window.open("alkaline-soil.html");
            break;
        case "peaty soil":
            window.open("peaty-soil.html");
            break;
        case "marshy soil":
            window.open("marshy-soil.html");
            break;
        default:
            alert("Sorry, no results found for your search.");
            break;
    }
});


// document.querySelector(".sbtn").addEventListener("click", searchfunction = () =>{ 
//     var x = "Black Soil";
//     var y = "Rock Soil";
//     // var x = "White Soil";
//     // var x = "Red Soil";
//     // var x = "Basalt Rock";
//     // var x = "Alluvial Soil";
//     // var x = "Black Cotton Soil";
//     // var x = "Red & Yellow Soil";
//     // var x = "Laterite Soil";
//     // var x = "Mountainous or Forest Soil";
//     // var x = "Saline Soil";
//     // var x = "Alkaline Soil";
//     // var x = "Marshy Soil";
//     // var x = "Peaty Soil";
//     if (x === "Black Soil"){
//         window.open("black-soil.html");
//     }
//     // else{
//     //     return false;
//     // };

//     if (x === "Rock Soil"){
//         window.open("rock-soil.html");
//     }
//     // else if (x === "White Soil"){
//     //     window.open("white-soil.html");
//     // }
//     // else if (x === "Red Soil"){
//     //     window.open("red-soil.html");
//     // }
//     // else if (x === "Basalt Rock"){
//     //     window.open("basalt-rock.html");
//     // }
//     // else if (x === "Alluvial Soil"){
//     //     window.open("alluvial.html");
//     // }
//     // else if (x === "Black Cotton Soil"){
//     //     window.open("black-cotton-soil.html");
//     // }
//     // else if (x === "Red & Yellow Soil"){
//     //     window.open("red-yellow-soil.html");
//     // }
//     // else if (x === "Laterite Soil"){
//     //     window.open("laterite.html");
//     // }
//     // else if (x === "Mountainous or Forest Soil"){
//     //     window.open("forest-soil.html");
//     // }
//     // else if (x === "Saline Soil"){
//     //     window.open("saline-soil.html");
//     // }
//     // else if (x === "Alkaline Soil"){
//     //     window.open("alkaline-soil.html");
//     // }
//     // else if (x === "Peaty Soil"){
//     //     window.open("peaty soil.html");
//     // }
//     // else if (x === "Marshy Soil"){
//     //     window.open("marshy-soil.html");
//     // }
// });
// document.querySelector(".sbtn").addEventListener("click", searchfunction1 = () =>{ 
//     var y = "Marshy Soil" ;
//     if (y === "Marshy Soil"){
//         window.open("marshy-soil.html");
//     }

// });
// document.querySelector(".sbtn").addEventListener("click", searchfunction2 = () =>{ 
//     var z = "Rock Soil" ;
//     if (z === "Rock Soil"){
//         window.open("rock-soil.html");
//     }

// });
// document.querySelector(".sbtn").addEventListener("click", searchfunction = () =>{ 
//     var x = "Black Soil" ;

// });
// document.querySelector(".sbtn").addEventListener("click", searchfunction = () =>{ 
//     var x = "Black Soil" ;

// });