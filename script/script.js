// faq-section 

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close all other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle the clicked item
            item.classList.toggle('active');
        });
    });
});



// scroll gsap property


  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  gsap.utils.toArray('.roadMap').forEach((roadMap, index) => {
    const content = roadMap.querySelector('.content');
    const date = roadMap.querySelector('.date');
    const icon = roadMap.querySelector('.icon');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: roadMap,
        start: 'top 80%',
        end: 'bottom 70%',
        toggleActions: 'play none none reverse',
        // markers: true // Uncomment for debugging
      }
    });

    tl.from(content.children, {
      opacity: 0,
      y: 50,
      duration: 0.5,
      stagger: 0.2
    })
    .from(icon, {
      scale: 0,
      duration: 0.3
    }, "-=0.5")
    .from(date, {
      opacity: 0,
      y: -20,
      duration: 0.3
    }, "-=0.3");
  });

  // Example of smooth scroll to specific section using GSAP ScrollToPlugin
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      gsap.to(window, {duration: 1, scrollTo: this.getAttribute('href')});
    });
  });