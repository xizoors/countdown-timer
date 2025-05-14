let countdownInterval;
let countdownDisplay = document.getElementById('countdown')

    function startCountdown() {
      clearInterval(countdownInterval); // مسح أي عداد سابق
      const dateInput = document.getElementById("choosen-time").value;
      let days = document.getElementById('day');
      let hours = document.getElementById('hours');
      let minutes = document.getElementById('Minutes');
      let seconds = document.getElementById('Seconds');
      console.log(days);
      console.log(hours);
      console.log(minutes);
      console.log(seconds);

      if (!dateInput) {
        alert("pls choose time");
        return;
      }

      const targetTime = new Date(dateInput).getTime();

      countdownInterval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetTime - now;

        if (distance <= 0) {
          clearInterval(countdownInterval);
          countdownDisplay.textContent = "time finshed.";
          countdownDisplay.style.color = '#a7ffe2';
          countdownDisplay.style.fontWeight = '600'
          return;
        }

        let day = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let second = Math.floor((distance % (1000 * 60)) / 1000);

        days.innerHTML = `${String(day).padStart(2, '0')}`;
        hours.innerHTML = `${String(hour).padStart(2, '0')}`;
        minutes.innerHTML = `${String(minute).padStart(2, '0')}`;
        seconds.innerHTML = `${String(second).padStart(2, '0')}`;

      }, 1000);
    }