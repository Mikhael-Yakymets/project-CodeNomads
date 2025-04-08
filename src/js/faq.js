import Accordion from "accordion-js";
// import "accordion-js/dist/accordion.min.css";

// new Accordion('.accordion-container-faq');

const container = document.querySelector('.accordion-container-faq');
const accordion = new Accordion(container, {
    showMultiple: true,
    onOpen: (currEl) => console.log('Open!', currEl)
});
 

