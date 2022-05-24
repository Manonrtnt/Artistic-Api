const url = "https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=galeries-d-art-et-lieux-d-exposition&q=";
let lieuxExpo = document.getElementById("listExpo");
let infoExpo = document.getElementById("infoExpo");
let iframe = document.querySelector("iframe");

async function displayExpo(){
    const response =  await fetch(url);
    const data =  await response.json();

    for (let i in data.records) {
        let newButton = document.createElement("button");
        newButton.setAttribute("id", "button"+i);
        newButton.textContent = data.records[i].fields.nom_equipement;
        lieuxExpo.appendChild(newButton);

        let button = document.getElementById("button" + i);

        button.addEventListener("click", function(e){
            
            e.preventDefault()
            infoExpo.innerHTML = 
            `<h3>`+data.records[i].fields.nom_equipement+`</h3>`+
            `<a target="_blank" href="http:\\`+data.records[i].fields.site_web+`">Site internet</a>`+
            `<p>Adresse : `+data.records[i].fields.numero+
            ` , `+data.records[i].fields.lib_off+
            ` `+data.records[i].fields.id_secteur_postal+
            ` `+data.records[i].fields.ville+`</p>`;
            
            iframe.style.display = 'none';
            infoExpo.style.display = 'block';
            infoExpo.style.padding = '10px';
            infoExpo.style.top = '173px';
            infoExpo.style.left = '664px';
            infoExpo.style.opacity = '0';
            infoExpo.style.animation = 'fadeIn 1.5s forwards';
            infoExpo.style.width = 'fit-content';

            initMap(i);
        });
        
        
    }
}
displayExpo();

function initMap(id){
    if(id == 0){
        infoExpo.innerHTML += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.018371749275!2d1.4452912162029548!3d43.626976562142744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebcab16d0eb11%3A0x3b4653aa68f6e838!2sLe%20BBB%20centre%20d&#39;art!5e0!3m2!1sfr!2sfr!4v1642071964238!5m2!1sfr!2sfr" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    } else if (id ==1) {
        infoExpo.innerHTML += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46236.07568393961!2d1.4249817342592042!3d43.59082487918708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc9f947bed9b%3A0xfc9787affb28ebae!2sCentre%20Culturel%20Bellegarde!5e0!3m2!1sfr!2sfr!4v1642072817478!5m2!1sfr!2sfr" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    } else if (id ==2){
        infoExpo.innerHTML += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.1515389759043!2d1.4379911004286676!3d43.60338627902053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb616021b411%3A0x704c98369e26de2e!2sCouvent%20des%20Jacobins!5e0!3m2!1sfr!2sfr!4v1642072917092!5m2!1sfr!2sfr" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    } else if (id ==3){
        infoExpo.innerHTML += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.3919024752204!2d1.4285904504284592!3d43.598381079020676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebb71c0449e23%3A0xf511c02120a65506!2sCentre%20Culturel%20Saint-Cyprien!5e0!3m2!1sfr!2sfr!4v1642072965083!5m2!1sfr!2sfr" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    } else if (id ==4){
        infoExpo.innerHTML += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.129683464801!2d1.4415737161939426!3d43.603841363637784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc9df7622add%3A0xbbe5c2539bb624c5!2sFondation%20Espace%20%C3%89cureuil%20pour%20l&#39;Art%20Contemporain!5e0!3m2!1sfr!2sfr!4v1642084825816!5m2!1sfr!2sfr" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    } else if (id ==5){
        infoExpo.innerHTML += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.5284182304194!2d1.4615976161935413!3d43.57470866551948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc41f2c7ea8b%3A0x3874773da9b8254b!2sMaison%20de%20quartier%20Rangueil!5e0!3m2!1sfr!2sfr!4v1642084872861!5m2!1sfr!2sfr" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    }else if (id ==6){
        infoExpo.innerHTML += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2890.721643531515!2d1.400685616193457!3d43.57068296577948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aea2d4ad6ad13d%3A0x2ecf2212fb29e810!2sCentre%20d&#39;animation%20Reynerie!5e0!3m2!1sfr!2sfr!4v1642084898320!5m2!1sfr!2sfr" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    } else if (id ==7){
        infoExpo.innerHTML += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.769617441387!2d1.4443551161940926!3d43.61133826315348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebca1a748ff43%3A0x2d5e6a252556d65c!2sSamba%20R%C3%A9sille!5e0!3m2!1sfr!2sfr!4v1642084922297!5m2!1sfr!2sfr" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    } else if (id ==8){
        infoExpo.innerHTML += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.5472104572473!2d1.4516899161941927!3d43.615968462854084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebcbb25cc77a9%3A0x30110f6f8e0a50fb!2sEspace%20Bonnefoy!5e0!3m2!1sfr!2sfr!4v1642084956062!5m2!1sfr!2sfr" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    } else if (id ==9){
        infoExpo.innerHTML += `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2889.3150547830755!2d1.4457451161939374!3d43.599981363886926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aebc9cab8e9959%3A0x388e58e7abe699c6!2sEspace%20Croix%20Baragnon%20-%20Salle%20Bleue!5e0!3m2!1sfr!2sfr!4v1642084986338!5m2!1sfr!2sfr" width="600" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    }
}