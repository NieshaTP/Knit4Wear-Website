let themeButton = document.getElementById("theme-button");


const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");




}
themeButton.addEventListener("click", toggleDarkMode);

const signNowButton = document.querySelector('#sign-now-button');
const signatureForm = document.querySelector('#signature-form');

const getFormData = () => {
    const nameInput = document.getElementById('name-input').value;
    const hometownInput = document.getElementById('hometown-input').value;
    const emailInput = document.getElementById('email-input').value;

    return {
        name: nameInput,
        hometown: hometownInput,
        email: emailInput
    };
}

// Function to add a signature using the person object
const addSignature = (person) => {
    // Get the name, hometown, and email from the person object
    const nameInput = person.name;
    const hometownInput = person.hometown;
    const emailInput = person.email;

    // Check if both name and hometown are not empty
    if (nameInput.trim() !== '' && hometownInput.trim() !== '') {
        // Create a new paragraph element to display the new signature
        const newSignature = document.createElement('p');

        // Format the new signature with the name and hometown
        newSignature.textContent = `🖊 ${nameInput} from ${hometownInput} supports this.`;

        // Find the signatures section and append the new signature
        const signaturesSection = document.querySelector('.signatures');
        signaturesSection.appendChild(newSignature);

        // Save the new signature to local storage (uncomment when needed)


      toggleModal(person);
    }
}

// Function to toggle the modal
function toggleModal(person) {
    // Select the modal and modal content elements
    const nameInput = person.name;
    const hometownInput = person.hometown;
  const modal = document.getElementById('thanks-modal');
    const modalContent = document.getElementById('thanks-content-modal');

    // Set the display style property of the entire modal to flex
    modal.style.display = 'flex';

    // Customize the content of the modal based on the provided person information
    modalContent.textContent = `Woop Woop! Thanks, ${nameInput} from ${hometownInput}, for your support!`;
  

  setTimeout(() => {
    modal.style.display = "none";
  }, 4000)
}


// Event listener for form submission
document.getElementById('sign-petition').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const person = getFormData();
    addSignature(person);
});

// Function to save the signature to local storage
function saveSignature(name, hometown) {
    const signatures = JSON.parse(localStorage.getItem('signatures')) || [];
    signatures.push({ name, hometown });
    localStorage.setItem('signatures', JSON.stringify(signatures));
}

// Function to load and display saved signatures
function loadSignatures() {
    const signaturesSection = document.querySelector('.signatures');
    const signatures = JSON.parse(localStorage.getItem('signatures')) || [];

    signatures.forEach((signature) => {
        if (typeof signature.name === 'string' && typeof signature.hometown === 'string') {
            if (signature.name.trim() !== '' && signature.hometown.trim() !== '') {
                const newSignature = document.createElement('p');
                newSignature.textContent = `${signature.name} from ${signature.hometown}`;
                signaturesSection.appendChild(newSignature);
            }
        }
    });
}

// Call the function to load and display saved signatures when the page loads
//window.addEventListener('load', loadSignatures);

// Register the click event listener for the "Sign Now" button
signNowButton.addEventListener('click', addSignature);

// Register a submit event listener for the form
//signatureForm.addEventListener('submit', addSignature);


  // Format the new signature with the name and hometown



let animation = {
revealDistance: 150,
initialOpacity: 0,
transitionDelay: 0,
transitionDuration: '2s',
transitionProperty: 'all',
transitionTimingFunction: 'ease',
}

let revealableContainers = document.querySelectorAll(".revealable");

function reveal() {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
  if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add("active");
    } else {
      revealableContainers[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", reveal);

