// get the divs where the elements are going to be put in
const subBox = document.querySelectorAll('.sub-box');

async function data(time) {  
    let response = await fetch('data.json');
    let data = await response.json();

    subBox.forEach((box, i) => { // loop through each subBox element
        let name = data[i].title; // get the title from the corresponding data item
        const lowercaseName = name.toLowerCase(); //this is for the names for the icons later

        // remove existing imgIcon and dbBox elements
        const existingimgIcon = box.querySelector('.icons');
        const existingdbBox = box.querySelector('.dark-blue-box');

        if (existingimgIcon) {
            box.removeChild(existingimgIcon);
        }

        if (existingdbBox) {
            box.removeChild(existingdbBox);
        }

        // this is the div to contain the respective icons
        const imgIcon = document.createElement("img");
        imgIcon.classList.add("icons");
        imgIcon.setAttribute("id","lowercaseName.replace(/\s/g, '')");
        imgIcon.src = `images/icon-${lowercaseName.replace(/\s+/g, '-')}.svg`
        imgIcon.alt = `icon-${lowercaseName.replace(/\s+/g, '-')}`;

        // this is the div to contain label-title div and label-time div
        const dbBox = document.createElement("div");
        dbBox.classList.add("dark-blue-box");

        // this is the label-title div to contain label (div) and icon-ellipsis img (div)
        const labelTitle = document.createElement("div");
        labelTitle.classList.add('label-title');

        // this is the cLabel label (div)
        const cLabel = document.createElement("label");  
        cLabel.textContent = `${name}`;
        cLabel.classList.add('title');

        // this is the icon-ellipsis img (div)
        const img = document.createElement("img");
        img.classList.add('icon-ellipsis');
        img.src = `images/icon-ellipsis.svg`;
        img.alt = `icon-ellipsis`;

        // this is the label-time div to contain current-hr div and previous-hr div
        const labelTime = document.createElement("div");
        labelTime.classList.add('label-time');

        const currHours = document.createElement("div");
        currHours.textContent = `${time == "Daily" ? (data[i].timeframes.daily.current): time == "Weekly" ? (data[i].timeframes.weekly.current) : (data[i].timeframes.monthly.current)}hrs`;
        currHours.classList.add('current-hr');
        
        const prevHours = document.createElement("div");
        prevHours.textContent = `${time == "Daily" ? ('Yesterday - '  + data[i].timeframes.daily.previous): time == "Weekly" ? ('Last week - ' + data[i].timeframes.weekly.previous) : ('Last month - ' + data[i].timeframes.monthly.previous)}hrs`;
        prevHours.classList.add('previous-hr');

        // Now to append all the elements back layer by layer
        labelTitle.appendChild(cLabel); // append cLabel to the current labelTitle element
        labelTitle.appendChild(img); // append img to the current labelTitle element

        labelTime.appendChild(currHours);
        labelTime.appendChild(prevHours);

        dbBox.appendChild(labelTitle);
        dbBox.appendChild(labelTime);

        box.appendChild(imgIcon);
        box.appendChild(dbBox);
    });
}

data('Daily'); // this is to display the default