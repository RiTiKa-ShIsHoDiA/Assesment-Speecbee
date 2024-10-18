const closePopover = ()=>{
    console.log("chala");
    const userDetailsDiv = document.getElementById('user__details');
    userDetailsDiv.classList.add('hidden');
}

//show popover on click card
const showDetails = (id,name,image,designation,userCompany,aboutUs) =>{
    console.log("chala",name);
    const userDetailsDiv = document.getElementById('user__details');
    const userName = document.querySelector('.user__popover-name');
    const userImage = document.getElementById('profile_pic')
    const userDesignation = document.querySelector('.user__popover-designation');
    const userOrganization =  document.querySelector('.user__popover-organization');
    const userAboutUs = document.querySelector('.user__about__us');


    userName.textContent = name;
    userImage.src = image;
    userDesignation.textContent = designation;
    userOrganization.textContent = userCompany
    userAboutUs.textContent = aboutUs;
   
    userDetailsDiv.classList.remove('hidden');

    
  }  