$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

const counters = document.querySelectorAll('.counter');
const speed = 200; // The lower the slower

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;

    // Lower inc to slow and higher to slow
    const inc = target / speed;

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      const nextCount = Math.ceil(count + inc); // Round up to integer value
      counter.innerText = nextCount;

      // Call function every ms
      setTimeout(updateCount, 3);
    } else {
      counter.innerText = target;
    }

    // Create and append plus symbol after the number
    if (count >= target) {
      const plusSymbol = document.createElement('span');
      plusSymbol.innerText = ' +';
      counter.appendChild(plusSymbol);

      plusSymbol.style.color = '#ffa31a'; // Set color to orange
    }
  };

  updateCount();
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

